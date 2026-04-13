export const KNOWLEDGE_BASE = `
## MYJINAN PLATFORM — COMPLETE VERIFIED DOCUMENTATION

You are a helpful documentation assistant for the MyJinan e-commerce admin panel (admin.myjinan.com).
Use ONLY the information below to answer questions. Do NOT invent features not listed here.
If a feature is not documented below, say "That feature is not available in the current version of the system."

---

### ZONE & MODULE SETUP

#### Zones
> ⚠️ **Required First Step**: Zones must be created before stores, modules, or delivery areas can be configured.
- **Create Zone**: Settings → Zone Setup → Fill Business Zone Name (Default/EN/AR) → Draw boundary polygon on embedded Google Map → Submit.
- **Zone List**: Shows: Zone Id, Business Zone Name, Vendors count, Deliverymen count, Status toggle, Action icons (Connect Module grid icon, three-dot menu).
- **Enable/Disable Zone**: Zone List → Toggle the Status switch. Immediately suspends or restores all storefronts, deliveries, and customer access in that area.
- **Connect Module to Zone**: Zone List → Click the grid/Connect Module icon → Select a business module → Connect. A zone without a connected module offers no services to customers.
- **Edit/Delete Zone**: Zone List → Click three-dot menu → Edit boundary polygon on map, or Delete.
- **Export Zone list**: Zone List → Click Export button.

#### Business Modules
- **Create Module**: Settings → Module Setup → Add Business Module → Fill Business Module Name + description (Default/EN/AR) → Select module type (Grocery, Food, Pharmacy, Ecommerce, Parcel) → Upload Icon (1:1) and Thumbnail (1:1) → Add Module.
- **Module List**: Shows: Module Id, Name, Business Module Type, Total Vendors, Status toggle, Edit (pencil icon). Filter by module type dropdown; search by name; export.
- **Enable/Disable Module**: Module List → Toggle Status switch. Hides the module from the customer app.
- **Edit Module**: Module List → Click pencil Edit icon → Update fields → Save.

---

### BUSINESS SETTINGS

#### Business Information
- **Company Details**: Settings → Business Settings → Business Information tab → Fill Company Name, Email, Phone, Country, Address → Click on map to set Latitude/Longitude → Upload Logo (3:1 ratio) → Upload Favicon (1:1 ratio) → Save.
- **General Settings** (scroll down same page): Set Time Zone, Time Format, Currency Symbol, Currency Position (left/right), Digit After Decimal Point, Copyright Text, Cookies Text → Save.
- **Maintenance Mode**: Business Information tab → Toggle Maintenance Mode ON at the top of the page. All customer-facing apps and APIs are disabled; customers see a maintenance screen.

#### Vendor Settings
Settings → Business Settings → Vendor tab:
- Can A Vendor Cancel Order (Yes/No radio)
- Vendor Self Registration (toggle)
- Need Approval For Products (toggle) + scope checkboxes: Add new product / Update product price / Update product variation / Update anything in product details
- Vendor Can Reply Review (toggle)
- Cash In Hand Overflow (toggle) with Maximum Amount and Minimum Amount fields
→ Save Information

#### Deliveryman Settings
Settings → Business Settings → Deliveryman tab:
- Tips For Deliveryman (toggle)
- Show Earnings In App (toggle)
- Dm Self Registration (toggle)
- Maximum Assigned Order Limit (number field)
- Can A Deliveryman Cancel Order (Yes/No radio)
- Take Picture For Completing Delivery (toggle)
- Cash In Hand Overflow (toggle) with Maximum Cash In Hand and Minimum Amount To Pay
→ Save Information

#### Customer & Wallet Settings
Settings → Business Settings → Customers tab:
- Customer Wallet (toggle)
- Customer Can Earn & Buy From Referral (toggle)
- Refund To Wallet (toggle)
- Customer Can Add Fund To Wallet (toggle)
- Customer Can Earn Loyalty Point (toggle)
- Loyalty Point Settings: 1 BHD Equivalent point amount, Loyalty Point Earn Per Order (%), Minimum Point Required To Convert
- Customer Referral Earning Settings
→ Save

#### Refund Settings
Settings → Business Settings → Refund Settings tab:
- Toggle Refund Request Mode ON/OFF
- Add Refund Reason: Enter reason name in Default/EN/AR → Add Now
- Refund Reason List: shows all active reasons with Delete option

#### Language Settings
Settings → Business Settings → Languages tab:
- View Language list: Code, Status toggle, Default Status toggle, Action (globe icon for translations)
- Add New Language button
- Toggle Status (show/hide language in the app)
- Toggle Default Status (set as platform default)

#### React Landing Page
Settings → Pages & Social Media → React Landing Page:
- Edit content blocks: Header (Title, Sub Title, Tag Line, Icon 1:1, Banner 1:1)
- Additional tabs: Company Intro, Download User App, Earn Money, Available Zone, Promotional Banners, Business Section, Testimonials, Fixed Data
- All content supports Default/EN/AR language tabs
→ Save Information

#### Websocket Configuration
Settings → Business Settings → Websocket tab:
- Toggle Websocket ON
- Enter Websocket URL (e.g. wss://your-server.com)
- Enter Websocket Port number
→ Save Information. Powers live driver tracking and real-time push notifications.

---

### SYSTEM TAX

- **Create Tax**: Settings → System Tax → Create Taxes → Click "Create Tax" button → In slide-out modal: set Availability Status toggle, enter Tax name, enter Tax rate (%) → Submit.
- **Setup Tax Calculation**: Settings → System Tax → Setup Taxes. Configure separately for Order Module and Parcel Module tabs:
  - Allow Tax Calculation For Vendor (Status toggle)
  - Calculate Tax Include Product Price OR Calculate Tax Exclude Product Price (radio buttons)
  - Basic Setup: Select Tax Type (Order wise), Select Tax Rate

---

### SUBSCRIPTION MANAGEMENT

- **Create Subscription Package**: Settings → Subscription Management → Subscription Package → Enter Package Name, Package Price (BD), Package Validity Days, Package Info description (Default/EN/AR) → Check Package Available Features (POS system, Self delivery, Mobile App, Review, Chat, etc.) → Save.
- **Subscription Settings**: Settings → Subscription Management → Settings:
  - Offer Free Trial: toggle Status → set Free Trial Period (number + Day/Month unit) → Submit
  - Show Deadline Warning: Select Days before expiry + Type Message → Submit
  - Return Money Restriction: set threshold amount after which no refund is given on plan changes

---

### PAGES & SOCIAL MEDIA

- **Social Media**: Settings → Pages & Social Media → Social Media → Select platform name from dropdown → Enter Social Media Link → Save. Table shows: SL, Name, Link, Status, Action.
- **Terms And Condition**: Settings → Pages & Social Media → Business Pages → Terms And Condition → Edit in CKEditor (Default/EN/AR tabs) → Submit.
- **Privacy Policy**: Settings → Pages & Social Media → Business Pages → Privacy Policy → Edit in CKEditor → Submit.
- **About Us**: Settings → Pages & Social Media → Business Pages → About Us → Enter About title + About us description in CKEditor → Submit.
- **Refund Policy**: Settings → Pages & Social Media → Business Pages → Refund Policy → Toggle STATUS (enable/disable page visibility) → Edit in CKEditor → Submit.
- **Cancellation Policy**: Settings → Pages & Social Media → Business Pages → Cancelation Policy → Toggle STATUS → Edit in CKEditor → Submit.

---

### GALLERY

- **Browse**: Settings → Gallery → Local Storage shows categorised system folders (Category, Vendor, Delivery-Man, Banner, Store, Module, Campaign, Product, Brand, Advertisement, etc.) each with item count badge.
- **Upload files**: Open any folder → Click Add New → Upload image (single file) OR Upload zip file (bulk) → Click Upload.
- **View & use assets**: Open folder → Click any image thumbnail → Preview modal shows: filename, Copy Path button (copies the asset URL), Download button.

---

### FINANCIAL OPERATIONS

- **Withdraw Requests**: Financial Operations → Withdraw Requests. Three tabs: Pending, Approved, Denied. Review vendor payout requests → Click Approve or Deny (enter admin reason note) → Confirm.
- **Store Disbursement**: Financial Operations → Store Disbursement. View full disbursement history per store with lifecycle stages (Pending, Completed, Cancelled). Filter by status.
- **Delivery Man Disbursement**: Financial Operations → Delivery Man Disbursement. View and process driver payouts through payment lifecycle (Pending, Processing, Completed).
- **Collect Cash (COD)**: Financial Operations → Collect Cash → Enter amount, payment method, reference number → Save. View collection log to reconcile physical cash against digital records.
- **Delivery Man Payments**: Financial Operations → Delivery Man Payments → Log ad hoc bonus payments directly to drivers (outside automated disbursement).
- **Withdraw Methods**: Financial Operations → Withdraw Method → Add method (Bank Transfer, Mobile Money, etc.) → Define required fields → Save. Toggle Enable/Disable or click Set as Default.

---

### STORE MANAGEMENT

- **New Store Requests**: Store Management → New Store. Two tabs: New Joining Requests (pending applications) and Denied. Each row shows store name, module, owner info, zone, status. Approve or Deny using action icons.
- **Add Store (manually)**: Store Management → Add Store. Fill: Store Name, Address, Logo (1:1), Cover (2:1), Minimum & Maximum Delivery Time + time unit, Zone, Latitude, Longitude. Owner: First Name, Last Name, Phone. Account: Email, Password. Business TIN. → Submit.
- **Stores List**: Store Management → Stores List. Paginated table showing store info, owner info, zone, Featured toggle, Status toggle, Actions (View Eye, Edit Pencil, Delete Trash). Use search bar to find stores.
- **Featured toggle**: Stores List → Toggle Featured switch to promote a store on the customer website homepage.
- **Enable/Disable Store**: Stores List → Toggle Status switch. Disabled stores are immediately hidden from customers.
- **Recommended Stores**: Store Management → Recommended Stores. Shows: rating, total products, total orders, Status toggle, Delete option.
- **Bulk Import Stores**: Store Management → Bulk Import → Download Excel template (with or without current data) → Fill template → Upload New Data or Update Existing Data.
- **Bulk Export Stores**: Store Management → Bulk Export → Select data type → Click Export → Download Excel.

---

### ORDER MANAGEMENT

#### POS — Point of Sale
- **New Sale**: POS Section → New Sale → Select Store from dropdown → Select Category from dropdown → Search for products in the grid → Click product to add to cart. Used for walk-in/offline orders without customer using the app.
- **Link Customer**: POS → Billing section → Select existing customer from dropdown OR click Add New Customer (First Name, Last Name, Email, Phone) → Submit.
- **Place Order**: POS → Review order summary (Subtotal, Discount, Delivery Fee, Tax, Total) → Select payment method → Click Place Order. Or click Clear Cart to cancel.

#### Orders
Order status sidebar categories: All Orders, Scheduled, Pending, Accepted, Processing, Order On The Way, Delivered, Cancelled, Payment Failed, Refunded.

- **View All Orders**: Order Management → Orders → Click All Orders (or any status tab). Table shows order ID, customer, store, total, payment method, status, date.
- **Order Detail**: Order Management → Orders → Click Eye icon on any row. Shows: Order Summary (number, date, store, coupon, status, payment method), Item Details, Financial Breakdown (subtotal, delivery, discounts, tips, total), Customer Details, Delivery Information, Delivery Proof photo, Store Information.
- **Update Order Status / Assign Driver**: Order detail → Click Edit → Update status stage → Assign Delivery Man → Save.
- **Correct order status stages**: Pending → Accepted → Processing → Order On The Way → Delivered. Also: Scheduled, Cancelled, Payment Failed, Refunded.
- **Print Invoice**: Orders list → Click Printer icon on any order row → Generates printable receipt/PDF.
- **Offline Payments**: Order Management → Offline Payments. Tabs: All, Pending, Verified, Denied. Review customer's uploaded payment proof → Update status to Verified or Denied. ⚠️ Always confirm funds received in your bank before marking Verified.
- **Order Refunds**: Order Management → Order Refunds → Review customer refund requests → Click Approve or Rejected.

---

### FLASH SALES (under Promotion Management)

> ⚠️ Flash Sales are ADMIN-ONLY. Vendors cannot create flash sales.
- **Create Flash Sale**: Promotion Management → Flash Sales → Enter Title (Default/EN/AR), Admin Discount %, Store Discount % (split), Start Date, End Date → Submit.
- **Add Products to Flash Sale**: Flash Sale List → Click Add Products → Select Item → Set Stock for this sale → Set Discount % → Save.
- **Manage Flash Sales**: Flash Sale List → Toggle Publish (controls customer visibility) → Edit (update sale details) → Delete (remove sale).

---

### PRODUCT MANAGEMENT

#### Categories
> ⚠️ **Admin Pre-Requisite**: Categories, Sub-Categories, and Brands must be created manually in the admin panel BEFORE any product can be added or bulk-imported. If these don't exist, the fields will be empty in product forms.
- **Add Category**: Product Management → Categories → Category → Fill Name (Default/EN/AR) → Upload 1:1 image → Save.
- **Category List**: Product Management → Categories → Category → View list with search bar, export, Status toggle, Edit, Delete.
- **Add Sub-Category**: Product Management → Categories → Sub Category → Select parent Main Category → Enter name in all language tabs → Save.
- **Sub-Category List**: Product Management → Categories → Sub Category → View list showing each entry and its parent category.
- **Bulk Import Categories**: Product Management → Categories → Bulk Import → Download template (with or without data) → Fill → Upload New Data or Update Existing Data.
- **Bulk Export Categories**: Product Management → Categories → Bulk Export → Select type → Export Excel.

#### Attributes
- **Add Attribute**: Product Management → Attributes → Enter attribute name (Default/EN/AR, e.g., Colour, Material) → Save.
- **Attribute List**: Product Management → Attributes → View list → Edit or Delete.

#### Units
- **Add Unit**: Product Management → Units → Enter unit name (e.g., kg, piece, metre) → Save.
- **Unit List**: Product Management → Units → View list → Edit or Delete.

#### Brands
- **Add Brand**: Product Management → Brands → Add New Brand → Enter name → Upload logo → Set Status → Save.
- **Brand List**: Product Management → Brands → View list → Toggle Status / Edit / Delete.

#### Add New Product
> ⚠️ **Admin Pre-Requisite**: Before adding or bulk importing any product, ensure Category, Sub-Category, and Brand already exist in the admin panel. Create missing entries first or the fields will be unavailable.
- **Basic Info**: Product Setup → Add New → Fill Name, Short Description, Long Description (Default/EN/AR tabs).
- **Images**: Upload Product Image (1:1 ratio) + Thumbnail (required). Requirements: 1:1, max 100KB, .jpg or .png.
- **Classification**: Select Store → Category → Sub-Category → Brand from dropdowns.
- **Pricing & Stock**: Enter Price, Stock Quantity, Discount Percentage.
- **Unit & Purchase Limit**: Select Unit of Measurement → Set Maximum Purchase Quantity per order.
- **Attributes/Variants**: Add attribute values → System auto-generates variant combination table with individual Price and Stock per combination.
- **Tags**: Enter searchable keyword tags.

#### Product List
- **View**: Product Management → Product Setup → List. Search bar + filter dropdowns (Store, Zone, Category, Sub-Category).
- **Edit**: Click Edit icon → Update any field → Save.
- **Enable/Disable**: Toggle Status switch. Out-of-season products can be hidden without deletion.
- **Delete**: Click Delete icon → Confirm (permanent, irreversible).
- **Quick Stock Update**: Click the "+" Plus icon beside the quantity to update stock without opening the full editor.
- **Low Stock List**: Product Management → Product Setup → Low Stock List. Filtered view of products at critically low or zero stock. Filter by zone or store. Export available.

#### Product Reviews
- **View Reviews**: Product Management → Product Setup → Review → View all customer reviews with ratings, comments, reviewer info.
- **Delete Review**: Click Delete on inappropriate or fraudulent review.

#### Product Bulk Import/Export
- **Bulk Import Products**: Product Management → Product Setup → Bulk Import → Download template → Fill → Upload. Only .xls/.xlsx with the official MyJinan template accepted. Image file names must not exceed 30 characters.
- **Bulk Export Products**: Product Management → Product Setup → Bulk Export → Select type → Export Excel.

---

### PROMOTION MANAGEMENT

#### Campaigns
- **Basic Campaign – Add New**: Promotion Management → Campaigns → Basic Campaigns → Add New Campaign → Enter Name, Short Description (Default/EN/AR), Start Date, End Date, daily Start Time, daily End Time → Upload 900×300 banner image → Save.
- **Basic Campaign List**: Promotion Management → Campaigns → Basic Campaigns → View Campaign List.
- **Item Campaign – Add New**: Promotion Management → Campaigns → Item Campaigns → Add New Campaign → Fill name, description (1:1 image), select Store and Item, add Attributes, set Start/End Dates and daily time schedule → Save.
- **Item Campaign List**: Promotion Management → Campaigns → Item Campaigns → View Campaign List.

#### Banners
- **Add Banner**: Promotion Management → Banners → Fill Title (Default/EN/AR), Zone, Banner Type (store-wise / item-wise / default), Store Name → Upload 3:1 image → Save.
- **Banner List**: Promotion Management → Banners → View Banner List with Status toggle, Edit, Delete.

#### Other Banners
Promotion Management → Other Banners → Upload images for three specific website sections:
- Best Reviewed Items (235×346 px)
- New Arrivals (235×346 px)
- Bottom Section Banner (5:1 ratio)
→ Save

#### Coupons
- **Add Coupon**: Promotion Management → Coupons → Fill: Title, Coupon Type, Store selection, Customer selection, unique Code, Limit per same user, Start Date, Expire Date, Discount Type (amount or percent), Minimum Purchase, Maximum Discount Amount → Save.
- **Coupon List**: Promotion Management → Coupons → View Coupon List with Status toggle, Edit, Delete.

#### Push Notifications
- **Send Notification**: Promotion Management → Push Notifications → Fill Title, select Zone, choose Send To recipients, enter Description → Upload image → Save.
- **Notification List**: Promotion Management → Push Notifications → View Notification List with Edit and Delete.

#### Advertisements
- **Add Advertisement (Admin)**: Promotion Management → Advertisements → Add New Advertisement → Fill Title, Short Description, Store, Priority, Advertisement Type, Validity (Start/End Date), Review & Ratings display options → Upload Image (1:1) and Cover (2:1) → Save. A live preview is shown.
- **Advertisement Requests (from Vendors)**: Promotion Management → Advertisements → Ad Requests. Three tabs: New Requests, Update Requests, Denied Requests. Review each → Approve or Deny.
- **Ads List**: Promotion Management → Advertisements → Ads List. Shows all active advertisements.
> ⚠️ **Advertisements do NOT have**: zone targeting, module targeting, customer segment targeting, budget caps, impression analytics, click-through tracking, or CTR metrics. Vendors submit ads for admin approval — there is no self-serve ad system with analytics.

---

### REPORTS & ANALYTICS

#### Transaction Report
- Reports & Analytics → Transaction Report
- Filters: Module, Zone, Store, Time Duration (All Time / This Year / Previous Year / This Month / This Week / Custom Date Range)
- Summary cards: Admin Earning, Store Earning, Deliveryman Earning, Completed Transactions, Refunded Transactions
- Order Transactions table: view details, download individual order statements, export as CSV or Excel

#### Item Report
- Reports & Analytics → Item Report
- Filters: Module, Store, Zone, Time Duration, Categories
- Table columns: Item Name, Module, Store, Stock, Sell Count, Price, Total Amount Sold, Total Discount Given, Average Sale Value, Average Ratings
- Export available

#### Store Wise Report
- Reports & Analytics → Store Wise Report. Three sections:
  1. Summary Report: Total Orders, Average Order Value, Payment method breakdown
  2. Sales Report: Gross Sale, Tax, Commission, Quantity Sold, Discount
  3. Order Report: Total Discount, Coupon Discount, Cancelled/Incomplete/Completed counts

#### Expense Report
- Reports & Analytics → Expense Report
- Filters: Module, Zone, Vendors, Customers, Time Duration, Expense Type (Add fund bonus, Free delivery, Coupon discount, Discount on product, Flash sale discount, CashBack, Referral Discount)
- Expense List table: SL, Order ID, Date & Time, Expense Type, Customer Name, Expense Amount
- Export available

#### Disbursement Report
- Reports & Analytics → Disbursement Report. Two tabs: Stores and Deliverymen
- Summary cards: Pending, Completed, Cancelled counts
- Filters: Zone, Module, Store, Payment Method, Status, Time Duration
- Full disbursement table with export

#### Order Report
- Reports & Analytics → Order Report
- Filters: Modules, Zones, Stores, Customers, Time Duration
- Statistics cards: Total, In Progress, On The Way, Delivered, Failed, Refunded, Cancelled
- Full Order Report table with all order and financial columns
- Export to Excel; Invoice preview available

#### Admin Tax Report
- Reports & Analytics → Admin Tax Report
- Step 1: Select date range (This Fiscal Year OR Custom date range)
- Step 2: Choose tax calculation method — Same Tax for All Income Source OR Different Tax for Different Income Source
- Step 3: Click Submit → Report shows Total Income and Total Tax broken down by income source

#### Vendor Tax Report
- Reports & Analytics → Vendor Tax Report
- Filters: Date range, All vendors or specific store
- Summary: Total Orders, Total Order Amount, Total Tax Amount
- Table: SL, Vendor Info, Total Order, Total Order Amount, Tax Amount, Action
- Click Filter to refresh results

#### Parcel Tax Report
- Reports & Analytics → Parcel Tax Report
- Select date range → Click Filter
- Summary: Total Orders, Total Order Amount, Total Tax Amount (for parcel module only)
- Order table: SL, Order Id, Total Order Amount, Tax Amount
- Export available

---

### GENERAL INFORMATION & IMPORTANT NOTES

- **Platform URL**: admin.myjinan.com
- **Prepared By**: AlphaTech | **Client**: MyJinan | **Software Version**: 3.3
- **Image Requirements**: 1:1 aspect ratio, max 100KB, .jpg or .png format (unless otherwise specified per field)
- **Excel Imports**: Only .xls or .xlsx format with the official MyJinan template
- **Multi-language Support**: Default, English (EN), Arabic (AR) with RTL support
- **Order Status Stages**: Pending → Accepted → Processing → Order On The Way → Delivered (also: Scheduled, Cancelled, Payment Failed, Refunded)
- **Flash Sales**: Admin-only feature. Vendors CANNOT create flash sales.
- **Advertisements**: Vendors submit ad requests; admin approves/denies. No self-serve ads, no budget caps, no impression/click tracking.
- **Employee Management**: There is NO employee invitation system in this version of MyJinan.
- **Item/Inventory Management**: There is NO separate inventory/SKU/barcode module. Stock is managed per product in Product Setup.
- **Wallet Management**: There is NO standalone admin wallet module. Admin manages vendor disbursements and withdrawal approvals via Financial Operations.
- **Bundle Deals**: There are NO bundle deals in this system.
- **Promotion Analytics**: There is NO dedicated promotion analytics page.
`;

