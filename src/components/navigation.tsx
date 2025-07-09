"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Upload,
  Search,
  Building,
  Users,
  BookOpen,
  Phone,
  Home,
} from "lucide-react";

export default function Navigation() {
  const pathname = usePathname() ?? "";

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/jobs", label: "Browse Jobs", icon: Search },
    { href: "/employers", label: "For Employers", icon: Building },
    { href: "/jobseekers", label: "For Job Seekers", icon: Users },
    { href: "/about", label: "About Us", icon: Users },
    { href: "/blog", label: "Blog", icon: BookOpen },
    { href: "/contact", label: "Contact", icon: Phone },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center cursor-pointer"
          >
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">T</span>
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
            <Link href="/jobs">
              <Button
                variant="outline"
                size="sm"
                className="border-teal-600 text-teal-600 hover:bg-teal-50"
              >
                <Search className="mr-2 h-4 w-4" />
                Find Jobs
              </Button>
            </Link>
            <Link href="/jobseekers">
              <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
                <Upload className="mr-2 h-4 w-4" />
                Upload CV
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-80">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="flex items-center">
                  <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-lg">T</span>
                  </div>
                  <span className="text-xl font-bold text-slate-800">
                    TalentConnect
                  </span>
                </Link>
              </div>

              {/* Links */}
              <div className="space-y-4">
                {navItems.map(({ href, label, icon: Icon }) => (
                  <Link key={href} href={href}>
                    <button
                      className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                        isActive(href)
                          ? "bg-teal-50 text-teal-600"
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <Icon className="mr-3 h-5 w-5" />
                      {label}
                    </button>
                  </Link>
                ))}
              </div>

              {/* Mobile CTAs */}
              <div className="pt-4 space-y-3">
                <Link href="/jobs">
                  <Button
                    variant="outline"
                    className="w-full border-teal-600 text-teal-600 hover:bg-teal-50"
                  >
                    <Search className="mr-2 h-4 w-4" />
                    Find Jobs
                  </Button>
                </Link>
                <Link href="/jobseekers">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload CV
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
