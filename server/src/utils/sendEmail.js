const nodemailer = require("nodemailer");
const { smtp } = require("../config/env");

let transporter = null;

function getTransporter() {
  if (transporter) return transporter;
  transporter = nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.port === 465,
    auth: smtp.user ? { user: smtp.user, pass: smtp.pass } : undefined,
  });
  return transporter;
}

/** Sends an email. Never throws - logs and resolves false on failure so callers can stay non-blocking. */
async function sendEmail({ to, subject, html }) {
  if (!smtp.user || !smtp.pass) {
    console.warn(`[email] SMTP not configured - skipping send. Would have sent "${subject}" to ${to}`);
    console.warn(html);
    return false;
  }
  try {
    await getTransporter().sendMail({ from: smtp.from, to, subject, html });
    return true;
  } catch (err) {
    console.warn(`[email] Failed to send "${subject}" to ${to}: ${err.message}`);
    return false;
  }
}

const wrap = (title, bodyHtml) => `
  <div style="font-family:Arial,sans-serif;max-width:520px;margin:0 auto;color:#111">
    <h2 style="color:#05060a">${title}</h2>
    ${bodyHtml}
    <p style="margin-top:24px;font-size:12px;color:#888">Zyvron Tech Accessories</p>
  </div>
`;

function sendWelcomeEmail(user) {
  return sendEmail({
    to: user.email,
    subject: "Welcome to Zyvron",
    html: wrap("Welcome to Zyvron!", `<p>Hi ${user.name}, thanks for creating an account with us. Start browsing premium gadgets and smart tech.</p>`),
  });
}

function sendResetPasswordEmail(user, resetUrl) {
  return sendEmail({
    to: user.email,
    subject: "Reset your Zyvron password",
    html: wrap(
      "Reset your password",
      `<p>Hi ${user.name}, click the link below to reset your password. This link expires in 1 hour.</p>
       <p><a href="${resetUrl}" style="background:#00D9FF;color:#000;padding:10px 20px;border-radius:8px;text-decoration:none;font-weight:bold;">Reset Password</a></p>
       <p>If you didn't request this, you can safely ignore this email.</p>`
    ),
  });
}

function sendOrderConfirmationEmail(order) {
  if (!order.customer || !order.customer.email) return Promise.resolve(false);
  const itemsHtml = order.items
    .map((i) => `<li>${i.title} x ${i.quantity} - Rs. ${i.price * i.quantity}</li>`)
    .join("");
  return sendEmail({
    to: order.customer.email,
    subject: `Order confirmed - ${order.orderNumber}`,
    html: wrap(
      "Your order is confirmed",
      `<p>Hi ${order.customer.name}, thanks for your order <strong>${order.orderNumber}</strong>.</p>
       <ul>${itemsHtml}</ul>
       <p>Subtotal: Rs. ${order.subtotal}<br/>Discount: Rs. ${order.discount}<br/>Shipping: Rs. ${order.shippingFee}<br/><strong>Total: Rs. ${order.total}</strong></p>
       <p>Payment method: ${order.paymentMethod}</p>`
    ),
  });
}

function sendOrderStatusEmail(order) {
  if (!order.customer || !order.customer.email) return Promise.resolve(false);
  return sendEmail({
    to: order.customer.email,
    subject: `Order ${order.orderNumber} update: ${order.status}`,
    html: wrap(
      "Your order status has changed",
      `<p>Hi ${order.customer.name}, your order <strong>${order.orderNumber}</strong> is now: <strong>${order.status.toUpperCase()}</strong>.</p>`
    ),
  });
}

module.exports = {
  sendEmail,
  sendWelcomeEmail,
  sendResetPasswordEmail,
  sendOrderConfirmationEmail,
  sendOrderStatusEmail,
};
