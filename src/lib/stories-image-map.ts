// ═══════════════════════════════════════════════════════════════
//  USER STORIES IMAGE MAP — REF-LEVEL MAPPING
//  Maps story ref ID → array of screenshots with captions
//  Each individual story gets ONLY its relevant images.
//
//  ⚠ AI-VERIFIED: Every image has been visually inspected and
//     mapped to its correct story based on actual content.
// ═══════════════════════════════════════════════════════════════

export interface StoryImage {
  url: string;
  caption: string;
}

// ─────────────────────────────────────────────────────────────
//  REF-LEVEL MAP: story ref → specific screenshots
// ─────────────────────────────────────────────────────────────
const REF_IMAGE_MAP: Record<string, StoryImage[]> = {

  // ════════════════════════════════════════════════════
  //  PRODUCT MANAGEMENT — Categories
  // ════════════════════════════════════════════════════

  // PM-CAT-001: Add a new product category
  "PM-CAT-001": [
    { url: "/docs/pm/img_26.jpeg", caption: "Step 1 — Open Product Management in left sidebar" },
    { url: "/docs/pm/img_27.jpeg", caption: "Step 2 — Expand Categories → Click 'Category'" },
    { url: "/docs/pm/img_29.jpeg", caption: "Step 3 — Add New Category form (Name + Image Upload)" },
    { url: "/docs/pm/img_30.jpeg", caption: "Step 4 — Upload category image (1:1 ratio)" },
  ],
  // PM-CAT-002: View the full category list with search/export
  "PM-CAT-002": [
    { url: "/docs/pm/img_26.jpeg", caption: "Step 1 — Open Product Management sidebar" },
    { url: "/docs/pm/img_27.jpeg", caption: "Step 2 — Navigate to Categories → Category" },
    { url: "/docs/pm/img_31.jpeg", caption: "Step 3 — Category List with search, pagination & export" },
  ],
  // PM-CAT-003: Edit an existing category's name or image
  "PM-CAT-003": [
    { url: "/docs/pm/img_31.jpeg", caption: "Step 1 — Category List — click the Edit (pencil) icon" },
    { url: "/docs/pm/img_29.jpeg", caption: "Step 2 — Edit Category form — update name or image" },
  ],
  // PM-CAT-004: Enable/disable category status toggle
  "PM-CAT-004": [
    { url: "/docs/pm/img_31.jpeg", caption: "Step 1 — Category List — toggle the Status switch to Enable/Disable" },
  ],
  // PM-CAT-005: Delete a category
  "PM-CAT-005": [
    { url: "/docs/pm/img_31.jpeg", caption: "Step 1 — Category List — click the Delete (trash) icon" },
  ],

  // ════════════════════════════════════════════════════
  //  PRODUCT MANAGEMENT — Sub Categories
  // ════════════════════════════════════════════════════

  // PM-SUB-001: Add a new sub-category
  "PM-SUB-001": [
    { url: "/docs/pm/img_27.jpeg", caption: "Step 1 — Navigate to Categories → Sub Category" },
    { url: "/docs/pm/img_32.jpeg", caption: "Step 2 — Add New Sub Category (select parent + enter name)" },
  ],
  // PM-SUB-002: View sub-category list alongside parent
  "PM-SUB-002": [
    { url: "/docs/pm/img_33.jpeg", caption: "Step 1 — Sub Category List showing parent-child mapping" },
  ],
  // PM-SUB-003: Edit a sub-category
  "PM-SUB-003": [
    { url: "/docs/pm/img_33.jpeg", caption: "Step 1 — Sub Category List — click Edit icon" },
    { url: "/docs/pm/img_32.jpeg", caption: "Step 2 — Edit sub-category name or reassign parent" },
  ],

  // ════════════════════════════════════════════════════
  //  PRODUCT MANAGEMENT — Bulk Import (Categories)
  // ════════════════════════════════════════════════════

  // PM-BIM-001: Download bulk import template
  "PM-BIM-001": [
    { url: "/docs/pm/img_34.jpeg", caption: "Step 1 — Navigate to Categories → Bulk Import" },
    { url: "/docs/pm/img_35.jpeg", caption: "Step 2 — Category Bulk Import — download template" },
  ],
  // PM-BIM-002: Upload new categories via Excel
  "PM-BIM-002": [
    { url: "/docs/pm/img_35.jpeg", caption: "Step 1 — Category Bulk Import instructions (3 steps)" },
    { url: "/docs/pm/img_36.jpeg", caption: "Step 2 — Select 'Upload New Data' → choose Excel → Upload" },
  ],
  // PM-BIM-003: Update existing categories via Excel
  "PM-BIM-003": [
    { url: "/docs/pm/img_36.jpeg", caption: "Step 1 — Select 'Update Existing Data' → upload corrected file" },
  ],

  // ════════════════════════════════════════════════════
  //  PRODUCT MANAGEMENT — Bulk Export (Categories)
  // ════════════════════════════════════════════════════

  // PM-BEX-001: Export categories to Excel
  "PM-BEX-001": [
    { url: "/docs/pm/img_37.jpeg", caption: "Step 1 — Navigate to Categories → Bulk Export" },
    { url: "/docs/pm/img_38.jpeg", caption: "Step 2 — Export Categories with filters & download" },
  ],

  // ════════════════════════════════════════════════════
  //  PRODUCT MANAGEMENT — Attributes
  // ════════════════════════════════════════════════════

  // PM-ATT-001: Add a new attribute
  "PM-ATT-001": [
    { url: "/docs/pm/img_40.jpeg", caption: "Step 1 — Navigate to Attributes in sidebar" },
    { url: "/docs/pm/img_41.jpeg", caption: "Step 2 — Add New Attribute form (multilingual name)" },
  ],
  // PM-ATT-002: View/edit/delete attributes
  "PM-ATT-002": [
    { url: "/docs/pm/img_42.jpeg", caption: "Step 1 — Attribute List with edit & delete actions" },
  ],

  // ════════════════════════════════════════════════════
  //  PRODUCT MANAGEMENT — Units
  // ════════════════════════════════════════════════════

  // PM-UNT-001: Add a new unit
  "PM-UNT-001": [
    { url: "/docs/pm/img_43.jpeg", caption: "Step 1 — Navigate to Units in sidebar" },
    { url: "/docs/pm/img_44.jpeg", caption: "Step 2 — Add New Unit form" },
  ],
  // PM-UNT-002: View/edit/delete units
  "PM-UNT-002": [
    { url: "/docs/pm/img_45.jpeg", caption: "Step 1 — Unit List with edit & delete actions" },
  ],

  // ════════════════════════════════════════════════════
  //  PRODUCT MANAGEMENT — Brands
  // ════════════════════════════════════════════════════

  // PM-BRD-001: Add a new brand
  "PM-BRD-001": [
    { url: "/docs/pm/img_46.jpeg", caption: "Step 1 — Brand Setup — click '+ Add new brand'" },
    { url: "/docs/pm/img_47.jpeg", caption: "Step 2 — Add New Brand form (name, status, logo)" },
  ],
  // PM-BRD-002: View brand list and manage
  "PM-BRD-002": [
    { url: "/docs/pm/img_46.jpeg", caption: "Step 1 — Brand List with search, status toggles & actions" },
  ],
  // PM-BRD-003: Edit/delete brand
  "PM-BRD-003": [
    { url: "/docs/pm/img_46.jpeg", caption: "Step 1 — Brand List — click Edit or Delete" },
    { url: "/docs/pm/img_47.jpeg", caption: "Step 2 — Edit Brand form" },
  ],

  // ════════════════════════════════════════════════════
  //  PRODUCT MANAGEMENT — Product Setup (Add New)
  // ════════════════════════════════════════════════════

  // PM-PRD-001: Add product with multilingual name
  "PM-PRD-001": [
    { url: "/docs/pm/img_02.jpeg", caption: "Step 1 — Product Setup → Add New in sidebar" },
    { url: "/docs/pm/img_04.jpeg", caption: "Step 2 — Add New Item — name & description fields" },
  ],
  // PM-PRD-002: Upload product images
  "PM-PRD-002": [
    { url: "/docs/pm/img_05.jpeg", caption: "Step 1 — Product image & thumbnail upload (1:1 ratio)" },
  ],
  // PM-PRD-003: Assign store, category, brand
  "PM-PRD-003": [
    { url: "/docs/pm/img_06.jpeg", caption: "Step 1 — Select store, category & set price" },
  ],
  // PM-PRD-004: Set price, stock, discount
  "PM-PRD-004": [
    { url: "/docs/pm/img_06.jpeg", caption: "Step 1 — Price, stock & discount fields" },
  ],
  // PM-PRD-005: Same as above
  "PM-PRD-005": [
    { url: "/docs/pm/img_06.jpeg", caption: "Step 1 — Price, stock & discount configuration" },
  ],
  // PM-PRD-006: Add attributes and tags
  "PM-PRD-006": [
    { url: "/docs/pm/img_07.jpeg", caption: "Step 1 — Attribute selection & tags input" },
  ],
  // PM-PRD-007: Configure product variants
  "PM-PRD-007": [
    { url: "/docs/pm/img_08.jpeg", caption: "Step 1 — Variant pricing (colours & sizes)" },
  ],
  // PM-PRD-008: Save as draft
  "PM-PRD-008": [
    { url: "/docs/pm/img_04.jpeg", caption: "Step 1 — Add New Item form — use Save as Draft" },
  ],
  // PM-PRD-009: Publish product
  "PM-PRD-009": [
    { url: "/docs/pm/img_04.jpeg", caption: "Step 1 — Add New Item form — click Submit to publish" },
  ],

  // ════════════════════════════════════════════════════
  //  PRODUCT MANAGEMENT — Product Setup (List)
  // ════════════════════════════════════════════════════

  // PM-LST-001: View product list
  "PM-LST-001": [
    { url: "/docs/pm/img_09.jpeg", caption: "Step 1 — Product Setup → List in sidebar" },
    { url: "/docs/pm/img_10.jpeg", caption: "Step 2 — Full product list with search & export" },
  ],
  // PM-LST-002: Filter by store
  "PM-LST-002": [
    { url: "/docs/pm/img_11.jpeg", caption: "Step 1 — Store selection dropdown" },
    { url: "/docs/pm/img_12.jpeg", caption: "Step 2 — Filtered product list" },
  ],
  // PM-LST-003: Edit existing product
  "PM-LST-003": [
    { url: "/docs/pm/img_13.jpeg", caption: "Step 1 — Product table — click Edit icon" },
  ],
  // PM-LST-004: Delete product
  "PM-LST-004": [
    { url: "/docs/pm/img_13.jpeg", caption: "Step 1 — Product table — click Delete icon & confirm" },
  ],

  // ════════════════════════════════════════════════════
  //  PRODUCT MANAGEMENT — Low Stock
  // ════════════════════════════════════════════════════

  // PM-LOW-001: Monitor low-stock items
  "PM-LOW-001": [
    { url: "/docs/pm/img_14.jpeg", caption: "Step 1 — Navigate to Low Stock List" },
    { url: "/docs/pm/img_15.jpeg", caption: "Step 2 — Low Stock List showing zero-stock items" },
  ],
  // PM-LOW-002: Update stock from low stock list
  "PM-LOW-002": [
    { url: "/docs/pm/img_15.jpeg", caption: "Step 1 — Low Stock List — locate item" },
    { url: "/docs/pm/img_16.jpeg", caption: "Step 2 — Update stock count via quick action" },
  ],

  // ════════════════════════════════════════════════════
  //  PRODUCT MANAGEMENT — Reviews
  // ════════════════════════════════════════════════════

  // PM-REV-001: View product reviews
  "PM-REV-001": [
    { url: "/docs/pm/img_17.jpeg", caption: "Step 1 — Navigate to Reviews" },
    { url: "/docs/pm/img_18.jpeg", caption: "Step 2 — Item Reviews list with ratings" },
  ],
  // PM-REV-002: Manage reviews
  "PM-REV-002": [
    { url: "/docs/pm/img_18.jpeg", caption: "Step 1 — Reviews list — manage & export" },
  ],

  // ════════════════════════════════════════════════════
  //  PRODUCT MANAGEMENT — Bulk Import (Products)
  // ════════════════════════════════════════════════════

  // PM-PIB-001: Download product import template
  "PM-PIB-001": [
    { url: "/docs/pm/img_19.jpeg", caption: "Step 1 — Navigate to Product Setup → Bulk Import" },
    { url: "/docs/pm/img_20.jpeg", caption: "Step 2 — Items Bulk Import 3-step guide" },
  ],
  // PM-PIB-002: Upload product Excel
  "PM-PIB-002": [
    { url: "/docs/pm/img_20.jpeg", caption: "Step 1 — Items Bulk Import instructions" },
    { url: "/docs/pm/img_21.jpeg", caption: "Step 2 — Download template, select type & upload" },
  ],

  // ════════════════════════════════════════════════════
  //  PRODUCT MANAGEMENT — Bulk Export (Products)
  // ════════════════════════════════════════════════════

  // PM-PEX-001: Export product catalogue
  "PM-PEX-001": [
    { url: "/docs/pm/img_22.jpeg", caption: "Step 1 — Navigate to Product Setup → Bulk Export" },
    { url: "/docs/pm/img_23.jpeg", caption: "Step 2 — Items Bulk Export — filter & download" },
  ],

  // ════════════════════════════════════════════════════
  //  ZONE & MODULE SETUP
  // ════════════════════════════════════════════════════

  // ZN-001: Draw a new zone
  "ZN-001": [
    { url: "/docs/bm/capture_zone_setup_1773151868617.webp", caption: "Step 1 — Zone Setup page" },
    { url: "/docs/bm/zone_setup_top_1773151880128.png", caption: "Step 2 — Draw boundary & enter zone name" },
  ],
  // ZN-002: View and search zones
  "ZN-002": [
    { url: "/docs/bm/capture_zone_setup_1773151868617.webp", caption: "Step 1 — Zone list with search & export" },
  ],
  // ZN-003: Enable/disable zone
  "ZN-003": [
    { url: "/docs/bm/capture_zone_setup_1773151868617.webp", caption: "Step 1 — Zone list — toggle Status switch" },
  ],
  // ZN-004: Connect module to zone
  "ZN-004": [
    { url: "/docs/bm/zone_setup_bottom_1773151887870.png", caption: "Step 1 — Zone modules & delivery charges" },
  ],
  // ZN-005: Edit zone boundary
  "ZN-005": [
    { url: "/docs/bm/zone_setup_top_1773151880128.png", caption: "Step 1 — Edit — drag polygon points to new boundary" },
  ],

  // MOD-001 to MOD-005: Module Setup
  "MOD-001": [
    { url: "/docs/bm/capture_module_setup_1773151992715.webp", caption: "Step 1 — Module Setup overview" },
    { url: "/docs/bm/add_business_module_top_1773152149347.png", caption: "Step 2 — Add Business Module form (top)" },
    { url: "/docs/bm/add_business_module_bottom_1773152164225.png", caption: "Step 3 — Add Business Module form (bottom)" },
  ],
  "MOD-002": [
    { url: "/docs/bm/capture_module_list_1773152203636.webp", caption: "Step 1 — Module List showing all configured modules" },
  ],
  "MOD-003": [
    { url: "/docs/bm/capture_module_list_1773152203636.webp", caption: "Step 1 — Module List — click Edit icon" },
    { url: "/docs/bm/add_business_module_top_1773152149347.png", caption: "Step 2 — Edit module form" },
  ],
  "MOD-004": [
    { url: "/docs/bm/capture_module_list_1773152203636.webp", caption: "Step 1 — Module List — toggle Status" },
  ],
  "MOD-005": [
    { url: "/docs/bm/module_setup_expanded_sidebar_1773152116783.png", caption: "Step 1 — Module Setup sidebar navigation" },
  ],

  // ════════════════════════════════════════════════════
  //  BUSINESS SETTINGS
  // ════════════════════════════════════════════════════

  // BS-BIZ-001 to BS-BIZ-003: Business Information
  "BS-BIZ-001": [
    { url: "/docs/bm/capture_business_settings_1773152502724.webp", caption: "Step 1 — Business Settings overview" },
    { url: "/docs/bm/business_settings_top_1773152555791.png", caption: "Step 2 — Company name, email, phone & address" },
  ],
  "BS-BIZ-002": [
    { url: "/docs/bm/business_settings_middle_1773152563428.png", caption: "Step 1 — Logo, favicon & map coordinates" },
  ],
  "BS-BIZ-003": [
    { url: "/docs/bm/business_settings_bottom_1773152576887.png", caption: "Step 1 — Footer text, copyright & timezone" },
  ],

  // BS-VND: Vendor Settings
  "BS-VND-001": [
    { url: "/docs/bm/vendor_settings_tab_1773152890800.png", caption: "Step 1 — Switch to Vendor Settings tab" },
    { url: "/docs/bm/vendor_tab_overview_1773153226352.png", caption: "Step 2 — Vendor registration & approval toggles" },
  ],
  "BS-VND-002": [
    { url: "/docs/bm/vendor_tab_overview_1773153226352.png", caption: "Step 1 — Vendor Settings toggles" },
    { url: "/docs/bm/vendor_tab_info_hover_1773153243111.png", caption: "Step 2 — Vendor details on hover" },
  ],

  // BS-DLV: Deliveryman Settings
  "BS-DLV-001": [
    { url: "/docs/bm/deliveryman_tab_overview_1773153256217.png", caption: "Step 1 — Deliveryman configuration" },
  ],
  "BS-DLV-002": [
    { url: "/docs/bm/deliveryman_tab_info_hover_1773153265263.png", caption: "Step 1 — Commission & tip settings" },
  ],

  // BS-CUS: Customer & Wallet
  "BS-CUS-001": [
    { url: "/docs/bm/customer_setup_overview_1773153380585.png", caption: "Step 1 — Customer setup overview" },
  ],
  "BS-CUS-002": [
    { url: "/docs/bm/customer_wallet_modal_1773153395510.png", caption: "Step 1 — Customer wallet modal" },
  ],

  // BS-REF: Refund Settings
  "BS-REF-001": [
    { url: "/docs/bm/refund_settings_tab_1773152858972.png", caption: "Step 1 — Switch to Refund Settings tab" },
  ],
  "BS-REF-002": [
    { url: "/docs/bm/refund_reason_validation_1773153144772.png", caption: "Step 1 — Add refund reason with validation" },
    { url: "/docs/bm/refund_reason_added_1773153158049.png", caption: "Step 2 — Refund reason added successfully" },
  ],
  "BS-REF-003": [
    { url: "/docs/bm/refund_reason_list_actions_1773153181199.png", caption: "Step 1 — Refund reason list with edit & delete" },
  ],

  // BS-LNG: Language Setup
  "BS-LNG-001": [
    { url: "/docs/bm/languages_overview_1773153521418.png", caption: "Step 1 — Languages overview" },
    { url: "/docs/bm/add_new_language_modal_1773153558206.png", caption: "Step 2 — Add new language modal" },
  ],

  // BS-TAX: System Tax
  "BS-TAX-001": [
    { url: "/docs/bm/capture_system_tax_interactive_1773153760439.webp", caption: "Step 1 — System Tax setup" },
    { url: "/docs/bm/create_tax_form_1773153854104.png", caption: "Step 2 — Create Tax form" },
  ],
  "BS-TAX-002": [
    { url: "/docs/bm/create_taxes_empty_list_1773153820998.png", caption: "Step 1 — Tax list view" },
    { url: "/docs/bm/setup_taxes_order_module_1773153882153.png", caption: "Step 2 — Assign taxes per module" },
  ],

  // BS-SUB: Subscription Management
  "BS-SUB-001": [
    { url: "/docs/bm/capture_subscription_mgt_1773154032937.webp", caption: "Step 1 — Subscription Management overview" },
    { url: "/docs/bm/add_subscription_package_top_1773154208570.png", caption: "Step 2 — Add Subscription Package form" },
  ],
  "BS-SUB-002": [
    { url: "/docs/bm/subscription_package_list_empty_1773154158139.png", caption: "Step 1 — Package list" },
  ],
  "BS-SUB-003": [
    { url: "/docs/bm/subscriber_list_empty_1773154238418.png", caption: "Step 1 — Subscriber list" },
  ],
  "BS-SUB-004": [
    { url: "/docs/bm/subscription_settings_overview_1773154378345.png", caption: "Step 1 — Subscription Settings" },
  ],

  // BS-PGS: Pages & Social Media
  "BS-PGS-001": [
    { url: "/docs/bm/capture_pages_social_media_1773154437627.webp", caption: "Step 1 — Pages & Social Media" },
    { url: "/docs/bm/social_media_overview_1773154545475.png", caption: "Step 2 — Social Media links configuration" },
  ],
  "BS-PGS-002": [
    { url: "/docs/bm/terms_and_condition_editor_1773154601897.png", caption: "Step 1 — Terms & Conditions editor" },
  ],
  "BS-PGS-003": [
    { url: "/docs/bm/privacy_policy_editor_1773154651407.png", caption: "Step 1 — Privacy Policy editor" },
  ],
  "BS-PGS-004": [
    { url: "/docs/bm/about_us_editor_1773154664386.png", caption: "Step 1 — About Us editor" },
  ],

  // BS-GAL: Gallery
  "BS-GAL-001": [
    { url: "/docs/bm/capture_gallery_active_page_1773154988755.webp", caption: "Step 1 — Gallery active page" },
    { url: "/docs/bm/gallery_main_page_1773155002425.png", caption: "Step 2 — Gallery main page with folders" },
  ],
  "BS-GAL-002": [
    { url: "/docs/bm/gallery_upload_modal_1773155015056.png", caption: "Step 1 — Upload modal" },
  ],
  "BS-GAL-003": [
    { url: "/docs/bm/gallery_category_contents_1773155055243.png", caption: "Step 1 — Gallery category contents" },
    { url: "/docs/bm/gallery_preview_modal_1773155085144.png", caption: "Step 2 — Image preview" },
  ],

  // BS-WEB: Websocket
  "BS-WEB-001": [
    { url: "/docs/bm/websocket_overview_1773153677881.png", caption: "WebSocket — Configuration page" },
  ],

  // BS-LND: Landing Page
  "BS-LND-001": [
    { url: "/docs/bm/landing_page_overview_1773153639442.png", caption: "Step 1 — Landing Page overview" },
    { url: "/docs/bm/admin_landing_page_fixed_data_1773154532123.png", caption: "Step 2 — Admin Landing Page data" },
  ],
  "BS-LND-002": [
    { url: "/docs/bm/react_landing_page_header_1773154563557.png", caption: "Step 1 — React Landing Page header" },
  ],
  "BS-LND-003": [
    { url: "/docs/bm/flutter_landing_page_fixed_data_1773154579132.png", caption: "Step 1 — Flutter Landing Page data" },
  ],

  // ════════════════════════════════════════════════════
  //  ORDER MANAGEMENT
  // ════════════════════════════════════════════════════

  // OM-ORD: Order List
  "OM-ORD-001": [
    { url: "/docs/om/img_08.png", caption: "Step 1 — Order Management sidebar" },
    { url: "/docs/om/img_10.png", caption: "Step 2 — All Orders list with filters" },
  ],
  "OM-ORD-002": [
    { url: "/docs/om/img_09.png", caption: "Step 1 — Order categories (Pending, Confirmed…)" },
    { url: "/docs/om/img_11.png", caption: "Step 2 — Pending Orders list" },
  ],
  "OM-ORD-003": [
    { url: "/docs/om/img_10.png", caption: "Step 1 — All Orders — use search & filters" },
  ],
  "OM-ORD-004": [
    { url: "/docs/om/img_14.png", caption: "Step 1 — Accepted Orders list" },
  ],
  "OM-ORD-005": [
    { url: "/docs/om/img_16.png", caption: "Step 1 — Delivered Orders history" },
  ],

  // OM-DET: Order Details
  "OM-DET-001": [
    { url: "/docs/om/img_21.png", caption: "Step 1 — Order Details view" },
  ],
  "OM-DET-002": [
    { url: "/docs/om/img_23.png", caption: "Step 1 — Print Invoice" },
  ],

  // OM-POS: POS Section
  "OM-POS-001": [
    { url: "/docs/om/img_00.png", caption: "Step 1 — POS Section in sidebar" },
    { url: "/docs/om/img_03.png", caption: "Step 2 — POS product selection" },
  ],
  "OM-POS-002": [
    { url: "/docs/om/img_04.png", caption: "Step 1 — POS product search" },
    { url: "/docs/om/img_05.png", caption: "Step 2 — POS customer details" },
  ],
  "OM-POS-003": [
    { url: "/docs/om/img_07.png", caption: "Step 1 — POS review & checkout" },
  ],

  // OM-FLS: Flash Sales
  "OM-FLS-001": [
    { url: "/docs/om/img_24.png", caption: "Step 1 — Flash Sale Setup (title, discount, validity)" },
  ],
  "OM-FLS-002": [
    { url: "/docs/om/img_25.png", caption: "Step 1 — Flash Sale Product Setup (item, stock, discount)" },
  ],
  "OM-FLS-003": [
    { url: "/docs/om/img_26.png", caption: "Step 1 — Flash Sale List with status & actions" },
  ],
  "OM-FLS-004": [
    { url: "/docs/om/img_27.png", caption: "Step 1 — Flash Sales overview" },
  ],

  // OM-REF: Returns & Refunds
  "OM-REF-001": [
    { url: "/docs/bm/refund_settings_tab_1773152858972.png", caption: "Step 1 — Refund Settings tab" },
    { url: "/docs/bm/refund_reason_list_actions_1773153181199.png", caption: "Step 2 — Refund Reasons with actions" },
  ],

  // ════════════════════════════════════════════════════
  //  REPORTS & ANALYTICS
  // ════════════════════════════════════════════════════

  // RA-TRN: Transaction Report
  "RA-TRN-001": [
    { url: "/docs/ra/img_00.png", caption: "Step 1 — Report & Analytics sidebar" },
    { url: "/docs/ra/img_01.png", caption: "Step 2 — Transaction Report filter bar" },
  ],
  "RA-TRN-002": [
    { url: "/docs/ra/img_02.png", caption: "Step 1 — Transaction summary metrics" },
    { url: "/docs/ra/img_03.png", caption: "Step 2 — Transaction details" },
  ],

  // RA-ITM: Item Report
  "RA-ITM-001": [
    { url: "/docs/ra/img_04.png", caption: "Step 1 — Item Report filters" },
    { url: "/docs/ra/img_05.png", caption: "Step 2 — Item Report data table" },
  ],
  "RA-ITM-002": [
    { url: "/docs/ra/img_06.png", caption: "Step 1 — Item Report detail view" },
  ],

  // RA-STR: Store Report
  "RA-STR-001": [
    { url: "/docs/ra/img_07.png", caption: "Step 1 — Store Report summary" },
    { url: "/docs/ra/img_08.png", caption: "Step 2 — Store Report details" },
  ],
  "RA-STR-002": [
    { url: "/docs/ra/img_09.png", caption: "Step 1 — Store Report sales breakdown" },
  ],

  // RA-EXP: Expense Report
  "RA-EXP-001": [
    { url: "/docs/ra/img_10.png", caption: "Step 1 — Expense Report filters" },
    { url: "/docs/ra/img_11.png", caption: "Step 2 — Expense Report data" },
  ],

  // RA-DIS: Disbursement Report
  "RA-DIS-001": [
    { url: "/docs/ra/img_13.png", caption: "Step 1 — Disbursement Report (pending/completed/cancelled)" },
    { url: "/docs/ra/img_14.png", caption: "Step 2 — Disbursement details & filters" },
  ],

  // RA-ORD: Order Report
  "RA-ORD-001": [
    { url: "/docs/ra/img_19.png", caption: "Step 1 — Order Report search filters" },
    { url: "/docs/ra/img_20.png", caption: "Step 2 — Order Report data" },
  ],
  "RA-ORD-002": [
    { url: "/docs/ra/img_21.png", caption: "Step 1 — Order Report invoice view" },
  ],

  // ════════════════════════════════════════════════════
  //  EMPLOYEE MANAGEMENT
  // ════════════════════════════════════════════════════

  // EM-EMP-001: Add new employee
  "EM-EMP-001": [
    { url: "/docs/em/em_03_sidebar_navigation.png", caption: "Step 1 — Navigate to Employee Management in sidebar" },
    { url: "/docs/em/em_04_top_nav_addnew.png", caption: "Step 2 — Click 'Add New' to open form" },
    { url: "/docs/em/em_01_add_new_form.png", caption: "Step 3 — Fill General Info (name, zone, role, phone) & Account Info" },
  ],
  // EM-EMP-002: View employee list
  "EM-EMP-002": [
    { url: "/docs/em/em_03_sidebar_navigation.png", caption: "Step 1 — Navigate to Employee Management → List" },
    { url: "/docs/em/em_02_employee_list_table.png", caption: "Step 2 — Employee List with name, email, phone, role & actions" },
  ],
  // EM-EMP-003: Edit employee
  "EM-EMP-003": [
    { url: "/docs/em/em_02_employee_list_table.png", caption: "Step 1 — Employee List — click Edit (pencil) icon" },
    { url: "/docs/em/em_01_add_new_form.png", caption: "Step 2 — Edit Employee form" },
  ],

  // EM-ROL: Role Management
  "EM-ROL-001": [
    { url: "/docs/em/em_01_add_new_form.png", caption: "Step 1 — Select role from dropdown in employee form" },
  ],
  "EM-ROL-002": [
    { url: "/docs/em/em_02_employee_list_table.png", caption: "Step 1 — Employee List showing assigned roles" },
  ],
};

