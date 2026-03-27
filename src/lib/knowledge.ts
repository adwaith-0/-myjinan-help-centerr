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
