"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ServicesHero() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const root = wrapperRef.current;
    if (!root) return;

    const bg     = root.querySelector<HTMLElement>("[data-svc-bg]");
    const splitL = root.querySelector<HTMLElement>("[data-svc-split-l]");
    const splitR = root.querySelector<HTMLElement>("[data-svc-split-r]");
    const lines  = root.querySelectorAll<HTMLElement>("[data-svc-line]");
    const label  = root.querySelector<HTMLElement>("[data-svc-label]");

    // Entrance: staggered slide-up
    gsap.set([label, ...Array.from(lines)], { opacity: 0, y: 70 });
    gsap.to([label, ...Array.from(lines)], {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.14,
      delay: 0.2,
    });

    // Scroll parallax: bg zooms, text splits
    const triggers: ScrollTrigger[] = [];
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: root,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    tl.to(bg,     { scale: 1.18, ease: "none" }, 0)
      .to(splitL, { x: "-30vw",  ease: "none" }, 0)
      .to(splitR, { x: "30vw",   ease: "none" }, 0);

    if (tl.scrollTrigger) triggers.push(tl.scrollTrigger);
    return () => triggers.forEach((t) => t.kill());
  }, []);

  return (
    <div
      ref={wrapperRef}
      data-dark-section
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <img
          data-svc-bg=""
          src="/harvey-hero.jpg"
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Bottom blur fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-[200px] backdrop-blur-[16px] md:h-[310px] md:backdrop-blur-[20px]"
        style={{
          maskImage: "linear-gradient(to bottom, transparent, black)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col justify-end px-4 pb-12 md:px-8 md:pb-[100px]">
        <p
          data-svc-label=""
          className="mb-4 font-[family-name:var(--font-geist-mono)] text-sm uppercase leading-[1.1] text-white/70"
        >
          [ Creative Studio ]
        </p>
        <h1 className="font-medium capitalize tracking-[-0.07em] leading-[0.88] text-white text-[clamp(56px,10vw,148px)]">
          <span data-svc-line="" data-svc-split-l="" className="block">Turning</span>
          <span data-svc-line="" className="block pl-[clamp(40px,8vw,120px)]">ideas into</span>
          <span data-svc-line="" data-svc-split-r="" className="block pl-[clamp(80px,16vw,240px)]">impact.</span>
        </h1>
      </div>
    </div>
  );
}
