export interface DocImage {
  url: string;
  caption: string;
}

// Maps topic keys to their relevant documentation screenshots
const IMAGE_REGISTRY: Record<string, DocImage[]> = {
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
    { url: "/docs/pm/img_28.jpeg", caption: "Navigation to Category Section" },
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

  // ── POS (Point of Sale) ──
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
    { url: "/docs/om/img_17.png", caption: "Delivered Orders" },
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

  // ── Transaction Report ──
  transaction_report: [
    { url: "/docs/ra/img_00.png", caption: "Reports & Analytics Navigation" },
    { url: "/docs/ra/img_01.png", caption: "Transaction Report — Filters" },
    { url: "/docs/ra/img_02.png", caption: "Transaction Report — Summary Metrics" },
    { url: "/docs/ra/img_03.png", caption: "Transaction Report — Details" },
  ],

  // ── Item / Product Report ──
  item_report: [
    { url: "/docs/ra/img_04.png", caption: "Item Report — Filters" },
    { url: "/docs/ra/img_05.png", caption: "Item Report — Table" },
    { url: "/docs/ra/img_06.png", caption: "Item Report — Details" },
  ],

  // ── Store Report ──
  store_report: [
    { url: "/docs/ra/img_07.png", caption: "Store Report — Summary & Sales" },
    { url: "/docs/ra/img_08.png", caption: "Store Report — Order Details" },
    { url: "/docs/ra/img_09.png", caption: "Store Report — Sales Report" },
  ],

  // ── Expense Report ──
  expense_report: [
    { url: "/docs/ra/img_11.png", caption: "Expense Report — Filters" },
    { url: "/docs/ra/img_12.png", caption: "Expense Report — Table" },
  ],

  // ── Disbursement Report ──
  disbursement_report: [
    { url: "/docs/ra/img_13.png", caption: "Disbursement Report — Summary" },
    { url: "/docs/ra/img_14.png", caption: "Disbursement Report — Details" },
  ],

  // ── Order Report ──
  order_report: [
    { url: "/docs/ra/img_19.png", caption: "Order Report — Filters" },
    { url: "/docs/ra/img_20.png", caption: "Order Report — Table & Actions" },
    { url: "/docs/ra/img_21.png", caption: "Order Report — Invoice" },
  ],

  // ── Tax Report ──
  tax_report: [
    { url: "/docs/ra/img_22.png", caption: "Tax Report — Configuration" },
    { url: "/docs/ra/img_23.png", caption: "Tax Report — Rate Selection" },
    { url: "/docs/ra/img_26.png", caption: "Tax Report — Results" },
  ],

  // ── Vendor Tax Report ──
  vendor_tax_report: [
    { url: "/docs/ra/img_27.png", caption: "Vendor Tax Report — Summary" },
    { url: "/docs/ra/img_29.png", caption: "Vendor Tax Report — Table" },
    { url: "/docs/ra/img_30.png", caption: "Vendor Tax Report — Details" },
  ],
};

// Keyword matching rules: each registry key maps to trigger keywords
const KEYWORD_MAP: Record<string, string[]> = {
  add_product: ["add product", "new product", "add new item", "create product", "product setup", "add item", "new item", "product name", "product image", "product description", "pricing", "stock", "variant", "gallery"],
  product_list: ["product list", "item list", "view product", "edit product", "delete product", "enable product", "disable product", "search product", "filter product", "export product"],
  low_stock: ["low stock", "out of stock", "stock alert", "reorder", "stock update"],
  reviews: ["review", "rating", "customer review", "delete review"],
  bulk_import_products: ["bulk import product", "import product", "upload product", "import excel", "import template"],
  bulk_export_products: ["bulk export product", "export product", "download product"],
  categories: ["categor", "add category", "new category", "create category", "edit category", "delete category", "category list"],
  sub_categories: ["sub categ", "subcateg", "sub-categ", "add sub", "create sub"],
  bulk_import_categories: ["bulk import categor", "import categor"],
  bulk_export_categories: ["bulk export categor", "export categor"],
  attributes: ["attribute", "add attribute", "color attribute", "size attribute"],
  units: ["unit", "add unit", "kg", "piece", "litre", "unit of measure"],
  brands: ["brand", "add brand", "brand logo", "brand setup"],
  pos: ["pos", "point of sale", "manual order", "walk-in", "walkin"],
  orders: ["order", "manage order", "view order", "accept order", "reject order", "order status", "pending order", "confirmed order", "delivered order", "cancel order", "invoice", "dispatch"],
  flash_sales: ["flash sale", "flash deal", "limited time"],
  transaction_report: ["transaction report", "transaction", "payment report"],
  item_report: ["item report", "product report", "top product", "best seller", "low performer"],
  store_report: ["store report", "store performance", "store analytic"],
  expense_report: ["expense report", "expense"],
  disbursement_report: ["disbursement", "disburse"],
  order_report: ["order report"],
  tax_report: ["tax report", "tax calculation", "generate tax"],
  vendor_tax_report: ["vendor tax", "store tax"],
};

/**
 * Finds relevant documentation images based on user query and AI response text.
 * Returns top matching image set (max 2 topic groups).
 */
export function findRelevantImages(query: string, aiResponse: string): DocImage[] {
  const combined = (query + " " + aiResponse).toLowerCase();

  // Score each topic
  const scores: { key: string; score: number }[] = [];
  for (const [key, keywords] of Object.entries(KEYWORD_MAP)) {
    let score = 0;
    for (const kw of keywords) {
      if (combined.includes(kw)) {
        // Exact word in query gets higher weight
        if (query.toLowerCase().includes(kw)) score += 3;
        else score += 1;
      }
    }
    if (score > 0) scores.push({ key, score });
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

  return result;
}
