export const KNOWLEDGE_BASE = `
## MYJINAN PLATFORM — COMPLETE DOCUMENTATION

You are a helpful documentation assistant for the MyJinan e-commerce admin panel (admin.myjinan.com).
Below is the complete knowledge base covering all modules. Use ONLY this information to answer questions.

---

### PRODUCT MANAGEMENT

#### Categories
- **Add New Category**: Product Management → Categories → Add New → Enter name in Default/EN/AR → Upload 1:1 image → Save.
- **View/Export Categories**: Product Management → Categories → Use Search bar to find → Click Export to download as Excel.
- **Edit Category**: Product Management → Categories → Click Edit icon next to category → Update name/image → Save.
- **Enable/Disable Category**: Product Management → Categories → Toggle the Status switch to Enable/Disable.
- **Delete Category**: Product Management → Categories → Click Delete icon → Confirm deletion (only works if no products linked).

#### Sub Categories
- **Add Sub Category**: Product Management → Sub Categories → Add New → Select parent category → Enter name in all languages → Save.
- **View Sub Categories**: Product Management → Sub Categories → Review the list showing each sub-category alongside its parent.
- **Edit Sub Category**: Product Management → Sub Categories → Click Edit → Change parent category or name → Save.

#### Bulk Import (Categories)
- **Download Template**: Product Management → Bulk Import → Download Template (with or without current data).
- **Upload New Data**: Product Management → Bulk Import → Select 'Upload New Data' → Choose filled Excel file → Upload.
- **Update Existing Data**: Product Management → Bulk Import → Select 'Update Existing Data' → Choose corrected Excel → Upload.

#### Bulk Export (Categories)
- **Export Categories**: Product Management → Bulk Export → Select sort/filter options → Click Export → Download Excel.

#### Attributes
- **Add Attribute**: Product Management → Attributes → Add New → Enter attribute name in all languages → Save.
- **Manage Attributes**: Product Management → Attributes → View list → Click Edit to update or Delete to remove.

#### Units
- **Add Unit**: Product Management → Units → Add New → Enter unit name (e.g., kg, piece, litre) in all languages → Save.
- **Manage Units**: Product Management → Units → View list → Edit to rename or Delete duplicates.

#### Brands
- **Add Brand**: Product Management → Brands → Add New → Enter brand name → Upload logo → Save.
- **Enable/Disable Brand**: Product Management → Brands → Toggle Status switch to Enable/Disable.
- **Search Brands**: Product Management → Brands → Use Search bar to find specific brands.

---

### PRODUCT SETUP

#### Add New Product
- **Product Name & Description**: Product Setup → Add New → Fill Name, Short Description, Long Description in Default/EN/AR tabs.
- **Product Images**: Product Setup → Add New → Upload Product Image (1:1 ratio) → Upload Thumbnail (mandatory). Image requirements: 1:1 aspect ratio, less than 100KB, .jpg or .png format.
- **Store & Category Assignment**: Product Setup → Add New → Select Store → Select Category → Select Sub-Category → Select Brand.
- **Purchase Limits & Units**: Product Setup → Add New → Select Unit of Measurement → Set Max Purchase Quantity.
- **Pricing & Stock**: Product Setup → Add New → Enter Price → Enter Stock Quantity → Set Discount Percentage.
- **Attributes**: Product Setup → Add New → Scroll to Attributes section → Add attribute values.
- **Gallery**: Product Setup → Add New → Click 'Add Info From Gallery' → Select existing image → Apply.
- **Save as Draft**: Product Setup → Add New → Fill all details → Click 'Save as Draft'.
- **Publish Product**: Product Setup → Add New → Fill all details → Click 'Publish' (may require admin approval).
- **Variants**: When a product has multiple variations (e.g., sizes, colors), select Attribute → Enter Value → Enter Variant Price → Enter Variant Quantity.
- **Tags**: Enter relevant keywords in the "Search tags" field for better search results.

#### Product List
- **View Products**: Product Management → Product List → Use Search/Filter by category or status → Paginate.
- **Edit Product**: Product Management → Product List → Click Edit icon (pencil) next to product → Make changes → Save.
- **Enable/Disable Product**: Product Management → Product List → Toggle Status switch to Enable/Disable.
- **Delete Product**: Product Management → Product List → Click Delete icon (trash) → Confirm (irreversible action).
- **Quick Stock Update**: Click the "+" (Plus) icon beside the quantity to immediately update stock.
- **Export Product List**: Use the Export button to download the filtered product list.

#### Low Stock
- **Monitor Low Stock**: Product Management → Low Stock → Review the filtered list of products below reorder threshold.
- **Update Stock**: Product Management → Low Stock → Click item → Enter new stock quantity → Save.
- **Export/Filter**: The Low Stock list can be exported as Excel/CSV. Can be filtered Zone-wise or Store-wise.

#### Reviews
- **View Reviews**: Product Management → Reviews → View all reviews with ratings, comments, and reviewer names.
- **Delete Review**: Product Management → Reviews → Click Delete on inappropriate review → Confirm.
- **Export Reviews**: You can export the entire Review List as an Excel or CSV file.

#### Product Bulk Import
- **Download Template**: Product Management → Bulk Import → Download Template (pre-filled with existing data).
- **Upload Products**: Product Management → Bulk Import → Choose filled .xls/.xlsx file → Upload.
- **Important**: Ensure image file names do not exceed 30 characters. For e-commerce items, use 24-hour time format.

#### Product Bulk Export
- **Export Products**: Product Management → Bulk Export → Click Export → Download Excel file.
- **Export Types**: All Data, Date-wise, or ID-wise.

---

### ZONE & MODULE SETUP

#### Zones
- **Create Zone**: Zone Setup → Add New → Draw boundary polygon on Google Map → Enter zone name in all languages → Save.
- **View/Export Zones**: Zone Setup → View list → Search by name → Click Export for spreadsheet download.
- **Disable Zone**: Zone Setup → Toggle zone Status to Disable.
- **Connect Module to Zone**: Zone Setup → Click grid action icon next to zone → Select business module → Connect.
- **Edit Zone Boundary**: Zone Setup → Click Edit on zone → Drag polygon points on map to new boundary → Save.

#### Modules
- **Create Module**: Module Setup → Create New → Select type → Enter name, description → Upload icon + thumbnail → Save.
- **Filter/Search Modules**: Module Setup → Filter by module type → Use search bar to find by name.
- **Enable/Disable Module**: Module Setup → Toggle Status to Enable/Disable.
- **Edit Module**: Module Setup → Click Edit → Update name, description, icon, or thumbnail → Save.

---

### BUSINESS SETTINGS

#### Business Information
- **Company Details**: Business Settings → Business Information → Fill company name, email, phone, country, address, map coordinates → Save.
- **Logo & Favicon**: Business Settings → Business Information → Upload Logo (3:1 ratio) → Upload Favicon (1:1 ratio) → Save.
- **Locale Settings**: Business Settings → Business Information → Set time zone, time format, currency symbol, currency position, decimal precision → Save.
- **Maintenance Mode**: Business Settings → Business Information → Toggle Maintenance Mode ON.

#### Vendor Settings
- **Self-Registration**: Business Settings → Vendor Settings → Toggle 'Vendor Self-Registration' Enable/Disable.
- **Product Approval**: Business Settings → Vendor Settings → Enable 'Need Approval For Products' → Select scope (Add/Price/Details).
- **Order Cancellation**: Business Settings → Vendor Settings → Toggle 'Allow Vendor Order Cancellation' Enable/Disable.
- **Cash-in-Hand Limit**: Business Settings → Vendor Settings → Set Cash-In-Hand maximum amount and minimum repayment → Save.

#### Deliveryman Settings
- **Max Orders**: Business Settings → Deliveryman Settings → Set maximum simultaneous orders per driver → Save.
- **Photo Proof**: Business Settings → Deliveryman Settings → Toggle 'Photo Proof of Delivery' Enable.
- **Customer Tipping**: Business Settings → Deliveryman Settings → Toggle 'Customer Tipping' Enable.
- **Driver Self-Registration**: Business Settings → Deliveryman Settings → Toggle 'Driver Self-Registration' Enable/Disable.

#### Customer & Wallet Settings
- **Enable Wallet**: Business Settings → Customer & Wallet → Toggle 'Customer Wallet' Enable.
- **Loyalty Points**: Business Settings → Customer & Wallet → Set earning %, conversion rate, minimum redemption threshold → Save.
- **Referral Program**: Business Settings → Customer & Wallet → Toggle 'Referral Program' Enable.

#### Refund Settings
- **Enable Refunds**: Business Settings → Refund Settings → Toggle 'Refund Requests' Enable/Disable.
- **Refund Window**: Business Settings → Refund Settings → Set refund window in days → Save.
- **Refund Reasons**: Business Settings → Refund Settings → Add/Edit/Delete refund reason options.

#### Language Setup
- **Add Language**: Business Settings → Language Setup → Add language → Enter ISO code → Select LTR or RTL → Save.
- **Set Default Language**: Business Settings → Language Setup → Click 'Set as Default' on the preferred language.

#### System Tax
- **Create Tax**: Business Settings → System Tax → Create New → Enter tax name and percentage rate → Save.
- **Tax Method**: Business Settings → System Tax → Select Inclusive or Exclusive tax calculation method → Save.

#### Subscription Management
- **Create Plan**: Business Settings → Subscription Management → Create New → Set name, price, validity, feature checklist → Save.
- **Set Limits**: Business Settings → Subscription Management → Edit package → Set max order and product limits → Save.
- **Free Trial**: Business Settings → Subscription Management → Edit/Create package → Set free trial period → Save.

#### Pages & Social
- **Edit Legal Pages**: Business Settings → Pages & Social → Select page → Edit in rich-text editor → Save.
- **Social Media Links**: Business Settings → Pages & Social → Enter Facebook/Instagram/Twitter/LinkedIn URLs → Save.

#### Gallery
- **Browse Gallery**: Business Settings → Gallery → Browse folders (Products, Store, Banner, Category).
- **Upload Assets**: Business Settings → Gallery → Click Upload → Select individual images or zip archive → Upload.
- **Manage Files**: Business Settings → Gallery → Select file → Click Preview/Copy URL/Download/Delete.

---

### ORDER MANAGEMENT

#### Orders
- **View All Orders**: Order Management → Order List → View all orders (ID, customer, total, status, date).
- **Filter by Status**: Order Management → Order List → Click status tabs (Pending/Confirmed/Packed/Dispatched/Delivered/Cancelled/Returned).
- **Search Orders**: Order Management → Order List → Search by order ID or customer name → Filter by date range.
- **Accept Order**: Order Management → Order List → Click Accept on pending order → Order moves to Confirmed.
- **Reject Order**: Order Management → Order List → Click Reject → Select reason → Confirm.
- **Update Status**: Order Management → Order Details → Update stage: Confirmed → Packed → Dispatched → Delivered.
- **View Details**: Order Management → Click order → View full detail page with all line items and customer info.
- **Generate Invoice**: Order Management → Order Details → Click 'Generate Invoice' or 'Delivery Note' → Download/Print.

#### Returns & Refunds
- **Initiate Return**: Order Management → Returns & Refunds → Click 'Initiate Return' on eligible order.
- **Process Return**: Order Management → Returns & Refunds → Review request → Click Approve or Deny → Add admin notes.
- **Monitor Returns**: Order Management → Returns & Refunds → Filter by status (Pending/Approved/Denied) → Review trends.

---

### REPORTS & ANALYTICS

- **Dashboard**: Reports & Analytics → Dashboard → View summary cards for current period.
- **Sales Report (Date)**: Reports & Analytics → Sales Report → Select date range → View.
- **Sales Report (Breakdown)**: Reports & Analytics → Sales Report → Select breakdown by module/store/category → Analyse.
- **Top Products**: Reports & Analytics → Product Report → View top-selling products ranked by quantity and revenue.
- **Low Performers**: Reports & Analytics → Product Report → View low-performing/zero-sales product report.
- **Customer Growth**: Reports & Analytics → Customer Report → View new registration trends over time.
- **Repeat Customers**: Reports & Analytics → Customer Report → View repeat purchase rates.
- **Store Performance**: Reports & Analytics → Store Report → View per-store orders, revenue, cancellation rate.
- **Delivery Report**: Reports & Analytics → Delivery Report → View average time, on-time rate, driver scores.
- **Transactions**: Reports & Analytics → Transaction Report → View payments, refunds, wallet credits, commissions.
- **Export Reports**: Reports & Analytics → Any report → Click Export → Choose Excel or CSV → Download.

---

### WALLET MANAGEMENT

- **View Balance**: Wallet Management → Balance & Overview → View current balance, pending, and withdrawable amounts.
- **Withdraw**: Wallet Management → Withdraw → Enter amount → Select payment method → Submit request.
- **Transaction History**: Wallet Management → Transaction History → View paginated list with date, amount, type, reference.
- **Auto Credit**: Wallet is automatically credited when driver marks order as Delivered.
- **Payment Methods**: Wallet Management → Payment Methods → Add bank/IBAN/mobile wallet details → Save.

---

### ADVERTISEMENT MANAGEMENT

- **Create Campaign**: Advertisement → New Campaign → Select ad format (banner/product spotlight/featured store).
- **Targeting**: Advertisement → Campaign Settings → Select zone, module, customer segment → Save.
- **Budget (Daily/Total)**: Advertisement → Budget & Schedule → Set daily cap and/or total campaign budget → Save.
- **Schedule**: Advertisement → Budget & Schedule → Set start date/time and end date/time → Save.
- **Pause Campaign**: Advertisement → Campaign List → Click Pause on running campaign.
- **View Analytics**: Advertisement → Performance Analytics → View impressions, clicks, CTR, conversions per campaign.

---

### EMPLOYEE MANAGEMENT

- **Invite Employee**: Employee Management → Invite → Enter email → Select role → Send invitation.
- **Create Role**: Employee Management → Roles → Create New → Set module-level permissions (view/edit/delete/export) → Save.
- **Edit Role**: Employee Management → Roles → Click Edit → Add or remove permissions → Save.
- **View Employees**: Employee Management → Employee List → View name, email, role, last login date.
- **Deactivate Employee**: Employee Management → Employee List → Click Deactivate on departing employee's account.
- **Activity Audit**: Employee Management → Activity Audit → View all employee actions with timestamps.

---

### ITEM / INVENTORY MANAGEMENT

- **Create Item**: Item / Inventory → Item Creation → Enter SKU, barcode, unit of measure, initial stock → Save.
- **Set Low-Stock Threshold**: Item / Inventory → Item Creation/Edit → Set low-stock threshold value → Save.
- **Link to Product**: Item / Inventory → Item Linking → Select inventory item → Link to storefront product.
- **Bulk Stock Update**: Item / Inventory → Bulk Stock Update → Prepare CSV/Excel with quantities → Upload.
- **Low-Stock Alerts**: Automatic notifications via in-app and/or email when stock falls below threshold.
- **Stock History**: Item / Inventory → Stock Movement History → Select item → View all movement entries.

---

### MARKETING & PROMOTIONS

- **Create Discount Code**: Marketing → Discount Codes → Create New → Set code, discount type (fixed/%), assign to products/store → Save.
- **Usage Controls**: Marketing → Discount Codes → Edit → Set minimum order value + usage limits → Save.
- **Flash Sales**: Marketing → Flash Sales → Select products → Set discounted prices → Schedule start/end times → Save.
- **Bundle Deals**: Marketing → Bundle Deals → Create New → Select products → Set bundle discount price → Save.
- **Promotion Analytics**: Marketing → Promotion Analytics → View redemption report.

---

### FINANCIAL OPERATIONS

- **Withdraw Requests**: Financial Operations → Withdraw Requests → Filter by status (Pending/Approved/Denied).
- **Approve Withdrawal**: Financial Operations → Withdraw Requests → Review details → Click Approve.
- **Store Disbursement**: Financial Operations → Store Disbursement → View disbursement history.
- **Delivery Disbursement**: Financial Operations → Delivery Disbursement → View and process driver payouts.
- **Collect Cash (COD)**: Financial Operations → Collect Cash → Enter amount, payment method, reference number → Save.
- **Withdraw Methods**: Financial Operations → Withdraw Methods → Add method (Bank/Mobile/PayPal) → Define required fields → Save.

---

### GENERAL INFORMATION
- **Platform URL**: admin.myjinan.com
- **Prepared By**: AlphaTech
- **Client**: MyJinan
- **Image Requirements**: 1:1 aspect ratio, max 100KB, .jpg or .png format
- **Excel Imports**: Only .xls or .xlsx format with official MyJinan template
- **Multi-language Support**: Default, English (EN), Arabic (AR) with RTL support
`;

