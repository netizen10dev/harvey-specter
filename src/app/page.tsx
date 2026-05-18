"use client";

import { useState } from "react";

function PortfolioTile({
  title,
  image,
  heightClass,
  className = "",
}: {
  title: string;
  image: string;
  heightClass: string;
  className?: string;
}) {
  const pillClass =
    "rounded-3xl px-2 py-1 text-[14px] font-medium tracking-[-0.04em] text-[#111] backdrop-blur-[10px]";
  const pillStyle = { backgroundColor: "rgba(255, 255, 255, 0.3)" };

  return (
    <div className={`flex flex-col gap-2.5 ${className}`}>
      <div
        className={`relative flex flex-col items-start justify-end overflow-hidden pb-4 pl-4 ${heightClass}`}
      >
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="relative z-10 flex gap-3">
          <span className={pillClass} style={pillStyle}>
            Social Media
          </span>
          <span className={pillClass} style={pillStyle}>
            Photography
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="whitespace-nowrap font-black uppercase tracking-[-0.04em] leading-[1.1] text-black text-[24px] md:text-[36px]">
          {title}
        </h3>
        <svg
          viewBox="0 0 24 24"
          className="h-8 w-8 shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 17L17 7 M9 7H17V15" />
        </svg>
      </div>
    </div>
  );
}

function NewsCard({
  image,
  topPad = false,
}: {
  image: string;
  topPad?: boolean;
}) {
  return (
    <div
      className={`flex w-[300px] shrink-0 flex-col gap-4 md:w-[353px] ${
        topPad ? "md:pt-[120px]" : ""
      }`}
    >
      <div className="h-[398px] w-full overflow-hidden md:h-[469px]">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>
      <p className="font-[family-name:var(--font-inter)] text-[14px] font-normal leading-[1.3] tracking-[-0.04em] text-[#1f1f1f]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <button
        type="button"
        className="inline-flex w-fit items-center gap-2.5 border-b border-black py-1 text-[14px] font-medium tracking-[-0.04em] text-black"
      >
        Read more
        <svg
          viewBox="0 0 24 24"
          className="h-[18px] w-[18px]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 17L17 7 M9 7H17V15" />
        </svg>
      </button>
    </div>
  );
}

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
    <div className="flex w-[260px] shrink-0 flex-col items-start gap-4 rounded-[4px] border border-solid border-[#ddd] bg-[#f1f1f1] p-6 md:w-[353px]">
      <img src={logo} alt="" className={`${logoClass} w-auto object-contain`} />
      <p className="font-[family-name:var(--font-inter)] text-[18px] font-normal leading-[1.3] tracking-[-0.04em] text-[#1f1f1f]">
        {quote}
      </p>
      <p className="font-[family-name:var(--font-inter)] text-[16px] font-black uppercase leading-[1.1] tracking-[-0.04em] text-black">
        {author}
      </p>
    </div>
  );
}

