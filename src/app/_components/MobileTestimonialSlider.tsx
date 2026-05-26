"use client";

import { useState } from "react";

type TestimonialItem = {
  _id: string;
  author: string;
  quote: string;
  logoUrl: string;
  logoClass: string;
};

const MOBILE_ROTATIONS = ["-3.5deg", "2deg", "2.9deg", "2.23deg"];

function TestimonialCard({
  logo,
  logoClass = "h-5",
  quote,
  author,
}: {
  logo: string;
  logoClass?: string;
  quote: string;
  author: string;
}) {
  return (
    <div className="flex w-[260px] shrink-0 flex-col items-start gap-4 rounded-[6px] border border-solid border-black/5 bg-[#f5f4f0] p-6 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.18),0_4px_12px_-2px_rgba(0,0,0,0.08)]">
      <img src={logo} alt="" className={`${logoClass} w-auto object-contain opacity-40`} />
      <p className="font-[family-name:var(--font-inter)] text-[18px] font-normal leading-[1.3] tracking-[-0.04em] text-[#1f1f1f]">
        {quote}
      </p>
      <p className="font-[family-name:var(--font-inter)] text-[16px] font-black uppercase leading-[1.1] tracking-[-0.04em] text-black">
        {author}
      </p>
    </div>
  );
}

export default function MobileTestimonialSlider({
  testimonials,
}: {
  testimonials: TestimonialItem[];
}) {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  if (!t) return null;

  return (
    <div className="mt-8 flex flex-col items-center gap-6 md:hidden">
      <div
        style={{ transform: `rotate(${MOBILE_ROTATIONS[current] ?? "0deg"})` }}
      >
        <TestimonialCard
          logo={t.logoUrl}
          logoClass={t.logoClass}
          quote={t.quote}
          author={t.author}
        />
      </div>

      <div className="flex items-center gap-3">
        {testimonials.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show testimonial ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`h-2 w-2 rounded-full transition-all duration-200 ${
              i === current ? "bg-black" : "bg-black/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
