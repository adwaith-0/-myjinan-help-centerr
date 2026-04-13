/* ═══════════════════════════════════════════════════════════════
   MyJinan Knowledge Base — Verified Against Official Documentation
   ALL content in this file is extracted directly from the official
   MyJinan Admin Panel documentation. No fictional features included.
   Last updated: 2026-04-12
   ═══════════════════════════════════════════════════════════════ */

const KNOWLEDGE_BASE = `
## MYJINAN PLATFORM — COMPLETE VERIFIED DOCUMENTATION

You are a helpful documentation assistant for the MyJinan e-commerce admin panel (admin.myjinan.com).
Use ONLY the information below to answer questions. Do NOT invent features not listed here.
If a feature is not documented below, say "That feature is not available in this version of the system."

---

### ZONE & MODULE SETUP

#### Zones
- **Create Zone**: Settings → Zone Setup → Fill Business Zone Name (Default/EN/AR) → Draw boundary polygon on embedded Google Map → Submit. Zones define where the platform provides services; only customers inside the boundary can see stores in that zone.
- **Zone List**: Settings → Zone Setup → Scroll to Zone List. Shows: Zone Id, Business Zone Name, Vendors count, Deliverymen count, Status toggle, Action icons (Connect Module grid icon, three-dot menu).
- **Enable/Disable Zone**: Zone List → Toggle the Status switch. Immediately suspends or restores all storefronts, deliveries, and customer access in that area.
- **Connect Module to Zone**: Zone List → Click the grid/Connect Module icon → Select a business module → Connect. A zone without a connected module offers no services.
- **Edit/Delete Zone**: Zone List → Click three-dot menu → Edit boundary polygon on map, or Delete.
- **Export Zone list**: Zone List → Click Export button.

#### Business Modules
- **Create Module**: Settings → Module Setup → Add Business Module → Fill Business Module Name + description (Default/EN/AR) → Select module type (Grocery, Food, Pharmacy, Ecommerce, Parcel) → Upload Icon (1:1) and Thumbnail (1:1) → Add Module.
- **Module List**: Settings → Module Setup → Modules. Shows: Module Id, Name, Business Module Type, Total Vendors, Status toggle, Edit (pencil icon). Filter by module type dropdown; search by name; export.
- **Enable/Disable Module**: Module List → Toggle Status switch. Hides the module from the customer app.
- **Edit Module**: Module List → Click pencil Edit icon → Update fields → Save.

---

### BUSINESS SETTINGS

#### Business Information
- **Company Details**: Settings → Business Settings → Business Information tab → Fill Company Name, Email, Phone, Country, Address → Click on map to set Latitude/Longitude → Upload Logo (3:1 ratio) → Upload Favicon (1:1 ratio) → Save.
- **General Settings** (same page, scroll down): Set Time Zone, Time Format, Currency Symbol, Currency Position (left/right), Digit After Decimal Point, Copyright Text, Cookies Text → Save.
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
- **Admin Landing Page** and **Flutter Landing Page** pages are also available under Pages & Social Media.

---

### GALLERY

- **Browse**: Settings → Gallery → Local Storage shows categorised system folders (Category, Vendor, Delivery-Man, Contact_us, Notifications, Header_banner, Banner, Store, Module, Campaign, Product, Brand, Advertisement, etc.) each with item count badge.
- **Upload files**: Open any folder → Click Add New → Upload image (single file) OR Upload zip file (bulk) → Click Upload.
- **View & use assets**: Open folder → Click any image thumbnail → Preview modal shows: filename, Copy Path button (copies the asset URL), Download button.

---

### FINANCIAL OPERATIONS

- **Withdraw Requests**: Financial Operations → Withdraw Requests. Three tabs: Pending, Approved, Denied. Review vendor payout requests → Click Approve (payment is settled) or Deny (enter admin reason note) → Confirm.
- **Store Disbursement**: Financial Operations → Store Disbursement. View full disbursement history per store with lifecycle stages (Pending, Completed, Cancelled). Filter by status.
- **Delivery Man Disbursement**: Financial Operations → Delivery Man Disbursement. View and process driver payouts through payment lifecycle (Pending, Processing, Completed).
- **Collect Cash (COD)**: Financial Operations → Collect Cash → Enter amount, payment method, reference number → Save. View collection log to reconcile physical cash against digital records.
- **Delivery Man Payments**: Financial Operations → Delivery Man Payments → Log ad hoc bonus payments directly to drivers (outside automated disbursement).
- **Withdraw Methods**: Financial Operations → Withdraw Method → Add method (Bank Transfer, Mobile Money, etc.) → Define required fields → Save. Toggle Enable/Disable or click Set as Default.

---

### STORE MANAGEMENT

- **New Store Requests**: Store Management → New Store. Two tabs: New Joining Requests (pending applications) and Denied. Each row shows store name, module, owner info, zone, status. Approve or Deny using action icons.
- **Add Store (manually)**: Store Management → Add Store. Fill: Store Name, Address, Logo (1:1), Cover (2:1), Minimum & Maximum Delivery Time + time unit, Zone, Latitude, Longitude. Owner section: First Name, Last Name, Phone. Account section: Email, Password. Business TIN field. → Submit.
- **Stores List**: Store Management → Stores List. Paginated table showing store info, owner info, zone, Featured toggle, Status toggle, Actions (View Eye, Edit Pencil, Delete Trash). Use search bar to find stores.
- **Featured toggle**: Stores List → Toggle Featured switch to promote a store on the customer website homepage.
- **Enable/Disable Store**: Stores List → Toggle Status switch. Disabled stores are immediately hidden from customers.
- **Recommended Stores**: Store Management → Recommended Stores. Shows: rating, total products, total orders, Status toggle, Delete option.
- **Bulk Import Stores**: Store Management → Bulk Import → Download Excel template (with or without current data) → Fill template → Upload New Data or Update Existing Data.
- **Bulk Export Stores**: Store Management → Bulk Export → Select data type → Click Export → Download Excel.

---

### ORDER MANAGEMENT (POS)

#### POS – Point of Sale
- **New Sale**: POS Section → New Sale → Select Store from dropdown → Select Category from dropdown → Search for products in the grid → Click product to add to cart. Used for walk-in/offline orders without customer using the app.
- **Link Customer**: POS → Billing section → Select existing customer from dropdown OR click Add New Customer (First Name, Last Name, Email, Phone) → Submit.
- **Place Order**: POS → Review order summary (Subtotal, Discount, Delivery Fee, Tax, Total) → Select payment method → Click Place Order. Or click Clear Cart to cancel.

#### Orders
Order status categories in sidebar: All Orders, Scheduled, Pending, Accepted, Processing, Order On The Way, Delivered, Cancelled, Payment Failed, Refunded.

- **View All Orders**: Order Management → Orders → Click All Orders (or any status tab). Table shows order ID, customer, store, total, payment method, status, date.
- **Order Detail**: Order Management → Orders → Click Eye icon on any row. Shows: Order Summary (number, date, store, coupon, status, payment method), Item Details, Financial Breakdown (subtotal, delivery, discounts, tips, total), Customer Details, Delivery Information, Delivery Proof photo, Store Information.
- **Update Order Status / Assign Driver**: Order detail → Click Edit → Update status stage → Assign Delivery Man → Save.
- **Correct order status stages**: Pending → Accepted → Processing → Order On The Way → Delivered. Also: Scheduled, Cancelled, Payment Failed, Refunded.
- **Print Invoice**: Orders list → Click Printer icon on any order row → Generates printable receipt/PDF.
- **Offline Payments**: Order Management → Offline Payments. Tabs: All, Pending, Verified, Denied. Review customer's uploaded payment proof → Update status to Verified or Denied. ⚠️ Always confirm funds received in your bank before marking Verified.
- **Order Refunds**: Order Management → Order Refunds → Review customer refund requests → Click Approve or Rejected.

---

### FLASH SALES (under Promotion Management)

- **Create Flash Sale**: Promotion Management → Flash Sales → Enter Title (Default/EN/AR), Admin Discount %, Store Discount % (split), Start Date, End Date → Submit.
- **Add Products to Flash Sale**: Flash Sale List → Click Add Products → Select Item → Set Stock for this sale → Set Discount % → Save.
- **Manage Flash Sales**: Flash Sale List → Toggle Publish (controls customer visibility) → Edit (update sale details) → Delete (remove sale). Flash Sales are admin-only — vendors cannot create them.

---

### PRODUCT MANAGEMENT

#### Categories
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

#### Product Setup – Add New Product
- **Basic Info**: Product Setup → Add New → Fill Name, Short Description, Long Description (all in Default/EN/AR tabs).
- **Images**: Upload Product Image (1:1 ratio) + Thumbnail (required). Image requirements: 1:1, max 100KB, .jpg or .png.
- **Classification**: Select Store → Category → Sub-Category → Brand from dropdowns.
- **Pricing & Stock**: Enter Price, Stock Quantity, Discount Percentage.
- **Unit & Purchase Limit**: Select Unit of Measurement → Set Maximum Purchase Quantity per order.
- **Attributes/Variants**: Add attribute values → System auto-generates variant combination table with individual Price and Stock per combination.
- **Tags**: Enter searchable keyword tags.

#### Product List
- **View**: Product Management → Product Setup → List. Search bar + filter dropdowns (Store, Zone, Category, Sub-Category).
- **Edit**: Click Edit icon → Update any field → Save.
- **Enable/Disable**: Toggle Status switch.
- **Delete**: Click Delete icon → Confirm (permanent).
- **Low Stock List**: Product Management → Product Setup → Low Stock List. Filtered view of products at critically low or zero stock. Filter by zone or store. Export available.

#### Product Reviews
- **View Reviews**: Product Management → Product Setup → Review → View all customer reviews with ratings, comments, reviewer info.
- **Delete Review**: Click Delete on inappropriate or fraudulent review.

#### Product Bulk Import/Export
- **Bulk Import Products**: Product Management → Product Setup → Bulk Import → Download template → Fill → Upload. Only .xls/.xlsx with the official MyJinan template accepted.
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
- **Ads List**: Promotion Management → Advertisements → Ads List. Shows all active advertisements. Click New Advertisement to go to creation form.
- ⚠️ Advertisements do NOT have zone targeting, module targeting, customer segment targeting, budget caps, impression analytics, or CTR tracking. Vendors submit ads for admin approval — there is no self-serve ad system.

---

### REPORTS & ANALYTICS

#### Transaction Report
- Reports & Analytics → Transaction Report
- Filters: Module, Zone, Store, Time Duration (All Time / This Year / Previous Year / This Month / This Week / Custom Date Range).
- Summary cards: Admin Earning, Store Earning, Deliveryman Earning, Completed Transactions, Refunded Transactions.
- Order Transactions table: view details, download individual order statements, export as CSV or Excel.

#### Item Report
- Reports & Analytics → Item Report
- Filters: Module, Store, Zone, Time Duration, Categories.
- Table columns: Item Name, Module, Store, Stock, Sell Count, Price, Total Amount Sold, Total Discount Given, Average Sale Value, Average Ratings.
- Export available.

#### Store Wise Report
- Reports & Analytics → Store Wise Report. Three sections:
  1. Summary Report: Total Orders, Average Order Value, Payment method breakdown.
  2. Sales Report: Gross Sale, Tax, Commission, Quantity Sold, Discount.
  3. Order Report: Total Discount, Coupon Discount, Cancelled/Incomplete/Completed counts.

#### Expense Report
- Reports & Analytics → Expense Report
- Filters: Module, Zone, Vendors, Customers, Time Duration, Expense Type (Add fund bonus, Free delivery, Coupon discount, Discount on product, Flash sale discount, CashBack, Referral Discount).
- Expense List table: SL, Order ID, Date & Time, Expense Type, Customer Name, Expense Amount.
- Export available.

#### Disbursement Report
- Reports & Analytics → Disbursement Report. Two tabs: Stores and Deliverymen.
- Summary cards: Pending, Completed, Cancelled counts.
- Filters: Zone, Module, Store, Payment Method, Status, Time Duration.
- Full disbursement table with export.

#### Order Report
- Reports & Analytics → Order Report
- Filters: Modules, Zones, Stores, Customers, Time Duration.
- Statistics cards: Total, In Progress, On The Way, Delivered, Failed, Refunded, Cancelled.
- Full Order Report table with all order and financial columns.
- Export to Excel. Invoice preview available.

#### Admin Tax Report
- Reports & Analytics → Admin Tax Report
- Step 1: Select date range (This Fiscal Year OR Custom date range).
- Step 2: Choose tax calculation method:
  - Same Tax for All Income Source (enter one rate)
  - Different Tax for Different Income Source (enter rate per source)
- Step 3: Click Submit → Report shows Total Income and Total Tax broken down by income source.

#### Vendor Tax Report
- Reports & Analytics → Vendor Tax Report
- Filters: Date range, All vendors or specific store.
- Summary: Total Orders, Total Order Amount, Total Tax Amount.
- Table: SL, Vendor Info, Total Order, Total Order Amount, Tax Amount, Action.
- Click Filter to refresh results.

#### Parcel Tax Report
- Reports & Analytics → Parcel Tax Report
- Select date range → Click Filter.
- Summary: Total Orders, Total Order Amount, Total Tax Amount (for parcel module only).
- Order table: SL, Order Id, Total Order Amount, Tax Amount.
- Export available.

---

### GENERAL INFORMATION

- **Platform URL**: admin.myjinan.com
- **Prepared By**: AlphaTech
- **Client**: MyJinan
- **Image Requirements**: 1:1 aspect ratio, max 100KB, .jpg or .png format (unless otherwise specified per upload field)
- **Excel Imports**: Only .xls or .xlsx format with the official MyJinan template
- **Multi-language Support**: Default, English (EN), Arabic (AR) with RTL support
- **Software Version**: 3.3
- **Order Status Stages**: Pending → Accepted → Processing → Order On The Way → Delivered (also: Scheduled, Cancelled, Payment Failed, Refunded)
- **Flash Sales**: Admin-only feature. Vendors cannot create flash sales.
- **Advertisements**: Vendors submit ad requests; admin approves/denies. No self-serve ads, no budget caps, no impression tracking.
- **Employee Management**: There is no employee invitation system in this version.
- **Item/Inventory Management**: There is no separate inventory/SKU/barcode system. Stock is managed per product in Product Setup.
- **Wallet Management**: Vendors and drivers manage their own wallets. Admin handles disbursements and withdrawal approvals — there is no separate admin wallet module.
`;
