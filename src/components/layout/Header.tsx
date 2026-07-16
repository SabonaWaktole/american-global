"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/data/content";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-300/25 bg-mist-pale/85 backdrop-blur-2xl">
      <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between px-5 sm:px-10 md:px-14 lg:px-20">
        <Link href="/" className="relative z-50 shrink-0">
          <Image
            src="/images/logo.png"
            alt="American Global Partner"
            width={160}
            height={48}
            className="h-7 w-auto md:h-8"
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-8" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-ink-muted transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="#contact"
            className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Become a Partner
          </Link>
        </div>

        <button
          type="button"
          className="relative z-50 p-1.5 text-ink md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X size={22} strokeWidth={1.5} />
          ) : (
            <Menu size={22} strokeWidth={1.5} />
          )}
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-fade-8/95 backdrop-blur-sm transition-opacity duration-200 md:hidden",
          isMobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        <nav
          className="flex h-full flex-col items-center justify-center gap-6"
          aria-label="Mobile navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-2xl font-semibold text-ink"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="mt-2 rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Become a Partner
          </Link>
        </nav>
      </div>
    </header>
  );
}
