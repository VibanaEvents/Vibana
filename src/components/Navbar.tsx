"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/playlist", label: "The Playlist" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const navTextShadow = { textShadow: "0px 2px 8px rgba(0,0,0,0.8)" };

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);

  // On the homepage the navbar is always transparent.
  // On all other pages it is always solid navy.
  const solid = !isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        solid ? "bg-[#002338]" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/logo-white.png"
            alt="Vibana"
            width={1687}
            height={1406}
            className="h-12 w-auto"
            style={navTextShadow}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-10">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`font-[family-name:var(--font-outfit)] text-[22px] font-bold uppercase tracking-wider transition-colors no-underline ${
                  pathname === href
                    ? "text-[#FF924C]"
                    : "text-white hover:text-[#FF924C]"
                }`}
                style={navTextShadow}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          style={navTextShadow}
        >
          <span className="block w-6 h-0.5 bg-current mb-1.5" />
          <span className="block w-6 h-0.5 bg-current mb-1.5" />
          <span className="block w-6 h-0.5 bg-current" />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#002338] border-t border-white/10 px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-5">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block font-[family-name:var(--font-outfit)] text-[22px] font-bold uppercase tracking-wider ${
                    pathname === href ? "text-[#FF924C]" : "text-white"
                  }`}
                  style={navTextShadow}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
