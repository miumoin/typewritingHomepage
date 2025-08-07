"use client";

import React, { useEffect, useState } from "react";
import { navItems } from "@/lib/nav-items";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("");

  // Update active section based on URL hash or scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            return;
          }
        }
      }
    };

    // Set initial active section from URL hash
    const hash = pathname.split("#")[1] || "hero";
    setActiveSection(hash);

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <div className="sticky bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-md md:hidden">
      <ul className="grid grid-cols-4 gap-4 py-2">
        {[...navItems].reverse().map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <li
              key={item.id}
              className="flex flex-col items-center justify-center">
              <Link
                href={`#${item.id}`}
                className={`flex flex-col items-center gap-1 transition-transform duration-200 hover:scale-105 active:scale-95 ${
                  isActive ? "text-blue-600" : "text-gray-600"
                }`}
                aria-current={isActive ? "page" : undefined}>
                <Icon
                  className={`size-5 transition-colors duration-200 ${
                    isActive ? "text-blue-600" : "text-gray-600"
                  }`}
                />
                <span
                  className={`text-xs ${
                    isActive ? "text-blue-600 font-semibold" : "text-gray-600"
                  }`}>
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileNav;
