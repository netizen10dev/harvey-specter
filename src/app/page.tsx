"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ["About", "Services", "Projects", "News", "Contact"];

  return (
    <main className="relative w-full overflow-x-hidden bg-[#bfced1] font-[family-name:var(--font-inter)]">
      <section className="relative min-h-screen w-full overflow-hidden bg-[#bfced1]">
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
      </section>

      <section className="relative w-full bg-white px-4 py-12 md:px-8 md:py-[120px]">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-6">
          <div className="flex w-full flex-col items-end gap-3">
            <p className="w-full text-right font-[family-name:var(--font-geist-mono)] text-sm uppercase leading-[1.1] text-[#1f1f1f]">
              [ 8+ years in industry ]
            </p>
            <div className="h-px w-full bg-black" />
          </div>

          <div className="flex w-full flex-col items-center gap-3 font-light uppercase tracking-[-0.08em] leading-[0.84] text-[32px] text-black md:items-start md:gap-2 md:text-[clamp(48px,6.667vw,96px)]">
            <p className="font-[family-name:var(--font-geist-mono)] text-sm font-normal normal-case tracking-normal leading-[1.1] text-[#1f1f1f] md:hidden">
              001
            </p>

            <div className="flex items-start gap-3 whitespace-nowrap">
              <span>A creative director&nbsp;&nbsp; /</span>
              <span className="hidden font-[family-name:var(--font-geist-mono)] text-sm font-normal normal-case tracking-normal leading-[1.1] text-[#1f1f1f] md:inline">
                001
              </span>
            </div>

            <div className="whitespace-nowrap md:pl-[14.86vw]">
              Photographer
            </div>

            <div className="whitespace-nowrap md:pl-[42.36vw]">
              Born{" "}
              <span className="font-[family-name:var(--font-playfair)] font-normal italic">
                &amp;
              </span>{" "}
              raised
            </div>

            <div className="whitespace-nowrap">on the south side</div>

            <div className="flex items-start gap-6 whitespace-nowrap md:gap-12 md:pl-[42.08vw]">
              <span>of chicago.</span>
              <span className="hidden self-start font-[family-name:var(--font-geist-mono)] text-sm font-normal normal-case tracking-normal leading-[1.1] text-[#1f1f1f] md:inline">
                [ creative freelancer ]
              </span>
            </div>

            <p className="font-[family-name:var(--font-geist-mono)] text-sm font-normal normal-case tracking-normal leading-[1.1] text-[#1f1f1f] md:hidden">
              [ creative freelancer ]
            </p>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-white px-4 py-12 md:px-8 md:py-[80px]">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between md:gap-8">
            <p className="font-[family-name:var(--font-geist-mono)] text-sm font-normal uppercase leading-[1.1] text-[#1f1f1f] md:hidden">
              002
            </p>
            <p className="font-[family-name:var(--font-geist-mono)] text-sm font-normal uppercase leading-[1.1] text-[#1f1f1f] md:whitespace-nowrap">
              [ About ]
            </p>

            <div className="flex flex-col gap-5 md:w-[983px] md:flex-row md:items-end md:gap-8">
              <div className="flex flex-1 items-stretch gap-3">
                <div className="flex w-6 flex-col items-start justify-between">
                  <span className="block h-4 w-4 border-l border-t border-[#1f1f1f]" />
                  <span className="block h-4 w-4 border-b border-l border-[#1f1f1f]" />
                </div>
                <div className="flex flex-1 items-center py-3">
                  <p className="font-[family-name:var(--font-inter)] text-[14px] font-normal leading-[1.3] tracking-[-0.04em] text-[#1f1f1f]">
                    Placeholder paragraph one. This is where you introduce
                    yourself &mdash; your background, your passion for your
                    craft, and what drives you creatively. Two to three
                    sentences work best here. Placeholder paragraph two. Here
                    you can describe your technical approach, how you
                    collaborate with clients, or what sets your work apart from
                    others in your field.
                  </p>
                </div>
                <div className="flex w-6 flex-col items-end justify-between">
                  <span className="block h-4 w-4 border-r border-t border-[#1f1f1f]" />
                  <span className="block h-4 w-4 border-b border-r border-[#1f1f1f]" />
                </div>
              </div>

              <div className="flex flex-col items-start gap-6 md:flex-row">
                <p className="hidden font-[family-name:var(--font-geist-mono)] text-sm font-normal uppercase leading-[1.1] text-[#1f1f1f] md:block">
                  002
                </p>
                <div className="aspect-[422/594] w-full overflow-hidden md:h-[614px] md:w-[436px] md:aspect-auto">
                  <img
                    src="/about-portrait.jpg"
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-white">
        <div className="aspect-[375/614] w-full overflow-hidden md:aspect-[1440/640]">
          <img
            src="/photographer.jpg"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
      </section>

      <section className="relative w-full bg-black px-4 py-12 text-white md:px-8 md:py-[80px]">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 md:gap-12">
          <p className="font-[family-name:var(--font-geist-mono)] text-sm font-normal uppercase leading-[1.1] text-white">
            [ services ]
          </p>

          <div className="flex w-full items-center justify-between whitespace-nowrap font-light uppercase tracking-[-0.08em] leading-none text-[32px] md:text-[clamp(48px,6.667vw,96px)]">
            <span>[4]</span>
            <span>Deliverables</span>
          </div>

          <div className="flex flex-col gap-12">
            {[
              { title: "Brand Discovery", image: "/service-brand.jpg" },
              { title: "Web design & Dev", image: "/service-web.jpg" },
              { title: "Marketing", image: "/service-marketing.jpg" },
              { title: "Photography", image: "/service-photography.jpg" },
            ].map((item, i) => (
              <div key={item.title} className="flex flex-col gap-3">
                <p className="font-[family-name:var(--font-geist-mono)] text-sm font-normal uppercase leading-[1.1] text-white">
                  [ {i + 1} ]
                </p>
                <div className="h-px w-full bg-white" />

                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-8">
                  <h3 className="whitespace-nowrap font-bold italic uppercase tracking-[-0.04em] leading-[1.1] text-[36px]">
                    {item.title}
                  </h3>

                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
                    <p className="font-[family-name:var(--font-inter)] text-[14px] font-normal leading-[1.3] tracking-[-0.04em] text-white md:w-[393px]">
                      Placeholder description of this service. Explain the
                      value you provide and the outcomes clients can expect.
                      Keep it to two or three sentences.
                    </p>
                    <div className="h-[151px] w-[151px] shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
