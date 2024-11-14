export type SiteConfig = typeof siteConfig;

const PARTNER_DASHBOARD_URL = process.env
  .NEXT_PUBLIC_PARTNER_DASHBOARD_URL as string;

export const siteConfig = {
  name: "Yield Guild Games - Partner Payment Portal",
  description: "One stop shop for YGG Partners",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Client Dashboard",
      href: PARTNER_DASHBOARD_URL,
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    twitter: "https://discord.com/invite/ygg",
    partnerDashboard: PARTNER_DASHBOARD_URL,
    discord: "https://discord.com/invite/ygg",
  },
};
