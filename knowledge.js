/* ═══════════════════════════════════════════════════════════════
   MyJinan Knowledge Base — All Documentation
   This file embeds all platform documentation as structured data
   used as context for the AI assistant.
   ═══════════════════════════════════════════════════════════════ */

const KNOWLEDGE_BASE = `
## MYJINAN PLATFORM — COMPLETE DOCUMENTATION

You are a helpful documentation assistant for the MyJinan e-commerce admin panel (admin.myjinan.com).
Below is the complete knowledge base covering all modules. Use ONLY this information to answer questions.

---

### PRODUCT MANAGEMENT

#### Categories
- **Add New Category**: Product Management → Categories → Add New → Enter name in Default/EN/AR → Upload 1:1 image → Save. Every product needs a home. Creating well-organised categories is the first step to a browsable catalogue.
- **View/Export Categories**: Product Management → Categories → Use Search bar to find → Click Export to download as Excel. Regularly reviewing your category structure ensures your catalogue stays organised.
- **Edit Category**: Product Management → Categories → Click Edit icon next to category → Update name/image → Save. Keeping category names and images accurate ensures customers aren't confused.
- **Enable/Disable Category**: Product Management → Categories → Toggle the Status switch to Enable/Disable. Seasonal categories can be hidden temporarily without losing any data.
- **Delete Category**: Product Management → Categories → Click Delete icon → Confirm deletion (only works if no products linked). Removing unused categories keeps your catalogue clean.

#### Sub Categories
- **Add Sub Category**: Product Management → Sub Categories → Add New → Select parent category → Enter name in all languages → Save. Sub-categories provide a second level of classification (e.g., 'Cheese' under 'Dairy').
- **View Sub Categories**: Product Management → Sub Categories → Review the list showing each sub-category alongside its parent.
- **Edit Sub Category**: Product Management → Sub Categories → Click Edit → Change parent category or name → Save.

#### Bulk Import (Categories)
- **Download Template**: Product Management → Bulk Import → Download Template (with or without current data). The official template prevents formatting errors.
- **Upload New Data**: Product Management → Bulk Import → Select 'Upload New Data' → Choose filled Excel file → Upload. Essential when onboarding large product ranges.
- **Update Existing Data**: Product Management → Bulk Import → Select 'Update Existing Data' → Choose corrected Excel → Upload.

#### Bulk Export (Categories)
- **Export Categories**: Product Management → Bulk Export → Select sort/filter options → Click Export → Download Excel.

#### Attributes
- **Add Attribute**: Product Management → Attributes → Add New → Enter attribute name in all languages → Save. Attributes like Colour, Material enrich product pages with searchable characteristics.
- **Manage Attributes**: Product Management → Attributes → View list → Click Edit to update or Delete to remove.

#### Units
- **Add Unit**: Product Management → Units → Add New → Enter unit name (e.g., kg, piece, litre) in all languages → Save. Correct units prevent customer confusion.
- **Manage Units**: Product Management → Units → View list → Edit to rename or Delete duplicates.

#### Brands
- **Add Brand**: Product Management → Brands → Add New → Enter brand name → Upload logo → Save. Associating products with brands builds customer trust.
- **Enable/Disable Brand**: Product Management → Brands → Toggle Status switch to Enable/Disable.
- **Search Brands**: Product Management → Brands → Use Search bar to find specific brands.

---

### PRODUCT SETUP

#### Add New Product
- **Product Name & Description**: Product Setup → Add New → Fill Name, Short Description, Long Description in Default/EN/AR tabs. Full localisation ensures every customer sees product info they understand.
- **Product Images**: Product Setup → Add New → Upload Product Image (1:1 ratio) → Upload Thumbnail (mandatory). Image requirements: 1:1 aspect ratio, less than 100KB, .jpg or .png format.
- **Store & Category Assignment**: Product Setup → Add New → Select Store → Select Category → Select Sub-Category → Select Brand. Correct assignments determine where the product appears.
- **Purchase Limits & Units**: Product Setup → Add New → Select Unit of Measurement → Set Max Purchase Quantity. Prevents hoarding during high-demand periods.
- **Pricing & Stock**: Product Setup → Add New → Enter Price → Enter Stock Quantity → Set Discount Percentage. Discount types: Percent (%) or Amount (Fixed). Enter 0 if no discount.
- **Attributes**: Product Setup → Add New → Scroll to Attributes section → Add attribute values. These become filterable tags on the storefront.
- **Gallery**: Product Setup → Add New → Click 'Add Info From Gallery' → Select existing image → Apply. Reusing gallery assets prevents duplicate uploads.
- **Save as Draft**: Product Setup → Add New → Fill all details → Click 'Save as Draft'. Allows team to prepare listings and get approval before publishing.
- **Publish Product**: Product Setup → Add New → Fill all details → Click 'Publish' (may require admin approval).
- **Variants**: When a product has multiple variations (e.g., sizes, colors), select Attribute → Enter Value → Enter Variant Price → Enter Variant Quantity.
- **Tags**: Enter relevant keywords in the "Search tags" field for better search results.

#### Product List
- **View Products**: Product Management → Product List → Use Search/Filter by category or status → Paginate. The product list is your daily command centre.
- **Edit Product**: Product Management → Product List → Click Edit icon (pencil) next to product → Make changes → Save.
- **Enable/Disable Product**: Product Management → Product List → Toggle Status switch to Enable/Disable. Temporarily hiding preserves all data.
- **Delete Product**: Product Management → Product List → Click Delete icon (trash) → Confirm (irreversible action).
- **Quick Stock Update**: Click the "+" (Plus) icon beside the quantity to immediately update stock without opening the full edit page.
- **Export Product List**: Use the Export button to download the filtered product list.
- **Columns**: Name, Category, Quantity (Stock), Store, Price, Status, Action.

#### Low Stock
- **Monitor Low Stock**: Product Management → Low Stock → Review the filtered list of products below reorder threshold. Daily monitoring allows proactive reordering.
- **Update Stock**: Product Management → Low Stock → Click item → Enter new stock quantity → Save.
- **Export/Filter**: The Low Stock list can be exported as Excel/CSV. Can be filtered Zone-wise or Store-wise.

#### Reviews
- **View Reviews**: Product Management → Reviews → View all reviews with ratings, comments, and reviewer names.
- **Delete Review**: Product Management → Reviews → Click Delete on inappropriate review → Confirm.
- **Export Reviews**: You can export the entire Review List as an Excel or CSV file.

#### Product Bulk Import
- **Download Template**: Product Management → Bulk Import → Download Template (pre-filled with existing data).
- **Upload Products**: Product Management → Bulk Import → Choose filled .xls/.xlsx file → Upload. Only Excel files using the official MyJinan template are accepted.
- **Upload Options**: 'Upload New Data' replaces existing data. 'Update Existing Data' adds new and updates modified ones.
- **Important**: Ensure image file names do not exceed 30 characters. For e-commerce items, use 24-hour time format (00:00:00 to 23:59:59).

#### Product Bulk Export
- **Export Products**: Product Management → Bulk Export → Click Export → Download Excel file.
- **Export Types**: All Data, Date-wise, or ID-wise. Use Clear button to reset filters.

---

### ZONE & MODULE SETUP

#### Zones
- **Create Zone**: Zone Setup → Add New → Draw boundary polygon on Google Map → Enter zone name in all languages → Save. Zones define where your platform provides services.
- **View/Export Zones**: Zone Setup → View list → Search by name → Click Export for spreadsheet download.
- **Disable Zone**: Zone Setup → Toggle zone Status to Disable (re-enable when area is accessible). Emergency suspension removes all services in that area.
- **Connect Module to Zone**: Zone Setup → Click grid action icon next to zone → Select business module → Connect.
- **Edit Zone Boundary**: Zone Setup → Click Edit on zone → Drag polygon points on map to new boundary → Save.

#### Modules
- **Create Module**: Module Setup → Create New → Select type → Enter name, description → Upload icon + thumbnail → Save. Each module represents a vertical (Grocery, Food, Pharmacy).
- **Filter/Search Modules**: Module Setup → Filter by module type → Use search bar to find by name.
- **Enable/Disable Module**: Module Setup → Toggle Status to Enable/Disable. Useful for soft launches or temporary suspensions.
- **Edit Module**: Module Setup → Click Edit → Update name, description, icon, or thumbnail → Save.

---

### BUSINESS SETTINGS

#### Business Information
- **Company Details**: Business Settings → Business Information → Fill company name, email, phone, country, address, map coordinates → Save. Appears on receipts, emails, and as default map centre.
- **Logo & Favicon**: Business Settings → Business Information → Upload Logo (3:1 ratio) → Upload Favicon (1:1 ratio) → Save.
- **Locale Settings**: Business Settings → Business Information → Set time zone, time format, currency symbol, currency position, decimal precision → Save.
- **Maintenance Mode**: Business Settings → Business Information → Toggle Maintenance Mode ON (disable when done). Customers see a maintenance screen instead of errors.

#### Vendor Settings
- **Self-Registration**: Business Settings → Vendor Settings → Toggle 'Vendor Self-Registration' Enable/Disable.
- **Product Approval**: Business Settings → Vendor Settings → Enable 'Need Approval For Products' → Select scope (Add/Price/Details). This is your quality gate.
- **Order Cancellation**: Business Settings → Vendor Settings → Toggle 'Allow Vendor Order Cancellation' Enable/Disable.
- **Review Replies**: Business Settings → Vendor Settings → Toggle 'Allow Vendor Review Replies' Enable/Disable.
- **Cash-in-Hand Limit**: Business Settings → Vendor Settings → Set Cash-In-Hand maximum amount and minimum repayment → Save.

#### Deliveryman Settings
- **Max Orders**: Business Settings → Deliveryman Settings → Set maximum simultaneous orders per driver → Save.
- **Photo Proof**: Business Settings → Deliveryman Settings → Toggle 'Photo Proof of Delivery' Enable.
- **Customer Tipping**: Business Settings → Deliveryman Settings → Toggle 'Customer Tipping' Enable.
- **Driver Self-Registration**: Business Settings → Deliveryman Settings → Toggle 'Driver Self-Registration' Enable/Disable.

#### Customer & Wallet Settings
- **Enable Wallet**: Business Settings → Customer & Wallet → Toggle 'Customer Wallet' Enable. Keeps refund money within your platform.
- **Loyalty Points**: Business Settings → Customer & Wallet → Set earning %, conversion rate, minimum redemption threshold → Save.
- **Referral Program**: Business Settings → Customer & Wallet → Toggle 'Referral Program' Enable.

#### Refund Settings
- **Enable Refunds**: Business Settings → Refund Settings → Toggle 'Refund Requests' Enable/Disable.
- **Refund Window**: Business Settings → Refund Settings → Set refund window in days → Save.
- **Refund Reasons**: Business Settings → Refund Settings → Add/Edit/Delete refund reason options.

#### Language Setup
- **Add Language**: Business Settings → Language Setup → Add language → Enter ISO code → Select LTR or RTL → Save. RTL support automatically flips the entire UI.
- **Set Default Language**: Business Settings → Language Setup → Click 'Set as Default' on the preferred language.

#### System Tax
- **Create Tax**: Business Settings → System Tax → Create New → Enter tax name and percentage rate → Save.
- **Tax Method**: Business Settings → System Tax → Select Inclusive or Exclusive tax calculation method → Save.

#### Subscription Management
- **Create Plan**: Business Settings → Subscription Management → Create New → Set name, price, validity, feature checklist → Save.
- **Set Limits**: Business Settings → Subscription Management → Edit package → Set max order and product limits → Save.
- **Free Trial**: Business Settings → Subscription Management → Edit/Create package → Set free trial period → Save.

#### Pages & Social
- **Edit Legal Pages**: Business Settings → Pages & Social → Select page → Edit in rich-text editor → Save (Terms, Privacy Policy, Refund Policy).
- **Social Media Links**: Business Settings → Pages & Social → Enter Facebook/Instagram/Twitter/LinkedIn URLs → Save.

#### Gallery
- **Browse Gallery**: Business Settings → Gallery → Browse folders (Products, Store, Banner, Category).
- **Upload Assets**: Business Settings → Gallery → Click Upload → Select individual images or zip archive → Upload.
- **Manage Files**: Business Settings → Gallery → Select file → Click Preview/Copy URL/Download/Delete.

#### Other Settings
- **Websocket Config**: Business Settings → Websocket Config → Enter server URL and port → Save (with DevOps guidance only). Powers real-time features like live driver tracking.
- **Landing Page**: Business Settings → Landing Page → Edit header, subtitle, hero banner, content blocks → Save.

---

### ORDER MANAGEMENT

#### Orders
- **View All Orders**: Order Management → Order List → View all orders (ID, customer, total, status, date).
- **Filter by Status**: Order Management → Order List → Click status tabs (Pending/Confirmed/Packed/Dispatched/Delivered/Cancelled/Returned).
- **Search Orders**: Order Management → Order List → Search by order ID or customer name → Filter by date range.
- **Accept Order**: Order Management → Order List → Click Accept on pending order → Order moves to Confirmed.
- **Reject Order**: Order Management → Order List → Click Reject → Select reason → Confirm.
- **Update Status**: Order Management → Order Details → Update stage: Confirmed → Packed → Dispatched → Delivered. Each update triggers a customer notification.
- **View Details**: Order Management → Click order → View full detail page with all line items and customer info.
- **Generate Invoice**: Order Management → Order Details → Click 'Generate Invoice' or 'Delivery Note' → Download/Print.

#### Returns & Refunds
- **Initiate Return**: Order Management → Returns & Refunds → Click 'Initiate Return' on eligible order.
- **Process Return**: Order Management → Returns & Refunds → Review request → Click Approve or Deny → Add admin notes. Approved refunds automatically credit customer's wallet.
- **Monitor Returns**: Order Management → Returns & Refunds → Filter by status (Pending/Approved/Denied) → Review trends.

---

### REPORTS & ANALYTICS

- **Dashboard**: Reports & Analytics → Dashboard → View summary cards for current period (total orders, revenue, active stores, customer count).
- **Sales Report (Date)**: Reports & Analytics → Sales Report → Select date range (today/week/month/year/custom) → View.
- **Sales Report (Breakdown)**: Reports & Analytics → Sales Report → Select breakdown by module/store/category → Analyse.
- **Top Products**: Reports & Analytics → Product Report → View top-selling products ranked by quantity and revenue.
- **Low Performers**: Reports & Analytics → Product Report → View low-performing/zero-sales product report.
- **Customer Growth**: Reports & Analytics → Customer Report → View new registration trends over time.
- **Repeat Customers**: Reports & Analytics → Customer Report → View repeat purchase rates → Identify loyal segments.
- **Store Performance**: Reports & Analytics → Store Report → View per-store orders, revenue, cancellation rate.
- **Delivery Report**: Reports & Analytics → Delivery Report → View average time, on-time rate, driver scores.
- **Transactions**: Reports & Analytics → Transaction Report → View payments, refunds, wallet credits, commissions.
- **Export Reports**: Reports & Analytics → Any report → Click Export → Choose Excel or CSV → Download.

---

### WALLET MANAGEMENT

- **View Balance**: Wallet Management → Balance & Overview → View current balance, pending, and withdrawable amounts.
- **Withdraw**: Wallet Management → Withdraw → Enter amount → Select payment method → Submit request.
- **Withdrawal Status**: Wallet Management → Withdrawal History → View status (Pending/Approved/Denied).
- **Transaction History**: Wallet Management → Transaction History → View paginated list with date, amount, type, reference.
- **Filter Transactions**: Wallet Management → Transaction History → Filter by type (Order/Refund/Commission/Adjustment).
- **Auto Credit**: Wallet is automatically credited when driver marks order as Delivered (no manual action needed).
- **Refund Deduction**: Deduction appears in Transaction History when admin approves a customer return (automatic).
- **Payment Methods**: Wallet Management → Payment Methods → Add bank/IBAN/mobile wallet details → Save.

---

### ADVERTISEMENT MANAGEMENT

- **Create Campaign**: Advertisement → New Campaign → Select ad format (banner/product spotlight/featured store).
- **Targeting**: Advertisement → Campaign Settings → Select zone, module, customer segment → Save.
- **Budget (Daily/Total)**: Advertisement → Budget & Schedule → Set daily cap and/or total campaign budget → Save.
- **Schedule**: Advertisement → Budget & Schedule → Set start date/time and end date/time → Save.
- **Pause Campaign**: Advertisement → Campaign List → Click Pause on running campaign. Settings and data are preserved.
- **Stop Campaign**: Advertisement → Campaign List → Click Stop → Campaign is archived with performance data.
- **View Analytics**: Advertisement → Performance Analytics → View impressions, clicks, CTR, conversions per campaign.
- **Compare Campaigns**: Advertisement → Performance Analytics → Compare multiple campaigns in single report view.

---

### EMPLOYEE MANAGEMENT

- **Invite Employee**: Employee Management → Invite → Enter email → Select role → Send invitation.
- **Resend Invitation**: Employee Management → Employee List → Find pending invite → Click Resend Invitation.
- **Create Role**: Employee Management → Roles → Create New → Set module-level permissions (view/edit/delete/export) → Save.
- **Edit Role**: Employee Management → Roles → Click Edit → Add or remove permissions → Save. Updates access for everyone assigned.
- **Delete Role**: Employee Management → Roles → Click Delete (only allowed if no employees assigned).
- **View Employees**: Employee Management → Employee List → View name, email, role, last login date.
- **Search Employee**: Employee Management → Employee List → Use search bar to find by name or email.
- **Deactivate Employee**: Employee Management → Employee List → Click Deactivate on departing employee's account. Records preserved for audit.
- **Reactivate Employee**: Employee Management → Employee List → Find deactivated account → Click Reactivate. Restores previous settings.
- **Activity Audit**: Employee Management → Activity Audit → View all employee actions with timestamps.
- **Filter Audit**: Employee Management → Activity Audit → Filter by date range, employee name, or action type.

---

### ITEM / INVENTORY MANAGEMENT

- **Create Item**: Item / Inventory → Item Creation → Enter SKU, barcode, unit of measure, initial stock → Save.
- **Set Low-Stock Threshold**: Item / Inventory → Item Creation/Edit → Set low-stock threshold value → Save.
- **Link to Product**: Item / Inventory → Item Linking → Select inventory item → Link to storefront product. Creates automatic stock deduction.
- **Update Stock**: Item / Inventory → Item List → Click Edit on item → Update stock quantity → Save.
- **Bulk Stock Update**: Item / Inventory → Bulk Stock Update → Prepare CSV/Excel with quantities → Upload.
- **Low-Stock Alerts**: Automatic notifications via in-app and/or email when stock falls below threshold.
- **Stock History**: Item / Inventory → Stock Movement History → Select item → View all movement entries (in/out with date, reason, quantity).
- **Filter History**: Item / Inventory → Stock Movement History → Filter by date range or transaction type.

---

### MARKETING & PROMOTIONS

- **Create Discount Code**: Marketing → Discount Codes → Create New → Set code, discount type (fixed/%), assign to products/store → Save.
- **Usage Controls**: Marketing → Discount Codes → Edit → Set minimum order value + usage limits (total/per-customer) → Save.
- **Expiry Date**: Marketing → Discount Codes → Edit → Set expiry date and time → Save. Time-limited offers create purchase urgency.
- **Monitor Codes**: Marketing → Discount Codes → View list (usage count, remaining uses, expiry status).
- **Flash Sales**: Marketing → Flash Sales → Select products → Set discounted prices → Schedule start/end times → Save.
- **Manage Flash Sales**: Marketing → Flash Sales → View active/scheduled sales → Click Extend or Cancel.
- **Bundle Deals**: Marketing → Bundle Deals → Create New → Select products → Set bundle discount price → Save. Increases average order value.
- **Promotion Analytics**: Marketing → Promotion Analytics → View redemption report (discount given, orders generated, revenue impact).

---

### FINANCIAL OPERATIONS

- **Withdraw Requests**: Financial Operations → Withdraw Requests → Filter by status (Pending/Approved/Denied).
- **Approve Withdrawal**: Financial Operations → Withdraw Requests → Review details → Click Approve. Verify payment details before approval.
- **Deny Withdrawal**: Financial Operations → Withdraw Requests → Click Deny → Add admin reason note → Confirm.
- **Store Disbursement**: Financial Operations → Store Disbursement → View disbursement history with lifecycle stages (Pending → Completed/Partially/Cancelled).
- **Delivery Disbursement**: Financial Operations → Delivery Disbursement → View and process driver payouts through lifecycle.
- **Collect Cash (COD)**: Financial Operations → Collect Cash → Enter amount, payment method, reference number → Save.
- **Cash Reconciliation**: Financial Operations → Collect Cash → View cash collection log → Reconcile against physical cash.
- **Withdraw Methods**: Financial Operations → Withdraw Methods → Add method (Bank/Mobile/PayPal) → Define required fields → Save.
- **Default Method**: Financial Operations → Withdraw Methods → Toggle Enable/Disable → Click 'Set as Default'.

---

### GENERAL INFORMATION
- **Platform URL**: admin.myjinan.com
- **Prepared By**: AlphaTech
- **Client**: MyJinan
- **Image Requirements**: 1:1 aspect ratio, max 100KB, .jpg or .png format
- **Excel Imports**: Only .xls or .xlsx format with official MyJinan template
- **Multi-language Support**: Default, English (EN), Arabic (AR) with RTL support
`;
