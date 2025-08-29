import React from "react";

import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    title: "Featured",
    links: ["Air Force 1", "Huarache", "Air Max 90", "Air Max 95"],
  },
  {
    title: "Shoes",
    links: ["All Shoes", "Custom Shoes", "Jordan Shoes", "Running Shoes"],
  },
  {
    title: "Clothing",
    links: ["All Clothing", "Modest Wear", "Hoodies & Pullovers", "Shirts & Tops"],
  },
  {
    title: "Kids'",
    links: ["Infant & Toddler Shoes", "Kids' Shoes", "Kids' Jordan Shoes", "Kids' Basketball Shoes"],
  },
];

const socials = [
  { alt: "X", src: "/x.svg", href: "#" },
  { alt: "Facebook", src: "/facebook.svg", href: "#" },
  { alt: "Instagram", src: "/instagram.svg", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-light-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="flex items-start">
            <Image src="/logo.svg" alt="Nike" width={56} height={56} className="invert" />
          </div>

          {sections.map((s) => (
            <nav key={s.title} aria-label={s.title}>
              <h4 className="text-heading-3">{s.title}</h4>
              <ul className="mt-4 space-y-3">
                {s.links.map((l) => (
                  <li key={l}>
                    <Link href="#" className="text-dark-500 hover:text-light-100 text-body transition-colors">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="hidden lg:flex items-start justify-end gap-4">
            {socials.map((s) => (
              <Link
                key={s.alt}
                href={s.href}
                aria-label={s.alt}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-light-100 text-dark-900 hover:opacity-80 transition"
              >
                <Image src={s.src} alt={s.alt} width={20} height={20} />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-dark-500 text-footnote">
            <span className="inline-flex items-center gap-2">
              <Image src="/globe.svg" alt="" width={16} height={16} />
              Croatia
            </span>
            <span>© 2025 Nike, Inc. All Rights Reserved</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-dark-500 text-footnote">
            <Link href="#" className="hover:text-light-100">Guides</Link>
            <Link href="#" className="hover:text-light-100">Terms of Sale</Link>
            <Link href="#" className="hover:text-light-100">Terms of Use</Link>
            <Link href="#" className="hover:text-light-100">Nike Privacy Policy</Link>
          </div>

          <div className="lg:hidden flex items-center gap-4 self-start">
            {socials.map((s) => (
              <Link
                key={s.alt}
                href={s.href}
                aria-label={s.alt}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-light-100 text-dark-900 hover:opacity-80 transition"
              >
                <Image src={s.src} alt={s.alt} width={20} height={20} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
