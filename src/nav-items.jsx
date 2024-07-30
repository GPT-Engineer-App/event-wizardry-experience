import { Home, Calendar, GlassWater, Map, User } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Events",
    to: "/events",
    icon: <Calendar className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Bar",
    to: "/bar",
    icon: <GlassWater className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Venue",
    to: "/venue",
    icon: <Map className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Profile",
    to: "/profile",
    icon: <User className="h-4 w-4" />,
    page: <Index />,
  },
];