// ═══════════════════════════════════════════════════════════════
//  USER STORIES — Documentation-verified stories across all modules
//  Source of truth: user_stories_formatted.txt
//  All fictional features have been removed.
// ═══════════════════════════════════════════════════════════════

export const USER_STORIES = `
## MYJINAN — USER STORIES (Verified Against Official Documentation)

All stories are verified against the official MyJinan Admin Panel documentation.
Fictional features (ad analytics, employee invitation, item/inventory SKU system, bundle deals, wallet module) have been removed.

---

### Zone & Module Setup

- **ZN-001**: Draw a new operational zone boundary on Google Map, give it a business zone name (Default/EN/AR) | Nav: Settings → Zone Setup → Fill Business Zone Name → Draw boundary → Submit

- **ZN-002**: View Zone List showing Zone Id, Business Zone Name, Vendors, Deliverymen, Status toggle, Action icons | Nav: Settings → Zone Setup → Scroll to Zone List → Search/Export

- **ZN-003**: Enable or disable an entire zone using the Status toggle | Nav: Settings → Zone Setup → Zone List → Toggle Status

- **ZN-004**: Connect a business module to a zone | Nav: Settings → Zone Setup → Zone List → Click grid/Connect Module icon → Select module → Connect

- **ZN-005**: Edit zone boundary or delete zone using the three-dot menu | Nav: Settings → Zone Setup → Zone List → Click three-dot menu

- **ZN-MOD-001**: Create a new business module | Nav: Settings → Module Setup → Add Business Module → Fill name, desc → Select module type → Upload icon + thumbnail → Add Module

- **ZN-MOD-002**: View Business Module List with filter, search, export | Nav: Settings → Module Setup → Modules → Filter/Search/Export

- **ZN-MOD-003**: Enable or disable a business module | Nav: Settings → Module Setup → Modules → Toggle Status switch

- **ZN-MOD-004**: Edit a module's name, description, type, icon, or thumbnail | Nav: Settings → Module Setup → Modules → Click pencil Edit icon → Update → Save

---

### Business Settings

- **BS-BIZ-001**: Set company name, email, phone, country, address, GPS coordinates, logo (3:1), favicon (1:1) | Nav: Settings → Business Settings → Business Information tab → Fill fields → Save

- **BS-BIZ-002**: Configure Time Zone, Currency Symbol, Currency Position, Decimal Precision, Copyright Text, Cookies Text | Nav: Settings → Business Settings → Business Information → General Settings section → Save

- **BS-BIZ-003**: Activate Maintenance Mode | Nav: Settings → Business Settings → Business Information → Toggle Maintenance Mode ON

- **BS-VND-001**: Configure all Vendor tab settings (cancellation, self-registration, product approval, review replies, cash-in-hand) | Nav: Settings → Business Settings → Vendor tab → Configure toggles → Save

- **BS-DLV-001**: Configure all Deliveryman tab settings (tips, earnings, self-registration, max orders, delivery photo, cash-in-hand) | Nav: Settings → Business Settings → Deliveryman tab → Configure fields → Save

- **BS-CUS-001**: Configure Customers tab (wallet, referral, refund to wallet, loyalty points) | Nav: Settings → Business Settings → Customers tab → Configure → Save

- **BS-REF-001**: Enable/disable Refund Request Mode and manage Refund Reasons | Nav: Settings → Business Settings → Refund Settings tab → Toggle mode → Add reasons

- **BS-LNG-001**: View Language list and add new platform language | Nav: Settings → Business Settings → Languages tab → Add New Language / toggle Status

- **BS-LND-001**: Edit React Landing Page content blocks | Nav: Settings → Pages & Social Media → React Landing Page → Edit sections → Save

- **BS-WBS-001**: Configure Websocket URL and Port | Nav: Settings → Business Settings → Websocket tab → Toggle ON → Enter URL + Port → Save

- **BS-TAX-001**: Create tax by entering name and rate in slide-out modal | Nav: Settings → System Tax → Create Taxes → Click Create Tax → Enter name + rate → Submit

- **BS-TAX-002**: Configure Setup Taxes calculation for Order Module and Parcel Module | Nav: Settings → System Tax → Setup Taxes → Configure tabs

- **BS-SUB-001**: Create Subscription Package with features checklist | Nav: Settings → Subscription Management → Subscription Package → Fill info → Check features → Save

- **BS-SUB-002**: Configure Free Trial, Deadline Warning, and Return Money Restriction | Nav: Settings → Subscription Management → Settings → Configure → Submit

- **BS-PGS-001**: Add or update Social Media links | Nav: Settings → Pages & Social Media → Social Media → Select platform → Enter link → Save

- **BS-PGS-002**: Edit Terms And Condition page | Nav: Settings → Pages & Social Media → Business Pages → Terms And Condition → Edit in CKEditor → Submit

- **BS-PGS-003**: Edit Privacy Policy page | Nav: Settings → Pages & Social Media → Business Pages → Privacy Policy → Edit → Submit

- **BS-PGS-004**: Edit About Us page | Nav: Settings → Pages & Social Media → Business Pages → About Us → Edit → Submit

- **BS-PGS-005**: Edit Refund Policy page (with STATUS toggle) | Nav: Settings → Pages & Social Media → Business Pages → Refund Policy → Toggle STATUS → Edit → Submit

- **BS-PGS-006**: Edit Cancellation Policy page | Nav: Settings → Pages & Social Media → Business Pages → Cancelation Policy → Toggle STATUS → Edit → Submit

- **BS-GAL-001**: Browse Gallery Local Storage folder grid | Nav: Settings → Gallery → Browse Local Storage → Open folder

- **BS-GAL-002**: Upload images or zip file to Gallery | Nav: Settings → Gallery → Open folder → Click Add New → Choose file(s) → Upload

- **BS-GAL-003**: Open folder contents, click image to open preview modal with Copy Path and Download | Nav: Settings → Gallery → Open folder → Click image → View Preview Modal

---

### Financial Operations

- **FN-WDR-001**: View all vendor withdrawal requests by status tab (Pending, Approved, Denied) | Nav: Financial Operations → Withdraw Requests → Select tab

- **FN-WDR-002**: Approve a vendor withdrawal request | Nav: Financial Operations → Withdraw Requests → Pending tab → Click Approve

- **FN-WDR-003**: Deny a withdrawal request with admin note | Nav: Financial Operations → Withdraw Requests → Click Deny → Add note → Confirm

- **FN-DSB-001**: View store disbursement history with lifecycle stages | Nav: Financial Operations → Store Disbursement → View list → Filter by status

- **FN-DLD-001**: View and process delivery driver disbursements | Nav: Financial Operations → Delivery Man Disbursement → View and process

- **FN-COD-001**: Log a physical cash collection from driver or store | Nav: Financial Operations → Collect Cash → Enter amount, method, reference → Save

- **FN-COD-002**: View cash collection log for reconciliation | Nav: Financial Operations → Collect Cash → View collection log

- **FN-DPM-001**: Log ad hoc bonus payment to a delivery driver | Nav: Financial Operations → Delivery Man Payments → Enter details → Save

- **FN-MTH-001**: Configure available withdrawal methods with required field definitions | Nav: Financial Operations → Withdraw Method → Add method → Define fields → Save

- **FN-MTH-002**: Enable, disable, or set a withdrawal method as default | Nav: Financial Operations → Withdraw Method → Toggle Enable/Disable → Click Set as Default

---

### Store Management

- **SM-NEW-001**: View pending vendor store joining applications and denied tab | Nav: Store Management → New Store → View New Joining Requests tabs

- **SM-NEW-002**: Approve or deny a pending store request | Nav: Store Management → New Store → Click action icon → Approve or Deny

- **SM-ADD-001**: Manually create a store with all owner and account details | Nav: Store Management → Add Store → Fill all form sections → Submit

- **SM-LST-001**: View accepted stores in paginated list with actions | Nav: Store Management → Stores List → View/search stores

- **SM-LST-002**: Toggle a store's Featured status | Nav: Store Management → Stores List → Toggle Featured switch

- **SM-LST-003**: Enable or disable a store's active Status | Nav: Store Management → Stores List → Toggle Status switch

- **SM-REC-001**: View all recommended stores | Nav: Store Management → Recommended Stores → View list

- **SM-BIM-001**: Download and upload store bulk import Excel template | Nav: Store Management → Bulk Import → Download template → Fill → Upload

- **SM-BEX-001**: Export all store records as Excel | Nav: Store Management → Bulk Export → Select type → Export

---

### Order Management

- **OM-POS-001**: Open POS, select store + category, search and add products to cart | Nav: POS Section → New Sale → Select Store → Select Category → Search → Click product

- **OM-POS-002**: Link order to existing customer or add new customer | Nav: POS Section → New Sale → Billing Section → Select customer or Add New Customer

- **OM-POS-003**: Review order summary, select payment method, place order | Nav: POS Section → New Sale → Review → Select payment → Place Order

- **OM-ORD-001**: View all orders by status category in sidebar | Nav: Order Management → Orders → Click status category

- **OM-ORD-002**: View separate filtered order lists for each of 9 status stages | Nav: Order Management → Orders → Click Scheduled / Pending / Accepted / Processing / On The Way / Delivered / Cancelled / Payment Failed / Refunded

- **OM-ORD-003**: Open full order detail view by clicking Eye icon | Nav: Order Management → Orders → Click Eye Icon

- **OM-ORD-004**: Update order status and assign delivery driver | Nav: Order Management → Orders → Eye Icon → Edit → Update Status / Assign Delivery Man

- **OM-ORD-005**: Print invoice by clicking Printer icon on order row | Nav: Order Management → Orders → Click Printer Icon

- **OM-OFP-001**: View offline payment submissions across All / Pending / Verified / Denied tabs | Nav: Order Management → Offline Payments → Review tabs

- **OM-OFP-002**: Update offline payment status to Verified or Denied | Nav: Order Management → Offline Payments → Review proof → Update status

- **OM-REF-001**: View and action customer refund requests | Nav: Order Management → Order Refunds → Review request → Click Approve or Rejected

---

### Flash Sales (Promotion Management)

- **FS-CRT-001**: Create a new Flash Sale with Title, Admin/Store Discount % split, Start/End Dates | Nav: Promotion Management → Flash Sales → Fill form → Submit

- **FS-PRD-001**: Add products to flash sale with stock and discount settings | Nav: Promotion Management → Flash Sales → Click Add Products → Select Item → Set Stock & Discount → Save

- **FS-MGT-001**: Publish, edit, or delete flash sales from the Flash Sale List | Nav: Promotion Management → Flash Sales → Toggle Publish / Edit / Delete

---

### Product Management

- **PM-CAT-001**: Add new product category with multilingual name and 1:1 image | Nav: Product Management → Categories → Category → Fill Name (Default/EN/AR) → Upload 1:1 image → Save

- **PM-CAT-002**: View full category list with search, export, status, edit, delete | Nav: Product Management → Categories → Category → View list

- **PM-SUB-001**: Add sub-category under a parent main category | Nav: Product Management → Categories → Sub Category → Select parent → Enter name → Save

- **PM-SUB-002**: View sub-category list with parent category shown | Nav: Product Management → Categories → Sub Category → View list

- **PM-BIM-001**: Download and upload category bulk import template | Nav: Product Management → Categories → Bulk Import → Download → Fill → Upload

- **PM-BEX-001**: Export category list as Excel | Nav: Product Management → Categories → Bulk Export → Select type → Export

- **PM-ATT-001**: Add new product attribute | Nav: Product Management → Attributes → Fill name → Save

- **PM-ATT-002**: View, edit, or delete attributes | Nav: Product Management → Attributes → View list → Edit or Delete

- **PM-UNT-001**: Add new unit of measurement | Nav: Product Management → Units → Fill name → Save

- **PM-UNT-002**: View, edit, or delete units | Nav: Product Management → Units → View list → Edit or Delete

- **PM-BRD-001**: Add new brand with name, logo, and status | Nav: Product Management → Brands → Add New Brand → Name + logo → Save

- **PM-BRD-002**: View brand list with toggle, edit, delete | Nav: Product Management → Brands → View list

- **PM-PRD-001**: Enter product name and description in all languages | Nav: Product Setup → Add New → Fill Name, Short Desc, Long Desc (Default/EN/AR)

- **PM-PRD-002**: Upload product image (1:1) and required thumbnail | Nav: Product Setup → Add New → Upload Product Image → Upload Thumbnail

- **PM-PRD-003**: Assign product to Store, Category, Sub-Category, Brand | Nav: Product Setup → Add New → Select Store → Category → Sub-Category → Brand

- **PM-PRD-004**: Set Price, Stock, and Discount Percentage | Nav: Product Setup → Add New → Enter Price → Stock → Discount %

- **PM-PRD-005**: Select Unit of Measurement and set Maximum Purchase Quantity | Nav: Product Setup → Add New → Select Unit → Set Max Qty

- **PM-PRD-006**: Add attributes and fill auto-generated variant price/stock table | Nav: Product Setup → Add New → Attributes section → Add values → Fill variant table

- **PM-PRD-007**: Add searchable keyword tags | Nav: Product Setup → Add New → Tags section → Enter keywords

- **PM-LST-001**: View product list with search and filter dropdowns | Nav: Product Management → Product Setup → List → Search / Filter

- **PM-LST-002**: Edit any product from the list | Nav: Product Management → Product Setup → List → Click Edit icon → Save

- **PM-LST-003**: Toggle product status to enable or disable visibility | Nav: Product Management → Product Setup → List → Toggle Status

- **PM-LST-004**: Permanently delete a product | Nav: Product Management → Product Setup → List → Click Delete → Confirm

- **PM-LOW-001**: View low stock product list with zone/store filter | Nav: Product Management → Product Setup → Low Stock List

- **PM-REV-001**: View all customer product reviews | Nav: Product Management → Product Setup → Review → View list

- **PM-REV-002**: Delete inappropriate product review | Nav: Product Management → Product Setup → Review → Click Delete

- **PM-PIB-001**: Download and upload product bulk import template | Nav: Product Management → Product Setup → Bulk Import → Download → Upload

- **PM-PEX-001**: Export full product catalogue to Excel | Nav: Product Management → Product Setup → Bulk Export → Select type → Export

---

### Promotion Management

- **PM-BCM-001**: Create Basic Campaign with name, dates, time schedule, and 900×300 banner | Nav: Promotion Management → Campaigns → Basic Campaigns → Add New Campaign → Fill all fields → Save

- **PM-BCM-002**: View all basic campaigns in Campaign List | Nav: Promotion Management → Campaigns → Basic Campaigns → View Campaign List

- **PM-ICM-001**: Create Item Campaign with store, item, attributes, and time schedule | Nav: Promotion Management → Campaigns → Item Campaigns → Add New Campaign → Fill → Save

- **PM-ICM-002**: View all item campaigns | Nav: Promotion Management → Campaigns → Item Campaigns → View Campaign List

- **PM-BNR-001**: Add banner with zone, banner type, and 3:1 image | Nav: Promotion Management → Banners → Fill fields → Save

- **PM-BNR-002**: View banner list with status, edit, delete | Nav: Promotion Management → Banners → View Banner List

- **PM-OBN-001**: Upload Best Reviewed Items, New Arrivals, and Bottom Section banners | Nav: Promotion Management → Other Banners → Upload each section → Save

- **PM-CPN-001**: Create coupon with all required fields | Nav: Promotion Management → Coupons → Fill all coupon fields → Save

- **PM-CPN-002**: View coupon list with status, edit, delete | Nav: Promotion Management → Coupons → View Coupon List

- **PM-NTF-001**: Send push notification to selected zone and recipients | Nav: Promotion Management → Push Notifications → Fill form → Save

- **PM-NTF-002**: View notification history | Nav: Promotion Management → Push Notifications → View Notification List

- **PM-ADV-001**: Create admin advertisement with title, store, validity, images, live preview | Nav: Promotion Management → Advertisements → Add New Advertisement → Fill fields → Save

- **PM-ADV-002**: Review and approve/deny advertisement requests from vendors | Nav: Promotion Management → Advertisements → Ad Requests → Review tabs → Approve or Deny

- **PM-ADV-003**: View the full Ads List | Nav: Promotion Management → Advertisements → Ads List

---

### Reports & Analytics

- **RA-TXN-001**: View Transaction Report with module/zone/store/time filters and earning summary cards | Nav: Reports & Analytics → Transaction Report → Apply filters → View

- **RA-TXN-002**: View and export Order Transactions detail table | Nav: Reports & Analytics → Transaction Report → View table → Export

- **RA-ITM-001**: View Item Report with product performance per item | Nav: Reports & Analytics → Item Report → Apply filters → View table → Export

- **RA-STW-001**: View Store Wise Report with Summary, Sales, and Order sections | Nav: Reports & Analytics → Store Wise Report

- **RA-EXP-001**: View Expense Report by expense type | Nav: Reports & Analytics → Expense Report → Apply filters → View table → Export

- **RA-DSB-001**: View Disbursement Report for Stores and Delivery Men | Nav: Reports & Analytics → Disbursement Report → Select tab → Apply filters

- **RA-ORD-001**: View Order Report with full statistics and order table | Nav: Reports & Analytics → Order Report → Apply filters → View stats + table → Export

- **RA-ATX-001**: Generate Admin Tax Report with income source breakdown | Nav: Reports & Analytics → Admin Tax Report → Select date range → Choose method → Enter rate → Submit

- **RA-VTX-001**: View Vendor Tax Report filtered by date and store | Nav: Reports & Analytics → Vendor Tax Report → Select filter → Filter → View results

- **RA-PTX-001**: View Parcel Tax Report for parcel delivery services | Nav: Reports & Analytics → Parcel Tax Report → Select date range → Filter → View table → Export
`;
