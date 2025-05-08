"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

const navItems = [
  { title: "Home", href: "/" },
  {
    title: "Cardio",
    href: "/cardio",
    subItems: [
      { title: "Our Cardio Series", href: "/cardio" },
      { title: "Treadmills", href: "#treadmills" },
      { title: "Cross Trainer", href: "#cross-trainers" },
      { title: "Spin Bike", href: "#spin-bikes" },
    ],
  },
  {
    title: "Strength",
    href: "/strength",
    subItems: [
      { title: "Our Strength Series", href: "/strength" },
      { title: "Eclipse", href: "#eclipse" },
      { title: "Endurance Plus", href: "/endurance-plus-series" },
      { title: "Alexander", href: "/alexander-series" },
      { title: "Iron", href: "/iron-series" },
    ],
  },
  {
    title: "Plate Loaded",
    href: "/strength-plate-loaded",
    subItems: [
      { title: "Our Plate Loaded Series", href: "/strength-plate-loaded" },
      { title: "Hunter", href: "#hunter" },
      { title: "Hammer", href: "/hammer" },
      { title: "Hulk", href: "/hulk" },
    ],
  },
  // { title: "Accessories", href: "/accessories" },
  { title: "Our Packages", href: "/gym-setup" },
  { title: "Contact", href: "/contact" },
  { title: "About", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [openSubMenus, setOpenSubMenus] = React.useState<Record<string, boolean>>({});

  const toggleSubMenu = (title: string) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold lg:ml-10">
          <Image src="/logo.png" width={150} height={50} alt="gymline logo" className="h-10 w-auto" />
        </Link>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] p-0">
            <div className="flex flex-col h-full">
              <div className="p-4 border-b">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <Image src="/logo.png" width={150} height={50} alt="gymline logo" className="h-8 w-auto" />
                </Link>
              </div>
              <nav className="flex-grow overflow-y-auto p-4">
                {navItems.map((item) =>
                  item.subItems ? (
                    <div key={item.title} className="mb-1">
                      <button
                        onClick={() => toggleSubMenu(item.title)}
                        className="flex w-full justify-between items-center py-2 text-sm font-medium transition-colors hover:text-primary"
                      >
                        {item.title}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${openSubMenus[item.title] ? "rotate-180" : ""}`}
                        />
                      </button>
                      <div
                        className={`pl-4 space-y-1 overflow-hidden transition-all ${
                          openSubMenus[item.title] ? "max-h-64" : "max-h-0"
                        }`}
                      >
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="flex py-2 text-sm text-muted-foreground hover:text-primary"
                            onClick={() => setIsOpen(false)}
                          >
                            <ChevronRight className="mr-1 h-4 w-4" />
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center py-2 text-sm font-medium transition-colors hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )
                )}
              </nav>
              <div className="p-4 border-t">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-black text-white hover:bg-gray-800">Book Appointment</Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 mx-auto">
          {navItems.map((item) =>
            item.subItems ? (
              <div key={item.title} className="relative group">
                <button className="flex items-center gap-1 px-1 py-2 text-sm font-medium transition-colors hover:text-primary">
                  {item.title}
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2 hidden group-hover:block z-50">
                  <div className="bg-background dark:bg-background rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden min-w-[200px]">
                    <div className="py-1">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:bg-accent"
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
              >
                {item.title}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link href="/contact">
            <Button className="rounded-full px-6 bg-black text-white hover:bg-white hover:text-black border border-transparent hover:border-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white dark:hover:border-white transition-all">
              Book Appointment
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
