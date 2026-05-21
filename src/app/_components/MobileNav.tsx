"use client";

import { useState } from "react";

const navLinks = ["About", "Services", "Projects", "News", "Contact"];

export default function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
        className="fixed right-4 top-6 z-50 flex h-6 w-6 flex-col items-center justify-center gap-1.5 md:hidden"
      >
        <span
          className={`block h-0.5 w-5 bg-black transition-transform ${
            menuOpen ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-5 bg-black transition-opacity ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-5 bg-black transition-transform ${
            menuOpen ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      <div
        className={`fixed inset-0 z-40 flex flex-col bg-[#bfced1] px-4 pt-24 transition-opacity md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-8 text-3xl font-semibold capitalize tracking-[-0.04em] text-black">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="text-left"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="mt-12 self-start rounded-3xl bg-black px-4 py-3 text-sm font-medium tracking-[-0.04em] text-white"
        >
          Let&rsquo;s talk
        </button>
      </div>
    </>
  );
}
