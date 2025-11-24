"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Club Profile", href: "/club-profile" },
    { label: "Members", href: "/members" },
    // { label: 'News', href: '/news' },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  const gallerySubsections = [
    { label: "Events Photos", href: "/gallery/events" },
    { label: "Celebrations", href: "/gallery/celebrations" },
    { label: "Projects Gallery", href: "/gallery/projects" },
    { label: "Meetings", href: "/gallery/meetings" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (galleryRef.current && !galleryRef.current.contains(event.target as Node)) {
        setIsGalleryOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <link rel="icon" href="/images/rotarylogo.png" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2 sm:gap-4">
            <Image
              src="/images/rotarylogo.png"
              alt="Rotary Logo"
              width={80}
              height={80}
              className="w-12 h-12 sm:w-16 sm:h-16"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl font-bold text-blue-900">
                Rotary Club of Kathmandu North
              </h1>
              <p className="text-xs sm:text-sm text-gray-600">
                District: 3292, Club Number: 29915
              </p>
            </div>
          </Link>

          <nav className="hidden sm:block">
            <ul className="flex space-x-1 text-sm lg:text-base items-center">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      pathname === item.href
                        ? "bg-blue-900 text-white"
                        : "text-blue-900 hover:bg-blue-100 hover:text-blue-900"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {/* Gallery Dropdown */}
              <li className="relative" ref={galleryRef}>
                <button
                  onClick={() => setIsGalleryOpen(!isGalleryOpen)}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1",
                    pathname?.startsWith("/gallery")
                      ? "bg-blue-900 text-white"
                      : "text-blue-900 hover:bg-blue-100 hover:text-blue-900"
                  )}
                >
                  Gallery
                  <ChevronDown className={cn("h-4 w-4 transition-transform", isGalleryOpen && "rotate-180")} />
                </button>
                {isGalleryOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                    {gallerySubsections.map((subsection) => (
                      <Link
                        key={subsection.label}
                        href={subsection.href}
                        onClick={() => setIsGalleryOpen(false)}
                        className={cn(
                          "block px-4 py-2 text-sm transition-colors",
                          pathname === subsection.href
                            ? "bg-blue-900 text-white"
                            : "text-blue-900 hover:bg-blue-100 hover:text-blue-900"
                        )}
                      >
                        {subsection.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            </ul>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="sm:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <nav className="px-2 pt-2 pb-4 bg-white border-t">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  pathname === item.href
                    ? "bg-blue-900 text-white"
                    : "text-blue-900 hover:bg-blue-100 hover:text-blue-900"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {/* Gallery in mobile menu */}
            <div className="mt-2">
              <button
                onClick={() => setIsGalleryOpen(!isGalleryOpen)}
                className={cn(
                  "w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium",
                  pathname?.startsWith("/gallery")
                    ? "bg-blue-900 text-white"
                    : "text-blue-900 hover:bg-blue-100 hover:text-blue-900"
                )}
              >
                Gallery
                <ChevronDown className={cn("h-4 w-4 transition-transform", isGalleryOpen && "rotate-180")} />
              </button>
              {isGalleryOpen && (
                <div className="pl-4 mt-1 space-y-1">
                  {gallerySubsections.map((subsection) => (
                    <Link
                      key={subsection.label}
                      href={subsection.href}
                      onClick={() => {
                        setIsGalleryOpen(false);
                        setIsMenuOpen(false);
                      }}
                      className={cn(
                        "block px-3 py-2 rounded-md text-sm",
                        pathname === subsection.href
                          ? "bg-blue-900 text-white"
                          : "text-blue-900 hover:bg-blue-100 hover:text-blue-900"
                      )}
                    >
                      {subsection.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
