"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }

    return pathname.startsWith(href);
  };

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/6 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-[5%] py-3">
        <Link
          href="/"
          className="flex items-center gap-3 no-underline"
          onClick={closeMenu}
        >
          <Image
            src="/digipaddles-logo.png"
            alt="DigiPaddles logo"
            width={260}
            height={78}
            className="h-12 w-auto"
            priority
          />
        </Link>

        <ul className="hidden list-none items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`rounded-md px-3.5 py-2 text-[13px] font-semibold transition-all duration-200 ${
                  isActive(item.href)
                    ? "bg-black/[0.04] text-[#080808]"
                    : "text-[#6B6B6B] hover:bg-black/[0.04] hover:text-[#080808]"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden rounded-md bg-[#F4511E] px-[22px] py-2.5 text-[12px] font-extrabold uppercase tracking-[0.08em] text-white transition-all duration-200 hover:bg-[#d93e10] lg:inline-flex"
        >
          Get Started
        </Link>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-md text-[#080808] lg:hidden"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {mobileMenuOpen ? (
        <div className="border-t border-black/7 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] lg:hidden">
          <ul className="flex list-none flex-col py-4">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block border-b border-black/[0.06] px-5 py-4 text-base font-bold ${
                    isActive(item.href) ? "text-[#F4511E]" : "text-[#080808]"
                  }`}
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="px-5 pt-4">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-md bg-[#F4511E] px-6 py-3.5 text-[12px] font-extrabold uppercase tracking-[0.08em] text-white transition hover:bg-[#d93e10]"
                onClick={closeMenu}
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
