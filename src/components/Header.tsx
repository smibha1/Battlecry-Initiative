"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/events", label: "Events" },
  { href: "/shop", label: "Shop" },
  { href: "/donate", label: "Donate" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  return (
    <header className="header-grunge sticky top-0 z-50 border-b border-grit-700 bg-grit-950 shadow-[0_2px_0_0_rgba(0,0,0,0.3)] grunge-bg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 md:py-3">
        <Link href="/" className="flex items-center gap-3">
          {!logoError ? (
            <div className="flex h-14 shrink-0 items-center overflow-hidden md:h-16 lg:h-20 [&_img]:h-full [&_img]:w-auto [&_img]:object-contain [&_img]:object-center">
              <Image
                src="/images/logo-black.png"
                alt="Battlecry Initiative"
                width={280}
                height={80}
                className="h-full w-auto"
                style={{ objectFit: "contain" }}
                onError={() => setLogoError(true)}
                priority
              />
            </div>
          ) : (
            <span className="font-display text-lg tracking-wider text-cream md:text-xl">
              BATTLECRY INITIATIVE™
            </span>
          )}
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-xs font-medium uppercase tracking-wider text-grit-400 transition hover:text-cream"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block h-0.5 w-6 bg-grit-400 transition ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-grit-400 transition ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-grit-400 transition ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="border-t border-grit-700 bg-grit-900 px-4 py-3 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm uppercase tracking-wider text-grit-300"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
