"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Men", href: "#" },
  { label: "Women", href: "#" },
  { label: "Kids", href: "#" },
  { label: "Collections", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-light-100/90 backdrop-blur supports-[backdrop-filter]:bg-light-100/80 border-b border-light-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="#" aria-label="Home" className="shrink-0 flex items-center gap-2">
            <Image src="/logo.svg" alt="Nike" width={36} height={36} priority className="invert" />
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-dark-900 text-body-medium hover:opacity-80 transition-opacity"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-8">
            <button className="text-dark-900 text-body-medium hover:opacity-80 transition-opacity" aria-label="Search">
              Search
            </button>
            <button className="text-dark-900 text-body-medium hover:opacity-80 transition-opacity" aria-label="Open cart">
              My Cart (2)
            </button>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-dark-900 hover:bg-light-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-dark-900"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle navigation</span>
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`${open ? "block" : "hidden"} md:hidden border-t border-light-300`}>
        <div className="space-y-1 px-4 py-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block rounded px-3 py-2 text-dark-900 text-body-medium hover:bg-light-200"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 flex items-center gap-6 px-3">
            <button className="text-dark-900 text-body-medium">Search</button>
            <button className="text-dark-900 text-body-medium">My Cart (2)</button>
          </div>
        </div>
      </div>
    </header>
  );
}
