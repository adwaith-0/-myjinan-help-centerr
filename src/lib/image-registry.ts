export interface DocImage {
  url: string;
  caption: string;
}

// ═══════════════════════════════════════════════════════════════
//  IMAGE REGISTRY — Maps topic keys to documentation screenshots
//  Covers: Product Mgmt (pm), Order Mgmt (om), Reports (ra),
//          Business Management (bm) — zone, settings, gallery, etc.
// ═══════════════════════════════════════════════════════════════

const IMAGE_REGISTRY: Record<string, DocImage[]> = {

  // ── BUSINESS MANAGEMENT: Admin & Login ──
  admin_login: [
    { url: "/docs/bm/admin_login_page_1773151524872.png", caption: "Admin Login Page" },
    { url: "/docs/bm/admin_dashboard_1773151774208.png", caption: "Admin Dashboard — Main Overview" },
    { url: "/docs/bm/initial_page_load_1773151291256.png", caption: "Initial Page Load Screen" },
  ],

  // ── BUSINESS MANAGEMENT: Zone Setup ──
  zone_setup: [
    { url: "/docs/bm/capture_zone_setup_1773151868617.webp", caption: "Zone Setup — Configuration Page" },
    { url: "/docs/bm/zone_setup_top_1773151880128.png", caption: "Zone Setup — Top Section (Name, Coordinates)" },
    { url: "/docs/bm/zone_setup_bottom_1773151887870.png", caption: "Zone Setup — Bottom Section (Modules, Charges)" },
  ],

  // ── BUSINESS MANAGEMENT: Module Setup ──
  module_setup: [
    { url: "/docs/bm/capture_module_setup_1773151992715.webp", caption: "Module Setup — Overview" },
    { url: "/docs/bm/module_setup_expanded_sidebar_1773152116783.png", caption: "Module Setup — Expanded Sidebar Navigation" },
    { url: "/docs/bm/add_business_module_top_1773152149347.png", caption: "Add Business Module — Top Section" },
    { url: "/docs/bm/add_business_module_bottom_1773152164225.png", caption: "Add Business Module — Bottom Section" },
    { url: "/docs/bm/capture_module_list_1773152203636.webp", caption: "Module List — All Configured Modules" },
    { url: "/docs/bm/business_module_top_1773152233244.png", caption: "Business Module — Configuration Top" },
    { url: "/docs/bm/business_module_bottom_1773152243095.png", caption: "Business Module — Configuration Bottom" },
    { url: "/docs/bm/business_module_list_top_1773152437910.png", caption: "Business Module List — Top View" },
  ],

  // ── BUSINESS MANAGEMENT: Business Settings ──
  business_settings: [
    { url: "/docs/bm/capture_business_settings_1773152502724.webp", caption: "Business Settings — Overview" },
    { url: "/docs/bm/business_settings_top_1773152555791.png", caption: "Business Settings — Top Section" },
    { url: "/docs/bm/business_settings_middle_1773152563428.png", caption: "Business Settings — Middle Section" },
    { url: "/docs/bm/business_settings_bottom_1773152576887.png", caption: "Business Settings — Bottom Section" },
    { url: "/docs/bm/business_settings_tabs_check_1773152773341.png", caption: "Business Settings — Tabs Overview" },
    { url: "/docs/bm/deep_dive_biz_settings_interactive_1773153120087.webp", caption: "Business Settings — Interactive Deep Dive" },
    { url: "/docs/bm/deep_dive_remaining_biz_settings_1773153323736.webp", caption: "Business Settings — Remaining Configurations" },
  ],

  // ── BUSINESS MANAGEMENT: Vendor Settings ──
  vendor_settings: [
    { url: "/docs/bm/vendor_settings_tab_1773152890800.png", caption: "Vendor Settings Tab" },
    { url: "/docs/bm/vendor_tab_overview_1773153226352.png", caption: "Vendor Tab — Overview" },
    { url: "/docs/bm/vendor_tab_info_hover_1773153243111.png", caption: "Vendor Tab — Info Details" },
  ],

  // ── BUSINESS MANAGEMENT: Deliveryman / Employee ──
  employee_deliveryman: [
    { url: "/docs/bm/deliveryman_tab_overview_1773153256217.png", caption: "Deliveryman Tab — Overview" },
    { url: "/docs/bm/deliveryman_tab_info_hover_1773153265263.png", caption: "Deliveryman Tab — Info Details" },
    { url: "/docs/bm/refund_settings_tab_1773152858972.png", caption: "Refund Settings Tab" },
  ],

  // ── EMPLOYEE MANAGEMENT ──
  employee_management: [
    { url: "/docs/em/em_add_employee_form.png", caption: "Add New Employee — General Information Form" },
    { url: "/docs/em/em_employee_general_info.png", caption: "Employee Form — Name, Zone, Role & Phone" },
    { url: "/docs/em/em_employee_image_upload.png", caption: "Employee Image Upload — 1:1 Ratio" },
    { url: "/docs/em/em_employee_list.png", caption: "Employee List — Table View with Search" },
  ],

  // ── BUSINESS MANAGEMENT: Refund ──
  refund: [
    { url: "/docs/bm/refund_settings_tab_1773152858972.png", caption: "Refund Settings Tab" },
    { url: "/docs/bm/refund_reason_validation_1773153144772.png", caption: "Refund Reason — Validation" },
    { url: "/docs/bm/refund_reason_list_actions_1773153181199.png", caption: "Refund Reason — List with Actions" },
    { url: "/docs/bm/refund_reason_edit_mode_1773153189911.png", caption: "Refund Reason — Edit Mode" },
    { url: "/docs/bm/refund_reason_delete_confirm_1773153203263.png", caption: "Refund Reason — Delete Confirmation" },
    { url: "/docs/bm/refund_reason_added_1773153158049.png", caption: "Refund Reason — Successfully Added" },
  ],

  // ── BUSINESS MANAGEMENT: Customer Setup ──
  customer_setup: [
    { url: "/docs/bm/customer_setup_overview_1773153380585.png", caption: "Customer Setup — Overview" },
    { url: "/docs/bm/customer_wallet_modal_1773153395510.png", caption: "Customer Wallet — Modal View" },
  ],

  // ── BUSINESS MANAGEMENT: Priority Setup ──
  priority_setup: [
    { url: "/docs/bm/priority_setup_overview_1773153491904.png", caption: "Priority Setup — Overview" },
  ],

  // ── BUSINESS MANAGEMENT: Languages ──
  languages: [
    { url: "/docs/bm/languages_overview_1773153521418.png", caption: "Languages — Overview" },
    { url: "/docs/bm/add_new_language_modal_1773153558206.png", caption: "Add New Language — Modal" },
  ],

  // ── BUSINESS MANAGEMENT: Landing Page ──
  landing_page: [
    { url: "/docs/bm/landing_page_overview_1773153639442.png", caption: "Landing Page — Overview" },
    { url: "/docs/bm/admin_landing_page_fixed_data_1773154532123.png", caption: "Admin Landing Page — Fixed Data" },
    { url: "/docs/bm/flutter_landing_page_fixed_data_1773154579132.png", caption: "Flutter Landing Page — Fixed Data" },
    { url: "/docs/bm/react_landing_page_header_1773154563557.png", caption: "React Landing Page — Header" },
  ],

  // ── BUSINESS MANAGEMENT: Websocket ──
  websocket: [
    { url: "/docs/bm/websocket_overview_1773153677881.png", caption: "WebSocket — Configuration Overview" },
  ],

  // ── BUSINESS MANAGEMENT: Taxes ──
  taxes: [
    { url: "/docs/bm/capture_system_tax_interactive_1773153760439.webp", caption: "System Tax — Interactive Setup" },
    { url: "/docs/bm/create_taxes_empty_list_1773153820998.png", caption: "Create Taxes — Empty List" },
    { url: "/docs/bm/create_tax_form_1773153854104.png", caption: "Create Tax — Form" },
    { url: "/docs/bm/setup_taxes_order_module_1773153882153.png", caption: "Setup Taxes — Order Module" },
    { url: "/docs/bm/setup_taxes_parcel_module_1773153918017.png", caption: "Setup Taxes — Parcel Module" },
  ],

  // ── BUSINESS MANAGEMENT: Subscription ──
  subscription: [
    { url: "/docs/bm/capture_subscription_mgt_1773154032937.webp", caption: "Subscription Management — Overview" },
    { url: "/docs/bm/subscription_package_list_empty_1773154158139.png", caption: "Subscription Package List — Empty" },
    { url: "/docs/bm/add_subscription_package_top_1773154208570.png", caption: "Add Subscription Package — Form" },
    { url: "/docs/bm/subscriber_list_empty_1773154238418.png", caption: "Subscriber List — Empty" },
    { url: "/docs/bm/subscription_settings_overview_1773154378345.png", caption: "Subscription Settings — Overview" },
  ],

  // ── BUSINESS MANAGEMENT: Pages & Policies ──
  pages_policies: [
    { url: "/docs/bm/capture_pages_social_media_1773154437627.webp", caption: "Pages & Social Media — Overview" },
    { url: "/docs/bm/social_media_overview_1773154545475.png", caption: "Social Media Links — Overview" },
    { url: "/docs/bm/terms_and_condition_editor_1773154601897.png", caption: "Terms & Conditions — Editor" },
    { url: "/docs/bm/privacy_policy_editor_1773154651407.png", caption: "Privacy Policy — Editor" },
    { url: "/docs/bm/refund_policy_editor_1773154688250.png", caption: "Refund Policy — Editor" },
    { url: "/docs/bm/cancelation_policy_editor_1773154705668.png", caption: "Cancellation Policy — Editor" },
    { url: "/docs/bm/about_us_editor_1773154664386.png", caption: "About Us — Editor" },
  ],

  // ── BUSINESS MANAGEMENT: Gallery ──
  gallery: [
    { url: "/docs/bm/capture_gallery_active_page_1773154988755.webp", caption: "Gallery — Active Page Overview" },
    { url: "/docs/bm/gallery_main_page_1773155002425.png", caption: "Gallery — Main Page" },
    { url: "/docs/bm/gallery_upload_modal_1773155015056.png", caption: "Gallery — Upload Modal" },
    { url: "/docs/bm/gallery_category_contents_1773155055243.png", caption: "Gallery — Category Contents" },
    { url: "/docs/bm/gallery_preview_modal_1773155085144.png", caption: "Gallery — Preview Modal" },
  ],

  // ── Product Setup: Add New Product ──
  add_product: [
    { url: "/docs/pm/img_01.jpeg", caption: "MyJinan Admin Dashboard — Main Navigation" },
    { url: "/docs/pm/img_04.jpeg", caption: "Add New Item — Name, Description & Image Upload" },
    { url: "/docs/pm/img_05.jpeg", caption: "Image Upload Areas — Item Image & Thumbnail" },
    { url: "/docs/pm/img_06.jpeg", caption: "Store & Category Info + Price Information" },
    { url: "/docs/pm/img_07.jpeg", caption: "Attribute Selection & Tags Input" },
    { url: "/docs/pm/img_08.jpeg", caption: "Variant Pricing — Colors & Sizes" },
  ],

  // ── Product List ──
  product_list: [
    { url: "/docs/pm/img_09.jpeg", caption: "Product List — Sidebar Navigation & Search Filters" },
    { url: "/docs/pm/img_10.jpeg", caption: "Full Item List View with Search, Export, and Product Table" },
    { url: "/docs/pm/img_11.jpeg", caption: "Store Dropdown — Search & Select Store" },
    { url: "/docs/pm/img_13.jpeg", caption: "Product Table — Detailed Item List with Pagination" },
  ],

  // ── Low Stock ──
  low_stock: [
    { url: "/docs/pm/img_14.jpeg", caption: "Left Sidebar — Low Stock List Selected" },
    { url: "/docs/pm/img_15.jpeg", caption: "Low Stock List — Full View with Items at Zero Stock" },
    { url: "/docs/pm/img_16.jpeg", caption: "Low Stock List — Search & Filter Bar" },
  ],

  // ── Reviews ──
  reviews: [
    { url: "/docs/pm/img_17.jpeg", caption: "Left Sidebar — Review Selected" },
    { url: "/docs/pm/img_18.jpeg", caption: "Item Reviews Page — Review List with Search & Export" },
  ],

  // ── Bulk Import (Products) ──
  bulk_import_products: [
    { url: "/docs/pm/img_19.jpeg", caption: "Left Sidebar — Bulk Import Selected" },
    { url: "/docs/pm/img_20.jpeg", caption: "Items Bulk Import — 3-Step Instruction Guide" },
    { url: "/docs/pm/img_21.jpeg", caption: "Bulk Import — Template Download, Data Type Selection & File Upload" },
  ],

  // ── Bulk Export (Products) ──
  bulk_export_products: [
    { url: "/docs/pm/img_22.jpeg", caption: "Left Sidebar — Bulk Export Selected" },
    { url: "/docs/pm/img_23.jpeg", caption: "Items Bulk Export — 2-Step Guide with Type Selection" },
  ],

  // ── Categories ──
  categories: [
    { url: "/docs/pm/img_25.jpeg", caption: "Categories — Dashboard Main Navigation" },
    { url: "/docs/pm/img_29.jpeg", caption: "Add New Category — Name & Image Upload" },
    { url: "/docs/pm/img_30.jpeg", caption: "Image Upload Area — Category Image" },
    { url: "/docs/pm/img_31.jpeg", caption: "Full Category List View with Search, Export, and Table" },
  ],

  // ── Sub Categories ──
  sub_categories: [
    { url: "/docs/pm/img_32.jpeg", caption: "Add New Sub Category — Name & Parent Category" },
    { url: "/docs/pm/img_33.jpeg", caption: "Full Sub Category List View" },
  ],

  // ── Bulk Import (Categories) ──
  bulk_import_categories: [
    { url: "/docs/pm/img_34.jpeg", caption: "Left Sidebar — Bulk Import Selected" },
    { url: "/docs/pm/img_35.jpeg", caption: "Categories Bulk Import — 3-Step Guide" },
    { url: "/docs/pm/img_36.jpeg", caption: "Bulk Import — Template Download & File Upload" },
  ],

  // ── Bulk Export (Categories) ──
  bulk_export_categories: [
    { url: "/docs/pm/img_37.jpeg", caption: "Left Sidebar — Bulk Export Selected" },
    { url: "/docs/pm/img_38.jpeg", caption: "Categories Bulk Export — 2-Step Guide" },
  ],

  // ── Attributes ──
  attributes: [
    { url: "/docs/pm/img_40.jpeg", caption: "Navigation to Attributes" },
    { url: "/docs/pm/img_41.jpeg", caption: "Add New Attribute" },
    { url: "/docs/pm/img_42.jpeg", caption: "Attributes List" },
  ],

  // ── Units ──
  units: [
    { url: "/docs/pm/img_43.jpeg", caption: "Navigation to Units" },
    { url: "/docs/pm/img_44.jpeg", caption: "Add New Unit" },
    { url: "/docs/pm/img_45.jpeg", caption: "Units List" },
  ],

  // ── Brands ──
  brands: [
    { url: "/docs/pm/img_46.jpeg", caption: "Brand Setup" },
    { url: "/docs/pm/img_47.jpeg", caption: "Add New Brand — Name & Brand Logo" },
  ],

  // ── POS ──
  pos: [
    { url: "/docs/om/img_00.png", caption: "POS Section Navigation" },
    { url: "/docs/om/img_03.png", caption: "POS — Product Selection" },
    { url: "/docs/om/img_04.png", caption: "POS — Product Search" },
    { url: "/docs/om/img_05.png", caption: "POS — Customer Details" },
    { url: "/docs/om/img_07.png", caption: "POS — Review and Checkout" },
  ],

  // ── Orders ──
  orders: [
    { url: "/docs/om/img_08.png", caption: "Order Management Navigation" },
    { url: "/docs/om/img_09.png", caption: "Order Categories Overview" },
    { url: "/docs/om/img_10.png", caption: "All Orders List" },
    { url: "/docs/om/img_11.png", caption: "Pending Orders" },
    { url: "/docs/om/img_14.png", caption: "Accepted Orders" },
    { url: "/docs/om/img_16.png", caption: "Delivered Orders" },
    { url: "/docs/om/img_21.png", caption: "Order Details View" },
    { url: "/docs/om/img_23.png", caption: "Print Invoice" },
  ],

  // ── Flash Sales ──
  flash_sales: [
    { url: "/docs/om/img_24.png", caption: "Flash Sale Setup — Validity & Details" },
    { url: "/docs/om/img_25.png", caption: "Flash Sale — Add Products & Discount" },
    { url: "/docs/om/img_26.png", caption: "Managing Flash Sales" },
    { url: "/docs/om/img_27.png", caption: "Flash Sales List" },
  ],

  // ── Reports ──
  transaction_report: [
    { url: "/docs/ra/img_00.png", caption: "Reports & Analytics Navigation" },
    { url: "/docs/ra/img_01.png", caption: "Transaction Report — Filters" },
    { url: "/docs/ra/img_02.png", caption: "Transaction Report — Summary Metrics" },
    { url: "/docs/ra/img_03.png", caption: "Transaction Report — Details" },
  ],
  item_report: [
    { url: "/docs/ra/img_04.png", caption: "Item Report — Filters" },
    { url: "/docs/ra/img_05.png", caption: "Item Report — Table" },
    { url: "/docs/ra/img_06.png", caption: "Item Report — Details" },
  ],
  store_report: [
    { url: "/docs/ra/img_07.png", caption: "Store Report — Summary & Sales" },
    { url: "/docs/ra/img_08.png", caption: "Store Report — Order Details" },
    { url: "/docs/ra/img_09.png", caption: "Store Report — Sales Report" },
  ],
  expense_report: [
    { url: "/docs/ra/img_11.png", caption: "Expense Report — Filters" },
    { url: "/docs/ra/img_12.png", caption: "Expense Report — Table" },
  ],
  disbursement_report: [
    { url: "/docs/ra/img_13.png", caption: "Disbursement Report — Summary" },
    { url: "/docs/ra/img_14.png", caption: "Disbursement Report — Details" },
  ],
  order_report: [
    { url: "/docs/ra/img_19.png", caption: "Order Report — Filters" },
    { url: "/docs/ra/img_20.png", caption: "Order Report — Table & Actions" },
    { url: "/docs/ra/img_21.png", caption: "Order Report — Invoice" },
  ],
  tax_report: [
    { url: "/docs/ra/img_22.png", caption: "Tax Report — Configuration" },
    { url: "/docs/ra/img_23.png", caption: "Tax Report — Rate Selection" },
    { url: "/docs/ra/img_26.png", caption: "Tax Report — Results" },
  ],
  vendor_tax_report: [
    { url: "/docs/ra/img_27.png", caption: "Vendor Tax Report — Summary" },
    { url: "/docs/ra/img_29.png", caption: "Vendor Tax Report — Table" },
    { url: "/docs/ra/img_30.png", caption: "Vendor Tax Report — Details" },
  ],
  dashboard: [
    { url: "/docs/bm/admin_dashboard_1773151774208.png", caption: "Admin Dashboard — Main Overview" },
    { url: "/docs/ra/img_00.png", caption: "Reports & Analytics Navigation" },
  ],
};

