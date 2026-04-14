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
  //  Source: pm_fresh/img_00–img_07 (verified from PDF)
  // ════════════════════════════════════════════════════

  // PM-CAT-001: Add a new product category
  "PM-CAT-001": [
    { url: "/docs/pm_fresh/img_01.jpeg", caption: "Step 1 — Product Management sidebar — Categories expanded" },
    { url: "/docs/pm_fresh/img_04.jpeg", caption: "Step 2 — Categories → Category selected in sidebar" },
    { url: "/docs/pm_fresh/img_06.jpeg", caption: "Step 3 — Add New Category form (Name + Image upload)" },
    { url: "/docs/pm_fresh/img_07.jpeg", caption: "Step 4 — Category image upload widget (1:1 ratio)" },
  ],
  // PM-CAT-002: View the full category list with search/export
  "PM-CAT-002": [
    { url: "/docs/pm_fresh/img_01.jpeg", caption: "Step 1 — Product Management sidebar — Categories expanded" },
    { url: "/docs/pm_fresh/img_04.jpeg", caption: "Step 2 — Categories → Category selected in sidebar" },
    { url: "/docs/pm_fresh/img_08.jpeg", caption: "Step 3 — Category List (search, pagination, export, status toggles)" },
  ],
  // PM-CAT-003: Edit an existing category's name or image
  "PM-CAT-003": [
    { url: "/docs/pm_fresh/img_01.jpeg", caption: "Step 1 — Product Management sidebar — Categories expanded" },
    { url: "/docs/pm_fresh/img_08.jpeg", caption: "Step 2 — Category List — click the Edit (pencil) icon" },
    { url: "/docs/pm_fresh/img_06.jpeg", caption: "Step 3 — Edit Category form — update name or image" },
  ],
  // PM-CAT-004: Enable/disable category status toggle
  "PM-CAT-004": [
    { url: "/docs/pm_fresh/img_01.jpeg", caption: "Step 1 — Product Management sidebar — Categories expanded" },
    { url: "/docs/pm_fresh/img_08.jpeg", caption: "Step 2 — Category List — toggle the Status switch to Enable/Disable" },
  ],
  // PM-CAT-005: Delete a category
  "PM-CAT-005": [
    { url: "/docs/pm_fresh/img_01.jpeg", caption: "Step 1 — Product Management sidebar — Categories expanded" },
    { url: "/docs/pm_fresh/img_08.jpeg", caption: "Step 2 — Category List — click the Delete (trash) icon" },
  ],

  // ════════════════════════════════════════════════════
  //  PRODUCT MANAGEMENT — Sub Categories
  //  Source: pm_fresh/img_07–img_10
  // ════════════════════════════════════════════════════

  // PM-SUB-001: Add a new sub-category
  "PM-SUB-001": [
    { url: "/docs/pm_fresh/img_01.jpeg", caption: "Step 1 — Product Management sidebar — Categories expanded" },
    { url: "/docs/pm_fresh/img_05.jpeg", caption: "Step 2 — Categories → Sub Category selected in sidebar" },
    { url: "/docs/pm_fresh/img_09.jpeg", caption: "Step 3 — Add New Sub Category form (select parent + name)" },
  ],
  // PM-SUB-002: View sub-category list alongside parent
  "PM-SUB-002": [
    { url: "/docs/pm_fresh/img_01.jpeg", caption: "Step 1 — Product Management sidebar — Categories expanded" },
    { url: "/docs/pm_fresh/img_05.jpeg", caption: "Step 2 — Categories → Sub Category in sidebar" },
    { url: "/docs/pm_fresh/img_10.jpeg", caption: "Step 3 — Sub Category List showing parent-child mapping" },
  ],
  // PM-SUB-003: Edit a sub-category
  "PM-SUB-003": [
    { url: "/docs/pm_fresh/img_01.jpeg", caption: "Step 1 — Product Management sidebar — Categories expanded" },
    { url: "/docs/pm_fresh/img_10.jpeg", caption: "Step 2 — Sub Category List — click Edit icon" },
    { url: "/docs/pm_fresh/img_09.jpeg", caption: "Step 3 — Edit sub-category name or reassign parent" },
  ],
  // PM-SUB-004: Delete a sub-category
  "PM-SUB-004": [
    { url: "/docs/pm_fresh/img_01.jpeg", caption: "Step 1 — Product Management sidebar — Categories expanded" },
    { url: "/docs/pm_fresh/img_10.jpeg", caption: "Step 2 — Sub Category List — click Delete (trash) icon" },
  ],

  // ════════════════════════════════════════════════════
  //  PRODUCT MANAGEMENT — Bulk Import (Categories)
  //  Source: pm_fresh/img_10–img_13
  // ════════════════════════════════════════════════════

  // PM-BIM-001: Download bulk import template
  "PM-BIM-001": [
    { url: "/docs/pm_fresh/img_01.jpeg", caption: "Step 1 — Product Management sidebar — Categories expanded" },
    { url: "/docs/pm_fresh/img_11.jpeg", caption: "Step 2 — Categories → Bulk Import selected in sidebar" },
    { url: "/docs/pm_fresh/img_12.jpeg", caption: "Step 3 — Category Bulk Import — 3-step instructions" },
    { url: "/docs/pm_fresh/img_13.jpeg", caption: "Step 4 — Download template (With Current Data / Without Any Data)" },
  ],
  // PM-BIM-002: Upload new categories via Excel
  "PM-BIM-002": [
    { url: "/docs/pm_fresh/img_01.jpeg", caption: "Step 1 — Product Management sidebar — Categories expanded" },
    { url: "/docs/pm_fresh/img_11.jpeg", caption: "Step 2 — Categories → Bulk Import in sidebar" },
    { url: "/docs/pm_fresh/img_13.jpeg", caption: "Step 3 — Select 'Upload New Data' → choose Excel → Upload" },
  ],
  // PM-BIM-003: Update existing categories via Excel
  "PM-BIM-003": [
    { url: "/docs/pm_fresh/img_01.jpeg", caption: "Step 1 — Product Management sidebar — Categories expanded" },
    { url: "/docs/pm_fresh/img_11.jpeg", caption: "Step 2 — Categories → Bulk Import in sidebar" },
    { url: "/docs/pm_fresh/img_13.jpeg", caption: "Step 3 — Select 'Update Existing Data' → upload corrected file" },
  ],

  // ════════════════════════════════════════════════════
  //  PRODUCT MANAGEMENT — Bulk Export (Categories)
  //  Source: pm_fresh/img_13–img_15
  // ════════════════════════════════════════════════════

  // PM-BEX-001: Export categories to Excel
  "PM-BEX-001": [
    { url: "/docs/pm_fresh/img_01.jpeg", caption: "Step 1 — Product Management sidebar — Categories expanded" },
    { url: "/docs/pm_fresh/img_14.jpeg", caption: "Step 2 — Categories → Bulk Export selected in sidebar" },
    { url: "/docs/pm_fresh/img_15.jpeg", caption: "Step 3 — Category Bulk Export — 2-step guide & Export button" },
  ],

  // ════════════════════════════════════════════════════
  //  PRODUCT MANAGEMENT — Attributes
  //  Source: pm_fresh/img_16–img_18
  // ════════════════════════════════════════════════════

  // PM-ATT-001: Add a new attribute
  "PM-ATT-001": [
    { url: "/docs/pm_fresh/img_01.jpeg", caption: "Step 1 — Product Management sidebar navigation" },
    { url: "/docs/pm_fresh/img_16.jpeg", caption: "Step 2 — Attributes selected in sidebar" },
    { url: "/docs/pm_fresh/img_17.jpeg", caption: "Step 3 — Add New Attribute form (multilingual name)" },
  ],
  // PM-ATT-002: View/search/export attribute list
  "PM-ATT-002": [
    { url: "/docs/pm_fresh/img_01.jpeg", caption: "Step 1 — Product Management sidebar navigation" },
    { url: "/docs/pm_fresh/img_16.jpeg", caption: "Step 2 — Attributes selected in sidebar" },
    { url: "/docs/pm_fresh/img_18.jpeg", caption: "Step 3 — Attribute List (search, export, edit/delete actions)" },
  ],
  // PM-ATT-003: Edit/delete an attribute
  "PM-ATT-003": [
    { url: "/docs/pm_fresh/img_16.jpeg", caption: "Step 1 — Attributes selected in sidebar" },
    { url: "/docs/pm_fresh/img_18.jpeg", caption: "Step 2 — Attribute List — click Edit or Delete icon" },
    { url: "/docs/pm_fresh/img_17.jpeg", caption: "Step 3 — Edit Attribute form" },
  ],

  // ════════════════════════════════════════════════════
  //  PRODUCT MANAGEMENT — Units
  //  Source: pm_fresh/img_19–img_21
  // ════════════════════════════════════════════════════

  // PM-UNT-001: Add a new unit
  "PM-UNT-001": [
    { url: "/docs/pm_fresh/img_01.jpeg", caption: "Step 1 — Product Management sidebar navigation" },
    { url: "/docs/pm_fresh/img_19.jpeg", caption: "Step 2 — Units selected in sidebar" },
    { url: "/docs/pm_fresh/img_20.jpeg", caption: "Step 3 — Add New Unit form (multilingual name)" },
  ],
  // PM-UNT-002: View/search/export unit list
  "PM-UNT-002": [
    { url: "/docs/pm_fresh/img_01.jpeg", caption: "Step 1 — Product Management sidebar navigation" },
    { url: "/docs/pm_fresh/img_19.jpeg", caption: "Step 2 — Units selected in sidebar" },
    { url: "/docs/pm_fresh/img_21.jpeg", caption: "Step 3 — Unit List (20 units, search, export, edit/delete)" },
  ],
  // PM-UNT-003: Edit/delete a unit
  "PM-UNT-003": [
    { url: "/docs/pm_fresh/img_19.jpeg", caption: "Step 1 — Units selected in sidebar" },
    { url: "/docs/pm_fresh/img_21.jpeg", caption: "Step 2 — Unit List — click Edit or Delete icon" },
    { url: "/docs/pm_fresh/img_20.jpeg", caption: "Step 3 — Edit Unit form" },
  ],

  // ════════════════════════════════════════════════════
  //  PRODUCT MANAGEMENT — Brands
  //  Source: pm_fresh/img_22–img_23
  // ════════════════════════════════════════════════════

  // PM-BRD-001: Add a new brand
  "PM-BRD-001": [
    { url: "/docs/pm_fresh/img_01.jpeg", caption: "Step 1 — Product Management sidebar navigation" },
    { url: "/docs/pm_fresh/img_22.jpeg", caption: "Step 2 — Brand Setup — click '+ Add new brand'" },
    { url: "/docs/pm_fresh/img_23.jpeg", caption: "Step 3 — Add New Brand modal (Status, Name, Logo upload)" },
  ],
  // PM-BRD-002: Enable or disable a brand using status toggle
  "PM-BRD-002": [
    { url: "/docs/pm_fresh/img_01.jpeg", caption: "Step 1 — Product Management sidebar navigation" },
    { url: "/docs/pm_fresh/img_22.jpeg", caption: "Step 2 — Brand Setup list — toggle the Status switch on the brand row" },
  ],
  // PM-BRD-003: View and search the full brand list
  "PM-BRD-003": [
    { url: "/docs/pm_fresh/img_01.jpeg", caption: "Step 1 — Product Management sidebar navigation" },
    { url: "/docs/pm_fresh/img_22.jpeg", caption: "Step 2 — Brand Setup list (254 brands, search bar, export, pagination)" },
  ],

  // ════════════════════════════════════════════════════
  //  PRODUCT MANAGEMENT — Product Setup (Add New)
  //  Source: pm_fresh/img_24–img_29
  //  ⚠ IDs aligned to user-stories-data.ts features
  // ════════════════════════════════════════════════════

  // PM-PRD-001: Enter product name & description in Default, English, Arabic
  "PM-PRD-001": [
    { url: "/docs/pm_fresh/img_01.jpeg", caption: "Step 1 — Product Management sidebar navigation" },
    { url: "/docs/pm_fresh/img_24.jpeg", caption: "Step 2 — Product Setup expanded — Add New in sidebar" },
    { url: "/docs/pm_fresh/img_25.jpeg", caption: "Step 3 — Add New Item form — name, description (Default/EN/AR tabs)" },
  ],
  // PM-PRD-002: Upload 1:1 product image and thumbnail
  "PM-PRD-002": [
    { url: "/docs/pm_fresh/img_24.jpeg", caption: "Step 1 — Product Setup → Add New in sidebar" },
    { url: "/docs/pm_fresh/img_25.jpeg", caption: "Step 2 — Item image & thumbnail upload section" },
    { url: "/docs/pm_fresh/img_26.jpeg", caption: "Step 3 — Image upload widgets close-up (1:1 ratio)" },
  ],
  // PM-PRD-003: Assign store, category, sub-category, brand
  "PM-PRD-003": [
    { url: "/docs/pm_fresh/img_24.jpeg", caption: "Step 1 — Product Setup → Add New in sidebar" },
    { url: "/docs/pm_fresh/img_27.jpeg", caption: "Step 2 — Store & Category Info (Store, Category, Sub category, Brand)" },
  ],
  // PM-PRD-004: Select unit of measurement and set maximum purchase quantity
  "PM-PRD-004": [
    { url: "/docs/pm_fresh/img_24.jpeg", caption: "Step 1 — Product Setup → Add New in sidebar" },
    { url: "/docs/pm_fresh/img_27.jpeg", caption: "Step 2 — Unit selector & Maximum Purchase Quantity Limit field" },
  ],
  // PM-PRD-005: Set price, stock quantity, and discount percentage
  "PM-PRD-005": [
    { url: "/docs/pm_fresh/img_24.jpeg", caption: "Step 1 — Product Setup → Add New in sidebar" },
    { url: "/docs/pm_fresh/img_27.jpeg", caption: "Step 2 — Price Information (Price, Total stock, Discount type, Discount %)" },
  ],
  // PM-PRD-006: Add product attributes and fill variant price/stock table
  "PM-PRD-006": [
    { url: "/docs/pm_fresh/img_24.jpeg", caption: "Step 1 — Product Setup → Add New in sidebar" },
    { url: "/docs/pm_fresh/img_28.jpeg", caption: "Step 2 — Attribute selector (e.g. COLORS, SIZE)" },
    { url: "/docs/pm_fresh/img_29.jpeg", caption: "Step 3 — Variant table (combination price & stock for each variant)" },
  ],
  // PM-PRD-007: Import product info from platform gallery
  "PM-PRD-007": [
    { url: "/docs/pm_fresh/img_24.jpeg", caption: "Step 1 — Product Setup → Add New in sidebar" },
    { url: "/docs/pm_fresh/img_25.jpeg", caption: "Step 2 — Add New Item form — Add Info From Gallery feature" },
  ],
  // PM-PRD-008: Add searchable keyword tags to the product
  "PM-PRD-008": [
    { url: "/docs/pm_fresh/img_24.jpeg", caption: "Step 1 — Product Setup → Add New in sidebar" },
    { url: "/docs/pm_fresh/img_28.jpeg", caption: "Step 2 — Tags section — enter keywords and add" },
  ],

  // ════════════════════════════════════════════════════
  //  PRODUCT MANAGEMENT — Product Setup (List)
  //  Source: pm_fresh/img_30–img_34
  //  ⚠ IDs aligned to user-stories-data.ts features
  // ════════════════════════════════════════════════════

  // PM-LST-001: View product list with search, filter, paginate
  "PM-LST-001": [
    { url: "/docs/pm_fresh/img_01.jpeg", caption: "Step 1 — Product Management sidebar navigation" },
    { url: "/docs/pm_fresh/img_30.jpeg", caption: "Step 2 — Product Setup → List selected in sidebar" },
    { url: "/docs/pm_fresh/img_31.jpeg", caption: "Step 3 — Item List (318 items, filters, search, export)" },
  ],
  // PM-LST-002: Edit any field of an existing product from the list
  "PM-LST-002": [
    { url: "/docs/pm_fresh/img_30.jpeg", caption: "Step 1 — Product Setup → List in sidebar" },
    { url: "/docs/pm_fresh/img_31.jpeg", caption: "Step 2 — Item List — locate product" },
    { url: "/docs/pm_fresh/img_34.jpeg", caption: "Step 3 — Click Edit (pencil) icon to modify product" },
  ],
  // PM-LST-003: Enable or disable a product using the status toggle
  "PM-LST-003": [
    { url: "/docs/pm_fresh/img_30.jpeg", caption: "Step 1 — Product Setup → List in sidebar" },
    { url: "/docs/pm_fresh/img_31.jpeg", caption: "Step 2 — Item List — toggle the Status switch on the product row" },
  ],
  // PM-LST-004: Delete a product permanently from the catalogue
  "PM-LST-004": [
    { url: "/docs/pm_fresh/img_30.jpeg", caption: "Step 1 — Product Setup → List in sidebar" },
    { url: "/docs/pm_fresh/img_34.jpeg", caption: "Step 2 — Item List — click Delete (trash) icon" },
  ],

  // ════════════════════════════════════════════════════
  //  PRODUCT MANAGEMENT — Low Stock List
  //  Source: pm_fresh/img_35–img_37
  //  ⚠ IDs aligned to user-stories-data.ts features
  // ════════════════════════════════════════════════════

  // PM-LOW-001: View low-stock products, filter by zone or store
  "PM-LOW-001": [
    { url: "/docs/pm_fresh/img_01.jpeg", caption: "Step 1 — Product Management sidebar navigation" },
    { url: "/docs/pm_fresh/img_35.jpeg", caption: "Step 2 — Product Setup → Low Stock List in sidebar" },
    { url: "/docs/pm_fresh/img_36.jpeg", caption: "Step 3 — Low Stock List (21 items, Current Stock = 0)" },
    { url: "/docs/pm_fresh/img_37.jpeg", caption: "Step 4 — Zone filter dropdown (All Zones / Bahrain)" },
  ],
  // PM-LOW-002: Update stock quantity from low-stock list
  "PM-LOW-002": [
    { url: "/docs/pm_fresh/img_35.jpeg", caption: "Step 1 — Low Stock List in sidebar" },
    { url: "/docs/pm_fresh/img_36.jpeg", caption: "Step 2 — Low Stock List — click Edit (pencil) icon to update stock" },
  ],

  // ════════════════════════════════════════════════════
  //  PRODUCT MANAGEMENT — Reviews
  //  Source: pm_fresh/img_38–img_39
  // ════════════════════════════════════════════════════

  // PM-REV-001: View product reviews
  "PM-REV-001": [
    { url: "/docs/pm_fresh/img_01.jpeg", caption: "Step 1 — Product Management sidebar navigation" },
    { url: "/docs/pm_fresh/img_38.jpeg", caption: "Step 2 — Product Setup → Review selected in sidebar" },
    { url: "/docs/pm_fresh/img_39.jpeg", caption: "Step 3 — Item Reviews page (Review Id, Item, Customer, Review, Date, Store Reply)" },
  ],
  // PM-REV-002: Delete an inappropriate or fraudulent review
  "PM-REV-002": [
    { url: "/docs/pm_fresh/img_38.jpeg", caption: "Step 1 — Review selected in sidebar" },
    { url: "/docs/pm_fresh/img_39.jpeg", caption: "Step 2 — Item Reviews — click action button to delete review" },
  ],

  // ════════════════════════════════════════════════════
  //  PRODUCT MANAGEMENT — Bulk Import (Products)
  //  Source: pm_fresh/img_40–img_42
  // ════════════════════════════════════════════════════

  // PM-PIB-001: Download product import template
  "PM-PIB-001": [
    { url: "/docs/pm_fresh/img_01.jpeg", caption: "Step 1 — Product Management sidebar navigation" },
    { url: "/docs/pm_fresh/img_40.jpeg", caption: "Step 2 — Product Setup → Bulk Import selected in sidebar" },
    { url: "/docs/pm_fresh/img_41.jpeg", caption: "Step 3 — Items Bulk Import 3-step instructions" },
    { url: "/docs/pm_fresh/img_42.jpeg", caption: "Step 4 — Download template & upload section" },
  ],
  // PM-PIB-002: Upload products via Excel
  "PM-PIB-002": [
    { url: "/docs/pm_fresh/img_40.jpeg", caption: "Step 1 — Bulk Import selected in sidebar" },
    { url: "/docs/pm_fresh/img_41.jpeg", caption: "Step 2 — Items Bulk Import instructions (3 steps)" },
    { url: "/docs/pm_fresh/img_42.jpeg", caption: "Step 3 — Select upload type → choose Excel → Upload" },
  ],

  // ════════════════════════════════════════════════════
  //  PRODUCT MANAGEMENT — Bulk Export (Products)
  //  Source: pm_fresh/img_43–img_44
  // ════════════════════════════════════════════════════

  // PM-PEX-001: Export product catalogue to Excel
  "PM-PEX-001": [
    { url: "/docs/pm_fresh/img_01.jpeg", caption: "Step 1 — Product Management sidebar navigation" },
    { url: "/docs/pm_fresh/img_43.jpeg", caption: "Step 2 — Product Setup → Bulk Export selected in sidebar" },
    { url: "/docs/pm_fresh/img_44.jpeg", caption: "Step 3 — Items Bulk Export — select type, Clear/Export" },
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

  // ZN-MOD-*: Module Setup (aliases matching current JSON refs)
  "ZN-MOD-001": [
    { url: "/docs/bm/capture_module_setup_1773151992715.webp", caption: "Step 1 — Module Setup overview" },
    { url: "/docs/bm/add_business_module_top_1773152149347.png", caption: "Step 2 — Add Business Module form (top)" },
    { url: "/docs/bm/add_business_module_bottom_1773152164225.png", caption: "Step 3 — Add Business Module form (bottom)" },
  ],
  "ZN-MOD-002": [
    { url: "/docs/bm/capture_module_list_1773152203636.webp", caption: "Step 1 — Module List showing all configured modules" },
  ],
  "ZN-MOD-003": [
    { url: "/docs/bm/capture_module_list_1773152203636.webp", caption: "Step 1 — Module List — click Edit icon" },
    { url: "/docs/bm/add_business_module_top_1773152149347.png", caption: "Step 2 — Edit module form" },
  ],
  "ZN-MOD-004": [
    { url: "/docs/bm/capture_module_list_1773152203636.webp", caption: "Step 1 — Module List — toggle Status or view details" },
  ],
  // Legacy aliases (kept for backward compat)
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

  // BS-WBS / BS-WEB: Websocket (both alias variants)
  "BS-WBS-001": [
    { url: "/docs/bm/websocket_overview_1773153677881.png", caption: "WebSocket — Configuration page" },
  ],
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
    { url: "/docs/om2/img_08.png", caption: "Order Management → Orders — full order list" },
    { url: "/docs/om2/img_10.png", caption: "Order status categories and filters" },
  ],
  "OM-ORD-002": [
    { url: "/docs/om2/img_08.png", caption: "Step 2 — Order Management → Orders — navigation" },
    { url: "/docs/om2/img_09.png", caption: "Order Management → Orders — status filter tabs (Pending, Confirmed, etc.)" },
    { url: "/docs/om2/img_11.png", caption: "Scheduled orders view" },
    ],
  "OM-ORD-003": [
    { url: "/docs/om2/img_08.png", caption: "Step 2 — Order Management → Orders — navigation" },
    { url: "/docs/om2/img_12.png", caption: "Order Management → Orders — search & filter by date, store, status" },
    { url: "/docs/om2/img_13.png", caption: "Filtered order results table" },
    ],
  "OM-ORD-004": [
    { url: "/docs/om2/img_08.png", caption: "Step 2 — Order Management → Orders — navigation" },
    { url: "/docs/om2/img_14.png", caption: "Accepted Orders list" },
    { url: "/docs/om2/img_15.png", caption: "Processing orders" },
    ],
  "OM-ORD-005": [
    { url: "/docs/om2/img_08.png", caption: "Step 2 — Order Management → Orders — navigation" },
    { url: "/docs/om2/img_16.png", caption: "Delivered Orders history" },
    { url: "/docs/om2/img_17.png", caption: "Order completion summary" },
    ],

  // OM-DET: Order Details
  "OM-DET-001": [
    { url: "/docs/om2/img_08.png", caption: "Step 2 — Order Management → Orders — navigation" },
    { url: "/docs/om2/img_20.png", caption: "Order Management → Orders → Click order — Order Details page" },
    ],
  "OM-DET-002": [
    { url: "/docs/om2/img_08.png", caption: "Step 2 — Order Management → Orders — navigation" },
    { url: "/docs/om2/img_19.png", caption: "Order Management → Orders → Order Details — Update status dropdown" },
    { url: "/docs/om2/img_20.png", caption: "Order Details with action buttons (Confirm, Cancel, Invoice)" },
    ],

  // OM-POS: POS Section
  "OM-POS-001": [
    { url: "/docs/om2/img_01.png", caption: "POS — Select Store" },
    { url: "/docs/om2/img_02.png", caption: "POS — Product Search and Selection" },
  ],
  "OM-POS-002": [
    { url: "/docs/om2/img_03.png", caption: "POS → Add Customer Details — form fields" },
    { url: "/docs/om2/img_04.png", caption: "POS customer name and phone fields" },
    ],
  "OM-POS-003": [
    { url: "/docs/om2/img_07.png", caption: "POS → Review & Checkout — order summary" },
    ],

  // OM-OFP: Offline Payments
  "OM-OFP-001": [
    { url: "/docs/om2/img_08.png", caption: "Step 2 — Order Management → Offline Payments — navigation" },
    { url: "/docs/om2/img_08.png", caption: "Order Management → Offline Payments — navigation" },
    { url: "/docs/om2/img_21.png", caption: "Offline Payments — pending verification list" },
    ],
  "OM-OFP-002": [
    { url: "/docs/om2/img_08.png", caption: "Step 2 — Order Management → Offline Payments — navigation" },
    { url: "/docs/om2/img_21.png", caption: "Order Management → Offline Payments — click order to verify payment" },
    ],

  // OM-REF: Returns & Refunds
  "OM-REF-001": [
    { url: "/docs/om2/img_08.png", caption: "Step 2 — Order Management → Order Refunds — navigation" },
    { url: "/docs/om2/img_08.png", caption: "Order Management → Order Refunds — navigation" },
    { url: "/docs/bm/refund_settings_tab_1773152858972.png", caption: "Refund request list — Approve or Reject" },
    ],

  // OM-FLS: Flash Sales (under Order Management)
  "OM-FLS-001": [
    { url: "/docs/om2/img_08.png", caption: "Step 2 — Order Management → Flash Sales section" },
    { url: "/docs/om2/img_22.png", caption: "Step 3 — Order Management → Flash Sales — Create flash sale form (title, discount %, validity dates)" },
  ],
  "OM-FLS-002": [
    { url: "/docs/om2/img_08.png", caption: "Step 2 — Order Management → Flash Sales section" },
    { url: "/docs/om2/img_22.png", caption: "Step 3 — Order Management → Flash Sales → Add Products — select item, set stock limit & discount" },
    { url: "/docs/om2/img_23.png", caption: "Step 4 — Product promotion fields (original price, discounted price, max qty)" },
  ],
  "OM-FLS-003": [
    { url: "/docs/om2/img_08.png", caption: "Step 2 — Order Management → Flash Sales section" },
    { url: "/docs/om2/img_23.png", caption: "Step 3 — Order Management → Flash Sales → Manage — flash sale list with status & actions" },
    { url: "/docs/om2/img_24.png", caption: "Step 4 — Flash sale controls (enable/disable, edit, delete)" },
  ],
  "OM-FLS-004": [
    { url: "/docs/om2/img_08.png", caption: "Step 2 — Order Management → Flash Sales active overview" },
    { url: "/docs/om2/img_23.png", caption: "Step 3 — Flash Sales list with status toggles" },
    { url: "/docs/om2/img_24.png", caption: "Step 4 — Flash sale management actions" },
  ],

  // FS-*: Flash Sales (JSON ref aliases — Order Management module)
  "FS-CRT-001": [
    { url: "/docs/om2/img_08.png", caption: "Step 2 — Order Management → Flash Sales section" },
    { url: "/docs/om2/img_22.png", caption: "Step 3 — Order Management → Flash Sales — Create flash sale form (title, Admin Discount %, Store Discount %, Start Date, End Date)" },
    { url: "/docs/om2/img_23.png", caption: "Step 4 — Flash Sales — Add Products to the event after saving" },
  ],
  "FS-PRD-001": [
    { url: "/docs/om2/img_08.png", caption: "Step 2 — Order Management → Flash Sales section" },
    { url: "/docs/om2/img_22.png", caption: "Step 3 — Order Management → Flash Sales → Click Add Products — select item, original price & discount %" },
    { url: "/docs/om2/img_23.png", caption: "Step 4 — Set sale stock quantity and discounted price → Save" },
  ],
  "FS-MGT-001": [
    { url: "/docs/om2/img_08.png", caption: "Step 2 — Order Management → Flash Sales section" },
    { url: "/docs/om2/img_23.png", caption: "Step 3 — Order Management → Flash Sales → Manage — list with status toggle & actions" },
    { url: "/docs/om2/img_24.png", caption: "Step 4 — Flash sale controls (Publish toggle, Edit, Delete, Duplicate)" },
  ],

  // ════════════════════════════════════════════════════
  //  REPORTS & ANALYTICS
  //  All 35 images: img_00 (sidebar) through img_34
  // ════════════════════════════════════════════════════

  // RA-TXN: Transaction Report (img_00, img_01, img_02, img_03)
  "RA-TXN-001": [
    { url: "/docs/ra2/img_00.png", caption: "Step 1 — Report & Analytics sidebar navigation" },
    { url: "/docs/ra2/img_01.png", caption: "Step 2 — Transaction Report — filter bar (module, zone, store, time range)" },
    { url: "/docs/ra2/img_02.png", caption: "Step 3 — Transaction Report — summary cards (Admin Earning, Store Earning, Deliveryman Earning, Completed & Refunded) + Order Transactions table" },
  ],
  "RA-TXN-002": [
    { url: "/docs/ra2/img_00.png", caption: "Step 1 — Report & Analytics sidebar navigation" },
    { url: "/docs/ra2/img_02.png", caption: "Step 2 — Transaction Report — Order Transactions detail table" },
    { url: "/docs/ra2/img_03.png", caption: "Step 3 — Export dropdown — download as Excel or CSV" },
  ],
  // Aliases
  "RA-TRN-001": [
    { url: "/docs/ra2/img_00.png", caption: "Report & Analytics sidebar navigation" },
    { url: "/docs/ra2/img_01.png", caption: "Transaction Report — filter bar" },
    { url: "/docs/ra2/img_02.png", caption: "Transaction Report — summary metrics & table" },
  ],
  "RA-TRN-002": [
    { url: "/docs/ra2/img_02.png", caption: "Transaction Report — detail table" },
    { url: "/docs/ra2/img_03.png", caption: "Transaction Report — export options" },
  ],

  // RA-ITM: Item Report (img_04, img_05, img_06)
  "RA-ITM-001": [
    { url: "/docs/ra2/img_00.png", caption: "Step 1 — Report & Analytics sidebar navigation" },
    { url: "/docs/ra2/img_04.png", caption: "Step 2 — Item Report — filter by module, store, zone, time, category" },
    { url: "/docs/ra2/img_05.png", caption: "Step 3 — Item Report — product sales table (sell count, revenue, discount, avg sale, ratings)" },
    { url: "/docs/ra2/img_06.png", caption: "Step 4 — Item Report — export options (Excel, CSV)" },
  ],

  // RA-STW / RA-STR: Store Wise Report (img_07, img_08, img_09, img_10)
  "RA-STW-001": [
    { url: "/docs/ra2/img_00.png", caption: "Step 1 — Report & Analytics sidebar navigation" },
    { url: "/docs/ra2/img_07.png", caption: "Step 2 — Store Wise Report → Summary Report tab (total orders, avg value, payment chart)" },
    { url: "/docs/ra2/img_08.png", caption: "Step 3 — Store Wise Report → Sales Report tab (gross sale, tax, commission totals)" },
    { url: "/docs/ra2/img_09.png", caption: "Step 4 — Store Wise Report → Order Report tab (order stats, chart, Total Sales table)" },
    { url: "/docs/ra2/img_10.png", caption: "Step 5 — All Orders table with export, filter & column settings" },
  ],
  "RA-STR-001": [
    { url: "/docs/ra2/img_00.png", caption: "Report & Analytics sidebar navigation" },
    { url: "/docs/ra2/img_07.png", caption: "Store Wise Report — Summary Report" },
    { url: "/docs/ra2/img_08.png", caption: "Store Wise Report — Sales Report" },
  ],

  // RA-EXP: Expense Report (img_11, img_12)
  "RA-EXP-001": [
    { url: "/docs/ra2/img_00.png", caption: "Step 1 — Report & Analytics sidebar navigation" },
    { url: "/docs/ra2/img_11.png", caption: "Step 2 — Expense Report — filter by module, zone, vendor, customer, type, time" },
    { url: "/docs/ra2/img_12.png", caption: "Step 3 — Expense Report — admin discount expense list table" },
  ],

  // RA-DSB: Disbursement Report (img_13, img_14, img_15, img_16, img_17, img_18)
  "RA-DSB-001": [
    { url: "/docs/ra2/img_00.png", caption: "Step 1 — Report & Analytics sidebar navigation" },
    { url: "/docs/ra2/img_13.png", caption: "Step 2 — Disbursement Report → Store Disbursements tab — summary cards (Pending, Completed, Cancelled) & filter" },
    { url: "/docs/ra2/img_14.png", caption: "Step 3 — Disbursement Report → Delivery Man Disbursements tab — Total Disbursements table" },
    { url: "/docs/ra2/img_15.png", caption: "Step 4 — Store Disbursement — detail filter (zone, module, store, payment method, status, time)" },
    { url: "/docs/ra2/img_16.png", caption: "Step 5 — Delivery Man Disbursement — detail filter (zone, delivery man, payment method, status, time)" },
    { url: "/docs/ra2/img_17.png", caption: "Step 6 — Total Disbursements table with search & export" },
    { url: "/docs/ra2/img_18.png", caption: "Step 7 — Export dropdown — download as Excel or CSV" },
  ],
  "RA-DIS-001": [
    { url: "/docs/ra2/img_00.png", caption: "Report & Analytics sidebar navigation" },
    { url: "/docs/ra2/img_13.png", caption: "Disbursement Report — Store Disbursements" },
    { url: "/docs/ra2/img_14.png", caption: "Disbursement Report — Delivery Man Disbursements" },
  ],

  // RA-ORD: Order Report (img_19, img_20, img_21)
  "RA-ORD-001": [
    { url: "/docs/ra2/img_00.png", caption: "Step 1 — Report & Analytics sidebar navigation" },
    { url: "/docs/ra2/img_19.png", caption: "Step 2 — Order Report — filter bar (modules, zones, stores, customers, time)" },
    { url: "/docs/ra2/img_20.png", caption: "Step 3 — Order Report — statistics cards (Total, In Progress, On The Way, Delivered, Failed, Refunded, Cancelled) & full order table" },
    { url: "/docs/ra2/img_21.png", caption: "Step 4 — Order Report — export dropdown with order details (Excel, CSV)" },
  ],

  // RA-ATX: Admin Tax Report (img_22, img_23, img_24)
  "RA-ATX-001": [
    { url: "/docs/ra2/img_00.png", caption: "Step 1 — Report & Analytics sidebar navigation" },
    { url: "/docs/ra2/img_22.png", caption: "Step 2 — Admin Tax Report — select Date Range Type" },
    { url: "/docs/ra2/img_23.png", caption: "Step 3 — Admin Tax Report — choose income source tax & enter tax rate" },
    { url: "/docs/ra2/img_24.png", caption: "Step 4 — Admin Tax Report — generated report with total income & total tax breakdown" },
  ],

  // RA-VTX: Vendor Tax Report (img_25, img_26, img_27, img_28, img_29, img_30)
  "RA-VTX-001": [
    { url: "/docs/ra2/img_00.png", caption: "Step 1 — Report & Analytics sidebar navigation" },
    { url: "/docs/ra2/img_25.png", caption: "Step 2 — Vendor Tax Report — filter by Date Range & Select Vendor" },
    { url: "/docs/ra2/img_26.png", caption: "Step 3 — Vendor Tax Report — summary metrics (Total Orders, Total Order Amount, Total Tax Amount)" },
    { url: "/docs/ra2/img_27.png", caption: "Step 4 — Vendor Tax Report — vendor earnings tax summary table" },
    { url: "/docs/ra2/img_28.png", caption: "Step 5 — Vendor Tax Report — export dropdown (Excel, CSV)" },
    { url: "/docs/ra2/img_30.png", caption: "Step 6 — All Vendor Taxes — detailed tax table per order" },
  ],

  // RA-PTX: Parcel Tax Report (img_31, img_32, img_34)
  "RA-PTX-001": [
    { url: "/docs/ra2/img_00.png", caption: "Step 1 — Report & Analytics sidebar navigation" },
    { url: "/docs/ra2/img_31.png", caption: "Step 2 — Parcel Tax Report — filter by date range" },
    { url: "/docs/ra2/img_32.png", caption: "Step 3 — Parcel Tax Report — delivery tax breakdown table" },
    { url: "/docs/ra2/img_34.png", caption: "Step 4 — Parcel Tax Report — export dropdown (Excel, CSV)" },
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

  // ════════════════════════════════════════════════════
  //  STORE MANAGEMENT (SM-*)
  // ════════════════════════════════════════════════════

  // SM-NEW: Add New Store
  "SM-NEW-001": [
    { url: "/docs/sm2/img_02.png", caption: "Step 2 — Store Management — accessing the module" },
    { url: "/docs/bm/capture_business_settings_1773152502724.webp", caption: "Step 1 — Navigate to Store Management → Add New Store" },
    ],
  "SM-NEW-002": [
    { url: "/docs/sm2/img_02.png", caption: "Step 2 — Store Management — accessing the module" },
    { url: "/docs/bm/business_settings_top_1773152555791.png", caption: "Step 1 — Configure store operational hours" },
    ],

  // SM-ADD: Store Address
  "SM-ADD-001": [
    { url: "/docs/bm/zone_setup_top_1773151880128.png", caption: "Step 1 — Set store address on map" },
    ],

  // SM-LST: Store List
  "SM-LST-001": [
    { url: "/docs/sm2/img_09.png", caption: "Step 2 — Store Management → Stores List — navigation" },
    { url: "/docs/bm/capture_module_list_1773152203636.webp", caption: "Step 1 — Store List — view all stores" },
    ],
  "SM-LST-002": [
    { url: "/docs/sm2/img_09.png", caption: "Step 2 — Store Management → Stores List — navigation" },
    { url: "/docs/bm/capture_module_list_1773152203636.webp", caption: "Step 1 — Store List — click Edit" },
    { url: "/docs/bm/business_settings_top_1773152555791.png", caption: "Step 2 — Edit Store form" },
    ],
  "SM-LST-003": [
    { url: "/docs/sm2/img_09.png", caption: "Step 2 — Store Management → Stores List — navigation" },
    { url: "/docs/bm/capture_module_list_1773152203636.webp", caption: "Step 1 — Store List — toggle Status switch" },
    ],

  // SM-REC: Store Recommendations
  "SM-REC-001": [
    { url: "/docs/sm2/img_11.png", caption: "Step 2 — Store Management → Recommended Store — navigation" },
    { url: "/docs/bm/capture_module_setup_1773151992715.webp", caption: "Step 1 — Featured / Recommended store toggle" },
    ],

  // SM-BIM: Store Bulk Import
  "SM-BIM-001": [
    { url: "/docs/sm2/img_13.png", caption: "Step 2 — Store Management → Bulk Import — navigation" },
    { url: "/docs/pm/img_35.jpeg", caption: "Step 1 — Store Bulk Import — download template & upload" },
    ],

  // SM-BEX: Store Bulk Export
  "SM-BEX-001": [
    { url: "/docs/sm2/img_16.png", caption: "Step 2 — Store Management → Bulk Export — navigation" },
    { url: "/docs/pm/img_38.jpeg", caption: "Step 1 — Store Bulk Export — select filters & download" },
    ],

  // ════════════════════════════════════════════════════
  //  FINANCIAL OPERATIONS (FN-*)
  //  Note: Business Management manual Section 8 covers Financial Operations.
  //  Images are drawn from Business Management (bm2) screens.
  // ════════════════════════════════════════════════════

  // FN-WDR: Withdrawal Requests
  "FN-WDR-001": [
    { url: "/docs/bm2/img_05.png", caption: "Transactions & Reports → Business Management — sidebar navigation" },
    { url: "/docs/ra2/img_13.png", caption: "Business Management → Withdraw Requests — Pending / Approved / Denied tabs" },
    { url: "/docs/ra2/img_14.png", caption: "Withdraw Requests — request list with store name, amount & status" },
  ],
  "FN-WDR-002": [
    { url: "/docs/bm2/img_05.png", caption: "Step 1 — Business Management — sidebar navigation" },
    { url: "/docs/ra2/img_13.png", caption: "Transactions & Reports → Business Management → Withdraw Requests — Pending tab" },
    { url: "/docs/ra2/img_14.png", caption: "Withdraw Requests — click eye icon to review details → click Approve" },
    ],
  "FN-WDR-003": [
    { url: "/docs/bm2/img_05.png", caption: "Step 1 — Business Management — sidebar navigation" },
    { url: "/docs/ra2/img_13.png", caption: "Transactions & Reports → Business Management → Withdraw Requests — Pending tab" },
    { url: "/docs/ra2/img_14.png", caption: "Withdraw Requests — click Deny → enter admin note → Confirm" },
    ],

  // FN-DSB: Store Disbursement
  "FN-DSB-001": [
    { url: "/docs/bm2/img_05.png", caption: "Transactions & Reports → Business Management — sidebar navigation" },
    { url: "/docs/ra2/img_13.png", caption: "Business Management → Store Disbursement — filter by status (Pending / Completed)" },
    { url: "/docs/ra2/img_14.png", caption: "Store Disbursement — disbursement list with store name, amount & date" },
  ],

  // FN-DLD: Delivery Man Disbursement
  "FN-DLD-001": [
    { url: "/docs/bm2/img_05.png", caption: "Transactions & Reports → Business Management — sidebar navigation" },
    { url: "/docs/ra2/img_13.png", caption: "Business Management → Delivery Man Disbursement — driver payout list" },
  ],

  // FN-COD: Collect Cash
  "FN-COD-001": [
    { url: "/docs/bm2/img_05.png", caption: "Step 1 — Business Management — sidebar navigation" },
    { url: "/docs/bm2/img_06.png", caption: "Transactions & Reports → Business Management → Collect Cash — enter amount, payment method & reference" },
    { url: "/docs/bm2/img_07.png", caption: "Collect Cash — payment method selector & submit" },
    ],
  "FN-COD-002": [
    { url: "/docs/bm2/img_05.png", caption: "Step 1 — Business Management — sidebar navigation" },
    { url: "/docs/bm2/img_06.png", caption: "Transactions & Reports → Business Management → Collect Cash — view collection log" },
    ],

  // FN-DPM: Delivery Man Payments
  "FN-DPM-001": [
    { url: "/docs/bm2/img_05.png", caption: "Step 1 — Business Management — sidebar navigation" },
    { url: "/docs/bm2/img_08.png", caption: "Transactions & Reports → Business Management → Delivery Man Payments — enter driver, amount, payment type → Save" },
    ],

  // FN-MTH: Withdraw Method
  "FN-MTH-001": [
    { url: "/docs/bm2/img_05.png", caption: "Step 1 — Business Management — sidebar navigation" },
    { url: "/docs/bm2/img_09.png", caption: "Transactions & Reports → Business Management → Withdraw Method — method list" },
    { url: "/docs/bm2/img_10.png", caption: "Withdraw Method → Add New Method — define name & required fields → Save" },
    ],
  "FN-MTH-002": [
    { url: "/docs/bm2/img_05.png", caption: "Step 1 — Business Management — sidebar navigation" },
    { url: "/docs/bm2/img_09.png", caption: "Transactions & Reports → Business Management → Withdraw Method — Toggle Enable/Disable → Click Set as Default" },
    ],

  // ════════════════════════════════════════════════════
  //  FLASH SALES (Order Management → Flash Sales)
  // ════════════════════════════════════════════════════

  // FS-CRT-001: Create a new Flash Sale
  "FS-CRT-001": [
    { url: "/docs/om2/img_08.png", caption: "Step 1 — Order Management → Flash Sales — sidebar navigation" },
    { url: "/docs/om2/img_21.png", caption: "Step 2 — Flash Sale Setup — Fill Title, Admin %, Store %, Start Date, End Date → Submit" },
    { url: "/docs/om2/img_23.png", caption: "Step 3 — Flash Sale List — verify the new sale appears" },
    ],
  // FS-PRD-001: Add Products to a Flash Sale
  "FS-PRD-001": [
    { url: "/docs/om2/img_08.png", caption: "Step 1 — Order Management → Flash Sales — sidebar navigation" },
    { url: "/docs/om2/img_23.png", caption: "Step 2 — Flash Sale List — click '+ Add New Product' on the sale" },
    { url: "/docs/om2/img_22.png", caption: "Step 3 — Flash Sale Product Setup — select item, set stock, discount type & amount → Submit" },
    ],
  // FS-MGT-001: Manage Flash Sales (publish, edit, delete)
  "FS-MGT-001": [
    { url: "/docs/om2/img_08.png", caption: "Step 1 — Order Management → Flash Sales — sidebar navigation" },
    { url: "/docs/om2/img_23.png", caption: "Step 2 — Flash Sale List — toggle Publish, click Edit or Delete" },
    ],

  // ════════════════════════════════════════════════════
  //  PROMOTION MANAGEMENT (PR-* / PM-BCM / PM-CPN etc.)
  // ════════════════════════════════════════════════════

  // PR-BCM: Basic Campaigns
  "PR-BCM-001": [
    { url: "/docs/pr2/img_02.png", caption: "Step 2 — Promotion Management — accessing the module" },
    { url: "/docs/pr2/img_01.png", caption: "Promotion Management — module overview" },
    { url: "/docs/pr2/img_03.png", caption: "Promotion Management → Campaigns — navigation" },
    { url: "/docs/pr2/img_04.png", caption: "Promotion Management → Campaigns → Add New Basic Campaign — form (name, dates, discount type)" },
    ],
  "PR-BCM-002": [
    { url: "/docs/pr2/img_02.png", caption: "Step 2 — Promotion Management — accessing the module" },
    { url: "/docs/pr2/img_05.png", caption: "Campaigns → Add Basic Campaign — form fields (title, image, validity, stores)" },
    { url: "/docs/pr2/img_06.png", caption: "Promotion Management → Campaigns — Basic Campaign list with status toggle" },
    ],
  "PM-BCM-001": [
    { url: "/docs/pr2/img_02.png", caption: "Step 2 — Promotion Management → Campaigns — navigation" },
    { url: "/docs/pr2/img_03.png", caption: "Promotion Management → Campaigns — navigation" },
    { url: "/docs/pr2/img_04.png", caption: "Add New Basic Campaign — form" },
    ],
  "PM-BCM-002": [
    { url: "/docs/pr2/img_02.png", caption: "Step 2 — Promotion Management → Campaigns — navigation" },
    { url: "/docs/pr2/img_06.png", caption: "Campaigns — Basic Campaign list & status" },
    ],

  // PR-ICM: Item Campaigns
  "PR-ICM-001": [
    { url: "/docs/pr2/img_02.png", caption: "Step 2 — Promotion Management — accessing the module" },
    { url: "/docs/pr2/img_07.png", caption: "Promotion Management → Campaigns → Add New Item Campaign — select store & products" },
    { url: "/docs/pr2/img_08.png", caption: "Item Campaign — product selection and discount % fields" },
    { url: "/docs/pr2/img_09.png", caption: "Item Campaign — campaign validity and confirmation" },
    ],
  "PR-ICM-002": [
    { url: "/docs/pr2/img_02.png", caption: "Step 2 — Promotion Management — accessing the module" },
    { url: "/docs/pr2/img_02.png", caption: "Promotion Management — sidebar navigation" },
    { url: "/docs/pr2/img_03.png", caption: "Promotion Management → Campaigns — navigation" },
    { url: "/docs/pr2/img_10.png", caption: "Promotion Management → Campaigns → Item Campaigns — campaign list with status & actions" },
    ],
  "PM-ICM-001": [
    { url: "/docs/pr2/img_02.png", caption: "Step 2 — Promotion Management → Campaigns — navigation" },
    { url: "/docs/pr2/img_02.png", caption: "Promotion Management — sidebar navigation" },
    { url: "/docs/pr2/img_03.png", caption: "Promotion Management → Campaigns — navigation" },
    { url: "/docs/pr2/img_07.png", caption: "Promotion Management → Campaigns → Add Item Campaign — select store & products" },
    { url: "/docs/pr2/img_08.png", caption: "Item Campaign — product selection and discount % fields" },
    { url: "/docs/pr2/img_09.png", caption: "Item Campaign — set validity and confirm" },
    ],
  "PM-ICM-002": [
    { url: "/docs/pr2/img_02.png", caption: "Step 2 — Promotion Management → Campaigns — navigation" },
    { url: "/docs/pr2/img_02.png", caption: "Promotion Management — sidebar navigation" },
    { url: "/docs/pr2/img_03.png", caption: "Promotion Management → Campaigns — navigation" },
    { url: "/docs/pr2/img_10.png", caption: "Promotion Management → Campaigns → Item Campaigns — campaign list with status toggle & actions" },
    ],

  // PR-BNR: Banners
  "PR-BNR-001": [
    { url: "/docs/pr2/img_11.png", caption: "Step 2 — Promotion Management → Banners — navigation" },
    { url: "/docs/pr2/img_11.png", caption: "Promotion Management → Banners — navigation" },
    { url: "/docs/pr2/img_12.png", caption: "Promotion Management → Banners → Add New Banner — image, link, validity & zone" },
    ],
  "PR-BNR-002": [
    { url: "/docs/pr2/img_11.png", caption: "Step 2 — Promotion Management → Banners — navigation" },
    { url: "/docs/pr2/img_13.png", caption: "Promotion Management → Banners — Banner list with status toggle & reorder" },
    ],
  "PM-BNR-001": [
    { url: "/docs/pr2/img_11.png", caption: "Step 2 — Promotion Management → Banners — navigation" },
    { url: "/docs/pr2/img_12.png", caption: "Promotion Management → Banners — Add New Banner" },
    ],
  "PM-BNR-002": [
    { url: "/docs/pr2/img_11.png", caption: "Step 2 — Promotion Management → Banners — navigation" },
    { url: "/docs/pr2/img_13.png", caption: "Banner list with status & reorder" },
    ],

  // PR-OBN: Other Banners
  "PR-OBN-001": [
    { url: "/docs/pr2/img_14.png", caption: "Step 2 — Promotion Management → Other Banners — navigation" },
    { url: "/docs/pr2/img_14.png", caption: "Promotion Management → Other Banners — navigation" },
    { url: "/docs/pr2/img_16.png", caption: "Other Banners — block configuration (Popup, Category, Module banners)" },
    { url: "/docs/pr2/img_17.png", caption: "Other Banners — banner block reference" },
    { url: "/docs/pr2/img_18.png", caption: "Other Banners — upload image to banner block" },
    ],
  "PM-OBN-001": [
    { url: "/docs/pr2/img_14.png", caption: "Step 2 — Promotion Management → Other Banners — navigation" },
    { url: "/docs/pr2/img_16.png", caption: "Promotion Management → Other Banners — block configuration" },
    ],

  // PR-CPN: Coupons
  "PR-CPN-001": [
    { url: "/docs/pr2/img_19.png", caption: "Step 2 — Promotion Management → Coupons — navigation" },
    { url: "/docs/pr2/img_19.png", caption: "Promotion Management → Coupons — navigation" },
    { url: "/docs/pr2/img_20.png", caption: "Promotion Management → Coupons → Add New Coupon — code, type, discount, validity" },
    ],
  "PR-CPN-002": [
    { url: "/docs/pr2/img_19.png", caption: "Step 2 — Promotion Management → Coupons — navigation" },
    { url: "/docs/pr2/img_21.png", caption: "Promotion Management → Coupons — Coupon list with status toggle & expiry date" },
    ],
  "PM-CPN-001": [
    { url: "/docs/pr2/img_19.png", caption: "Step 2 — Promotion Management → Coupons — navigation" },
    { url: "/docs/pr2/img_20.png", caption: "Promotion Management → Coupons — Add New Coupon" },
    ],
  "PM-CPN-002": [
    { url: "/docs/pr2/img_19.png", caption: "Step 2 — Promotion Management → Coupons — navigation" },
    { url: "/docs/pr2/img_21.png", caption: "Coupon list with status & expiry" },
    ],

  // PR-NTF: Push Notifications
  "PR-NTF-001": [
    { url: "/docs/pr2/img_22.png", caption: "Step 2 — Promotion Management → Push Notification — navigation" },
    { url: "/docs/pr2/img_22.png", caption: "Promotion Management → Push Notification — navigation" },
    { url: "/docs/pr2/img_23.png", caption: "Push Notification → Add New — title, body, image & target audience" },
    ],
  "PR-NTF-002": [
    { url: "/docs/pr2/img_22.png", caption: "Step 2 — Promotion Management → Push Notification — navigation" },
    { url: "/docs/pr2/img_24.png", caption: "Promotion Management → Push Notification — notification history & status" },
    ],
  "PM-NTF-001": [
    { url: "/docs/pr2/img_22.png", caption: "Step 2 — Promotion Management → Push Notification — navigation" },
    { url: "/docs/pr2/img_23.png", caption: "Promotion Management → Push Notification — Add New" },
    ],
  "PM-NTF-002": [
    { url: "/docs/pr2/img_22.png", caption: "Step 2 — Promotion Management → Push Notification — navigation" },
    { url: "/docs/pr2/img_24.png", caption: "Notification history & delivery status" },
    ],

  // PR-ADV: Advertisements
  "PR-ADV-001": [
    { url: "/docs/pr2/img_25.png", caption: "Step 2 — Promotion Management → Advertisements — navigation" },
    { url: "/docs/pr2/img_25.png", caption: "Promotion Management → Advertisements — navigation" },
    { url: "/docs/pr2/img_26.png", caption: "Promotion Management → Advertisements → Add New Advertisement — title, image, link, dates" },
    { url: "/docs/pr2/img_27.png", caption: "Advertisement form — zone, module and store targeting" },
    ],
  "PR-ADV-002": [
    { url: "/docs/pr2/img_25.png", caption: "Step 2 — Promotion Management → Advertisements — navigation" },
    { url: "/docs/pr2/img_28.png", caption: "Promotion Management → Advertisements → Advertisement Requests — review pending requests" },
    ],
  "PR-ADV-003": [
    { url: "/docs/pr2/img_25.png", caption: "Step 2 — Promotion Management → Advertisements — navigation" },
    { url: "/docs/pr2/img_29.png", caption: "Promotion Management → Advertisements — Advertisement list with status & actions" },
    ],
  "PM-ADV-001": [
    { url: "/docs/pr2/img_25.png", caption: "Step 2 — Promotion Management → Advertisements — navigation" },
    { url: "/docs/pr2/img_26.png", caption: "Promotion Management → Advertisements — Add New Advertisement" },
    ],
  "PM-ADV-002": [
    { url: "/docs/pr2/img_25.png", caption: "Step 2 — Promotion Management → Advertisements — navigation" },
    { url: "/docs/pr2/img_28.png", caption: "Advertisement Requests — review New/Update/Denied tabs" },
    ],
  "PM-ADV-003": [
    { url: "/docs/pr2/img_25.png", caption: "Step 2 — Promotion Management → Advertisements — navigation" },
    { url: "/docs/pr2/img_29.png", caption: "Ads List — all active advertisements" },
    ],
};