// ═══════════════════════════════════════════════════════════════
//  USER STORIES — 155 stories across 11 modules
//  Each story: Reference ID, Module, Sub-module, Feature,
//  Expected Outcome, Navigation Path, Business Context
// ═══════════════════════════════════════════════════════════════

export const USER_STORIES = `
## MYJINAN — USER STORIES (155 Total)

Each user story follows the format:
- **Reference ID** (Module > Sub-Module)
- **Feature**: What the vendor/admin wants to do
- **Outcome**: What happens as a result
- **Navigation**: Step-by-step path in the admin panel
- **Business Context**: Why this matters for the business

---

### Product Management (21 stories)

- **PM-CAT-001** (Categories): Feature: Add a new product category with name and 1:1 image in multiple languages | Outcome: Category appears in master list for product assignment | Nav: Product Management → Categories → Add New → Enter name in Default/EN/AR → Upload 1:1 image → Save | Why: Well-organised categories help customers find products faster, increasing conversion.

- **PM-CAT-002** (Categories): Feature: View full category list with search and export | Outcome: Quick location and Excel export for audit | Nav: Product Management → Categories → Search → Export | Why: Regular category review keeps catalogue organised as product range grows.

- **PM-CAT-003** (Categories): Feature: Edit category name or image | Outcome: Accurate info without recreating entries | Nav: Product Management → Categories → Edit icon → Update → Save | Why: Prevents customer confusion from outdated labels.

- **PM-CAT-004** (Categories): Feature: Enable/disable category via toggle | Outcome: Hidden categories stop appearing instantly | Nav: Product Management → Categories → Toggle Status | Why: Seasonal categories can be hidden temporarily without data loss.

- **PM-CAT-005** (Categories): Feature: Delete category with no linked products | Outcome: Clean catalogue | Nav: Product Management → Categories → Delete icon → Confirm | Why: System protects by only allowing deletion when no products are linked.

- **PM-SUB-001** (Sub Categories): Feature: Add sub-category under a parent | Outcome: Finer product classification | Nav: Product Management → Sub Categories → Add New → Select parent → Name → Save | Why: Sub-categories like 'Cheese' under 'Dairy' improve shopability.

- **PM-SUB-002** (Sub Categories): Feature: View sub-category list with parent | Outcome: Verify parent-child relationships | Nav: Product Management → Sub Categories → Review list | Why: Ensures products appear in correct sections.

- **PM-SUB-003** (Sub Categories): Feature: Edit or reassign sub-category | Outcome: Fix mis-classified items | Nav: Product Management → Sub Categories → Edit → Change parent/name → Save | Why: Corrects hierarchy without losing linked products.

- **PM-BIM-001** (Bulk Import): Feature: Download category import template | Outcome: Correctly formatted file | Nav: Product Management → Bulk Import → Download Template | Why: Prevents formatting errors during uploads.

- **PM-BIM-002** (Bulk Import): Feature: Upload Excel for bulk category creation | Outcome: Mass onboarding in minutes | Nav: Product Management → Bulk Import → Upload New Data → Choose file → Upload | Why: Essential for large product ranges or platform migration.

- **PM-BIM-003** (Bulk Import): Feature: Upload Excel to update existing categories | Outcome: Mass corrections applied | Nav: Product Management → Bulk Import → Update Existing Data → Choose file → Upload | Why: More efficient than editing records individually.

- **PM-BEX-001** (Bulk Export): Feature: Export category list to Excel | Outcome: Offline backup or bulk import base | Nav: Product Management → Bulk Export → Filter → Export | Why: Creates backup and starting file for next import.

- **PM-ATT-001** (Attributes): Feature: Add product attribute (Colour, Material) | Outcome: Enriched product pages | Nav: Product Management → Attributes → Add New → Name in all languages → Save | Why: Enables customer filtering and search.

- **PM-ATT-002** (Attributes): Feature: View/edit/delete attributes | Outcome: Current attribute dictionary | Nav: Product Management → Attributes → View/Edit/Delete | Why: Keeps forms relevant as product lines evolve.

- **PM-UNT-001** (Units): Feature: Add unit of measurement | Outcome: Correct selling units | Nav: Product Management → Units → Add New → Name → Save | Why: Prevents confusion (kg vs piece vs litre).

- **PM-UNT-002** (Units): Feature: Manage units list | Outcome: Clean, standardised options | Nav: Product Management → Units → Edit/Delete | Why: Eliminates duplicates.

- **PM-BRD-001** (Brands): Feature: Add brand with logo | Outcome: Brand association for trust | Nav: Product Management → Brands → Add New → Name + Logo → Save | Why: Enables brand-based filtering.

- **PM-BRD-002** (Brands): Feature: Enable/disable brand | Outcome: Hidden discontinued brands | Nav: Product Management → Brands → Toggle Status | Why: Preserves historical data.

- **PM-BRD-003** (Brands): Feature: Search brand list | Outcome: Quick location | Nav: Product Management → Brands → Search | Why: Essential for large catalogues.

- **PM-PRD-001** (Product Setup): Feature: Enter product name and description in 3 languages | Outcome: Fully localised product page | Nav: Product Setup → Add New → Fill Name/Description in Default/EN/AR | Why: Impacts buying confidence across markets.

- **PM-PRD-002** (Product Setup): Feature: Upload product image (1:1) and thumbnail | Outcome: Professional visual presentation | Nav: Product Setup → Add New → Upload Image + Thumbnail | Why: Most influential factor in online buying decisions.

---

### Product Setup — Extended (21 stories)

- **PM-PRD-003** (Store & Category): Feature: Assign product to store, category, sub-category, brand | Outcome: Correct storefront placement | Nav: Product Setup → Select Store → Category → Sub-Category → Brand | Why: Wrong assignments = unfindable products.

- **PM-PRD-004** (Limits & Units): Feature: Set unit and max purchase quantity | Outcome: Controlled buying | Nav: Product Setup → Select Unit → Set Max Qty | Why: Prevents hoarding during high demand.

- **PM-PRD-005** (Pricing): Feature: Set price, stock, discount | Outcome: Accurate storefront display | Nav: Product Setup → Enter Price → Stock → Discount % | Why: Drives purchase decisions.

- **PM-PRD-006** (Attributes): Feature: Add product attributes | Outcome: Filterable search tags | Nav: Product Setup → Attributes section → Add values | Why: Enables precise product discovery.

- **PM-PRD-007** (Gallery): Feature: Import from gallery | Outcome: Reuse existing assets | Nav: Product Setup → Add Info From Gallery → Select → Apply | Why: Prevents duplicate uploads.

- **PM-PRD-008** (Draft): Feature: Save as Draft | Outcome: Pre-publishing review | Nav: Product Setup → Fill details → Save as Draft | Why: Allows internal review before going live.

- **PM-PRD-009** (Publish): Feature: Publish product | Outcome: Live and purchasable | Nav: Product Setup → Fill details → Publish | Why: May require admin approval for quality control.

- **PM-LST-001** (Product List): Feature: View/search/filter product list | Outcome: Find any product instantly | Nav: Product Management → Product List → Search/Filter → Paginate | Why: Daily command centre for catalogue management.

- **PM-LST-002** (Product List): Feature: Edit product from list | Outcome: Quick corrections | Nav: Product Management → Product List → Edit icon → Changes → Save | Why: Saves time on minor fixes.

- **PM-LST-003** (Product List): Feature: Enable/disable product | Outcome: Temporarily hidden | Nav: Product Management → Product List → Toggle Status | Why: Preserves data while hiding from customers.

- **PM-LST-004** (Product List): Feature: Delete product | Outcome: Permanent removal | Nav: Product Management → Product List → Delete → Confirm | Why: Irreversible — use toggle for temporary situations.

- **PM-LOW-001** (Low Stock): Feature: View low stock items | Outcome: Proactive reordering | Nav: Product Management → Low Stock → Review list | Why: Prevents lost sales from stock-outs.

- **PM-LOW-002** (Low Stock): Feature: Update stock from low stock list | Outcome: Quick replenishment | Nav: Product Management → Low Stock → Click item → Enter qty → Save | Why: Immediate availability update.

- **PM-REV-001** (Reviews): Feature: View all reviews | Outcome: Product satisfaction visibility | Nav: Product Management → Reviews → View all | Why: Patterns reveal systemic issues.

- **PM-REV-002** (Reviews): Feature: Delete review | Outcome: Remove fake/abusive content | Nav: Product Management → Reviews → Delete → Confirm | Why: Protects rating integrity.

- **PM-PIB-001** (Bulk Import): Feature: Download product import template | Outcome: Pre-filled base file | Nav: Product Management → Bulk Import → Download Template | Why: Correct format guaranteed.

- **PM-PIB-002** (Bulk Import): Feature: Bulk import products via Excel | Outcome: Mass onboarding | Nav: Product Management → Bulk Import → Choose file → Upload | Why: Hundreds of SKUs in minutes.

- **PM-PEX-001** (Bulk Export): Feature: Export product catalogue | Outcome: Offline backup | Nav: Product Management → Bulk Export → Export | Why: Supports audits, accounting, recovery.

---

### Zone & Module Setup (9 stories)

- **ZN-001** (Zone Setup): Feature: Draw zone boundary on Google Map | Outcome: Precise service area defined | Nav: Zone Setup → Add New → Draw polygon → Name → Save | Why: Prevents orders outside delivery radius.

- **ZN-002** (Zone Setup): Feature: View/search/export zones | Outcome: Clear coverage overview | Nav: Zone Setup → View list → Search → Export | Why: Supports expansion strategy review.

- **ZN-003** (Zone Setup): Feature: Enable/disable zone | Outcome: Suspend services in a region | Nav: Zone Setup → Toggle Status | Why: Emergency suspension (flooding, safety).

- **ZN-004** (Zone Setup): Feature: Connect module to zone | Outcome: Activate services in area | Nav: Zone Setup → Grid action icon → Select module → Connect | Why: Zone without module = no services.

- **ZN-005** (Zone Setup): Feature: Edit zone boundary | Outcome: Updated service area | Nav: Zone Setup → Edit → Drag polygon → Save | Why: Adapts to city expansion.

- **ZN-MOD-001** (Module Setup): Feature: Create business module | Outcome: New vertical available | Nav: Module Setup → Create New → Type → Name → Icon → Save | Why: Opens new line of business.

- **ZN-MOD-002** (Module Setup): Feature: Filter/search modules | Outcome: Quick module location | Nav: Module Setup → Filter by type → Search | Why: Essential at scale.

- **ZN-MOD-003** (Module Setup): Feature: Enable/disable module | Outcome: Control visibility | Nav: Module Setup → Toggle Status | Why: Useful for soft launches.

- **ZN-MOD-004** (Module Setup): Feature: Edit module details | Outcome: Updated branding | Nav: Module Setup → Edit → Update → Save | Why: Refreshes customer experience.

---

### Business Settings (34 stories)

- **BS-BIZ-001**: Set company name, email, phone, address, map coordinates | Nav: Business Settings → Business Information → Fill details → Save
- **BS-BIZ-002**: Upload logo (3:1) and favicon (1:1) | Nav: Business Settings → Business Information → Upload → Save
- **BS-BIZ-003**: Configure timezone, currency, decimal precision | Nav: Business Settings → Business Information → Set locale → Save
- **BS-BIZ-004**: Activate Maintenance Mode | Nav: Business Settings → Business Information → Toggle Maintenance Mode ON
- **BS-VND-001**: Enable/disable vendor self-registration | Nav: Business Settings → Vendor Settings → Toggle Self-Registration
- **BS-VND-002**: Enable product approval workflow | Nav: Business Settings → Vendor Settings → Enable Approval → Select scope
- **BS-VND-003**: Allow/prevent vendor order cancellation | Nav: Business Settings → Vendor Settings → Toggle Order Cancellation
- **BS-VND-004**: Allow vendor review replies | Nav: Business Settings → Vendor Settings → Toggle Review Replies
- **BS-VND-005**: Configure COD cash-in-hand limits | Nav: Business Settings → Vendor Settings → Set limits → Save
- **BS-DLV-001**: Set max simultaneous orders per driver | Nav: Business Settings → Deliveryman Settings → Set max → Save
- **BS-DLV-002**: Enable photo proof of delivery | Nav: Business Settings → Deliveryman Settings → Toggle Photo Proof
- **BS-DLV-003**: Enable customer tipping | Nav: Business Settings → Deliveryman Settings → Toggle Tipping
- **BS-DLV-004**: Enable/disable driver self-registration | Nav: Business Settings → Deliveryman Settings → Toggle Self-Registration
- **BS-CUS-001**: Enable customer wallet | Nav: Business Settings → Customer & Wallet → Toggle Wallet
- **BS-CUS-002**: Configure loyalty points | Nav: Business Settings → Customer & Wallet → Set earning %, conversion, threshold → Save
- **BS-CUS-003**: Enable referral program | Nav: Business Settings → Customer & Wallet → Toggle Referral
- **BS-REF-001**: Enable/disable refund requests | Nav: Business Settings → Refund Settings → Toggle Refunds
- **BS-REF-002**: Set refund window in days | Nav: Business Settings → Refund Settings → Set days → Save
- **BS-REF-003**: Manage refund reason options | Nav: Business Settings → Refund Settings → Add/Edit/Delete reasons
- **BS-LNG-001**: Add platform language | Nav: Business Settings → Language Setup → Add → ISO code → LTR/RTL → Save
- **BS-LNG-002**: Set default language | Nav: Business Settings → Language Setup → Set as Default
- **BS-TAX-001**: Create tax type | Nav: Business Settings → System Tax → Create → Name + % → Save
- **BS-TAX-002**: Set inclusive/exclusive tax method | Nav: Business Settings → System Tax → Select method → Save
- **BS-SUB-001**: Create subscription package | Nav: Business Settings → Subscription Management → Create → Details → Save
- **BS-SUB-002**: Set package limits | Nav: Business Settings → Subscription Management → Edit → Set limits → Save
- **BS-SUB-003**: Configure free trial | Nav: Business Settings → Subscription Management → Set trial period → Save
- **BS-PGS-001**: Edit legal pages | Nav: Business Settings → Pages & Social → Select page → Edit → Save
- **BS-PGS-002**: Update social media links | Nav: Business Settings → Pages & Social → Enter URLs → Save
- **BS-GAL-001**: Browse gallery folders | Nav: Business Settings → Gallery → Browse
- **BS-GAL-002**: Upload images or zip | Nav: Business Settings → Gallery → Upload
- **BS-GAL-003**: Preview/copy URL/download/delete files | Nav: Business Settings → Gallery → Select → Action
- **BS-WBS-001**: Configure websocket server | Nav: Business Settings → Websocket Config → URL + Port → Save
- **BS-LND-001**: Edit landing page | Nav: Business Settings → Landing Page → Edit content → Save

---

### Order Management (11 stories)

- **OM-ORD-001**: View real-time order list (ID, customer, total, status, date) | Nav: Order Management → Order List
- **OM-ORD-002**: Filter by status (Pending/Confirmed/Packed/Dispatched/Delivered/Cancelled/Returned) | Nav: Order Management → Status tabs
- **OM-ORD-003**: Search by order ID, customer name, date range | Nav: Order Management → Search → Filter
- **OM-ORD-004**: Accept pending order → Confirmed | Nav: Order Management → Click Accept | Why: Fast confirmation builds trust.
- **OM-ORD-005**: Reject order with reason | Nav: Order Management → Click Reject → Select reason → Confirm
- **OM-ORD-006**: Update status: Confirmed → Packed → Dispatched → Delivered | Nav: Order Management → Order Details → Update stage | Why: Each update triggers customer notification.
- **OM-ORD-007**: View complete order details | Nav: Order Management → Click order → View details
- **OM-ORD-008**: Generate invoice/delivery note | Nav: Order Management → Order Details → Generate Invoice → Download/Print
- **OM-RET-001**: Initiate return for eligible order | Nav: Order Management → Returns & Refunds → Initiate Return
- **OM-RET-002**: Approve/deny refund with admin notes | Nav: Order Management → Returns & Refunds → Approve/Deny → Notes
- **OM-RET-003**: View return list filtered by status | Nav: Order Management → Returns & Refunds → Filter by status

---

### Reports & Analytics (12 stories)

- **RA-DAS-001**: Dashboard summary (orders, revenue, stores, customers) | Nav: Reports & Analytics → Dashboard
- **RA-SAL-001**: Sales report by date range | Nav: Reports & Analytics → Sales Report → Select range
- **RA-SAL-002**: Revenue breakdown by module/store/category | Nav: Reports & Analytics → Sales Report → Select breakdown
- **RA-PRD-001**: Top-selling products report | Nav: Reports & Analytics → Product Report → Top sellers
- **RA-PRD-002**: Low-performing products report | Nav: Reports & Analytics → Product Report → Low performers
- **RA-CUS-001**: Customer acquisition trends | Nav: Reports & Analytics → Customer Report → Registration trends
- **RA-CUS-002**: Repeat purchase rates | Nav: Reports & Analytics → Customer Report → Repeat rates
- **RA-STR-001**: Store performance (orders, revenue, cancellation rate) | Nav: Reports & Analytics → Store Report
- **RA-DEL-001**: Delivery performance (time, on-time rate, driver scores) | Nav: Reports & Analytics → Delivery Report
- **RA-TXN-001**: Full transaction log | Nav: Reports & Analytics → Transaction Report
- **RA-EXP-001**: Export any report to Excel/CSV | Nav: Reports & Analytics → Any report → Export

---

### Wallet Management (8 stories)

- **WM-BAL-001**: View wallet balance, pending, withdrawable | Nav: Wallet Management → Balance & Overview
- **WM-WTH-001**: Submit withdrawal request | Nav: Wallet Management → Withdraw → Amount → Method → Submit
- **WM-WTH-002**: Track withdrawal status | Nav: Wallet Management → Withdrawal History
- **WM-HIS-001**: View transaction history | Nav: Wallet Management → Transaction History
- **WM-HIS-002**: Filter by transaction type | Nav: Wallet Management → Transaction History → Filter
- **WM-AUT-001**: Auto-credit on delivery | Nav: Automatic when driver marks Delivered
- **WM-REF-001**: See refund deductions | Nav: Automatic in Transaction History
- **WM-MTH-001**: Add withdrawal method | Nav: Wallet Management → Payment Methods → Add → Save

---

### Advertisement Management (8 stories)

- **AD-CMP-001**: Create campaign (banner/spotlight/featured) | Nav: Advertisement → New Campaign → Select format
- **AD-CMP-002**: Configure targeting (zone, module, segment) | Nav: Advertisement → Campaign Settings → Select targets → Save
- **AD-BDG-001**: Set budget (daily cap / total) | Nav: Advertisement → Budget & Schedule → Set budget → Save
- **AD-BDG-002**: Schedule campaign dates/times | Nav: Advertisement → Budget & Schedule → Set dates → Save
- **AD-CTL-001**: Pause campaign | Nav: Advertisement → Campaign List → Pause
- **AD-CTL-002**: Stop and archive campaign | Nav: Advertisement → Campaign List → Stop
- **AD-ANL-001**: View impressions, clicks, CTR, conversions | Nav: Advertisement → Performance Analytics
- **AD-ANL-002**: Compare campaigns side-by-side | Nav: Advertisement → Performance Analytics → Compare

---

### Employee Management (11 stories)

- **EM-INV-001**: Invite employee with role | Nav: Employee Management → Invite → Email → Role → Send
- **EM-INV-002**: Resend invitation | Nav: Employee Management → Employee List → Resend
- **EM-ROL-001**: Create custom role with permissions | Nav: Employee Management → Roles → Create → Permissions → Save
- **EM-ROL-002**: Edit role permissions | Nav: Employee Management → Roles → Edit → Update → Save
- **EM-ROL-003**: Delete unused role | Nav: Employee Management → Roles → Delete
- **EM-LST-001**: View employee list | Nav: Employee Management → Employee List
- **EM-LST-002**: Search employees | Nav: Employee Management → Employee List → Search
- **EM-ACC-001**: Deactivate employee | Nav: Employee Management → Employee List → Deactivate
- **EM-ACC-002**: Reactivate employee | Nav: Employee Management → Employee List → Reactivate
- **EM-AUD-001**: View activity audit log | Nav: Employee Management → Activity Audit
- **EM-AUD-002**: Filter audit log | Nav: Employee Management → Activity Audit → Filter

---

### Item / Inventory Management (8 stories)

- **IM-CRT-001**: Create inventory item (SKU, barcode, unit, stock) | Nav: Item/Inventory → Item Creation → Fill details → Save
- **IM-CRT-002**: Set low-stock threshold | Nav: Item/Inventory → Item Creation/Edit → Set threshold → Save
- **IM-LNK-001**: Link inventory item to storefront product | Nav: Item/Inventory → Item Linking → Select → Link
- **IM-STK-001**: Manual stock update | Nav: Item/Inventory → Item List → Edit → Update qty → Save
- **IM-STK-002**: Bulk stock update via CSV/Excel | Nav: Item/Inventory → Bulk Stock Update → Upload
- **IM-ALT-001**: Low-stock alert notifications | Nav: Automatic via in-app/email
- **IM-HIS-001**: View stock movement history | Nav: Item/Inventory → Stock Movement History → Select item
- **IM-HIS-002**: Filter stock history | Nav: Item/Inventory → Stock Movement History → Filter

---

### Marketing & Promotions (8 stories)

- **MK-DSC-001**: Create discount code (fixed/%) | Nav: Marketing → Discount Codes → Create → Set details → Save
- **MK-DSC-002**: Set usage limits and minimum order | Nav: Marketing → Discount Codes → Edit → Set limits → Save
- **MK-DSC-003**: Set discount expiry date | Nav: Marketing → Discount Codes → Edit → Set expiry → Save
- **MK-DSC-004**: View discount code performance | Nav: Marketing → Discount Codes → View list
- **MK-FLS-001**: Schedule flash sale | Nav: Marketing → Flash Sales → Select products → Set prices → Schedule → Save
- **MK-FLS-002**: Manage active flash sales | Nav: Marketing → Flash Sales → View → Extend/Cancel
- **MK-BND-001**: Create bundle deal | Nav: Marketing → Bundle Deals → Create → Select products → Set price → Save
- **MK-ANL-001**: View promotion analytics | Nav: Marketing → Promotion Analytics → View report

---

### Financial Operations (9 stories)

- **FN-WDR-001**: View withdrawal requests by status | Nav: Financial Operations → Withdraw Requests → Filter
- **FN-WDR-002**: Approve withdrawal | Nav: Financial Operations → Withdraw Requests → Approve
- **FN-WDR-003**: Deny withdrawal with reason | Nav: Financial Operations → Withdraw Requests → Deny → Add note
- **FN-DSB-001**: View store disbursement history | Nav: Financial Operations → Store Disbursement
- **FN-DLD-001**: Process driver disbursements | Nav: Financial Operations → Delivery Disbursement
- **FN-COD-001**: Log cash collection (COD) | Nav: Financial Operations → Collect Cash → Enter details → Save
- **FN-COD-002**: Reconcile cash vs digital records | Nav: Financial Operations → Collect Cash → View log → Reconcile
- **FN-MTH-001**: Configure withdrawal methods | Nav: Financial Operations → Withdraw Methods → Add → Define fields → Save
- **FN-MTH-002**: Enable/disable/set default method | Nav: Financial Operations → Withdraw Methods → Toggle → Set Default
`;