function PortfolioCTA() {
  return (
    <div className="flex w-full items-stretch justify-center gap-3 md:max-w-[465px]">
      <div className="flex w-6 flex-col items-start justify-between py-1">
        <span className="block h-4 w-4 border-l border-t border-[#1f1f1f]" />
        <span className="block h-4 w-4 border-b border-l border-[#1f1f1f]" />
      </div>
      <div className="flex flex-1 flex-col items-start gap-2.5 py-3">
        <p className="font-[family-name:var(--font-inter)] text-[14px] font-normal italic leading-[1.3] tracking-[-0.04em] text-[#1f1f1f]">
          Discover how my creativity transforms ideas into impactful digital
          experiences &mdash; schedule a call with me to get started.
        </p>
        <button
          type="button"
          className="rounded-3xl bg-black px-4 py-3 text-sm font-medium tracking-[-0.04em] text-white"
        >
          Let&rsquo;s talk
        </button>
      </div>
      <div className="flex w-6 flex-col items-end justify-between py-1">
        <span className="block h-4 w-4 border-r border-t border-[#1f1f1f]" />
        <span className="block h-4 w-4 border-b border-r border-[#1f1f1f]" />
      </div>
    </div>
  );
}

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
              <span className="hidden self-start font-[family-name:var(--font-geist-mono)] text-sm font-normal normal-case tracking-normal leading-[1.1] text-[#1f1f1f] md:-ml-[110px] md:mt-[30px] md:inline">
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
        <div className="aspect-[375/614] w-full overflow-hidden md:aspect-[1226/767]">
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

      <section className="relative w-full bg-white px-4 py-12 md:px-8 md:py-[80px]">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 md:gap-[61px]">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="font-[family-name:var(--font-geist-mono)] text-sm font-normal uppercase leading-[1.1] text-[#1f1f1f] md:hidden">
              [ portfolio ]
            </p>

            <div className="flex w-full items-start justify-between whitespace-nowrap uppercase md:w-auto md:justify-start md:gap-2.5">
              <h2 className="font-light tracking-[-0.08em] leading-[0.86] text-black text-[32px] md:text-[clamp(48px,6.667vw,96px)]">
                <span className="block">Selected</span>
                <span className="block">Work</span>
              </h2>
              <p className="font-[family-name:var(--font-geist-mono)] text-sm font-normal leading-[1.1] text-[#1f1f1f]">
                004
              </p>
            </div>

            <div className="hidden h-[110px] items-center justify-center md:flex">
              <p
                className="whitespace-nowrap font-[family-name:var(--font-geist-mono)] text-sm font-normal uppercase leading-[1.1] text-[#1f1f1f]"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                }}
              >
                [ portfolio ]
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-end">
            <div className="flex flex-col gap-6">
              <PortfolioTile
                title="Surfers paradise"
                image="/work-surfers.jpg"
                heightClass="h-[390px] md:h-[744px]"
                className="md:mb-[50px]"
              />
              <PortfolioTile
                title="Cyberpunk caffe"
                image="/work-cyberpunk.jpg"
                heightClass="h-[390px] md:h-[699px]"
              />
              <div className="hidden md:mt-[50px] md:block">
                <PortfolioCTA />
              </div>
            </div>
            <div className="flex flex-col gap-6 md:pt-[240px]">
              <PortfolioTile
                title="Agency 976"
                image="/work-agency.jpg"
                heightClass="h-[390px] md:h-[699px]"
                className="md:mb-[50px]"
              />
              <PortfolioTile
                title="Minimal Playground"
                image="/work-minimal.jpg"
                heightClass="h-[390px] md:h-[744px]"
              />
            </div>
          </div>

          <div className="md:hidden">
            <PortfolioCTA />
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden bg-white px-4 py-16 md:px-8 md:py-[120px]">
        <div className="relative mx-auto w-full max-w-[1440px]">
          <h2 className="text-center font-medium capitalize tracking-[-0.07em] text-black text-[64px] leading-[0.8] md:text-[clamp(80px,13.75vw,198px)] md:leading-[1.1]">
            Testimonials
          </h2>

          <div className="mt-8 -mx-4 flex gap-2 overflow-x-auto pb-4 px-4 md:hidden">
            <div className="shrink-0" style={{ transform: "rotate(-3.5deg)" }}>
              <TestimonialCard
                logo="/logo-marko.png"
                logoClass="h-[19px]"
                quote="A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive."
                author="Marko Stojković"
              />
            </div>
            <div className="shrink-0" style={{ transform: "rotate(2deg)" }}>
              <TestimonialCard
                logo="/logo-sofia.png"
                logoClass="h-9"
                quote="An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats."
                author="Sofia Martínez"
              />
            </div>
            <div className="shrink-0" style={{ transform: "rotate(2.9deg)" }}>
              <TestimonialCard
                logo="/logo-lukas.png"
                logoClass="h-[19px]"
                quote="Professional, precise, and incredibly fast at handling complex product visualizations and templates."
                author="Lukas Weber"
              />
            </div>
            <div className="shrink-0" style={{ transform: "rotate(2.23deg)" }}>
              <TestimonialCard
                logo="/logo-sarah.png"
                logoClass="h-[31px]"
                quote="A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity."
                author="Sarah Jenkins"
              />
            </div>
          </div>

          <div className="hidden md:block">
            <div
              className="absolute"
              style={{
                left: "7.08%",
                top: "142px",
                transform: "rotate(-6.85deg)",
              }}
            >
              <TestimonialCard
                logo="/logo-marko.png"
                logoClass="h-[19px]"
                quote="A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive."
                author="Marko Stojković"
              />
            </div>
            <div
              className="absolute"
              style={{
                left: "46.94%",
                top: "272px",
                transform: "rotate(2.9deg)",
              }}
            >
              <TestimonialCard
                logo="/logo-lukas.png"
                logoClass="h-[19px]"
                quote="Professional, precise, and incredibly fast at handling complex product visualizations and templates."
                author="Lukas Weber"
              />
            </div>
            <div
              className="absolute"
              style={{
                left: "21.18%",
                top: "553px",
                transform: "rotate(2.23deg)",
              }}
            >
              <TestimonialCard
                logo="/logo-sarah.png"
                logoClass="h-[31px]"
                quote="A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity."
                author="Sarah Jenkins"
              />
            </div>
            <div
              className="absolute"
              style={{
                left: "68.54%",
                top: "546px",
                transform: "rotate(-4.15deg)",
              }}
            >
              <TestimonialCard
                logo="/logo-sofia.png"
                logoClass="h-9"
                quote="An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats."
                author="Sofia Martínez"
              />
            </div>
            <div className="h-[900px]" aria-hidden />
          </div>
        </div>
      </section>

      <section className="relative w-full bg-[#f3f3f3] px-4 py-16 md:px-8 md:py-[120px]">
        <div className="mx-auto w-full max-w-[1440px]">
          <h2 className="font-light uppercase tracking-[-0.08em] leading-[0.86] text-black text-[32px] md:hidden">
            Keep up with my latest news &amp; achievements
          </h2>

          <div className="mt-8 flex flex-col md:mt-0 md:flex-row md:items-end md:gap-8">
            <div className="hidden h-[706px] w-[110px] shrink-0 items-center justify-center md:flex">
              <div
                className="flex flex-col whitespace-nowrap font-light uppercase tracking-[-0.08em] leading-[0.86] text-black text-[64px]"
                style={{ transform: "rotate(-90deg)" }}
              >
                <p className="leading-[0.86]">Keep up with my latest</p>
                <p className="leading-[0.86]">news &amp; achievements</p>
              </div>
            </div>

            <div className="-mx-4 flex gap-4 overflow-x-auto px-4 md:mx-0 md:w-[1020px] md:items-start md:gap-[31px] md:overflow-visible md:px-0">
              <NewsCard image="/news-1.jpg" />
              <div className="hidden w-px self-stretch bg-black/30 md:block" />
              <NewsCard image="/news-2.jpg" topPad />
              <div className="hidden w-px self-stretch bg-black/30 md:block" />
              <NewsCard image="/news-3.jpg" />
            </div>
          </div>
        </div>
      </section>

      <footer className="relative w-full overflow-hidden bg-black px-4 pt-12 text-white md:px-8">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 md:gap-[120px]">
          <div className="flex flex-col gap-6 md:gap-12">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-8">
              <div className="flex w-[298px] flex-col items-start gap-3">
                <p className="text-[24px] font-light italic uppercase tracking-[-0.04em] leading-[1.1] text-white">
                  Have a{" "}
                  <span className="font-black not-italic">project</span> in
                  mind?
                </p>
                <button
                  type="button"
                  className="rounded-3xl border border-solid border-white px-4 py-3 text-sm font-medium tracking-[-0.04em] text-white"
                >
                  Let&rsquo;s talk
                </button>
              </div>

              <div className="flex flex-col gap-1 text-[18px] uppercase tracking-[-0.04em] leading-[1.1] text-white md:w-[298px] md:items-center md:text-center">
                <p>Facebook</p>
                <p>Instagram</p>
              </div>

              <div className="flex flex-col gap-1 text-[18px] uppercase tracking-[-0.04em] leading-[1.1] text-white md:w-[298px] md:items-end md:text-right">
                <p>x.com</p>
                <p>Linkedin</p>
              </div>
            </div>
            <div className="h-px w-full bg-white" />
          </div>

          <div className="hidden md:flex md:items-end md:justify-between">
            <div className="relative h-[219px] w-[1093px] overflow-hidden">
              <div
                className="absolute left-0 top-1/2 flex h-[160px] w-[15px] -translate-y-1/2 items-center justify-center"
                style={{ top: "calc(50% - 75.5px)" }}
              >
                <div style={{ transform: "rotate(-90deg)" }}>
                  <p className="whitespace-nowrap font-[family-name:var(--font-geist-mono)] text-sm font-normal uppercase leading-[1.1] text-white">
                    [ Coded By Claude ]
                  </p>
                </div>
              </div>
              <p className="absolute left-0 top-1/2 -translate-y-1/2 whitespace-nowrap font-semibold capitalize text-white text-[290px] leading-[0.8] tracking-[-0.06em]">
                H.Studio
              </p>
            </div>
            <div className="flex gap-[34px] pb-8 text-[12px] font-normal uppercase leading-[1.1] tracking-[-0.04em] text-white">
              <a href="#" className="underline">
                licences
              </a>
              <a href="#" className="underline">
                Privacy policy
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 md:hidden">
            <div className="flex gap-[34px] pb-8 text-[12px] font-normal uppercase leading-[1.1] tracking-[-0.04em] text-white">
              <a href="#" className="underline">
                licences
              </a>
              <a href="#" className="underline">
                Privacy policy
              </a>
            </div>
            <div className="flex w-full flex-col items-start gap-3 overflow-hidden">
              <p className="font-[family-name:var(--font-geist-mono)] text-[10px] font-normal uppercase leading-[1.1] text-white">
                [ Coded By Claude ]
              </p>
              <p className="whitespace-nowrap font-semibold capitalize text-white text-[91px] leading-[0.8] tracking-[-0.06em]">
                H.Studio
              </p>
            </div>
          </div>
        </div>
      </footer>

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
