const API_BASE = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api").replace(/\/$/, "");

let accessToken = null;

export function setAccessToken(token) {
  accessToken = token || null;
}

export function getAccessToken() {
  return accessToken;
}

export function getApiBase() {
  return API_BASE;
}

async function rawFetch(path, options = {}) {
  const headers = { "Content-Type": "application/json", ...(options.headers || {}) };
  if (accessToken) headers.Authorization = `Bearer ${accessToken}`;
  return fetch(`${API_BASE}${path}`, {
    ...options,
    headers,
    credentials: "include",
  });
}

async function refreshAccessToken() {
  try {
    const res = await fetch(`${API_BASE}/auth/refresh`, {
      method: "POST",
      credentials: "include",
    });
    if (!res.ok) return false;
    const data = await res.json().catch(() => null);
    if (data?.accessToken) {
      accessToken = data.accessToken;
      return true;
    }
    return false;
  } catch {
    return false;
  }
}

// Client-side fetch wrapper: attaches the bearer token, retries once via
// /auth/refresh on a 401 (the httpOnly refresh cookie travels automatically).
export async function apiFetch(path, options = {}) {
  let res = await rawFetch(path, options);
  if (res.status === 401 && !options._retried) {
    const refreshed = await refreshAccessToken();
    if (refreshed) {
      res = await rawFetch(path, { ...options, _retried: true });
    }
  }
  return res;
}

export async function apiJson(path, options = {}) {
  const res = await apiFetch(path, options);
  let data = null;
  try {
    data = await res.json();
  } catch {
    // no JSON body (e.g. 204)
  }
  if (!res.ok) {
    const message = data?.message || `Request failed (${res.status})`;
    const err = new Error(message);
    err.status = res.status;
    err.data = data;
    throw err;
  }
  return data;
}

// Uploads one or more files as multipart/form-data (e.g. product photos from
// the admin panel's drag-and-drop picker) and returns the parsed JSON
// response. Deliberately separate from apiFetch/rawFetch above rather than
// reusing them: those always set Content-Type: application/json, and
// overriding that for a FormData body would strip the multipart boundary
// the browser generates, which breaks the upload entirely - Content-Type
// for a file upload must be left for fetch to set on its own.
export async function apiUpload(path, formData) {
  async function send() {
    const headers = {};
    if (accessToken) headers.Authorization = `Bearer ${accessToken}`;
    return fetch(`${API_BASE}${path}`, {
      method: "POST",
      headers,
      body: formData,
      credentials: "include",
    });
  }

  let res = await send();
  if (res.status === 401) {
    const refreshed = await refreshAccessToken();
    if (refreshed) res = await send();
  }

  let data = null;
  try {
    data = await res.json();
  } catch {
    // no JSON body
  }
  if (!res.ok) {
    const message = data?.message || `Upload failed (${res.status})`;
    const err = new Error(message);
    err.status = res.status;
    err.data = data;
    throw err;
  }
  return data;
}

// Server Component / generateMetadata / sitemap fetch — never throws, so a
// backend outage degrades pages gracefully instead of failing the build.
// revalidate default was 3600s (1hr) - too long while the catalog is being
// actively edited in the admin panel: an add/delete there wouldn't show up
// on the storefront for up to an hour, which is exactly the "admin panel
// has 1 product, homepage still shows many" bug Mohammad hit. 60s keeps
// real caching benefit under normal traffic while making admin edits show
// up within a minute instead of possibly an hour.
export async function serverFetch(path, { revalidate = 60 } = {}) {
  try {
    const res = await fetch(`${API_BASE}${path}`, {
      next: { revalidate },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}
