import { Home, Star, Calendar, HelpCircle, Package } from "lucide-react";

// Navigation items to keep DRY
export const navItems = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'features', label: 'Features', icon: Star },
  { href: '/products', label: 'Products', icon: Package },
  { id: 'cta', label: 'Request a Demo', icon: Calendar },
  { id: 'faq', label: 'FAQ', icon: HelpCircle },
];