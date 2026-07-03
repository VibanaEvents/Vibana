import Link from "next/link";
import Image from "next/image";
import SocialLinks from "./SocialLinks";

const navLinks = [
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#002338] text-white px-4 pt-14 pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-xs">
            <Image
              src="/logo-white.png"
              alt="Vibana"
              width={1687}
              height={1406}
              className="w-28 h-auto"
            />
            <p className="text-sm text-white/60 leading-relaxed">
              Afrobeats Music Events in the Netherlands, bringing people together through music, movement and accessibility.
            </p>
            <SocialLinks iconClassName="text-white/70 hover:text-white" />
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
              Navigation
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/70 hover:text-[#FF924C] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
              Get in Touch
            </p>
            <p className="text-sm text-white/70">vibanawrld@outlook.com</p>
            <p className="text-sm text-white/70 mt-1">Utrecht, Netherlands</p>
          </div>
        </div>

        <p className="text-xs text-white/30 text-center mt-8">
          © {new Date().getFullYear()} Vibana. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
