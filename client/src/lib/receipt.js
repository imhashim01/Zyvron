import { formatPKR } from "./format";

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatReceiptDate(value) {
  if (!value) return "";
  try {
    return new Date(value).toLocaleString("en-PK", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return "";
  }
}

/**
 * Opens a new tab with a minimal, self-contained receipt document sized like
 * a thermal/courier delivery slip (narrow, ~80mm - the same width Daraz's
 * own slips print at) and triggers the browser's print dialog on it.
 *
 * Built as its own standalone HTML document rather than printed straight out
 * of the admin panel's page, so the receipt never has to fight the app's own
 * dark theme/CSS for print layout - it controls @page size and every style
 * itself, and nothing else on the admin page ends up in the printout.
 */
export function printOrderReceipt(order) {
  if (!order || typeof window === "undefined") return;

  const win = window.open("", "_blank", "width=380,height=640");
  if (!win) {
    window.alert("Please allow pop-ups for this site to print the receipt.");
    return;
  }

  const items = Array.isArray(order.items) ? order.items : [];
  const itemsHtml = items
    .map(
      (item) => `
        <tr><td colspan="2" class="item-name">${escapeHtml(item.title)}</td></tr>
        <tr>
          <td class="qty">${Number(item.quantity) || 0} x ${formatPKR(item.price)}</td>
          <td class="line-total">${formatPKR((Number(item.price) || 0) * (Number(item.quantity) || 0))}</td>
        </tr>`
    )
    .join("");

  const discountRow =
    order.discount > 0
      ? `<tr><td class="label">Discount${order.couponCode ? ` (${escapeHtml(order.couponCode)})` : ""}</td><td class="value">-${formatPKR(order.discount)}</td></tr>`
      : "";

  const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>Receipt ${escapeHtml(order.orderNumber || "")}</title>
<style>
  @page { size: 80mm auto; margin: 4mm 3mm; }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    width: 80mm;
    font-family: "Courier New", Courier, monospace;
    font-size: 11px;
    line-height: 1.4;
    color: #000;
    background: #fff;
  }
  .receipt { padding: 6px 4px; }
  .center { text-align: center; }
  .brand { font-size: 17px; font-weight: 700; letter-spacing: 1.5px; }
  .tagline { font-size: 9.5px; letter-spacing: 0.5px; margin-top: 1px; }
  hr { border: none; border-top: 1px dashed #000; margin: 6px 0; }
  table { width: 100%; border-collapse: collapse; }
  td { padding: 1px 0; vertical-align: top; }
  .item-name { padding-top: 5px; font-weight: 700; }
  .qty { color: #000; }
  .line-total { text-align: right; }
  .label { }
  .value { text-align: right; }
  .grand-total td { font-size: 13px; font-weight: 700; padding-top: 3px; }
  .meta .k { width: 32%; color: #333; }
  .footer { margin-top: 12px; font-size: 10px; }
  @media print {
    body { width: 80mm; }
  }
</style>
</head>
<body>
  <div class="receipt">
    <div class="center">
      <div class="brand">ZYVRON</div>
      <div class="tagline">TECH ACCESSORIES</div>
    </div>
    <hr />
    <table class="meta">
      <tr><td class="k">Order #</td><td>${escapeHtml(order.orderNumber || "")}</td></tr>
      <tr><td class="k">Date</td><td>${escapeHtml(formatReceiptDate(order.createdAt))}</td></tr>
      <tr><td class="k">Status</td><td>${escapeHtml(order.status || "")}</td></tr>
      <tr><td class="k">Payment</td><td>${escapeHtml(order.paymentMethod || "COD")}</td></tr>
    </table>
    <hr />
    <table>
      ${itemsHtml}
    </table>
    <hr />
    <table>
      <tr><td class="label">Subtotal</td><td class="value">${formatPKR(order.subtotal)}</td></tr>
      ${discountRow}
      <tr><td class="label">Shipping</td><td class="value">${order.shippingFee ? formatPKR(order.shippingFee) : "FREE"}</td></tr>
    </table>
    <hr />
    <table>
      <tr class="grand-total"><td class="label">TOTAL</td><td class="value">${formatPKR(order.total)}</td></tr>
    </table>
    <hr />
    <table class="meta">
      <tr><td class="k">Customer</td><td>${escapeHtml(order.customer?.name || "")}</td></tr>
      <tr><td class="k">Phone</td><td>${escapeHtml(order.customer?.phone || "")}</td></tr>
      <tr><td class="k">City</td><td>${escapeHtml(order.customer?.city || "")}</td></tr>
      <tr><td class="k">Address</td><td>${escapeHtml(order.customer?.address || "")}</td></tr>
    </table>
    <hr />
    <div class="center footer">
      Thank you for shopping with Zyvron!<br />
      Cash on Delivery - please have the exact amount ready.
    </div>
  </div>
</body>
</html>`;

  win.document.open();
  win.document.write(html);
  win.document.close();
  win.focus();
  win.print();
}
