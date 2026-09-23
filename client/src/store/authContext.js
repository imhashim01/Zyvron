"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { apiJson, getApiBase, setAccessToken } from "@/lib/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadMe = useCallback(async () => {
    try {
      const data = await apiJson("/auth/me");
      setUser(data.user || null);
    } catch {
      setUser(null);
    }
  }, []);

  useEffect(() => {
    (async () => {
      // Attempt a silent refresh first so a returning visitor with a valid
      // httpOnly refresh cookie gets a fresh access token without re-login.
      try {
        const res = await fetch(`${getApiBase()}/auth/refresh`, {
          method: "POST",
          credentials: "include",
        });
        if (res.ok) {
          const data = await res.json().catch(() => null);
          if (data?.accessToken) setAccessToken(data.accessToken);
        }
      } catch {
        // backend unreachable — proceed logged-out
      }
      await loadMe();
      setLoading(false);
    })();
  }, [loadMe]);

  const login = useCallback(async (email, password) => {
    const data = await apiJson("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    setAccessToken(data.accessToken);
    setUser(data.user);
    return data.user;
  }, []);

  const register = useCallback(async (payload) => {
    const data = await apiJson("/auth/register", {
      method: "POST",
      body: JSON.stringify(payload),
    });
    setAccessToken(data.accessToken);
    setUser(data.user);
    return data.user;
  }, []);

  const logout = useCallback(async () => {
    try {
      await apiJson("/auth/logout", { method: "POST" });
    } catch {
      // ignore network errors on logout
    }
    setAccessToken(null);
    setUser(null);
  }, []);

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    refresh: loadMe,
    isAuthenticated: !!user,
    isAdmin: user?.role === "admin",
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
