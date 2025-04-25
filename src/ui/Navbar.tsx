"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

const navItems = [
  { title: "Home", href: "/" },
  { title: "Cardio", href: "/cardio" },
  { title: "Strength", href: "/strength" },
  { title: "Strength Plate Loaded", href: "/strength-plate-loaded" },
  { title: "Contact", href: "/contact" },
  { title: "About", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl lg:ml-16">
            <Image
              src="/logo.png"
              width={150}
              height={150}
              alt="gymline logo"
            />
          </Link>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[240px] sm:w-[300px]">
            <div className="flex flex-col gap-4 py-4">
              <Link
                href="/"
                className="font-bold text-xl"
                onClick={() => setIsOpen(false)}
              >
                <Image
                  src="/logo.png"
                  width={150}
                  height={150}
                  alt="gymline logo"
                />
              </Link>
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center py-2 text-sm font-medium transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto">
                <Link href={"/contact"} onClick={() => setIsOpen(false)}>
                  {" "}
                  <Button className="w-full">Book Appointment</Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link href={"/contact"}>
            <button className="bg-black hover:bg-white hover:border-2 border-black hover:shadow-2xl hover:text-black  dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
              Book Appointment
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
