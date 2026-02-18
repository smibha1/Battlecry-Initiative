import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/about", label: "About" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/events", label: "Events" },
  { href: "/shop", label: "Shop" },
  { href: "/donate", label: "Donate" },
];

export function Footer() {
  return (
    <footer className="border-t border-grit-600 bg-grit-900 grunge-bg">
      <div className="max-section section-padding">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-bw.png"
              alt=""
              width={80}
              height={80}
              className="h-12 w-12 shrink-0 md:h-14 md:w-14"
              style={{ objectFit: "contain" }}
            />
            <p className="font-body text-sm text-grit-400">
              <span className="block font-display text-cream">BATTLECRY INITIATIVE</span>
              Jiu Jitsu for Veterans, Women & Youth
            </p>
          </div>
          <nav className="flex flex-wrap gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm uppercase tracking-wider text-grit-400 transition hover:text-rust-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 flex flex-col gap-4 border-t border-grit-600 pt-8 md:flex-row md:items-center md:justify-between">
          <a
            href="mailto:info@battlecryinitiative.com"
            className="font-body text-sm text-grit-400 transition hover:text-rust-300"
          >
            info@battlecryinitiative.com
          </a>
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/battlecry_initiative/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-body text-sm text-grit-400 transition hover:text-rust-300"
              aria-label="Instagram"
            >
              <Image
                src="/images/instagram.png"
                alt=""
                width={20}
                height={20}
                className="h-5 w-5 shrink-0"
              />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
