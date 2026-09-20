// Real Techni Product Catalog Data
const PRODUCTS = [
{
    id: "anc-air-pods-smart-led-display-earbuds-white",
    title: "A9 Pro True Wireless Earbuds with ANC & Touch Screen Display",
    handle: "anc-air-pods-smart-led-display-earbuds-white",
    category: "Audio & Speakers",
    price: 3499,
    compareAtPrice: 4399,
    discount: "20% OFF",
    rating: 4.8,
    reviews: 64,
    image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?auto=format&fit=crop&w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1606741965326-cb990ae01bb2?auto=format&fit=crop&w=1200&q=85"
    ],
    badge: "Hot Deal",
    features: [
      "Active Noise Cancellation (ANC & ENC)",
      "Full Color Touch Screen Display Case",
      "Deep Bass & Crystal-Clear Treble",
      "Long Battery Life with Quick Charge",
      "Bluetooth 5.0 Stable Low-Latency Link"
    ],
    tags: ["earbuds", "audio", "anc", "touch screen", "gadgets"],
    // Example of the optional `colors` field: add this array (name + hex)
    // to any product to show the color-swatch row on its detail page.
    // Products without this field simply skip that row.
    colors: [
      { name: "Black", hex: "#111318" },
      { name: "White", hex: "#f5f5f5" }
    ],
    inStock: true,
    isFlashSale: true
  },
  {
    id: "bt-2301-g-lamp-multifunctional-wireless-lamp",
    title: "BT-2301 G Multifunctional Wireless Lamp & RGB Speaker",
    handle: "bt-2301-g-lamp-multifunctional-wireless-lamp",
    category: "Audio & Speakers",
    price: 3250,
    compareAtPrice: 4999,
    discount: "35% OFF",
    rating: 4.9,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1529359744902-86b2ab9edaea?auto=format&fit=crop&w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1529359744902-86b2ab9edaea?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1582978571763-2d039e56f0c3?auto=format&fit=crop&w=1200&q=85"
    ],
    badge: "Trending",
    description: "Upgrade your bedside or workspace with the iconic G-shaped atmosphere lamp featuring dynamic RGB music sync, built-in wireless fast charging pad, and rich Bluetooth audio.",
    features: [
      "Multifunctional RGB Ambient Lighting",
      "Integrated Fast Wireless Phone Charger",
      "High-Fidelity Bluetooth Speaker",
      "Rechargeable Built-in Battery",
      "Modern G-Shape Aesthetic Decor"
    ],
    tags: ["lamp", "rgb", "speaker", "charger", "gadgets"],
    inStock: true,
    isFlashSale: false
  },
  {
    id: "12-hd-mobile-screen-magnifier-foldable-phone-cinema-stand",
    title: "12” HD Mobile Screen Magnifier – Foldable Cinema Stand",
    handle: "12-hd-mobile-screen-magnifier-foldable-phone-cinema-stand",
    category: "Mobile Accessories",
    price: 1409,
    compareAtPrice: 1999,
    discount: "30% OFF",
    rating: 4.6,
    reviews: 33,
    image: "https://images.unsplash.com/photo-1591290619618-904f6dd935e3?auto=format&fit=crop&w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1591290619618-904f6dd935e3?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1615526675159-e248c3021d3f?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1603674554159-b62f6febbce5?auto=format&fit=crop&w=1200&q=85"
    ],
    badge: "Sale",
    description: "Turn your phone into a mini cinema anytime, anywhere! This 12-inch optical HD screen magnifier enlarges your smartphone display for movies, video calls, and gaming.",
    features: [
      "12-inch 3D HD Curved Optical Magnification",
      "Relieves Eye Strain & Blue Light Stress",
      "Foldable, Slim & Portable Design",
      "Universal Compatibility with All Smartphones"
    ],
    tags: ["screen magnifier", "cinema stand", "mobile accessories"],
    inStock: true,
    isFlashSale: false
  },
  {
    id: "zyvron-elite-titanium-anc-earbuds-pro-max",
    title: "Zyvron Elite Pro Max – Titanium Wireless Earbuds with Hi-Res ANC",
    handle: "zyvron-elite-titanium-anc-earbuds-pro-max",
    category: "Audio & Speakers",
    price: 5499,
    compareAtPrice: 7299,
    discount: "25% OFF",
    rating: 4.9,
    reviews: 17,
    image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?auto=format&fit=crop&w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1606741965326-cb990ae01bb2?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=1200&q=85"
    ],
    badge: "Premium",
    description: "Our flagship earbuds, engineered for listeners who want nothing but the best. A titanium-finished case, Hi-Res certified drivers, and studio-grade ANC deliver a genuinely premium listening experience for daily wear.",
    features: [
      "Hi-Res Certified Titanium Drivers",
      "Studio-Grade Active Noise Cancellation",
      "Premium Titanium-Finish Charging Case",
      "Wireless Qi Charging Support",
      "Bluetooth 5.3 with Multipoint Pairing"
    ],
    tags: ["earbuds", "audio", "premium", "titanium", "anc", "flagship"],
    inStock: true,
    isFlashSale: false
  },
  {
    id: "k8-type-c-wireless-lavalier-microphone-portable-audio-video",
    title: "K8 Type-C Wireless Lavalier Lapel Microphone",
    handle: "k8-type-c-wireless-lavalier-microphone-portable-audio-video",
    category: "Audio & Speakers",
    price: 1969,
    compareAtPrice: 2999,
    discount: "34% OFF",
    rating: 4.8,
    reviews: 45,
    image: "https://images.unsplash.com/photo-1527261834078-9b37d35a4a32?auto=format&fit=crop&w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1527261834078-9b37d35a4a32?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1531651008558-ed1740375b39?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1619067321513-bb55a012e9b2?auto=format&fit=crop&w=1200&q=85"
    ],
    badge: "Sale",
    description: "Plug & play wireless clip-on mic with 20m barrier-free transmission and intelligent noise reduction. Ideal for interviews, TikTok, Instagram reels, and live streams.",
    features: [
      "Plug & Play Auto Pairing – No App Required",
      "20-Meter Barrier-Free Wireless Range",
      "Smart DSP Noise Cancellation Chip",
      "Omni-Directional 360° Sound Pickup"
    ],
    tags: ["mic", "wireless mic", "k8 mic", "gadgets"],
    inStock: true,
    isFlashSale: false
  },
  {
    id: "portable-bluetooth-speaker-waterproof",
    title: "Portable Waterproof Bluetooth Speaker – Deep Bass Sound",
    handle: "portable-bluetooth-speaker-waterproof",
    category: "Audio & Speakers",
    price: 2899,
    compareAtPrice: 3699,
    discount: "22% OFF",
    rating: 4.7,
    reviews: 38,
    image: "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?auto=format&fit=crop&w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1529359744902-86b2ab9edaea?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1606741965326-cb990ae01bb2?auto=format&fit=crop&w=1200&q=85"
    ],
    badge: "Top Rated",
    description: "Take your music anywhere with this compact waterproof Bluetooth speaker. Delivers punchy deep bass and crystal-clear highs, with a rugged, premium-grade build that shrugs off splashes, dust, and everyday knocks.",
    features: [
      "IPX6 Waterproof Rugged Build",
      "12-Hour Rechargeable Battery",
      "Deep Bass Dual Driver Sound",
      "Bluetooth 5.0 Stable Connection",
      "Built-In Mic for Hands-Free Calls"
    ],
    tags: ["speaker", "bluetooth speaker", "audio", "waterproof", "gadgets"],
    inStock: true,
    isFlashSale: false
  },
  {
    id: "premium-wireless-headphones-over-ear",
    title: "Premium Over-Ear Wireless Headphones with Deep Bass",
    handle: "premium-wireless-headphones-over-ear",
    category: "Audio & Speakers",
    price: 4299,
    compareAtPrice: 5499,
    discount: "22% OFF",
    rating: 4.8,
    reviews: 52,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1200&q=85"
    ],
    badge: "Bestseller",
    description: "Immerse yourself in rich, room-filling sound with these premium over-ear wireless headphones. Soft cushioned ear cups and a foldable design make them perfect for long listening sessions on the move or at your desk.",
    features: [
      "Over-Ear Cushioned Comfort Fit",
      "40-Hour Extended Battery Life",
      "Deep Bass & Clear Treble Drivers",
      "Foldable Travel-Friendly Design",
      "Bluetooth 5.3 Low-Latency Pairing"
    ],
    tags: ["headphones", "wireless headphones", "audio", "gadgets"],
    inStock: true,
    isFlashSale: true
  },
  {
    id: "smart-fitness-watch-amoled",
    title: "Smart Fitness Watch – AMOLED Display & Heart Rate Tracker",
    handle: "smart-fitness-watch-amoled",
    category: "Smart Wearables",
    price: 3999,
    compareAtPrice: 5299,
    discount: "24% OFF",
    rating: 4.6,
    reviews: 47,
    image: "https://images.unsplash.com/photo-1660844817855-3ecc7ef21f12?auto=format&fit=crop&w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1660844817855-3ecc7ef21f12?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=1200&q=85"
    ],
    badge: "Hot Deal",
    description: "Track your fitness goals in style with this smartwatch featuring a vivid AMOLED display, round-the-clock heart rate monitoring, and multi-sport tracking modes — all with a battery that lasts for days.",
    features: [
      "Vivid AMOLED Touch Display",
      "24/7 Heart Rate & SpO2 Monitor",
      "Multi-Sport Tracking Modes",
      "7-Day Battery Life",
      "Water Resistant Design"
    ],
    tags: ["smartwatch", "fitness watch", "wearable", "gadgets"],
    inStock: true,
    isFlashSale: false
  },
  {
    id: "rgb-wireless-gaming-mouse",
    title: "RGB Wireless Gaming Mouse – High Precision Sensor",
    handle: "rgb-wireless-gaming-mouse",
    category: "Gaming & PC Accessories",
    price: 2299,
    compareAtPrice: 2999,
    discount: "23% OFF",
    rating: 4.7,
    reviews: 29,
    image: "https://images.unsplash.com/photo-1633381638729-27f730955c23?auto=format&fit=crop&w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1633381638729-27f730955c23?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1615526675221-e763c4ec84f1?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1637243218672-d338945efdf7?auto=format&fit=crop&w=1200&q=85"
    ],
    badge: "New Arrival",
    description: "Gain the competitive edge with this RGB wireless gaming mouse. A high-precision sensor, low-latency wireless connection, and customizable lighting make it a favorite among gamers who demand accuracy and style.",
    features: [
      "High-Precision Optical Sensor",
      "Low-Latency 2.4GHz Wireless",
      "Customizable RGB Lighting",
      "Ergonomic Grip Design",
      "Long-Lasting Rechargeable Battery"
    ],
    tags: ["gaming mouse", "mouse", "gaming", "pc accessories", "gadgets"],
    inStock: true,
    isFlashSale: false
  },
  {
    id: "rgb-gaming-keyboard-mouse-combo",
    title: "RGB Backlit Gaming Keyboard & Mouse Combo Setup",
    handle: "rgb-gaming-keyboard-mouse-combo",
    category: "Gaming & PC Accessories",
    price: 3499,
    compareAtPrice: 4499,
    discount: "22% OFF",
    rating: 4.8,
    reviews: 33,
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1635987391914-cb84b567e68f?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1626958390943-a70309376444?auto=format&fit=crop&w=1200&q=85"
    ],
    badge: "Gamer's Pick",
    description: "Level up your gaming setup with this RGB backlit keyboard and mouse combo. Built for speed and durability, it brings a full esports-grade lighting experience to your desk.",
    features: [
      "Full RGB Backlit Illumination",
      "Anti-Ghosting Key Rollover",
      "Durable Spill-Resistant Build",
      "Matching RGB Gaming Mouse Included",
      "Plug & Play USB Connection"
    ],
    tags: ["gaming keyboard", "keyboard", "gaming", "pc accessories", "gadgets", "rgb"],
    inStock: true,
    isFlashSale: false
  },
  {
    id: "zyvron-titanium-ultra-always-on-amoled-smartwatch",
    title: "Zyvron Titanium Ultra – Always-On AMOLED Smartwatch",
    handle: "zyvron-titanium-ultra-always-on-amoled-smartwatch",
    category: "Smart Wearables",
    price: 6999,
    compareAtPrice: 9499,
    discount: "26% OFF",
    rating: 4.8,
    reviews: 14,
    image: "https://images.unsplash.com/photo-1624096104992-9b4fa3a279dd?auto=format&fit=crop&w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1624096104992-9b4fa3a279dd?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1660844817855-3ecc7ef21f12?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=1200&q=85"
    ],
    badge: "Premium",
    description: "Our top-of-the-line smartwatch for those who want a flagship look and feel. A durable titanium-style case, an always-on AMOLED display, and complete health tracking make it a true daily-wear statement piece.",
    features: [
      "Always-On Vivid AMOLED Display",
      "Durable Titanium-Style Case",
      "Continuous Heart Rate & SpO2 Tracking",
      "Built-In GPS & 100+ Sport Modes",
      "Up to 10-Day Battery Life"
    ],
    tags: ["smartwatch", "premium", "titanium", "wearable", "flagship"],
    inStock: true,
    isFlashSale: false
  },
  {
    id: "zyvron-mech-pro-hotswap-mechanical-keyboard",
    title: "Zyvron Mech Pro – Hot-Swappable RGB Mechanical Keyboard",
    handle: "zyvron-mech-pro-hotswap-mechanical-keyboard",
    category: "Gaming & PC Accessories",
    price: 5299,
    compareAtPrice: 6999,
    discount: "24% OFF",
    rating: 4.9,
    reviews: 9,
    image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?auto=format&fit=crop&w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1626958390943-a70309376444?auto=format&fit=crop&w=1200&q=85"
    ],
    badge: "Premium",
    description: "A true premium mechanical keyboard for enthusiasts. Hot-swappable switches, per-key RGB, and a solid aluminum-top frame bring a genuine desktop-flagship feel to your setup.",
    features: [
      "Hot-Swappable Mechanical Switches",
      "Per-Key Customizable RGB Lighting",
      "Aluminum-Top Frame Construction",
      "Doubleshot PBT Keycaps",
      "Detachable USB-C Cable"
    ],
    tags: ["gaming keyboard", "mechanical keyboard", "premium", "rgb", "hot-swappable"],
    inStock: true,
    isFlashSale: false
  },
  {
    id: "zyvron-magcharge-pro-3in1-wireless-charging-stand",
    title: "Zyvron MagCharge Pro – 3-in-1 Premium Wireless Charging Stand",
    handle: "zyvron-magcharge-pro-3in1-wireless-charging-stand",
    category: "Mobile Accessories",
    price: 3999,
    compareAtPrice: 5299,
    discount: "24% OFF",
    rating: 4.7,
    reviews: 12,
    image: "https://images.unsplash.com/photo-1545235616-db3cd822ad8c?auto=format&fit=crop&w=1200&q=85",
    images: [
      "https://images.unsplash.com/photo-1545235616-db3cd822ad8c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1617975316514-69cd7e16c2a4?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1553556135-009e5858adce?auto=format&fit=crop&w=1200&q=85"
    ],
    badge: "Premium",
    description: "Charge your phone, smartwatch, and earbuds together on one elegant stand. A premium matte-finish build keeps your nightstand or desk tidy while charging up to three devices at once.",
    features: [
      "3-in-1 Simultaneous Wireless Charging",
      "15W Fast Charging for Phones",
      "Dedicated Watch & Earbuds Charging Zones",
      "Premium Matte-Finish Aluminum Build",
      "Universal Qi Compatibility"
    ],
    tags: ["wireless charger", "charging stand", "premium", "mobile accessories"],
    inStock: true,
    isFlashSale: false
  }
];

// Helper: count products belonging to a given category, against whatever product
// list is passed in (defaults to the global PRODUCTS fallback).
const countByCategory = (catName, list = PRODUCTS) => list.filter(p => p.category === catName).length;

// Categories are derived live from the current product list so they never
// drift out of sync when products are added/edited/removed via the admin panel.
// when products are added/edited/deleted via the admin panel (store.products).
const getCategories = (list = PRODUCTS) => ([
  { id: "all", name: "All Products", count: list.length, icon: "grid", image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&q=80&auto=format&fit=crop", desc: "Browse our complete catalog of premium tech" },
  { id: "Audio & Speakers", name: "Audio & Speakers", count: countByCategory("Audio & Speakers", list), icon: "cpu", image: "https://images.unsplash.com/photo-1507878566509-a0dbe19677a5?w=400&q=80&auto=format&fit=crop", desc: "Earbuds, speakers, headphones & mics" },
  { id: "Smart Wearables", name: "Smart Wearables", count: countByCategory("Smart Wearables", list), icon: "sparkles", image: "https://images.unsplash.com/photo-1617043983671-adaadcaa2460?w=400&q=80&auto=format&fit=crop", desc: "Smartwatches & fitness trackers" },
  { id: "Gaming & PC Accessories", name: "Gaming & PC", count: countByCategory("Gaming & PC Accessories", list), icon: "utensils", image: "https://images.unsplash.com/photo-1598662779094-110c2bad80b5?w=400&q=80&auto=format&fit=crop", desc: "Gaming mice, keyboards & RGB gear" },
  { id: "Mobile Accessories", name: "Mobile Accessories", count: countByCategory("Mobile Accessories", list), icon: "home", image: "https://images.unsplash.com/photo-1737882171913-f4ced0ce73d8?w=400&q=80&auto=format&fit=crop", desc: "Phone stands, chargers & more" }
]);
// PRODUCTS is defined above in this same file (single-file app, no bundler required).
class Store {
  constructor() {
    // Products now load from localStorage first (falls back to the bundled
    // PRODUCTS list) so admin edits/adds/deletes persist across reloads.
    this.products = this.loadPersistentProducts();

    this.cart = this.loadCart();
    // Buy Now support: while a Buy Now checkout is active, this.cart is
    // temporarily swapped to a single-item array (see startBuyNowCheckout)
    // purely so the existing checkout UI/getters — all built around
    // this.cart — work unchanged for a Buy Now purchase too. buyNowBackupCart
    // holds the customer's real cart during that swap; restoreCartAfterBuyNow
    // puts it back the moment checkout ends, whether by a completed order or
    // the customer closing the modal, so Buy Now never touches, empties, or
    // adds to the customer's actual cart.
    this.isBuyNowCheckout = false;
    this.buyNowBackupCart = null;
    this.savedForLater = this.loadSavedForLater();
    this.wishlist = this.loadWishlist();
    this.activeCategory = 'all';
    this.searchQuery = '';
    this.activeTag = null;
    this.sortBy = 'popular';

    // Pagination (homepage product grid)
    this.currentPage = 1;
    this.productsPerPage = 5; // 13 tech products / 5 per page = 3 pages
    this.quickViewProduct = null;
    this.activeModal = null; // 'cart', 'nav', 'search', 'checkout', 'quickview', 'order-success', 'compare', 'assistant', 'admin-login', 'product-form', 'order-tracking', 'complaint', 'auth', 'my-account'
    this.lastOrder = null;
    this.listeners = [];
    this.viewMode = 'mobile'; // 'mobile' (framed) or 'full' (responsive full screen)

    // Product Comparison
    this.compareList = this.loadCompare();

    // AI Assistant
    this.chatMessages = this.loadChat();
    this.isAssistantTyping = false;

    // Admin state — real Firebase Authentication (email/password). isAdmin
    // starts false and flips to true asynchronously once initAdminAuthListener
    // (see App.init) hears back from Firebase about a signed-in admin.
    this.isAdmin = false;
    this.adminAuthReady = false;
    this.pendingAdminEntry = false;
    this.adminEntryRequested = false;
    this.adminViewRequested = sessionStorage.getItem('zyvron_admin_view') === 'true';
    this.activeAdminAction = null; // 'add' or 'edit'
    this.newProductDraftId = null; // pre-generated id shown while adding a new product (see App.openAdminModal)
    this.adminEditProduct = null;
    this.currentAdminTab = sessionStorage.getItem('zyvron_admin_tab') === 'orders' ? 'orders' : 'products'; // 'products' | 'coupons' | 'orders'
    this.adminOrderFilter = sessionStorage.getItem('zyvron_admin_order_filter') || 'all';
    this.adminRevenueDate = sessionStorage.getItem('zyvron_admin_revenue_date') || new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);

    // View state: 'store' (default public storefront) or 'admin'
    this.currentView = this.adminViewRequested ? 'admin' : 'store';

    // Orders: live-synced from Firestore, admin-only (sync starts on admin
    // login, stops on logout — see initFirestoreOrdersSync/stopFirestoreOrdersSync).
    this.orders = [];
    this.ordersLoaded = false;
    this._unsubOrders = null;
    this._ordersInitialSnapshotDone = false;

    // Set when an admin status update (accept/reject/dispatch/deliver)
    // fails to write to Firestore, so the admin panel can show a visible
    // banner instead of relying on a toast the admin may have missed.
    this.lastOrderUpdateError = null;

    // Live tracking: unsubscribe fn for the customer-facing "Track My
    // Order" onSnapshot listener, so the box updates the instant an admin
    // changes the order's status, without the customer re-searching.
    this._unsubTrackedOrder = null;

    // Set when "Track This Order" is used to jump straight from the Order
    // Confirmed popup into Track My Order — pre-fills the tracking code and
    // auto-submits once, so the customer doesn't have to retype it.
    this.prefillTrackingCode = null;
    this.prefillTrackingPhone = null;
    this.trackingReturnRoute = '#/';
    this.trackingReturnScrollY = 0;

    // Coupons: live-synced from Firestore (same "no real auth" caveat as
    // products/orders above — see README_FIREBASE.md).
    this.coupons = [];
    this.couponsLoaded = false;
    this._unsubCoupons = null;
    this.appliedCoupon = null; // { code, type: 'percent'|'fixed', value }

    // Product reviews: live-synced from Firestore, shown instantly (no
    // moderation queue) — same "no real auth" caveat as everything else.
    this.reviews = [];
    this.reviewsLoaded = false;
    this._unsubReviews = null;
    this.helpfulVoted = this.loadHelpfulVoted(); // review IDs this browser already upvoted

    // Signed-in customer (Step 5 of the roadmap), kept in sync by
    // App.initCustomerAuthListener() via Firebase Auth's onAuthStateChanged
    // — same source-of-truth pattern as isAdmin/initAdminAuthListener above.
    // Drives the header's "Sign In" -> "My Account" swap.
    this.customerUser = null; // { uid, email, phone } | null
    this.customerAuthReady = false;

    // "My Account" order history. null = not fetched yet for this modal
    // session; an array once loaded (from Firestore for a signed-in
    // account, or the device-local list as a fallback — see
    // loadAccountOrderHistory()).
    this.myAccountOrders = null;
    this.myAccountOrdersSource = null; // 'account' | 'device' | null
    this.myAccountOrdersLoading = false;
  }


  // --- Firebase bridge --------------------------------------------------
  getFirebaseDb() {
    return window.ZYVRON_FIREBASE?.db || null;
  }

  getFirebaseAuth() {
    return window.ZYVRON_FIREBASE?.auth || null;
  }

  async saveOrderToFirebase(order) {
    const db = this.getFirebaseDb();
    if (!db) throw new Error('Firebase is not connected.');

    try {
      const { doc, setDoc, serverTimestamp } = await import(
        'https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js'
      );
      // The tracking code is also the Firestore document ID. This makes
      // customer tracking a safe, single-document public read.
      await setDoc(doc(db, 'orders', order.orderNumber), {
        ...order,
        createdAt: serverTimestamp(),
        statusUpdatedAt: serverTimestamp()
      });
      return true;
    } catch (error) {
      console.error('Firebase order save failed:', error);
      throw error;
    }
  }

  // --- Orders: live sync (admin) + cancel -------------------------------
  // Starts a real-time Firestore listener so new orders appear in the admin
  // dashboard automatically, with no page refresh needed. Only called after
  // a successful admin login (see loginAdmin) — orders contain customer
  // name/phone/address, so we don't sync them into every visitor's session.
  initFirestoreOrdersSync() {
    if (this._unsubOrders) return; // already syncing
    const db = this.getFirebaseDb();
    if (!db) return;

    import('https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js')
      .then(({ collection, query, orderBy, onSnapshot }) => {
        const ordersQuery = query(collection(db, 'orders'), orderBy('createdAt', 'desc'));
        this._unsubOrders = onSnapshot(
          ordersQuery,
          (snapshot) => {
            // Skip the toast on the very first snapshot (that's just the
            // existing order history loading in, not a "new" order).
            if (this._ordersInitialSnapshotDone) {
              snapshot.docChanges().forEach(change => {
                if (change.type === 'added') {
                  const o = change.doc.data();
                  this.showToast(`🛎️ New order ${o.orderNumber || ''} received`, 'success');
                }
              });
            }
            this.orders = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
            this.ordersLoaded = true;
            this._ordersInitialSnapshotDone = true;
            this.notify();
          },
          (error) => {
            console.warn('Firestore orders listener error.', error);
            this.ordersLoaded = true;
            this.notify();
          }
        );
      })
      .catch(e => console.warn('Order sync unavailable.', e));
  }

  stopFirestoreOrdersSync() {
    if (this._unsubOrders) {
      this._unsubOrders();
      this._unsubOrders = null;
    }
    this.orders = [];
    this.ordersLoaded = false;
    this._ordersInitialSnapshotDone = false;
  }

  getOrderStats() {
    // 'cancelled' is the old status name (pre accept/reject) — still counted
    // as rejected so historical orders don't show up wrong.
    const isRejected = (o) => o.status === 'rejected' || o.status === 'cancelled';
    const active = this.orders.filter(o => ['accepted', 'dispatched', 'delivered'].includes(o.status));
    return {
      total: this.orders.length,
      pending: this.orders.filter(o => !o.status || o.status === 'pending').length,
      accepted: this.orders.filter(o => o.status === 'accepted').length,
      dispatched: this.orders.filter(o => o.status === 'dispatched').length,
      rejected: this.orders.filter(isRejected).length,
      delivered: this.orders.filter(o => o.status === 'delivered').length,
      acceptedRevenue: this.orders.filter(o => o.status === 'accepted').reduce((sum, o) => sum + (o.total || 0), 0),
      rejectedRevenue: this.orders.filter(isRejected).reduce((sum, o) => sum + (o.total || 0), 0),
      deliveredRevenue: this.orders.filter(o => o.status === 'delivered').reduce((sum, o) => sum + (o.total || 0), 0),
      revenue: active.reduce((sum, o) => sum + (o.total || 0), 0)
    };
  }

  // Sets an order's status to 'accepted' or 'rejected'. The admin orders
  // list is Firestore-synced live (initFirestoreOrdersSync), so this just
  // writes the status — the on-screen badge/buttons update themselves via
  // the snapshot listener, same as when a new order arrives.
  async updateOrderStatus(orderId, status) {
    const db = this.getFirebaseDb();
    const previousOrder = this.orders.find(currentOrder => currentOrder.id === orderId);
    if (!db) {
      this.showToast('Firebase is not connected.', 'error');
      this.lastOrderUpdateError = { orderId, status, message: 'Firebase is not connected.', time: Date.now() };
      this.notify();
      return false;
    }
    try {
      const { doc, updateDoc, serverTimestamp } = await import(
        'https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js'
      );
      this.orders = this.orders.map(currentOrder => currentOrder.id === orderId
        ? { ...currentOrder, status, customerStatus: status }
        : currentOrder);
      this.notify();
      await updateDoc(doc(db, 'orders', orderId), {
        status,
        customerStatus: status,
        statusUpdatedAt: serverTimestamp()
      });
      // Re-apply the confirmed value in case a stale listener snapshot arrived
      // while the Firestore write was still in flight.
      this.orders = this.orders.map(currentOrder => currentOrder.id === orderId
        ? { ...currentOrder, status, customerStatus: status }
        : currentOrder);
      const statusMessages = { accepted: 'Order accepted.', rejected: 'Order rejected.', dispatched: 'Order dispatched.', delivered: 'Order marked as delivered.' };
      this.showToast(statusMessages[status] || `Order status updated to ${status}.`, status === 'rejected' ? 'info' : 'success');
      // Clear any earlier failure now that a write has gone through — keeps
      // the admin banner from lingering after the underlying issue is fixed.
      if (this.lastOrderUpdateError) {
        this.lastOrderUpdateError = null;
      }
      this.notify();
      return true;
    } catch (error) {
      const failedOrder = this.orders.find(currentOrder => currentOrder.id === orderId);
      if (failedOrder) {
        const originalStatus = previousOrder?.status || 'pending';
        this.orders = this.orders.map(currentOrder => currentOrder.id === orderId
          ? { ...currentOrder, status: originalStatus, customerStatus: previousOrder?.customerStatus || originalStatus }
          : currentOrder);
      }
      console.error('Order status update failed:', error);
      this.showToast('Could not update the order — check Firestore rules/connection.', 'error');
      // Toasts auto-dismiss and are easy to miss — also surface this as a
      // persistent banner in the Orders tab so a blocked write is never
      // silent. Most common cause: firestore.rules not deployed to the
      // live project yet.
      this.lastOrderUpdateError = {
        orderId,
        status,
        message: error?.code === 'permission-denied'
          ? 'Permission denied — your firestore.rules likely aren\'t deployed to the live Firebase project yet.'
          : (error?.message || 'Could not write this status change to Firestore.'),
        time: Date.now()
      };
      this.notify();
      return false;
    }
  }

  dismissOrderUpdateError() {
    this.lastOrderUpdateError = null;
    this.notify();
  }

  acceptOrder(orderId) { return this.updateOrderStatus(orderId, 'accepted'); }
  rejectOrder(orderId) { return this.updateOrderStatus(orderId, 'rejected'); }

  sendOrderStatusWhatsApp(orderId) {
    const order = this.orders.find(currentOrder => currentOrder.id === orderId);
    if (!order) {
      this.showToast('Order is not available yet.', 'error');
      return;
    }
    const status = order.status || 'pending';
    window.app?.openCustomerStatusMessage(order, status);
  }

  // Permanently removes an order. Orders otherwise stay in Firestore
  // forever (no auto-expiry, no cap on the live query) — this is the only
  // way one goes away, and it can't be undone.
  async deleteOrder(orderId) {
    const db = this.getFirebaseDb();
    if (!db) { this.showToast('Firebase is not connected.', 'error'); return false; }
    try {
      const { doc, deleteDoc } = await import(
        'https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js'
      );
      await deleteDoc(doc(db, 'orders', orderId));
      this.showToast('Order deleted.', 'info');
      return true;
    } catch (error) {
      console.error('Order delete failed:', error);
      this.showToast('Could not delete the order — check Firestore rules/connection.', 'error');
      return false;
    }
  }

  // Customer order lookup by the human-facing tracking code (TP-xxxxxx).
  // Orders are now stored with the tracking code as their document ID (see
  // saveOrderToFirebase), so this is a direct single-document fetch — no
  // collection query involved, so it works with no login.
  async findOrderForTracking(trackingCode) {
    const db = this.getFirebaseDb();
    if (!db) throw new Error('Firebase is not connected.');
    const code = this.normalizeTrackingCode(trackingCode);
    if (!code) throw new Error('Please enter your tracking code.');

    const { doc, getDoc } = await import(
      'https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js'
    );

    const direct = await getDoc(doc(db, 'orders', code));
    if (direct.exists()) return { id: direct.id, ...direct.data() };
    return null;
  }

  // NOTE: "Track by Phone Number" (findOrdersByPhone) was removed — it
  // required a broad query across all orders' customer.phone field, which
  // can't stay open once order *listing* is locked to signed-in admins only
  // (see firestore.rules, allow list on /orders/{orderId}). Tracking by
  // code (below) still works for everyone since it fetches a single known
  // document. The on-device "remembered orders" list is unaffected.

  // Live version of order tracking: finds the order once, then keeps it
  // updated in real time via onSnapshot, so a customer watching the Track
  // My Order box sees the status flip (e.g. Pending -> Accepted) the
  // instant an admin changes it, with no need to re-search.
  //
  // onUpdate(order) fires once immediately with the found order, then again
  // on every change. onNotFound() fires if no order matches the code.
  // Returns an unsubscribe function (or null if lookup failed before a
  // listener could be attached — the caller's catch/onError already ran).
  async subscribeOrderForTracking(trackingCode, onUpdate, onNotFound, customerPhone = '') {
    const db = this.getFirebaseDb();
    const code = this.normalizeTrackingCode(trackingCode);
    const phone = this.normalizeCustomerPhone(customerPhone);
    if (!code) throw new Error('Please enter your tracking code.');
    if (!phone) throw new Error('Please enter the phone number used when placing the order.');

    const savedOrder = this.loadMyOrders().find(saved => saved.orderNumber === code) || null;
    const rememberedCustomer = this.loadCustomerDetails();
    const localOrder = this.lastOrder?.orderNumber === code
      ? this.lastOrder
      : savedOrder?.order || (savedOrder ? {
        orderNumber: savedOrder.orderNumber,
        date: savedOrder.date,
        status: 'pending',
        total: 0,
        items: [],
        customer: rememberedCustomer
      } : null);
    if (!db) {
      if (localOrder && this.normalizeCustomerPhone(localOrder.customer?.phone) === phone) {
        onUpdate(localOrder);
        return () => {};
      }
      throw new Error('Firebase is not connected and this order is not saved on this device.');
    }

    const { doc, getDoc, onSnapshot } = await import(
      'https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js'
    );

    // Older orders may have been saved with the hyphen removed from their
    // document ID. Try both formats before attaching the live listener.
    const candidateIds = [...new Set([code, code.replace('-', '')])];
    let matchingId = null;
    for (const candidateId of candidateIds) {
      const candidate = await getDoc(doc(db, 'orders', candidateId));
      if (candidate.exists()) {
        const candidateOrder = candidate.data();
        if (this.normalizeCustomerPhone(candidateOrder.customer?.phone) === phone) {
          matchingId = candidateId;
          break;
        }
      }
    }

    if (!matchingId) {
      if (localOrder && this.normalizeCustomerPhone(localOrder.customer?.phone) === phone) {
        onUpdate(localOrder);
        return () => {};
      }
      onNotFound();
      return () => {};
    }

    const docRef = doc(db, 'orders', matchingId);

    return onSnapshot(
      docRef,
      (docSnap) => {
        if (!docSnap.exists()) { onNotFound(); return; }
        const order = { id: docSnap.id, ...docSnap.data() };
        if (this.normalizeCustomerPhone(order.customer?.phone) === phone) onUpdate(order);
        else onNotFound();
      },
      (error) => {
        console.warn('Live order tracking listener error.', error);
      }
    );
  }

  async submitComplaint(orderCode, message) {
    const db = this.getFirebaseDb();
    if (!db) throw new Error('Firebase is not connected.');
    const text = String(message || '').trim();
    const code = String(orderCode || '').trim();
    if (!code || !text) throw new Error('Please provide your tracking code and complaint details.');

    const { collection, addDoc, serverTimestamp } = await import(
      'https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js'
    );
    const ref = await addDoc(collection(db, 'complaints'), {
      orderNumber: code,
      message: text,
      status: 'open',
      createdAt: serverTimestamp()
    });
    return ref.id;
  }

  setAdminTab(tab) {
    this.currentAdminTab = tab === 'orders' ? 'orders' : 'products';
    sessionStorage.setItem('zyvron_admin_tab', this.currentAdminTab);
    this.notify();
  }

  setAdminOrderFilter(filter) {
    const validFilters = ['all', 'pending', 'accepted', 'dispatched', 'rejected', 'delivered'];
    this.adminOrderFilter = validFilters.includes(filter) ? filter : 'all';
    sessionStorage.setItem('zyvron_admin_order_filter', this.adminOrderFilter);
    this.notify();
  }

  setAdminRevenueDate(date) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return;
    this.adminRevenueDate = date;
    sessionStorage.setItem('zyvron_admin_revenue_date', date);
    this.notify();
  }

  getOrderDateKey(order) {
    let date = null;
    if (order.createdAt?.toDate) date = order.createdAt.toDate();
    else if (order.createdAt?.seconds) date = new Date(order.createdAt.seconds * 1000);
    else if (order.createdAtMs) date = new Date(order.createdAtMs);
    else if (order.date) date = new Date(order.date);
    if (!date || Number.isNaN(date.getTime())) return '';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  async saveSubscriberToFirebase(phone) {
    const db = this.getFirebaseDb();
    if (!db) return false;

    try {
      const { collection, addDoc, serverTimestamp } = await import(
        'https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js'
      );
      await addDoc(collection(db, 'subscribers'), {
        phone,
        source: 'footer_newsletter',
        createdAt: serverTimestamp()
      });
      return true;
    } catch (error) {
      console.warn('Firebase subscriber save failed.', error);
      return false;
    }
  }

  // --- Coupons: live sync + apply/remove (cart) + CRUD (admin) ----------
  initFirestoreCouponsSync() {
    if (this._unsubCoupons) return; // already syncing
    const db = this.getFirebaseDb();
    if (!db) return;

    import('https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js')
      .then(({ collection, onSnapshot }) => {
        this._unsubCoupons = onSnapshot(
          collection(db, 'coupons'),
          (snapshot) => {
            this.coupons = snapshot.docs.map(d => ({ code: d.id, ...d.data() }));
            this.couponsLoaded = true;
            this.notify();
          },
          (error) => {
            console.warn('Firestore coupons listener error.', error);
            this.couponsLoaded = true;
            this.notify();
          }
        );
      })
      .catch(e => console.warn('Coupon sync unavailable.', e));
  }

  // Validates against the already-synced local list — final safety (no
  // double-spend) is enforced by redeemCouponInFirebase() at order time.
  applyCoupon(codeRaw) {
    const code = (codeRaw || '').trim().toUpperCase();
    if (!code) { this.showToast('Enter a coupon code.', 'error'); return; }

    const coupon = this.coupons.find(c => c.code === code);
    if (!coupon) { this.showToast('Invalid coupon code.', 'error'); return; }
    if (coupon.active === false) { this.showToast('This coupon is no longer active.', 'error'); return; }
    if (coupon.used) { this.showToast('This coupon has already been used.', 'error'); return; }
    if (!coupon.type || !coupon.value) { this.showToast('This coupon is misconfigured.', 'error'); return; }

    this.appliedCoupon = { code, type: coupon.type, value: coupon.value };
    const desc = coupon.type === 'percent' ? `${coupon.value}% OFF` : `Rs. ${coupon.value} OFF`;
    this.showToast(`Coupon applied: ${desc}`, 'success');
    this.notify();
  }

  removeCoupon() {
    this.appliedCoupon = null;
    this.showToast('Coupon removed.', 'info');
    this.notify();
  }

  getCartDiscount() {
    if (!this.appliedCoupon) return 0;
    const subtotal = this.getCartSubtotal();
    if (this.appliedCoupon.type === 'percent') {
      return Math.round(subtotal * (this.appliedCoupon.value / 100));
    }
    return Math.min(this.appliedCoupon.value, subtotal);
  }

  // Atomically marks a coupon used-once so two customers can't both redeem
  // it in the (rare) case they apply it at nearly the same moment.
  async redeemCouponInFirebase(code) {
    const db = this.getFirebaseDb();
    if (!db) return false;
    try {
      const { doc, runTransaction, serverTimestamp } = await import(
        'https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js'
      );
      const ref = doc(db, 'coupons', code);
      await runTransaction(db, async (tx) => {
        const snap = await tx.get(ref);
        if (!snap.exists()) throw new Error('Coupon not found');
        if (snap.data().used) throw new Error('Coupon already used');
        tx.update(ref, { used: true, usedAt: serverTimestamp() });
      });
      return true;
    } catch (error) {
      console.warn('Coupon redemption failed (order still placed at full price):', error);
      return false;
    }
  }

  // Admin: create/toggle/delete coupons
  async createCoupon({ code, type, value }) {
    const db = this.getFirebaseDb();
    if (!db) { this.showToast('Firebase is not connected.', 'error'); return; }
    const normCode = (code || '').trim().toUpperCase();
    const numValue = Number(value);
    if (!normCode || !numValue || numValue <= 0) {
      this.showToast('Enter a valid code and value.', 'error');
      return;
    }
    try {
      const { doc, setDoc, serverTimestamp } = await import(
        'https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js'
      );
      await setDoc(doc(db, 'coupons', normCode), {
        type: type === 'fixed' ? 'fixed' : 'percent',
        value: numValue,
        active: true,
        used: false,
        createdAt: serverTimestamp()
      });
      this.showToast(`Coupon ${normCode} created.`, 'success');
    } catch (error) {
      console.error('Coupon create failed:', error);
      this.showToast('Could not create coupon: ' + (error?.message || error), 'error');
    }
  }

  async toggleCouponActive(code, active) {
    const db = this.getFirebaseDb();
    if (!db) return;
    try {
      const { doc, updateDoc } = await import(
        'https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js'
      );
      await updateDoc(doc(db, 'coupons', code), { active });
    } catch (error) {
      console.warn('Coupon toggle failed:', error);
      this.showToast('Could not update coupon.', 'error');
    }
  }

  async deleteCouponFromFirebase(code) {
    const db = this.getFirebaseDb();
    if (!db) return;
    try {
      const { doc, deleteDoc } = await import(
        'https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js'
      );
      await deleteDoc(doc(db, 'coupons', code));
      this.showToast(`Coupon ${code} deleted.`, 'info');
    } catch (error) {
      console.warn('Coupon delete failed:', error);
      this.showToast('Could not delete coupon.', 'error');
    }
  }

  // --- Product Reviews ----------------------------------------------------
  initFirestoreReviewsSync() {
    if (this._unsubReviews) return; // already syncing
    const db = this.getFirebaseDb();
    if (!db) return;

    import('https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js')
      .then(({ collection, onSnapshot }) => {
        this._unsubReviews = onSnapshot(
          collection(db, 'reviews'),
          (snapshot) => {
            this.reviews = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
            this.reviewsLoaded = true;
            this.notify();
          },
          (error) => {
            console.warn('Firestore reviews listener error.', error);
            this.reviewsLoaded = true;
            this.notify();
          }
        );
      })
      .catch(e => console.warn('Reviews sync unavailable.', e));
  }

  getReviewsForProduct(productId) {
    return this.reviews
      .filter(r => r.productId === productId)
      .sort((a, b) => (b.createdAtMs || 0) - (a.createdAtMs || 0));
  }

  async submitReview({ productId, name, rating, comment }) {
    const db = this.getFirebaseDb();
    if (!db) { this.showToast('Reviews are unavailable right now.', 'error'); return; }

    const cleanName = (name || '').trim();
    const cleanComment = (comment || '').trim();
    const numRating = Number(rating);

    if (!cleanName || !cleanComment || !numRating || numRating < 1 || numRating > 5) {
      this.showToast('Add your name, a star rating, and a comment.', 'error');
      return;
    }

    try {
      const { collection, addDoc, serverTimestamp } = await import(
        'https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js'
      );
      await addDoc(collection(db, 'reviews'), {
        productId,
        name: cleanName,
        rating: numRating,
        comment: cleanComment,
        helpful: 0,
        createdAtMs: Date.now(),
        createdAt: serverTimestamp()
      });
      this.showToast('Thanks for your review!', 'success');
    } catch (error) {
      console.error('Review submit failed:', error);
      this.showToast('Could not post review — try again.', 'error');
    }
  }

  loadHelpfulVoted() {
    try {
      const saved = localStorage.getItem('techni_helpful_voted');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  }

  saveHelpfulVoted() {
    try {
      localStorage.setItem('techni_helpful_voted', JSON.stringify(Array.from(this.helpfulVoted)));
    } catch (e) {
      console.warn('LocalStorage error', e);
    }
  }

  async markReviewHelpful(reviewId) {
    if (this.helpfulVoted.has(reviewId)) {
      this.showToast('You already marked this helpful.', 'info');
      return;
    }
    const db = this.getFirebaseDb();
    if (!db) return;
    try {
      const { doc, updateDoc, increment } = await import(
        'https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js'
      );
      await updateDoc(doc(db, 'reviews', reviewId), { helpful: increment(1) });
      this.helpfulVoted.add(reviewId);
      this.saveHelpfulVoted();
      this.notify();
    } catch (error) {
      console.warn('Helpful vote failed:', error);
    }
  }

  // --- Cloudinary + Firestore product bridge ---------------------------
  async uploadProductImage(fileInput) {
    const cloudName = 'lzzs7dnm';
    const uploadPreset = 'ZYVRON_PRESET';
    const file = fileInput?.files?.[0];
    if (!file) return null;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        { method: 'POST', body: formData }
      );
      const data = await response.json();
      if (!response.ok || !data.secure_url) {
        throw new Error(data.error?.message || 'Cloudinary upload failed');
      }
      return data.secure_url;
    } catch (error) {
      console.error('Cloudinary upload error:', error);
      return null;
    }
  }

  async saveProductToFirebase(product, docId, previousCategory = null) {
    const db = this.getFirebaseDb();
    if (!db) return { ok: false, error: 'Firebase is not initialized on this page (window.ZYVRON_FIREBASE is missing).' };
    if (!docId) return { ok: false, error: 'No product id was provided to save.' };

    try {
      const { doc, setDoc, deleteDoc, serverTimestamp } = await import(
        'https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js'
      );

      const collectionName = productsCollectionName(product.category);

      // Make sure this category has a registry entry so every device/tab
      // knows to subscribe to its collection (see initFirestoreProductsSync).
      await setDoc(doc(db, 'categories', categoryToSlug(product.category)), {
        name: product.category,
        collection: collectionName,
        updatedAt: serverTimestamp()
      }, { merge: true });

      // Always write to the doc whose ID matches the product's local id, and
      // merge — this both creates new products and updates existing ones,
      // so the Firestore doc ID never drifts from the id used everywhere
      // else in the app (cart, admin edit/delete, etc).
      await setDoc(doc(db, collectionName, docId), {
        ...product,
        updatedAt: serverTimestamp()
      }, { merge: true });

      // Editing a product into a different category moves it to that
      // category's collection — remove the stale copy from the old one so
      // it doesn't linger as a duplicate/ghost entry.
      if (previousCategory && previousCategory !== product.category) {
        const oldCollectionName = productsCollectionName(previousCategory);
        if (oldCollectionName !== collectionName) {
          try {
            await deleteDoc(doc(db, oldCollectionName, docId));
          } catch (e) {
            console.warn(`Could not remove product from its previous category collection (${oldCollectionName}):`, e);
          }
        }
      }

      return { ok: true };
    } catch (error) {
      // Surface the real Firebase error (e.g. "Missing or insufficient
      // permissions", "Cloud Firestore API has not been used...") instead
      // of swallowing it, so it can actually be diagnosed from the UI.
      console.error('Firebase product save failed:', error);
      return { ok: false, error: error?.message || String(error) };
    }
  }

  // --- Firestore: live product catalog sync (keeps every device in sync) --
  //
  // Each category now lives in its own Firestore collection
  // (products_audio-speakers, products_smart-wearables, ...) instead of one
  // shared "products" collection. A small "categories" registry collection
  // tracks which category collections currently exist, so this can discover
  // and subscribe to every one of them — including brand new categories an
  // admin creates later, in this session or another tab/device — without a
  // hardcoded list anywhere in the code.
  //
  // Every per-category snapshot gets merged locally into the same flat
  // `this.products` array the rest of the app already reads from, so
  // nothing else in the app (filtering, search, cart, wishlist, the product
  // grid, "All Products", Flash Deals, etc.) needs to know the catalog is
  // now split across multiple collections under the hood.
  async initFirestoreProductsSync() {
    const db = this.getFirebaseDb();
    if (!db) return;

    try {
      const { collection, onSnapshot, doc, writeBatch, serverTimestamp } = await import(
        'https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js'
      );

      // collectionName -> array of products from that collection's most
      // recent snapshot. Recomputed/flattened into this.products on every
      // update, from any single category collection.
      this._productsByCollection = this._productsByCollection || new Map();
      // categorySlug -> unsubscribe function, so we never attach two
      // listeners to the same category collection.
      this._categoryListeners = this._categoryListeners || new Map();

      const applyMergedSnapshot = () => {
        const previousOrder = this.products.map(p => p.id);
        const fsProducts = [...this._productsByCollection.values()].flat();
        const fsMap = new Map(fsProducts.map(p => [p.id, p]));

        // Same order-preserving merge as before: keep already-known products
        // in their existing order, put newly-seen ones at the front. Without
        // this, a product could jump position (or vanish from "first N"
        // strips like Flash Deals) every time any category's snapshot fired.
        const stillKnown = previousOrder.filter(id => fsMap.has(id)).map(id => fsMap.get(id));
        const newlySeen = fsProducts.filter(p => !previousOrder.includes(p.id));

        this.saveProducts([...newlySeen, ...stillKnown]);
      };

      const subscribeToCategoryCollection = (categoryName) => {
        const slug = categoryToSlug(categoryName);
        if (this._categoryListeners.has(slug)) return; // already subscribed
        const collectionName = productsCollectionName(categoryName);

        const unsub = onSnapshot(
          collection(db, collectionName),
          (snapshot) => {
            this._productsByCollection.set(
              collectionName,
              snapshot.docs.map(d => ({ ...d.data(), id: d.id }))
            );
            applyMergedSnapshot();
          },
          (error) => {
            console.warn(`Firestore listener error on "${collectionName}"; staying on local cache for that category.`, error);
          }
        );
        this._categoryListeners.set(slug, unsub);
      };

      onSnapshot(
        collection(db, 'categories'),
        async (snapshot) => {
          if (snapshot.empty) {
            // First time this Firestore project has been used: seed the
            // category registry AND each product into its own category
            // collection, from whatever is currently loaded (bundled
            // defaults or whatever was already saved in this browser), so
            // the catalog has a starting point other devices can read.
            //
            // firestore.rules only allows an admin to write `categories`
            // and `products_*` (see rules for both). An anonymous visitor's
            // browser can never complete this write — it's always rejected
            // with permission-denied — so only attempt it when this browser
            // is a confirmed admin. (See retrySeedFirestoreCatalogIfEmpty()
            // for the admin-login-time safety net, since this listener only
            // checks emptiness once, at page load, usually before any admin
            // has signed in yet.)
            if (this.isAdmin) {
              await this.seedFirestoreCatalog({ db, doc, writeBatch, serverTimestamp });
            }
            return; // onSnapshot fires again automatically once the seed lands.
          }

          // Subscribe to every known category's collection (new categories
          // that show up later — e.g. an admin adds one from another tab —
          // get picked up here too, since this listener stays live).
          snapshot.docs.forEach(d => {
            const data = d.data();
            if (data?.name) subscribeToCategoryCollection(data.name);
          });
        },
        (error) => {
          console.warn('Firestore category registry listener error; staying on local cache.', error);
        }
      );
    } catch (e) {
      console.warn('Firestore product sync unavailable; using local storage only.', e);
    }
  }

  // One-time bootstrap: pushes whatever product catalog this browser
  // currently has (bundled defaults or local edits) into a brand-new
  // Firestore project, so every other device has something to sync from.
  // firestore.rules restricts writes on `categories`/`products_*` to
  // admins only, so this can only ever succeed when called from a
  // signed-in admin session — see the two call sites of this method.
  async seedFirestoreCatalog({ db, doc, writeBatch, serverTimestamp }) {
    if (localStorage.getItem('zyvron_fs_products_seeded') || !this.products.length) return;
    try {
      const batch = writeBatch(db);
      const seenCategories = new Set();
      this.products.forEach(p => {
        const catSlug = categoryToSlug(p.category);
        if (!seenCategories.has(catSlug)) {
          seenCategories.add(catSlug);
          batch.set(doc(db, 'categories', catSlug), {
            name: p.category,
            collection: productsCollectionName(p.category),
            updatedAt: serverTimestamp()
          }, { merge: true });
        }
        batch.set(doc(db, productsCollectionName(p.category), p.id), { ...p, updatedAt: serverTimestamp() });
      });
      await batch.commit();
      // Only remember "seeded" after a confirmed write, so a permission
      // failure (e.g. this ran before isAdmin was confirmed) can retry
      // later instead of silently giving up on this browser forever.
      localStorage.setItem('zyvron_fs_products_seeded', '1');
    } catch (e) {
      console.warn('Firestore product catalog seed failed; staying on local data.', e);
    }
  }

  // Safety net for admin login: the live `categories` listener above only
  // checks for an empty catalog once, at page load — usually before an
  // admin has signed in yet, so it correctly does nothing (per
  // firestore.rules, only an admin can write categories/products). Call
  // this right after admin sign-in is confirmed so first-time setup can
  // still complete without needing a page reload.
  async retrySeedFirestoreCatalogIfEmpty() {
    if (!this.isAdmin) return;
    const db = this.getFirebaseDb();
    if (!db) return;
    try {
      const { collection, getDocs, doc, writeBatch, serverTimestamp } = await import(
        'https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js'
      );
      const snapshot = await getDocs(collection(db, 'categories'));
      if (snapshot.empty) {
        await this.seedFirestoreCatalog({ db, doc, writeBatch, serverTimestamp });
      }
    } catch (e) {
      console.warn('Admin catalog seed check failed.', e);
    }
  }


  // ---------------------------------------------------------------------

  // --- Persistent Product "Database" (localStorage-backed) ---

  loadPersistentProducts() {
    try {
      const saved = localStorage.getItem('zyvron_all_products');
      if (saved) {
        const parsed = JSON.parse(saved);
        const defaultsById = new Map(PRODUCTS.map(p => [p.id, p]));

        // Keep any admin-edited product details, but always refresh bundled
        // product photography from the latest image set.
        const merged = parsed.map(product => {
          const latest = defaultsById.get(product.id);
          return latest
            ? { ...product, image: latest.image, images: latest.images }
            : product;
        });

        // Add any newly bundled products that did not exist in the cached list.
        const existingIds = new Set(merged.map(p => p.id));
        PRODUCTS.forEach(product => {
          if (!existingIds.has(product.id)) merged.push(product);
        });

        this.saveProducts(merged, false);
        return merged;
      }

      // No local list yet — seed localStorage with the bundled defaults.
      this.saveProducts(PRODUCTS, false);
      return PRODUCTS;
    } catch {
      return PRODUCTS;
    }
  }

  // Guarantee every product has the fields every render path assumes exist,
  // no matter where it came from (bundled defaults, an admin add via the
  // Cloudinary/Firestore form, or an older cached record missing newer
  // fields). Without this, a product missing e.g. `features` crashes any
  // render that calls `.features.slice(...)`, and a missing `discount`
  // renders the literal word "undefined" in a badge — both of which have
  // happened. This runs once, right where products enter app state, so
  // every call site downstream can keep assuming these fields exist.
  normalizeProduct(p) {
    const price = typeof p.price === 'number' ? p.price : 0;
    const compareAtPrice = typeof p.compareAtPrice === 'number' ? p.compareAtPrice : price;
    const computedDiscount = compareAtPrice > price
      ? `${Math.round((1 - price / compareAtPrice) * 100)}% OFF`
      : '';
    return {
      ...p,
      price,
      compareAtPrice,
      features: Array.isArray(p.features) ? p.features : [],
      images: Array.isArray(p.images) && p.images.length > 0
        ? p.images
        : (p.image ? [p.image] : []),
      rating: typeof p.rating === 'number' ? p.rating : 4.5,
      reviews: typeof p.reviews === 'number' ? p.reviews : 0,
      discount: (typeof p.discount === 'string' && p.discount) ? p.discount : computedDiscount,
      inStock: typeof p.inStock === 'boolean' ? p.inStock : true,
      category: p.category || 'Accessories',
    };
  }

  // Persist the full product list and keep in-memory state in sync.
  saveProducts(productsArray, triggerNotify = true) {
    try {
      const normalized = productsArray.map(p => this.normalizeProduct(p));
      localStorage.setItem('zyvron_all_products', JSON.stringify(normalized));
      this.products = normalized;
      if (triggerNotify) this.notify();
    } catch (e) {
      console.warn('LocalStorage error saving products', e);
      this.showToast('Failed to save products locally.', 'error');
    }
  }

  // --- Admin CRUD ---

  updateProduct(updatedProductData) {
    if (!updatedProductData.title || !updatedProductData.price) {
      this.showToast('Title and Price are required.', 'error');
      return;
    }

    const index = this.products.findIndex(p => p.id === updatedProductData.id);
    if (index === -1) {
      this.showToast('Product not found.', 'error');
      return;
    }

    const newList = [...this.products];
    newList[index] = { ...this.products[index], ...updatedProductData };

    this.saveProducts(newList);
    this.showToast(`Updated "${updatedProductData.title.slice(0, 20)}...".`, 'success');
  }

  addProduct(newProductData) {
    if (!newProductData.title || !newProductData.price) {
      this.showToast('Title and Price are required.', 'error');
      return;
    }

    const newId = newProductData.id || generateProductId(newProductData.title, this.products.map(p => p.id));
    const img = newProductData.image || "https://images.unsplash.com/photo-1581351123004-757df051db8e?w=900&q=80&auto=format&fit=crop";

    const productToSave = {
      rating: 4.9,
      reviews: 0,
      inStock: true,
      ...newProductData,
      id: newId,
      image: img,
      images: newProductData.images && newProductData.images.length ? newProductData.images : [img]
    };
    // The Firestore listener may have inserted this product while the form
    // was awaiting its write. Replace by ID instead of creating a duplicate.
    const newList = [productToSave, ...this.products.filter(product => product.id !== newId)];

    this.saveProducts(newList);
    this.showToast(`Added "${newProductData.title.slice(0, 20)}...".`, 'success');
  }

  deleteProduct(productId) {
    const productToDelete = this.products.find(p => p.id === productId);
    if (!productToDelete) return;

    const newList = this.products.filter(p => p.id !== productId);

    this.saveProducts(newList);
    this.deleteProductFromFirebase(productId, productToDelete.category).catch(() => {});
    this.showToast(`Deleted "${productToDelete.title.slice(0, 20)}...".`, 'info');
  }

  async deleteProductFromFirebase(docId, category) {
    const db = this.getFirebaseDb();
    if (!db || !docId) return false;
    try {
      const { doc, deleteDoc } = await import(
        'https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js'
      );
      await deleteDoc(doc(db, productsCollectionName(category), docId));
      return true;
    } catch (error) {
      console.warn('Firebase product delete failed (removed locally only):', error);
      return false;
    }
  }

  // --- Admin Auth (real Firebase Authentication — email/password) ---
  // isAdmin is NOT set here directly on login; initAdminAuthListener (see
  // App.init) is the single source of truth and flips isAdmin/currentView
  // once Firebase confirms the sign-in. This function just triggers that.

  async loginAdmin(email, password) {
    const auth = this.getFirebaseAuth();
    if (!auth) {
      this.showToast('Firebase Authentication is unavailable. Check the Firebase API key/settings.', 'error');
      return false;
    }
    try {
      this.adminEntryRequested = true;
      const { signInWithEmailAndPassword } = await import(
        'https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js'
      );
      await signInWithEmailAndPassword(auth, email.trim(), password);
      // initAdminAuthListener verifies the /admins/{uid} allowlist and opens
      // the admin panel only after that check succeeds.
      return true;
    } catch (error) {
      this.adminEntryRequested = false;
      console.error('Admin login failed:', error);
      const code = error?.code || '';
      const message = code === 'auth/invalid-credential' || code === 'auth/wrong-password' || code === 'auth/user-not-found'
        ? 'Email or password is incorrect.'
        : code === 'auth/too-many-requests'
          ? 'Too many attempts. Wait a little and try again.'
          : code === 'auth/operation-not-allowed'
            ? 'Email/Password sign-in is disabled in Firebase Authentication.'
            : `Firebase Authentication failed${code ? ` (${code})` : ''}. Check the Firebase API key/settings.`;
      this.showToast(message, 'error');
      return false;
    }
  }

  async logoutAdmin() {
    const auth = this.getFirebaseAuth();
    try {
      if (auth) {
        const { signOut } = await import('https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js');
        await signOut(auth);
      }
    } catch (error) {
      console.warn('Admin logout failed:', error);
    }
    this.activeModal = null;
    this.adminViewRequested = false;
    sessionStorage.removeItem('zyvron_admin_view');
    sessionStorage.removeItem('zyvron_admin_tab');
    sessionStorage.removeItem('zyvron_admin_order_filter');
    sessionStorage.removeItem('zyvron_admin_revenue_date');
    this.currentView = 'store';
    this.showToast('Admin logged out.', 'info');
    this.notify();
  }

  // --- Customer Auth (real Firebase Authentication: Email/Password) ------
  // Note: this only wires up the sign-in itself. It does NOT create the
  // users/{uid} Firestore profile — see ensureCustomerProfile() below.

  async loginCustomerEmail(email, password, mode = 'signin') {
    const auth = this.getFirebaseAuth();
    if (!auth) return { ok: false, message: 'Firebase Authentication is unavailable. Check the Firebase API key/settings.' };
    const trimmedEmail = email.trim();
    const isSignup = mode === 'signup';
    try {
      const { signInWithEmailAndPassword, createUserWithEmailAndPassword } = await import(
        'https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js'
      );

      if (isSignup) {
        try {
          const cred = await createUserWithEmailAndPassword(auth, trimmedEmail, password);
          await this.ensureCustomerProfile(cred.user, 'email');
          return { ok: true };
        } catch (createError) {
          if (createError?.code === 'auth/email-already-in-use') {
            return { ok: false, message: 'This email is already registered. Please sign in instead.' };
          }
          if (createError?.code === 'auth/weak-password') {
            return { ok: false, message: 'Password must be at least 6 characters.' };
          }
          throw createError;
        }
      }

      try {
        const cred = await signInWithEmailAndPassword(auth, trimmedEmail, password);
        await this.ensureCustomerProfile(cred.user, 'email');
        return { ok: true };
      } catch (signInError) {
        const signInCode = signInError?.code || '';
        if (signInCode !== 'auth/invalid-credential' && signInCode !== 'auth/user-not-found') {
          throw signInError;
        }
        try {
          const cred = await createUserWithEmailAndPassword(auth, trimmedEmail, password);
          await this.ensureCustomerProfile(cred.user, 'email');
          return { ok: true };
        } catch (createError) {
          if (createError?.code === 'auth/email-already-in-use') {
            return { ok: false, message: 'Incorrect password for this email.' };
          }
          throw createError;
        }
      }
    } catch (error) {
      console.error('Customer email auth failed:', error);
      const code = error?.code || '';
      const message = code === 'auth/too-many-requests'
        ? 'Too many attempts. Wait a little and try again.'
        : code === 'auth/operation-not-allowed'
          ? 'Email/Password sign-in is disabled in Firebase Authentication.'
          : code === 'auth/weak-password'
            ? 'Password must be at least 6 characters.'
            : code === 'auth/network-request-failed'
              ? 'Network error — check your connection and try again.'
              : `Authentication failed${code ? ` (${code})` : ''}. Please try again.`;
      return { ok: false, message };
    }
  }

  // Called right after a verified email/password sign-in. Creates
  // /users/{uid} the first time this Firebase Auth user signs in,
  // and just bumps lastLoginAt on every login after that. Matches
  // firestore.rules: a customer can only read/write their own /users/{uid}
  // doc — never anyone else's, never list the collection.
  // Non-fatal by design: the customer is already signed in via Firebase
  // Auth regardless of whether this profile write succeeds (e.g. rules not
  // deployed yet) — this never blocks or fails the sign-in itself.
  async ensureCustomerProfile(user, method) {
    const db = this.getFirebaseDb();
    if (!db || !user) return;
    try {
      const { doc, getDoc, setDoc, updateDoc, serverTimestamp } = await import(
        'https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js'
      );
      const ref = doc(db, 'users', user.uid);
      const existing = await getDoc(ref);
      if (existing.exists()) {
        await updateDoc(ref, { lastLoginAt: serverTimestamp() });
      } else {
        await setDoc(ref, {
          email: user.email || null,
          phone: user.phoneNumber || null,
          method, // 'email' | 'phone' — which method this account was created with
          createdAt: serverTimestamp(),
          lastLoginAt: serverTimestamp()
        });
      }
    } catch (error) {
      console.warn('Customer profile sync failed (sign-in itself is unaffected):', error);
    }
  }

  async logoutCustomer() {
    const auth = this.getFirebaseAuth();
    try {
      if (auth) {
        const { signOut } = await import('https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js');
        await signOut(auth);
      }
    } catch (error) {
      console.warn('Customer sign-out failed:', error);
    }
    // Set immediately for instant UI feedback; App.initCustomerAuthListener's
    // onAuthStateChanged will confirm this right behind it.
    this.customerUser = null;
    this.myAccountOrders = null;
    this.myAccountOrdersSource = null;
    this.activeModal = null;
    this.showToast('Signed out.', 'info');
    this.notify();
  }

  // Opens "My Account" and kicks off a fresh order-history fetch every
  // time — cheap for a single query, and it means a second sign-in on the
  // same device (or an order placed elsewhere in the meantime) never shows
  // stale data.
  openMyAccount() {
    this.activeModal = null;
    this.activeCategory = 'all';
    if (!this.customerUser) {
      // Store has no navigateTo() of its own (that's an App-only concern) —
      // this used to call `this.navigateTo(...)` directly, which threw
      // "this.navigateTo is not a function" for every signed-out visitor
      // who clicked the header's My Account icon. Route through the same
      // defensive window.app hand-off used elsewhere in Store instead.
      if (window.app && typeof window.app.navigateTo === 'function') {
        window.app.navigateTo('#/login');
      }
      return;
    }
    this.currentView = 'my-account';
    this.notify();
    this.myAccountOrders = null;
    this.myAccountOrdersSource = null;
    this.myAccountOrdersLoading = true;
    this.loadAccountOrderHistory();
  }

  // Every order this signed-in customer has ever placed, on any device —
  // a real Firestore query scoped to their own uid (see the /orders `list`
  // rule in firestore.rules, which only allows this when the query filters
  // by customerUid == the caller's own auth uid). Falls back to this
  // device's local tracking-code history (the same one Track My Order
  // uses) if there's no signed-in uid, Firestore isn't connected, or the
  // query fails for any reason — "My Account" should never dead-end.
  async loadAccountOrderHistory() {
    const uid = this.customerUser?.uid;
    const db = this.getFirebaseDb();
    if (uid && db) {
      try {
        const { collection, query, where, orderBy, getDocs } = await import(
          'https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js'
        );
        const q = query(collection(db, 'orders'), where('customerUid', '==', uid), orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);
        this.myAccountOrders = snapshot.docs.map(docSnap => {
          const data = docSnap.data();
          return { orderNumber: data.orderNumber || docSnap.id, date: data.date || '', order: data };
        });
        this.myAccountOrdersSource = 'account';
        this.myAccountOrdersLoading = false;
        this.notify();
        return;
      } catch (error) {
        console.warn("Account order history query failed — falling back to this device's local order list:", error);
      }
    }
    this.myAccountOrders = this.loadMyOrders();
    this.myAccountOrdersSource = 'device';
    this.myAccountOrdersLoading = false;
    this.notify();
  }

  setCurrentView(viewName) {
    const routeMap = {
      about: '#/about',
      contact: '#/contact',
      privacy: '#/privacy',
      terms: '#/terms',
      refund: '#/refund',
      faq: '#/faq',
      shipping: '#/shipping',
      warranty: '#/warranty',
      blog: '#/blog'
    };

    if (viewName === 'store') {
      if (window.app && typeof window.app.goToCategory === 'function') {
        window.app.goToCategory('all');
      } else {
        this.currentView = 'store';
        this.activeCategory = 'all';
        this.notify();
      }
      return;
    }

    if (routeMap[viewName]) {
      const nextHash = routeMap[viewName];
      if ((window.location.hash || '') !== nextHash) {
        if (window.app && typeof window.app.navigateTo === 'function') {
          window.app.navigateTo(nextHash);
        } else {
          window.location.hash = nextHash;
        }
      }
      return;
    }

    this.currentView = viewName;
    if (viewName !== 'category') {
      this.activeCategory = 'all';
    }
    if (viewName === 'admin') {
      this.adminViewRequested = true;
      sessionStorage.setItem('zyvron_admin_view', 'true');
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
    this.notify();
  }

  loadCart() {
    try {
      const saved = localStorage.getItem('techni_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  }

  saveCart() {
    try {
      localStorage.setItem('techni_cart', JSON.stringify(this.cart));
    } catch (e) {
      console.warn('LocalStorage error', e);
    }
  }

  // Remembers tracking codes for orders placed FROM THIS BROWSER, so a
  // returning customer who opens "Track My Order" doesn't have to recall
  // or retype their code from memory — it's just there. Device-local only
  // (localStorage), not a Firestore/account-based order history.
  loadMyOrders() {
    try {
      const saved = localStorage.getItem('zyvron_my_orders');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  }

  normalizeTrackingCode(trackingCode) {
    const compact = String(trackingCode || '').trim().toUpperCase().replace(/\s+/g, '');
    if (/^TP\d{6}$/.test(compact)) return `TP-${compact.slice(2)}`;
    return compact;
  }

  normalizeCustomerPhone(phone) {
    const digits = String(phone || '').replace(/\D/g, '');
    if (digits.startsWith('92')) return digits;
    if (digits.startsWith('0')) return `92${digits.slice(1)}`;
    return digits;
  }

  loadCustomerDetails() {
    try {
      return JSON.parse(localStorage.getItem('zyvron_customer_details') || 'null') || {};
    } catch {
      return {};
    }
  }

  saveCustomerDetails(customer) {
    try {
      localStorage.setItem('zyvron_customer_details', JSON.stringify({
        name: customer?.name || '',
        phone: customer?.phone || '',
        city: customer?.city || '',
        address: customer?.address || ''
      }));
    } catch (error) {
      console.warn('Customer details could not be saved locally:', error);
    }
  }

  saveMyOrderCode(orderNumber, date, order = null) {
    try {
      const list = this.loadMyOrders().filter(o => o.orderNumber !== orderNumber);
      list.unshift({ orderNumber, date, order });
      localStorage.setItem('zyvron_my_orders', JSON.stringify(list.slice(0, 5))); // keep the 5 most recent
    } catch (e) {
      console.warn('LocalStorage error', e);
    }
  }

  loadWishlist() {
    try {
      const saved = localStorage.getItem('techni_wishlist');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  }

  saveWishlist() {
    try {
      localStorage.setItem('techni_wishlist', JSON.stringify(Array.from(this.wishlist)));
    } catch (e) {
      console.warn('LocalStorage error', e);
    }
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach(listener => listener(this));
  }

  // Cart Actions
  addToCart(product, quantity = 1, showDrawer = true) {
    const existing = this.cart.find(item => item.product.id === product.id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.cart.push({ product, quantity });
    }
    this.saveCart();
    this.showToast(`✓ Added to cart — keep shopping or tap the cart to checkout`, 'success');
    // Cart is now its own full page (#/cart), not an overlay drawer, so
    // "showing the cart" after an add means navigating there.
    if (showDrawer) {
      if (window.app && typeof window.app.navigateTo === 'function') {
        window.app.navigateTo('#/cart');
      } else {
        this.notify();
      }
    } else {
      this.notify();
    }
  }

  removeFromCart(productId) {
    this.cart = this.cart.filter(item => item.product.id !== productId);
    this.saveCart();
    this.notify();
  }

  // --- Save for Later ----------------------------------------------------
  loadSavedForLater() {
    try {
      const saved = localStorage.getItem('techni_saved_for_later');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  }

  saveSavedForLaterStorage() {
    try {
      localStorage.setItem('techni_saved_for_later', JSON.stringify(this.savedForLater));
    } catch (e) {
      console.warn('LocalStorage error', e);
    }
  }

  moveToSavedForLater(productId) {
    const item = this.cart.find(i => i.product.id === productId);
    if (!item) return;
    this.cart = this.cart.filter(i => i.product.id !== productId);
    this.savedForLater = this.savedForLater.filter(p => p.id !== productId);
    this.savedForLater.unshift(item.product);
    this.saveCart();
    this.saveSavedForLaterStorage();
    this.showToast('Saved for later.', 'info');
    this.notify();
  }

  moveToCartFromSaved(productId) {
    const product = this.savedForLater.find(p => p.id === productId);
    if (!product) return;
    this.savedForLater = this.savedForLater.filter(p => p.id !== productId);
    this.saveSavedForLaterStorage();
    this.addToCart(product, 1, false);
    this.showToast('Moved to cart.', 'success');
  }

  removeFromSaved(productId) {
    this.savedForLater = this.savedForLater.filter(p => p.id !== productId);
    this.saveSavedForLaterStorage();
    this.notify();
  }

  updateQuantity(productId, delta) {
    const item = this.cart.find(i => i.product.id === productId);
    if (!item) return;

    const nextQty = item.quantity + delta;

    if (nextQty < 1) {
      // Quantity can never go below 1. Removal only happens via the explicit Remove button.
      this.showToast('Minimum quantity is 1.', 'info');
      return;
    }

    item.quantity = nextQty;
    this.saveCart();
    this.notify();
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
    this.notify();
  }

  // Buy Now: uses the customer's current cart for checkout, adding the
  // clicked product when it is not already there. The original cart remains
  // untouched in localStorage and is restored when this temporary checkout
  // ends.
  startBuyNowCheckout(product, qty = 1) {
    if (!this.isBuyNowCheckout) {
      this.buyNowBackupCart = this.cart;
      this.isBuyNowCheckout = true;
      if (!this.cart.some(item => item.product.id === product.id)) {
        this.cart = [...this.cart, { product, quantity: Math.max(1, qty) }];
      }
      return;
    }
    this.isBuyNowCheckout = true;
  }

  // Restores the customer's real cart exactly as it was before Buy Now was
  // clicked. Called both on a completed Buy Now order (see placeOrder) and
  // when the customer abandons the Buy Now checkout (see closeModal), so
  // nothing from Buy Now can ever linger in or wipe their actual cart.
  restoreCartAfterBuyNow() {
    if (!this.isBuyNowCheckout) return;
    this.cart = this.buyNowBackupCart || [];
    this.buyNowBackupCart = null;
    this.isBuyNowCheckout = false;
  }

  getCartSubtotal() {
    return this.cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  }

  getCartCount() {
    return this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  getFreeShippingThreshold() {
    return 3000;
  }

  getFreeShippingProgress() {
    const subtotal = this.getCartSubtotal();
    const threshold = this.getFreeShippingThreshold();
    const percentage = Math.min(100, Math.round((subtotal / threshold) * 100));
    const remaining = Math.max(0, threshold - subtotal);
    return { subtotal, threshold, percentage, remaining, isFree: subtotal >= threshold };
  }

  // Wishlist Actions
  toggleWishlist(productId) {
    const isPresent = this.wishlist.has(productId);
    if (isPresent) {
      this.wishlist.delete(productId);
      this.showToast('Removed from Wishlist', 'info');
    } else {
      this.wishlist.add(productId);
      this.showToast('Saved to Wishlist ❤️', 'success');
    }
    this.saveWishlist();
    this.notify();
  }

  clearWishlist() {
    if (!this.wishlist.size) return;
    this.wishlist.clear();
    this.saveWishlist();
    this.showToast('Wishlist cleared.', 'success');
    this.notify();
  }

  isWishlisted(productId) {
    return this.wishlist.has(productId);
  }

  getWishlistCount() {
    return this.wishlist.size;
  }

  // Filter & Search Actions
  setCategory(category) {
    this.activeCategory = category;
    this.activeTag = null;
    this.currentPage = 1;
    this.notify();
  }

  setSearchQuery(query) {
    // PERF FIX: was calling notify() (→ a full app re-render) on every
    // single keystroke, which is the main reason typing in search felt
    // laggy across a large catalog. Debounce it slightly so fast typing
    // batches into one render shortly after the user pauses, instead of
    // one full rebuild per character. The input itself is a normal DOM
    // input the browser already updates instantly, so no keystrokes are
    // lost — only how often the rest of the page re-renders in response.
    this.searchQuery = query;
    this.currentPage = 1;
    clearTimeout(this._searchNotifyTimer);
    this._searchNotifyTimer = setTimeout(() => this.notify(), 180);
  }

  setTag(tag) {
    this.activeTag = tag;
    this.searchQuery = tag;
    this.currentPage = 1;
    this.notify();
  }

  setSortBy(sortKey) {
    this.sortBy = sortKey;
    this.currentPage = 1;
    this.notify();
  }

  // Pagination helpers
  getTotalPages(totalItems) {
    return Math.max(1, Math.ceil(totalItems / this.productsPerPage));
  }

  getPaginatedProducts(filteredProducts) {
    const totalPages = this.getTotalPages(filteredProducts.length);
    if (this.currentPage > totalPages) this.currentPage = totalPages;
    const start = (this.currentPage - 1) * this.productsPerPage;
    return filteredProducts.slice(start, start + this.productsPerPage);
  }

  goToPage(pageNum) {
    this.currentPage = pageNum;
    this.notify();
    const section = document.getElementById('section-products');
    if (section) section.scrollIntoView({ behavior: 'auto', block: 'start' });
  }

  nextPage(totalPages) {
    if (this.currentPage < totalPages) this.goToPage(this.currentPage + 1);
  }

  prevPage() {
    if (this.currentPage > 1) this.goToPage(this.currentPage - 1);
  }

  toggleViewMode() {
    this.viewMode = this.viewMode === 'mobile' ? 'full' : 'mobile';
    this.notify();
  }

  getFilteredProducts() {
    let result = [...this.products];

    // Category filter
    if (this.activeCategory === 'flash') {
      result = result.filter(p => p.isFlashSale);
    } else if (this.activeCategory === 'wishlist') {
      result = result.filter(p => this.wishlist.has(p.id));
    } else if (this.activeCategory !== 'all') {
      result = result.filter(p => p.category === this.activeCategory);
    }

    // Search query filter
    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase().trim();
      result = result.filter(p => 
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q)) ||
        p.description.toLowerCase().includes(q)
      );
    }

    // Sorting
    switch (this.sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'discount':
        result.sort((a, b) => {
          const discA = ((a.compareAtPrice - a.price) / a.compareAtPrice) || 0;
          const discB = ((b.compareAtPrice - b.price) / b.compareAtPrice) || 0;
          return discB - discA;
        });
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'popular':
      default:
        result.sort((a, b) => b.reviews - a.reviews);
        break;
    }

    return result;
  }

  // Modal Management
  openModal(modalName, payload = null) {
    this.activeModal = modalName;
    this.quickViewProduct = modalName === 'quickview' ? payload : null;
    this.notify();
  }

  closeModal() {
    // NOTE: quickViewProduct now belongs to the product PAGE (#/product/<id>,
    // store.currentView === 'product'), not to a modal — closing an
    // unrelated modal (checkout, order-success, etc.) while a product page
    // is open must never wipe it out from under that page. Only the
    // 'quickview' modal name (kept for backward compatibility, no longer
    // set anywhere) would clear it here.
    const wasProductPage = this.activeModal === 'quickview';
    // Abandoning a Buy Now checkout (closed without placing the order)
    // restores the customer's real cart exactly as it was before Buy Now
    // was clicked — nothing from Buy Now should linger in their cart.
    if (this.activeModal === 'checkout' && this.isBuyNowCheckout) {
      this.restoreCartAfterBuyNow();
    }
    this.activeModal = null;
    if (wasProductPage) this.quickViewProduct = null;
    this.notify();
    if (wasProductPage && window.app && typeof window.app.replaceRoute === 'function') {
      window.app.replaceRoute('#/');
    }
  }

  // Checkout & Order Placement
  async placeOrder(customerData) {
    const subtotal = this.getCartSubtotal();
    let discount = 0;
    let couponCode = null;

    if (this.appliedCoupon) {
      const redeemed = await this.redeemCouponInFirebase(this.appliedCoupon.code);
      if (redeemed) {
        discount = this.getCartDiscount();
        couponCode = this.appliedCoupon.code;
      } else {
        this.showToast('That coupon was just used elsewhere — placing order at full price.', 'error');
      }
    }

    const orderNumber = 'TP-' + Math.floor(100000 + Math.random() * 900000);
    this.lastOrder = {
      orderNumber,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
      items: [...this.cart],
      subtotal,
      discount,
      coupon: couponCode,
      total: Math.max(0, subtotal - discount),
      customer: customerData,
      paymentMethod: 'Cash on Delivery (COD)',
      status: 'pending',
      customerStatus: 'accepted',
      // Tags this order to the signed-in customer's Firebase Auth uid (or
      // null for a guest checkout) so "My Account" can later query every
      // order this account has ever placed, on any device — see
      // loadAccountOrderHistory() and the /orders `list` rule in
      // firestore.rules.
      customerUid: this.customerUser?.uid || null,
      // The signed-in account's login email (or null for a guest checkout).
      // This is separate from customer.phone/name/address above, which come
      // from the checkout form and belong to whoever is receiving the
      // package — customerEmail is the account email, shown in the admin
      // panel so admin can see which account (if any) placed the order.
      customerEmail: this.customerUser?.email || null
    };
    // IMPORTANT: do not show "Order Placed" until Firestore confirms the
    // order was written. Otherwise the customer receives a tracking code for
    // an order that may not exist in Firebase.
    try {
      await this.saveOrderToFirebase(this.lastOrder);
    } catch (error) {
      console.error('Order could not be saved:', error);
      this.showToast(
        error?.code === 'permission-denied'
          ? 'Order was not saved: Firestore denied the write. Deploy the latest firestore.rules.'
          : 'Order was not saved. Please check Firebase connection/API key and try again.',
        'error'
      );
      return false;
    }

    // Remember the tracking code only after the server confirms the write.
    this.saveMyOrderCode(orderNumber, this.lastOrder.date, this.lastOrder);
    this.saveCustomerDetails(customerData);
    // Restore the real cart reference after Buy Now, then clear it because
    // every item in this successful checkout has now been ordered.
    if (this.isBuyNowCheckout) {
      this.restoreCartAfterBuyNow();
    }
    this.clearCart();
    this.appliedCoupon = null;
    this.openModal('order-success');
    return true;
  }

  showToast(message, type = 'info') {
    const event = new CustomEvent('techni-toast', { detail: { message, type } });
    window.dispatchEvent(event);
  }

  // ===== Product Comparison =====
  loadCompare() {
    try {
      const saved = localStorage.getItem('techni_compare');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  }

  saveCompare() {
    try {
      localStorage.setItem('techni_compare', JSON.stringify(this.compareList));
    } catch (e) {
      console.warn('LocalStorage error', e);
    }
  }

  isCompared(productId) {
    return this.compareList.includes(productId);
  }

  toggleCompare(productId) {
    if (this.isCompared(productId)) {
      this.compareList = this.compareList.filter(id => id !== productId);
      this.saveCompare();
      this.showToast('Removed from Comparison', 'info');
      this.notify();
      return;
    }

    if (this.compareList.length >= 4) {
      this.showToast('You can compare a maximum of 4 products.', 'error');
      return;
    }

    this.compareList.push(productId);
    this.saveCompare();
    this.showToast('Added to Comparison ⚖️', 'success');
    this.notify();
  }

  removeFromCompare(productId) {
    this.compareList = this.compareList.filter(id => id !== productId);
    this.saveCompare();
    this.notify();
  }

  clearCompare() {
    this.compareList = [];
    this.saveCompare();
    this.notify();
  }

  getCompareProducts() {
    return this.compareList
      .map(id => this.products.find(p => p.id === id))
      .filter(Boolean);
  }

  // ===== AI Product Assistant =====
  loadChat() {
    try {
      const saved = sessionStorage.getItem('techni_chat');
      return saved ? JSON.parse(saved) : [
        { role: 'assistant', text: "Hi! I'm the Zyvron Tech Accessories Assistant 🤖. Ask me about our earbuds, speakers, headphones, smartwatches, gaming gear, mobile accessories, or any product's price, features, or which one suits your needs." }
      ];
    } catch {
      return [];
    }
  }

  saveChat() {
    try {
      sessionStorage.setItem('techni_chat', JSON.stringify(this.chatMessages));
    } catch (e) {
      console.warn('SessionStorage error', e);
    }
  }

  addChatMessage(role, text) {
    this.chatMessages.push({ role, text });
    this.saveChat();
    this.notify();
  }

  setAssistantTyping(isTyping) {
    this.isAssistantTyping = isTyping;
    this.notify();
  }

  clearChat() {
    this.chatMessages = [
      { role: 'assistant', text: "Chat cleared! Ask me anything about Zyvron Tech Accessories' audio, wearables, gaming gear, or mobile accessories." }
    ];
    this.saveChat();
    this.notify();
  }
}

const store = new Store();

// Expose globally so inline onclick="store.xxx()" handlers (used throughout the
// rendered markup) can actually reach the store instance from the page context.
window.store = store;
// getCategories, PRODUCTS, and store are all defined in this single script.js
// file (loaded via one <script> tag in index.html) — no bundler/module server
// required, so the store works correctly even when index.html is opened directly from disk.
function formatPKR(num) {
  return 'Rs. ' + Number(num).toLocaleString('en-PK');
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// --- Slugs & product IDs -------------------------------------------------
// Turns any string into a clean, URL-safe slug: lowercase, letters/numbers
// only, single hyphens. Used for both category URLs (#/category/<slug>)
// and as the base of generated product IDs.
function slugify(text) {
  return (text || '')
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
}

// A category's URL slug is just its name, slugified — e.g. "Audio & Speakers"
// becomes "audio-speakers". Kept as a function (not a static map) so it always
// matches whatever categories getCategories() currently derives from the
// live product list.
function categoryToSlug(categoryName) {
  return slugify(categoryName);
}

function categoryFromSlug(slug, products) {
  return getCategories(products)
    .filter(c => c.id !== 'all')
    .find(c => categoryToSlug(c.id) === slug) || null;
}

// Each category now lives in its own Firestore collection — products_<slug>
// — instead of one shared "products" collection filtered client-side. A
// "categories" registry collection (see initFirestoreProductsSync) tracks
// which category collections exist so every device/tab can discover new
// ones without a hardcoded list.
function productsCollectionName(categoryName) {
  return 'products_' + (slugify(categoryName) || 'uncategorized');
}

// Generates a real, human-readable, unique product ID from the product's
// title — e.g. "A9 Pro True Wireless Earbuds" -> "a9-pro-true-wireless-earbuds-k3f9".
// Previously new products only ever got an opaque 'zyv-<timestamp>' id that
// was never shown anywhere, which is what made products look like they had
// no properly assigned ID. The short random suffix keeps two products with
// the same title from colliding, and this same ID is what gets used as the
// Firestore document ID, the cart/wishlist/compare key, and the #/product/
// URL — one id, used consistently everywhere.
function generateProductId(title, existingIds = []) {
  const base = slugify(title) || 'product';
  const existing = new Set(existingIds);
  let candidate;
  do {
    const suffix = Math.random().toString(36).slice(2, 6);
    candidate = `${base}-${suffix}`;
  } while (existing.has(candidate));
  return candidate;
}

class App {
  constructor() {
    this.appContainer = document.getElementById('app');
    this.currentHeroSlide = 1;
    this.heroSlidesCount = 3;
    this.heroTimer = null;
    this.flashSaleEndTime = Date.now() + (4 * 3600 + 38 * 60 + 19) * 1000;
    this.countdownTimer = null;
    this.activeDrawerTab = 'menu';
    this.activeQuickViewImgIndex = 0;
    this.quickViewQty = 1;
    this.activeProductTab = 'description';
    this.selectedProductColor = null;
    this.selectedReviewRating = 0;
    // Tracks whether applyRoute() has ever run. The very first call happens
    // during page load/refresh — the browser is already positioned at the
    // top (or wherever the URL/scroll-restoration puts it), so auto-scrolling
    // to the product grid on that first call is what caused the page to open
    // already scrolled down to the middle. Every call after that first one is
    // a real user navigation (View All, category click, etc.) and should
    // still scroll as before.
    this._isFirstRouteApply = true;

    this.init();
  }

  // Single source of truth for isAdmin: listens to Firebase Auth directly
  // instead of a session flag, so a refresh (or a brand new tab) correctly
  // restores "still logged in" via Firebase's own persistence, and a
  // logout/expired session correctly falls back to the storefront.
  async initAdminAuthListener() {
    const auth = store.getFirebaseAuth();
    if (!auth) {
      this.adminAuthReady = true;
      return;
    }
    const { onAuthStateChanged, signOut } = await import('https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js');
    const { doc, getDoc } = await import('https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js');

    onAuthStateChanged(auth, async (user) => {
      const wasAdmin = store.isAdmin;
      if (!user) {
        store.isAdmin = false;
        store.adminViewRequested = false;
        sessionStorage.removeItem('zyvron_admin_view');
        this.adminAuthReady = true;
        if (wasAdmin) {
          store.currentView = 'store';
          store.stopFirestoreOrdersSync();
        }
        store.notify();
        if (this.pendingAdminEntry) {
          this.pendingAdminEntry = false;
          this.openAdminEntry();
        }
        return;
      }

      // Was this sign-in actually an attempt to enter the ADMIN panel
      // (via loginAdmin()/openAdminEntry(), or resuming a previous admin
      // session)? A plain customer signing in through the normal storefront
      // modal has none of these flags set. This distinction is the fix:
      // previously the admin check ran — and forcibly signed the user back
      // out with an error toast — for EVERY signed-in user, including
      // ordinary customers, since this listener fires on every auth state
      // change regardless of which login form was used.
      const attemptingAdminEntry = this.pendingAdminEntry || store.adminViewRequested || store.adminEntryRequested;

      try {
        const db = store.getFirebaseDb();
        const adminDoc = db ? await getDoc(doc(db, 'admins', user.uid)) : null;
        if (!adminDoc?.exists()) {
          store.isAdmin = false;
          this.adminAuthReady = true;
          // Only kick the user out and show the admin-only warning when
          // they were actually trying to reach the admin panel. A normal
          // customer session must never be interrupted by this check.
          if (attemptingAdminEntry) {
            await signOut(auth);
            store.currentView = 'store';
            store.stopFirestoreOrdersSync();
            store.showToast('Login succeeded, but this account is not an admin. Add its UID under Firestore /admins first.', 'error');
            this.pendingAdminEntry = false;
            store.adminViewRequested = false;
            store.adminEntryRequested = false;
            sessionStorage.removeItem('zyvron_admin_view');
          }
          store.notify();
          return;
        }

        store.isAdmin = true;
        this.adminAuthReady = true;
        // The customer-facing catalog sync (initFirestoreProductsSync) may
        // already have found an empty Firestore project at page load — but
        // that happens before any admin is signed in, and firestore.rules
        // only allow an admin to write categories/products, so it correctly
        // did nothing. Re-check now that this browser is a confirmed admin,
        // so first-time catalog setup can actually complete.
        store.retrySeedFirestoreCatalogIfEmpty();
        if (this.pendingAdminEntry || store.adminViewRequested) {
          this.pendingAdminEntry = false;
          store.adminViewRequested = true;
          sessionStorage.setItem('zyvron_admin_view', 'true');
          store.currentView = 'admin';
          store.activeModal = null;
        }
        if (store.adminEntryRequested) {
          store.adminViewRequested = true;
          sessionStorage.setItem('zyvron_admin_view', 'true');
          store.currentView = 'admin';
          store.adminEntryRequested = false;
          store.activeModal = null;
        }
        store.initFirestoreOrdersSync();
        store.notify();
      } catch (error) {
        console.error('Admin verification failed:', error);
        this.adminAuthReady = true;
        store.isAdmin = false;
        // Same rule as above: only disrupt the session (sign out + error
        // toast) when this was actually an admin-entry attempt. A customer
        // whose admin-status check merely failed to load stays signed in.
        if (attemptingAdminEntry) {
          await signOut(auth).catch(() => {});
          store.currentView = 'store';
          store.stopFirestoreOrdersSync();
          store.showToast('Could not verify admin access. Check Firestore /admins and Firebase connection.', 'error');
          this.pendingAdminEntry = false;
          store.adminViewRequested = false;
          store.adminEntryRequested = false;
          sessionStorage.removeItem('zyvron_admin_view');
        }
        store.notify();
      }
    });
  }

  // Tracks the signed-in CUSTOMER — separate from isAdmin/initAdminAuthListener
  // above, though both listen to the same underlying Firebase Auth instance
  // (a customer and an admin aren't expected to be signed in at once in the
  // same browser tab). Drives the header's "Sign In" -> "My Account" swap
  // and what My Account shows.
  async initCustomerAuthListener() {
    const auth = store.getFirebaseAuth();
    if (!auth) {
      store.customerAuthReady = true;
      return;
    }
    const { onAuthStateChanged } = await import('https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js');
    onAuthStateChanged(auth, (user) => {
      store.customerUser = user ? { uid: user.uid, email: user.email || null, phone: user.phoneNumber || null } : null;
      store.customerAuthReady = true;
      store.notify();
    });
  }

  init() {
    store.subscribe(() => this.render());
    this.initToastListener();
    this.initCountdown();
    this.initHeroSlider();
    this.initHeroHoverPause();
    this.initScrollListener();
    this.initKeyboardControls();
    this.initAdminHashTrigger();
    this.initPageRouter();
    // initPageRouter() -> applyRoute() already renders (via store.notify())
    // for every normal boot path. Only render here if that didn't happen —
    // e.g. loading directly at #admin while Firebase auth is still resolving,
    // where applyRoute() deliberately returns early without rendering. Doing
    // this unconditionally used to render the initial page TWICE in a row
    // (once from applyRoute()'s notify(), once from this call) before the
    // user ever saw anything — harmless for content, but it meant the
    // page-enter animation (gated on the view having just changed) played on
    // the first of those two renders and was then immediately wiped out by
    // the second, so the very first paint the user actually sees never
    // animated in.
    if (this._lastRenderedView === undefined) {
      this.render();
    }
    // NOTE: initAdminAuthListener()/initCustomerAuthListener() are NOT
    // called here. They're started once, from index.html's boot(), only
    // after Firebase is confirmed ready. Calling them here too (as this
    // used to do) registered a SECOND onAuthStateChanged listener whenever
    // Firebase happened to already be ready by the time App.init() ran —
    // which is what caused every login (including a normal customer
    // sign-in) to fire the admin "not an admin" toast twice.
  }

  showToast(message, type = 'info') {
    store.showToast(message, type);
  }

  // Close the active modal on Escape, and stop background scroll while any modal is open.
  initKeyboardControls() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && store.activeModal) {
        store.closeModal();
      }
      // Secret admin access — Ctrl+Shift+A (or Cmd+Shift+A on Mac)
      if (e.shiftKey && (e.ctrlKey || e.metaKey) && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        this.openAdminEntry();
      }
    });
  }

  // Secret admin access via URL hash, e.g. yourdomain.com/#admin
  initAdminHashTrigger() {
    const checkHash = () => {
      const hash = window.location.hash;
      const hasAdminSuffix = hash === '#admin' || hash === '#/admin' || hash.endsWith('/#admin');
      if (hasAdminSuffix) {
        const routeHash = hash.endsWith('/#admin') ? hash.slice(0, -7) || '#/' : '';
        history.replaceState(null, '', window.location.pathname + window.location.search + routeHash);
        this.openAdminEntry();
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
  }

  // ---------------------------------------------------------------------
  // Page router: real, shareable URLs for category pages and product pages.
  //
  // This is a client-side router (no backend/server routes exist), using
  // the URL hash so it works on a plain static host:
  //   #/                        -> home (All Products)
  //   #/category/<slug>         -> that category's own page
  //   #/flash                   -> Flash Deals page
  //   #/wishlist                -> Wishlist page
  //   #/product/<id>            -> that product's own page
  //
  // Previously the whole site was really one page with client-side
  // filtering: switching "category" just changed in-memory state and
  // scrolled, so refreshing, sharing a link, or using the browser's
  // back/forward buttons always dumped you back on the homepage — there
  // was no URL that actually pointed at a given category or product.
  // navigateTo() below updates the URL (and browser history) for every
  // category/product navigation; applyRoute() reads the URL back into
  // store state, so it works the same whether the user clicked a link,
  // pasted a URL, hit refresh, or used back/forward.
  initPageRouter() {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.addEventListener('popstate', (event) => {
      this.applyRoute(true);
      const scrollY = event.state?.scrollY;
      if (typeof scrollY === 'number') {
        setTimeout(() => window.scrollTo({ top: scrollY, behavior: 'auto' }), 0);
      }
    });
    this.applyRoute(); // handle whatever URL the page was loaded/refreshed with
  }

  // This storefront is a static front-end app, so the only reliable route form
  // is a hash route like #/wishlist or #/login. Real paths like /wishlist will
  // trigger a server 404 on file/static hosting before the app can respond.
  normalizeRoutePath(target) {
    if (!target) return '#/';
    const value = String(target).trim();
    if (!value || value === '#') return '#/';
    if (value.startsWith('#')) return value.startsWith('#/') || value === '#' ? value : `#/${value.replace(/^#/, '')}`;
    const clean = value.replace(/^\//, '');
    if (!clean) return '#/';
    return `#/${clean}`;
  }

  buildRouteUrl(target) {
    return this.normalizeRoutePath(target);
  }

  // Pushes a new URL + history entry, then applies it. Category/product
  // links go through this so back/forward and refresh all work correctly.
  navigateTo(hash) {
    const nextUrl = this.buildRouteUrl(hash);
    const currentHash = window.location.hash || '';
    if (currentHash === nextUrl) {
      this.applyRoute();
      return;
    }
    history.replaceState({ ...(history.state || {}), scrollY: window.scrollY }, '', window.location.href);
    history.pushState(null, '', nextUrl);
    this.applyRoute();
  }

  // Replaces the current URL without adding a history entry — used when
  // closing a product page, so "back" doesn't just reopen the same product.
  replaceRoute(hash) {
    history.replaceState(null, '', this.buildRouteUrl(hash));
  }

  // Keeps <meta name="description"> in sync with document.title on the
  // pages that actually matter for search/social (home, category, product,
  // flash deals) — previously every page shared the one static description
  // from index.html, so a shared product link or category link always
  // showed the generic homepage blurb in search results and link previews
  // instead of something specific to that page.
  setMetaDescription(text) {
    const tag = document.querySelector('meta[name="description"]');
    if (tag && text) tag.setAttribute('content', text);
  }

  applyRoute(isHistoryNavigation = false) {
    // Any live "Track My Order" listener belongs to the page the customer
    // was just on — stop it on every navigation so it doesn't keep writing
    // into a tracking-output box that no longer exists.
    if (store._unsubTrackedOrder) {
      store._unsubTrackedOrder();
      store._unsubTrackedOrder = null;
    }

    // A Buy Now checkout gets abandoned by navigating away (back button, a
    // product link, etc.) just as much as by closing the modal directly —
    // restore the customer's real cart the same way in either case.
    if (store.isBuyNowCheckout && store.activeModal === 'checkout') {
      store.restoreCartAfterBuyNow();
    }

    // Capture-and-clear on entry: only the first-ever call (page load/refresh)
    // is "initial" — every subsequent call (link click, back/forward, hash
    // change) is a real navigation and scrolls as before.
    const isInitialLoad = this._isFirstRouteApply;
    this._isFirstRouteApply = false;

    const rawHash = window.location.hash || '';
    const rawPath = window.location.pathname || '/';
    const path = rawHash.startsWith('#/') ? rawHash.replace(/^#/, '') : rawPath;
    const hashPath = rawHash.startsWith('#') ? rawHash.replace(/^#/, '') : '';

    // The secret "#admin" trigger and the admin console itself are handled
    // separately — don't let storefront routing fight with them.
    if (rawHash === '#admin' || store.currentView === 'admin') return;

    const productMatch = rawHash.match(/^#\/product\/(.+)$/) || path.match(/^\/product\/(.+)$/) || hashPath.match(/^\/product\/(.+)$/);
    if (productMatch) {
      const id = decodeURIComponent(productMatch[1]);
      const product = store.products.find(p => p.id === id);
      if (!product) {
        // Firebase products may arrive after the first route pass. Keep the
        // route alive so the live catalog can resolve it on refresh.
        store.currentView = 'product';
        store.activeModal = null;
        store.quickViewProduct = null;
        document.title = 'Loading Product — Zyvron Tech Accessories';
        store.notify();
        return;
      }
      // Product is its own full page (store.currentView = 'product'),
      // rendered in <main> exactly like About/Contact/Cart — not an
      // overlay modal — so it's a real, shareable, refresh-safe page.
      store.currentView = 'product';
      store.activeModal = null;
      store.quickViewProduct = product;
      this.activeQuickViewImgIndex = 0;
      this.quickViewQty = 1;
      this.activeProductTab = 'description';
      this.selectedProductColor = null;
      document.title = `${product.title} — Zyvron Tech Accessories`;
      {
        const shortDesc = (product.description || '').replace(/\s+/g, ' ').trim().slice(0, 100);
        this.setMetaDescription(`${product.title} — ${formatPKR(product.price)}. ${shortDesc}${shortDesc.length === 100 ? '…' : ''} Cash on delivery, nationwide shipping.`);
      }
      store.notify();
      if (!isInitialLoad) window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    if (rawHash === '#/cart' || path === '/cart' || hashPath === '/cart') {
      store.currentView = 'cart';
      store.activeModal = null;
      document.title = 'Your Cart — Zyvron Tech Accessories';
      store.notify();
      if (!isInitialLoad) window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    if (rawHash === '#/track-order' || path === '/track-order' || hashPath === '/track-order') {
      store.currentView = 'tracking';
      store.activeModal = null;
      document.title = 'Track Your Order — Zyvron Tech Accessories';
      store.notify();
      if (!isInitialLoad) window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    if (rawHash === '#/about' || path === '/about' || hashPath === '/about') {
      store.currentView = 'about';
      store.activeModal = null;
      document.title = 'About Us — Zyvron Tech Accessories';
      store.notify();
      if (!isInitialLoad) window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    if (rawHash === '#/contact' || path === '/contact' || hashPath === '/contact') {
      store.currentView = 'contact';
      store.activeModal = null;
      document.title = 'Contact Us — Zyvron Tech Accessories';
      store.notify();
      if (!isInitialLoad) window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    if (rawHash === '#/privacy' || path === '/privacy' || hashPath === '/privacy') {
      store.currentView = 'privacy';
      store.activeModal = null;
      document.title = 'Privacy Policy — Zyvron Tech Accessories';
      store.notify();
      if (!isInitialLoad) window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    if (rawHash === '#/terms' || path === '/terms' || hashPath === '/terms') {
      store.currentView = 'terms';
      store.activeModal = null;
      document.title = 'Terms of Service — Zyvron Tech Accessories';
      store.notify();
      if (!isInitialLoad) window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    if (rawHash === '#/refund' || path === '/refund' || hashPath === '/refund') {
      store.currentView = 'refund';
      store.activeModal = null;
      document.title = 'Refund Policy — Zyvron Tech Accessories';
      store.notify();
      if (!isInitialLoad) window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    if (rawHash === '#/faq' || path === '/faq' || hashPath === '/faq') {
      store.currentView = 'faq';
      store.activeModal = null;
      document.title = 'FAQs — Zyvron Tech Accessories';
      this.setMetaDescription('Answers to common questions about Zyvron orders, Cash on Delivery, shipping times, and our 14-day replacement guarantee.');
      store.notify();
      if (!isInitialLoad) window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    if (rawHash === '#/shipping' || path === '/shipping' || hashPath === '/shipping') {
      store.currentView = 'shipping';
      store.activeModal = null;
      document.title = 'Shipping & Delivery — Zyvron Tech Accessories';
      this.setMetaDescription('Zyvron shipping & delivery info: 2-4 working day nationwide delivery across Pakistan, free shipping over Rs. 3,000, and Cash on Delivery.');
      store.notify();
      if (!isInitialLoad) window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    if (rawHash === '#/warranty' || path === '/warranty' || hashPath === '/warranty') {
      store.currentView = 'warranty';
      store.activeModal = null;
      document.title = 'Warranty & Support — Zyvron Tech Accessories';
      this.setMetaDescription("Zyvron's 14-day replacement guarantee, warranty coverage, and how to get support or report a problem with your order.");
      store.notify();
      if (!isInitialLoad) window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    if (rawHash === '#/blog' || path === '/blog' || hashPath === '/blog') {
      store.currentView = 'blog';
      store.activeModal = null;
      document.title = 'Tech Tips Blog — Zyvron Tech Accessories';
      this.setMetaDescription('Tech tips and guides from Zyvron — earbud battery life, IPX water-resistance ratings, smartwatch care, and Bluetooth troubleshooting.');
      store.notify();
      if (!isInitialLoad) window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    if (rawHash === '#/account' || path === '/account' || hashPath === '/account') {
      store.currentView = 'my-account';
      store.activeModal = null;
      document.title = 'My Account — Zyvron Tech Accessories';
      store.notify();
      if (!isInitialLoad) window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    if (rawHash === '#/login' || rawHash === '#/signin' || path === '/login' || path === '/signin' || hashPath === '/login' || hashPath === '/signin') {
      store.currentView = 'auth';
      store.activeModal = null;
      document.title = 'Sign In — Zyvron Tech Accessories';
      store.notify();
      if (!isInitialLoad) window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    if (rawHash === '#/all-products' || path === '/all-products' || hashPath === '/all-products') {
      store.currentView = 'store';
      store.activeModal = null;
      store.activeCategory = 'all';
      document.title = 'Zyvron Tech Accessories™ — Premium Gadgets & Smart Tech Store';
      this.setMetaDescription('Browse the full Zyvron catalog — wireless audio, smartwatches, gaming gear & smart mobile accessories. Cash on delivery & free nationwide shipping in Pakistan.');
      store.notify();
      if (!isInitialLoad && !isHistoryNavigation) {
        setTimeout(() => this.scrollToProductGrid('section-categories'), 0);
      }
      return;
    }

    if (rawHash === '#/wishlist' || path === '/wishlist' || hashPath === '/wishlist') {
      store.currentView = 'category';
      store.activeModal = null;
      store.activeCategory = 'wishlist';
      document.title = 'My Wishlist — Zyvron Tech Accessories';
      store.notify();
      if (!isInitialLoad) window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    const categoryMatch = rawHash.match(/^#\/category\/(.+)$/) || path.match(/^\/category\/(.+)$/) || hashPath.match(/^\/category\/(.+)$/);
    if (categoryMatch) {
      const slug = decodeURIComponent(categoryMatch[1]);
      const cat = categoryFromSlug(slug, store.products);
      store.currentView = 'category';
      if (store.activeModal === 'quickview') store.activeModal = null;
      store.activeCategory = cat ? cat.id : 'all';
      document.title = cat ? `${cat.name} — Zyvron Tech Accessories` : 'Zyvron Tech Accessories™ — Premium Gadgets & Smart Tech Store';
      this.setMetaDescription(cat
        ? `Shop ${cat.name} at Zyvron — premium tech accessories with cash on delivery and free nationwide shipping across Pakistan.`
        : 'Shop premium wireless audio, smartwatches, gaming gear & smart mobile accessories in Pakistan. Cash on delivery & free nationwide shipping on orders over Rs. 3,000.');
      store.notify();
      // FIX: land at the true top of the category page (title + filter
      // chips visible), instantly, with no scroll animation. Previously
      // this fired window.scrollTo(0) synchronously right after
      // store.notify() — but on some clicks (e.g. from the desktop
      // "Featured Collections" cards, further down the homepage) the
      // browser hadn't finished laying out the freshly-rendered category
      // DOM yet, so the "scroll to 0" landed at a stale scroll extent and
      // then jumped/settled once layout caught up — visible as a
      // scroll-up-then-down animation that ended mid-grid instead of at
      // the top. Forcing behavior:'auto' + running it on the next animation
      // frame (after layout has settled) makes it a single, instant jump.
      if (!isInitialLoad) {
        requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }));
      }
      return;
    }

    if (rawHash === '#/flash') {
      store.currentView = 'category';
      if (store.activeModal === 'quickview') store.activeModal = null;
      store.activeCategory = 'flash';
      document.title = 'Flash Deals — Zyvron Tech Accessories';
      this.setMetaDescription("Limited-time Flash Deals on premium tech accessories at Zyvron — grab discounted wireless audio, smartwatches & gaming gear before they're gone.");
      store.notify();
      if (!isInitialLoad) window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    if (path === '/wishlist' || rawHash === '#/wishlist' || hashPath === '/wishlist') {
      store.currentView = 'category';
      if (store.activeModal === 'quickview') store.activeModal = null;
      store.activeCategory = 'wishlist';
      document.title = 'My Wishlist — Zyvron Tech Accessories';
      store.notify();
      if (!isInitialLoad) window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    // Home ("#", "#/", or anything unrecognized)
    if (store.currentView !== 'about' && store.currentView !== 'contact' && store.currentView !== 'privacy' && store.currentView !== 'terms' && store.currentView !== 'refund' && store.currentView !== 'faq' && store.currentView !== 'shipping' && store.currentView !== 'warranty' && store.currentView !== 'blog' && store.currentView !== 'my-account') {
      store.currentView = 'store';
    }
    if (store.activeModal === 'quickview') store.activeModal = null;
    if (rawHash === '' || rawHash === '#' || rawHash === '#/') {
      store.activeCategory = 'all';
    }
    document.title = 'Zyvron Tech Accessories™ — Premium Gadgets & Smart Tech Store';
    this.setMetaDescription('Shop premium wireless audio, smartwatches, gaming gear & smart mobile accessories in Pakistan. Cash on delivery & free nationwide shipping on orders over Rs. 3,000.');
    store.notify();
    // Do not force the page back to the top when the user returns Home.
    // On storefront navigation, a plain home route should simply restore the
    // store view without snapping the browser viewport to the very start.
  }

  scrollToProductGrid(targetId = 'section-products') {
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        const headerOffset = 90; // account for sticky top bars
        const top = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({ top, behavior: 'auto' });
      }
    }, 0);
  }

  openAdminEntry() {
    if (!store.getFirebaseAuth()) this.adminAuthReady = true;
    if (!this.adminAuthReady) {
      this.pendingAdminEntry = true;
      return;
    }
    if (store.isAdmin) {
      store.setCurrentView('admin');
    } else {
      store.adminEntryRequested = true;
      store.openModal('admin-login');
    }
  }

  initToastListener() {
    window.addEventListener('techni-toast', (e) => {
      const { message, type } = e.detail;
      const container = document.getElementById('toast-container');
      if (!container) return;

      const toast = document.createElement('div');
      toast.className = 'toast-item';
      toast.innerHTML = `
        <span class="w-2.5 h-2.5 rounded-full ${type === 'success' ? 'bg-emerald-400' : 'bg-red-500'}"></span>
        <span class="text-xs font-semibold">${message}</span>
      `;
      container.appendChild(toast);

      setTimeout(() => {
        toast.style.animation = 'toast-out 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards';
        setTimeout(() => toast.remove(), 300);
      }, 2600);
    });
  }

  initCountdown() {
    this.countdownTimer = setInterval(() => {
      const elements = document.querySelectorAll('.flash-countdown-timer');
      if (!elements.length) return;

      const now = Date.now();
      const diff = Math.max(0, this.flashSaleEndTime - now);
      
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      const html = `
        <span class="bg-black/90 text-white px-2 py-1 rounded-md font-mono text-xs font-bold border border-white/10">${String(hours).padStart(2, '0')}h</span>
        <span class="text-white font-bold">:</span>
        <span class="bg-black/90 text-white px-2 py-1 rounded-md font-mono text-xs font-bold border border-white/10">${String(minutes).padStart(2, '0')}m</span>
        <span class="text-white font-bold">:</span>
        <span class="bg-black/90 text-white px-2 py-1 rounded-md font-mono text-xs font-bold border border-white/10">${String(seconds).padStart(2, '0')}s</span>
      `;

      elements.forEach(el => el.innerHTML = html);
    }, 1000);
  }

  // Pause autoplay while the user is interacting with the hero banner (hover/touch),
  // and resume from a fresh 5s window once they move away — feels intentional, not glitchy.
  initHeroHoverPause() {
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest && e.target.closest('.premium-hero')) {
        if (this.heroTimer) { clearInterval(this.heroTimer); this.heroTimer = null; }
      }
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest && e.target.closest('.premium-hero') && (!e.relatedTarget || !e.relatedTarget.closest || !e.relatedTarget.closest('.premium-hero'))) {
        this.restartHeroProgress();
      }
    });
    document.addEventListener('touchstart', (e) => {
      if (e.target.closest && e.target.closest('.premium-hero') && this.heroTimer) {
        clearInterval(this.heroTimer);
        this.heroTimer = null;
        // Resume autoplay a couple seconds after the last touch on the banner.
        clearTimeout(this._heroTouchResumeTimer);
        this._heroTouchResumeTimer = setTimeout(() => this.restartHeroProgress(), 2500);
      }
    }, { passive: true });
  }

  initHeroSlider() {
    if (this.heroTimer) clearInterval(this.heroTimer);
    this.heroTimer = null;
    // Auto-advance is approved (bold/eye-catching motion, auto-play OK).
    // Still respects prefers-reduced-motion, and initHeroHoverPause() /
    // the touchstart handler above already pause this on hover/touch and
    // resume it via restartHeroProgress() — this just supplies the timer
    // those hooks expect to find.
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    this.heroTimer = setInterval(() => {
      if (document.hidden) return;
      this.nextHeroSlide();
    }, 5000);
  }

  updateHeroDots() {
    const dots = document.querySelectorAll('.hero-dot');
    dots.forEach((dot, idx) => {
      if (idx === this.currentHeroSlide) {
        dot.className = 'hero-dot relative w-9 h-2 rounded-full bg-white/25 overflow-hidden transition-all duration-300';
        dot.innerHTML = '<span id="hero-progress-bar" class="hero-progress-bar absolute inset-y-0 left-0 rounded-full"></span>';
      } else {
        dot.className = 'hero-dot w-2 h-2 rounded-full bg-white/40 hover:bg-white/70 transition-all duration-300';
        dot.innerHTML = '';
      }
    });
  }

  initScrollListener() {
    window.addEventListener('scroll', () => {
      const scrollBtn = document.getElementById('btn-scroll-top');
      if (scrollBtn) {
        if (window.scrollY > 400) {
          scrollBtn.classList.remove('opacity-0', 'pointer-events-none');
          scrollBtn.classList.add('opacity-100', 'pointer-events-auto');
        } else {
          scrollBtn.classList.add('opacity-0', 'pointer-events-none');
          scrollBtn.classList.remove('opacity-100', 'pointer-events-auto');
        }
      }
    });
  }

  // PERF FIX: render() used to rebuild the *entire* #app subtree — header,
  // nav, product grid, footer, everything — on every single state change,
  // including one call per keystroke while typing (search box, checkout
  // form, admin forms, the AI assistant chat input, etc). Two visible
  // symptoms of that: (1) the whole page felt "laggy"/janky while typing or
  // clicking things, because a large HTML string was being regenerated and
  // reparsed on every interaction, and (2) whatever input you were typing
  // into lost focus and cursor position after each character, since the
  // element itself was destroyed and recreated.
  //
  // Fix: wrap the real renderer (renamed to _renderInner) so we snapshot
  // which element was focused (by id) and its cursor/selection position
  // right before the rebuild, then restore focus + selection + scroll
  // position on the next frame after the rebuild finishes. This does not
  // change what gets rendered or any app behavior — only what happens to
  // focus/scroll across a re-render — so it's safe everywhere render() is
  // already called from (store.subscribe and the initial boot render).
  render() {
    const focusState = this._captureFocusState();
    const scrollState = { x: window.scrollX, y: window.scrollY };
    this._renderInner();
    requestAnimationFrame(() => {
      this._restoreFocusState(focusState);
      // Only restore scroll for same-view re-renders (e.g. typing, cart
      // qty changes) — a real navigation/view change should keep whatever
      // scroll position render() itself set up (e.g. scroll-to-top).
      if (focusState) window.scrollTo(scrollState.x, scrollState.y);
    });
  }

  _captureFocusState() {
    const el = document.activeElement;
    if (!el || !el.id || !this.appContainer || !this.appContainer.contains(el)) return null;
    const state = { id: el.id };
    if (typeof el.selectionStart === 'number') {
      state.selectionStart = el.selectionStart;
      state.selectionEnd = el.selectionEnd;
    }
    return state;
  }

  _restoreFocusState(state) {
    if (!state) return;
    const el = document.getElementById(state.id);
    if (!el || typeof el.focus !== 'function') return;
    el.focus({ preventScroll: true });
    if (typeof state.selectionStart === 'number' && typeof el.setSelectionRange === 'function') {
      try { el.setSelectionRange(state.selectionStart, state.selectionEnd); } catch (e) { /* not a text-selectable input, ignore */ }
    }
  }

  _renderInner() {
    const isTrackingPage = store.currentView === 'tracking';
    document.body.style.overflow = isTrackingPage ? '' : (store.activeModal ? 'hidden' : '');
    document.documentElement.style.overflow = isTrackingPage ? '' : '';

    // Track view/modal transitions across renders so entrance animations only
    // play when something actually just opened or changed, not on every
    // re-render of the same view (e.g. typing in search, cart updates). The
    // whole #app subtree is recreated on every render, so a plain CSS
    // transition on these elements can't tell "just opened" from "still
    // open, re-rendering for another reason" on its own — this comparison
    // is what makes that distinction. this._lastRenderedView is only
    // committed below at the two points where *real* page content actually
    // renders (not the transient "Loading admin portal..." spinner), so that
    // spinner can't swallow the fade-in meant for the admin shell itself.
    const viewJustChanged = store.currentView !== this._lastRenderedView;
    const modalJustOpened = !!store.activeModal && store.activeModal !== this._lastActiveModal;
    this._lastActiveModal = store.activeModal;

    // Do not briefly render the storefront while Firebase restores an admin session.
    if (store.currentView === 'admin' && !this.adminAuthReady) {
      this.appContainer.innerHTML = `
        <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:#09090b;color:#fff;font-family:sans-serif;">
          <div style="text-align:center;font-size:14px;font-weight:700;">Loading admin portal...</div>
        </div>`;
      return;
    }

    if (store.currentView === 'admin' && store.isAdmin) {
      this._lastRenderedView = store.currentView;
      this.renderAdminShell(viewJustChanged);
      return;
    }

    this._lastRenderedView = store.currentView;
    const filteredProducts = store.getFilteredProducts();
    const cartCount = store.getCartCount();
    const wishlistCount = store.getWishlistCount();
    const subtotal = store.getCartSubtotal();
    const freeShipping = store.getFreeShippingProgress();

    this.appContainer.innerHTML = `
      <!-- Desktop & Mobile Main App Wrapper -->
      <div class="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 antialiased selection:bg-red-500 selection:text-white">

        <!-- 1. Top Announcement Marquee Bar -->
        <header class="bg-black text-white text-[11px] sm:text-xs font-extrabold uppercase tracking-wider py-2 overflow-hidden sticky top-0 z-40 border-b border-neutral-800 select-none">
          <div class="animate-marquee whitespace-nowrap flex items-center gap-8">
            <span class="flex items-center gap-1.5"><span class="text-red-500">⚡</span> WELCOME TO ZYVRON TECH ACCESSORIES STORE</span>
            <span class="text-red-500">•</span>
            <span class="flex items-center gap-1.5"><span class="text-red-500">🚚</span> FREE DELIVERY OVER RS. 3,000 NATIONWIDE</span>
            <span class="text-red-500">•</span>
            <span class="flex items-center gap-1.5"><span class="text-red-500">💵</span> CASH ON DELIVERY (COD) AVAILABLE</span>
            <span class="text-red-500">•</span>
            <span class="flex items-center gap-1.5"><span class="text-red-500">⭐</span> 14-DAY CHECKING &amp; REPLACEMENT GUARANTEE</span>
            <span class="text-red-500">•</span>
            <span class="flex items-center gap-1.5"><span class="text-red-500">📞</span> 24/7 WHATSAPP ORDER SUPPORT</span>
            <span class="text-red-500">•</span>
            <span class="flex items-center gap-1.5"><span class="text-red-500">⚡</span> WELCOME TO ZYVRON TECH ACCESSORIES STORE</span>
            <span class="text-red-500">•</span>
            <span class="flex items-center gap-1.5"><span class="text-red-500">🚚</span> FREE DELIVERY OVER RS. 3,000 NATIONWIDE</span>
            <span class="text-red-500">•</span>
            <span class="flex items-center gap-1.5"><span class="text-red-500">💵</span> CASH ON DELIVERY (COD) AVAILABLE</span>
            <span class="text-red-500">•</span>
            <span class="flex items-center gap-1.5"><span class="text-red-500">⭐</span> 14-DAY CHECKING &amp; REPLACEMENT GUARANTEE</span>
            <span class="text-red-500">•</span>
            <span class="flex items-center gap-1.5"><span class="text-red-500">📞</span> 24/7 WHATSAPP ORDER SUPPORT</span>
          </div>
        </header>

        <!-- 2. Dual Header (Desktop Expansive + Mobile Responsive) -->
        <nav class="bg-[#071a26] sticky top-[31px] sm:top-[33px] z-30 border-b border-white/10" aria-label="Main Navigation">
          <div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16 sm:h-20 gap-2 xl:gap-4">
              
              <!-- Left: Mobile Menu & Logo -->
              <div class="flex items-center gap-3">
                <!-- Mobile Hamburger Button -->
                <button id="btn-open-nav" class="lg:hidden p-2 -ml-2 text-white/80 hover:text-white transition" aria-label="Open Menu">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </button>

                <button id="btn-logo-home" class="flex items-center gap-2.5 sm:gap-3 focus:outline-none group min-w-0" aria-label="Zyvron Tech Accessories Home">
                  <img
                    src="assets/zyvron-icon.png"
                    alt="Zyvron"
                    class="h-9 sm:h-12 w-auto object-contain drop-shadow-[0_0_16px_rgba(34,211,238,0.55)] transition-transform duration-200 group-hover:scale-105 flex-shrink-0"
                  />
                  <span class="font-black text-sm sm:text-xl tracking-tight text-white truncate">Zyvron Tech Accessories</span>
                </button>
              </div>

              <!-- Center: Desktop Desktop Navigation Links -->
              <!-- min-w-0 + overflow-x-auto: without min-w-0, a flex-1 child
                   can never shrink below its content's natural width (a
                   classic flexbox default). With 7 whitespace-nowrap links,
                   that pushed the ENTIRE header row wider than the
                   viewport whenever the window wasn't extra-wide — shoving
                   the cart badge on the far right off-screen instead of
                   wrapping. Now this section scrolls horizontally within
                   its own bounds if it ever runs out of room, so the
                   right-side icons (Sign In/Wishlist/Compare/Cart) always
                   stay fully visible. -->
              <div class="hidden lg:flex flex-1 min-w-0 items-center justify-center gap-3 xl:gap-5 font-bold text-xs uppercase tracking-wider text-white/70 overflow-x-auto no-scrollbar">
                <button class="nav-link whitespace-nowrap hover:text-white transition py-1 ${store.activeCategory === 'all' && !store.searchQuery ? 'text-cyan-300 border-b-2 border-white/80' : ''}" onclick="app.goToAllProducts()">
                  All Catalog
                </button>
                ${getCategories(store.products).filter(c => c.id !== 'all').slice(0, 3).map(cat => `
                    <button class="nav-link whitespace-nowrap hover:text-white transition py-1 ${store.activeCategory === cat.id ? 'text-cyan-300 border-b-2 border-white/80' : ''}" onclick="app.goToCategory('${cat.id}')">
                    ${cat.name}
                  </button>
                `).join('')}
                <button class="nav-link whitespace-nowrap text-red-400 hover:text-white transition py-1 flex items-center gap-1 font-extrabold" onclick="app.goToCategory('flash')">
                  <span class="animate-pulse">⚡</span> Flash Sale
                </button>
                <button class="nav-link whitespace-nowrap hover:text-white transition py-1 ${store.currentView === 'about' ? 'text-cyan-300 border-b-2 border-white/80' : ''}" onclick="store.setCurrentView('about')">
                  About
                </button>
                <button class="nav-link whitespace-nowrap hover:text-white transition py-1 ${store.currentView === 'contact' ? 'text-cyan-300 border-b-2 border-white/80' : ''}" onclick="store.setCurrentView('contact')">
                  Contact
                </button>
                <button class="nav-link whitespace-nowrap hover:text-white transition py-1 flex items-center gap-1" onclick="app.openTrackingPage()">
                  🚚 Track Order
                </button>
                <div class="zv-nav-delivery-pill" aria-label="Free delivery over Rs. 3,000">
                  <span class="zv-nav-delivery-icon" aria-hidden="true">✦</span>
                  <span><strong>FREE DELIVERY OVER RS. 3,000</strong><small>Nationwide • Fast &amp; Reliable</small></span>
                </div>
              </div>

              <!-- Right: Search Bar & Actions -->
              <div class="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                <!-- Desktop Search Bar -->
                <div class="hidden lg:flex relative w-44 xl:w-56 2xl:w-64">
                  <input 
                    type="text" 
                    placeholder="Search 28+ products..." 
                    value="${store.searchQuery}"
                    oninput="store.setSearchQuery(this.value)"
                    class="w-full bg-[#0a1221]/40 border border-white/80 rounded-full px-4 py-2 pl-9 text-xs font-medium text-white placeholder:text-white/60 focus:outline-none transition"
                  />
                  <svg class="w-4 h-4 text-white/40 absolute left-3 top-2.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                  ${store.searchQuery ? `
                    <button class="zv-search-clear absolute right-3 top-2 text-white/70 hover:text-white text-xs font-bold" onclick="app.clearSearch()" aria-label="Clear search">✕</button>
                  ` : ''}
                </div>

                <!-- Mobile Search Icon Trigger -->
                <button id="btn-open-search" class="lg:hidden p-2 text-white/80 hover:text-white transition" aria-label="Search">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </button>

                <!-- Mobile Track Now shortcut -->
                <button id="btn-track-order-mobile" class="lg:hidden flex items-center gap-1 px-2 py-1.5 rounded-full bg-white/5 text-amber-400 border border-white/10 hover:bg-white/10 transition active:scale-95" aria-label="Track order" title="Track order">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.1" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h10.5v10.5H3.75zM14.25 10.5h3.1l2.9 3.1v3.65h-6M7.5 19.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM17.25 19.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  <span class="hidden sm:inline text-[10px] font-black uppercase">Track</span>
                </button>

                <!-- Sign In / My Account Button (customer account — Step 5 of the auth roadmap: swaps once store.customerUser is set by App.initCustomerAuthListener()) -->
                ${store.customerUser ? `
                  <button id="btn-open-account" class="p-2 sm:px-2.5 sm:py-1.5 text-white/80 hover:text-white sm:bg-white/5 sm:hover:bg-white/10 rounded-full transition flex items-center gap-1.5" aria-label="My Account" onclick="store.openMyAccount()">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <span class="hidden md:inline text-[11px] font-bold">My Account</span>
                  </button>
                ` : `
                  <button id="btn-open-auth" class="p-2 sm:px-2.5 sm:py-1.5 text-white/80 hover:text-white sm:bg-white/5 sm:hover:bg-white/10 rounded-full transition flex items-center gap-1.5" aria-label="Sign in" onclick="app.navigateTo('#/login')">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <span class="hidden md:inline text-[11px] font-bold">Sign In</span>
                  </button>
                `}

                <!-- Wishlist Button -->
                <button id="btn-open-wishlist" class="p-2 sm:px-2.5 sm:py-1.5 text-white/80 hover:text-white sm:bg-white/5 sm:hover:bg-white/10 rounded-full transition flex items-center gap-1.5 relative" aria-label="Wishlist">
                  <svg class="w-4 h-4 ${wishlistCount > 0 ? 'text-red-600 fill-red-600' : ''}" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                  <span class="hidden md:inline text-[11px] font-bold">Wishlist</span>
                  ${wishlistCount > 0 ? `
                    <span class="w-4 h-4 bg-red-600 text-white rounded-full text-[9px] font-extrabold flex items-center justify-center">
                      ${wishlistCount}
                    </span>
                  ` : ''}
                </button>

                <!-- Compare Button -->
                <button id="btn-open-compare" class="hidden sm:flex p-2 sm:px-2.5 sm:py-1.5 text-white/80 hover:text-white sm:bg-white/5 sm:hover:bg-white/10 rounded-full transition items-center gap-1.5 relative" aria-label="Compare Products">
                  <svg class="w-4 h-4 ${store.compareList.length > 0 ? 'text-red-600' : ''}" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                  </svg>
                  <span class="hidden md:inline text-[11px] font-bold">Compare</span>
                  ${store.compareList.length > 0 ? `
                    <span class="w-4 h-4 bg-red-600 text-white rounded-full text-[9px] font-extrabold flex items-center justify-center">
                      ${store.compareList.length}
                    </span>
                  ` : ''}
                </button>

                <!-- AI Assistant Button -->
                <button id="btn-open-assistant-nav" class="hidden lg:flex p-2 sm:px-2.5 sm:py-1.5 text-white/80 hover:text-white sm:bg-white/5 sm:hover:bg-white/10 rounded-full transition items-center gap-1.5" aria-label="AI Product Assistant" title="AI Product Assistant" onclick="store.openModal('assistant')">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.1" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="m18 3 .45 1.8L20.25 5.25l-1.8.45L18 7.5l-.45-1.8-1.8-.45 1.8-.45L18 3Z" />
                  </svg>
                  <span class="hidden xl:inline text-[11px] font-bold">AI Assistant</span>
                </button>

                <!-- Cart Button -->
                <button id="btn-open-cart" class="flex-shrink-0 p-2 sm:px-3 sm:py-1.5 bg-neutral-900 hover:bg-black text-white rounded-full transition flex items-center gap-1.5 shadow-md relative group active:scale-95" aria-label="Shopping Cart">
                  <svg class="w-4 h-4 text-red-400 group-hover:scale-110 transition" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
                  </svg>
                  <span class="hidden sm:inline text-[11px] font-extrabold">${formatPKR(subtotal)}</span>
                  <span class="w-5 h-5 bg-red-600 text-white rounded-full text-[10px] font-black flex items-center justify-center zv-badge-pop">
                    ${cartCount}
                  </span>
                </button>
              </div>

            </div>
          </div>
        </nav>

        <!-- Main Content Wrapper -->
        <main class="premium-shell ${viewJustChanged ? 'zv-view-enter' : ''} flex-grow max-w-7xl mx-auto w-full px-3 sm:px-6 lg:px-8 py-4 sm:py-6 space-y-6 sm:space-y-8">
          ${store.currentView === 'about' ? this.renderAboutPage(viewJustChanged) : store.currentView === 'contact' ? this.renderContactPage() : store.currentView === 'privacy' ? this.renderPrivacyPage() : store.currentView === 'terms' ? this.renderTermsPage() : store.currentView === 'refund' ? this.renderRefundPage() : store.currentView === 'faq' ? this.renderFAQPage() : store.currentView === 'shipping' ? this.renderShippingPage() : store.currentView === 'warranty' ? this.renderWarrantyPage() : store.currentView === 'blog' ? this.renderBlogPage() : store.currentView === 'auth' ? this.renderAuthPage() : store.currentView === 'my-account' ? this.renderMyAccountPage() : store.currentView === 'product' ? this.renderProductDetailPage() : store.currentView === 'cart' ? this.renderCartPage() : store.currentView === 'tracking' ? this.renderOrderTrackingModal() : store.currentView === 'category' ? this.renderCategoryPage() : this.renderHomeContent()}

        </main>

        <!-- Footer -->
        <footer class="footer-shell zv-footer bg-neutral-950 text-white mt-0 pt-2 pb-6 md:pb-6">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="premium-review-panel">
              <div class="premium-review-header">
                <div>
                  <div class="premium-review-eyebrow">Testimonials</div>
                  <div class="premium-review-label">What Our Customers Say</div>
                </div>
                <div class="zv-slider-arrows-inline flex items-center gap-2 ml-auto">
                  <button type="button" class="zv-slider-arrow" data-slider-prev="reviews-slider" aria-label="Previous testimonials">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" /></svg>
                  </button>
                  <button type="button" class="zv-slider-arrow" data-slider-next="reviews-slider" aria-label="Next testimonials">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </div>

              <div id="reviews-slider" class="zv-slider">
              <div class="premium-review-grid zv-slider-track">
                <article class="premium-review-card">
                  <div class="premium-stars">★★★★★</div>
                  <p>“Ordered the wireless headphones — bass is deep and battery easily lasts my whole work week. Delivery was fast too.”</p>
                  <div class="premium-review-user">
                    <span class="premium-avatar">S</span>
                    <div>
                      <strong>Sana Malik</strong>
                      <small>Verified Buyer</small>
                    </div>
                  </div>
                </article>

                <article class="premium-review-card">
                  <div class="premium-stars">★★★★★</div>
                  <p>“Bought the Bluetooth speaker for outdoor trips. Water-proof build is solid and sound quality punches above its price.”</p>
                  <div class="premium-review-user">
                    <span class="premium-avatar alt">H</span>
                    <div>
                      <strong>Hamza Tariq</strong>
                      <small>Verified Buyer</small>
                    </div>
                  </div>
                </article>

                <article class="premium-review-card">
                  <div class="premium-stars">★★★★★</div>
                  <p>“Smartwatch display is gorgeous and the battery lasts days. COD made it super easy to trust the purchase.”</p>
                  <div class="premium-review-user">
                    <span class="premium-avatar alt-two">A</span>
                    <div>
                      <strong>Ayesha Bibi</strong>
                      <small>Verified Buyer</small>
                    </div>
                  </div>
                </article>

                <article class="premium-review-card">
                  <div class="premium-stars">★★★★★</div>
                  <p>“The ZYRON Titanium Ultra smartwatch feels genuinely premium — the always-on display and build quality are way above the price point.”</p>
                  <div class="premium-review-user">
                    <span class="premium-avatar">B</span>
                    <div>
                      <strong>Bilal Ahmed</strong>
                      <small>Verified Buyer</small>
                    </div>
                  </div>
                </article>
              </div>
              <div id="reviews-slider-dots" class="zv-slider-dots" data-slider-dots="reviews-slider"></div>
              </div>
            </div>

            <div class="premium-footer-main">
              <div class="premium-footer-brand zv-footer-brand">
                <div class="premium-brand-wrap">
                  <div class="premium-brand-mark">
                    <img src="assets/zyvron-icon.png" alt="Zyvron" class="w-full h-full object-contain" />
                  </div>
                  <div class="premium-brand-copy">
                    <span class="premium-brand-name">Zyvron</span>
                    <span class="premium-brand-sub">Tech</span>
                  </div>
                </div>
                <p>
                  Your trusted online destination for premium wireless audio, smartwatches, gaming gear &amp; smart tech accessories in Pakistan.
                </p>
                <div class="zv-footer-badge">
                  <span class="zv-footer-badge-dot"></span>
                  <span>Direct Cash on Delivery Across Pakistan</span>
                </div>
              </div>

              <div class="zv-footer-col">
                <h4 class="zv-footer-heading">Popular Categories</h4>
                <ul class="zv-footer-links">
                  ${getCategories(store.products).filter(c => c.id !== 'all').map(cat => `
                    <li><button onclick="app.goToCategory('${cat.id}')" class="zv-footer-link">${cat.name}</button></li>
                  `).join('')}
                  <li><button onclick="app.goToCategory('flash')" class="zv-footer-link zv-footer-link--accent">⚡ Flash Deals (Up to 50% Off)</button></li>
                </ul>
              </div>

              <div class="zv-footer-col">
                <h4 class="zv-footer-heading">Customer Support</h4>
                <ul class="zv-footer-links zv-footer-links--info">
                  <li><button onclick="app.openTrackingPage()" class="zv-footer-link zv-footer-link--warn">🚚 Track My Order</button></li>
                  <li><button onclick="store.setCurrentView('about')" class="zv-footer-link">📖 About Us</button></li>
                  <li><button onclick="store.setCurrentView('contact')" class="zv-footer-link">📩 Contact Us</button></li>
                  <li><button onclick="store.setCurrentView('faq')" class="zv-footer-link">❓ FAQ</button></li>
                  <li><button onclick="store.setCurrentView('shipping')" class="zv-footer-link">📦 Shipping &amp; Delivery</button></li>
                  <li><button onclick="store.setCurrentView('warranty')" class="zv-footer-link">🛡️ Warranty &amp; Support</button></li>
                  <li><button onclick="store.setCurrentView('blog')" class="zv-footer-link">📰 Tech Tips Blog</button></li>
                  <li><a href="https://wa.me/923434465290" target="_blank" class="zv-footer-link zv-footer-link--emerald">💬 WhatsApp: 0343 4465290</a></li>
                  <li><a href="mailto:zyvron.official@gmail.com" class="zv-footer-link zv-footer-link--sky">✉️ zyvron.official@gmail.com</a></li>
                  <li class="zv-footer-info">⏱️ Support Hours: 9:00 AM - 11:00 PM</li>
                  <li class="zv-footer-info">🚚 Delivery Time: 2 to 4 Working Days</li>
                  <li class="zv-footer-info">🛡️ 14 Days Replacement Guarantee</li>
                  <li class="zv-footer-info">💵 Cash on Delivery (COD)</li>
                </ul>
              </div>

              <div class="space-y-3.5 zv-footer-col">
                <h4 class="zv-footer-heading">Stay Connected</h4>
                <p class="text-xs text-neutral-400 leading-relaxed">
                  Receive flash sale alerts and exclusive discounts directly on your phone.
                </p>
                <div class="zv-footer-subscribe">
                  <input id="newsletter-phone" type="tel" placeholder="Your WhatsApp # (03xx)" />
                  <button onclick="app.subscribeNewsletter()">Join</button>
                </div>
                <div class="premium-social-row">
                  <button type="button" aria-label="Facebook">f</button>
                  <button type="button" aria-label="Instagram">◎</button>
                  <button type="button" aria-label="Twitter">𝕏</button>
                </div>
              </div>
            </div>

            <div class="zv-footer-bottom">
              <p>© 2026 Zyvron Tech Accessories Store. All Rights Reserved. Built with HTML, CSS &amp; JavaScript.</p>
              <div class="zv-footer-legal">
                <button onclick="store.setCurrentView('privacy')">Privacy Policy</button>
                <span aria-hidden="true">•</span>
                <button onclick="store.setCurrentView('terms')">Terms of Service</button>
                <span aria-hidden="true">•</span>
                <button onclick="store.setCurrentView('refund')">Refund Policy</button>
              </div>
            </div>
          </div>
        </footer>

        <!-- 8. Mobile Bottom Sticky Navigation Bar (Hidden on md/lg screens) -->
        <nav class="mobile-bottom-bar md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#071a26] border-t border-white/10 py-2 px-4" aria-label="Mobile Bottom Bar">
          <div class="flex items-center justify-around">
            <button class="flex flex-col items-center text-white/80 hover:text-white transition p-1" onclick="app.goToCategory('all')">
              <svg class="w-5 h-5 ${store.activeCategory === 'all' ? 'text-cyan-300' : 'text-white/40'}" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              <span class="text-[10px] font-bold mt-0.5 ${store.activeCategory === 'all' ? 'text-cyan-300' : 'text-white/40'}">Home</span>
            </button>

            <button class="flex flex-col items-center text-white/80 hover:text-white transition p-1" onclick="store.openModal('search')">
              <svg class="w-5 h-5 text-white/40" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <span class="text-[10px] font-bold text-white/40 mt-0.5">Search</span>
            </button>

            <button class="flex flex-col items-center text-white/80 hover:text-white transition p-1" onclick="app.goToCategory('flash')">
              <div class="relative">
                <svg class="w-5 h-5 ${store.activeCategory === 'flash' ? 'text-red-400 fill-red-400' : 'text-white/40'}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
                <span class="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
              </div>
              <span class="text-[10px] font-bold mt-0.5 ${store.activeCategory === 'flash' ? 'text-red-400' : 'text-white/40'}">Deals</span>
            </button>

            <button class="flex flex-col items-center text-white/80 hover:text-white transition p-1 relative" onclick="app.navigateTo('#/cart')">
              <div class="relative">
                <svg class="w-5 h-5 text-white/40" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
                </svg>
                <span class="absolute -top-1 -right-2 bg-red-600 text-white rounded-full text-[8px] font-black w-4 h-4 flex items-center justify-center zv-badge-pop">
                  ${cartCount}
                </span>
              </div>
              <span class="text-[10px] font-bold text-white/40 mt-0.5">Cart</span>
            </button>

            <button class="flex flex-col items-center text-white/80 hover:text-white transition p-1 relative" onclick="app.goToCategory('wishlist')">
              <div class="relative">
                <svg class="w-5 h-5 ${wishlistCount > 0 ? 'text-red-400 fill-red-400' : 'text-white/40'}" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                ${wishlistCount > 0 ? `
                  <span class="absolute -top-1 -right-2 bg-red-600 text-white rounded-full text-[8px] font-black w-4 h-4 flex items-center justify-center">
                    ${wishlistCount}
                  </span>
                ` : ''}
              </div>
              <span class="text-[10px] font-bold mt-0.5 ${store.activeCategory === 'wishlist' ? 'text-red-400' : 'text-white/40'}">Wishlist</span>
            </button>
          </div>
        </nav>

        <!-- Floating Scroll to Top, AI Assistant & WhatsApp Action Buttons -->
        <div class="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-30 flex flex-col gap-2.5">
          <!-- WhatsApp Quick Contact Button -->
          <a href="https://wa.me/923434465290?text=Hi%20Zyvron%20Tech%20Accessories%2C%20I%20want%20to%20place%20an%20order" target="_blank" class="zv-whatsapp-float w-12 h-12 rounded-2xl text-white flex items-center justify-center shadow-xl transition active:scale-95 group" aria-label="WhatsApp Support" title="Chat on WhatsApp">
            <svg class="w-6 h-6 fill-current group-hover:scale-110 transition duration-200" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.777.82 2.791.82 3.181 0 5.768-2.587 5.768-5.766.001-3.187-2.575-5.806-5.768-5.806zm8.969 5.766c0 4.962-4.037 8.999-8.969 8.999-1.579 0-3.057-.412-4.341-1.129l-4.69 1.229 1.252-4.571c-.789-1.332-1.221-2.88-1.221-4.528 0-4.962 4.037-9 8.969-9 4.931 0 8.969 4.038 8.969 9z"/>
            </svg>
          </a>

          <!-- AI Assistant Floating Button -->
          <button id="btn-open-assistant" class="w-11 h-11 rounded-full bg-gradient-to-tr from-red-600 to-rose-600 text-white flex items-center justify-center shadow-xl transition active:scale-95 group relative" aria-label="AI Product Assistant" onclick="store.openModal('assistant')">
            <svg class="w-5 h-5 group-hover:scale-110 transition duration-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
            </svg>
            <span class="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-white animate-pulse"></span>
          </button>

          <!-- Scroll-to-top Button -->
          <button id="btn-scroll-top" class="w-11 h-11 rounded-full bg-neutral-900 hover:bg-black text-white flex items-center justify-center shadow-xl transition opacity-0 pointer-events-none active:scale-95" onclick="window.scrollTo({top: 0, behavior: 'auto'})" aria-label="Scroll to top">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </button>
        </div>

        <!-- Floating Compare Bar -->
        ${store.compareList.length > 0 && store.activeModal === null ? `
          <div class="fixed bottom-20 sm:bottom-6 left-2.5 right-2.5 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 z-[120] zv-compare-floating-bar bg-neutral-900 text-white rounded-2xl shadow-2xl px-3.5 sm:px-4 py-2.5 flex items-center gap-2.5 sm:gap-3 sm:w-auto sm:max-w-md border border-white/10">
            <div class="flex -space-x-2 flex-shrink-0">
              ${store.getCompareProducts().slice(0, 4).map(p => `
                <img src="${p.image}" class="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-neutral-900 bg-white object-contain" />
              `).join('')}
            </div>
            <span class="text-[11px] sm:text-xs font-bold flex-grow truncate">${store.compareList.length}/4 selected</span>
            <button class="text-[10px] sm:text-[11px] font-bold text-neutral-400 hover:text-white transition flex-shrink-0" onclick="app.clearCompare()">Clear</button>
            <button class="bg-red-600 hover:bg-red-700 text-white text-[11px] sm:text-xs font-extrabold px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl transition active:scale-95 flex-shrink-0" onclick="store.openModal('compare')">Compare</button>
          </div>
        ` : ''}

        <!-- ALL DRAWERS & MODALS -->
        ${this.renderNavDrawer()}
        ${this.renderSearchModal()}
        ${this.renderCheckoutModal()}
        ${this.renderOrderSuccessModal()}
        ${this.renderComplaintModal()}
        ${this.renderCompareModal()}
        ${this.renderAssistantModal()}
        ${this.renderAdminLoginModal()}
        ${this.renderMyAccountModal()}

      </div>
    `;

    this.attachEventListeners();
    document.body.style.overflow = store.currentView === 'tracking' ? '' : (store.activeModal ? 'hidden' : '');
    this.animateModalEntrance(modalJustOpened);

    // Celebrate a freshly-placed order: bounce the checkmark and burst
    // confetti from screen-center. Gated on modalJustOpened (not just
    // activeModal === 'order-success') so this plays once when the modal
    // opens and never replays while it's already open and re-rendering for
    // an unrelated reason (e.g. the live status badge updating via the
    // order's Firestore subscription).
    if (modalJustOpened && store.activeModal === 'order-success') {
      requestAnimationFrame(() => {
        const check = document.getElementById('order-success-check');
        if (check) {
          check.classList.remove('zv-check-pop');
          void check.offsetWidth; // force reflow so the animation can restart
          check.classList.add('zv-check-pop');
        }
        if (typeof window.__zvFireConfetti === 'function') {
          window.__zvFireConfetti(window.innerWidth / 2, window.innerHeight / 2.5);
        }
      });
    }

    if (store.activeModal === 'assistant') {
      const feed = document.getElementById('assistant-feed');
      if (feed) feed.scrollTop = feed.scrollHeight;
      const input = document.getElementById('assistant-input');
      if (input) input.focus();
    }
  }

  // Nav drawer, search drawer, checkout panel, order-success/complaint
  // modals, compare modal, assistant modal, admin login, auth, and
  // "my account" all share the same markup pattern: they only exist in the
  // DOM while open, and are inserted with the "open" class already applied
  // (see renderNavDrawer/renderSearchModal/etc — each starts with
  // `if (!isOpen) return ''`). Because the whole #app subtree is replaced on
  // every render, that element is BORN in its final "open" position, so the
  // CSS transition on .drawer-left/.drawer-right/.drawer-bottom/.modal-popup
  // never has a "closed" frame to animate from — it just snaps into place.
  //
  // This only matters the moment a drawer/modal actually opens. On every
  // other re-render while it's already open (typing in search, cart totals
  // updating, etc.) it's recreated already-open too, and here we deliberately
  // leave it alone — replaying the slide/fade on those re-renders would make
  // the panel flicker instead of just updating its contents.
  //
  // Fix: when `justOpened` is true, snap the freshly-inserted element and its
  // backdrop back to their closed classes synchronously (before the browser
  // paints, so nothing is visibly seen closed), force a reflow so that
  // closed state actually commits, then restore the open classes on the next
  // two animation frames so the transition has something to animate from.
  animateModalEntrance(justOpened) {
    if (!justOpened) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const panel = this.appContainer.querySelector(
      '.drawer-left.open, .drawer-right.open, .drawer-bottom.open, .modal-popup.open'
    );
    if (!panel) return;
    // The checkout panel nests one wrapper deeper than the others
    // (backdrop -> wrapper -> panel instead of backdrop -> panel), so look
    // up to the shared outer "z-50" container rather than assuming the
    // backdrop is a direct sibling.
    const outer = panel.closest('.z-50') || panel.parentElement;
    const backdrop = outer ? outer.querySelector('.drawer-backdrop') : null;

    panel.classList.remove('open');
    if (backdrop) {
      backdrop.classList.remove('opacity-100');
      backdrop.classList.add('opacity-0', 'pointer-events-none');
    }

    // Force a synchronous style/layout flush so the browser commits the
    // "closed" classes above before we flip them back — without this, both
    // class changes can get batched into a single style recalculation and
    // the transition still won't play.
    void panel.offsetHeight;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        panel.classList.add('open');
        if (backdrop) {
          backdrop.classList.add('opacity-100');
          backdrop.classList.remove('opacity-0', 'pointer-events-none');
        }
      });
    });
  }

  renderProductCard(product) {
    const isLiked = store.isWishlisted(product.id);
    const isCompared = store.isCompared(product.id);

    return `
      <article class="product-card bg-white rounded-2xl border border-neutral-200/90 overflow-hidden flex flex-col justify-between shadow-xs group">
        
        <!-- Image Container: full-width square, minimal inner padding so the
             product photo is the focal point of the card -->
        <div class="relative w-full pt-[100%] bg-neutral-50/70 overflow-hidden cursor-pointer" onclick="app.openQuickView('${product.id}')">
          
          <!-- Sale Ribbon Badge -->
          ${product.discount ? `
          <span class="absolute top-2.5 left-2.5 z-10 sale-badge-gradient text-white text-[10px] font-black px-2.5 py-0.5 rounded-md uppercase tracking-wider">
            ${product.discount}
          </span>` : ''}

          <!-- Main Image: larger, tighter crop so the product fills the frame -->
          <img 
            src="${product.image}" 
            alt="${product.title}" 
            loading="lazy"
            class="absolute inset-0 w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300" />
        </div>

        <!-- Product Details: consistent 16px padding on every side -->
        <div class="p-4 flex flex-col flex-grow justify-between">
          <div>
            <!-- Category & Star Rating -->
            <div class="flex items-center justify-between text-[10px] font-bold text-neutral-400 mb-1.5">
              <span class="truncate uppercase tracking-wider text-red-600/90">${product.category}</span>
              <div class="flex items-center gap-1">
                <span class="text-amber-400">★</span>
                <span class="text-neutral-700">${product.rating}</span>
                <span class="text-neutral-400">(${product.reviews})</span>
              </div>
            </div>

            <!-- Title: bumped up a size for readability -->
            <h3 
              class="text-sm sm:text-base font-extrabold text-neutral-900 line-clamp-2 leading-snug cursor-pointer hover:text-red-600 transition"
              onclick="app.openQuickView('${product.id}')">
              ${product.title}
            </h3>
            <p class="zv-card-description text-[10px] text-neutral-500 line-clamp-2 leading-relaxed mt-1.5">
              ${escapeHtml(product.description || '')}
            </p>
          </div>

          <div class="mt-3 pt-3 border-t border-neutral-100">
            <!-- Price Section: larger, higher-contrast for prominence -->
            <div class="flex items-baseline gap-2 flex-wrap">
              <span class="text-lg sm:text-xl font-black text-black">${formatPKR(product.price)}</span>
              <span class="text-xs text-neutral-400 line-through">${formatPKR(product.compareAtPrice)}</span>
            </div>

            <!-- Quick Action Rows -->
            <div class="mt-3 space-y-2">
              <div class="zv-card-actions flex items-center gap-2">
                <!-- Add to Cart: clear secondary action beside Buy Now -->
                <button 
                  class="zv-add-cart-btn flex-1 min-h-[40px] bg-neutral-900 hover:bg-black text-white text-[10px] sm:text-xs font-extrabold px-2 rounded-lg flex items-center justify-center gap-1.5 transition active:scale-95 border border-white/10"
                  onclick="event.stopPropagation(); app.addToCart('${product.id}')"
                  aria-label="Add to Cart"
                  title="Add to Cart">
                  <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
                  </svg>
                  <span class="hidden sm:inline whitespace-nowrap">Add to Cart</span>
                </button>

                <!-- Buy Now: primary action -->
                <button 
                  class="zv-buy-now-btn flex-1 min-h-[40px] premium-btn text-[10px] sm:text-xs font-extrabold px-2 rounded-lg flex items-center justify-center gap-1.5 transition active:scale-95"
                  onclick="event.stopPropagation(); app.buyNowDirect('${product.id}')"
                  aria-label="Buy Now">
                  <svg class="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.983 1.907a.75.75 0 00-1.292-.657L4.204 12.302a.75.75 0 00.658 1.125h5.632l-1.905 8.42a.75.75 0 001.294.65l7.115-11.25a.75.75 0 00-.657-1.122h-5.51l1.152-8.218z" />
                  </svg>
                  <span>Buy Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    `;
  }

  // Slide-Out Left Navigation Drawer
  renderNavDrawer() {
    const isOpen = store.activeModal === 'nav';
    if (!isOpen) return '';
    return `
      <div class="fixed inset-0 z-50 pointer-events-none ${isOpen ? 'pointer-events-auto' : ''}">
        <div class="drawer-backdrop absolute inset-0 bg-black/70 backdrop-blur-xs ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}" onclick="store.closeModal()"></div>

        <div class="drawer-left absolute top-0 bottom-0 left-0 w-[86%] max-w-[460px] bg-[#071a26] border-r border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.6)] flex flex-col justify-between z-10 ${isOpen ? 'open' : ''}">
          <div class="flex-1">
            <!-- Header -->
            <div class="p-4 border-b border-white/10 flex items-center justify-between bg-[#081d2b] text-white">
              <div class="flex items-center gap-2 min-w-0">
                <img src="assets/zyvron-icon.png" alt="Zyvron" class="w-8 h-8 object-contain flex-shrink-0" />
                <span class="font-black text-base tracking-tight text-white truncate">Zyvron Tech Accessories</span>
              </div>
              <button class="zv-close-x" onclick="store.closeModal()" aria-label="Close menu" title="Close menu">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M7 7L17 17M17 7L7 17" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>
              </button>
            </div>

            <!-- Tabs -->
            <div class="flex border-b border-white/10 text-xs font-bold bg-[#0b1f2c]">
              <button 
                class="flex-1 py-3 text-center border-b-2 transition ${this.activeDrawerTab === 'menu' ? 'border-cyan-400 text-cyan-300 bg-[#0d2733]' : 'border-transparent text-slate-400'}"
                onclick="app.setDrawerTab('menu')">
                MAIN MENU
              </button>
              <button 
                class="flex-1 py-3 text-center border-b-2 transition ${this.activeDrawerTab === 'categories' ? 'border-cyan-400 text-cyan-300 bg-[#0d2733]' : 'border-transparent text-slate-400'}"
                onclick="app.setDrawerTab('categories')">
                COLLECTIONS
              </button>
            </div>

            <!-- Content -->
            <div class="p-3 space-y-1 overflow-y-auto max-h-[calc(100vh-240px)]">
              ${this.activeDrawerTab === 'menu' ? `
                <button class="w-full text-left px-3 py-2.5 rounded-xl hover:bg-white/5 text-xs font-bold text-slate-100 flex items-center justify-between" onclick="store.closeModal(); app.goToCategory('all');">
                  <span class="flex items-center gap-2.5"><span class="text-cyan-300">🏠</span> Home Storefront</span>
                  <span class="text-slate-500">›</span>
                </button>
                <button class="w-full text-left px-3 py-2.5 rounded-xl hover:bg-white/5 text-xs font-bold text-red-400 flex items-center justify-between" onclick="store.closeModal(); app.goToCategory('flash');">
                  <span class="flex items-center gap-2.5"><span class="text-red-300">⚡</span> Flash Sale (Up to 50% Off)</span>
                  <span class="bg-cyan-400 text-slate-900 text-[9px] px-2 py-0.5 rounded-full font-black">HOT</span>
                </button>
                <button class="w-full text-left px-3 py-2.5 rounded-xl hover:bg-white/5 text-xs font-bold text-slate-100 flex items-center justify-between" onclick="store.closeModal(); app.goToCategory('wishlist');">
                  <span class="flex items-center gap-2.5"><span class="text-pink-300">❤️</span> Saved Wishlist (${store.getWishlistCount()})</span>
                  <span class="text-slate-500">›</span>
                </button>
                <button class="w-full text-left px-3 py-2.5 rounded-xl hover:bg-white/5 text-xs font-bold text-slate-100 flex items-center justify-between" onclick="app.navigateTo('#/cart')">
                  <span class="flex items-center gap-2.5"><span class="text-cyan-300">🛒</span> View Shopping Cart (${store.getCartCount()})</span>
                  <span class="text-slate-500">›</span>
                </button>
                <button class="w-full text-left px-3 py-2.5 rounded-xl hover:bg-white/5 text-xs font-bold text-slate-100 flex items-center justify-between" onclick="store.closeModal(); app.openTrackingPage();">
                  <span class="flex items-center gap-2.5"><span class="text-cyan-300">🚚</span> Track My Order</span>
                  <span class="text-slate-500">›</span>
                </button>
                <button class="w-full text-left px-3 py-2.5 rounded-xl hover:bg-white/5 text-xs font-bold text-slate-100 flex items-center justify-between" onclick="store.closeModal(); store.setCurrentView('about');">
                  <span class="flex items-center gap-2.5"><span class="text-cyan-300">📖</span> About Us</span>
                  <span class="text-slate-500">›</span>
                </button>
                <button class="w-full text-left px-3 py-2.5 rounded-xl hover:bg-white/5 text-xs font-bold text-slate-100 flex items-center justify-between" onclick="store.closeModal(); store.setCurrentView('contact');">
                  <span class="flex items-center gap-2.5"><span class="text-cyan-300">📩</span> Contact Us</span>
                  <span class="text-slate-500">›</span>
                </button>
                <button class="w-full text-left px-3 py-2.5 rounded-xl hover:bg-white/5 text-xs font-bold text-slate-100 flex items-center justify-between" onclick="store.closeModal(); store.setCurrentView('faq');">
                  <span class="flex items-center gap-2.5"><span class="text-cyan-300">❓</span> FAQ</span>
                  <span class="text-slate-500">›</span>
                </button>
                <button class="w-full text-left px-3 py-2.5 rounded-xl hover:bg-white/5 text-xs font-bold text-slate-100 flex items-center justify-between" onclick="store.closeModal(); store.setCurrentView('warranty');">
                  <span class="flex items-center gap-2.5"><span class="text-cyan-300">🛡️</span> Warranty &amp; Support</span>
                  <span class="text-slate-500">›</span>
                </button>
                <a href="https://wa.me/923434465290" target="_blank" class="w-full text-left px-3 py-2.5 rounded-xl hover:bg-emerald-500/10 text-xs font-bold text-emerald-300 flex items-center justify-between block">
                  <span class="flex items-center gap-2.5"><span class="text-emerald-300">💬</span> Direct WhatsApp Support</span>
                  <span class="text-slate-500">›</span>
                </a>
                <a href="mailto:zyvron.official@gmail.com" class="w-full text-left px-3 py-2.5 rounded-xl hover:bg-sky-500/10 text-xs font-bold text-sky-300 flex items-center justify-between block">
                  <span class="flex items-center gap-2.5"><span class="text-sky-300">✉️</span> Email Support (Gmail)</span>
                  <span class="text-slate-500">›</span>
                </a>
              ` : `
                ${getCategories(store.products).map(cat => `
                  <button class="w-full text-left px-3 py-2.5 rounded-xl hover:bg-white/5 text-xs font-bold text-slate-100 flex items-center justify-between" onclick="store.closeModal(); app.goToCategory('${cat.id}');">
                    <div class="flex items-center gap-2.5 min-w-0">
                      <img src="${cat.image}" class="w-7 h-7 rounded-lg object-cover border border-white/10" />
                      <span class="truncate">${cat.name}</span>
                    </div>
                    <span class="text-[10px] bg-white/5 text-slate-300 px-2.5 py-0.5 rounded-full font-bold">${cat.count}</span>
                  </button>
                `).join('')}
              `}
            </div>
          </div>

          <!-- Bottom Help Card -->
          <div class="p-4 border-t border-white/10 bg-[#0c1d2a] space-y-2">
            <div class="flex items-center gap-2 text-xs font-bold text-slate-100">
              <span class="text-cyan-300">🚚</span>
              <span>Cash on Delivery Across Pakistan</span>
            </div>
            <p class="text-[10px] text-slate-400">
              Need assistance? Call or WhatsApp us at <strong class="text-slate-200">0343 4465290</strong>
            </p>
          </div>
        </div>
      </div>
    `;
  }

  // Live Search Overlay Modal
  renderSearchModal() {
    const isOpen = store.activeModal === 'search';
    if (!isOpen) return '';
    const searchResults = store.searchQuery.trim() ? store.getFilteredProducts() : [];

    return `
      <div class="fixed inset-0 z-50 pointer-events-none ${isOpen ? 'pointer-events-auto' : ''}">
        <div class="drawer-backdrop absolute inset-0 bg-black/70 backdrop-blur-sm ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}" onclick="store.closeModal()"></div>

        <div class="drawer-bottom fixed top-0 left-0 right-0 max-w-xl mx-auto bg-transparent z-10 max-h-[85vh] flex flex-col ${isOpen ? 'open' : ''}">
          <div class="px-2 pt-1">
            <div class="flex items-center gap-3 rounded-[1.7rem] border border-white/80 bg-[#0a1221]/40 px-3 py-2.5 shadow-[0_0_0_1px_rgba(255,255,255,0.05)] backdrop-blur-sm">
              <svg class="w-5 h-5 text-white/80 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <input 
                id="search-input-field"
                type="text" 
                placeholder="Search products..." 
                value="${store.searchQuery}"
                class="w-full bg-transparent text-[1rem] text-white placeholder:text-white/60 outline-none"
              />
              ${store.searchQuery ? `
                <button class="zv-search-clear text-white/70 hover:text-white text-base font-bold" onclick="app.clearSearch()" aria-label="Clear search">✕</button>
              ` : ''}
              <button class="zv-close-x flex-shrink-0" onclick="store.closeModal()" aria-label="Close search" title="Close search"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M7 7L17 17M17 7L7 17" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg></button>
            </div>
          </div>

          <div class="px-3 pb-3 pt-1 overflow-y-auto flex-grow space-y-2">
            ${store.searchQuery.trim() === '' ? `
              <div class="text-left pt-3 text-white/75 text-[0.96rem] leading-snug">
                Try searching for earbuds, speakers, smartwatches, or accessories.
              </div>
            ` : searchResults.length === 0 ? `
              <div class="text-left pt-3 text-white/75 text-[0.96rem] leading-snug">
                No matching products found for "${store.searchQuery}".
              </div>
            ` : searchResults.map(p => `
              <div class="flex items-center gap-3 p-2.5 rounded-2xl bg-white/[0.04] border border-white/5 transition cursor-pointer hover:bg-white/[0.06]" onclick="app.openQuickView('${p.id}')">
                <img src="${p.image}" class="w-14 h-14 rounded-xl object-contain bg-white/5 border border-white/5 flex-shrink-0" />
                <div class="flex-grow min-w-0">
                  <h5 class="text-xs font-bold text-white truncate">${p.title}</h5>
                  <div class="flex items-center gap-2 mt-0.5">
                    <span class="text-xs font-black text-cyan-400">${formatPKR(p.price)}</span>
                    <span class="text-[10px] text-white/40 line-through">${formatPKR(p.compareAtPrice)}</span>
                  </div>
                </div>
                <button 
                  class="bg-cyan-400 hover:bg-cyan-300 text-slate-900 text-xs font-bold px-3 py-2 rounded-xl flex-shrink-0"
                  onclick="event.stopPropagation(); app.addToCart('${p.id}'); store.closeModal();">
                  + Add
                </button>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // Cart Page — full page at its own URL (#/cart), rendered inside <main>
  // exactly like the About/Contact/Product pages. Previously this was a
  // slide-in drawer/modal overlaying the store; it's now a real page so it
  // has a shareable, bookmarkable, refresh-safe address of its own.
  renderCartPage() {
    const freeShipping = store.getFreeShippingProgress();
    const subtotal = store.getCartSubtotal();
    const discount = store.getCartDiscount();
    const shippingFee = freeShipping.isFree || store.cart.length === 0 ? 0 : 199;
    const finalTotal = Math.max(0, subtotal - discount) + shippingFee;

    return `
      <div class="max-w-5xl mx-auto">
        <!-- Breadcrumb -->
        <div class="flex items-center gap-1.5 text-[11px] font-bold text-neutral-500 mb-4">
          <button class="hover:text-red-600 transition" onclick="app.goToCategory('all')">Home</button>
          <span>/</span>
          <span class="text-neutral-900">Shopping Cart</span>
        </div>

        <div class="flex items-start justify-between gap-3 mb-4">
          <h1 class="text-lg sm:text-xl font-black text-neutral-900 flex items-center gap-2.5">
            Your Shopping Cart
            <span class="bg-red-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full">
              ${store.getCartCount()} Items
            </span>
          </h1>
          <button
            type="button"
            onclick="app.closeCartPage()"
            class="zv-close-x"
            aria-label="Close and go back"
            title="Close and go back"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M7 7L17 17M17 7L7 17" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>
          </button>
        </div>

        <!-- Free Shipping Progress Milestone -->
        <div class="px-4 py-3 bg-red-50/70 border border-red-100 rounded-2xl mb-5">
          <div class="flex justify-between items-center text-xs font-bold mb-1.5">
            ${freeShipping.isFree ? `
              <span class="text-emerald-700 font-extrabold flex items-center gap-1">🎉 You Unlocked FREE Nationwide Delivery!</span>
            ` : `
              <span class="text-neutral-800">Add <strong class="text-red-600">${formatPKR(freeShipping.remaining)}</strong> more for <strong>FREE Delivery</strong></span>
            `}
            <span class="text-neutral-500 text-[11px] font-extrabold">${freeShipping.percentage}%</span>
          </div>
          <div class="w-full bg-neutral-200 h-2 rounded-full overflow-hidden">
            <div class="bg-gradient-to-r from-red-500 to-rose-600 h-full rounded-full transition-all duration-500" style="width: ${freeShipping.percentage}%"></div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <!-- Items List -->
          <div class="lg:col-span-2 space-y-3">
            ${store.cart.length === 0 ? `
              <div class="text-center py-20 bg-white rounded-2xl border border-neutral-200">
                <div class="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center mx-auto text-3xl mb-4">
                  🛒
                </div>
                <h4 class="text-base font-extrabold text-neutral-900">Your cart is currently empty</h4>
                <p class="text-xs text-neutral-500 mt-1 max-w-xs mx-auto">
                  Explore our flash tech deals — audio, wearables &amp; gaming gear!
                </p>
                <button onclick="app.goToCategory('all')" class="mt-5 bg-black hover:bg-neutral-800 text-white text-xs font-bold px-6 py-3 rounded-xl shadow-md transition">
                  Start Shopping Now
                </button>
              </div>
            ` : store.cart.map(item => `
              <div class="flex items-start gap-3 p-3 rounded-2xl border border-neutral-200 bg-white relative shadow-xs zv-swipe-row" data-product-id="${item.product.id}">
                <img src="${item.product.image}" alt="${item.product.title}" class="w-20 h-20 object-contain bg-neutral-50 rounded-xl p-2 border border-neutral-100 flex-shrink-0 cursor-pointer" onclick="app.openQuickView('${item.product.id}')" />
                <div class="flex-grow min-w-0 pr-6">
                  <h5 class="text-xs font-bold text-neutral-900 line-clamp-2 leading-snug cursor-pointer hover:text-red-600 transition" onclick="app.openQuickView('${item.product.id}')">${item.product.title}</h5>
                  <div class="text-xs font-black text-red-600 mt-1">${formatPKR(item.product.price)}</div>

                  <!-- Controls -->
                  <div class="flex items-center justify-between gap-2 mt-2">
                    <div class="flex items-center border border-neutral-300 rounded-lg overflow-hidden bg-neutral-50">
                      <button class="w-8 h-8 flex items-center justify-center hover:bg-neutral-200 text-xs font-bold" onclick="app.updateQty('${item.product.id}', -1)">-</button>
                      <span class="w-9 text-center text-xs font-black">${item.quantity}</span>
                      <button class="w-8 h-8 flex items-center justify-center hover:bg-neutral-200 text-xs font-bold" onclick="app.updateQty('${item.product.id}', 1)">+</button>
                    </div>
                    <div class="flex items-center gap-1.5">
                      <button class="text-neutral-400 hover:text-neutral-700 text-[11px] font-bold px-2 py-1" onclick="app.saveForLater('${item.product.id}')">
                        Save for later
                      </button>
                      <button class="text-neutral-400 hover:text-red-600 text-[11px] font-bold px-2 py-1 rounded-md border border-neutral-200 hover:border-red-200" onclick="app.removeFromCart('${item.product.id}')">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            `).join('')}
            ${store.savedForLater.length > 0 ? `
              <div class="pt-2">
                <h5 class="text-[11px] font-black text-neutral-500 uppercase tracking-wider mb-2">Saved for Later (${store.savedForLater.length})</h5>
                <div class="space-y-2">
                  ${store.savedForLater.map(p => `
                    <div class="flex items-center gap-3 p-2.5 rounded-xl border border-neutral-200 bg-neutral-50">
                      <img src="${p.image}" alt="${p.title}" class="w-12 h-12 object-contain bg-white rounded-lg p-1 border border-neutral-100 flex-shrink-0" />
                      <div class="flex-grow min-w-0">
                        <p class="text-[11px] font-bold text-neutral-800 line-clamp-1">${p.title}</p>
                        <p class="text-[11px] font-black text-red-600">${formatPKR(p.price)}</p>
                      </div>
                      <button class="text-[10px] font-black text-white bg-neutral-900 hover:bg-black px-2.5 py-1.5 rounded-lg flex-shrink-0" onclick="app.moveToCartFromSaved('${p.id}')">Move to Cart</button>
                      <button class="text-neutral-400 hover:text-red-600 text-xs flex-shrink-0 w-6 h-6 flex items-center justify-center" onclick="app.removeFromSaved('${p.id}')">✕</button>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>

          <!-- Order Summary -->
          ${store.cart.length > 0 ? `
            <div class="lg:col-span-1 bg-white rounded-2xl border border-neutral-200 p-4 space-y-3 lg:sticky lg:top-24">
              <h4 class="text-sm font-black text-neutral-900 uppercase tracking-wide">Order Summary</h4>
              <div class="space-y-1.5 text-xs">
                <div class="flex justify-between text-neutral-600">
                  <span>Subtotal</span>
                  <span class="font-extrabold text-neutral-900">${formatPKR(subtotal)}</span>
                </div>
                <div class="flex justify-between text-neutral-600">
                  <span>Delivery Charges</span>
                  <span class="font-bold ${shippingFee === 0 ? 'text-emerald-600 font-extrabold' : 'text-neutral-900'}">
                    ${shippingFee === 0 ? 'FREE' : formatPKR(shippingFee)}
                  </span>
                </div>
                <div class="flex justify-between text-sm font-black text-neutral-900 pt-2 border-t border-neutral-200">
                  <span>Total (Cash on Delivery)</span>
                  <span class="text-red-600 text-base">${formatPKR(finalTotal)}</span>
                </div>
              </div>

              <!-- Button -->
              <button 
                class="w-full bg-red-600 hover:bg-red-700 text-white font-black text-xs py-3.5 rounded-xl shadow-lg transition active:scale-95 flex items-center justify-center gap-2"
                onclick="store.openModal('checkout')">
                <span>ORDER WITH CASH ON DELIVERY</span>
                <span>•</span>
                <span>${formatPKR(finalTotal)}</span>
              </button>

              <button class="w-full text-neutral-500 hover:text-neutral-800 text-[11px] font-bold py-1" onclick="app.goToCategory('all')">
                ← Continue Shopping
              </button>

              <div class="flex items-center justify-center gap-3 text-[10px] text-neutral-500 font-semibold pt-1">
                <span>🔒 100% Secure</span>
                <span>•</span>
                <span>🚚 Fast Dispatch</span>
                <span>•</span>
                <span>💵 Pay on Delivery</span>
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  // Product Detail Page — full page at its own URL (#/product/<id>),
  // rendered inside <main> exactly like the About/Contact/Cart pages.
  // Previously this was a centered modal popup over the store; it's now a
  // real page so it has a shareable, bookmarkable, refresh-safe address of
  // its own (matching how a real storefront's product URL — e.g.
  // yourdomain.com/product/<slug> — opens a dedicated page, not a popup).
  renderCategoryPage() {
    const isFlash = store.activeCategory === 'flash';
    const isWishlist = store.activeCategory === 'wishlist';
    const products = store.getFilteredProducts();
    const category = getCategories(store.products).find(cat => cat.id === store.activeCategory);
    const title = store.activeCategory === 'all' ? 'All Products' : isFlash ? 'Flash Deals' : isWishlist ? 'My Wishlist' : (category?.name || 'Products');
    const description = isFlash
      ? 'Limited-time offers at unbeatable prices.'
      : isWishlist
        ? 'Products you have saved for later.'
        : `Explore our ${title.toLowerCase()} collection.`;

    return `
      <section class="all-products-section zv-category-page premium-all-products ${isWishlist ? 'zv-wishlist-page' : ''} w-full max-w-7xl min-w-0 mx-auto space-y-5 sm:space-y-7 overflow-hidden">
        <div class="section-title-block ${isWishlist ? 'zv-wishlist-header' : ''} flex items-start justify-between gap-3 pb-4 sm:pb-5">
          <div class="min-w-0">
            <h1 class="section-title text-2xl sm:text-4xl font-black uppercase tracking-tight leading-none truncate">${escapeHtml(title)}</h1>
          </div>
          <div class="flex items-start gap-2.5 sm:gap-3 flex-shrink-0">
            ${isWishlist ? '' : `
              <div class="smart-helper-grid grid grid-cols-2 gap-2.5 sm:gap-3">
                <button onclick="store.openModal('assistant')" class="smart-helper feature-chip premium-feature-chip flex items-center gap-1.5 rounded-2xl px-2 py-2.5 text-left transition">
                  <span class="text-base flex-shrink-0">✦</span><span class="min-w-0"><span class="block text-[11px] sm:text-xs font-extrabold leading-tight truncate">Ask AI Assistant</span><span class="hidden sm:block text-[10px] font-medium truncate">Get instant help picking a product</span></span>
                </button>
                <button onclick="store.compareList.length ? store.openModal('compare') : store.showToast('Tap the Compare icon on any 2+ products first', 'info')" class="smart-helper feature-chip premium-feature-chip flex items-center gap-1.5 rounded-2xl px-2 py-2.5 text-left transition">
                  <span class="text-base flex-shrink-0">⇅</span><span class="min-w-0"><span class="block text-[11px] sm:text-xs font-extrabold leading-tight truncate">Compare Products</span><span class="hidden sm:block text-[10px] font-medium truncate">Tap ⇅ on any product to compare</span></span>
                </button>
              </div>
            `}
            <button
              type="button"
              onclick="${isWishlist ? "app.closeWishlistPage()" : "app.closeCategoryPage()"}"
              class="zv-close-x"
              aria-label="${isWishlist ? 'Close wishlist' : 'Close and go back'}"
              title="${isWishlist ? 'Close wishlist' : 'Close and go back'}"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M7 7L17 17M17 7L7 17" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>
            </button>
          </div>
        </div>

        <div class="product-filter-bar section-shell ${isWishlist ? 'zv-wishlist-bar' : ''} flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 p-3 sm:p-3.5 rounded-[18px]">
          <p class="text-xs font-medium"><strong class="font-extrabold">${products.length}</strong> Products</p>
          <div class="flex items-center gap-2 flex-wrap sm:flex-nowrap">
            ${isWishlist ? '' : `
              <div class="hidden md:flex items-center gap-1.5">
                ${getCategories(store.products).map(c => `<button class="text-xs font-semibold px-3 py-1.5 rounded-lg border transition ${store.activeCategory === c.id ? 'premium-filter-active' : 'premium-filter-muted'}" onclick="app.goToCategory('${c.id}')">${c.name}</button>`).join('')}
              </div>
            `}
            <select id="sort-select" class="premium-sort-select text-xs font-bold rounded-xl px-3 py-2 focus:outline-none focus:ring-2">
              <option value="popular" ${store.sortBy === 'popular' ? 'selected' : ''}>Most Popular</option>
              <option value="price-low" ${store.sortBy === 'price-low' ? 'selected' : ''}>Price: Low to High</option>
              <option value="price-high" ${store.sortBy === 'price-high' ? 'selected' : ''}>Price: High to Low</option>
              <option value="discount" ${store.sortBy === 'discount' ? 'selected' : ''}>Highest Discount</option>
              <option value="rating" ${store.sortBy === 'rating' ? 'selected' : ''}>Highest Rated</option>
            </select>
          </div>
        </div>

        ${products.length ? `
          <div class="product-grid w-full min-w-0 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5">
            ${products.map(product => this.renderProductCard(product)).join('')}
          </div>
        ` : isWishlist ? `
          <div class="zv-wishlist-empty-zone" aria-hidden="true"></div>
        ` : `
          <div class="premium-empty-state rounded-3xl p-8 sm:p-16 text-center">
            <div class="text-4xl mb-3">⌁</div>
            <h2 class="text-lg font-black">No products found</h2>
            <p class="text-xs mt-1">Add products to see them here.</p>
          </div>
        `}
      </section>
    `;
  }

  // Best-effort, non-fabricated spec rows built only from real fields
  // already on the product object (never invents details like a fake
  // Bluetooth version or battery number that would vary per-product).
  getProductSpecRows(product) {
    const rows = [
      ['Brand', 'Zyvron'],
      ['Category', product.category],
      ['SKU', product.id],
    ];
    if (Array.isArray(product.tags) && product.tags.length) rows.push(['Tags', product.tags.join(', ')]);
    rows.push(['Rating', `${product.rating} / 5 (${product.reviews} reviews)`]);
    rows.push(['Availability', product.inStock ? 'In Stock' : 'Out of Stock']);
    return rows;
  }

  renderSpecTable(rows) {
    return `
      <div class="zv-pdp-specs-table">
        ${rows.map(([label, value]) => `
          <div class="zv-pdp-spec-row">
            <span class="zv-pdp-spec-label">${escapeHtml(label)}</span>
            <span class="zv-pdp-spec-value">${escapeHtml(String(value))}</span>
          </div>
        `).join('')}
      </div>
    `;
  }

  renderProductDetailPage() {
    const routeMatch = (window.location.hash || '').match(/^#\/product\/(.+)$/);
    const routeProductId = routeMatch ? decodeURIComponent(routeMatch[1]) : null;
    const product = store.quickViewProduct || store.products.find(p => p.id === routeProductId);
    if (!product) {
      return `
        <section class="zv-product-loading" aria-live="polite">
          <div class="zv-product-loading-spinner" aria-hidden="true"></div>
          <h1>Loading product...</h1>
          <p>Getting the latest product details.</p>
        </section>
      `;
    }
    if (store.quickViewProduct !== product) store.quickViewProduct = product;

    const images = product.images && product.images.length > 0 ? product.images : [product.image];
    const currentImg = images[this.activeQuickViewImgIndex] || product.image;
    const activeTab = this.activeProductTab || 'description';
    const reviews = store.getReviewsForProduct(product.id);
    const specRows = this.getProductSpecRows(product);
    const sameCategory = store.products.filter(p => p.id !== product.id && p.category === product.category);
    const relatedList = (sameCategory.length ? sameCategory : store.products.filter(p => p.id !== product.id)).slice(0, 8);
    const isWishlisted = store.isWishlisted(product.id);
    const isCompared = store.isCompared(product.id);

    const tabs = [
      { key: 'description', label: 'Description' },
      { key: 'specifications', label: 'Specifications' },
      { key: 'reviews', label: `Reviews (${reviews.length})` },
      { key: 'shipping', label: 'Shipping & Returns' },
    ];

    return `
      <div class="zv-product-detail-shell zv-pdp w-full max-w-6xl mx-auto bg-white rounded-3xl border border-neutral-200 shadow-xs overflow-hidden">

        <!-- Breadcrumb / Header -->
        <div class="p-4 border-b border-neutral-100 flex items-center justify-between gap-2">
          <div class="flex items-center gap-1.5 text-[11px] font-bold text-neutral-500 min-w-0 overflow-hidden">
            <button class="hover:text-red-600 transition flex-shrink-0" onclick="app.goToCategory('all')">Home</button>
            <span class="flex-shrink-0">/</span>
            <button class="hover:text-red-600 transition truncate flex-shrink-0 max-w-[90px] sm:max-w-none" onclick="app.goToCategory('${product.category}')">${product.category}</button>
            <span class="flex-shrink-0">/</span>
            <span class="text-neutral-900 truncate">${product.title}</span>
          </div>
          <div class="flex items-center gap-2 flex-shrink-0">
            <button class="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-sm" onclick="app.shareProduct('${product.id}')" aria-label="Share product" title="Share">
              🔗
            </button>
            <button class="zv-close-x" onclick="app.closeProductPage()" aria-label="Close product" title="Close">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                <path d="M7 7L17 17M17 7L7 17" />
              </svg>
            </button>
          </div>
        </div>

        <div class="p-3 sm:p-6">
          <div class="zv-pdp-grid grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8">

            <!-- Left: Gallery -->
            <div class="zv-pdp-gallery flex flex-col-reverse lg:flex-row gap-3">
              <!-- Thumbnails -->
              ${images.length > 1 ? `
                <div class="zv-pdp-thumbs flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible no-scrollbar">
                  ${images.map((img, idx) => `
                    <button
                      class="zv-pdp-thumb w-14 h-14 rounded-xl border-2 overflow-hidden flex-shrink-0 bg-neutral-50 ${this.activeQuickViewImgIndex === idx ? 'zv-pdp-thumb-active' : 'border-neutral-200'}"
                      onclick="app.setQuickViewImg(${idx})">
                      <img src="${img}" class="w-full h-full object-contain object-center p-1.5" alt="${escapeHtml(product.title)} thumbnail ${idx + 1}" />
                    </button>
                  `).join('')}
                </div>
              ` : ''}

              <div class="zv-product-gallery-frame relative w-full aspect-square bg-white rounded-2xl flex items-center justify-center overflow-hidden border border-neutral-200 zv-gallery-swipe flex-1">
                ${product.discount ? `
                <span class="absolute top-3 left-3 z-10 bg-red-600 text-white text-[10px] font-black px-2.5 py-0.5 rounded-md shadow">
                  ${product.discount}
                </span>` : ''}
                <button class="zv-pdp-zoom-btn absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-sm shadow" onclick="app.openLightbox()" aria-label="Zoom image" title="Zoom">
                  🔍
                </button>
                <img src="${currentImg}" alt="${escapeHtml(product.title)}" class="zv-product-gallery-image w-full h-full object-contain object-center p-8 sm:p-10 cursor-zoom-in zv-lightbox-trigger" onclick="app.openLightbox()" />
              </div>
            </div>

            <!-- Right: Details -->
            <div class="zv-pdp-info flex flex-col gap-3">
              ${product.badge ? `
              <span class="zv-pdp-badge-pill inline-flex items-center gap-1 self-start text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
                ★ ${escapeHtml(product.badge)}
              </span>` : ''}

              <h1 class="text-lg sm:text-2xl font-black text-neutral-900 leading-snug">${product.title}</h1>

              <div class="flex items-center gap-1.5 text-xs text-neutral-500 font-bold flex-wrap">
                <span class="text-amber-400">${'★'.repeat(Math.round(product.rating))}${'☆'.repeat(5 - Math.round(product.rating))}</span>
                <span>${product.rating} (${product.reviews} Reviews)</span>
                <span class="text-neutral-300">|</span>
                <button class="zv-pdp-link" onclick="app.setProductTab('reviews'); document.getElementById('pdp-tabs-anchor')?.scrollIntoView({behavior:'auto', block:'start'});">Write a Review</button>
              </div>

              <div class="flex items-baseline gap-2.5 flex-wrap">
                <span class="text-2xl sm:text-3xl font-black zv-pdp-price">${formatPKR(product.price)}</span>
                ${product.compareAtPrice ? `<span class="text-sm text-neutral-400 line-through">${formatPKR(product.compareAtPrice)}</span>` : ''}
                ${product.discount ? `<span class="zv-pdp-discount-pill text-[11px] font-black px-2 py-0.5 rounded-full">${product.discount}</span>` : ''}
              </div>
              <p class="text-[11px] text-neutral-400 font-semibold -mt-1.5">Inclusive of all taxes</p>

              ${product.description ? `<p class="text-xs sm:text-[13px] text-neutral-500 leading-relaxed">${escapeHtml(product.description)}</p>` : ''}

              <!-- Benefits Row -->
              <div class="zv-pdp-benefits grid grid-cols-2 sm:grid-cols-4 gap-2.5 py-2">
                <div class="flex items-start gap-2"><span class="text-base">🚚</span><span class="text-[10px] leading-tight"><span class="block font-bold text-neutral-700">Free Shipping</span><span class="text-neutral-400">Orders above Rs. 999</span></span></div>
                <div class="flex items-start gap-2"><span class="text-base">🛡️</span><span class="text-[10px] leading-tight"><span class="block font-bold text-neutral-700">1 Year Warranty</span><span class="text-neutral-400">On all products</span></span></div>
                <div class="flex items-start gap-2"><span class="text-base">🔄</span><span class="text-[10px] leading-tight"><span class="block font-bold text-neutral-700">7 Days Returns</span><span class="text-neutral-400">Hassle-free Returns</span></span></div>
                <div class="flex items-start gap-2"><span class="text-base">🔒</span><span class="text-[10px] leading-tight"><span class="block font-bold text-neutral-700">Secure Payment</span><span class="text-neutral-400">100% protected</span></span></div>
              </div>

              <div class="flex items-center gap-1.5 text-xs font-bold">
                <span class="w-2 h-2 rounded-full ${product.inStock ? 'bg-emerald-500' : 'bg-red-500'}"></span>
                <span class="${product.inStock ? 'text-emerald-600' : 'text-red-600'}">${product.inStock ? 'In Stock' : 'Out of Stock'}</span>
              </div>

              ${Array.isArray(product.colors) && product.colors.length ? `
              <div class="flex items-center gap-2.5">
                <span class="text-xs font-bold text-neutral-700">Color: ${escapeHtml(this.selectedProductColor || product.colors[0].name)}</span>
                <div class="flex items-center gap-1.5">
                  ${product.colors.map(c => `
                    <button class="zv-pdp-swatch w-6 h-6 rounded-full border-2 ${((this.selectedProductColor || product.colors[0].name) === c.name) ? 'zv-pdp-swatch-active' : 'border-neutral-200'}" style="background:${c.hex}" onclick="app.selectProductColor('${escapeHtml(c.name)}')" aria-label="${escapeHtml(c.name)}" title="${escapeHtml(c.name)}"></button>
                  `).join('')}
                </div>
              </div>` : ''}

              <!-- Actions -->
              <div class="grid grid-cols-2 gap-2.5 pt-1">
                <button
                  class="zv-pdp-btn-secondary w-full text-xs font-extrabold py-3 rounded-xl transition active:scale-95 flex items-center justify-center gap-1.5"
                  onclick="app.addToCart('${product.id}', ${this.quickViewQty});">
                  🛒 Add to Cart
                </button>
                <button
                  class="zv-pdp-btn-primary w-full text-xs font-extrabold py-3 rounded-xl transition active:scale-95 flex items-center justify-center gap-1.5"
                  onclick="app.buyNowDirect('${product.id}', ${this.quickViewQty})">
                  ⚡ Buy Now
                </button>
              </div>

              <div class="flex items-center justify-center gap-3 text-[11px] font-bold pt-1">
                <button class="zv-pdp-link flex items-center gap-1" data-wishlist-id="${product.id}" onclick="app.toggleWishlist('${product.id}')">
                  ${isWishlisted ? '❤️' : '♡'} ${isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
                </button>
                <span class="text-neutral-300">|</span>
                <button class="zv-pdp-link flex items-center gap-1" onclick="app.toggleCompare('${product.id}')">
                  ⇄ ${isCompared ? 'Added to Compare' : 'Compare'}
                </button>
              </div>
            </div>
          </div>

          <!-- Tabs + Specs -->
          <div id="pdp-tabs-anchor" class="zv-pdp-tabs-grid grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 mt-8 pt-6 border-t border-neutral-100">
            <div class="min-w-0">
              <div class="zv-pdp-tabs flex items-center gap-4 sm:gap-6 border-b border-neutral-100 overflow-x-auto no-scrollbar">
                ${tabs.map(t => `
                  <button class="zv-pdp-tab-btn ${activeTab === t.key ? 'zv-pdp-tab-active' : ''}" onclick="app.setProductTab('${t.key}')">
                    ${t.label}
                  </button>
                `).join('')}
              </div>

              <div class="zv-pdp-tab-panel pt-4">
                ${activeTab === 'description' ? `
                  ${product.description ? `<p class="text-xs sm:text-[13px] text-neutral-500 leading-relaxed">${escapeHtml(product.description)}</p>` : ''}
                  ${(product.features || []).length ? `
                  <h5 class="text-[11px] font-black text-neutral-800 uppercase tracking-wider mt-4 mb-2">Features</h5>
                  <ul class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-neutral-600">
                    ${product.features.map(f => `
                      <li class="flex items-center gap-2">
                        <span class="text-emerald-500 font-bold">✓</span>
                        <span>${escapeHtml(f)}</span>
                      </li>
                    `).join('')}
                  </ul>` : ''}
                ` : ''}

                ${activeTab === 'specifications' ? `
                  <div class="lg:hidden">${this.renderSpecTable(specRows)}</div>
                  <p class="hidden lg:block text-xs text-neutral-400">See the full specifications in the panel to the right.</p>
                ` : ''}

                ${activeTab === 'reviews' ? this.renderProductReviews(product) : ''}

                ${activeTab === 'shipping' ? `
                  <div class="text-xs text-neutral-500 leading-relaxed space-y-2">
                    <p><strong class="text-neutral-800">🚚 Delivery:</strong> Cash on Delivery across Pakistan. Orders are typically delivered within 2 to 4 working days.</p>
                    <p><strong class="text-neutral-800">🔄 Returns:</strong> 7 days hassle-free returns from the date of delivery, provided the product is unused and in its original packaging.</p>
                    <p><strong class="text-neutral-800">🔁 Replacement:</strong> 14 days replacement guarantee for defective or damaged items.</p>
                    <p><strong class="text-neutral-800">🔒 Payment:</strong> Pay cash when your order arrives — no advance payment required.</p>
                  </div>
                ` : ''}
              </div>
            </div>

            <!-- Specs side panel (desktop) -->
            <div class="zv-pdp-specs-card hidden lg:block">
              ${this.renderSpecTable(specRows)}
            </div>
          </div>

          <!-- You May Also Like -->
          ${relatedList.length ? `
          <div class="mt-10 pt-6 border-t border-neutral-100">
            <div class="flex items-center justify-between mb-3">
              <h4 class="text-sm sm:text-base font-black text-neutral-900">You May Also Like</h4>
              <div class="flex items-center gap-2">
                <button class="text-[11px] font-bold zv-pdp-link" onclick="app.goToCategory('${product.category}')">View All (${sameCategory.length}) →</button>
                <div class="flex items-center gap-1.5 ml-1">
                  <button type="button" class="zv-slider-arrow zv-slider-arrow--light" data-slider-prev="related-slider" aria-label="Previous products">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" /></svg>
                  </button>
                  <button type="button" class="zv-slider-arrow zv-slider-arrow--light" data-slider-next="related-slider" aria-label="Next products">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </div>
            </div>
            <div id="related-slider" class="zv-slider">
            <div class="flex gap-3 overflow-x-auto no-scrollbar pb-1 zv-slider-track">
              ${relatedList.map(p => `<div class="w-[200px] sm:w-[230px] flex-shrink-0">${this.renderProductCard(p)}</div>`).join('')}
            </div>
            </div>
          </div>` : ''}

          <!-- Trust Bar -->
          <div class="zv-pdp-trustbar grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-neutral-100 text-center">
            <div><span class="block text-lg">🚚</span><span class="block text-[11px] font-bold text-neutral-700 mt-1">Free Shipping</span><span class="block text-[10px] text-neutral-400">On orders above Rs. 999</span></div>
            <div><span class="block text-lg">🔄</span><span class="block text-[11px] font-bold text-neutral-700 mt-1">7 Days Returns</span><span class="block text-[10px] text-neutral-400">Hassle-free returns</span></div>
            <div><span class="block text-lg">🔒</span><span class="block text-[11px] font-bold text-neutral-700 mt-1">Secure Payments</span><span class="block text-[10px] text-neutral-400">100% secure checkout</span></div>
            <div><span class="block text-lg">🎧</span><span class="block text-[11px] font-bold text-neutral-700 mt-1">24/7 Support</span><span class="block text-[10px] text-neutral-400">We're here to help</span></div>
          </div>
        </div>
      </div>
    `;
  }

  renderProductReviews(product) {
    const reviews = store.getReviewsForProduct(product.id);
    const avg = reviews.length ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length) : null;

    return `
      <div class="flex items-center justify-between">
        <h4 class="text-sm font-black text-neutral-900 uppercase tracking-tight">
          Customer Reviews ${reviews.length ? `(${reviews.length})` : ''}
        </h4>
        ${avg ? `<span class="text-xs font-bold text-amber-500">${'★'.repeat(Math.round(avg))}${'☆'.repeat(5 - Math.round(avg))} <span class="text-neutral-500 font-medium">${avg.toFixed(1)} avg</span></span>` : ''}
      </div>

      ${!store.reviewsLoaded ? `
        <p class="text-xs text-neutral-400">Loading reviews…</p>
      ` : reviews.length === 0 ? `
        <p class="text-xs text-neutral-500">No reviews yet — be the first to share your experience.</p>
      ` : `
        <div class="space-y-3 max-h-64 overflow-y-auto pr-1">
          ${reviews.map(r => `
            <div class="p-3 rounded-xl border border-neutral-200 bg-neutral-50">
              <div class="flex items-center justify-between mb-1">
                <span class="text-xs font-extrabold text-neutral-900">${escapeHtml(r.name)}</span>
                <span class="text-amber-500 text-xs">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</span>
              </div>
              <p class="text-xs text-neutral-600 leading-relaxed">${escapeHtml(r.comment)}</p>
              <button class="mt-2 text-[11px] font-bold ${store.helpfulVoted.has(r.id) ? 'text-emerald-600' : 'text-neutral-400 hover:text-neutral-700'}" onclick="app.markReviewHelpful('${r.id}')">
                👍 Helpful ${r.helpful > 0 ? `(${r.helpful})` : ''}
              </button>
            </div>
          `).join('')}
        </div>
      `}

      <form id="review-form-${product.id}" class="pt-3 border-t border-neutral-200 space-y-2.5">
        <h5 class="text-xs font-black text-neutral-800 uppercase tracking-wider">Write a Review</h5>
        <div class="flex items-center gap-1" id="review-stars-${product.id}" data-rating="0">
          ${[1, 2, 3, 4, 5].map(n => `
            <button type="button" class="review-star text-2xl text-neutral-300" data-value="${n}" onclick="app.setReviewStar('${product.id}', ${n})">☆</button>
          `).join('')}
        </div>
        <input id="review-name-${product.id}" type="text" placeholder="Your name" class="w-full px-3 py-2.5 rounded-xl border border-neutral-300 text-xs focus:outline-none focus:ring-2 focus:ring-red-500" />
        <textarea id="review-comment-${product.id}" rows="2" placeholder="Share your experience with this product..." class="w-full px-3 py-2.5 rounded-xl border border-neutral-300 text-xs focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"></textarea>
        <button type="submit" class="w-full bg-neutral-900 hover:bg-black text-white text-xs font-extrabold py-2.5 rounded-xl transition active:scale-95">
          Submit Review
        </button>
      </form>
    `;
  }
  renderCheckoutModal() {
    const isOpen = store.activeModal === 'checkout';
    if (!isOpen) return '';
    const subtotal = store.getCartSubtotal();
    const discount = store.getCartDiscount();
    const freeShipping = store.getFreeShippingProgress();
    const shippingFee = freeShipping.isFree ? 0 : 199;
    const total = Math.max(0, subtotal - discount) + shippingFee;
    const customer = store.loadCustomerDetails();

    return `
      <div class="fixed inset-0 z-50 pointer-events-none ${isOpen ? 'pointer-events-auto' : ''}">
        <div class="drawer-backdrop absolute inset-0 bg-black/75 backdrop-blur-sm ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}" onclick="store.closeModal()"></div>

        <div class="fixed inset-0 z-[160] flex items-center justify-center p-3 sm:p-4">
          <div class="drawer-bottom zv-checkout-panel w-full max-w-lg bg-white rounded-3xl shadow-2xl z-10 max-h-[calc(100dvh-1.5rem)] overflow-y-auto flex flex-col ${isOpen ? 'open' : ''}">
          <!-- Header -->
          <div class="sticky top-0 bg-white/95 backdrop-blur-md p-4 border-b border-neutral-200 flex items-center justify-between z-20">
            <div>
              <h4 class="text-sm sm:text-base font-black text-neutral-900">Cash on Delivery Order</h4>
              <p class="text-[11px] text-neutral-500 font-medium">Pay cash when your order arrives at your door</p>
            </div>
            <button class="zv-close-x" onclick="store.closeModal()" aria-label="Close" title="Close"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M7 7L17 17M17 7L7 17" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg></button>
          </div>

          <form id="checkout-form" class="p-4 sm:p-6 space-y-4">
            <!-- Order breakdown pill -->
            <div class="bg-neutral-50 p-4 rounded-2xl border border-neutral-200 text-xs space-y-1">
              <div class="flex justify-between text-neutral-600">
                <span>Items in Order:</span>
                <span class="font-bold text-neutral-900">${store.getCartCount()} Items</span>
              </div>
              <div class="mt-2 pt-2 border-t border-neutral-200 space-y-2 max-h-40 overflow-y-auto">
                ${store.cart.map(item => `
                  <div class="flex items-center gap-2 min-w-0">
                    <img src="${item.product.image}" alt="${escapeHtml(item.product.title)}" class="w-10 h-10 rounded-lg object-contain bg-white border border-neutral-200 flex-shrink-0" />
                    <div class="min-w-0 flex-grow">
                      <p class="text-[11px] font-bold text-neutral-800 truncate">${escapeHtml(item.product.title)}</p>
                      <p class="text-[10px] text-neutral-500">Qty: ${item.quantity}</p>
                    </div>
                    <span class="text-[11px] font-black text-neutral-900 flex-shrink-0">${formatPKR(item.product.price * item.quantity)}</span>
                  </div>
                `).join('')}
              </div>
              <div class="flex justify-between text-neutral-600">
                <span>Shipping:</span>
                <span class="font-bold ${shippingFee === 0 ? 'text-emerald-600 font-black' : 'text-neutral-900'}">${shippingFee === 0 ? 'FREE' : formatPKR(shippingFee)}</span>
              </div>
              <div class="flex justify-between font-black text-neutral-900 pt-2 border-t border-neutral-200 text-sm">
                <span>Total Payable (COD):</span>
                <span class="text-red-600 text-base">${formatPKR(total)}</span>
              </div>
            </div>

            <!-- Fields -->
            <div>
              <label class="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1">Full Name *</label>
              <input type="text" id="cust-name" required value="${escapeHtml(customer.name || '')}" placeholder="e.g. Muhammad Ali" class="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>

            <div>
              <label class="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1">WhatsApp / Mobile Number *</label>
              <input type="tel" id="cust-phone" required value="${escapeHtml(customer.phone || '')}" placeholder="0300 1234567" class="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>

            <div>
              <label class="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1">City *</label>
              <input type="text" id="cust-city" required value="${escapeHtml(customer.city || '')}" placeholder="e.g. Lahore / Karachi / Islamabad" class="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>

            <div>
              <label class="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1">Complete Delivery Address *</label>
              <textarea id="cust-address" required rows="2" placeholder="House #, Street #, Sector / Near landmark..." class="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-red-500">${escapeHtml(customer.address || '')}</textarea>
            </div>

              <button type="submit" id="checkout-submit-btn" class="premium-control w-full text-white font-black text-xs sm:text-sm py-4 rounded-xl shadow-xl transition active:scale-95 flex items-center justify-center gap-2">
              <span>CONFIRM ORDER (CASH ON DELIVERY)</span>
              <span>→</span>
            </button>
          </form>
          </div>
        </div>
      </div>
    `;
  }

  // The original homepage body (hero, categories, flash sale, product grid,
  // trust badges, testimonials) — extracted out of render() so other full
  // pages (About, Contact) can share the same nav/footer/modals shell.
  renderHomeContent() {
    const filteredProducts = store.getFilteredProducts();
    const collectionMeta = {
      'Audio & Speakers': { icon: '◉', tagline: 'Premium Sound. Higher Vibes.' },
      'Smart Wearables': { icon: '⌚', tagline: 'Track. Health. Lifestyle.' },
      'Gaming & PC Accessories': { icon: '⌁', tagline: 'Play Without Limits.' },
      'Mobile Accessories': { icon: '▯', tagline: 'Connect. Protect. Enhance.' }
    };
    const flashProducts = [
      ...store.products.filter(product => product.isFlashSale),
      ...store.products.filter(product => !product.isFlashSale)
    ].slice(0, 4);
    return `
          
          <!-- 3. Hero Carousel Banner -->
          <section class="premium-hero relative w-full rounded-[30px] sm:rounded-[32px] overflow-hidden bg-neutral-950 text-white select-none">
            <div id="hero-slider-track" class="flex transition-transform duration-500 ease-out" style="transform: translateX(-${this.currentHeroSlide * 100}%);">
              
              <!-- Slide 1: Premium Tech Essentials -->
              <div class="min-w-full relative min-h-[220px] sm:min-h-[340px] md:min-h-[380px] bg-gradient-to-r from-black via-neutral-900 to-red-950 flex items-center px-6 sm:px-12 py-8">
                <div id="hero-slide-content-0" class="hero-slide-inner${this.currentHeroSlide === 0 ? ' hero-slide-inner-play' : ''} w-full sm:w-3/5 z-10 space-y-2 sm:space-y-3">
                  <div class="inline-flex items-center gap-1.5 bg-red-600 text-white text-[10px] sm:text-xs font-black px-3 py-1 rounded-full uppercase shadow-md">
                    ⚡ NEW PREMIUM COLLECTION
                  </div>
                  <h1 class="text-2xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none">
                    ZYVRON ELITE &amp; <span class="text-red-500">TITANIUM SERIES</span>
                  </h1>
                  <p class="text-neutral-300 text-xs sm:text-sm font-medium max-w-md line-clamp-2">
                    Flagship titanium-finish earbuds with studio-grade ANC — built for listeners who want the best.
                  </p>
                  <div class="pt-2 flex items-center gap-3">
                    <button class="hero-cta-btn premium-btn text-xs sm:text-sm font-extrabold px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl transition active:scale-95 flex items-center gap-2" data-category="all">
                      <span>SHOP ALL TECH</span>
                      <span>→</span>
                    </button>
                    <span class="hidden sm:inline-block text-xs text-neutral-400 font-semibold">💵 Cash on Delivery</span>
                  </div>
                </div>
                <div class="hidden sm:flex w-2/5 justify-center items-center relative">
                  <div class="w-64 h-64 md:w-80 md:h-80 rounded-full bg-red-600/10 absolute blur-3xl"></div>
                  <img src="https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=600&q=80&auto=format&fit=crop" alt="Premium Titanium Wireless Earbuds" class="w-56 md:w-72 h-56 md:h-72 object-cover rounded-2xl drop-shadow-2xl transform hover:scale-105 transition duration-300" />
                </div>
              </div>

              <!-- Slide 2: Smart Wearables -->
              <div class="zy-hero-slide min-w-full relative overflow-hidden text-white">
                <div class="zy-hero-content">
                  <div id="hero-slide-content-1" class="zy-hero-copy hero-slide-inner">
                    <div class="zy-badge">⚡ TITANIUM ULTRA</div>
                    <h2>ALWAYS-ON &amp; <span>ALWAYS PREMIUM</span></h2>
                    <p>A flagship AMOLED smartwatch with a durable titanium-style case &amp; complete health tracking.</p>
                    <div class="zy-features">
                      <div><b>◉</b><strong>AMOLED Display</strong><small>Crystal Clear</small></div>
                      <div><b>♡</b><strong>Health Tracking</strong><small>24/7 Monitoring</small></div>
                      <div><b>▣</b><strong>Long Battery Life</strong><small>Up to 7 Days</small></div>
                      <div><b>◇</b><strong>Titanium Build</strong><small>Premium Finish</small></div>
                    </div>
                    <div class="zy-hero-actions">
                      <button class="hero-cta-btn zy-shop-btn" data-category="Smart Wearables">SHOP WEARABLES <span>→</span></button>
                      <div class="zy-quality">⭐ 100% Quality</div>
                    </div>
                  </div>
                  <div class="zy-watch-area">
                    <div class="zy-neon-ring"></div>
                    <div class="zy-watch" aria-label="Smartwatch preview">
                      <div class="zy-watch-screen">
                        <strong>10:09</strong><span>Tue, Apr 23</span>
                        <div class="zy-heart">♥ 72</div>
                        <div class="zy-watch-stats">🔥 328 &nbsp;&nbsp; 🔋 100%</div>
                      </div>
                    </div>
                    <div class="zy-feature-stack">
                      <div class="zy-feature-box"><span>♡</span><div><b>Heart Rate</b><small>Monitoring</small></div><i>›</i></div>
                      <div class="zy-feature-box"><span>◯</span><div><b>SpO₂</b><small>Tracking</small></div><i>›</i></div>
                      <div class="zy-feature-box"><span>♢</span><div><b>100+</b><small>Sports Modes</small></div><i>›</i></div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Slide 3: Gaming & PC Accessories -->
              <div class="min-w-full relative min-h-[220px] sm:min-h-[340px] md:min-h-[380px] bg-gradient-to-r from-stone-950 via-neutral-900 to-red-950 flex items-center px-6 sm:px-12 py-8">
                <div id="hero-slide-content-2" class="hero-slide-inner w-full sm:w-3/5 z-10 space-y-2 sm:space-y-3">
                  <div class="inline-flex items-center gap-1.5 bg-red-600 text-white text-[10px] sm:text-xs font-black px-3 py-1 rounded-full uppercase shadow-md">
                    🎮 MECH PRO SERIES
                  </div>
                  <h2 class="text-2xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none">
                    HOT-SWAP &amp; <span class="text-red-500">ESPORTS READY</span>
                  </h2>
                  <p class="text-neutral-300 text-xs sm:text-sm font-medium max-w-md line-clamp-2">
                    Hot-swappable RGB mechanical keyboards &amp; precision wireless gaming mice, built premium.
                  </p>
                  <div class="pt-2 flex items-center gap-3">
                    <button class="hero-cta-btn premium-btn text-xs sm:text-sm font-extrabold px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl transition active:scale-95 flex items-center gap-2" data-category="Gaming & PC Accessories">
                      <span>SHOP GAMING GEAR</span>
                      <span>→</span>
                    </button>
                    <span class="hidden sm:inline-block text-xs text-neutral-400 font-semibold">⚡ Fast Dispatch</span>
                  </div>
                </div>
                <div class="hidden sm:flex w-2/5 justify-center items-center relative">
                  <div class="w-64 h-64 md:w-80 md:h-80 rounded-full bg-red-600/10 absolute blur-3xl"></div>
                  <img src="https://images.unsplash.com/photo-1598662779094-110c2bad80b5?w=600&q=80&auto=format&fit=crop" alt="Premium Mechanical Gaming Keyboard" class="w-56 md:w-72 h-56 md:h-72 object-cover rounded-2xl drop-shadow-2xl transform hover:scale-105 transition duration-300" />
                </div>
              </div>

            </div>

            <!-- Slide Dots: which dot renders as the wide "active" pill (with
                 the autoplay progress bar inside) must match this.currentHeroSlide
                 — it used to be hardcoded to dot 0 regardless of the actual
                 starting slide (this.currentHeroSlide defaults to 1), so the
                 progress bar animated on the wrong dot on first paint, before
                 any manual/auto slide change had a chance to correct it via
                 updateHeroDots(). Built dynamically now so it's right from
                 the very first frame. -->
            <div class="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-2 z-20">
              ${[0, 1, 2].map(idx => this.currentHeroSlide === idx ? `
              <button class="hero-dot relative w-9 h-2 rounded-full bg-white/25 overflow-hidden transition-all duration-300" onclick="app.setHeroSlide(${idx})" aria-label="Slide ${idx + 1}">
                <span id="hero-progress-bar" class="hero-progress-bar absolute inset-y-0 left-0 rounded-full"></span>
              </button>
              ` : `
              <button class="hero-dot w-2 h-2 rounded-full bg-white/40 hover:bg-white/70 transition-all duration-300" onclick="app.setHeroSlide(${idx})" aria-label="Slide ${idx + 1}"></button>
              `).join('')}
            </div>
          </section>

          <!-- 4. Category Showcase Section (Responsive Grid for Laptop + Story Circles for Mobile) -->
          <section id="section-categories" class="featured-collections section-shell space-y-3 scroll-mt-24 rounded-[24px] p-4 sm:p-5">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-sm sm:text-lg font-black uppercase text-neutral-900 tracking-tight">
                  <span class="zy-heading-muted">FEATURED</span> <span class="zy-heading-accent">COLLECTIONS</span>
                </h3>
                <p class="text-[11px] sm:text-xs text-neutral-500 font-medium">Shop by curated lifestyle categories</p>
              </div>
              <button class="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1" onclick="app.goToAllProducts()">
                <span>View All (${store.products.length})</span>
                <span>→</span>
              </button>
            </div>

            <!-- Laptop/Desktop Category Grid Cards (Hidden on mobile) -->
            <div class="collection-grid hidden sm:grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              ${getCategories(store.products).filter(c => c.id !== 'all').map(cat => {
                const isActive = store.activeCategory === cat.id;
                return `
                  <div 
                    class="collection-card category-card-premium group relative h-44 rounded-[22px] overflow-hidden cursor-pointer border ${isActive ? 'border-red-500 ring-2 ring-red-500/20' : 'border-white/80'}"
                    onclick="app.goToCategory('${cat.id}')">
                    <img src="${cat.image}" alt="${cat.name}" class="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                    <div class="collection-content absolute inset-0 bg-gradient-to-t from-black/88 via-black/20 to-transparent flex flex-col justify-end p-4 text-white">
                      <div class="zy-collection-icon">${collectionMeta[cat.name]?.icon || '◆'}</div>
                      <div class="zy-collection-copy">
                        <h4 class="text-base font-extrabold leading-tight text-white group-hover:text-red-300 transition">${cat.name}</h4>
                        <small>${collectionMeta[cat.name]?.tagline || `${cat.count} Items`}</small>
                      </div>
                      <span class="collection-arrow zy-collection-arrow">›</span>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>

            <!-- Mobile Category Circle Slider (Visible only on mobile) -->
            <div class="sm:hidden relative px-6">
              <div id="category-scroll-row" class="flex items-start gap-3 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-1">
                ${getCategories(store.products).map(cat => {
                  const isActive = store.activeCategory === cat.id;
                  return `
                    <button 
                      class="category-circle-btn flex flex-col items-center gap-1.5 flex-shrink-0 w-[72px] group focus:outline-none snap-start"
                      data-category="${cat.id}">
                      <div class="w-16 h-16 rounded-full p-[2px] flex-shrink-0 transition-transform duration-200 group-active:scale-95 ${isActive ? 'bg-gradient-to-tr from-red-600 to-rose-500 ring-2 ring-red-500 ring-offset-2' : 'bg-neutral-200'}">
                        <div class="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
                          <img src="${cat.image}" alt="${cat.name}" class="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                        </div>
                      </div>
                      <span class="block w-full text-[11px] font-bold text-center leading-tight truncate ${isActive ? 'text-red-600' : 'text-neutral-700'}">
                        ${cat.name}
                      </span>
                    </button>
                  `;
                }).join('')}
              </div>
            </div>
          </section>

          <!-- 5. Flash Deals Section with Countdown Banner -->
          <section id="section-flash" class="flash-deals-section flash-panel scroll-mt-24 bg-gradient-to-br from-neutral-950 via-red-950 to-neutral-900 rounded-[28px] sm:rounded-[32px] p-4 sm:p-6 text-white border border-red-900/40 relative overflow-hidden">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-6">
              <div class="flex items-center gap-2.5">
                <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-red-600 text-white flex items-center justify-center font-black text-lg shadow-md shadow-red-600/40 animate-pulse">
                  ✦
                </div>
                <div>
                  <h3 class="text-base sm:text-xl font-black uppercase tracking-tight text-white">
                    <span class="zy-heading-muted">FLASH DEALS &amp;</span> <span class="zy-heading-accent">TOP DISCOUNTS</span>
                  </h3>
                  <p class="text-xs text-red-200 font-medium">Limited Stock • Up to 50% Off</p>
                </div>
              </div>

              <!-- Real Countdown Clock -->
              <div class="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 w-max">
                <span class="text-[10px] sm:text-xs font-bold text-red-400 uppercase tracking-wider">Hurry! Ends in:</span>
                <div class="flash-countdown-timer flex items-center gap-1"></div>
              </div>
            </div>

            <!-- Flash Sale Horizontal Scroll for Mobile / Responsive Multi-Card Carousel for Laptop -->
            <div class="flash-product-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              ${flashProducts.map(product => `
                <div class="product-card flash-product-card bg-white rounded-[22px] p-4 text-neutral-900 flex flex-col justify-between relative group hover:shadow-xl transition-all duration-300">
                  ${product.discount ? `
                  <span class="discount-badge absolute top-2.5 left-2.5 z-10 sale-badge-gradient text-white text-[10px] font-black px-2 py-0.5 rounded-md shadow">
                    ${product.discount}
                  </span>` : ''}

                  <div class="product-image w-full pt-[90%] relative bg-neutral-50 rounded-xl overflow-hidden mb-2.5 cursor-pointer" onclick="app.openQuickView('${product.id}')">
                    <img src="${product.image}" alt="${product.title}" class="absolute inset-0 w-full h-full object-contain p-1.5 group-hover:scale-105 transition-transform duration-300" />
                  </div>

                  <div>
                    <h5 class="text-xs sm:text-sm font-bold text-neutral-900 line-clamp-1 leading-snug cursor-pointer hover:text-red-600 transition" onclick="app.openQuickView('${product.id}')">
                      ${product.title}
                    </h5>
                    
                    <div class="flex items-baseline gap-1.5 mt-1.5">
                      <span class="text-base font-black text-red-600">${formatPKR(product.price)}</span>
                      <span class="text-[10px] text-neutral-400 line-through">${formatPKR(product.compareAtPrice)}</span>
                    </div>

                    <!-- Stock Progress Meter -->
                    <div class="w-full bg-neutral-100 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div class="bg-gradient-to-r from-amber-500 to-red-500 h-full rounded-full" style="width: 82%;"></div>
                    </div>
                    <span class="text-[9px] text-neutral-500 font-semibold mt-0.5 block">◆ 82% Claimed</span>
                    
                    <div class="product-actions flex items-center gap-2 mt-3">
                      <button 
                        class="add-to-cart-btn w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0 bg-neutral-800 hover:bg-black text-white rounded-md transition active:scale-90 flex items-center justify-center"
                        onclick="app.addToCart('${product.id}')"
                        aria-label="Add to Cart"
                        title="Add to Cart">
                        <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
                        </svg>
                      </button>
                      <button
                        class="wishlist-btn w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0 rounded-md border ${store.isWishlisted(product.id) ? 'border-red-200 bg-red-50 text-red-600' : 'border-neutral-200 bg-white text-neutral-600'} flex items-center justify-center transition active:scale-90"
                        data-wishlist-id="${product.id}"
                        onclick="event.stopPropagation(); app.toggleWishlist('${product.id}')"
                        aria-label="${store.isWishlisted(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}"
                        title="${store.isWishlisted(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}">
                        <svg class="w-3 h-3 ${store.isWishlisted(product.id) ? 'fill-current' : ''}" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                      </button>
                      <button 
                        class="buy-now-btn zv-buy-now-btn flex-1 min-h-[24px] sm:min-h-[28px] premium-btn text-white text-[8px] sm:text-[9px] font-extrabold px-1 sm:px-2 rounded-md transition active:scale-95 flex items-center justify-center gap-0.5"
                        onclick="event.stopPropagation(); app.buyNowDirect('${product.id}')"
                        aria-label="Buy Now">
                        <span>BUY NOW</span>
                      </button>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </section>

          <!-- 6. Main Product Grid Section -->
          <section id="section-products" class="all-products-section scroll-mt-24 space-y-3.5 pt-2">
            <!-- 1. Large Section Heading + Subtitle, plus Feature Cards, all in one row -->
            <div class="section-title-block px-1">
              <div class="min-w-0">
                <h2 class="section-title text-2xl sm:text-3xl font-black text-neutral-900 uppercase tracking-tight leading-none">
                  ${store.activeCategory === 'all' ? 'All Products' : store.activeCategory === 'flash' ? 'Flash Deals' : store.activeCategory === 'wishlist' ? 'My Wishlist' : (getCategories(store.products).find(c => c.id === store.activeCategory)?.name || 'Products')}
                </h2>
                <p class="section-subtitle text-xs sm:text-sm text-neutral-500 font-medium mt-1">
                  ${store.activeCategory === 'flash' ? 'Limited-time offers at unbeatable prices.' : store.activeCategory === 'wishlist' ? 'Products you\'ve saved for later.' : 'Hand-picked tech accessories, curated for quality and value.'}
                </p>
              </div>

              <!-- 2. Compact Feature Cards: AI Assistant + Compare -->
              <div class="flex items-start gap-2.5 sm:gap-3 flex-shrink-0">
                <div class="smart-helper-grid grid grid-cols-2 gap-2.5 sm:gap-3">
                  <button onclick="store.openModal('assistant')" class="smart-helper feature-chip flex items-center gap-1.5 bg-neutral-950 hover:bg-neutral-900 border border-white/10 rounded-2xl px-2 py-2.5 text-left transition">
                    <span class="text-base flex-shrink-0">🤖</span>
                    <span class="min-w-0">
                      <span class="block text-[11px] sm:text-xs font-extrabold text-white leading-tight truncate">Ask AI Assistant</span>
                      <span class="hidden sm:block text-[10px] text-neutral-400 font-medium truncate">Get instant help picking a product</span>
                    </span>
                  </button>
                  <button onclick="store.compareList.length ? store.openModal('compare') : store.showToast('Tap the ⇅ Compare icon on any 2+ products first', 'info')" class="smart-helper feature-chip flex items-center gap-1.5 bg-neutral-950 hover:bg-neutral-900 border border-white/10 rounded-2xl px-2 py-2.5 text-left transition">
                    <span class="text-base flex-shrink-0">⇅</span>
                    <span class="min-w-0">
                      <span class="block text-[11px] sm:text-xs font-extrabold text-white leading-tight truncate">Compare Products</span>
                      <span class="hidden sm:block text-[10px] text-neutral-400 font-medium truncate">Tap ⇅ on any product to compare</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <!-- 3. Product Count + Filter + Sort Bar -->
            <div class="product-filter-bar section-shell flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 p-3 sm:p-3.5 rounded-[18px]">
              <p class="text-xs text-neutral-500 font-medium">
                <strong class="text-neutral-900 font-extrabold">${filteredProducts.length}</strong> Products
              </p>

              <div class="flex items-center gap-2 flex-wrap sm:flex-nowrap">
                <div class="hidden md:flex items-center gap-1.5">
                  ${getCategories(store.products).map(c => `
                    <button 
                      class="text-xs font-semibold px-3 py-1.5 rounded-lg border transition ${store.activeCategory === c.id ? 'bg-black text-white border-black' : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700 border-transparent'}"
                      onclick="app.goToCategory('${c.id}')">
                      ${c.name}
                    </button>
                  `).join('')}
                </div>

                <!-- Sort Dropdown -->
                <select id="sort-select" class="bg-neutral-50 border border-neutral-300 text-neutral-900 text-xs font-bold rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500">
                  <option value="popular" ${store.sortBy === 'popular' ? 'selected' : ''}>🔥 Most Popular</option>
                  <option value="price-low" ${store.sortBy === 'price-low' ? 'selected' : ''}>💵 Price: Low to High</option>
                  <option value="price-high" ${store.sortBy === 'price-high' ? 'selected' : ''}>💎 Price: High to Low</option>
                  <option value="discount" ${store.sortBy === 'discount' ? 'selected' : ''}>🏷️ Highest Discount</option>
                  <option value="rating" ${store.sortBy === 'rating' ? 'selected' : ''}>⭐ Highest Rated</option>
                </select>
              </div>
            </div>

            <!-- Multi-Column Product Grid (2 cols mobile, 3 cols tablet, 4 cols laptop/desktop) -->
            ${filteredProducts.length === 0 ? `
              <div class="bg-white rounded-3xl p-12 text-center border border-neutral-200 max-w-lg mx-auto shadow-sm my-8">
                <div class="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto text-2xl mb-4">
                  🔍
                </div>
                <h4 class="text-base font-extrabold text-neutral-900">No matching products found</h4>
                <p class="text-xs text-neutral-500 mt-1 max-w-xs mx-auto">
                  We couldn't find anything matching your search criteria. Try a different keyword or category.
                </p>
                <button onclick="app.resetFilters()" class="mt-5 bg-black hover:bg-neutral-800 text-white text-xs font-bold px-6 py-2.5 rounded-xl shadow transition">
                  Browse All Products
                </button>
              </div>
            ` : (() => {
              // Numbered pagination (1 2 3 / Prev / Next) removed — every
              // product matching the current category/search/sort now
              // renders in one continuous grid instead of being split
              // across pages.
              return `
              <div class="product-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
                ${filteredProducts.map(product => this.renderProductCard(product)).join('')}
              </div>
              `;
            })()}

            <!-- Clearance spacer: keeps floating widgets (AI/WhatsApp/scroll-top/purchase toast) off the last row of products -->
            <div class="h-16 sm:h-0" aria-hidden="true"></div>
          </section>
    `;
  }

  renderAboutPage(justEntered) {
    return `
      <section class="zv-about-page relative max-w-6xl mx-auto px-4 py-5 sm:px-6 sm:py-8">
        <button
          type="button"
          onclick="app.closeAboutPage()"
          class="zv-close-x zv-close-x--corner"
          aria-label="Close About Us page"
          title="Close About Us page"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M7 7L17 17M17 7L7 17" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>
        </button>

        <div class="zv-about-shell pt-10 sm:pt-12">
          <div class="zv-about-hero text-left max-w-3xl mx-auto space-y-4 sm:space-y-6">
            <span class="zv-about-kicker">About Us</span>
            <h1 class="zv-about-title">Powering Your Everyday Tech</h1>
            <p class="zv-about-copy">
              Zyvron Tech Accessories is Pakistan's trusted destination for premium wireless audio, smartwatches, gaming gear &amp; smart mobile accessories — built on fast delivery, honest pricing, and Cash on Delivery you can rely on.
            </p>
          </div>

          <div class="zv-about-stats grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            ${[
              { value: '50K+', label: 'Happy Customers', countTo: 50, suffix: 'K+' },
              { value: '500+', label: 'Products', countTo: 500, suffix: '+' },
              { value: '30+', label: 'Trusted Brands', countTo: 30, suffix: '+' },
              { value: '24/7', label: 'WhatsApp Support' }
            ].map(s => `
              <div class="zv-about-stat">
                <div class="zv-about-stat-value"${justEntered && s.countTo ? ` data-zv-countup="${s.countTo}" data-zv-suffix="${s.suffix}"` : ''}>${justEntered && s.countTo ? `0${s.suffix}` : s.value}</div>
                <p>${s.label}</p>
              </div>
            `).join('')}
          </div>

          <div class="zv-about-story grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-5xl mx-auto">
            <div class="space-y-4">
              <h2>Our Story</h2>
              <p>
                Zyvron started with a simple frustration: premium tech accessories in Pakistan were either overpriced, hard to trust online, or slow to arrive. We set out to fix all three — sourcing directly, pricing honestly, and shipping nationwide with Cash on Delivery so you never have to pay before you see your order.
              </p>
              <p>
                Today, thousands of customers shop with us for wireless audio, smartwatches, gaming accessories, and mobile essentials — backed by a 14-day checking &amp; replacement guarantee on every order.
              </p>
            </div>
            <div class="zv-about-visual">
              <span>⚡</span>
            </div>
          </div>

          <div class="zv-about-values max-w-5xl mx-auto">
            <h2>What We Stand For</h2>
            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              ${[
                { icon: '💡', title: 'Innovation', desc: 'Always-on premium tech, curated for everyday life.' },
                { icon: '✅', title: 'Quality', desc: 'Every product checked before it reaches your door.' },
                { icon: '🤝', title: 'Customer First', desc: '24/7 WhatsApp support and a 14-day guarantee.' },
                { icon: '🌱', title: 'Sustainability', desc: 'Built to last, not to be replaced every season.' }
              ].map(v => `
                <div class="zv-about-card">
                  <div class="zv-about-card-icon">${v.icon}</div>
                  <h3>${v.title}</h3>
                  <p>${v.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="zv-about-cta">
            <h2>Ready to Upgrade Your Tech?</h2>
            <p>Browse the full catalog and get free delivery on orders over Rs. 3,000.</p>
            <button onclick="app.goToCategory('all')">
              Shop All Products →
            </button>
          </div>
        </div>
      </section>
    `;
  }

  renderContactPage() {
    return `
      <section class="py-8 sm:py-12 space-y-10">

        <div class="text-center max-w-2xl mx-auto space-y-3">
          <span class="text-xs font-black text-red-600 uppercase tracking-widest">Contact Us</span>
          <h1 class="text-3xl sm:text-4xl font-black text-neutral-950 uppercase tracking-tight">Get in Touch</h1>
          <p class="text-sm text-neutral-600">Questions about an order, a product, or anything else — we're here to help.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <a href="https://wa.me/923434465290" target="_blank" class="bg-white rounded-2xl border border-neutral-200 p-5 text-center space-y-2 shadow-sm hover:shadow-md transition">
            <div class="text-3xl">💬</div>
            <h3 class="font-extrabold text-sm text-neutral-900">WhatsApp</h3>
            <p class="text-xs text-neutral-500">0343 4465290</p>
          </a>
          <a href="mailto:zyvron.official@gmail.com" class="bg-white rounded-2xl border border-neutral-200 p-5 text-center space-y-2 shadow-sm hover:shadow-md transition">
            <div class="text-3xl">✉️</div>
            <h3 class="font-extrabold text-sm text-neutral-900">Email</h3>
            <p class="text-xs text-neutral-500">zyvron.official@gmail.com</p>
          </a>
          <div class="bg-white rounded-2xl border border-neutral-200 p-5 text-center space-y-2 shadow-sm">
            <div class="text-3xl">⏱️</div>
            <h3 class="font-extrabold text-sm text-neutral-900">Support Hours</h3>
            <p class="text-xs text-neutral-500">9:00 AM – 11:00 PM, Daily</p>
          </div>
        </div>

        <div class="max-w-xl mx-auto bg-white rounded-3xl border border-neutral-200 shadow-sm p-6 sm:p-8 space-y-4">
          <h2 class="text-lg font-black text-neutral-950 uppercase tracking-tight">Send Us a Message</h2>
          <form id="contact-form" class="space-y-3">
            <div class="grid sm:grid-cols-2 gap-3">
              <input required id="contact-name" type="text" placeholder="Full Name" class="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-500" />
              <input required id="contact-phone" type="tel" placeholder="Phone Number" class="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-500" />
            </div>
            <input id="contact-subject" type="text" placeholder="Subject" class="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-500" />
            <textarea required id="contact-message" rows="4" placeholder="Your Message" class="w-full px-4 py-3 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"></textarea>
            <button type="submit" class="w-full bg-red-600 hover:bg-red-700 text-white font-black text-xs sm:text-sm py-4 rounded-xl shadow-md transition active:scale-95">
              Send via WhatsApp →
            </button>
          </form>
        </div>

      </section>
    `;
  }

  // Shared chrome for the three legal pages (Privacy/Terms/Refund): the
  // same eyebrow/title/updated-date header, the same cross-page pill nav so
  // a visitor reading one can jump straight to another, and the same
  // card-per-section body shell — only the heading, subtitle, and section
  // content differ per page.
  renderLegalPageShell(activeKey, eyebrow, title, subtitle, sectionsHtml) {
    const pages = [
      { key: 'privacy', label: 'Privacy Policy' },
      { key: 'terms', label: 'Terms of Service' },
      { key: 'refund', label: 'Refund Policy' },
      { key: 'faq', label: 'FAQ' },
      { key: 'shipping', label: 'Shipping & Delivery' },
      { key: 'warranty', label: 'Warranty & Support' },
      { key: 'blog', label: 'Tech Tips Blog' }
    ];
    return `
      <section class="py-8 sm:py-12 space-y-8 max-w-3xl mx-auto">

        <div class="text-center space-y-3">
          <span class="text-xs font-black text-red-600 uppercase tracking-widest">${eyebrow}</span>
          <h1 class="text-3xl sm:text-4xl font-black text-neutral-950 uppercase tracking-tight">${title}</h1>
          <p class="text-sm text-neutral-600 leading-relaxed">${subtitle}</p>
          <p class="text-[11px] text-neutral-400 font-semibold uppercase tracking-wider">Last updated: September 2026</p>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-2">
          ${pages.map(p => `
            <button onclick="store.setCurrentView('${p.key}')" class="px-4 py-2 rounded-full text-xs font-bold transition ${activeKey === p.key ? 'bg-neutral-950 text-white' : 'bg-white border border-neutral-200 text-neutral-600 hover:border-neutral-400'}">
              ${p.label}
            </button>
          `).join('')}
        </div>

        <div class="space-y-4">
          ${sectionsHtml}
        </div>

        <div class="bg-neutral-50 border border-neutral-200 rounded-2xl p-5 text-center space-y-2">
          <p class="text-xs text-neutral-500">Still have a question? We're here to help.</p>
          <a href="https://wa.me/923434465290" target="_blank" class="inline-block bg-red-600 hover:bg-red-700 text-white font-black text-xs px-5 py-2.5 rounded-xl transition">
            Message Us on WhatsApp
          </a>
        </div>

      </section>
    `;
  }

  renderLegalSection(title, bodyHtml) {
    return `
      <div class="bg-white rounded-2xl border border-neutral-200 p-5 sm:p-6 space-y-2.5 shadow-sm">
        <h2 class="text-sm sm:text-base font-black text-neutral-950 uppercase tracking-tight">${title}</h2>
        <div class="text-xs sm:text-sm text-neutral-600 leading-relaxed space-y-2">${bodyHtml}</div>
      </div>
    `;
  }

  renderMyAccountPage() {
    const user = store.customerUser;
    const identity = user ? (user.email || user.phone || 'Signed in') : 'My Account';

    if (!user) {
      return `
        <section class="py-8 sm:py-12">
          <div class="mx-auto max-w-xl rounded-[28px] border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
            <div class="mb-6 flex items-start justify-between gap-3">
              <div>
                <p class="text-xs font-black uppercase tracking-[0.25em] text-red-600">Account</p>
                <h1 class="mt-2 text-3xl font-black text-neutral-900">My Account</h1>
              </div>
              <button
                type="button"
                onclick="app.closeMyAccountPage()"
                class="zv-close-x"
                aria-label="Close and go back"
                title="Close and go back"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M7 7L17 17M17 7L7 17" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>
              </button>
            </div>

            <div class="space-y-4">
              <div>
                <label class="mb-1 block text-[11px] font-black uppercase tracking-[0.2em] text-neutral-600">Email address</label>
                <input id="page-auth-email" type="email" placeholder="you@example.com" class="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3.5 py-3 text-sm text-neutral-900 outline-none transition focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-500/10" />
              </div>
              <div>
                <label class="mb-1 block text-[11px] font-black uppercase tracking-[0.2em] text-neutral-600">Password</label>
                <input id="page-auth-password" type="password" placeholder="At least 6 characters" class="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3.5 py-3 text-sm text-neutral-900 outline-none transition focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-500/10" />
              </div>
              <button type="button" onclick="store.openMyAccount()" class="w-full rounded-xl bg-red-600 px-4 py-3 text-xs font-black uppercase tracking-[0.15em] text-white transition hover:bg-red-700">Continue with Email</button>
              <p class="text-center text-[11px] text-neutral-500">Need an account? Sign in from the main auth form to continue.</p>
            </div>
          </div>
        </section>
      `;
    }

    const myOrders = store.myAccountOrders || [];
    const ordersLoading = store.myAccountOrdersLoading;
    const ordersFromAccount = store.myAccountOrdersSource === 'account';

    return `
      <section class="py-8 sm:py-12">
        <div class="mx-auto max-w-xl rounded-[28px] border border-neutral-200 bg-white p-5 shadow-sm sm:p-7">
          <div class="mb-5 flex items-start justify-between gap-3">
            <h1 class="text-3xl font-black text-neutral-900">My Account</h1>
            <button
              type="button"
              onclick="app.closeMyAccountPage()"
              class="zv-close-x"
              aria-label="Close and go back"
              title="Close and go back"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M7 7L17 17M17 7L7 17" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>
            </button>
          </div>

          <div class="mb-6 flex items-center gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-3.5">
            <div class="flex h-11 w-11 items-center justify-center rounded-full bg-black text-sm font-black text-white">
              ${escapeHtml(identity.charAt(0).toUpperCase())}
            </div>
            <div class="min-w-0">
              <p class="truncate text-sm font-extrabold text-neutral-900">${escapeHtml(identity)}</p>
              <p class="text-[10px] uppercase tracking-[0.2em] text-neutral-500">Signed in</p>
            </div>
          </div>

          <div class="mb-4">
            <p class="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">${ordersFromAccount ? 'Your orders' : 'Recent orders on this device'}</p>
            ${ordersLoading ? `
              <div class="rounded-2xl border border-neutral-200 bg-neutral-50 py-6 text-center text-xs font-semibold text-neutral-400">Loading your orders…</div>
            ` : myOrders.length ? `
              <div class="space-y-2">
                ${myOrders.map(o => `
                  <button type="button" class="flex w-full items-center justify-between rounded-xl border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-left transition hover:border-red-300 hover:bg-red-50" onclick="app.trackOrderFromAccount('${escapeHtml(o.orderNumber)}', '${escapeHtml(o.order?.customer?.phone || '')}')">
                    <span class="font-mono text-xs font-bold text-neutral-800">${escapeHtml(o.orderNumber)}</span>
                    <span class="text-[10px] text-neutral-500">${escapeHtml(o.date || '')}</span>
                  </button>
                `).join('')}
              </div>
            ` : `
              <p class="rounded-2xl border border-neutral-200 bg-neutral-50 px-3.5 py-3 text-xs text-neutral-500">No orders placed ${ordersFromAccount ? 'with this account' : 'from this device'} yet.</p>
            `}
          </div>

          <button id="btn-account-logout" type="button" class="w-full rounded-xl border border-neutral-300 px-4 py-3 text-xs font-black uppercase tracking-[0.15em] text-neutral-700 transition hover:border-red-600 hover:text-red-700">Sign Out</button>
        </div>
      </section>
    `;
  }

  renderPrivacyPage() {
    const s = this.renderLegalSection.bind(this);
    const sections = [
      s('1. Introduction', `
        <p>Zyvron Tech Accessories ("Zyvron", "we", "us") respects your privacy. This policy explains what information we collect when you use this website, why we collect it, and how we protect it.</p>
      `),
      s('2. Information We Collect', `
        <ul class="list-disc pl-5 space-y-1">
          <li><strong>Order details</strong> — name, phone number, delivery address, and city, provided when you place a Cash on Delivery order.</li>
          <li><strong>Account details</strong> — email address or phone number, if you create an account to sign in and track orders.</li>
          <li><strong>Browsing data</strong> — pages viewed, products clicked, and general usage patterns, collected automatically via Firebase Analytics.</li>
          <li><strong>Cart and wishlist</strong> — stored locally in your browser so your cart is remembered between visits; this data is not shared with anyone.</li>
        </ul>
      `),
      s('3. How We Use Your Information', `
        <ul class="list-disc pl-5 space-y-1">
          <li>To process, deliver, and track your Cash on Delivery orders.</li>
          <li>To contact you about an order via WhatsApp, SMS, or phone call if needed.</li>
          <li>To improve the website, catalog, and shopping experience.</li>
          <li>To send flash-sale or discount alerts, only to customers who opt in via the newsletter/WhatsApp signup.</li>
        </ul>
      `),
      s('4. Data Storage & Security', `
        <p>Order, account, and product data is stored using Google Firebase (Firestore and Firebase Authentication), which applies industry-standard security and access controls. Access to customer order data is restricted to verified store administrators only.</p>
      `),
      s('5. Third-Party Services', `
        <p>We use Google Firebase for authentication, data storage, and analytics, and Cloudinary for hosting product images. These providers only receive the minimum data required to perform their function and do not have permission to use it for their own purposes.</p>
      `),
      s('6. Your Rights', `
        <p>You can request a copy of the personal information we hold about you, ask us to correct it, or ask us to delete your account and associated data, by messaging us on WhatsApp or emailing zyvron.official@gmail.com. We'll respond within a reasonable time.</p>
      `),
      s('7. Children\'s Privacy', `
        <p>This website is intended for use by adults placing their own orders. We do not knowingly collect personal information from children without a parent or guardian's involvement.</p>
      `),
      s('8. Changes to This Policy', `
        <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date.</p>
      `)
    ].join('');
    return this.renderLegalPageShell(
      'privacy',
      'Legal',
      'Privacy Policy',
      'How Zyvron collects, uses, and protects your information.',
      sections
    );
  }

  renderTermsPage() {
    const s = this.renderLegalSection.bind(this);
    const sections = [
      s('1. Acceptance of Terms', `
        <p>By browsing or placing an order on this website, you agree to these Terms of Service. If you do not agree, please do not use this website.</p>
      `),
      s('2. Products & Pricing', `
        <p>We make every effort to display accurate product information, images, and prices. Product images are for illustration and may vary slightly from the item received. Prices, offers, and stock availability may change at any time without prior notice.</p>
      `),
      s('3. Orders & Cash on Delivery', `
        <p>All orders are placed on a Cash on Delivery (COD) basis — you pay only when the order is delivered to your doorstep. We reserve the right to cancel or refuse any order we reasonably suspect to be fraudulent, a prank, or unable to be delivered.</p>
      `),
      s('4. Shipping & Delivery', `
        <p>Orders are typically delivered within 2 to 4 working days across Pakistan through our courier partners. Delivery times may vary slightly due to weather, courier delays, or remote locations.</p>
      `),
      s('5. Accounts', `
        <p>Creating an account is optional and lets you track your order history. You're responsible for keeping your sign-in details secure and for any activity under your account.</p>
      `),
      s('6. Intellectual Property', `
        <p>All content on this website — including the Zyvron name, logo, product descriptions, and design — belongs to Zyvron Tech Accessories and may not be copied or reused without permission.</p>
      `),
      s('7. Prohibited Conduct', `
        <p>You agree not to misuse this website — including placing fake orders, attempting to disrupt the site, or submitting false information at checkout.</p>
      `),
      s('8. Limitation of Liability', `
        <p>Zyvron is not liable for delays or issues caused by courier partners, incorrect delivery details provided by the customer, or events outside our reasonable control.</p>
      `),
      s('9. Governing Law', `
        <p>These Terms are governed by the laws of Pakistan.</p>
      `),
      s('10. Changes to These Terms', `
        <p>We may update these Terms from time to time. Continued use of the website after an update means you accept the revised Terms.</p>
      `)
    ].join('');
    return this.renderLegalPageShell(
      'terms',
      'Legal',
      'Terms of Service',
      'The terms that apply when you shop with Zyvron Tech Accessories.',
      sections
    );
  }

  renderRefundPage() {
    const s = this.renderLegalSection.bind(this);
    const sections = [
      s('1. 14-Day Replacement Guarantee', `
        <p>Every order is covered by our 14-day replacement guarantee, starting from the delivery date. If your product arrives with a manufacturing defect or does not power on / function as described, we'll arrange a replacement.</p>
      `),
      s('2. What\'s Covered', `
        <ul class="list-disc pl-5 space-y-1">
          <li>Manufacturing defects present at delivery.</li>
          <li>An item that doesn't match the product ordered.</li>
          <li>Dead-on-arrival electronics (does not power on/connect).</li>
        </ul>
      `),
      s('3. What\'s Not Covered', `
        <ul class="list-disc pl-5 space-y-1">
          <li>Physical or liquid damage caused after delivery.</li>
          <li>Normal wear and tear.</li>
          <li>Change of mind after the item has been inspected and accepted at your doorstep.</li>
        </ul>
      `),
      s('4. Inspect at Your Doorstep', `
        <p>Because orders are Cash on Delivery, you're welcome to check the package before paying the rider. If the item is visibly damaged or incorrect, you may refuse it on the spot at no cost to you.</p>
      `),
      s('5. How to Request a Replacement', `
        <p>Message us on WhatsApp at 0343 4465290 with your tracking number and a photo or short video of the issue within 14 days of delivery. Our team will confirm the next steps.</p>
      `),
      s('6. Refunds', `
        <p>Since orders are paid on delivery, there's no advance payment to refund in most cases. Where a refund is due (for example, an overpayment), it will be processed via the original payment/delivery method or store credit, as agreed with our team.</p>
      `),
      s('7. Processing Time', `
        <p>Approved replacements are typically dispatched within 2–4 working days of confirmation, following the same delivery timelines as a new order.</p>
      `)
    ].join('');
    return this.renderLegalPageShell(
      'refund',
      'Legal',
      'Refund Policy',
      'Our replacement & refund process, and how to request one. For general warranty coverage and support, see Warranty & Support.',
      sections
    );
  }

  renderFAQPage() {
    const s = this.renderLegalSection.bind(this);
    const sections = [
      s('Do you accept online payment, or only Cash on Delivery?', `
        <p>Every order is Cash on Delivery (COD) only — you pay the rider in cash when your package arrives. There's nothing to pay online and no advance payment required.</p>
      `),
      s('How long does delivery take?', `
        <p>Most orders arrive within 2–4 working days, nationwide across Pakistan. You'll get a tracking code right after checkout so you can follow your order's status any time.</p>
      `),
      s('Is shipping really free?', `
        <p>Yes — orders over Rs. 3,000 ship free. Orders under Rs. 3,000 have a flat delivery fee of Rs. 199, shown clearly at checkout before you confirm.</p>
      `),
      s('Can I open and check my order before paying?', `
        <p>Yes. Since it's Cash on Delivery, you're welcome to inspect the package at your doorstep before paying the rider. If something's wrong, damaged, or not what you ordered, you can refuse it on the spot at no cost.</p>
      `),
      s('What if my product arrives faulty or the wrong item?', `
        <p>You're covered by our 14-day replacement guarantee. Message us on WhatsApp with your tracking code and a photo or short video of the issue — see our <button type="button" onclick="store.setCurrentView('warranty')" class="underline font-bold text-red-600">Warranty &amp; Support</button> page for the full process.</p>
      `),
      s('How do I track my order?', `
        <p>Use "Track My Order" from the menu or footer and enter your tracking code plus the phone number used at checkout.</p>
      `),
      s('Can I cancel or change my order after placing it?', `
        <p>Message us on WhatsApp or email as soon as possible with your tracking code. If it hasn't been dispatched yet, we can usually cancel or adjust it for you.</p>
      `),
      s('Do you deliver outside Pakistan?', `
        <p>We currently deliver nationwide within Pakistan only.</p>
      `),
      s('Do you offer discount codes or coupons?', `
        <p>Yes — when we run a promotion, you'll receive a coupon code to apply in your cart at checkout for an instant discount.</p>
      `),
      s('How can I contact support?', `
        <p>WhatsApp us at 0343 4465290 or email zyvron.official@gmail.com, daily from 9:00 AM to 11:00 PM.</p>
      `)
    ].join('');
    return this.renderLegalPageShell(
      'faq',
      'Support',
      'Frequently Asked Questions',
      'Quick answers about orders, Cash on Delivery, shipping, and replacements.',
      sections
    );
  }

  renderShippingPage() {
    const s = this.renderLegalSection.bind(this);
    const sections = [
      s('1. Delivery Coverage', `
        <p>We deliver nationwide across Pakistan on a Cash on Delivery (COD) basis — no advance payment, no online checkout required.</p>
      `),
      s('2. Delivery Time', `
        <p>Most orders are delivered within 2–4 working days of confirmation. Remote or less-serviced areas may occasionally take a little longer; we'll let you know if that's expected for your address.</p>
      `),
      s('3. Shipping Charges', `
        <ul class="list-disc pl-5 space-y-1">
          <li>Orders over Rs. 3,000: <strong>FREE</strong> delivery.</li>
          <li>Orders under Rs. 3,000: a flat delivery fee of Rs. 199, shown at checkout before you confirm.</li>
        </ul>
      `),
      s('4. Order Processing', `
        <p>Every order starts as <strong>Pending</strong> while our team verifies it, then moves to <strong>Approved</strong>, <strong>Dispatched</strong>, and finally <strong>Delivered</strong>. You can check your order's current status any time from Track My Order.</p>
      `),
      s('5. Tracking Your Order', `
        <p>Use the tracking code shown after checkout together with the phone number used on the order to follow its status from "Track My Order" in the menu or footer.</p>
      `),
      s('6. When the Rider Arrives', `
        <p>Please keep your phone reachable around the expected delivery window — the rider may call to confirm your address. You're welcome to inspect the package before paying.</p>
      `),
      s('7. Wrong or Incomplete Address', `
        <p>If you need to correct your delivery address after placing an order, message us on WhatsApp with your tracking code as soon as possible, ideally before the order is dispatched.</p>
      `)
    ].join('');
    return this.renderLegalPageShell(
      'shipping',
      'Delivery',
      'Shipping & Delivery Info',
      'Coverage, timelines, and charges for every Zyvron order.',
      sections
    );
  }

  renderWarrantyPage() {
    const s = this.renderLegalSection.bind(this);
    const sections = [
      s('1. Our 14-Day Guarantee', `
        <p>Every product sold by Zyvron is backed by our 14-day replacement guarantee from the date of delivery, covering manufacturing defects, dead-on-arrival items, and orders that don't match what you ordered. See our <button type="button" onclick="store.setCurrentView('refund')" class="underline font-bold text-red-600">Refund Policy</button> for full coverage details and how replacements are processed.</p>
      `),
      s('2. Manufacturer Warranty', `
        <p>Some products may also carry additional coverage from their original manufacturer beyond our own guarantee. Where that applies, keep your order confirmation as proof of purchase — our support team can point you to the right next step.</p>
      `),
      s('3. Quick Troubleshooting', `
        <ul class="list-disc pl-5 space-y-1">
          <li><strong>Bluetooth won't pair:</strong> turn the device off and on, forget it in your phone's Bluetooth settings, then pair again from fresh.</li>
          <li><strong>Won't charge:</strong> try a different cable or adapter first — many "dead" units are actually a faulty cable.</li>
          <li><strong>Sound cutting out:</strong> keep your phone within a few meters with no walls in between, and check for a pending firmware update in the device's companion app, if it has one.</li>
        </ul>
      `),
      s('4. Report a Problem', `
        <p>If a quick fix doesn't help, tell us what's wrong and we'll take it from there.</p>
        <button type="button" onclick="store.openModal('complaint')" class="inline-block bg-neutral-950 hover:bg-black text-white font-black text-xs px-5 py-2.5 rounded-xl transition mt-1">
          File a Complaint
        </button>
      `),
      s('5. Get Support', `
        <p>WhatsApp: <a href="https://wa.me/923434465290" target="_blank" class="underline font-bold">0343 4465290</a> · Email: <a href="mailto:zyvron.official@gmail.com" class="underline font-bold">zyvron.official@gmail.com</a> · Daily, 9:00 AM – 11:00 PM.</p>
      `)
    ].join('');
    return this.renderLegalPageShell(
      'warranty',
      'Support',
      'Warranty & Support',
      'What’s covered, how to get help, and how to report a problem.',
      sections
    );
  }

  renderBlogPage() {
    const s = this.renderLegalSection.bind(this);
    const sections = [
      s('Getting the Most Battery Life From Your Wireless Earbuds', `
        <p>Lower your volume a few notches below max, turn off Active Noise Cancellation when you don't need it, and store earbuds in their case when not in use — the case keeps topping up the battery instead of letting it drain. Full discharges every so often help the battery gauge stay accurate.</p>
      `),
      s('Understanding IPX Water-Resistance Ratings', `
        <p>The number after "IPX" tells you what a device can handle: IPX4 survives light splashes and sweat, IPX5/6 handles heavier splashes and rain, and IPX7/8 can be briefly submerged. None of these mean "machine washable" — always check your specific product's rating on its listing before exposing it to water.</p>
      `),
      s('Smartwatch Care: Charging & Screen Care', `
        <p>Wipe the charging contacts and the back of your smartwatch occasionally so sweat and dust don't block a proper charge. Avoid letting the battery sit at 0% for long periods, and use a microfiber cloth rather than tissue or clothing to clean the display to avoid tiny scratches.</p>
      `),
      s('Bluetooth Pairing Issues? Try This First', `
        <p>Most pairing problems come down to a "stuck" old connection. Turn the device off and back on, remove it from your phone's Bluetooth list, then pair it again as if it were new. If it still won't connect, make sure it isn't already connected to another nearby phone or laptop.</p>
      `),
      s('Cash on Delivery in Pakistan: What to Expect', `
        <p>With COD, you don't pay anything until your order is physically in front of you. Keep your phone reachable around the expected delivery window, have the exact cash ready if possible, and feel free to check the item before paying the rider.</p>
      `),
      s('Choosing the Right Gaming Mouse DPI for You', `
        <p>Higher DPI isn't automatically better — it just means the cursor moves faster for the same hand movement. Competitive shooter players often prefer a lower, more controlled DPI, while creative work or large multi-monitor setups can benefit from a higher one. Most gaming mice let you switch between a few presets on the fly, so it's worth testing a couple before settling in.</p>
      `)
    ].join('');
    return this.renderLegalPageShell(
      'blog',
      'Zyvron Journal',
      'Tech Tips & Guides',
      'Short, practical tips to get more out of your tech accessories.',
      sections
    );
  }

  // Build a formatted WhatsApp message with full order details
  buildOrderWhatsAppMessage(order) {
    const lines = [
      `🛍️ *New Order — Zyvron Tech Accessories*`,
      `Tracking Code: *${order.orderNumber}*`,
      `Date: ${order.date}`,
      ``,
      `👤 *Customer Details*`,
      `Name: ${order.customer.name}`,
      `Phone: ${order.customer.phone}`,
      `City: ${order.customer.city}`,
      `Address: ${order.customer.address}`,
      ``,
      `🛒 *Order Items*`
    ];

    order.items.forEach(item => {
      lines.push(`• ${item.product.title} x${item.quantity} — ${formatPKR(item.product.price * item.quantity)}`);
    });

    lines.push(``);
    if (order.discount > 0) {
      lines.push(`Subtotal: ${formatPKR(order.subtotal)}`);
      lines.push(`Coupon (${order.coupon}): -${formatPKR(order.discount)}`);
    }
    lines.push(`💰 *Total Payable (COD): ${formatPKR(order.total)}*`);
    lines.push(``);
    lines.push(`Please confirm my order. Thank you!`);

    return lines.join('\n');
  }

  getOrderWhatsAppLink(order) {
    const message = this.buildOrderWhatsAppMessage(order);
    return `https://wa.me/923434465290?text=${encodeURIComponent(message)}`;
  }

  openCustomerStatusMessage(order, status, targetWindow = null) {
    const rawPhone = String(order.customer?.phone || '').replace(/[^\d+]/g, '');
    const phone = rawPhone.startsWith('+92')
      ? rawPhone.slice(1)
      : rawPhone.startsWith('92')
        ? rawPhone
        : rawPhone.startsWith('0')
          ? `92${rawPhone.slice(1)}`
          : rawPhone;
    if (!phone || phone.length < 10) {
      if (targetWindow) targetWindow.close();
      this.showToast('Customer phone number is invalid.', 'error');
      return;
    }

    const itemLines = (order.items || [])
      .map(item => `• ${item.product?.title || 'Product'} × ${item.quantity || 1}`)
      .join('\n');
    const orderInfo = `📦 *Order:* ${order.orderNumber || order.id}\n🛍️ *Items:*\n${itemLines || '• Your selected products'}\n\n💰 *Total Payable (COD):* ${formatPKR(order.total || 0)}\n📍 *Delivery Address:* ${order.customer?.address || '—'}, ${order.customer?.city || '—'}`;
    const customerName = order.customer?.name || 'there';
    const messageByStatus = {
      accepted: `*ZYVRON TECH ACCESSORIES*\n━━━━━━━━━━━━━━━━━━\n✅ *ORDER APPROVED*\n\nHi ${customerName},\n\nExcellent news! Your order has been approved and is now being prepared by our team.\n\n${orderInfo}\n\nWe will notify you again when your package is dispatched. Thank you for choosing *Zyvron Tech*!`,
      rejected: `*ZYVRON TECH ACCESSORIES*\n━━━━━━━━━━━━━━━━━━\n⚠️ *ORDER UPDATE*\n\nHi ${customerName},\n\nWe are sorry, but we could not approve your order at this time. Please reply to this message or contact our support team if you would like help placing it again.\n\n${orderInfo}\n\nWe apologize for the inconvenience and hope to serve you soon.`,
      dispatched: `*ZYVRON TECH ACCESSORIES*\n━━━━━━━━━━━━━━━━━━\n🚚 *ORDER DISPATCHED*\n\nHi ${customerName},\n\nGreat news! Your order has been dispatched and is now on the way to you.\n\n${orderInfo}\n\nPlease keep your phone available for the delivery call. You can track your order anytime using your tracking code.\n\nThank you for shopping with *Zyvron Tech*!`,
      delivered: `*ZYVRON TECH ACCESSORIES*\n━━━━━━━━━━━━━━━━━━\n🎉 *ORDER DELIVERED*\n\nHi ${customerName},\n\nYour order has been marked as delivered. We hope you enjoy your purchase!\n\n${orderInfo}\n\nThank you for shopping with *Zyvron Tech*. We would love to serve you again!`
    };
    const message = messageByStatus[status] || `Hi ${customerName}, your Zyvron Tech order ${order.orderNumber || ''} status is now ${status}.`;
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    const popup = targetWindow || window.open(whatsappUrl, '_blank');
    if (targetWindow) targetWindow.location.href = whatsappUrl;
    if (!popup) this.showToast('WhatsApp was blocked. Allow pop-ups to message the customer.', 'error');
  }

  // Order Success Screen
  renderOrderSuccessModal() {
    const isOpen = store.activeModal === 'order-success' && store.lastOrder;
    const order = store.lastOrder;
    if (!isOpen || !order) return '';

    return `
      <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
        <div class="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full text-center shadow-2xl relative">
          <button class="zv-close-x zv-close-x--corner" onclick="store.closeModal()" aria-label="Close" title="Close">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M7 7L17 17M17 7L7 17" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>
          </button>
          <div id="order-success-check" class="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 shadow-inner">
            ✓
          </div>
          <h3 class="text-xl font-black text-neutral-900">Order Placed — Approved</h3>
          <p class="text-xs text-neutral-500 mt-1">
            Thank you, <strong class="text-neutral-800">${order.customer.name}</strong>! Your order has been approved and is being prepared.
          </p>

          <div class="my-4 p-4 bg-neutral-50 rounded-2xl border border-neutral-200 text-xs text-left space-y-2">
            <div class="flex justify-between items-center">
              <span class="text-neutral-500">Status:</span>
              <span id="order-success-status-badge" class="text-[10px] font-black uppercase tracking-wide px-2.5 py-1 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200">⚡ Approved</span>
            </div>
            <div class="flex justify-between">
              <span class="text-neutral-500">Tracking Code:</span>
              <span class="flex items-center gap-2">
                <span class="font-mono font-black text-red-600">${order.orderNumber}</span>
                <button type="button" class="text-[9px] font-black uppercase text-cyan-700 hover:text-cyan-900 border border-cyan-200 rounded-md px-1.5 py-1" onclick="app.copyTrackingCode('${order.orderNumber}')">Copy</button>
              </span>
            </div>
            <div class="flex justify-between">
              <span class="text-neutral-500">Destination:</span>
              <span class="font-bold text-neutral-800">${order.customer.city}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-neutral-500">Total Payable on Delivery:</span>
              <span class="font-black text-neutral-950 text-sm">${formatPKR(order.total)}</span>
            </div>
          </div>

          <p class="text-[11px] text-neutral-400 -mt-2 mb-4">Your tracking code is saved automatically on this device. You can also copy it for reference.</p>

          <p class="text-xs text-neutral-500 mb-5">
            We will contact you via WhatsApp/SMS on <strong>${order.customer.phone}</strong> before dispatching your package.
          </p>

          <a href="${this.getOrderWhatsAppLink(order)}" target="_blank"
            class="w-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-extrabold py-3.5 rounded-xl shadow transition flex items-center justify-center gap-2 mb-2">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.777.82 2.791.82 3.181 0 5.768-2.587 5.768-5.766.001-3.187-2.575-5.806-5.768-5.806zm8.969 5.766c0 4.962-4.037 8.999-8.969 8.999-1.579 0-3.057-.412-4.341-1.129l-4.69 1.229 1.252-4.571c-.789-1.332-1.221-2.88-1.221-4.528 0-4.962 4.037-9 8.969-9 4.931 0 8.969 4.038 8.969 9z"/>
            </svg>
            <span>Send Order Details on WhatsApp</span>
          </a>

          <button onclick="app.trackThisOrder('${order.orderNumber}')" class="w-full bg-white border-2 border-neutral-900 hover:bg-neutral-900 hover:text-white text-neutral-900 text-xs font-extrabold py-3 rounded-xl shadow transition flex items-center justify-center gap-2 mb-2">
            📦 <span>Track This Order</span>
          </button>

          <button class="w-full bg-black hover:bg-neutral-800 text-white text-xs font-extrabold py-3.5 rounded-xl shadow transition" onclick="store.closeModal()">
            Continue Shopping
          </button>
        </div>
      </div>
    `;
  }

  // Customer order tracking modal — uses the existing Firestore orders collection.
  renderOrderTrackingModal() {
    const isPage = store.currentView === 'tracking';
    const isOpen = isPage || store.activeModal === 'order-tracking';
    if (!isOpen) return '';
    // Orders placed from this browser, remembered in localStorage (see
    // saveMyOrderCode / loadMyOrders) — so the field isn't empty and the
    // customer doesn't have to recall the code from memory.
    const myOrders = store.loadMyOrders();
    const defaultCode = store.prefillTrackingCode || (myOrders[0] ? myOrders[0].orderNumber : '');
    const defaultPhone = store.prefillTrackingPhone || store.lastOrder?.customer?.phone || myOrders[0]?.order?.customer?.phone || '';
    // Any remembered codes other than the one already sitting in the input,
    // offered as one-tap chips instead of retyping.
    const otherCodes = myOrders.filter(o => o.orderNumber !== defaultCode);
    return `
      <div class="${isPage ? 'w-full' : 'fixed inset-0 z-50 pointer-events-auto'}">
        ${isPage ? '' : '<div class="drawer-backdrop absolute inset-0 bg-black/70 backdrop-blur-sm opacity-100" onclick="store.closeModal()"></div>'}
        <div class="${isPage ? 'w-full flex justify-center py-4 sm:py-10' : 'fixed inset-x-0 bottom-0 sm:inset-0 sm:flex sm:items-center sm:justify-center p-0 sm:p-4 z-[160]'}">
          <div class="zv-tracking-panel bg-white rounded-3xl shadow-2xl w-full max-w-md ${isPage ? 'border border-neutral-200' : 'max-h-[88vh] overflow-y-auto'} animate-fade-in">
            <div class="p-5 border-b border-neutral-200 flex items-center justify-between">
              <div>
                <p class="text-[10px] font-black uppercase tracking-widest text-red-600">Live tracking</p>
                <h3 class="text-xl font-black text-neutral-950">Track Your Order</h3>
              </div>
              <button class="zv-close-x" onclick="${isPage ? 'app.closeTrackingPage()' : 'store.closeModal()'}" aria-label="Close" title="Close"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M7 7L17 17M17 7L7 17" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg></button>
            </div>

            <form id="order-tracking-form" class="p-5 space-y-4">
              <div>
                <label class="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1">Tracking Code</label>
                <input id="tracking-code-input" required autocomplete="off" value="${escapeHtml(defaultCode)}" placeholder="e.g. TP-123456" class="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-3.5 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-red-500" />
                <p class="text-[10px] text-neutral-500 mt-1.5">Use the Tracking Code shown after checkout.</p>
              </div>
              <div>
                <label class="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1">Phone Used for Order</label>
                <input id="tracking-phone-input" required type="tel" autocomplete="tel" value="${escapeHtml(defaultPhone)}" placeholder="e.g. 03001234567" class="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-3.5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500" />
                <p class="text-[10px] text-neutral-500 mt-1.5">For privacy, this must match the phone number on the order.</p>
              </div>
              ${otherCodes.length ? `
                <div>
                  <p class="text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-1.5">Other orders on this device</p>
                  <div class="flex flex-wrap gap-1.5">
                    ${otherCodes.map(o => `
                      <button type="button" class="tracking-code-chip text-[11px] font-mono font-bold bg-neutral-100 hover:bg-neutral-200 text-neutral-800 px-2.5 py-1.5 rounded-full transition" data-code="${escapeHtml(o.orderNumber)}">${escapeHtml(o.orderNumber)}</button>
                    `).join('')}
                  </div>
                </div>
              ` : ''}
              <button id="tracking-submit-btn" type="submit" class="premium-control w-full text-white font-black text-xs py-3.5 rounded-xl shadow transition">TRACK ORDER</button>
              <div id="tracking-output"></div>
            </form>
          </div>
        </div>
      </div>
    `;
  }

  // Customer complaint form — complaint documents are stored separately from orders.
  renderComplaintModal() {
    const isOpen = store.activeModal === 'complaint';
    if (!isOpen) return '';
    return `
      <div class="fixed inset-0 z-50 pointer-events-auto">
        <div class="drawer-backdrop absolute inset-0 bg-black/70 backdrop-blur-sm opacity-100" onclick="store.closeModal()"></div>
        <div class="fixed inset-x-0 bottom-0 sm:inset-0 sm:flex sm:items-center sm:justify-center p-0 sm:p-4 z-[160]">
          <div class="bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl w-full sm:max-w-md animate-fade-in">
            <div class="p-5 border-b border-neutral-200 flex items-center justify-between">
              <div>
                <p class="text-[10px] font-black uppercase tracking-widest text-red-600">Customer support</p>
                <h3 class="text-xl font-black text-neutral-950">Report an Order Issue</h3>
              </div>
              <button class="zv-close-x" onclick="store.closeModal()" aria-label="Close" title="Close"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M7 7L17 17M17 7L7 17" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg></button>
            </div>
            <form id="complaint-form" class="p-5 space-y-4">
              <div>
                <label class="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1">Tracking Code</label>
                <input id="complaint-order-code" required autocomplete="off" placeholder="e.g. TP-123456" class="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-3.5 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-red-500" />
              </div>
              <div>
                <label class="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1">Complaint Details</label>
                <textarea id="complaint-message" required rows="4" placeholder="Tell us what went wrong..." class="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-3.5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"></textarea>
              </div>
              <button id="complaint-submit-btn" type="submit" class="w-full bg-red-600 hover:bg-red-700 text-white font-black text-xs py-3.5 rounded-xl shadow transition">SUBMIT COMPLAINT</button>
              <div id="complaint-output" class="text-center"></div>
            </form>
          </div>
        </div>
      </div>
    `;
  }

  // Product Comparison Modal
  renderCompareModal() {
    const isOpen = store.activeModal === 'compare';
    if (!isOpen) return '';
    const products = store.getCompareProducts();

    return `
      <div class="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-3 sm:p-6 zv-compare-modal-wrap">
        <div class="absolute inset-0 bg-black/70 backdrop-blur-[2px]" onclick="store.closeModal()"></div>

        <div class="relative my-0 sm:my-1 w-full max-w-6xl max-h-[calc(100dvh-1.5rem)] sm:max-h-[calc(100dvh-3rem)] overflow-y-auto rounded-[28px] border border-white/10 bg-[#0b1020]/95 p-4 shadow-[0_30px_60px_rgba(0,0,0,0.45)] sm:p-6 zv-compare-modal-panel">
          <button
            type="button"
            class="zv-close-x zv-close-x--corner"
            aria-label="Close comparison"
            title="Close comparison"
            onclick="store.closeModal()">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M7 7L17 17M17 7L7 17" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>
          </button>

          <div class="sticky top-0 z-10 -mx-4 mb-6 bg-[#0b1020]/95 px-4 pb-3 pr-12 pt-1 backdrop-blur-md sm:-mx-6 sm:px-6 sm:pr-14">
            <p class="text-[11px] font-black uppercase tracking-[0.28em] text-cyan-400">Compare</p>
            <h1 class="mt-2 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">Compare Products</h1>
            <p class="mt-2 text-[11px] text-neutral-400">${products.length}/4 products selected</p>
          </div>

          ${products.length === 0 ? `
            <div class="rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-14 text-center text-sm text-neutral-400">
              <div class="mb-3 text-3xl">⚖️</div>
              No products selected yet. Tap "Compare" on any product to add it here (up to 4).
            </div>
          ` : `
            <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              ${products.map(p => `
                <article class="rounded-2xl border border-white/10 bg-[#121b2d]/85 p-3 text-left shadow-lg shadow-black/10">
                  <div class="mb-3 flex justify-center rounded-xl border border-white/10 bg-white/5 p-2">
                    <img src="${p.image}" class="h-20 w-20 object-contain" alt="${p.title}" />
                  </div>

                  <div class="mb-2">
                    <p class="text-[10px] font-black uppercase tracking-[0.18em] text-neutral-500">Product</p>
                    <h3 class="mt-1 text-base font-black leading-snug text-white">${p.title}</h3>
                  </div>

                  <div class="mb-3 flex items-baseline gap-2">
                    <span class="text-lg font-black text-cyan-400">${formatPKR(p.price)}</span>
                    <span class="text-[10px] text-neutral-500 line-through">${formatPKR(p.compareAtPrice)}</span>
                  </div>

                  <div class="space-y-2 text-[11px] text-neutral-300">
                    <div class="flex justify-between gap-3 border-b border-white/10 pb-2">
                      <span class="text-neutral-500">Category</span>
                      <span class="text-right font-semibold text-white">${p.category}</span>
                    </div>
                    <div class="flex justify-between gap-3 border-b border-white/10 pb-2">
                      <span class="text-neutral-500">Rating</span>
                      <span class="font-semibold text-white">★ ${p.rating} (${p.reviews})</span>
                    </div>
                    <div class="border-b border-white/10 pb-2">
                      <p class="mb-1 text-neutral-500">Features</p>
                      <ul class="space-y-1 text-left">
                        ${(p.features || []).slice(0, 4).map(f => `<li class="flex gap-2"><span class="text-emerald-400">✓</span><span>${f}</span></li>`).join('')}
                      </ul>
                    </div>
                    <div class="flex justify-between gap-3">
                      <span class="text-neutral-500">Availability</span>
                      <span class="font-bold ${p.inStock ? 'text-emerald-400' : 'text-red-400'}">${p.inStock ? 'In Stock' : 'Out of Stock'}</span>
                    </div>
                  </div>

                  <div class="mt-4 space-y-2">
                    <button class="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 px-3 py-2.5 text-[11px] font-black uppercase tracking-[0.12em] text-white shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:shadow-cyan-500/30 active:scale-95" onclick="app.addToCart('${p.id}'); store.closeModal();">Add to Cart</button>
                    <button class="w-full rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-[11px] font-black uppercase tracking-[0.12em] text-neutral-200 transition hover:border-red-400 hover:text-red-300" onclick="app.removeFromCompare('${p.id}')">Remove</button>
                  </div>
                </article>
              `).join('')}
            </div>
          `}

          ${products.length > 0 ? `
            <div class="mt-6 flex flex-wrap items-center justify-end gap-3">
              <button class="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-[11px] font-black uppercase tracking-[0.12em] text-neutral-200 transition hover:border-red-400 hover:text-red-300" type="button" onclick="app.clearCompare()">Clear All</button>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  // AI Product Assistant Modal
  renderAssistantModal() {
    const isOpen = store.activeModal === 'assistant';
    if (!isOpen) return '';

    return `
      <div class="fixed inset-0 z-50 pointer-events-none ${isOpen ? 'pointer-events-auto' : ''}">
        <div class="drawer-backdrop absolute inset-0 bg-black/75 backdrop-blur-sm ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}" onclick="store.closeModal()"></div>

        <div class="modal-popup fixed top-1/2 left-1/2 w-[92%] max-w-md bg-white rounded-3xl shadow-2xl z-10 h-[85vh] sm:h-[640px] max-h-[90vh] overflow-hidden flex flex-col ${isOpen ? 'open' : ''}">

          <!-- Header -->
          <div class="bg-gradient-to-r from-red-600 to-rose-600 text-white p-4 flex items-center justify-between flex-shrink-0">
            <div class="flex items-center gap-2.5">
              <div class="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-lg flex-shrink-0">🤖</div>
              <div>
                <h4 class="text-sm font-black leading-tight">Zyvron Tech Accessories Assistant</h4>
                <p class="text-[10px] text-white/80 font-semibold flex items-center gap-1">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-300"></span> Online — product questions only
                </p>
              </div>
            </div>
            <div class="flex items-center gap-1.5 flex-shrink-0">
              <button class="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-xs" onclick="app.clearAssistantChat()" title="Clear Chat" aria-label="Clear Chat">🗑️</button>
              <button class="zv-close-x" onclick="store.closeModal()" aria-label="Close" title="Close"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M7 7L17 17M17 7L7 17" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg></button>
            </div>
          </div>

          <!-- Messages Feed -->
          <div id="assistant-feed" class="flex-grow overflow-y-auto p-4 space-y-3 bg-neutral-50">
            ${store.chatMessages.map(msg => msg.role === 'user' ? `
              <div class="flex justify-end">
                <div class="max-w-[80%] bg-neutral-900 text-white text-xs font-medium px-3.5 py-2.5 rounded-2xl rounded-br-sm">${escapeHtml(msg.text)}</div>
              </div>
            ` : `
              <div class="flex items-end gap-2">
                <div class="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-[11px] flex-shrink-0">🤖</div>
                <div class="max-w-[80%] bg-white border border-neutral-200 text-neutral-800 text-xs font-medium px-3.5 py-2.5 rounded-2xl rounded-bl-sm shadow-sm">${msg.text}</div>
              </div>
            `).join('')}

            ${store.isAssistantTyping ? `
              <div class="flex items-end gap-2">
                <div class="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-[11px] flex-shrink-0">🤖</div>
                <div class="bg-white border border-neutral-200 px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm flex items-center gap-1">
                  <span class="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce" style="animation-delay:0ms"></span>
                  <span class="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce" style="animation-delay:150ms"></span>
                  <span class="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-bounce" style="animation-delay:300ms"></span>
                </div>
              </div>
            ` : ''}
          </div>

          <!-- Suggestion Chips -->
          <div class="px-4 pt-2 flex-shrink-0">
            <div class="flex gap-1.5 overflow-x-auto no-scrollbar pb-1">
              ${['Best earbuds?', 'Cheapest power bank', 'Compare chargers', 'Recommend a gift'].map(chip => `
                <button class="assistant-chip text-[10px] font-semibold bg-red-50 hover:bg-red-100 text-red-700 px-3 py-1.5 rounded-full whitespace-nowrap transition" data-chip="${chip}">${chip}</button>
              `).join('')}
            </div>
          </div>

          <!-- Input Row -->
          <form id="assistant-form" class="p-3 border-t border-neutral-200 flex items-center gap-2 flex-shrink-0 bg-white">
            <input
              id="assistant-input"
              type="text"
              autocomplete="off"
              placeholder="Ask about earbuds, chargers, prices..."
              class="flex-grow bg-neutral-100 border border-neutral-200 rounded-full px-4 py-2.5 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button type="submit" class="w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center flex-shrink-0 transition active:scale-90" aria-label="Send">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.77 59.77 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    `;
  }

  // =========================================================
  // Admin Console (separate shell — does not touch the storefront render)
  // =========================================================
  renderAdminShell(viewJustChanged) {
    const products = store.products;
    const totals = {
      total: products.length,
      inStock: products.filter(p => p.inStock).length,
      outOfStock: products.filter(p => !p.inStock).length,
      flash: products.filter(p => p.isFlashSale).length
    };
    const tab = store.currentAdminTab === 'orders' ? 'orders' : 'products';
    const orderStats = store.getOrderStats();

    const tabBtn = (id, label, badge) => `
      <button class="px-4 py-2.5 rounded-xl text-xs font-extrabold transition flex items-center gap-1.5 ${tab === id ? 'bg-black text-white shadow' : 'bg-white text-neutral-500 border border-neutral-200 hover:text-neutral-900'}" onclick="store.setAdminTab('${id}')">
        ${label}
        ${badge ? `<span class="text-[10px] font-black rounded-full px-1.5 py-0.5 ${tab === id ? 'bg-white/20 text-white' : 'bg-neutral-100 text-neutral-600'}">${badge}</span>` : ''}
      </button>
    `;

    this.appContainer.innerHTML = `
      <div class="zv-admin-shell min-h-screen flex flex-col bg-neutral-100 text-neutral-900 antialiased ${viewJustChanged ? 'zv-view-enter' : ''}">
        <nav class="bg-neutral-950 text-white sticky top-0 z-30 border-b border-red-900/40 shadow-lg">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16 gap-4">
              <div class="flex items-center gap-3">
                <button class="flex items-center gap-2" onclick="store.setCurrentView('store')">
                  <div class="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-1">
                    <img src="assets/zyvron-icon.png" alt="Zyvron" class="w-full h-full object-contain" />
                  </div>
                  <div class="text-left flex flex-col -space-y-1"><span class="font-extrabold text-lg text-white">Zyvron</span><span class="font-black text-[10px] text-red-400 uppercase tracking-widest leading-none">Console</span></div>
                </button>
                ${store.getFirebaseDb()
                  ? `<div class="hidden sm:block text-[10px] text-emerald-100 font-bold px-2 py-0.5 rounded-full border border-emerald-800 bg-emerald-950/70">☁ Cloud Sync Active — shared across devices</div>`
                  : `<div class="hidden sm:block text-[10px] text-red-100 font-medium px-2 py-0.5 rounded-full border border-red-800 bg-red-950/70">⚠️ Local Persistence Mode — Firestore not connected</div>`}
              </div>
              <div class="flex items-center gap-3">
                <button class="text-white/70 hover:text-white text-xs font-bold" onclick="store.setCurrentView('store')">← Back to Store</button>
                <button id="btn-admin-logout" class="bg-red-600 hover:bg-red-700 text-white text-xs font-extrabold px-4 py-2.5 rounded-xl transition active:scale-95 shadow">Log Out</button>
              </div>
            </div>
          </div>
        </nav>

        <main class="flex-grow max-w-7xl mx-auto w-full px-3 sm:px-6 lg:px-8 py-6 space-y-6">
          <div class="flex flex-wrap gap-2">
            ${tabBtn('products', 'Products')}
            ${tabBtn('orders', 'Orders', orderStats.pending > 0 ? orderStats.pending : null)}
          </div>

          ${tab === 'orders' ? this.renderAdminOrdersTab(orderStats) : `
          <div class="bg-white p-4 rounded-[22px] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm border border-neutral-200">
            <div>
              <span class="text-xs font-black text-red-600 uppercase tracking-widest leading-none">Management Console</span>
              <h2 class="text-xl sm:text-2xl font-black text-neutral-950 uppercase tracking-tight">Product Database</h2>
              <p class="text-xs text-neutral-500 font-medium mt-0.5">Add, edit, or remove products — changes sync across devices.</p>
            </div>
            <button class="premium-control text-white font-extrabold text-xs px-6 py-3.5 rounded-xl transition shadow-md flex items-center gap-1.5" onclick="app.openAdminModal('add')">
              <span class="text-lg leading-none">+</span> Add New Product
            </button>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div class="p-4 rounded-2xl bg-white border border-neutral-200"><div class="text-2xl font-black">${totals.total}</div><p class="text-[11px] text-neutral-500 pt-1 border-t border-neutral-100 mt-1">Total Products</p></div>
            <div class="p-4 rounded-2xl bg-emerald-50 border border-emerald-200"><div class="text-2xl font-black text-emerald-800">${totals.inStock}</div><p class="text-[11px] text-emerald-700 pt-1 border-t border-emerald-100 mt-1">In Stock</p></div>
            <div class="p-4 rounded-2xl bg-white border border-neutral-200"><div class="text-2xl font-black text-red-600">${totals.outOfStock}</div><p class="text-[11px] text-neutral-500 pt-1 border-t border-neutral-100 mt-1">Out of Stock</p></div>
            <div class="p-4 rounded-2xl bg-red-950 text-white"><div class="text-2xl font-black">${totals.flash}</div><p class="text-[11px] text-red-200 pt-1 border-t border-white/10 mt-1">Flash Sale (⚡)</p></div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            ${products.map(p => this.renderAdminControlCard(p)).join('')}
          </div>
          `}
        </main>

        ${this.renderProductFormModal()}
      </div>
    `;

    // The admin shell replaces the storefront DOM. Reset the window AFTER
    // that replacement so the admin console always opens at the top instead
    // of inheriting the homepage's previous scroll position.
    if (viewJustChanged || store.currentView === 'admin') {
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      });
    }

    const logoutBtn = document.getElementById('btn-admin-logout');
    if (logoutBtn) logoutBtn.onclick = () => store.logoutAdmin();

    const productForm = document.getElementById('admin-product-form');
    if (productForm) {
      const idInput = document.getElementById('p-id');
      const titleInput = document.getElementById('p-title');

      // Live auto-slug: as the admin types the title, fill the ID field
      // with a slugified version — but only while adding a new product
      // (editing an existing product's ID is disabled entirely, see the
      // readonly field above) and only until the admin actually types
      // into the ID field themselves, at which point we stop overwriting
      // their edit.
      if (idInput && titleInput && store.activeAdminAction === 'add') {
        let idManuallyEdited = false;
        idInput.addEventListener('input', () => { idManuallyEdited = true; });
        titleInput.addEventListener('input', () => {
          if (idManuallyEdited) return;
          const base = slugify(titleInput.value) || 'product';
          idInput.value = store.newProductDraftId && store.newProductDraftId.startsWith(base)
            ? store.newProductDraftId
            : `${base}-${(store.newProductDraftId || '').split('-').pop() || Math.random().toString(36).slice(2, 6)}`;
        });
      }

      productForm.onsubmit = async (e) => {
        e.preventDefault();

        const submitButton = productForm.querySelector('button[type="submit"]');
        const fileInput = document.getElementById('p-image-file');
        const imageUrlInput = document.getElementById('p-image');
        const originalButtonText = submitButton?.textContent || '';

        if (submitButton) {
          submitButton.disabled = true;
          submitButton.textContent = 'Uploading...';
        }

        let imageUrl = imageUrlInput.value.trim();
        if (fileInput?.files?.length) {
          imageUrl = await store.uploadProductImage(fileInput);
          if (!imageUrl) {
            alert('Image upload failed. Please check your Cloudinary upload preset and try again.');
            if (submitButton) { submitButton.disabled = false; submitButton.textContent = originalButtonText; }
            return;
          }
          imageUrlInput.value = imageUrl;
        }

        if (!imageUrl) {
          alert('Please select a product image or enter an image URL.');
          if (submitButton) { submitButton.disabled = false; submitButton.textContent = originalButtonText; }
          return;
        }

        // Resolve a real, clean, unique id before touching Firestore — never
        // send `id: undefined`/empty, since the Firestore SDK rejects
        // documents containing an undefined field value, and a blank or
        // duplicate id would silently overwrite a different product.
        const isEdit = store.activeAdminAction === 'edit';
        let productId;
        if (isEdit) {
          // Read-only in edit mode — always the product's existing id.
          productId = store.adminEditProduct.id;
        } else {
          const rawId = document.getElementById('p-id')?.value.trim();
          const otherIds = store.products.map(p => p.id);
          const candidate = slugify(rawId) || slugify(document.getElementById('p-title').value) || 'product';
          productId = otherIds.includes(candidate) ? generateProductId(candidate, otherIds) : candidate;
        }

        const productData = {
          id: productId,
          title: document.getElementById('p-title').value.trim(),
          category: document.getElementById('p-category').value.trim(),
          price: parseInt(document.getElementById('p-price').value, 10),
          compareAtPrice: parseInt(document.getElementById('p-compare-at-price').value, 10) || 0,
          description: document.getElementById('p-description').value.trim(),
          badge: document.getElementById('p-badge').value.trim(),
          tags: document.getElementById('p-tags').value.split(',').map(t => t.trim()).filter(Boolean),
          isFlashSale: document.getElementById('p-flash-sale').checked,
          inStock: document.getElementById('p-stock-in-stock').checked,
          image: imageUrl,
          images: [imageUrl]
        };

        const previousCategory = isEdit ? store.adminEditProduct.category : null;
        const result = await store.saveProductToFirebase(productData, productId, previousCategory);

        if (!result.ok) {
          alert(`Product could not be saved to Firebase:\n\n${result.error}\n\nCheck your Firestore rules/connection.`);
          if (submitButton) { submitButton.disabled = false; submitButton.textContent = originalButtonText; }
          return;
        }

        if (store.activeAdminAction === 'edit') {
          store.updateProduct(productData);
        } else {
          store.addProduct(productData);
        }
        store.newProductDraftId = null;
        store.closeModal();
      };
    }
  }

  renderAdminControlCard(product) {
    return `
      <article class="bg-white rounded-2xl border border-neutral-200 p-3.5 flex flex-col justify-between relative overflow-hidden">
        ${product.isFlashSale ? `<div class="absolute top-2 right-2 w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center font-black text-sm">⚡</div>` : ''}
        <div class="flex items-center gap-2.5">
          <img src="${product.image}" class="w-12 h-12 object-contain bg-neutral-50 rounded-lg p-1.5 border border-neutral-100 flex-shrink-0" />
          <div class="min-w-0">
            <h4 class="text-xs font-extrabold text-neutral-900 truncate">${escapeHtml(product.title)}</h4>
            <span class="text-[10px] text-red-600/90 font-bold uppercase tracking-wider">${escapeHtml(product.category)}</span>
            <div class="text-[9px] text-neutral-400 font-mono truncate">ID: ${escapeHtml(product.id)}</div>
          </div>
        </div>
        <div class="mt-3 pt-2.5 border-t border-neutral-100 space-y-1.5">
          <div class="flex justify-between items-baseline"><span class="text-[10px] text-neutral-400 font-medium uppercase">Price</span><span class="text-sm font-black text-neutral-950">${formatPKR(product.price)}</span></div>
          <div class="grid grid-cols-2 gap-1.5 text-[10px] font-bold">
            <div class="bg-neutral-50 rounded px-1.5 py-0.5 border ${product.inStock ? 'border-emerald-200 bg-emerald-50 text-emerald-800' : 'border-red-200 text-red-600 bg-red-50'}">Stock: ${product.inStock ? 'In' : 'Out'}</div>
            <div class="bg-neutral-50 rounded px-1.5 py-0.5 border border-neutral-100 text-neutral-500">Badge: ${product.badge || 'None'}</div>
          </div>
          <div class="flex gap-2 pt-1.5">
            <button class="flex-grow bg-black hover:bg-neutral-800 text-white text-[11px] font-extrabold py-2 rounded-xl" onclick="app.adminActionEdit('${product.id}')">Edit</button>
            <button class="px-3 border border-red-200 text-red-600 hover:bg-red-50 text-[11px] font-extrabold py-2 rounded-xl" onclick="app.adminActionDelete('${product.id}')">Delete</button>
          </div>
        </div>
      </article>
    `;
  }

  // Exports the orders currently shown (i.e. respecting whichever status
  // filter chip is active — All/Pending/Accepted/etc.) as a CSV file, for
  // bookkeeping, tax records, or sharing order data with someone who
  // doesn't have admin access to this dashboard. Pure client-side: builds
  // the CSV from the orders already loaded in this session and triggers a
  // normal browser download, no server/Cloud Function involved.
  exportOrdersCSV() {
    const orders = store.orders.filter(order => {
      if (store.adminOrderFilter === 'all') return true;
      if (store.adminOrderFilter === 'pending') return !order.status || order.status === 'pending';
      if (store.adminOrderFilter === 'rejected') return order.status === 'rejected' || order.status === 'cancelled';
      return order.status === store.adminOrderFilter;
    });
    if (orders.length === 0) {
      store.showToast('No orders to export for this filter.', 'error');
      return;
    }
    const headers = ['Order Number', 'Date', 'Status', 'Customer Name', 'Phone', 'Address', 'City', 'Items', 'Subtotal', 'Discount', 'Coupon', 'Total', 'Payment Method', 'Customer Email'];
    const csvEscape = (value) => {
      const str = value === null || value === undefined ? '' : String(value);
      return /[",\n]/.test(str) ? '"' + str.replace(/"/g, '""') + '"' : str;
    };
    const rows = orders.map(order => [
      order.orderNumber || order.id || '',
      order.date || '',
      order.status || 'pending',
      order.customer?.name || '',
      order.customer?.phone || '',
      order.customer?.address || '',
      order.customer?.city || '',
      (order.items || []).map(it => `${it.product?.title || 'Item'} x${it.quantity}`).join('; '),
      order.subtotal ?? 0,
      order.discount ?? 0,
      order.coupon || '',
      order.total ?? 0,
      order.paymentMethod || '',
      order.customerEmail || ''
    ].map(csvEscape).join(','));
    const csvContent = [headers.map(csvEscape).join(','), ...rows].join('\r\n');
    // Leading BOM so Excel opens the file as UTF-8 instead of mis-decoding
    // non-ASCII characters in customer names/addresses.
    const blob = new Blob(['﻿' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const stamp = new Date().toISOString().slice(0, 10);
    link.href = url;
    link.download = `zyvron-orders-${store.adminOrderFilter}-${stamp}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    store.showToast(`Exported ${orders.length} order${orders.length === 1 ? '' : 's'} to CSV.`, 'success');
  }

  renderAdminOrdersTab(stats) {
    const orders = store.orders.filter(order => {
      if (store.adminOrderFilter === 'all') return true;
      if (store.adminOrderFilter === 'pending') return !order.status || order.status === 'pending';
      if (store.adminOrderFilter === 'rejected') return order.status === 'rejected' || order.status === 'cancelled';
      return order.status === store.adminOrderFilter;
    });
    const dailyOrders = store.orders.filter(order => store.getOrderDateKey(order) === store.adminRevenueDate);
    const dailyActiveOrders = dailyOrders.filter(order => ['accepted', 'dispatched', 'delivered'].includes(order.status));
    const dailyRevenue = dailyActiveOrders.reduce((sum, order) => sum + (order.total || 0), 0);
    const orderSections = [
      { id: 'all', label: 'All Orders', count: stats.total, style: 'neutral' },
      { id: 'pending', label: 'Pending', count: stats.pending, style: 'amber' },
      { id: 'accepted', label: 'Accepted', count: stats.accepted, style: 'emerald' },
      { id: 'dispatched', label: 'Dispatched', count: stats.dispatched, style: 'violet' },
      { id: 'rejected', label: 'Rejected', count: stats.rejected, style: 'red' },
      { id: 'delivered', label: 'Delivered', count: stats.delivered, style: 'cyan' }
    ];
    const sectionStyles = {
      neutral: 'bg-neutral-950 text-white',
      amber: 'bg-amber-50 text-amber-800 border border-amber-200',
      emerald: 'bg-emerald-50 text-emerald-800 border border-emerald-200',
      violet: 'bg-violet-50 text-violet-800 border border-violet-200',
      red: 'bg-red-50 text-red-700 border border-red-200',
      cyan: 'bg-cyan-50 text-cyan-800 border border-cyan-200'
    };
    return `
      <div class="bg-white p-4 rounded-[22px] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm border border-neutral-200">
        <div>
          <span class="text-xs font-black text-red-600 uppercase tracking-widest leading-none">Management Console</span>
          <h2 class="text-xl sm:text-2xl font-black text-neutral-950 uppercase tracking-tight">Orders</h2>
          <p class="text-xs text-neutral-500 font-medium mt-0.5">New orders appear here automatically and stay until you delete them. Accept, reject, dispatch, deliver, print, or delete each order below.</p>
        </div>
        <button class="flex-shrink-0 px-4 py-2.5 rounded-xl bg-neutral-950 text-white text-[11px] font-black uppercase tracking-wider hover:bg-neutral-800 transition" onclick="app.exportOrdersCSV()" title="Export the orders currently shown below to a CSV file">⬇️ Export CSV</button>
      </div>

      ${store.lastOrderUpdateError ? `
        <div class="p-4 rounded-2xl bg-red-50 border border-red-200 flex flex-wrap items-start justify-between gap-3">
          <div class="flex items-start gap-2 min-w-0">
            <span class="text-lg leading-none">⚠️</span>
            <div class="min-w-0">
              <p class="text-xs font-black text-red-700">Order update failed to save</p>
              <p class="text-[11px] text-red-600 font-medium mt-0.5 break-words">${escapeHtml(store.lastOrderUpdateError.message)}</p>
            </div>
          </div>
          <div class="flex gap-2 flex-shrink-0">
            <button class="px-3 py-1.5 rounded-lg text-[11px] font-extrabold bg-red-600 text-white hover:bg-red-700" onclick="app.setOrderStatus('${store.lastOrderUpdateError.orderId}', '${store.lastOrderUpdateError.status}')">Retry</button>
            <button class="px-3 py-1.5 rounded-lg text-[11px] font-extrabold border border-red-200 text-red-600 hover:bg-red-50" onclick="app.dismissOrderUpdateError()">Dismiss</button>
          </div>
        </div>
      ` : ''}

      <div class="grid grid-cols-2 sm:grid-cols-6 gap-4">
        <div class="p-4 rounded-2xl bg-white border border-neutral-200"><div class="text-2xl font-black">${stats.total}</div><p class="text-[11px] text-neutral-500 pt-1 border-t border-neutral-100 mt-1">Total Orders</p></div>
        <div class="p-4 rounded-2xl bg-amber-50 border border-amber-200"><div class="text-2xl font-black text-amber-800">${stats.pending}</div><p class="text-[11px] text-amber-700 pt-1 border-t border-amber-100 mt-1">Pending</p></div>
        <div class="p-4 rounded-2xl bg-emerald-50 border border-emerald-200"><div class="text-2xl font-black text-emerald-700">${stats.accepted}</div><p class="text-[11px] text-emerald-700 pt-1 border-t border-emerald-100 mt-1">Accepted</p></div>
        <div class="p-4 rounded-2xl bg-white border border-neutral-200"><div class="text-2xl font-black text-red-600">${stats.rejected}</div><p class="text-[11px] text-neutral-500 pt-1 border-t border-neutral-100 mt-1">Rejected</p></div>
        <div class="p-4 rounded-2xl bg-violet-50 border border-violet-200"><div class="text-2xl font-black text-violet-700">${stats.delivered}</div><p class="text-[11px] text-violet-700 pt-1 border-t border-violet-100 mt-1">Delivered</p></div>
        <div class="p-4 rounded-2xl bg-neutral-950 text-white"><div class="text-2xl font-black">${formatPKR(stats.revenue)}</div><p class="text-[11px] text-neutral-300 pt-1 border-t border-white/10 mt-1">Revenue (active)</p></div>
      </div>

      <div class="flex gap-2 overflow-x-auto pb-1 no-scrollbar" aria-label="Order status sections">
        ${orderSections.map(section => `
          <button
            class="flex-shrink-0 px-3.5 py-2 rounded-xl text-[11px] font-black transition ${store.adminOrderFilter === section.id ? sectionStyles[section.style] + ' shadow-md ring-2 ring-neutral-900/10' : 'bg-white text-neutral-500 border border-neutral-200 hover:text-neutral-900 hover:border-neutral-400'}"
            onclick="store.setAdminOrderFilter('${section.id}')">
            ${section.label} <span class="ml-1 opacity-70">${section.count}</span>
          </button>
        `).join('')}
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div class="p-3 rounded-2xl bg-emerald-50 border border-emerald-200"><p class="text-[10px] font-black uppercase tracking-wide text-emerald-700">Accepted Revenue</p><div class="text-lg font-black text-emerald-900 mt-1">${formatPKR(stats.acceptedRevenue)}</div></div>
        <div class="p-3 rounded-2xl bg-red-50 border border-red-200"><p class="text-[10px] font-black uppercase tracking-wide text-red-700">Rejected Revenue</p><div class="text-lg font-black text-red-900 mt-1">${formatPKR(stats.rejectedRevenue)}</div></div>
        <div class="p-3 rounded-2xl bg-cyan-50 border border-cyan-200"><p class="text-[10px] font-black uppercase tracking-wide text-cyan-700">Delivered Revenue</p><div class="text-lg font-black text-cyan-900 mt-1">${formatPKR(stats.deliveredRevenue)}</div></div>
      </div>

      <div class="p-4 rounded-2xl bg-sky-50 border border-sky-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <p class="text-[10px] font-black uppercase tracking-wide text-sky-700">Daily Active Revenue</p>
          <div class="text-2xl font-black text-sky-950 mt-1">${formatPKR(dailyRevenue)}</div>
          <p class="text-[11px] text-sky-700 mt-0.5">${dailyActiveOrders.length} active order${dailyActiveOrders.length === 1 ? '' : 's'} on this date</p>
        </div>
        <label class="flex items-center gap-2 text-[11px] font-black text-sky-800">
          Date
          <input type="date" value="${store.adminRevenueDate}" onchange="store.setAdminRevenueDate(this.value)" class="px-2.5 py-2 rounded-lg border border-sky-200 bg-white text-sky-900 font-bold focus:outline-none focus:ring-2 focus:ring-sky-400" />
        </label>
      </div>

      ${!store.ordersLoaded ? `
        <div class="bg-white p-8 rounded-2xl border border-neutral-200 text-center text-sm text-neutral-500 font-medium">Loading orders…</div>
      ` : orders.length === 0 ? `
        <div class="bg-white p-8 rounded-2xl border border-neutral-200 text-center text-sm text-neutral-500 font-medium">No ${store.adminOrderFilter === 'all' ? '' : store.adminOrderFilter + ' '}orders found.</div>
      ` : `
        <div class="space-y-3">
          ${orders.map(o => this.renderAdminOrderCard(o)).join('')}
        </div>
      `}
    `;
  }

  renderAdminOrderCard(order) {
    // 'cancelled' is the pre-accept/reject status name — still treated as
    // rejected so older orders display correctly.
    const isAccepted = order.status === 'accepted';
    const isRejected = order.status === 'rejected' || order.status === 'cancelled';
    const isDispatched = order.status === 'dispatched';
    const isDelivered = order.status === 'delivered';
    const statusLabel = isDelivered ? 'Delivered' : isDispatched ? 'Dispatched' : isAccepted ? 'Accepted' : isRejected ? 'Rejected' : 'Pending';
    const statusClasses = isDelivered
      ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
      : isDispatched
      ? 'bg-violet-50 text-violet-700 border border-violet-200'
      : isAccepted
      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
      : isRejected
      ? 'bg-red-50 text-red-600 border border-red-200'
      : 'bg-amber-50 text-amber-700 border border-amber-200';
    const itemCount = (order.items || []).reduce((n, it) => n + (it.quantity || 1), 0);
    return `
      <article class="bg-white rounded-2xl border ${isRejected ? 'border-red-100' : 'border-neutral-200'} p-4 ${isRejected ? 'opacity-70' : ''}">
        <div class="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div class="flex items-center gap-2">
              <h4 class="text-sm font-black text-neutral-900">${escapeHtml(order.orderNumber || order.id)}</h4>
              <span class="text-[10px] font-black uppercase tracking-wide px-2 py-0.5 rounded-full ${statusClasses}">${statusLabel}</span>
            </div>
            <p class="text-[11px] text-neutral-400 font-medium mt-0.5">${escapeHtml(order.date || '')} • ${itemCount} item${itemCount === 1 ? '' : 's'} • COD</p>
          </div>
          <div class="text-right">
            <div class="text-lg font-black text-neutral-950">${formatPKR(order.total || 0)}</div>
            ${order.discount > 0 ? `<p class="text-[10px] text-emerald-600 font-bold">Coupon ${escapeHtml(order.coupon || '')} applied</p>` : ''}
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 pt-3 border-t border-neutral-100">
          <div class="text-xs text-neutral-600 space-y-0.5">
            <p class="font-extrabold text-neutral-900">${escapeHtml(order.customer?.name || '—')}</p>
            <p>📞 ${escapeHtml(order.customer?.phone || '—')}</p>
            <p>📍 ${escapeHtml(order.customer?.address || '—')}, ${escapeHtml(order.customer?.city || '—')}</p>
            ${order.customerEmail ? `<p>✉️ ${escapeHtml(order.customerEmail)}</p>` : `<p class="text-neutral-400">✉️ Guest checkout (no account)</p>`}
          </div>
          <div class="text-xs text-neutral-600">
            ${(order.items || []).map(it => `<div class="flex justify-between"><span>${escapeHtml(it.product?.title || 'Item')} × ${it.quantity}</span><span class="font-bold text-neutral-800">${formatPKR((it.product?.price || 0) * it.quantity)}</span></div>`).join('')}
          </div>
        </div>

        <div class="flex flex-wrap gap-2 pt-3 mt-1">
          <button class="flex-grow bg-black hover:bg-neutral-800 text-white text-[11px] font-extrabold py-2.5 rounded-xl" onclick="app.printOrderReceipt('${order.id}')">🖨️ Print Receipt</button>
          <button class="px-3 text-[11px] font-extrabold py-2.5 rounded-xl border border-emerald-200 text-emerald-700 hover:bg-emerald-50" onclick="store.sendOrderStatusWhatsApp('${order.id}')" title="Send the current order status on WhatsApp">💬 WhatsApp</button>
          <button class="px-3 text-[11px] font-extrabold py-2.5 rounded-xl border ${isAccepted ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-emerald-200 text-emerald-700 hover:bg-emerald-50'}" onclick="app.setOrderStatus('${order.id}', 'accepted')">${isAccepted ? '✓ Accepted' : 'Accept'}</button>
          <button class="px-3 text-[11px] font-extrabold py-2.5 rounded-xl border ${isRejected ? 'bg-red-600 border-red-600 text-white' : 'border-red-200 text-red-600 hover:bg-red-50'}" onclick="app.setOrderStatus('${order.id}', 'rejected')">${isRejected ? '✕ Rejected' : 'Reject'}</button>
          <button class="px-3 text-[11px] font-extrabold py-2.5 rounded-xl border ${order.status === 'dispatched' ? 'bg-violet-600 border-violet-600 text-white' : 'border-violet-200 text-violet-700 hover:bg-violet-50'}" onclick="app.setOrderStatus('${order.id}', 'dispatched')">${order.status === 'dispatched' ? '✓ Dispatched' : 'Dispatch'}</button>
          <button class="px-3 text-[11px] font-extrabold py-2.5 rounded-xl border ${order.status === 'delivered' ? 'bg-emerald-700 border-emerald-700 text-white' : 'border-emerald-200 text-emerald-700 hover:bg-emerald-50'}" onclick="app.setOrderStatus('${order.id}', 'delivered')">${order.status === 'delivered' ? '✓ Delivered' : 'Delivered'}</button>
          <button class="px-3 text-[11px] font-extrabold py-2.5 rounded-xl border border-neutral-200 text-neutral-400 hover:bg-neutral-50 hover:text-red-600" title="Permanently delete this order" onclick="app.deleteOrderConfirm('${order.id}')">🗑️</button>
        </div>
      </article>
    `;
  }

  async setOrderStatus(orderId, status) {
    const labels = { accepted: 'accept', rejected: 'reject', dispatched: 'dispatch', delivered: 'mark as delivered' };
    const action = labels[status] || 'update';
    if (status === 'rejected' && !confirm(`Reject this order?`)) return;
    if (status === 'delivered' && !confirm(`Mark this order as delivered?`)) return;
    const saved = await store.updateOrderStatus(orderId, status);
    // NOTE: this used to also call store.setAdminOrderFilter(status) here,
    // auto-switching the Orders tab to that status's filter right after a
    // single accept/reject/dispatch/deliver click. That's what caused the
    // "accepting one order accepts them all" report — it didn't actually
    // touch any other order in Firestore (updateOrderStatus above only ever
    // writes the one orderId passed in), but jumping the filter to
    // "Accepted"/"Rejected" immediately surfaced every OTHER order already
    // in that same status, all at once, which looked exactly like a mass
    // update. Removed: stay on whatever filter the admin already had open.
    if (saved && (status === 'accepted' || status === 'rejected')) {
      const customerLabel = status === 'accepted' ? 'Approved' : 'Rejected';
      const shouldShare = confirm(`Order ${status}. Customer now sees: ${customerLabel}. Share the order details on WhatsApp now?`);
      if (shouldShare) store.sendOrderStatusWhatsApp(orderId);
    }
  }

  acceptOrderAction(orderId) {
    store.acceptOrder(orderId);
  }

  dismissOrderUpdateError() {
    store.dismissOrderUpdateError();
  }

  // Jumps from the "Order Confirmed" popup straight into Track My Order,
  // pre-filled with this order's tracking code and auto-submitted.
  trackThisOrder(orderNumber) {
    store.prefillTrackingCode = orderNumber;
    store.prefillTrackingPhone = store.lastOrder?.customer?.phone || null;
    this.openTrackingPage();
  }

  // Same jump, from a My Account "recent orders on this device" row instead
  // — phone comes from that specific saved order, not store.lastOrder
  // (which may by now be a different, more recent order).
  trackOrderFromAccount(orderNumber, phone) {
    store.prefillTrackingCode = orderNumber;
    store.prefillTrackingPhone = phone || null;
    store.closeModal();
    this.openTrackingPage();
  }

  openTrackingPage() {
    store.trackingReturnRoute = window.location.hash && window.location.hash !== '#/track-order'
      ? window.location.hash
      : '#/';
    store.trackingReturnScrollY = window.scrollY || 0;
    this.navigateTo('#/track-order');
  }

  goToLogin() {
    this.navigateTo('#/login');
  }

  goToAllProducts() {
    this.navigateTo('#/all-products');
  }

  closeAuthPage() {
    store.currentView = 'store';
    store.activeModal = null;
    document.title = 'Zyvron Tech Accessories™ — Premium Gadgets & Smart Tech Store';
    this.navigateTo('#/');
  }

  closeProductPage() {
    if (window.history.length > 1) {
      window.history.back();
      return;
    }
    this.navigateTo('#/all-products');
  }

  closeCategoryPage() {
    if (window.history.length > 1) {
      window.history.back();
      return;
    }
    this.navigateTo('#/');
  }

  closeAboutPage() {
    if (window.history.length > 1 && window.location.hash && window.location.hash !== '#/') {
      window.history.back();
      return;
    }
    this.navigateTo('#/');
  }

  closeWishlistPage() {
    if (window.history.length > 1 && window.location.hash && window.location.hash !== '#/') {
      window.history.back();
      return;
    }
    this.navigateTo('#/');
  }

  closeCartPage() {
    if (window.history.length > 1) {
      window.history.back();
      return;
    }
    this.navigateTo('#/');
  }

  closeMyAccountPage() {
    if (window.history.length > 1) {
      window.history.back();
      return;
    }
    this.navigateTo('#/');
  }

  closeTrackingPage() {
    const returnRoute = store.trackingReturnRoute || '#/';
    const returnScrollY = store.trackingReturnScrollY || 0;
    store.trackingReturnRoute = '#/';
    this.navigateTo(returnRoute);
    setTimeout(() => window.scrollTo({ top: returnScrollY, behavior: 'auto' }), 0);
  }

  rejectOrderConfirm(orderId) {
    const order = store.orders.find(o => o.id === orderId);
    const label = order ? (order.orderNumber || orderId) : orderId;
    if (confirm(`Reject order ${label}? The customer's order will be marked rejected.`)) {
      store.rejectOrder(orderId);
    }
  }

  deleteOrderConfirm(orderId) {
    const order = store.orders.find(o => o.id === orderId);
    const label = order ? (order.orderNumber || orderId) : orderId;
    if (confirm(`Permanently delete order ${label}? This removes it from your dashboard forever and cannot be undone.`)) {
      store.deleteOrder(orderId);
    }
  }

  printOrderReceipt(orderId) {
    const order = store.orders.find(o => o.id === orderId);
    if (!order) { store.showToast('Order not found.', 'error'); return; }

    const itemsRows = (order.items || []).map(it => `
      <tr>
        <td style="padding:8px 0;">${escapeHtml(it.product?.title || 'Item')}</td>
        <td style="padding:8px 0;text-align:center;">${it.quantity}</td>
        <td style="padding:8px 0;text-align:right;">${formatPKR(it.product?.price || 0)}</td>
        <td style="padding:8px 0;text-align:right;">${formatPKR((it.product?.price || 0) * it.quantity)}</td>
      </tr>
    `).join('');

    const isRejected = order.status === 'rejected' || order.status === 'cancelled';
    const statusText = order.status === 'accepted' ? 'APPROVED' : isRejected ? 'REJECTED' : 'PENDING';
    const statusStyle = order.status === 'accepted'
      ? 'background:#d1fae5;color:#047857;'
      : isRejected
      ? 'background:#fee2e2;color:#dc2626;'
      : 'background:#fef3c7;color:#b45309;';

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8" />
        <title>Receipt — ${escapeHtml(order.orderNumber || order.id)}</title>
        <style>
          body { font-family: -apple-system, Arial, sans-serif; color: #111; padding: 32px; max-width: 620px; margin: 0 auto; }
          h1 { font-size: 20px; margin-bottom: 0; }
          .muted { color: #666; font-size: 12px; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 13px; }
          thead td { font-size: 11px; text-transform: uppercase; color: #888; border-bottom: 1px solid #ddd; padding-bottom: 6px; }
          tbody tr { border-bottom: 1px solid #eee; }
          .totals td { border: none; padding: 4px 0; }
          .grand { font-size: 16px; font-weight: 800; border-top: 2px solid #111; padding-top: 8px !important; }
          .section { margin-top: 22px; }
          .badge { display:inline-block; font-size:11px; font-weight:800; padding:2px 10px; border-radius:999px; ${statusStyle} }
          @media print { body { padding: 0; } }
        </style>
      </head>
      <body>
        <div style="display:flex;align-items:center;gap:10px;">
          <img src="data:image/png;base64,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" alt="Zyvron" style="width:36px;height:auto;object-fit:contain;" />
          <h1>Zyvron Tech Accessories</h1>
        </div>
        <p class="muted">Order Receipt</p>

        <div class="section" style="display:flex;justify-content:space-between;align-items:flex-start;">
          <div>
            <p><strong>Order:</strong> ${escapeHtml(order.orderNumber || order.id)}</p>
            <p class="muted">${escapeHtml(order.date || '')}</p>
          </div>
          <span class="badge">${statusText}</span>
        </div>

        <div class="section">
          <p class="muted" style="text-transform:uppercase;font-size:11px;margin-bottom:4px;">Customer</p>
          <p><strong>${escapeHtml(order.customer?.name || '—')}</strong></p>
          <p>${escapeHtml(order.customer?.phone || '—')}</p>
          <p>${escapeHtml(order.customer?.address || '—')}, ${escapeHtml(order.customer?.city || '—')}</p>
        </div>

        <div class="section">
          <table>
            <thead><tr><td>Item</td><td style="text-align:center;">Qty</td><td style="text-align:right;">Price</td><td style="text-align:right;">Total</td></tr></thead>
            <tbody>${itemsRows}</tbody>
          </table>
          <table class="totals">
            <tr class="totals"><td></td><td></td><td>Subtotal</td><td style="text-align:right;">${formatPKR(order.subtotal || 0)}</td></tr>
            ${order.discount > 0 ? `<tr class="totals"><td></td><td></td><td>Coupon (${escapeHtml(order.coupon || '')})</td><td style="text-align:right;">-${formatPKR(order.discount)}</td></tr>` : ''}
            <tr class="totals grand"><td></td><td></td><td>Total (COD)</td><td style="text-align:right;">${formatPKR(order.total || 0)}</td></tr>
          </table>
        </div>

        <div class="section muted">
          <p>Payment Method: ${escapeHtml(order.paymentMethod || 'Cash on Delivery (COD)')}</p>
        </div>
      </body>
      </html>
    `;

    const win = window.open('', '_blank', 'width=680,height=800');
    if (!win) { store.showToast('Pop-up blocked — allow pop-ups to print receipts.', 'error'); return; }
    win.document.open();
    win.document.write(html);
    win.document.close();
    win.onload = () => win.print();
  }

  // Full page sign-in/login flow: customer account access is now a real
  // page instead of a modal overlay. This keeps the auth experience stable
  // and consistent with the rest of the storefront navigation.
  renderAuthPage() {
    if (store.currentView !== 'auth') return '';
    return `
      <section class="py-8 sm:py-12">
        <div class="relative mx-auto max-w-xl rounded-[28px] border border-neutral-200 bg-white p-6 shadow-sm sm:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
          <button
            type="button"
            class="zv-close-x zv-close-x--corner"
            aria-label="Close sign in page"
            onclick="app.closeAuthPage()">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M7 7L17 17M17 7L7 17" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>
          </button>

          <div class="mb-6 pr-10">
            <p class="text-xs font-black uppercase tracking-[0.25em] text-red-600">Account</p>
            <h1 id="auth-page-title" class="mt-2 text-3xl font-black text-neutral-900">Sign in to Zyvron</h1>
          </div>

          <form id="auth-email-form" class="space-y-4" novalidate>
            <div>
              <label class="mb-1 block text-[11px] font-black uppercase tracking-[0.2em] text-neutral-600">Email address</label>
              <input type="email" id="auth-email" class="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-3.5 py-3 text-sm text-neutral-900 outline-none transition duration-200 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-500/10 focus:shadow-sm" autocomplete="off" placeholder="you@example.com" />
              <p id="auth-email-error" class="mt-1 hidden text-[11px] font-bold text-red-600"></p>
            </div>
            <div>
              <label class="mb-1 block text-[11px] font-black uppercase tracking-[0.2em] text-neutral-600">Password</label>
              <input type="password" id="auth-email-password" class="w-full rounded-xl border border-neutral-300 bg-neutral-50 px-3.5 py-3 text-sm text-neutral-900 outline-none transition duration-200 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-500/10 focus:shadow-sm" autocomplete="off" placeholder="At least 6 characters" />
              <p id="auth-email-password-error" class="mt-1 hidden text-[11px] font-bold text-red-600"></p>
            </div>
            <button type="submit" id="auth-email-submit" data-mode="signin" class="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 px-4 py-3 text-xs font-black uppercase tracking-[0.15em] text-white shadow-lg shadow-cyan-500/20 transition duration-200 hover:-translate-y-0.5 hover:shadow-cyan-500/30 active:scale-95">Continue with Email</button>
          </form>

          <div class="mt-4 flex items-center justify-center gap-2 text-[11px] text-neutral-500">
            <span>New here?</span>
            <button type="button" id="auth-mode-toggle" data-mode="signin" class="font-black uppercase tracking-[0.12em] text-cyan-600 transition hover:text-cyan-700">Sign Up</button>
          </div>

          <p class="mt-5 text-center text-[11px] text-neutral-500">
            By continuing you agree to our
            <button type="button" onclick="store.setCurrentView('terms')" class="underline transition hover:text-neutral-700">Terms</button>
            &amp;
            <button type="button" onclick="store.setCurrentView('privacy')" class="underline transition hover:text-neutral-700">Privacy Policy</button>.
          </p>
        </div>

      </section>
    `;
  }

  // "My Account" — Step 5 of the roadmap. Profile (whatever identity
  // Firebase Auth gave this session — email or phone), Sign Out, and order
  // history. Order history now comes from a Firestore query scoped to this
  // account's uid (see loadAccountOrderHistory()) — every order this
  // account has ever placed, on any device — falling back to this
  // device's local tracking-code list when there's no signed-in uid,
  // Firestore is unavailable, or the query fails.
  renderMyAccountModal() {
    const isOpen = store.activeModal === 'my-account';
    if (!isOpen) return '';
    const user = store.customerUser;
    if (!user) return ''; // signed out from under the modal (e.g. another tab) — nothing to show
    const identity = user.email || user.phone || 'Signed in';
    const myOrders = store.myAccountOrders || [];
    const ordersLoading = store.myAccountOrdersLoading;
    const ordersFromAccount = store.myAccountOrdersSource === 'account';

    return `
      <div class="fixed inset-0 z-50 flex justify-end items-start p-4 pt-20 bg-black/40 backdrop-blur-[2px] animate-fade-in">
        <div class="bg-white rounded-3xl shadow-2xl w-[90%] max-w-sm p-6 max-h-[85vh] overflow-y-auto">
          <div class="flex items-center justify-between mb-4">
            <h4 class="text-base font-black text-neutral-900">My Account</h4>
            <button class="zv-close-x" onclick="store.closeModal()" aria-label="Close" title="Close">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M7 7L17 17M17 7L7 17" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>
            </button>
          </div>

          <div class="flex items-center gap-3 mb-5 p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200">
            <div class="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-black text-sm flex-shrink-0">
              ${escapeHtml(identity.charAt(0).toUpperCase())}
            </div>
            <div class="min-w-0">
              <p class="text-xs font-extrabold text-neutral-900 truncate">${escapeHtml(identity)}</p>
              <p class="text-[10px] text-neutral-500">Signed in</p>
            </div>
          </div>

          <p class="text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-2">${ordersFromAccount ? 'Your orders' : 'Recent orders on this device'}</p>
          ${ordersLoading ? `
            <div class="flex items-center justify-center py-6 mb-5 text-xs text-neutral-400 font-semibold">Loading your orders…</div>
          ` : myOrders.length ? `
            <div class="space-y-2 mb-5">
              ${myOrders.map(o => `
                <button type="button" class="w-full text-left flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-red-300 hover:bg-red-50 transition" onclick="app.trackOrderFromAccount('${escapeHtml(o.orderNumber)}', '${escapeHtml(o.order?.customer?.phone || '')}')">
                  <span class="text-xs font-mono font-bold text-neutral-800">${escapeHtml(o.orderNumber)}</span>
                  <span class="text-[10px] text-neutral-500">${escapeHtml(o.date || '')}</span>
                </button>
              `).join('')}
            </div>
          ` : `
            <p class="text-xs text-neutral-500 mb-5">No orders placed ${ordersFromAccount ? 'with this account' : 'from this device'} yet.</p>
          `}

          <button id="btn-account-logout" class="w-full border border-neutral-300 text-neutral-700 hover:border-red-600 hover:text-red-700 font-black text-xs py-3 rounded-xl transition">Sign Out</button>
        </div>
      </div>
    `;
  }

  renderAdminLoginModal() {
    const isOpen = store.activeModal === 'admin-login';
    if (!isOpen) return '';
    return `
      <div class="fixed inset-0 z-50 ${isOpen ? '' : 'pointer-events-none'}">
        <div class="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}" onclick="store.closeModal()"></div>
        <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-sm bg-white rounded-3xl shadow-2xl z-10 p-6 transition-all ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}">
          <div class="flex items-center justify-between mb-4">
            <h4 class="text-sm font-black text-neutral-900">Admin Login</h4>
            <button class="zv-close-x" onclick="store.closeModal()" aria-label="Close" title="Close"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M7 7L17 17M17 7L7 17" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg></button>
          </div>
          <form id="admin-login-form" class="space-y-3">
            <div>
              <label class="block text-xs font-bold text-neutral-800 uppercase tracking-widest mb-1">Admin Email</label>
              <input type="email" id="admin-email" class="p-input-form" autocomplete="off" />
            </div>
            <div>
              <label class="block text-xs font-bold text-neutral-800 uppercase tracking-widest mb-1">Password</label>
              <input type="password" id="admin-password" class="p-input-form" autocomplete="off" />
            </div>
            <button type="submit" class="w-full bg-red-600 hover:bg-red-700 text-white font-black text-xs py-3 rounded-xl transition">Log In</button>
          </form>
        </div>
      </div>
    `;
  }

  renderProductFormModal() {
    const isOpen = store.activeModal === 'product-form' && store.isAdmin;
    const action = store.activeAdminAction;
    const product = store.adminEditProduct;
    const isEditMode = action === 'edit' && product;
    if (!isOpen) return '';

    return `
      <div class="fixed inset-0 z-50">
        <div class="absolute inset-0 bg-black/80 backdrop-blur-sm" onclick="store.closeModal()"></div>
        <div class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[94%] max-w-2xl bg-white rounded-3xl shadow-2xl z-10 max-h-[90vh] overflow-hidden flex flex-col">
          <div class="sticky top-0 bg-white p-4 border-b border-neutral-100 flex items-center justify-between flex-shrink-0">
            <div>
              <h4 class="text-sm sm:text-base font-black text-neutral-900">${isEditMode ? `Edit: ${escapeHtml(product.title)}` : 'Add New Product'}</h4>
              <p class="text-[10px] sm:text-[11px] text-neutral-500 font-medium">Changes save to this browser.</p>
            </div>
            <button class="zv-close-x" onclick="store.closeModal()" aria-label="Close" title="Close"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M7 7L17 17M17 7L7 17" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg></button>
          </div>
          <form id="admin-product-form" class="overflow-y-auto p-4 sm:p-6 flex-grow space-y-4">
            <div>
              <label class="block text-xs font-bold text-neutral-800 uppercase tracking-widest mb-1">Product ID (SKU)</label>
              <input type="text" id="p-id" ${isEditMode ? 'readonly' : ''} value="${isEditMode ? escapeHtml(product.id) : escapeHtml(store.newProductDraftId || '')}" class="p-input-form ${isEditMode ? 'bg-neutral-100 text-neutral-500' : ''}" />
              <p class="text-[10px] text-neutral-400 mt-1">${isEditMode ? "This is the product's permanent ID — it can't be changed after creation." : 'Auto-filled from the title as you type. Used as the URL (#/product/&lt;id&gt;), the database ID, and everywhere this product is referenced — edit it now if you want, not later.'}</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div><label class="block text-xs font-bold text-neutral-800 uppercase tracking-widest mb-1">Title *</label><input type="text" id="p-title" required value="${isEditMode ? escapeHtml(product.title) : ''}" class="p-input-form" /></div>
              <div>
                <label class="block text-xs font-bold text-neutral-800 uppercase tracking-widest mb-1">Category *</label>
                <input type="text" id="p-category" required list="p-category-options" value="${isEditMode ? escapeHtml(product.category) : ''}" class="p-input-form" />
                <datalist id="p-category-options">
                  ${[...new Set(store.products.map(p => p.category).filter(Boolean))].map(c => `<option value="${escapeHtml(c)}"></option>`).join('')}
                </datalist>
                <p class="text-[10px] text-neutral-400 mt-1">Pick an existing category from the list, or type a new one — a new category gets its own collection automatically.</p>
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-neutral-50 rounded-2xl border border-neutral-100">
              <div><label class="block text-xs font-bold text-red-600 uppercase tracking-widest mb-1">Price (Rs.) *</label><input type="number" id="p-price" required value="${isEditMode ? product.price : ''}" class="p-input-form" /></div>
              <div><label class="block text-xs font-bold text-neutral-600 uppercase tracking-widest mb-1">Compare-At Price</label><input type="number" id="p-compare-at-price" value="${isEditMode ? product.compareAtPrice : ''}" class="p-input-form" /></div>
              <div>
                <label class="block text-xs font-bold text-neutral-600 uppercase tracking-widest mb-1">Stock</label>
                <div class="flex items-center gap-3 mt-2 text-xs">
                  <label class="flex items-center gap-1.5 font-semibold text-emerald-800"><input type="radio" id="p-stock-in-stock" name="p-stock" value="true" ${isEditMode ? (product.inStock ? 'checked' : '') : 'checked'} /> In</label>
                  <label class="flex items-center gap-1.5 font-semibold text-red-700"><input type="radio" id="p-stock-out-of-stock" name="p-stock" value="false" ${isEditMode && !product.inStock ? 'checked' : ''} /> Out</label>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div><label class="block text-xs font-bold text-black uppercase tracking-widest mb-1">Badge</label><input type="text" id="p-badge" placeholder="Bestseller" value="${isEditMode ? (product.badge || '') : ''}" class="p-input-form" /></div>
              <div class="p-3 bg-red-950 text-white rounded-xl flex items-center justify-between">
                <span class="text-[10px] text-red-300 font-bold uppercase tracking-wider">Flash Sale (⚡)</span>
                <input type="checkbox" id="p-flash-sale" ${isEditMode && product.isFlashSale ? 'checked' : ''} class="w-5 h-5" />
              </div>
            </div>
            <div><label class="block text-xs font-bold text-neutral-800 uppercase tracking-widest mb-1">Description *</label><textarea id="p-description" required rows="3" class="p-input-form">${isEditMode ? escapeHtml(product.description) : ''}</textarea></div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div><label class="block text-xs font-bold text-neutral-800 uppercase tracking-widest mb-1">Tags (comma-separated)</label><input type="text" id="p-tags" value="${isEditMode ? (product.tags || []).join(', ') : ''}" class="p-input-form" /></div>
              <div>
                <label class="block text-xs font-bold text-neutral-800 uppercase tracking-widest mb-1">Product Image</label>
                <input type="file" id="p-image-file" accept="image/*" class="block w-full text-xs text-neutral-600 file:mr-3 file:py-2.5 file:px-3 file:rounded-lg file:border-0 file:bg-neutral-900 file:text-white file:font-bold" />
                <input type="url" id="p-image" value="${isEditMode ? (product.image || (product.images && product.images[0]) || '') : ''}" placeholder="Or paste an image URL" class="p-input-form mt-2" />
                <p class="text-[10px] text-neutral-400 mt-1">New images upload to Cloudinary automatically.</p>
              </div>
            </div>
            <div class="pt-4 border-t border-neutral-100 flex gap-2">
              <button type="button" class="px-5 border border-neutral-300 text-neutral-600 hover:border-red-600 hover:text-red-700 text-xs font-bold py-3 rounded-xl" onclick="store.closeModal()">Cancel</button>
              <button type="submit" class="flex-grow bg-red-600 hover:bg-red-700 text-white font-black text-xs sm:text-sm py-3.5 rounded-xl transition">${isEditMode ? 'Save Changes' : 'Add Product'}</button>
            </div>
          </form>
        </div>
      </div>
    `;
  }

  openAdminModal(action, product = null) {
    store.activeModal = 'product-form';
    store.activeAdminAction = action;
    store.adminEditProduct = product;
    // Generate the new product's ID once, right when the form opens (not at
    // submit time), so it's stable across re-renders and can actually be
    // shown to the admin instead of staying an invisible implementation
    // detail until after saving.
    store.newProductDraftId = action === 'add' ? generateProductId('product', store.products.map(p => p.id)) : null;
    store.notify();
  }

  adminActionEdit(productId) {
    const p = store.products.find(p => p.id === productId);
    if (p) this.openAdminModal('edit', p);
  }

  adminActionDelete(productId) {
    if (confirm('Permanently delete this product?')) store.deleteProduct(productId);
  }

  attachEventListeners() {
    this.initCategoryAutoScroll();
    this.initTestimonialAutoScroll();

    const adminLoginForm = document.getElementById('admin-login-form');
    if (adminLoginForm) {
      adminLoginForm.onsubmit = (e) => {
        e.preventDefault();
        const email = document.getElementById('admin-email').value;
        const p = document.getElementById('admin-password').value;
        store.loginAdmin(email, p);
      };
    }

    // Sign-in screen — client-side validation + inline error states, wired
    // to real Firebase Authentication: email/password (sign in, or create
    // the account on first use).
    const setFieldError = (inputEl, errorEl, message) => {
      inputEl.classList.remove('border-neutral-300');
      inputEl.classList.add('border-red-500');
      errorEl.textContent = message;
      errorEl.classList.remove('hidden');
    };
    const clearFieldError = (inputEl, errorEl) => {
      inputEl.classList.remove('border-red-500');
      inputEl.classList.add('border-neutral-300');
      errorEl.classList.add('hidden');
      errorEl.textContent = '';
    };
    const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

    const authEmailForm = document.getElementById('auth-email-form');
    if (authEmailForm) {
      const emailInput = document.getElementById('auth-email');
      const emailError = document.getElementById('auth-email-error');
      const passwordInput = document.getElementById('auth-email-password');
      const passwordError = document.getElementById('auth-email-password-error');
      const submitBtn = document.getElementById('auth-email-submit');
      const authModeToggle = document.getElementById('auth-mode-toggle');
      const authPageTitle = document.getElementById('auth-page-title');
      const setAuthMode = (nextMode) => {
        const isSignupMode = nextMode === 'signup';
        if (authModeToggle) {
          authModeToggle.dataset.mode = nextMode;
          authModeToggle.textContent = isSignupMode ? 'Sign In' : 'Sign Up';
        }
        if (submitBtn) {
          submitBtn.dataset.mode = nextMode;
          submitBtn.textContent = isSignupMode ? 'Create Account' : 'Continue with Email';
        }
        if (authPageTitle) {
          authPageTitle.textContent = isSignupMode ? 'Create your Zyvron account' : 'Sign in to Zyvron';
        }
      };
      if (authModeToggle) {
        authModeToggle.onclick = () => {
          const nextMode = authModeToggle.dataset.mode === 'signup' ? 'signin' : 'signup';
          setAuthMode(nextMode);
        };
      }
      emailInput.oninput = () => clearFieldError(emailInput, emailError);
      passwordInput.oninput = () => clearFieldError(passwordInput, passwordError);
      authEmailForm.onsubmit = async (e) => {
        e.preventDefault();
        let firstInvalid = null;
        if (!isValidEmail(emailInput.value)) {
          setFieldError(emailInput, emailError, 'Enter a valid email address.');
          firstInvalid = emailInput;
        } else {
          clearFieldError(emailInput, emailError);
        }
        if (passwordInput.value.length < 6) {
          setFieldError(passwordInput, passwordError, 'Password must be at least 6 characters.');
          firstInvalid = firstInvalid || passwordInput;
        } else {
          clearFieldError(passwordInput, passwordError);
        }
        if (firstInvalid) { firstInvalid.focus(); return; }

        submitBtn.disabled = true;
        const originalLabel = submitBtn.textContent;
        submitBtn.textContent = submitBtn.dataset.mode === 'signup' ? 'Creating account…' : 'Signing in…';
        const result = await store.loginCustomerEmail(emailInput.value, passwordInput.value, submitBtn.dataset.mode || 'signin');

        if (store.currentView !== 'auth') return;
        const liveSubmitBtn = document.getElementById('auth-email-submit');
        const livePasswordInput = document.getElementById('auth-email-password');
        const livePasswordError = document.getElementById('auth-email-password-error');

        if (result.ok) {
          store.showToast(submitBtn?.dataset.mode === 'signup' ? 'Account created!' : 'Signed in!', 'success');
          store.currentView = 'my-account';
          store.activeModal = null;
          // FIX: was `store.navigateTo(...)` — Store has no navigateTo()
          // method (only App does), so this threw "store.navigateTo is not
          // a function" right after every successful sign-in/sign-up,
          // silently aborting before the page actually navigated to My
          // Account. We're already inside an App method here, so `this` is
          // the App instance.
          this.navigateTo('#/account');
        } else {
          if (liveSubmitBtn) {
            liveSubmitBtn.disabled = false;
            liveSubmitBtn.textContent = liveSubmitBtn.dataset.mode === 'signup' ? 'Create Account' : 'Continue with Email';
          }
          if (livePasswordInput && livePasswordError) {
            setFieldError(livePasswordInput, livePasswordError, result.message);
            livePasswordInput.focus();
          }
        }
      };
    }

    const accountLogoutBtn = document.getElementById('btn-account-logout');
    if (accountLogoutBtn) accountLogoutBtn.onclick = () => store.logoutCustomer();

    const logoBtn = document.getElementById('btn-logo-home');
    if (logoBtn) {
      logoBtn.onclick = () => {
        if (window.app && typeof window.app.goToCategory === 'function') {
          window.app.goToCategory('all');
        } else {
          store.setCurrentView('store');
        }
      };
    }

    const openNavBtn = document.getElementById('btn-open-nav');
    if (openNavBtn) openNavBtn.onclick = () => store.openModal('nav');

    const openSearchBtn = document.getElementById('btn-open-search');
    if (openSearchBtn) openSearchBtn.onclick = () => store.openModal('search');

    const mobileTrackBtn = document.getElementById('btn-track-order-mobile');
    if (mobileTrackBtn) mobileTrackBtn.onclick = () => this.openTrackingPage();

    const openWishlistBtn = document.getElementById('btn-open-wishlist');
    if (openWishlistBtn) openWishlistBtn.onclick = () => this.goToCategory('wishlist');

    const openCompareBtn = document.getElementById('btn-open-compare');
    if (openCompareBtn) openCompareBtn.onclick = () => {
      if (store.compareList.length > 0) {
        store.openModal('compare');
      } else {
        store.showToast('Tap the ⇅ Compare icon on any 2+ products first', 'info');
      }
    };

    const openCartBtn = document.getElementById('btn-open-cart');
    if (openCartBtn) openCartBtn.onclick = () => this.navigateTo('#/cart');

    document.querySelectorAll('.hero-cta-btn').forEach(btn => {
      btn.onclick = () => {
        const cat = btn.getAttribute('data-category');
        // FIX: this used to set the category in place and then animate-
        // scroll to a hardcoded y=600, which had nothing to do with where
        // that category's real content actually sat on the page — on a
        // shorter/taller layout it visibly overshot and settled somewhere
        // mid-grid instead of at the category's top. Route through
        // goToCategory() instead, same as every other category entry
        // point (nav links, collection cards, filter chips): it gives the
        // category its own URL and lands at the true top of that page,
        // instantly, with no animated overshoot.
        if (cat) this.goToCategory(cat);
      };
    });

    document.querySelectorAll('.category-circle-btn').forEach(btn => {
      btn.onclick = () => {
        const cat = btn.getAttribute('data-category');
        if (cat) this.goToCategory(cat);
      };
    });

    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
      sortSelect.onchange = (e) => store.setSortBy(e.target.value);
    }

    const searchInput = document.getElementById('search-input-field');
    if (searchInput) {
      searchInput.oninput = (e) => store.setSearchQuery(e.target.value);
    }

    document.querySelectorAll('.search-tag-pill').forEach(pill => {
      pill.onclick = () => {
        const tag = pill.getAttribute('data-tag');
        if (tag) store.setTag(tag);
      };
    });

    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
      checkoutForm.onsubmit = async (e) => {
        e.preventDefault();
        const name = document.getElementById('cust-name')?.value;
        const phone = document.getElementById('cust-phone')?.value;
        const city = document.getElementById('cust-city')?.value;
        const address = document.getElementById('cust-address')?.value;

        if (!name || !phone || !city || !address) return;

        const submitBtn = document.getElementById('checkout-submit-btn');
        if (submitBtn) { submitBtn.disabled = true; submitBtn.style.opacity = '0.7'; }

        await store.placeOrder({ name, phone, city, address });
      };
    }

    const trackingForm = document.getElementById('order-tracking-form');
    if (trackingForm) {
      // Builds the status card HTML for a given order. Shared by the first
      // render and by every subsequent live update, so a status change
      // (e.g. an admin clicking Accept) re-renders exactly the same way.
      const renderTrackingResult = (order, code) => {
        const status = order.customerStatus || order.status || 'pending';
        const labels = { pending: ['Pending', 'Your order is awaiting verification.', 'bg-amber-50 border-amber-200 text-amber-800'], accepted: ['Approved', 'Your order has been approved and is being prepared.', 'bg-cyan-50 border-cyan-200 text-cyan-800'], rejected: ['Rejected', 'This order was rejected or cancelled.', 'bg-red-50 border-red-200 text-red-700'], dispatched: ['Dispatched', 'Your package is on the way.', 'bg-violet-50 border-violet-200 text-violet-800'], delivered: ['Delivered', 'Your order has been delivered successfully.', 'bg-emerald-50 border-emerald-200 text-emerald-800'] };
        const [label, desc, classes] = labels[status] || [status, 'Your order status has been updated.', 'bg-neutral-50 border-neutral-200 text-neutral-800'];
        const itemSummary = (order.items || []).map(it => `${escapeHtml(it.product?.title || 'Item')} × ${it.quantity || 1}`).join('<br>') || 'Order details available in your confirmation message.';
        return `
          <div class="mt-1 p-4 rounded-2xl border ${classes}">
            <div class="flex items-center justify-between gap-3">
              <span class="text-[10px] font-black uppercase tracking-widest">Status</span>
              <span class="text-sm font-black">${escapeHtml(label)}</span>
            </div>
            <p class="text-xs font-medium mt-2">${escapeHtml(desc)}</p>
            <p class="text-[10px] font-medium mt-2 opacity-60">🔄 Updates automatically — no need to refresh or search again.</p>
          </div>
          <div class="mt-3 p-4 rounded-2xl bg-neutral-50 border border-neutral-200 text-xs space-y-2">
            <div class="flex justify-between gap-4"><span class="text-neutral-500">Tracking Code</span><strong class="font-mono">${escapeHtml(order.orderNumber || code)}</strong></div>
            <div class="flex justify-between gap-4"><span class="text-neutral-500">Total (COD)</span><strong>${formatPKR(order.total || 0)}</strong></div>
            <div class="pt-2 border-t border-neutral-200"><span class="text-neutral-500">Items</span><div class="font-bold text-neutral-800 mt-1">${itemSummary}</div></div>
          </div>
        `;
      };

      trackingForm.onsubmit = async (e) => {
        e.preventDefault();
        const input = document.getElementById('tracking-code-input');
        const phoneInput = document.getElementById('tracking-phone-input');
        const output = document.getElementById('tracking-output');
        const button = document.getElementById('tracking-submit-btn');
        const code = store.normalizeTrackingCode(input?.value);
        const phone = phoneInput?.value || '';
        if (!code) return;

        // A previous search may still have a live listener running — stop
        // it before starting a new one, so results from an old tracking
        // code can't overwrite the box after a customer searches again.
        if (store._unsubTrackedOrder) {
          store._unsubTrackedOrder();
          store._unsubTrackedOrder = null;
        }

        if (button) { button.disabled = true; button.textContent = 'CHECKING…'; }
        if (output) output.innerHTML = '';
        try {
          const unsub = await store.subscribeOrderForTracking(
            code,
            (order) => {
              // If the customer has navigated away, the output box no
              // longer exists — stop listening instead of doing nothing
              // forever in the background.
              const liveOutput = document.getElementById('tracking-output');
              if (!liveOutput) {
                if (store._unsubTrackedOrder) { store._unsubTrackedOrder(); store._unsubTrackedOrder = null; }
                return;
              }
              liveOutput.innerHTML = renderTrackingResult(order, code);
            },
            () => {
              const liveOutput = document.getElementById('tracking-output');
              if (liveOutput) liveOutput.innerHTML = '<div class="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs font-bold">Order not found, or the phone number does not match this order.</div>';
            },
            phone
          );
          store._unsubTrackedOrder = unsub;
        } catch (error) {
          console.error('Order tracking failed:', error);
          if (output) output.innerHTML = `<div class="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs font-bold">${escapeHtml(error.message || 'Could not load your order right now.')}</div>`;
        } finally {
          if (button) { button.disabled = false; button.textContent = 'TRACK ORDER'; }
        }
      };

      // Coming from "Track This Order" on the Order Confirmed popup: the
      // code is already filled in above — auto-submit once so the status
      // shows immediately without the customer re-typing it. Cleared right
      // away so a later re-render doesn't keep re-submitting.
      if (store.prefillTrackingCode) {
        store.prefillTrackingCode = null;
        store.prefillTrackingPhone = null;
        if (trackingForm.requestSubmit) trackingForm.requestSubmit();
        else trackingForm.dispatchEvent(new Event('submit', { cancelable: true }));
      }

      // "Other orders on this device" chips — one tap fills the code and
      // tracks it immediately instead of the customer retyping it.
      trackingForm.querySelectorAll('.tracking-code-chip').forEach(chip => {
        chip.onclick = () => {
          const input = document.getElementById('tracking-code-input');
          if (input) input.value = chip.dataset.code || '';
          if (trackingForm.requestSubmit) trackingForm.requestSubmit();
          else trackingForm.dispatchEvent(new Event('submit', { cancelable: true }));
        };
      });
    }

    // NOTE: "By Phone Number" tab was removed along with findOrdersByPhone —
    // see the comment above that method's old location for why.

    const complaintForm = document.getElementById('complaint-form');
    if (complaintForm) {
      complaintForm.onsubmit = async (e) => {
        e.preventDefault();
        const code = document.getElementById('complaint-order-code')?.value.trim().toUpperCase();
        const message = document.getElementById('complaint-message')?.value.trim();
        const button = document.getElementById('complaint-submit-btn');
        const output = document.getElementById('complaint-output');
        if (!code || !message) return;
        if (button) { button.disabled = true; button.textContent = 'SUBMITTING…'; }
        if (output) output.innerHTML = '';
        try {
          const reference = await store.submitComplaint(code, message);
          if (output) output.innerHTML = `<div class="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold">Complaint registered. Reference: <span class="font-mono">${escapeHtml(reference)}</span></div>`;
          document.getElementById('complaint-message').value = '';
        } catch (error) {
          console.error('Complaint submission failed:', error);
          if (output) output.innerHTML = `<div class="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-bold">${escapeHtml(error.message || 'Could not submit your complaint.')}</div>`;
        } finally {
          if (button) { button.disabled = false; button.textContent = 'SUBMIT COMPLAINT'; }
        }
      };
    }

    // Review form (only present while a product's Quick View is open)
    if (store.quickViewProduct) {
      const productId = store.quickViewProduct.id;
      const reviewForm = document.getElementById(`review-form-${productId}`);
      if (reviewForm) {
        reviewForm.onsubmit = (e) => {
          e.preventDefault();
          const starsEl = document.getElementById(`review-stars-${productId}`);
          const rating = Number(starsEl?.dataset.rating || this.selectedReviewRating || 0);
          const name = document.getElementById(`review-name-${productId}`)?.value;
          const comment = document.getElementById(`review-comment-${productId}`)?.value;
          store.submitReview({ productId, name, rating, comment }).then(() => {
            this.selectedReviewRating = 0;
          });
        };
      }
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.onsubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById('contact-name')?.value.trim();
        const phone = document.getElementById('contact-phone')?.value.trim();
        const subject = document.getElementById('contact-subject')?.value.trim();
        const messageText = document.getElementById('contact-message')?.value.trim();
        if (!name || !phone || !messageText) return;

        const lines = [
          `New Contact Form Message`,
          `Name: ${name}`,
          `Phone: ${phone}`,
          subject ? `Subject: ${subject}` : null,
          `Message: ${messageText}`
        ].filter(Boolean);
        const waLink = `https://wa.me/923434465290?text=${encodeURIComponent(lines.join('\n'))}`;
        window.open(waLink, '_blank');
        store.showToast('Opening WhatsApp with your message...', 'success');
        contactForm.reset();
      };
    }

    const assistantForm = document.getElementById('assistant-form');
    if (assistantForm) {
      assistantForm.onsubmit = (e) => {
        e.preventDefault();
        const input = document.getElementById('assistant-input');
        const text = input?.value.trim();
        if (!text) return;
        input.value = '';
        this.sendAssistantMessage(text);
      };
    }

    document.querySelectorAll('.assistant-chip').forEach(chip => {
      chip.onclick = () => {
        const text = chip.getAttribute('data-chip');
        if (text) this.sendAssistantMessage(text);
      };
    });
  }

  setHeroSlide(idx) {
    this.currentHeroSlide = idx;
    const track = document.getElementById('hero-slider-track');
    if (track) track.style.transform = `translateX(-${idx * 100}%)`;
    this.updateHeroDots();
    this.restartHeroProgress();
  }

  restartHeroProgress() {
    // Restart the autoplay clock so manual navigation doesn't fight the timer,
    // and re-trigger the progress-bar fill animation on the active dot.
    this.initHeroSlider();
    const bar = document.getElementById('hero-progress-bar');
    if (bar) {
      bar.style.animation = 'none';
      void bar.offsetWidth; // force reflow to restart the CSS animation
      bar.style.animation = '';
    }
    // Replay the eye-catching entrance animation on the newly active slide's text/CTA.
    const activeSlide = document.getElementById(`hero-slide-content-${this.currentHeroSlide}`);
    if (activeSlide) {
      activeSlide.classList.remove('hero-slide-inner-play');
      void activeSlide.offsetWidth;
      activeSlide.classList.add('hero-slide-inner-play');
    }
  }

  nextHeroSlide() {
    this.setHeroSlide((this.currentHeroSlide + 1) % this.heroSlidesCount);
  }

  prevHeroSlide() {
    this.setHeroSlide((this.currentHeroSlide - 1 + this.heroSlidesCount) % this.heroSlidesCount);
  }

  scrollCategoryRow(direction) {
    const row = document.getElementById('category-scroll-row');
    if (row) row.scrollBy({ left: direction * 180, behavior: 'auto' });
  }

  // Auto-scroll animation removed site-wide (was repeatedly firing on a
  // setInterval and was showing up as long-task/forced-reflow console
  // violations). The row still scrolls fine manually via the arrow
  // buttons (scrollCategoryRow) and by swipe/drag — this just stops it
  // moving on its own.
  initCategoryAutoScroll() {
    if (this.categoryAutoScrollTimer) {
      clearInterval(this.categoryAutoScrollTimer);
      this.categoryAutoScrollTimer = null;
    }
  }

  scrollTestimonialRow(direction) {
    const row = document.getElementById('testimonial-scroll-row');
    if (row) row.scrollBy({ left: direction * 288, behavior: 'auto' });
  }

  // Same as initCategoryAutoScroll above — auto-scroll animation removed,
  // manual arrow buttons (scrollTestimonialRow) and swipe/drag still work.
  initTestimonialAutoScroll() {
    if (this.testimonialAutoScrollTimer) {
      clearInterval(this.testimonialAutoScrollTimer);
      this.testimonialAutoScrollTimer = null;
    }
  }

  setCategory(catId) {
    store.setCategory(catId);
  }

  // Used by every nav link (top nav, mobile hamburger drawer, mobile bottom bar,
  // category cards/circles, footer quick links). Navigates to that category's
  // own URL (#/category/<slug>, or #/flash, #/wishlist, #/ for all) and scrolls
  // down to the product grid, so clicking a nav option takes you to a real,
  // bookmarkable/shareable page for that category — not just a client-side
  // filter that resets on refresh.
  goToCategory(catId) {
    if (catId === 'all') {
      if (store.activeModal) store.closeModal();
      store.currentView = 'store';
      store.activeCategory = 'all';
      store.notify();

      const sameRoute = (window.location.hash || '') === '#/' || (window.location.hash || '') === '' || (window.location.hash || '') === '#';
      if (!sameRoute) {
        this.navigateTo('#/');
      }
      return;
    }

    let hash = '#/';
    if (catId === 'flash') hash = '#/flash';
    else if (catId === 'wishlist') hash = '#/wishlist';
    else if (catId && catId !== 'all') hash = '#/category/' + encodeURIComponent(categoryToSlug(catId));
    if (store.activeModal) store.closeModal();
    this.navigateTo(hash);
  }

  addToCart(productId, qty = 1) {
    const product = store.products.find(p => p.id === productId);
    if (product) store.addToCart(product, qty, false);
  }

  subscribeNewsletter() {
    const input = document.getElementById('newsletter-phone');
    const phone = input?.value.trim();
    const phoneValid = /^0[0-9]{10}$/.test(phone || '');

    if (!phoneValid) {
      store.showToast('Enter a valid WhatsApp number (e.g. 03001234567).', 'error');
      return;
    }

    store.saveSubscriberToFirebase(phone).catch(() => {});
    store.showToast('Subscribed for flash sale alerts!', 'success');
    if (input) input.value = '';
  }

  applyCoupon(inputId) {
    const input = document.getElementById(inputId);
    store.applyCoupon(input?.value || '');
  }

  removeCoupon() {
    store.removeCoupon();
  }

  removeFromCart(productId) {
    store.removeFromCart(productId);
  }

  saveForLater(productId) {
    store.moveToSavedForLater(productId);
  }

  moveToCartFromSaved(productId) {
    store.moveToCartFromSaved(productId);
  }

  removeFromSaved(productId) {
    store.removeFromSaved(productId);
  }

  setReviewStar(productId, value) {
    this.selectedReviewRating = value;
    const container = document.getElementById(`review-stars-${productId}`);
    if (container) {
      container.dataset.rating = value;
      container.querySelectorAll('.review-star').forEach(btn => {
        const v = Number(btn.dataset.value);
        btn.textContent = v <= value ? '★' : '☆';
        btn.classList.toggle('text-amber-400', v <= value);
        btn.classList.toggle('text-neutral-300', v > value);
      });
    }
  }

  markReviewHelpful(reviewId) {
    store.markReviewHelpful(reviewId);
  }

  shareProduct(productId) {
    const product = store.products.find(p => p.id === productId);
    if (!product) return;

    const shareText = `Check out ${product.title} at Zyvron Tech — ${formatPKR(product.price)}`;
    // Previously this always shared window.location.origin — the bare
    // homepage — no matter which product was open. Now that every product
    // has its own #/product/<id> URL, share that product's actual page.
    const shareUrl = `${window.location.origin}${window.location.pathname}#/product/${encodeURIComponent(product.id)}`;

    if (navigator.share) {
      navigator.share({ title: product.title, text: shareText, url: shareUrl }).catch(() => {});
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(`${shareText}\n${shareUrl}`)
        .then(() => store.showToast('Product link copied to clipboard!', 'success'))
        .catch(() => store.showToast('Could not copy link.', 'error'));
    } else {
      store.showToast('Sharing is not supported on this browser.', 'error');
    }
  }

  copyTrackingCode(orderNumber) {
    const code = store.normalizeTrackingCode(orderNumber);
    if (!code) return;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code)
        .then(() => store.showToast('Tracking code copied.', 'success'))
        .catch(() => store.showToast(`Your tracking code is ${code}`, 'info'));
    } else {
      store.showToast(`Your tracking code is ${code}`, 'info');
    }
  }

  updateQty(productId, delta) {
    store.updateQuantity(productId, delta);
  }

  toggleWishlist(productId) {
    store.toggleWishlist(productId);
  }

  // Navigates to that product's own URL (#/product/<id>) rather than just
  // flipping in-memory modal state, so every product now has a real,
  // shareable, refresh-safe address — applyRoute() (the router) is what
  // actually opens the quick-view once the URL changes.
  openQuickView(productId) {
    const product = store.products.find(p => p.id === productId);
    if (product) this.navigateTo('#/product/' + encodeURIComponent(product.id));
  }

  setQuickViewImg(idx) {
    this.activeQuickViewImgIndex = idx;
    store.notify();
  }

  setModalQty(delta) {
    this.quickViewQty = Math.max(1, this.quickViewQty + delta);
    store.notify();
  }

  setProductTab(tab) {
    this.activeProductTab = tab;
    store.notify();
  }

  selectProductColor(color) {
    this.selectedProductColor = color;
    store.notify();
  }

  buyNowDirect(productId, qty = 1) {
    const product = store.products.find(p => p.id === productId);
    if (product) {
      // Buy Now is a separate, single-item purchase — it must never merge
      // into or affect the customer's actual multi-item cart (previously it
      // called addToCart(), which both showed the item in the cart
      // drawer/badge unexpectedly AND meant completing a Buy Now order
      // wiped the customer's whole real cart too, since placeOrder() always
      // cleared the entire cart on success).
      store.startBuyNowCheckout(product, qty);
      store.openModal('checkout');
    }
  }

  setDrawerTab(tab) {
    this.activeDrawerTab = tab;
    store.notify();
  }

  clearSearch() {
    store.setSearchQuery('');
  }

  resetFilters() {
    store.setCategory('all');
    store.setSearchQuery('');
  }

  // ===== Product Grid Pagination =====
  goToPage(pageNum) {
    store.goToPage(pageNum);
  }

  nextPage() {
    const totalPages = store.getTotalPages(store.getFilteredProducts().length);
    store.nextPage(totalPages);
  }

  prevPage() {
    store.prevPage();
  }

  // ===== Product Comparison =====
  toggleCompare(productId) {
    store.toggleCompare(productId);
  }

  clearWishlist() {
    if (confirm('Clear all items from your wishlist?')) {
      store.clearWishlist();
    }
  }

  removeFromCompare(productId) {
    store.removeFromCompare(productId);
  }

  clearCompare() {
    store.clearCompare();
  }

  // ===== AI Product Assistant =====
  sendAssistantMessage(text) {
    store.addChatMessage('user', text);
    store.setAssistantTyping(true);

    // Simulated "thinking" delay so the typing indicator reads naturally.
    setTimeout(() => {
      const reply = this.getAssistantResponse(text);
      store.setAssistantTyping(false);
      store.addChatMessage('assistant', reply);
    }, 550 + Math.random() * 500);
  }

  clearAssistantChat() {
    store.clearChat();
  }

  // Keyword-matching response engine scoped strictly to Zyvron Tech Accessories' own catalog.
  getAssistantResponse(rawQuery) {
    const q = rawQuery.toLowerCase();
    const products = store.products;

    const OFF_TOPIC_REPLY = "Please ask me something related to Zyvron Tech Accessories' products. I'm here to help you choose the right product.";

    const STOPWORDS = new Set(['the','and','with','for','you','your','are','was','were','this','that','have','has','from','into','about','what','which','who','whom','can','will','would','should','could','does','did','not','but','all','any','some','out','get','got','how','when','where','why','tell','me','please','hey','hello','hi']);

    const tokenize = (str) => str.toLowerCase().split(/[^a-z0-9]+/).filter(w => w.length > 2 && !STOPWORDS.has(w));

    // Build a vocabulary of every meaningful word that appears in the actual catalog.
    const productWords = new Set();
    products.forEach(p => {
      tokenize(p.title).forEach(w => productWords.add(w));
      tokenize(p.category).forEach(w => productWords.add(w));
      p.tags.forEach(t => tokenize(t).forEach(w => productWords.add(w)));
    });

    // General shopping/e-commerce vocabulary, including common accessory terms we may
    // or may not currently stock — these still count as "on-topic" store questions.
    const shoppingWords = ['price','prices','cost','costs','cheap','cheapest','expensive','buy','order','recommend','recommendation','suggest','best','compare','comparison','feature','features','spec','specs','specification','stock','available','availability','discount','sale','gift','need','suitable','which','product','products','store','shop','delivery','cod','whatsapp','earbud','earbuds','earphone','earphones','charger','chargers','power','bank','battery','case','cases','cover','covers','cable','cables','wireless','bluetooth','accessory','accessories','gadget','gadgets','headphone','headphones','speaker','speakers','smartwatch','watch','gaming','mouse','keyboard','mic','microphone'];

    const queryWords = tokenize(q);
    const isOnTopic = queryWords.length > 0 && queryWords.some(w => productWords.has(w) || shoppingWords.includes(w));

    if (!isOnTopic) {
      return OFF_TOPIC_REPLY;
    }

    // Find products the query directly mentions (by title/tag/category words).
    const matched = products.filter(p => {
      const haystack = (p.title + ' ' + p.category + ' ' + p.tags.join(' ')).toLowerCase();
      return queryWords.some(w => haystack.includes(w));
    });

    const suggestFromCategory = () => {
      const categoryHints = {
        earbud: 'Audio & Speakers', earphone: 'Audio & Speakers', headphone: 'Audio & Speakers', speaker: 'Audio & Speakers', mic: 'Audio & Speakers', microphone: 'Audio & Speakers',
        watch: 'Smart Wearables', smartwatch: 'Smart Wearables',
        gaming: 'Gaming & PC Accessories', mouse: 'Gaming & PC Accessories', keyboard: 'Gaming & PC Accessories',
        phone: 'Mobile Accessories', mobile: 'Mobile Accessories', stand: 'Mobile Accessories'
      };
      for (const [hint, cat] of Object.entries(categoryHints)) {
        if (queryWords.includes(hint)) {
          const inCat = products.filter(p => p.category === cat).slice(0, 3);
          if (inCat.length) {
            return `We don't currently have an exact match for that, but here's what we do have close by: ${inCat.map(p => `<strong>${p.title}</strong> (${formatPKR(p.price)})`).join(', ')}. Want more details on any of these?`;
          }
        }
      }
      return "I couldn't find that exact item in our current catalog. We carry Audio & Speakers, Smart Wearables, Gaming & PC Accessories, and Mobile Accessories — could you tell me a bit more about what you need?";
    };

    // Comparison intent
    if (q.includes('compare') || q.includes(' vs ') || q.includes(' or ')) {
      if (matched.length >= 2) {
        const [a, b] = matched;
        return `Comparing <strong>${a.title}</strong> (${formatPKR(a.price)}) vs <strong>${b.title}</strong> (${formatPKR(b.price)}): the first rates ${a.rating}★ with "${(a.features[0] || 'a great feature')}", while the second rates ${b.rating}★ with "${(b.features[0] || 'a great feature')}". Want me to add both to the Compare table for a full side-by-side?`;
      }
      return "Tell me the two product names (or types) you'd like compared, and I'll break down price, rating, and features for each.";
    }

    // Cheapest / budget intent
    if (q.includes('cheap') || q.includes('budget') || q.includes('lowest price') || q.includes('affordable')) {
      if (matched.length === 0) return suggestFromCategory();
      const cheapest = [...matched].sort((a, b) => a.price - b.price)[0];
      return `Our most affordable pick in that category is <strong>${cheapest.title}</strong> at ${formatPKR(cheapest.price)} (${cheapest.rating}★, ${cheapest.reviews} reviews). Want to add it to your cart?`;
    }

    // Best / recommend intent
    if (q.includes('best') || q.includes('recommend') || q.includes('suggest') || q.includes('gift') || q.includes('suitable') || q.includes('which')) {
      const pool = matched.length ? matched : products;
      const best = [...pool].sort((a, b) => b.rating - a.rating || b.reviews - a.reviews)[0];
      return `I'd recommend <strong>${best.title}</strong> — it's rated ${best.rating}★ from ${best.reviews} reviews at ${formatPKR(best.price)}. Key feature: "${(best.features[0] || 'a great feature')}". Want the price of similar products too?`;
    }

    // Direct product match — give details
    if (matched.length > 0) {
      const p = matched[0];
      return `<strong>${p.title}</strong> costs ${formatPKR(p.price)} (was ${formatPKR(p.compareAtPrice)}), rated ${p.rating}★ from ${p.reviews} reviews. Top features: ${(p.features || []).slice(0, 2).join(', ')}. It's currently ${p.inStock ? 'in stock ✅' : 'out of stock'}. Want me to add it to your cart or compare it with something else?`;
    }

    return suggestFromCategory();
  }
}

// Boot the storefront defensively: if anything in App's constructor/init
// throws (a bad product record, a browser API that's missing, etc.), the
// page must never go silently blank. Show a visible, recoverable message
// with the real error instead — that's the difference between "site is
// down" and "something broke, here's what and how to recover."
try {
  window.app = new App();
} catch (bootError) {
  console.error('Zyvron failed to start:', bootError);
  const mount = document.getElementById('app');
  if (mount) {
    mount.innerHTML = `
      <div style="min-height:70vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;text-align:center;color:#fff;font-family:sans-serif;">
        <div style="font-size:40px;margin-bottom:12px;">⚠️</div>
        <h1 style="font-size:18px;font-weight:800;margin-bottom:8px;">Something went wrong loading the store</h1>
        <p style="font-size:13px;opacity:0.7;max-width:320px;margin-bottom:18px;">Please reload the page. If this keeps happening, take a screenshot of this message and send it over.</p>
        <button onclick="location.reload()" style="background:#00D9FF;color:#000;font-weight:800;padding:10px 24px;border-radius:12px;border:none;font-size:14px;">Reload</button>
        <p style="font-size:10px;opacity:0.4;margin-top:16px;max-width:320px;word-break:break-word;">${(bootError && bootError.message) ? bootError.message : bootError}</p>
      </div>
    `;
  }
}

/* ================================================================
   Zyvron analytics: one session-aware event stream for QA and Firestore.
   Delegated listeners keep this working across the app's re-renders.
   ================================================================ */
(function initZyvronTracker() {
  const sessionKey = '_zyvron_tracker_sid';
  let sessionId = localStorage.getItem(sessionKey);
  if (!sessionId) {
    sessionId = `s_${Math.random().toString(36).slice(2, 15)}`;
    localStorage.setItem(sessionKey, sessionId);
  }

  const logEntries = [];
  const trackerPanel = document.createElement('aside');
  trackerPanel.className = 'zv-analytics-panel';
  trackerPanel.hidden = true;
  trackerPanel.setAttribute('aria-label', 'Analytics event log');
  trackerPanel.innerHTML = '<h2 class="zv-analytics-title">Live event tracking</h2><div class="zv-analytics-log"></div>';

  const renderLog = (eventType, metadata) => {
    const log = trackerPanel.querySelector('.zv-analytics-log');
    const entry = document.createElement('div');
    entry.className = 'zv-analytics-entry';
    const time = document.createElement('span');
    time.className = 'zv-analytics-time';
    time.textContent = `[${new Date().toLocaleTimeString()}]`;
    entry.append(time, document.createTextNode(`${eventType} ${JSON.stringify(metadata)}`));
    log.prepend(entry);
    logEntries.unshift(entry);
    if (logEntries.length > 30) logEntries.pop()?.remove();
  };

  async function trackEvent(eventType, metadata = {}) {
    const payload = {
      sessionId,
      eventType,
      url: window.location.href,
      referrer: document.referrer || null,
      screenSize: `${window.innerWidth}x${window.innerHeight}`,
      metadata,
      clientTimestamp: new Date().toISOString()
    };
    renderLog(eventType, metadata);

    const db = window.ZYVRON_FIREBASE?.db;
    if (!db) return;
    try {
      const { addDoc, collection, serverTimestamp } = await import(
        'https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js'
      );
      await addDoc(collection(db, 'analytics_events'), {
        ...payload,
        timestamp: serverTimestamp()
      });
    } catch (error) {
      console.warn('Analytics event could not be saved:', error);
    }
  }

  document.addEventListener('click', (event) => {
    const target = event.target.closest('button, a, [data-track], [data-product-id], .cloudinary-img, img[src*="res.cloudinary.com"]');
    if (!target || trackerPanel.contains(target)) return;

    const cloudinaryImage = target.closest('.cloudinary-img, img[src*="res.cloudinary.com"]');
    trackEvent(cloudinaryImage ? 'image_click' : 'click', {
      elementId: target.id || null,
      label: target.dataset.track || target.getAttribute('aria-label') || target.textContent.trim().slice(0, 80) || null,
      productId: target.dataset.productId || target.closest('[data-product-id]')?.dataset.productId || null,
      assetType: cloudinaryImage ? 'image' : null,
      cloudinaryPublicId: cloudinaryImage?.dataset.publicId || null
    });
  });

  function wireMedia(media) {
    if (media.dataset.zvTracked) return;
    media.dataset.zvTracked = 'true';
    ['play', 'pause', 'ended'].forEach((eventType) => {
      media.addEventListener(eventType, () => trackEvent(
        eventType === 'ended' ? 'media_completed' : `media_${eventType}`,
        {
          assetType: media.tagName.toLowerCase(),
          cloudinaryPublicId: media.dataset.publicId || null,
          currentTime: Math.round(media.currentTime || 0)
        }
      ));
    });
  }

  const mediaObserver = new MutationObserver(() => {
    document.querySelectorAll('video[data-public-id], .cloudinary-img, img[src*="res.cloudinary.com"]').forEach(wireMedia);
  });
  mediaObserver.observe(document.body, { childList: true, subtree: true });
  document.querySelectorAll('video[data-public-id], .cloudinary-img, img[src*="res.cloudinary.com"]').forEach(wireMedia);
  trackEvent('pageview', { path: window.location.pathname, hash: window.location.hash || null });
  window.ZYVRON_TRACK_EVENT = trackEvent;
})();

/* =========================================================
   ✨ EXTRA FEATURES — Ripple clicks, Confetti burst on Add-to-Cart,
   Cart bump animation, Back-to-top button with scroll-progress ring.
   Self-contained — wraps existing app methods, doesn't modify them.
   ========================================================= */
(function () {
  // ---- Ripple effect on button clicks ----
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('button, .hero-cta-btn, .category-circle-btn, .search-tag-pill');
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const ripple = document.createElement('span');
    ripple.className = 'te-ripple';
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
    ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';

    const computedPosition = getComputedStyle(btn).position;
    if (computedPosition === 'static') btn.style.position = 'relative';
    if (!btn.style.overflow) btn.style.overflow = 'hidden';

    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 650);
  }, true);

  // ---- Track last click position (used as the confetti origin) ----
  let lastClickX = window.innerWidth / 2;
  let lastClickY = window.innerHeight / 2;
  document.addEventListener('click', (e) => {
    lastClickX = e.clientX;
    lastClickY = e.clientY;
  }, true);

  // ---- Confetti burst ----
  function fireConfetti(x, y) {
    // Re-enabled: bold/eye-catching effects approved, auto-play OK.
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const colors = ['#E50914', '#FFB020', '#22C55E', '#3B82F6', '#A855F7'];
    const pieceCount = 18;
    for (let i = 0; i < pieceCount; i++) {
      const piece = document.createElement('div');
      piece.className = 'te-confetti-piece';
      piece.style.background = colors[i % colors.length];
      piece.style.left = x + 'px';
      piece.style.top = y + 'px';
      document.body.appendChild(piece);

      const angle = (Math.PI * 2 * i) / pieceCount + Math.random() * 0.5;
      const distance = 60 + Math.random() * 70;
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance - 40;
      const rotate = Math.random() * 360;

      const anim = piece.animate([
        { transform: 'translate(0,0) rotate(0deg)', opacity: 1 },
        { transform: `translate(${dx}px, ${dy + 90}px) rotate(${rotate}deg)`, opacity: 0 }
      ], {
        duration: 700 + Math.random() * 300,
        easing: 'cubic-bezier(.22,.61,.36,1)'
      });
      anim.onfinish = () => piece.remove();
      setTimeout(() => piece.remove(), 1200);
    }
  }
  // Exposed so App._renderInner() can fire a celebration burst for moments
  // outside a click handler (e.g. centered on screen when the order-success
  // modal first opens), without duplicating this function or its guards.
  window.__zvFireConfetti = fireConfetti;

  // ---- Cart icon bump animation ----
  function bumpCart() {
    const btn = document.getElementById('btn-open-cart');
    if (!btn) return;
    btn.classList.remove('cart-bump');
    void btn.offsetWidth; // force reflow so the animation can restart
    btn.classList.add('cart-bump');
  }

  // ---- Hook into app.addToCart / app.buyNowDirect without touching original logic ----
  function wireCelebrationEffects() {
    if (!window.app) return;

    if (typeof window.app.addToCart === 'function' && !window.app.__teWrapped) {
      const originalAddToCart = window.app.addToCart.bind(window.app);
      window.app.addToCart = function (productId, qty = 1) {
        originalAddToCart(productId, qty);
        fireConfetti(lastClickX, lastClickY);
        bumpCart();
      };
    }

    if (typeof window.app.buyNowDirect === 'function' && !window.app.__teWrapped) {
      const originalBuyNow = window.app.buyNowDirect.bind(window.app);
      window.app.buyNowDirect = function (productId, qty = 1) {
        fireConfetti(lastClickX, lastClickY);
        originalBuyNow(productId, qty);
      };
    }

    window.app.__teWrapped = true;
  }
  wireCelebrationEffects();

  // Re-wire celebration effects after every store re-render, just in case
  // the app instance methods ever get reassigned (defensive, cheap check).
  if (window.store && typeof window.store.subscribe === 'function') {
    window.store.subscribe(() => wireCelebrationEffects());
  }

  // ---- Wishlist heart "pop" — plays once, only when a product is newly
  // wishlisted (never on un-wishlist), on every button showing that
  // product (product-card icon + product-detail-page link). ----
  function wireWishlistPop() {
    if (!window.app) return;
    if (typeof window.app.toggleWishlist === 'function' && !window.app.__teWishlistWrapped) {
      const originalToggleWishlist = window.app.toggleWishlist.bind(window.app);
      window.app.toggleWishlist = function (productId) {
        const wasLiked = window.store.isWishlisted(productId);
        originalToggleWishlist(productId);
        if (!wasLiked && window.store.isWishlisted(productId)) {
          requestAnimationFrame(() => {
            document.querySelectorAll(`[data-wishlist-id="${productId}"]`).forEach(el => {
              el.classList.remove('zv-heart-pop');
              void el.offsetWidth; // force reflow so the animation can restart
              el.classList.add('zv-heart-pop');
            });
          });
        }
      };
      window.app.__teWishlistWrapped = true;
    }
  }
  wireWishlistPop();
  if (window.store && typeof window.store.subscribe === 'function') {
    window.store.subscribe(() => wireWishlistPop());
  }

  // ---- About-page stat count-up — animates 0 → target once, only right
  // after a genuine navigation to About (renderAboutPage only stamps the
  // data-zv-countup attribute when its justEntered param is true), never
  // replayed by an unrelated re-render while already on the page. ----
  function wireCountUp() {
    const els = document.querySelectorAll('[data-zv-countup]');
    if (!els.length) return;
    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    els.forEach(el => {
      const target = parseInt(el.dataset.zvCountup, 10);
      const suffix = el.dataset.zvSuffix || '';
      el.removeAttribute('data-zv-countup'); // belt-and-suspenders: never re-trigger
      el.removeAttribute('data-zv-suffix');
      if (!Number.isFinite(target)) return;
      if (reduceMotion) { el.textContent = target + suffix; return; }
      const duration = 1100;
      const start = performance.now();
      function tick(now) {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }
  if (window.store && typeof window.store.subscribe === 'function') {
    window.store.subscribe(() => requestAnimationFrame(wireCountUp));
  }
  wireCountUp();

  // ---- ZYVRON 2.0: Magnetic CTA hover (desktop / fine-pointer only) ----
  // Subtly pulls primary buttons toward the cursor on hover. No-op on touch.
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const MAGNET_SELECTOR = '.hero-cta-btn, .premium-btn';
  const MAGNET_STRENGTH = 0.18;
  const MAGNET_MAX = 10; // px

  function wireMagneticButtons() {
    // Re-enabled: bold/eye-catching effects approved. Still desktop-only
    // (fine pointer + real hover) and skipped for reduced-motion users.
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!canHover) return;
    document.querySelectorAll(MAGNET_SELECTOR).forEach(btn => {
      if (btn.dataset.zvMagnetic) return;
      btn.dataset.zvMagnetic = 'true';
      btn.classList.add('zv-magnetic');

      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const relX = (e.clientX - rect.left - rect.width / 2) * MAGNET_STRENGTH;
        const relY = (e.clientY - rect.top - rect.height / 2) * MAGNET_STRENGTH;
        const mx = Math.max(-MAGNET_MAX, Math.min(MAGNET_MAX, relX));
        const my = Math.max(-MAGNET_MAX, Math.min(MAGNET_MAX, relY));
        btn.style.setProperty('--mx', `${mx}px`);
        btn.style.setProperty('--my', `${my}px`);
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.setProperty('--mx', '0px');
        btn.style.setProperty('--my', '0px');
      });
    });
  }
  wireMagneticButtons();
  if (window.store && typeof window.store.subscribe === 'function') {
    window.store.subscribe(() => wireMagneticButtons());
  }

})();

// =====================================================================
// ZYVRON 2.1 — Lightbox, parallax, particles, cursor trail, swipe & perf
// All additions here are non-invasive: they wrap/observe existing store
// and app methods rather than editing their internals, so nothing above
// this block needs to change for these effects to work.
// =====================================================================
(function () {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canHoverFine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  // ---- Small debounce helper ----
  function debounce(fn, wait) {
    let t = null;
    const debounced = (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), wait);
    };
    debounced.flush = (...args) => {
      clearTimeout(t);
      fn(...args);
    };
    return debounced;
  }

  // ---- 0. Safety net: body scroll must never stay locked ----
  // The app already toggles document.body.style.overflow based on
  // store.activeModal inside its render methods. That's fine when a full
  // render runs, but it's a side effect buried two render functions deep —
  // if any future code path calls notify() without going through both of
  // them, or a modal closes via a route not wired to store.closeModal(),
  // the lock can survive after the modal is gone and the page will look
  // "stuck" (can't scroll). This wraps open/closeModal so the lock is
  // always explicitly set to match reality, independent of render timing.
  if (window.store && !window.store.__zvScrollLockWrapped) {
    const originalOpenModal = window.store.openModal.bind(window.store);
    const originalCloseModal = window.store.closeModal.bind(window.store);

    window.store.openModal = function (modalName, payload = null) {
      originalOpenModal(modalName, payload);
      document.body.style.overflow = 'hidden';
    };

    window.store.closeModal = function () {
      originalCloseModal();
      document.body.style.overflow = '';
    };

    window.store.__zvScrollLockWrapped = true;
  }

  // Belt-and-suspenders: Escape key and any click on something that looks
  // like a modal-close control also force-clears the lock a tick later, in
  // case a click handler closes a modal through a path other than
  // store.closeModal() (e.g. inline onclick chains that call closeModal()
  // alongside other logic in the same handler).
  document.addEventListener('click', (e) => {
    if (e.target.closest('[onclick*="closeModal"]')) {
      setTimeout(() => {
        if (!window.store || !window.store.activeModal) {
          document.body.style.overflow = '';
        }
      }, 50);
    }
  }, true);

  // Self-healing: if someone tries to scroll/swipe and the body is locked
  // but no modal is actually showing, the lock is stale — clear it
  // immediately instead of leaving the page stuck until some other click
  // happens to trigger a re-render.
  function zvSelfHealScrollLock() {
    if (
      document.body.style.overflow === 'hidden' &&
      (!window.store || !window.store.activeModal)
    ) {
      document.body.style.overflow = '';
    }
  }
  document.addEventListener('touchstart', zvSelfHealScrollLock, { passive: true });
  document.addEventListener('wheel', zvSelfHealScrollLock, { passive: true });

  // ---- 1. Debounce the localStorage write on cart mutations ----
  // Rapid +/- clicks on cart quantity were writing to localStorage on
  // every single click. The UI still updates instantly (store.notify()
  // is untouched); only the persistence write is coalesced.
  if (window.store && typeof window.store.saveCart === 'function' && !window.store.__zvSaveCartDebounced) {
    const originalSaveCart = window.store.saveCart.bind(window.store);
    const debouncedSaveCart = debounce(originalSaveCart, 400);
    window.store.saveCart = debouncedSaveCart;
    window.store.__zvSaveCartDebounced = true;
    // Make sure the last pending write isn't lost if the tab closes.
    window.addEventListener('beforeunload', () => debouncedSaveCart.flush());
    window.addEventListener('pagehide', () => debouncedSaveCart.flush());
  }

  // ---- 2. Lightbox / image zoom ----
  let lbImages = [];
  let lbIndex = 0;
  let lbEl = null;

  function buildLightbox() {
    if (lbEl) return lbEl;
    const el = document.createElement('div');
    el.className = 'zv-lightbox';
    el.innerHTML = `
      <div class="zv-lightbox-backdrop"></div>
      <button class="zv-close-x zv-close-x--corner" aria-label="Close" title="Close"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M7 7L17 17M17 7L7 17" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg></button>
      <button class="zv-lightbox-arrow zv-lightbox-prev" aria-label="Previous image">‹</button>
      <img class="zv-lightbox-img" alt="" />
      <button class="zv-lightbox-arrow zv-lightbox-next" aria-label="Next image">›</button>
      <div class="zv-lightbox-count"></div>
    `;
    document.body.appendChild(el);
    el.querySelector('.zv-lightbox-backdrop').addEventListener('click', closeLightbox);
    el.querySelector('.zv-close-x').addEventListener('click', closeLightbox);
    el.querySelector('.zv-lightbox-prev').addEventListener('click', () => stepLightbox(-1));
    el.querySelector('.zv-lightbox-next').addEventListener('click', () => stepLightbox(1));

    // Touch swipe navigation inside the lightbox.
    let touchStartX = 0;
    let touchDeltaX = 0;
    el.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
      touchDeltaX = 0;
    }, { passive: true });
    el.addEventListener('touchmove', (e) => {
      touchDeltaX = e.touches[0].clientX - touchStartX;
    }, { passive: true });
    el.addEventListener('touchend', () => {
      if (Math.abs(touchDeltaX) > 50) stepLightbox(touchDeltaX < 0 ? 1 : -1);
    });

    lbEl = el;
    return el;
  }

  function renderLightboxFrame() {
    if (!lbEl) return;
    const img = lbEl.querySelector('.zv-lightbox-img');
    img.src = lbImages[lbIndex];
    const count = lbEl.querySelector('.zv-lightbox-count');
    count.textContent = lbImages.length > 1 ? `${lbIndex + 1} / ${lbImages.length}` : '';
    const showArrows = lbImages.length > 1;
    lbEl.querySelector('.zv-lightbox-prev').style.display = showArrows ? '' : 'none';
    lbEl.querySelector('.zv-lightbox-next').style.display = showArrows ? '' : 'none';
  }

  function stepLightbox(delta) {
    if (lbImages.length < 2) return;
    lbIndex = (lbIndex + delta + lbImages.length) % lbImages.length;
    renderLightboxFrame();
  }

  function closeLightbox() {
    if (!lbEl) return;
    lbEl.classList.remove('open');
    // No body-scroll handling here on purpose: the lightbox only ever opens
    // on top of the already-open Quick View modal, which already owns the
    // body scroll lock (via store.activeModal). Managing a second, separate
    // lock here previously fought with that one and could leave scrolling
    // disabled after closing. Quick View's own close path is what restores
    // scrolling, so this stays a purely visual close.
  }

  document.addEventListener('keydown', (e) => {
    if (!lbEl || !lbEl.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') stepLightbox(-1);
    if (e.key === 'ArrowRight') stepLightbox(1);
  });

  // Exposed on window.app so it can be called from onclick="app.openLightbox()"
  // in the quick-view template without editing any render methods.
  function attachLightbox() {
    if (!window.app || window.app.__zvLightboxAttached) return;
    window.app.openLightbox = function (index) {
      const product = window.store && window.store.quickViewProduct;
      if (!product) return;
      lbImages = product.images && product.images.length > 0 ? product.images : [product.image];
      lbIndex = typeof index === 'number' ? index : (window.app.activeQuickViewImgIndex || 0);
      const el = buildLightbox();
      renderLightboxFrame();
      requestAnimationFrame(() => {
        el.classList.add('open');
      });
    };
    window.app.__zvLightboxAttached = true;
  }
  attachLightbox();
  if (window.store && typeof window.store.subscribe === 'function') {
    window.store.subscribe(() => attachLightbox());
  }

  // ---- 2b. Order Confirmed popup: live status, wired automatically ----
  // The moment a customer places an order, the Order Confirmed popup opens
  // (see Store.placeOrder). This subscribes that popup's own Status badge
  // to Firestore the instant it's on screen — no click needed — so if an
  // admin accepts the order while the customer is still looking at the
  // confirmation screen, it updates from Pending to Accepted right there.
  let _successStatusUnsub = null;
  let _successStatusOrderNumber = null;

  function wireOrderSuccessLiveStatus() {
    const isOpen = window.store && window.store.activeModal === 'order-success' && window.store.lastOrder;

    if (!isOpen) {
      if (_successStatusUnsub) { _successStatusUnsub(); _successStatusUnsub = null; _successStatusOrderNumber = null; }
      return;
    }

    const orderNumber = window.store.lastOrder.orderNumber;
    if (_successStatusOrderNumber === orderNumber && _successStatusUnsub) return; // already live for this order

    if (_successStatusUnsub) { _successStatusUnsub(); _successStatusUnsub = null; }
    _successStatusOrderNumber = orderNumber;

    const labels = {
      pending: ['Pending', 'bg-amber-50 text-amber-700 border-amber-200', '⏳'],
      accepted: ['Approved', 'bg-cyan-50 text-cyan-700 border-cyan-200', '⚡'],
      rejected: ['Rejected', 'bg-red-50 text-red-600 border-red-200', '✕'],
      dispatched: ['Dispatched', 'bg-violet-50 text-violet-700 border-violet-200', '🚚'],
      delivered: ['Delivered', 'bg-emerald-50 text-emerald-700 border-emerald-200', '📦']
    };

    window.store.subscribeOrderForTracking(
      orderNumber,
      (order) => {
        const badge = document.getElementById('order-success-status-badge');
        // Popup may have closed (or moved to a different order) between the
        // async lookup resolving and now — stop instead of writing into a
        // stale/missing element.
        if (!badge || !window.store || window.store.activeModal !== 'order-success' || !window.store.lastOrder || window.store.lastOrder.orderNumber !== orderNumber) {
          if (_successStatusUnsub) { _successStatusUnsub(); _successStatusUnsub = null; _successStatusOrderNumber = null; }
          return;
        }
        const status = order.customerStatus || order.status || 'pending';
        const [label, classes, icon] = labels[status] || [status, 'bg-neutral-50 text-neutral-700 border-neutral-200', '•'];
        badge.className = `text-[10px] font-black uppercase tracking-wide px-2.5 py-1 rounded-full border ${classes}`;
        badge.textContent = `${icon} ${label}`;
      },
      () => { /* order not found yet (Firestore write may still be in flight) — leave the initial "Pending" badge as-is */ },
      window.store.lastOrder.customer?.phone || ''
    ).then((unsub) => {
      // Only keep the listener if we're still on the same order/popup by
      // the time the async subscribe resolves.
      if (_successStatusOrderNumber === orderNumber && window.store.activeModal === 'order-success') {
        _successStatusUnsub = unsub;
      } else if (unsub) {
        unsub();
      }
    }).catch(() => {});
  }
  wireOrderSuccessLiveStatus();
  if (window.store && typeof window.store.subscribe === 'function') {
    window.store.subscribe(() => wireOrderSuccessLiveStatus());
  }

  // ---- 3. Swipe gestures: gallery (quick view) + cart row swipe-to-delete ----
  if (isTouch) {
    document.addEventListener('touchstart', (e) => {
      const galleryEl = e.target.closest('.zv-gallery-swipe');
      if (galleryEl) {
        galleryEl.dataset.zvTouchX = e.touches[0].clientX;
        return;
      }
      const row = e.target.closest('.zv-swipe-row');
      if (row) {
        row.dataset.zvTouchX = e.touches[0].clientX;
        row.dataset.zvTouchDx = 0;
      }
    }, { passive: true });

    document.addEventListener('touchmove', (e) => {
      const row = e.target.closest('.zv-swipe-row');
      if (!row || !row.dataset.zvTouchX) return;
      const dx = e.touches[0].clientX - parseFloat(row.dataset.zvTouchX);
      // Only allow swiping left (to reveal delete), clamp the range.
      const clamped = Math.max(-90, Math.min(0, dx));
      row.dataset.zvTouchDx = clamped;
      row.style.transform = `translateX(${clamped}px)`;
      row.classList.toggle('zv-swipe-armed', clamped <= -60);
    }, { passive: true });

    document.addEventListener('touchend', (e) => {
      const galleryEl = e.target.closest('.zv-gallery-swipe');
      if (galleryEl && galleryEl.dataset.zvTouchX) {
        const dx = (e.changedTouches[0].clientX - parseFloat(galleryEl.dataset.zvTouchX));
        if (Math.abs(dx) > 40 && window.app && typeof window.app.setQuickViewImg === 'function') {
          const product = window.store && window.store.quickViewProduct;
          const total = product && product.images ? product.images.length : 1;
          if (total > 1) {
            const current = window.app.activeQuickViewImgIndex || 0;
            const next = dx < 0 ? (current + 1) % total : (current - 1 + total) % total;
            window.app.setQuickViewImg(next);
          }
        }
        delete galleryEl.dataset.zvTouchX;
        return;
      }

      const row = e.target.closest('.zv-swipe-row');
      if (!row) return;
      const dx = parseFloat(row.dataset.zvTouchDx || 0);
      const productId = row.dataset.productId;
      if (dx <= -60 && productId && window.app && typeof window.app.removeFromCart === 'function') {
        row.style.transition = 'transform 180ms ease, opacity 180ms ease';
        row.style.transform = 'translateX(-100%)';
        row.style.opacity = '0';
        setTimeout(() => window.app.removeFromCart(productId), 160);
      } else {
        row.style.transition = 'transform 180ms ease';
        row.style.transform = 'translateX(0)';
        row.classList.remove('zv-swipe-armed');
        setTimeout(() => { row.style.transition = ''; }, 200);
      }
      delete row.dataset.zvTouchX;
      delete row.dataset.zvTouchDx;
    });
  }

  // ---- 4. Parallax on the hero banner — REMOVED ----
  // This used to move the hero banner on every scroll event (a
  // getBoundingClientRect() read + a transform write per scroll tick),
  // which was showing up in DevTools as repeated "Forced reflow while
  // executing JavaScript" violations. The scroll-linked animation has
  // been removed site-wide; the hero no longer shifts as the page scrolls.

  // ---- 5. Lightweight particle background inside the hero ----
  let zvParticleCanvas = null;
  let zvParticleRAF = null;

  function wireHeroParticles() {
    // Re-enabled: bold/eye-catching effects + auto-play approved.
    if (prefersReducedMotion) return;
    const hero = document.querySelector('.premium-hero');
    if (!hero) return;
    if (zvParticleCanvas && hero.contains(zvParticleCanvas)) return; // already live

    if (zvParticleRAF) cancelAnimationFrame(zvParticleRAF);

    const canvas = document.createElement('canvas');
    canvas.className = 'zv-particle-canvas';
    hero.prepend(canvas);
    zvParticleCanvas = canvas;

    const ctx = canvas.getContext('2d');
    let w, h, particles;

    function size() {
      w = canvas.width = hero.clientWidth;
      h = canvas.height = hero.clientHeight;
    }
    size();
    window.addEventListener('resize', () => {
      if (zvParticleCanvas === canvas) size();
    });

    const COUNT = Math.min(36, Math.max(14, Math.floor(w / 40)));
    particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 0.6 + Math.random() * 1.8,
      vx: (Math.random() - 0.5) * 0.15,
      vy: -0.08 - Math.random() * 0.18,
      a: 0.15 + Math.random() * 0.35
    }));

    function tick() {
      if (!document.body.contains(canvas)) return; // stale after a re-render
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -4) { p.y = h + 4; p.x = Math.random() * w; }
        if (p.x < -4) p.x = w + 4;
        if (p.x > w + 4) p.x = -4;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 217, 255, ${p.a})`;
        ctx.shadowColor = 'rgba(0, 217, 255, 0.8)';
        ctx.shadowBlur = 6;
        ctx.fill();
      });
      zvParticleRAF = requestAnimationFrame(tick);
    }
    tick();
  }
  wireHeroParticles();
  if (window.store && typeof window.store.subscribe === 'function') {
    window.store.subscribe(() => wireHeroParticles());
  }

  // ---- 6. Cursor trail (desktop, fine pointer, motion allowed only) ----
  // Re-enabled per explicit request: bold/eye-catching effects approved,
  // and the cursor-trail effect specifically asked for afterward.
  if (canHoverFine && !prefersReducedMotion) {
    let lastTrail = 0;
    document.addEventListener('mousemove', (e) => {
      const now = performance.now();
      if (now - lastTrail < 35) return; // throttle dot spawn rate
      lastTrail = now;
      const dot = document.createElement('div');
      dot.className = 'zv-cursor-trail-dot';
      dot.style.left = e.clientX + 'px';
      dot.style.top = e.clientY + 'px';
      document.body.appendChild(dot);
      const anim = dot.animate(
        [
          { transform: 'translate(-50%, -50%) scale(1)', opacity: 0.55 },
          { transform: 'translate(-50%, -50%) scale(0.2)', opacity: 0 }
        ],
        { duration: 600, easing: 'ease-out' }
      );
      anim.onfinish = () => dot.remove();
    }, { passive: true });
  }

  // ---- 7. ZYVRON slider system: wires every `.zv-slider` on the page
  // (reviews carousel, PDP "You May Also Like"). Arrow clicks nudge the
  // native scroll-snap track by one card width; dots (where present) track
  // the nearest snapped card. Controls are hidden entirely when a track
  // has nothing to scroll (e.g. all 4 review cards already fit side by
  // side on a wide desktop) so nothing dead-looking is left on screen. ----
  function updateSliderControls(root) {
    const id = root.id;
    const track = root.querySelector(':scope > .zv-slider-track');
    if (!track) return;
    const prevBtns = document.querySelectorAll(`[data-slider-prev="${id}"]`);
    const nextBtns = document.querySelectorAll(`[data-slider-next="${id}"]`);
    const dotsWrap = document.querySelector(`[data-slider-dots="${id}"]`);
    const canScroll = track.scrollWidth > track.clientWidth + 4;

    prevBtns.forEach(b => { b.style.display = canScroll ? '' : 'none'; });
    nextBtns.forEach(b => { b.style.display = canScroll ? '' : 'none'; });
    if (dotsWrap) dotsWrap.style.display = canScroll ? '' : 'none';
    if (!canScroll) return;

    const cards = Array.from(track.children);

    if (dotsWrap && dotsWrap.children.length !== cards.length) {
      dotsWrap.innerHTML = cards.map((_, i) =>
        `<button type="button" class="zv-slider-dot${i === 0 ? ' active' : ''}" data-slider-dot-index="${i}" aria-label="Go to slide ${i + 1}"></button>`
      ).join('');
    }

    function cardLeftInTrack(card) {
      return card.getBoundingClientRect().left - track.getBoundingClientRect().left + track.scrollLeft;
    }

    function updateActiveState() {
      const pos = track.scrollLeft;
      const maxScroll = track.scrollWidth - track.clientWidth;
      prevBtns.forEach(b => { b.disabled = pos <= 4; });
      nextBtns.forEach(b => { b.disabled = pos >= maxScroll - 4; });
      if (dotsWrap && dotsWrap.children.length === cards.length) {
        let closest = 0, closestDist = Infinity;
        cards.forEach((card, i) => {
          const dist = Math.abs(cardLeftInTrack(card) - pos);
          if (dist < closestDist) { closestDist = dist; closest = i; }
        });
        Array.from(dotsWrap.children).forEach((dot, i) => dot.classList.toggle('active', i === closest));
      }
    }
    updateActiveState();

    if (track.dataset.zvSliderWired) return; // this exact node already has its listeners
    track.dataset.zvSliderWired = 'true';

    const scrollByCard = (dir) => {
      const card = track.children[0];
      const step = card ? card.getBoundingClientRect().width + 12 : track.clientWidth * 0.8;
      track.scrollBy({ left: dir * step, behavior: 'smooth' });
    };
    prevBtns.forEach(b => b.addEventListener('click', () => scrollByCard(-1)));
    nextBtns.forEach(b => b.addEventListener('click', () => scrollByCard(1)));
    if (dotsWrap) {
      dotsWrap.addEventListener('click', (e) => {
        const dot = e.target.closest('[data-slider-dot-index]');
        if (!dot) return;
        const i = parseInt(dot.dataset.sliderDotIndex, 10);
        const card = cards[i];
        if (card) track.scrollTo({ left: cardLeftInTrack(card), behavior: 'smooth' });
      });
    }
    track.addEventListener('scroll', debounce(updateActiveState, 60), { passive: true });
  }

  function wireSliders() {
    document.querySelectorAll('.zv-slider[id]').forEach(updateSliderControls);
  }
  wireSliders();
  if (window.store && typeof window.store.subscribe === 'function') {
    window.store.subscribe(() => requestAnimationFrame(wireSliders));
  }
  window.addEventListener('resize', debounce(wireSliders, 150));
})();