// ─────────────────────────────────────────────────────────────
//  SUBMODULE-LEVEL FALLBACK (used when no ref match)
// ─────────────────────────────────────────────────────────────
const SUBMODULE_IMAGE_MAP: Record<string, Record<string, StoryImage[]>> = {
  "Product Management": {
    "Categories": [
      { url: "/docs/pm/img_26.jpeg", caption: "Product Management sidebar" },
      { url: "/docs/pm/img_31.jpeg", caption: "Category List with status toggles" },
    ],
    "Sub Categories": [
      { url: "/docs/pm/img_33.jpeg", caption: "Sub Category List" },
    ],
    "Categories – Bulk Import": [
      { url: "/docs/pm/img_35.jpeg", caption: "Category Bulk Import" },
    ],
    "Categories – Bulk Export": [
      { url: "/docs/pm/img_38.jpeg", caption: "Export Categories" },
    ],
    "Attributes": [
      { url: "/docs/pm/img_42.jpeg", caption: "Attribute List" },
    ],
    "Units": [
      { url: "/docs/pm/img_45.jpeg", caption: "Units List" },
    ],
    "Brands": [
      { url: "/docs/pm/img_46.jpeg", caption: "Brand Setup" },
    ],
    "Product Setup – Add New": [
      { url: "/docs/pm/img_04.jpeg", caption: "Add New Item form" },
    ],
    "Product Setup – List": [
      { url: "/docs/pm/img_10.jpeg", caption: "Product List" },
    ],
    "Product Setup – Low Stock": [
      { url: "/docs/pm/img_15.jpeg", caption: "Low Stock List" },
    ],
    "Product Setup – Reviews": [
      { url: "/docs/pm/img_18.jpeg", caption: "Item Reviews" },
    ],
    "Product Setup – Bulk Import": [
      { url: "/docs/pm/img_20.jpeg", caption: "Items Bulk Import" },
    ],
    "Product Setup – Bulk Export": [
      { url: "/docs/pm/img_23.jpeg", caption: "Items Bulk Export" },
    ],
  },
  "Employee Management": {
    "Employee Invitations": [
      { url: "/docs/em/em_01_add_new_form.png", caption: "Add Employee form" },
    ],
    "Employee List": [
      { url: "/docs/em/em_02_employee_list_table.png", caption: "Employee List" },
    ],
    "Role Management": [
      { url: "/docs/em/em_01_add_new_form.png", caption: "Role selection" },
    ],
  },
};