// ═══════════════════════════════════════════════════════════════
//  KEYWORD MAP — More specific keywords, no ambiguous matches
//  IMPORTANT: Keywords must be specific enough to avoid false matches.
//  e.g., "gallery" must NOT match "add_product", it matches "gallery"
// ═══════════════════════════════════════════════════════════════

const KEYWORD_MAP: Record<string, string[]> = {
  // Business Management
  admin_login: ["admin login", "login page", "sign in", "admin panel login"],
  zone_setup: ["zone setup", "zone configuration", "add zone", "create zone", "zone management", "delivery zone", "zone coordinate", "bs-zon"],
  module_setup: ["module setup", "add module", "business module", "configure module", "module list", "bs-mod"],
  business_settings: ["business setting", "business config", "general setting", "platform setting", "maintenance mode", "bs-set"],
  vendor_settings: ["vendor setting", "vendor config", "store owner setting", "vendor registration"],
  employee_deliveryman: ["employee", "deliveryman", "delivery boy", "driver", "rider", "add employee", "employee management", "staff", "delivery man", "em-"],
  employee_management: ["employee list", "add new employee", "employee form", "employee role", "employee invitation", "role management", "access control", "activity audit", "employee table", "employee search"],
  refund: ["refund", "refund reason", "refund policy", "refund setting", "return policy"],
  customer_setup: ["customer setup", "customer config", "wallet", "customer wallet", "loyalty point"],
  priority_setup: ["priority setup", "priority config", "order priority"],
  languages: ["language", "add language", "translation", "multilingual", "arabic", "english language"],
  landing_page: ["landing page", "home page design", "app landing", "website landing"],
  websocket: ["websocket", "real-time", "socket", "live update"],
  taxes: ["tax setup", "create tax", "tax config", "vat setup", "tax rate", "system tax", "bs-tax"],
  subscription: ["subscription", "subscribe", "subscription package", "subscriber", "membership"],
  pages_policies: ["privacy policy", "terms and condition", "refund policy page", "cancellation policy", "about us page", "social media link", "terms of service"],
  gallery: ["gallery", "image gallery", "upload image to gallery", "media gallery", "photo gallery", "add image gallery", "gallery upload", "gallery category"],

  // Product Management — removed "gallery" from here!
  add_product: ["add product", "new product", "add new item", "create product", "product setup", "add item", "new item", "product name", "product image", "product description", "product pricing", "product variant", "product thumbnail", "publish product", "draft product", "pm-prd"],
  product_list: ["product list", "item list", "view product", "edit product", "delete product", "enable product", "disable product", "search product", "filter product", "export product list", "pm-lst"],
  low_stock: ["low stock", "out of stock", "stock alert", "reorder", "stock update", "pm-low", "zero stock", "stock threshold"],
  reviews: ["review", "rating", "customer review", "delete review", "pm-rev", "product feedback"],
  bulk_import_products: ["bulk import product", "import product", "upload product", "import excel product", "import template product", "pm-pib", "mass import product"],
  bulk_export_products: ["bulk export product", "export product data", "download product", "pm-pex", "catalogue export"],
  categories: ["category", "add category", "new category", "create category", "edit category", "delete category", "category list", "pm-cat", "product category"],
  sub_categories: ["sub category", "subcategory", "sub-category", "add sub category", "create sub", "pm-sub", "parent category", "child category"],
  bulk_import_categories: ["bulk import category", "import category", "pm-bim"],
  bulk_export_categories: ["bulk export category", "export category", "pm-bex"],
  attributes: ["attribute", "add attribute", "color attribute", "size attribute", "material attribute", "pm-att"],
  units: ["unit of measure", "add unit", "measurement unit", "pm-unt", "kg unit", "piece unit"],
  brands: ["brand", "add brand", "brand logo", "brand setup", "pm-brd", "brand management"],

  // Order Management — made keywords more specific
  pos: ["pos", "point of sale", "manual order", "walk-in order", "walkin", "pos checkout", "pos billing"],
  orders: ["order management", "manage order", "view order", "accept order", "reject order", "order status", "pending order", "confirmed order", "delivered order", "cancel order", "order invoice", "dispatch order", "om-ord", "order list", "order detail", "packed order", "order fulfilment", "delivery note"],
  flash_sales: ["flash sale", "flash deal", "limited time offer", "mk-fls", "om-fls", "time-limited sale"],

  // Reports — made keywords more specific
  transaction_report: ["transaction report", "payment report", "ra-txn", "financial report"],
  item_report: ["item report", "product report", "top selling product", "best seller report", "ra-prd"],
  store_report: ["store report", "store performance", "store analytics", "ra-str"],
  expense_report: ["expense report", "expense tracking", "ra-exp"],
  disbursement_report: ["disbursement report", "disbursement", "ra-dsb", "driver payout"],
  order_report: ["order report", "ra-ord"],
  tax_report: ["tax report", "tax calculation report", "generate tax report", "ra-tax"],
  vendor_tax_report: ["vendor tax report", "store tax report"],
  dashboard: ["admin dashboard", "dashboard overview", "platform summary", "ra-das"],
};