// ─────────────────────────────────────────────────────────────
//  SUBMODULE-LEVEL FALLBACK (used when no ref match)
// ─────────────────────────────────────────────────────────────
const SUBMODULE_IMAGE_MAP: Record<string, Record<string, StoryImage[]>> = {
  "Product Management": {
    "Categories": [
      { url: "/docs/pm_fresh/img_01.jpeg", caption: "Product Management sidebar" },
      { url: "/docs/pm_fresh/img_08.jpeg", caption: "Category List with status toggles" },
    ],
    "Sub Categories": [
      { url: "/docs/pm_fresh/img_10.jpeg", caption: "Sub Category List" },
    ],
    "Categories \u2013 Bulk Import": [
      { url: "/docs/pm_fresh/img_12.jpeg", caption: "Category Bulk Import" },
    ],
    "Categories \u2013 Bulk Export": [
      { url: "/docs/pm_fresh/img_15.jpeg", caption: "Export Categories" },
    ],
    "Attributes": [
      { url: "/docs/pm_fresh/img_18.jpeg", caption: "Attribute List" },
    ],
    "Units": [
      { url: "/docs/pm_fresh/img_21.jpeg", caption: "Unit List" },
    ],
    "Brands": [
      { url: "/docs/pm_fresh/img_22.jpeg", caption: "Brand Setup" },
    ],
    "Product Setup \u2013 Add New": [
      { url: "/docs/pm_fresh/img_25.jpeg", caption: "Add New Item form" },
    ],
    "Product Setup \u2013 List": [
      { url: "/docs/pm_fresh/img_31.jpeg", caption: "Item List" },
    ],
    "Product Setup \u2013 Low Stock": [
      { url: "/docs/pm_fresh/img_36.jpeg", caption: "Low Stock List" },
    ],
    "Product Setup \u2013 Reviews": [
      { url: "/docs/pm_fresh/img_39.jpeg", caption: "Item Reviews" },
    ],
    "Product Setup \u2013 Bulk Import": [
      { url: "/docs/pm_fresh/img_41.jpeg", caption: "Items Bulk Import" },
    ],
    "Product Setup \u2013 Bulk Export": [
      { url: "/docs/pm_fresh/img_44.jpeg", caption: "Items Bulk Export" },
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
  "Flash Sales": {
    "Flash Sale Creation": [
      { url: "/docs/om2/img_08.png", caption: "Order Management → Flash Sales — sidebar navigation" },
      { url: "/docs/om2/img_21.png", caption: "Flash Sale Setup — creation form" },
    ],
    "Flash Sale Products": [
      { url: "/docs/om2/img_22.png", caption: "Flash Sale Product Setup" },
    ],
    "Flash Sale Management": [
      { url: "/docs/om2/img_23.png", caption: "Flash Sale List" },
    ],
  },
  "Promotion Management": {
    "Basic Campaigns": [
      { url: "/docs/pr2/img_03.png", caption: "Campaigns — Basic & Item navigation" },
      { url: "/docs/pr2/img_04.png", caption: "Add New Basic Campaign form" },
    ],
    "Item Campaigns": [
      { url: "/docs/pr2/img_07.png", caption: "Add New Item Campaign form" },
    ],
    "Banners": [
      { url: "/docs/pr2/img_12.png", caption: "Add New Banner form" },
    ],
    "Other Banners": [
      { url: "/docs/pr2/img_16.png", caption: "Other Banners — block configuration" },
    ],
    "Coupons": [
      { url: "/docs/pr2/img_20.png", caption: "Add New Coupon form" },
    ],
    "Push Notifications": [
      { url: "/docs/pr2/img_23.png", caption: "Send Push Notification form" },
    ],
    "Advertisements": [
      { url: "/docs/pr2/img_26.png", caption: "Add New Advertisement form" },
    ],
  },
  "Reports & Analytics": {
    "Transaction Report": [
      { url: "/docs/ra2/img_00.png", caption: "Report & Analytics sidebar navigation" },
      { url: "/docs/ra2/img_01.png", caption: "Transaction Report — filter bar" },
      { url: "/docs/ra2/img_02.png", caption: "Transaction Report — summary & table" },
      { url: "/docs/ra2/img_03.png", caption: "Transaction Report — export" },
    ],
    "Item Report": [
      { url: "/docs/ra2/img_04.png", caption: "Item Report — filter" },
      { url: "/docs/ra2/img_05.png", caption: "Item Report — product sales table" },
      { url: "/docs/ra2/img_06.png", caption: "Item Report — export" },
    ],
    "Store Wise Report": [
      { url: "/docs/ra2/img_07.png", caption: "Store Wise Report — Summary tab" },
      { url: "/docs/ra2/img_08.png", caption: "Store Wise Report — Sales tab" },
      { url: "/docs/ra2/img_09.png", caption: "Store Wise Report — Order tab" },
      { url: "/docs/ra2/img_10.png", caption: "All Orders table" },
    ],
    "Expense Report": [
      { url: "/docs/ra2/img_11.png", caption: "Expense Report — filter" },
      { url: "/docs/ra2/img_12.png", caption: "Expense Report — expense list" },
    ],
    "Disbursement Report": [
      { url: "/docs/ra2/img_13.png", caption: "Disbursement — Store Disbursements" },
      { url: "/docs/ra2/img_14.png", caption: "Disbursement — Delivery Man" },
      { url: "/docs/ra2/img_15.png", caption: "Store Disbursement detail filter" },
      { url: "/docs/ra2/img_16.png", caption: "Delivery Man Disbursement detail filter" },
      { url: "/docs/ra2/img_17.png", caption: "Total Disbursements table" },
      { url: "/docs/ra2/img_18.png", caption: "Export dropdown" },
    ],
    "Order Report": [
      { url: "/docs/ra2/img_19.png", caption: "Order Report — filter bar" },
      { url: "/docs/ra2/img_20.png", caption: "Order Report — stats & order table" },
      { url: "/docs/ra2/img_21.png", caption: "Order Report — export" },
    ],
    "Admin Tax Report": [
      { url: "/docs/ra2/img_22.png", caption: "Admin Tax — date range selector" },
      { url: "/docs/ra2/img_23.png", caption: "Admin Tax — tax rate entry" },
      { url: "/docs/ra2/img_24.png", caption: "Admin Tax — generated report" },
    ],
    "Vendor Tax Report": [
      { url: "/docs/ra2/img_25.png", caption: "Vendor Tax — filter bar" },
      { url: "/docs/ra2/img_26.png", caption: "Vendor Tax — summary metrics" },
      { url: "/docs/ra2/img_27.png", caption: "Vendor Tax — summary table" },
      { url: "/docs/ra2/img_28.png", caption: "Vendor Tax — export" },
      { url: "/docs/ra2/img_30.png", caption: "All Vendor Taxes table" },
    ],
    "Parcel Tax Report": [
      { url: "/docs/ra2/img_31.png", caption: "Parcel Tax — date filter" },
      { url: "/docs/ra2/img_32.png", caption: "Parcel Tax — breakdown table" },
      { url: "/docs/ra2/img_34.png", caption: "Parcel Tax — export" },
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
