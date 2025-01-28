"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <nav>
      <div className="min-w-screen mx-auto flex h-16 items-center justify-between bg-[var(--color-background)] px-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/logo.png" // Update with your logo path
              alt="Logo"
              width={1102}
              height={402}
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            aria-label="Main menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menu Texts */}
        <div
          className={clsx("w-full flex-grow md:flex md:w-auto", {
            "block": isMenuOpen,
            "hidden": !isMenuOpen,
          })}
        >
          <div className="mt-2 flex flex-col space-y-2 pb-4 md:ml-auto md:mt-0 md:flex-row md:space-x-8 md:space-y-0 md:pb-0">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.path}
                className={`hover:var(--color-primary) rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isMenuOpen ? "block" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
