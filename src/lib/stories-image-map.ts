// ═══════════════════════════════════════════════════════════════
//  USER STORIES IMAGE MAP
//  Maps module → subModule → array of screenshots with captions
//  Used by the UserStoriesPanel to show relevant images
// ═══════════════════════════════════════════════════════════════

export interface StoryImage {
  url: string;
  caption: string;
}

// Maps "Module Name" → "SubModule Name" → images
const STORIES_IMAGE_MAP: Record<string, Record<string, StoryImage[]>> = {

  // ════════════════════════════════════════════════════
  //  PRODUCT MANAGEMENT
  // ════════════════════════════════════════════════════
  "Product Management": {
    "Categories": [
      { url: "/docs/pm/img_25.jpeg", caption: "Categories — Dashboard Navigation" },
      { url: "/docs/pm/img_29.jpeg", caption: "Add New Category — Name & Image Upload" },
      { url: "/docs/pm/img_30.jpeg", caption: "Image Upload Area — Category Image" },
      { url: "/docs/pm/img_31.jpeg", caption: "Category List — Full View with Search & Table" },
    ],
    "Sub Categories": [
      { url: "/docs/pm/img_32.jpeg", caption: "Add New Sub Category — Name & Parent Category" },
      { url: "/docs/pm/img_33.jpeg", caption: "Sub Category List — Full View" },
    ],
    "Categories – Bulk Import": [
      { url: "/docs/pm/img_34.jpeg", caption: "Sidebar — Bulk Import Selected" },
      { url: "/docs/pm/img_35.jpeg", caption: "Categories Bulk Import — 3-Step Guide" },
      { url: "/docs/pm/img_36.jpeg", caption: "Bulk Import — Template Download & File Upload" },
    ],
    "Categories – Bulk Export": [
      { url: "/docs/pm/img_37.jpeg", caption: "Sidebar — Bulk Export Selected" },
      { url: "/docs/pm/img_38.jpeg", caption: "Categories Bulk Export — 2-Step Guide" },
    ],
    "Attributes": [
      { url: "/docs/pm/img_40.jpeg", caption: "Navigate to Attributes" },
      { url: "/docs/pm/img_41.jpeg", caption: "Add New Attribute" },
      { url: "/docs/pm/img_42.jpeg", caption: "Attributes List" },
    ],
    "Units": [
      { url: "/docs/pm/img_43.jpeg", caption: "Navigate to Units" },
      { url: "/docs/pm/img_44.jpeg", caption: "Add New Unit" },
      { url: "/docs/pm/img_45.jpeg", caption: "Units List" },
    ],
    "Brands": [
      { url: "/docs/pm/img_46.jpeg", caption: "Brand Setup Navigation" },
      { url: "/docs/pm/img_47.jpeg", caption: "Add New Brand — Name & Logo Upload" },
    ],
    "Product Setup – Add New": [
      { url: "/docs/pm/img_01.jpeg", caption: "Admin Dashboard — Main Navigation" },
      { url: "/docs/pm/img_04.jpeg", caption: "Add New Item — Name, Description & Image" },
      { url: "/docs/pm/img_05.jpeg", caption: "Image Upload — Item Image & Thumbnail" },
      { url: "/docs/pm/img_06.jpeg", caption: "Store & Category + Price Information" },
      { url: "/docs/pm/img_07.jpeg", caption: "Attribute Selection & Tags Input" },
      { url: "/docs/pm/img_08.jpeg", caption: "Variant Pricing — Colors & Sizes" },
    ],
    "Product Setup – List": [
      { url: "/docs/pm/img_09.jpeg", caption: "Product List — Sidebar & Search Filters" },
      { url: "/docs/pm/img_10.jpeg", caption: "Full Item List with Search, Export & Table" },
      { url: "/docs/pm/img_11.jpeg", caption: "Store Dropdown — Search & Select" },
      { url: "/docs/pm/img_13.jpeg", caption: "Product Table — Detailed List with Pagination" },
    ],
    "Product Setup – Low Stock": [
      { url: "/docs/pm/img_14.jpeg", caption: "Sidebar — Low Stock List Selected" },
      { url: "/docs/pm/img_15.jpeg", caption: "Low Stock List — Items at Zero Stock" },
      { url: "/docs/pm/img_16.jpeg", caption: "Low Stock — Search & Filter Bar" },
    ],
    "Product Setup – Reviews": [
      { url: "/docs/pm/img_17.jpeg", caption: "Sidebar — Reviews Selected" },
      { url: "/docs/pm/img_18.jpeg", caption: "Item Reviews — Review List with Search & Export" },
    ],
    "Product Setup – Bulk Import": [
      { url: "/docs/pm/img_19.jpeg", caption: "Sidebar — Bulk Import Selected" },
      { url: "/docs/pm/img_20.jpeg", caption: "Items Bulk Import — 3-Step Guide" },
      { url: "/docs/pm/img_21.jpeg", caption: "Bulk Import — Template, Data Type & Upload" },
    ],
    "Product Setup – Bulk Export": [
      { url: "/docs/pm/img_22.jpeg", caption: "Sidebar — Bulk Export Selected" },
      { url: "/docs/pm/img_23.jpeg", caption: "Items Bulk Export — 2-Step Guide" },
    ],
  },

  // ════════════════════════════════════════════════════
  //  ZONE & MODULE SETUP
  // ════════════════════════════════════════════════════
  "Zone & Module Setup": {
    "Zone Setup": [
      { url: "/docs/bm/capture_zone_setup_1773151868617.webp", caption: "Zone Setup — Configuration Page" },
      { url: "/docs/bm/zone_setup_top_1773151880128.png", caption: "Zone Setup — Name & Coordinates" },
      { url: "/docs/bm/zone_setup_bottom_1773151887870.png", caption: "Zone Setup — Modules & Charges" },
    ],
    "Module Setup": [
      { url: "/docs/bm/capture_module_setup_1773151992715.webp", caption: "Module Setup — Overview" },
      { url: "/docs/bm/module_setup_expanded_sidebar_1773152116783.png", caption: "Module Setup — Sidebar Navigation" },
      { url: "/docs/bm/add_business_module_top_1773152149347.png", caption: "Add Business Module — Top Section" },
      { url: "/docs/bm/add_business_module_bottom_1773152164225.png", caption: "Add Business Module — Bottom Section" },
      { url: "/docs/bm/capture_module_list_1773152203636.webp", caption: "Module List — All Configured Modules" },
    ],
  },

  // ════════════════════════════════════════════════════
  //  BUSINESS SETTINGS
  // ════════════════════════════════════════════════════
  "Business Settings": {
    "Business Information": [
      { url: "/docs/bm/capture_business_settings_1773152502724.webp", caption: "Business Settings — Overview" },
      { url: "/docs/bm/business_settings_top_1773152555791.png", caption: "Business Settings — Top Section" },
      { url: "/docs/bm/business_settings_middle_1773152563428.png", caption: "Business Settings — Middle Section" },
      { url: "/docs/bm/business_settings_bottom_1773152576887.png", caption: "Business Settings — Bottom Section" },
      { url: "/docs/bm/business_settings_tabs_check_1773152773341.png", caption: "Business Settings — Tabs Overview" },
    ],
    "Vendor Settings": [
      { url: "/docs/bm/vendor_settings_tab_1773152890800.png", caption: "Vendor Settings Tab" },
      { url: "/docs/bm/vendor_tab_overview_1773153226352.png", caption: "Vendor Tab — Overview" },
      { url: "/docs/bm/vendor_tab_info_hover_1773153243111.png", caption: "Vendor Tab — Info Details" },
    ],
    "Deliveryman Settings": [
      { url: "/docs/bm/deliveryman_tab_overview_1773153256217.png", caption: "Deliveryman Tab — Overview" },
      { url: "/docs/bm/deliveryman_tab_info_hover_1773153265263.png", caption: "Deliveryman Tab — Details" },
    ],
    "Customer & Wallet": [
      { url: "/docs/bm/customer_setup_overview_1773153380585.png", caption: "Customer Setup — Overview" },
      { url: "/docs/bm/customer_wallet_modal_1773153395510.png", caption: "Customer Wallet — Modal View" },
    ],
    "Refund Settings": [
      { url: "/docs/bm/refund_settings_tab_1773152858972.png", caption: "Refund Settings Tab" },
      { url: "/docs/bm/refund_reason_validation_1773153144772.png", caption: "Refund Reason — Validation" },
      { url: "/docs/bm/refund_reason_list_actions_1773153181199.png", caption: "Refund Reason — List & Actions" },
      { url: "/docs/bm/refund_reason_added_1773153158049.png", caption: "Refund Reason — Successfully Added" },
    ],
    "Language Setup": [
      { url: "/docs/bm/languages_overview_1773153521418.png", caption: "Languages — Overview" },
      { url: "/docs/bm/add_new_language_modal_1773153558206.png", caption: "Add New Language — Modal" },
    ],
    "System Tax": [
      { url: "/docs/bm/capture_system_tax_interactive_1773153760439.webp", caption: "System Tax — Interactive Setup" },
      { url: "/docs/bm/create_taxes_empty_list_1773153820998.png", caption: "Create Taxes — Empty List" },
      { url: "/docs/bm/create_tax_form_1773153854104.png", caption: "Create Tax — Form" },
      { url: "/docs/bm/setup_taxes_order_module_1773153882153.png", caption: "Setup Taxes — Order Module" },
    ],
    "Subscription Management": [
      { url: "/docs/bm/capture_subscription_mgt_1773154032937.webp", caption: "Subscription Management — Overview" },
      { url: "/docs/bm/subscription_package_list_empty_1773154158139.png", caption: "Subscription Package List" },
      { url: "/docs/bm/add_subscription_package_top_1773154208570.png", caption: "Add Subscription Package — Form" },
      { url: "/docs/bm/subscriber_list_empty_1773154238418.png", caption: "Subscriber List" },
      { url: "/docs/bm/subscription_settings_overview_1773154378345.png", caption: "Subscription Settings" },
    ],
    "Pages & Social Media": [
      { url: "/docs/bm/capture_pages_social_media_1773154437627.webp", caption: "Pages & Social Media — Overview" },
      { url: "/docs/bm/social_media_overview_1773154545475.png", caption: "Social Media Links" },
      { url: "/docs/bm/terms_and_condition_editor_1773154601897.png", caption: "Terms & Conditions Editor" },
      { url: "/docs/bm/privacy_policy_editor_1773154651407.png", caption: "Privacy Policy Editor" },
      { url: "/docs/bm/about_us_editor_1773154664386.png", caption: "About Us Editor" },
    ],
    "Gallery": [
      { url: "/docs/bm/capture_gallery_active_page_1773154988755.webp", caption: "Gallery — Active Page" },
      { url: "/docs/bm/gallery_main_page_1773155002425.png", caption: "Gallery — Main Page" },
      { url: "/docs/bm/gallery_upload_modal_1773155015056.png", caption: "Gallery — Upload Modal" },
      { url: "/docs/bm/gallery_category_contents_1773155055243.png", caption: "Gallery — Category Contents" },
      { url: "/docs/bm/gallery_preview_modal_1773155085144.png", caption: "Gallery — Preview" },
    ],
    "Websocket Config": [
      { url: "/docs/bm/websocket_overview_1773153677881.png", caption: "WebSocket — Configuration" },
    ],
    "Landing Page": [
      { url: "/docs/bm/landing_page_overview_1773153639442.png", caption: "Landing Page — Overview" },
      { url: "/docs/bm/admin_landing_page_fixed_data_1773154532123.png", caption: "Admin Landing Page" },
      { url: "/docs/bm/flutter_landing_page_fixed_data_1773154579132.png", caption: "Flutter Landing Page" },
      { url: "/docs/bm/react_landing_page_header_1773154563557.png", caption: "React Landing Page Header" },
    ],
  },

  // ════════════════════════════════════════════════════
  //  ORDER MANAGEMENT
  // ════════════════════════════════════════════════════
  "Order Management": {
    "Order List": [
      { url: "/docs/om/img_08.png", caption: "Order Management — Navigation" },
      { url: "/docs/om/img_09.png", caption: "Order Categories Overview" },
      { url: "/docs/om/img_10.png", caption: "All Orders List" },
      { url: "/docs/om/img_11.png", caption: "Pending Orders" },
    ],
    "Order Processing": [
      { url: "/docs/om/img_14.png", caption: "Accepted Orders" },
      { url: "/docs/om/img_16.png", caption: "Delivered Orders" },
      { url: "/docs/om/img_00.png", caption: "POS Section Navigation" },
      { url: "/docs/om/img_03.png", caption: "POS — Product Selection" },
      { url: "/docs/om/img_04.png", caption: "POS — Product Search" },
      { url: "/docs/om/img_05.png", caption: "POS — Customer Details" },
      { url: "/docs/om/img_07.png", caption: "POS — Review & Checkout" },
    ],
    "Order Details": [
      { url: "/docs/om/img_21.png", caption: "Order Details View" },
      { url: "/docs/om/img_23.png", caption: "Print Invoice" },
    ],
    "Returns & Refunds": [
      { url: "/docs/bm/refund_settings_tab_1773152858972.png", caption: "Refund Settings Tab" },
      { url: "/docs/bm/refund_reason_list_actions_1773153181199.png", caption: "Refund Reason — List & Actions" },
    ],
  },

  // ════════════════════════════════════════════════════
  //  REPORTS & ANALYTICS
  // ════════════════════════════════════════════════════
  "Reports & Analytics": {
    "Dashboard": [
      { url: "/docs/bm/admin_dashboard_1773151774208.png", caption: "Admin Dashboard — Main Overview" },
      { url: "/docs/ra/img_00.png", caption: "Reports & Analytics Navigation" },
    ],
    "Sales Report": [
      { url: "/docs/ra/img_07.png", caption: "Store Report — Summary & Sales" },
      { url: "/docs/ra/img_08.png", caption: "Store Report — Order Details" },
      { url: "/docs/ra/img_09.png", caption: "Store Report — Sales Report" },
    ],
    "Product Report": [
      { url: "/docs/ra/img_04.png", caption: "Item Report — Filters" },
      { url: "/docs/ra/img_05.png", caption: "Item Report — Table" },
      { url: "/docs/ra/img_06.png", caption: "Item Report — Details" },
    ],
    "Store Report": [
      { url: "/docs/ra/img_07.png", caption: "Store Report — Summary" },
      { url: "/docs/ra/img_08.png", caption: "Store Report — Orders" },
      { url: "/docs/ra/img_09.png", caption: "Store Report — Sales" },
    ],
    "Transaction Report": [
      { url: "/docs/ra/img_01.png", caption: "Transaction Report — Filters" },
      { url: "/docs/ra/img_02.png", caption: "Transaction Report — Summary Metrics" },
      { url: "/docs/ra/img_03.png", caption: "Transaction Report — Details" },
    ],
    "Export": [
      { url: "/docs/ra/img_19.png", caption: "Order Report — Filters" },
      { url: "/docs/ra/img_20.png", caption: "Order Report — Table" },
      { url: "/docs/ra/img_21.png", caption: "Order Report — Invoice" },
    ],
  },

  // ════════════════════════════════════════════════════
  //  EMPLOYEE MANAGEMENT
  // ════════════════════════════════════════════════════
  "Employee Management": {
    "Employee Invitations": [
      { url: "/docs/em/em_add_employee_form.png", caption: "Add New Employee — General Information Form" },
      { url: "/docs/em/em_employee_general_info.png", caption: "Employee Form — Name, Zone, Role & Phone" },
      { url: "/docs/em/em_employee_image_upload.png", caption: "Employee Image Upload — 1:1 Ratio" },
    ],
    "Role Management": [
      { url: "/docs/em/em_add_employee_form.png", caption: "Add Employee — Role Selection" },
      { url: "/docs/em/em_employee_list.png", caption: "Employee List — Roles Column" },
    ],
    "Employee List": [
      { url: "/docs/em/em_employee_list.png", caption: "Employee List — Table with Search" },
    ],
    "Access Control": [
      { url: "/docs/em/em_add_employee_form.png", caption: "Employee Form — Role-Based Access" },
    ],
    "Activity Audit": [
      { url: "/docs/em/em_employee_list.png", caption: "Employee List — Activity Overview" },
    ],
  },

  // ════════════════════════════════════════════════════
  //  MARKETING & PROMOTIONS
  // ════════════════════════════════════════════════════
  "Marketing & Promotions": {
    "Flash Sales": [
      { url: "/docs/om/img_24.png", caption: "Flash Sale — Validity & Details" },
      { url: "/docs/om/img_25.png", caption: "Flash Sale — Add Products & Discount" },
      { url: "/docs/om/img_26.png", caption: "Managing Flash Sales" },
      { url: "/docs/om/img_27.png", caption: "Flash Sales List" },
    ],
  },

  // ════════════════════════════════════════════════════
  //  FINANCIAL OPERATIONS
  // ════════════════════════════════════════════════════
  "Financial Operations": {
    "Withdraw Requests": [
      { url: "/docs/ra/img_13.png", caption: "Disbursement Report — Summary" },
      { url: "/docs/ra/img_14.png", caption: "Disbursement Report — Details" },
    ],
    "Store Disbursement": [
      { url: "/docs/ra/img_13.png", caption: "Disbursement Report" },
    ],
  },
};

/**
 * Get images for a specific module + subModule combo
 */
export function getSubModuleImages(module: string, subModule: string): StoryImage[] {
  return STORIES_IMAGE_MAP[module]?.[subModule] || [];
}

/**
 * Get ALL images for a module (across all submodules)
 */
export function getModuleImages(module: string): StoryImage[] {
  const subs = STORIES_IMAGE_MAP[module];
  if (!subs) return [];
  const all: StoryImage[] = [];
  const seen = new Set<string>();
  for (const images of Object.values(subs)) {
    for (const img of images) {
      if (!seen.has(img.url)) {
        seen.add(img.url);
        all.push(img);
      }
    }
  }
  return all;
}
