"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ["About", "Services", "Projects", "News", "Contact"];

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#bfced1] font-[family-name:var(--font-inter)]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          src="/harvey-hero.jpg"
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-[200px] backdrop-blur-[4px]"
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] flex-col px-4 md:px-8">
        <nav className="flex items-center justify-between py-6">
          <span className="text-base font-semibold capitalize tracking-[-0.04em] text-black">
            H.Studio
          </span>
          <ul className="hidden items-center gap-14 text-base font-semibold capitalize tracking-[-0.04em] text-black md:flex">
            {navLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
          <button
            type="button"
            className="hidden rounded-3xl bg-black px-4 py-3 text-sm font-medium tracking-[-0.04em] text-white md:inline-flex"
          >
            Let&rsquo;s talk
          </button>
        </nav>

        <div className="flex flex-1 flex-col justify-end pb-[4px] md:pb-[154px]">
          <div className="flex w-full flex-col items-center">
            <p className="self-center font-[family-name:var(--font-geist-mono)] text-sm uppercase leading-[1.1] text-white/70 md:self-start md:pl-[18px]">
              [ Hello i&rsquo;m ]
            </p>
            <h1
              className="w-full text-center font-medium capitalize tracking-[-0.07em] text-[96px] leading-[0.8] md:whitespace-nowrap md:text-[clamp(72px,13.75vw,198px)] md:leading-[1.1]"
              style={{
                color: "rgba(255, 255, 255, 0.6)",
                mixBlendMode: "overlay",
                textShadow: "0 0 1.5px rgba(255,255,255,0.35)",
                filter: "blur(0.4px)",
              }}
            >
              Harvey&nbsp;&nbsp; Specter
            </h1>
          </div>

          <div className="relative mt-4 flex w-full justify-start md:justify-end">
            <div className="relative flex w-[452px] flex-col items-start gap-4 pl-[100px] md:w-[294px] md:pl-0">
              <p className="text-sm font-bold italic uppercase leading-[1.1] tracking-[-0.04em] text-[#1f1f1f]">
                H.Studio is a{" "}
                <span className="font-normal italic">full-service</span>{" "}
                creative studio creating beautiful digital experiences and
                products. We are an{" "}
                <span className="font-normal italic">award winning</span>{" "}
                desing and art group specializing in branding, web design and
                engineering.
              </p>
              <button
                type="button"
                className="rounded-3xl bg-black px-4 py-3 text-sm font-medium tracking-[-0.04em] text-white"
              >
                Let&rsquo;s talk
              </button>
            </div>
          </div>
        </div>
      </div>

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
    </main>
  );
}
