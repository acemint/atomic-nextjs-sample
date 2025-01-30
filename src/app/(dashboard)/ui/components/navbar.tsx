"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { title: "About", path: "/" },
    { title: "Services", path: "/" },
    { title: "Contact", path: "/" },
  ];

  return (
    <nav className="min-w-full bg-[var(--color-background)]">
      <div className="flex h-16 items-center justify-between px-4 py-2">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={"inline-flex rounded-full p-2 active:bg-gray-200 md:hidden"}
          aria-label="Main menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Logo */}
        <div className="flex-shrink-0 md:mx-0">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={1102} height={402} className="h-8 w-auto md:h-12" />
          </Link>
        </div>

        {/* Menu Texts */}
        <div className="hidden space-x-8 md:flex md:flex-row">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.path}
              className="nav-text transition hover:border-b-2 hover:border-b-[var(--color-accent)]"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu Links */}
      {/* Menu Texts */}
      <div
        className={clsx(
          "bg-[var(--color-primary) absolute flex h-screen w-full flex-col space-y-1 border-b-[1px] border-b-[var(--color-accent)] bg-white px-2 pb-3 pt-2 md:hidden",
          {
            "hidden": !isMenuOpen,
          },
        )}
      >
        {navLinks.map((link) => (
          <Link key={link.title} href={link.path} className="nav-text-mobile text-center">
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
