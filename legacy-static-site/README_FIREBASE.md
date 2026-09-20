ZYVRON FIREBASE SETUP

PROJECT:
zyvron-bf978

1. ENABLE ADMIN LOGIN

Firebase Console → Authentication → Sign-in method → Email/Password
Make sure Email/Password is enabled.

2. CREATE ADMIN USER

Firebase Console → Authentication → Users
Create your admin account and copy its UID.

3. CREATE ADMINS COLLECTION

Firebase Console → Firestore Database → Data
Create collection:
admins

Create a document whose Document ID is exactly your admin user's UID.
Example fields:
email: your-admin-email
role: admin

4. DEPLOY FIRESTORE RULES

Use the firestore.rules file included in this ZIP.
Firebase Console → Firestore Database → Rules → paste the rules → Publish

5. TRACK ORDER

Customer orders are saved under:
orders/{trackingNumber}

Example:
orders/TP-123456

The customer enters the tracking number in Track Order.

6. ORDER STATUS

Pending
Accepted
Rejected
Dispatched
Delivered

Admin status changes synchronize to Track Order through Firestore.

7. API KEY ERROR

If you see:
auth/api-key-not-valid

Check:
Google Cloud Console → APIs & Services → Credentials

Confirm the API key belongs to project:
zyvron-bf978

Also check that required Firebase APIs are allowed, including:
Identity Toolkit API
Token Service API
Firebase Installations API

8. IMPORTANT

Do not change existing customer names, customer emails, orders, or tracking numbers when creating the admins collection. The admins collection only identifies accounts allowed to use the Admin panel.

9. ADMIN PRIVACY

The Admin portal requires Firebase Email/Password login and an `/admins/{UID}` document for the signed-in user's UID. Deploy `firestore.rules` after any rules change. Orders, subscriber records, and complaints are restricted to verified admins. Products and coupons remain publicly readable because the customer storefront and checkout need them without admin login; only verified admins can write them.
