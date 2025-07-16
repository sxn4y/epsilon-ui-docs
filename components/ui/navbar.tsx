"use client";

import React, { ReactNode, useState, useEffect } from "react";
import "./epsilon.css";
import Button from "./button";

interface NavBarProps {
  children?: ReactNode;
  className?: string;
  brand?: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "fancy";
}

interface NavItemProps {
  children?: ReactNode;
  className?: string;
  href?: string;
  active?: boolean;
}

const NavBar: React.FC<NavBarProps> = ({
  children,
  className = "",
  brand,
  variant = "primary",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  let inBuiltClass = "bg-(--foreground) text-(--background)";

  switch (variant) {
    case "secondary":
      inBuiltClass = "bg-(--foreground)/10 text-(--foreground)";
      break;
    case "outline":
      inBuiltClass = "bg-(--foreground)/10 text-(--foreground) border-b border-(--foreground)/20";
      break;
    case "fancy":
      inBuiltClass = "bg-linear-to-b from-(--foreground)/10 to-(--foreground)/6 text-(--foreground) border-b border-(--foreground)/20";
      break;
  }

  return (
    <nav className={`w-full ${inBuiltClass} ${className}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            {brand}
          </div>
          <div className={`hidden md:flex items-center space-x-4`}>
            {children}
          </div>
          <div className="md:hidden">
            <Button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center"
              variant="outline"
              parallax
              tiltFactor={0}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden pb-4`}>
          <div className="flex flex-col space-y-2">
            {children}
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavItem: React.FC<NavItemProps> = ({
  children,
  className = "",
  href = "#",
  active = false,
}) => {
  return (
    <a href={href}>
      <Button variant="link">{children}</Button>
    </a>
  );
};

export { NavBar, NavItem };