// ═══════════════════════════════════════════════════════════════
//  EXCLUSION RULES — Prevent false matches
//  If query contains an exclusion keyword, don't match that topic
// ═══════════════════════════════════════════════════════════════

const EXCLUSION_RULES: Record<string, string[]> = {
  add_product: ["gallery", "employee", "business setting", "zone", "tax", "vendor", "deliveryman"],
  orders: ["gallery", "employee", "zone", "tax setup", "product list"],
  gallery: ["product", "add item", "category", "brand"],
};

// ═══════════════════════════════════════════════════════════════
//  ENHANCED MATCHER — Precise keyword scoring
// ═══════════════════════════════════════════════════════════════

export function findRelevantImages(query: string, aiResponse: string): DocImage[] {
  const queryLower = query.toLowerCase();
  const responseLower = aiResponse.toLowerCase();
  const combinedLower = queryLower + " " + responseLower;

  // Score each topic
  const scores: { key: string; score: number }[] = [];

  for (const [key, keywords] of Object.entries(KEYWORD_MAP)) {
    let score = 0;

    // Check exclusion rules: if query contains excluded term, skip
    const exclusions = EXCLUSION_RULES[key] || [];
    const isExcluded = exclusions.some(ex => queryLower.includes(ex));
    if (isExcluded) continue;

    for (const kw of keywords) {
      if (queryLower.includes(kw)) {
        // Direct query match — highest weight
        score += 6;
      } else if (combinedLower.includes(kw)) {
        // Response match — lower weight
        score += 1;
      }
    }

    // Only add if we have images for this topic
    if (score > 0 && IMAGE_REGISTRY[key]) {
      scores.push({ key, score });
    }
  }

  // Sort by score descending, take top 2 topics
  scores.sort((a, b) => b.score - a.score);
  const topTopics = scores.slice(0, 2);

  // Collect images from top topics (max 6 total)
  const result: DocImage[] = [];
  for (const topic of topTopics) {
    const images = IMAGE_REGISTRY[topic.key] || [];
    for (const img of images) {
      if (result.length < 6) result.push(img);
    }
  }

  // NO fallback — if no match, return empty (no misleading images)
  return result;
}
