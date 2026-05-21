import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import MobileNav from "./_components/MobileNav";

// GROQ queries
const SERVICES_QUERY = `*[_type == "service"] | order(order asc) { _id, title, description, image }`;
const PROJECTS_QUERY = `*[_type == "portfolioProject"] | order(order asc)[0...4] { _id, title, image, tags }`;
const TESTIMONIALS_QUERY = `*[_type == "testimonial"] | order(order asc)[0...4] { _id, author, quote, logo }`;
const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc)[0...3] { _id, title, excerpt, mainImage }`;

// Normalized types
type ServiceItem = { _id: string; title: string; description: string; imageUrl: string };
type ProjectItem = { _id: string; title: string; imageUrl: string; tags: string[] };
type TestimonialItem = { _id: string; author: string; quote: string; logoUrl: string; logoClass: string };
type PostItem = { _id: string; imageUrl: string; excerpt: string };

// Fallback content so the site looks correct before Sanity content is added
const FB_SERVICES: ServiceItem[] = [
  { _id: "s1", title: "Brand Discovery", description: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.", imageUrl: "/service-brand.jpg" },
  { _id: "s2", title: "Web design & Dev", description: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.", imageUrl: "/service-web.jpg" },
  { _id: "s3", title: "Marketing", description: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.", imageUrl: "/service-marketing.jpg" },
  { _id: "s4", title: "Photography", description: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.", imageUrl: "/service-photography.jpg" },
];

const FB_PROJECTS: ProjectItem[] = [
  { _id: "p1", title: "Surfers paradise", imageUrl: "/work-surfers.jpg", tags: ["Social Media", "Photography"] },
  { _id: "p2", title: "Cyberpunk caffe", imageUrl: "/work-cyberpunk.jpg", tags: ["Social Media", "Photography"] },
  { _id: "p3", title: "Agency 976", imageUrl: "/work-agency.jpg", tags: ["Social Media", "Photography"] },
  { _id: "p4", title: "Minimal Playground", imageUrl: "/work-minimal.jpg", tags: ["Social Media", "Photography"] },
];

const FB_TESTIMONIALS: TestimonialItem[] = [
  { _id: "t1", author: "Marko Stojković", quote: "A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.", logoUrl: "/logo-marko.svg", logoClass: "h-[19px]" },
  { _id: "t2", author: "Sofia Martínez", quote: "An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.", logoUrl: "/logo-sofia.svg", logoClass: "h-9" },
  { _id: "t3", author: "Lukas Weber", quote: "Professional, precise, and incredibly fast at handling complex product visualizations and templates.", logoUrl: "/logo-lukas.svg", logoClass: "h-[19px]" },
  { _id: "t4", author: "Sarah Jenkins", quote: "A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity.", logoUrl: "/logo-sarah.svg", logoClass: "h-[31px]" },
];

const FB_POSTS: PostItem[] = [
  { _id: "n1", imageUrl: "/news-1.jpg", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { _id: "n2", imageUrl: "/news-2.jpg", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { _id: "n3", imageUrl: "/news-3.jpg", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
];

// Desktop testimonial card layout positions
const TESTIMONIAL_POSITIONS = [
  { left: "0px", top: "22px", rotate: "-6.85deg", zIndex: 0 },
  { left: "574px", top: "152px", rotate: "2.9deg", zIndex: -1 },
  { left: "203px", top: "433px", rotate: "2.23deg", zIndex: 0 },
  { left: "885px", top: "426px", rotate: "-4.15deg", zIndex: 0 },
];

const MOBILE_ROTATIONS = ["-3.5deg", "2deg", "2.9deg", "2.23deg"];

// ---- Sub-components ----

function PortfolioTile({
  title,
  image,
  tags,
  heightClass,
  className = "",
}: {
  title: string;
  image: string;
  tags: string[];
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
        {tags.length > 0 && (
          <div className="relative z-10 flex gap-3">
            {tags.map((tag) => (
              <span key={tag} className={pillClass} style={pillStyle}>
                {tag}
              </span>
            ))}
          </div>
        )}
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
  excerpt,
  topPad = false,
}: {
  image: string;
  excerpt: string;
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
        {excerpt}
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
    <div className="flex w-[260px] shrink-0 flex-col items-start gap-4 rounded-[6px] border border-solid border-black/5 bg-[#f5f4f0] p-6 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.18),0_4px_12px_-2px_rgba(0,0,0,0.08)] md:w-[353px]">
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

// ---- Page ----

const navLinks = ["About", "Services", "Projects", "News", "Contact"];

export default async function Home() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [rawServices, rawProjects, rawTestimonials, rawPosts] = await Promise.all([
    client.fetch(SERVICES_QUERY),
    client.fetch(PROJECTS_QUERY),
    client.fetch(TESTIMONIALS_QUERY),
    client.fetch(POSTS_QUERY),
  ]);

  // Normalize Sanity data or fall back to hardcoded content
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const services: ServiceItem[] = rawServices?.length
    ? rawServices.map((s: any) => ({
        _id: s._id,
        title: s.title ?? "",
        description: s.description ?? "Placeholder description of this service.",
        imageUrl: s.image ? urlFor(s.image).width(302).height(302).url() : "",
      }))
    : FB_SERVICES;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const projects: ProjectItem[] = rawProjects?.length
    ? rawProjects.map((p: any) => ({
        _id: p._id,
        title: p.title ?? "",
        imageUrl: p.image ? urlFor(p.image).width(744).height(744).url() : "",
        tags: p.tags ?? [],
      }))
    : FB_PROJECTS;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const testimonials: TestimonialItem[] = rawTestimonials?.length
    ? rawTestimonials.map((t: any) => ({
        _id: t._id,
        author: t.author ?? "",
        quote: t.quote ?? "",
        logoUrl: t.logo ? urlFor(t.logo).height(72).url() : "",
        logoClass: "h-8",
      }))
    : FB_TESTIMONIALS;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const posts: PostItem[] = rawPosts?.length
    ? rawPosts.map((p: any) => ({
        _id: p._id,
        imageUrl: p.mainImage ? urlFor(p.mainImage).width(353).height(469).url() : "",
        excerpt: p.excerpt ?? "",
      }))
    : FB_POSTS;

  return (
    <main className="relative w-full overflow-x-hidden bg-[#bfced1] font-[family-name:var(--font-inter)]">
      {/* Hero */}
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
              <p className="-translate-x-[25px] self-center font-[family-name:var(--font-geist-mono)] text-sm uppercase leading-[1.1] text-white/70 md:translate-x-0 md:self-start md:pl-[48px]">
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
                <span className="block md:inline">Harvey&nbsp;&nbsp;</span>
                <span className="block -translate-x-[25px] md:inline md:translate-x-0">Specter</span>
              </h1>
            </div>

            <div className="relative mt-4 flex w-full -translate-x-[40px] justify-start md:translate-x-0 md:justify-end">
              <div className="relative flex w-[452px] flex-col items-start gap-4 pl-[100px] md:w-[294px] md:pl-0">
                <p className="pr-[60px] text-sm font-bold italic uppercase leading-[1.1] tracking-[-0.04em] text-[#1f1f1f] md:pr-0">
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

      {/* Bio */}
      <section className="relative w-full bg-white px-4 py-12 md:px-8 md:py-[120px]">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-6">
          <div className="flex w-full flex-col items-end gap-3">
            <p className="w-full pr-[10px] text-right font-[family-name:var(--font-geist-mono)] text-sm uppercase leading-[1.1] text-[#1f1f1f] md:pr-0">
              [ 8+ years in industry ]
            </p>
            <div className="h-px w-full bg-black" />
          </div>

          <div className="mt-[20px] flex w-full flex-col items-center gap-3 font-light uppercase tracking-[-0.08em] leading-[0.84] text-[32px] text-black md:mt-0 md:items-start md:gap-2 md:text-[clamp(48px,6.667vw,96px)]">
            <p className="font-[family-name:var(--font-geist-mono)] text-sm font-normal normal-case tracking-normal leading-[1.1] text-[#1f1f1f] md:hidden">
              001
            </p>

            <div className="flex items-start gap-3 whitespace-nowrap">
              <span>A creative director&nbsp;&nbsp; /</span>
              <span className="hidden font-[family-name:var(--font-geist-mono)] text-sm font-normal normal-case tracking-normal leading-[1.1] text-[#1f1f1f] md:inline">
                001
              </span>
            </div>

            <div className="whitespace-nowrap md:pl-[14.86vw]">Photographer</div>

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

      {/* About */}
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

      {/* Full-width photo */}
      <section className="relative w-full bg-white">
        <div className="aspect-[375/614] w-full overflow-hidden md:aspect-[1226/767]">
          <img
            src="/photographer.jpg"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
      </section>

      {/* Services */}
      <section className="relative w-full bg-black px-4 py-12 text-white md:px-8 md:py-[80px]">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 md:gap-12">
          <p className="font-[family-name:var(--font-geist-mono)] text-sm font-normal uppercase leading-[1.1] text-white">
            [ services ]
          </p>

          <div className="flex w-full items-center justify-between whitespace-nowrap font-light uppercase tracking-[-0.08em] leading-none text-[32px] md:text-[clamp(48px,6.667vw,96px)]">
            <span>[{services.length}]</span>
            <span>Deliverables</span>
          </div>

          <div className="flex flex-col gap-12">
            {services.map((item, i) => (
              <div key={item._id} className="flex flex-col gap-3">
                <p className="font-[family-name:var(--font-geist-mono)] text-sm font-normal uppercase leading-[1.1] text-white">
                  [ {i + 1} ]
                </p>
                <div className="h-px w-full bg-white" />

                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-8">
                  <h3 className="whitespace-nowrap font-bold italic uppercase tracking-[-0.04em] leading-[1.1] text-[36px]">
                    {item.title}
                  </h3>

                  <div className="flex flex-row items-start gap-4 md:gap-6">
                    <p className="font-[family-name:var(--font-inter)] text-[14px] font-normal leading-[1.3] tracking-[-0.04em] text-white md:w-[393px]">
                      {item.description}
                    </p>
                    <div className="h-[100px] w-[100px] shrink-0 overflow-hidden md:h-[151px] md:w-[151px]">
                      <img
                        src={item.imageUrl}
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

      {/* Portfolio */}
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
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                [ portfolio ]
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-end">
            <div className="flex flex-col gap-6">
              {projects[0] && (
                <PortfolioTile
                  title={projects[0].title}
                  image={projects[0].imageUrl}
                  tags={projects[0].tags}
                  heightClass="h-[390px] md:h-[744px]"
                  className="md:mb-[50px]"
                />
              )}
              {projects[1] && (
                <PortfolioTile
                  title={projects[1].title}
                  image={projects[1].imageUrl}
                  tags={projects[1].tags}
                  heightClass="h-[390px] md:h-[699px]"
                />
              )}
              <div className="hidden md:mt-[50px] md:block">
                <PortfolioCTA />
              </div>
            </div>
            <div className="flex flex-col gap-6 md:pt-[240px]">
              {projects[2] && (
                <PortfolioTile
                  title={projects[2].title}
                  image={projects[2].imageUrl}
                  tags={projects[2].tags}
                  heightClass="h-[390px] md:h-[699px]"
                  className="md:mb-[50px]"
                />
              )}
              {projects[3] && (
                <PortfolioTile
                  title={projects[3].title}
                  image={projects[3].imageUrl}
                  tags={projects[3].tags}
                  heightClass="h-[390px] md:h-[744px]"
                />
              )}
            </div>
          </div>

          <div className="md:hidden">
            <PortfolioCTA />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative w-full overflow-hidden bg-white px-4 py-16 md:px-8 md:py-[120px]">
        <div className="relative mx-auto w-full max-w-[1440px]">
          <h2 className="text-left font-bold capitalize tracking-[-0.07em] text-black text-[64px] leading-[0.9] md:hidden">
            Testimonials
          </h2>

          {/* Mobile scroll */}
          <div className="mt-8 -mx-4 flex gap-2 overflow-x-auto pb-4 px-4 md:hidden">
            {testimonials.map((t, i) => (
              <div
                key={t._id}
                className="shrink-0"
                style={{ transform: `rotate(${MOBILE_ROTATIONS[i] ?? "0deg"})` }}
              >
                <TestimonialCard
                  logo={t.logoUrl}
                  logoClass={t.logoClass}
                  quote={t.quote}
                  author={t.author}
                />
              </div>
            ))}
          </div>

          {/* Desktop absolute layout */}
          <div className="hidden md:block">
            <div className="relative isolate mx-auto w-[1238px] max-w-full">
              <h2
                className="pointer-events-none absolute left-0 right-0 z-0 text-center font-medium capitalize tracking-[-0.07em] text-black md:text-[clamp(80px,13.75vw,198px)] md:leading-[1.1]"
                style={{ top: "375px", transform: "translateY(-50%)" }}
              >
                Testimonials
              </h2>
              {testimonials.map((t, i) => {
                const pos = TESTIMONIAL_POSITIONS[i];
                if (!pos) return null;
                return (
                  <div
                    key={t._id}
                    className="absolute"
                    style={{
                      left: pos.left,
                      top: pos.top,
                      transform: `rotate(${pos.rotate})`,
                      zIndex: pos.zIndex,
                    }}
                  >
                    <TestimonialCard
                      logo={t.logoUrl}
                      logoClass={t.logoClass}
                      quote={t.quote}
                      author={t.author}
                    />
                  </div>
                );
              })}
              <div className="h-[900px]" aria-hidden />
            </div>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="relative w-full bg-[#f3f3f3] px-4 py-16 md:px-8 md:py-[120px]">
        <div className="mx-auto w-full max-w-[1440px]">
          <h2 className="pr-[150px] font-light uppercase tracking-[-0.08em] leading-[0.86] text-black text-[32px] md:hidden md:pr-0">
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

            <div className="-mx-4 flex gap-4 overflow-x-auto px-4 md:mx-0 md:ml-[270px] md:w-[1020px] md:items-start md:gap-[31px] md:overflow-visible md:px-0">
              {posts.flatMap((post, i) => [
                i > 0 && (
                  <div key={`divider-${post._id}`} className="hidden w-px self-stretch bg-black/30 md:block" />
                ),
                <NewsCard
                  key={post._id}
                  image={post.imageUrl}
                  excerpt={post.excerpt}
                  topPad={i === 1}
                />,
              ])}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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

              <div className="flex flex-col gap-[10px] text-[18px] uppercase tracking-[-0.04em] leading-[1.1] text-white md:w-[298px] md:items-center md:text-center">
                <p>Facebook</p>
                <p>Instagram</p>
              </div>

              <div className="-mt-[6px] flex flex-col gap-[10px] text-[18px] uppercase tracking-[-0.04em] leading-[1.1] text-white md:mt-0 md:w-[298px] md:items-end md:text-right">
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
                style={{ top: "calc(50% - 5.5px)" }}
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
              <a href="#" className="underline">licences</a>
              <a href="#" className="underline">Privacy policy</a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 md:hidden">
            <div className="flex gap-[34px] pb-8 text-[12px] font-normal uppercase leading-[1.1] tracking-[-0.04em] text-white">
              <a href="#" className="underline">licences</a>
              <a href="#" className="underline">Privacy policy</a>
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

      <MobileNav />
    </main>
  );
}
