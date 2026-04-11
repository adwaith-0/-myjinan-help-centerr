/* ═══════════════════════════════════════════════════════════════
   MyJinan — Role-Based Module Configuration
   Maps organizational roles to platform modules so user stories
   can be viewed per-role for admin execution tracking.
   ═══════════════════════════════════════════════════════════════ */

export interface RoleDef {
  id: string;
  label: string;
  icon: string;       // lucide icon name
  color: string;       // hex accent
  description: string;
  modules: string[];   // module names that belong to this role
}

// ── Role Definitions ──────────────────────────────────────────
export const ROLES: RoleDef[] = [
  {
    id: "super-admin",
    label: "Super Admin",
    icon: "Shield",
    color: "#ef4444",
    description: "Full platform oversight — access to all modules and settings",
    modules: [
      "Product Management",
      "Zone & Module Setup",
      "Business Settings",
      "Order Management",
      "Reports & Analytics",
      "Wallet Management",
      "Advertisement Management",
      "Employee Management",
      "Item / Inventory Mgmt",
      "Marketing & Promotions",
      "Financial Operations",
    ],
  },
  {
    id: "product-manager",
    label: "Product Manager",
    icon: "Package",
    color: "#f59e0b",
    description: "Manages the product catalog — categories, listings, pricing, inventory, and reviews",
    modules: [
      "Product Management",
      "Item / Inventory Mgmt",
    ],
  },
  {
    id: "operations-manager",
    label: "Operations Manager",
    icon: "ShoppingCart",
    color: "#10b981",
    description: "Handles day-to-day order processing, zones, deliveries, and returns",
    modules: [
      "Order Management",
      "Zone & Module Setup",
    ],
  },
  {
    id: "finance-manager",
    label: "Finance Manager",
    icon: "DollarSign",
    color: "#eab308",
    description: "Manages withdrawals, disbursements, wallet operations, and financial reporting",
    modules: [
      "Financial Operations",
      "Wallet Management",
      "Reports & Analytics",
    ],
  },
  {
    id: "marketing-manager",
    label: "Marketing Manager",
    icon: "Megaphone",
    color: "#d946ef",
    description: "Creates and manages promotions, ad campaigns, discount codes, and flash sales",
    modules: [
      "Marketing & Promotions",
      "Advertisement Management",
    ],
  },
  {
    id: "hr-admin",
    label: "HR / Employee Admin",
    icon: "Users",
    color: "#ec4899",
    description: "Manages team access, roles, permissions, invitations, and activity auditing",
    modules: [
      "Employee Management",
    ],
  },
  {
    id: "platform-admin",
    label: "IT / Platform Admin",
    icon: "Settings",
    color: "#3b82f6",
    description: "Manages platform configuration, system settings, languages, taxes, and integrations",
    modules: [
      "Business Settings",
    ],
  },
];

// ── Helper: Get role(s) that own a given module ───────────────
export function getRolesForModule(moduleName: string): RoleDef[] {
  return ROLES.filter(
    (r) => r.id !== "super-admin" && r.modules.includes(moduleName)
  );
}

// ── Helper: Get a single primary role for a module ────────────
export function getPrimaryRoleForModule(moduleName: string): RoleDef | null {
  return (
    ROLES.find(
      (r) => r.id !== "super-admin" && r.modules.includes(moduleName)
    ) || null
  );
}

// ── Helper: Get all non-super-admin roles ─────────────────────
export function getNonAdminRoles(): RoleDef[] {
  return ROLES.filter((r) => r.id !== "super-admin");
}
