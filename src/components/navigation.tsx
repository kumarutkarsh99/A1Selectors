"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Upload,
  Search,
  Building,
  Users,
  Info,
  BookOpen,
  Phone,
  Home,
} from "lucide-react";

export default function Navigation() {
  const pathname = usePathname() ?? "";
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = useMemo(
    () => [
      // { href: "/", label: "Home", icon: Home },
      { href: "/services", label: "Our Services", icon: Search },
      { href: "/employers", label: "For Companies", icon: Building },
      { href: "/jobseekers", label: "For Talent", icon: Users },
      { href: "/about", label: "About Us", icon: Info },
      { href: "/blog", label: "Blog", icon: BookOpen },
      { href: "/contact", label: "Contact", icon: Phone },
    ],
    []
  );

  // Decide active link
  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/");

  useEffect(() => {
    if (isOpen) {
      navItems.forEach((item) => {
        router.prefetch(item.href);
      });
    }
  }, [isOpen, navItems, router]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-md">A1</span>
              </div>
              <span className="text-xl font-bold text-slate-800">
                A1Selectors
              </span>
            </Link>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                aria-current={isActive(href) ? "page" : undefined}
                className={`text-sm font-medium transition-colors ${
                  isActive(href)
                    ? "text-teal-600"
                    : "text-slate-600 hover:text-teal-600"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-teal-600 text-teal-600 hover:bg-teal-50"
            >
              <Link href="/jobs">
                <Search className="mr-2 h-4 w-4" />
                Find Jobs
              </Link>
            </Button>
            <Button asChild size="sm" className="bg-teal-600 hover:bg-teal-700">
              <Link href="/jobseekers/formpage">
                <Upload className="mr-2 h-4 w-4" />
                Upload CV
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-80">
              {/* Mobile Header */}
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="flex items-center">
                  <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-lg">A1</span>
                  </div>
                  <span className="text-xl font-bold text-slate-800">
                    A1Selectors
                  </span>
                </Link>
              </div>

              {/* Mobile Links */}
              <div className="space-y-4">
                {navItems.map(({ href, label, icon: Icon }) => (
                  <Link key={href} href={href} onClick={() => setIsOpen(false)}>
                    <button
                      className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                        isActive(href)
                          ? "bg-teal-50 text-teal-600"
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                      aria-current={isActive(href) ? "page" : undefined}
                    >
                      <Icon className="mr-3 h-5 w-5" />
                      {label}
                    </button>
                  </Link>
                ))}
              </div>

              {/* Mobile CTAs */}
              <div className="pt-4 space-y-3">
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-teal-600 text-teal-600 hover:bg-teal-50"
                >
                  <Link href="/jobs" onClick={() => setIsOpen(false)}>
                    <Search className="mr-2 h-4 w-4" />
                    Find Jobs
                  </Link>
                </Button>
                <Button
                  asChild
                  className="w-full bg-teal-600 hover:bg-teal-700"
                >
                  <Link
                    href="/jobseekers/formpage"
                    onClick={() => setIsOpen(false)}
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    Upload CV
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