/**
 * Get images for a specific story by ref ID (primary)
 * Falls back to subModule-level if no ref match found.
 */
export function getStoryImages(ref: string, module: string, subModule: string): StoryImage[] {
  // 1. Try ref-level match (most precise)
  if (REF_IMAGE_MAP[ref]) {
    return REF_IMAGE_MAP[ref];
  }
  // 2. Fall back to subModule-level
  return SUBMODULE_IMAGE_MAP[module]?.[subModule] || [];
}

/**
 * @deprecated Use getStoryImages(ref, module, subModule) instead
 * Kept for backward compatibility
 */
export function getSubModuleImages(module: string, subModule: string): StoryImage[] {
  return SUBMODULE_IMAGE_MAP[module]?.[subModule] || [];
}

/**
 * Get ALL images for a module (across all submodules) — used for module-level gallery
 */
export function getModuleImages(module: string): StoryImage[] {
  // Collect unique images from all ref-level entries for this module prefix
  const all: StoryImage[] = [];
  const seen = new Set<string>();

  // Collect from subModule map
  const subs = SUBMODULE_IMAGE_MAP[module];
  if (subs) {
    for (const images of Object.values(subs)) {
      for (const img of images) {
        if (!seen.has(img.url)) {
          seen.add(img.url);
          all.push(img);
        }
      }
    }
  }
  return all;
}
