import Link from "next/link";
import {
  ArrowRight,
  Award,
  Bot,
  Brain,
  CheckCircle2,
  Code,
  Palette,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom websites and web applications built with cutting-edge technologies for optimal performance and scalability.",
    number: "01",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces designed to deliver exceptional user experiences and drive engagement.",
    number: "02",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies powered by AI insights that increase visibility and conversions.",
    number: "03",
  },
  {
    icon: Bot,
    title: "Gen AI Agents",
    description:
      "Custom AI agents and intelligent automation to streamline your business processes and boost efficiency.",
    number: "04",
  },
  {
    icon: Zap,
    title: "Custom Software",
    description:
      "Tailored software solutions designed to meet your unique business requirements and workflows.",
    number: "05",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description:
      "Seamlessly integrate AI capabilities into your existing systems to enhance functionality and insights.",
    number: "06",
  },
];

const whyUs = [
  {
    icon: Zap,
    title: "AI-First Approach",
    description:
      "We leverage cutting-edge AI technology in every solution we build, giving you a practical competitive advantage.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Our team combines technical depth, design direction, and business thinking across every engagement.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description:
      "We focus on polished delivery, trusted execution, and measurable outcomes instead of generic output.",
  },
  {
    icon: CheckCircle2,
    title: "End-to-End Support",
    description:
      "From concept to launch and iteration, we support the full journey instead of only one slice of the work.",
  },
];

const process = [
  {
    number: "1",
    title: "Discovery",
    description:
      "We learn about your business, goals, audience, and what success should actually look like.",
  },
  {
    number: "2",
    title: "Strategy",
    description:
      "We define the right mix of design, development, and AI-powered execution for the project.",
  },
  {
    number: "3",
    title: "Execution",
    description:
      "Our team builds the experience with clear communication, quality control, and launch readiness.",
  },
  {
    number: "4",
    title: "Growth",
    description:
      "We refine, support, and improve what is live so your digital presence keeps creating value.",
  },
];

const testimonials = [
  {
    quote:
      "DigiPaddles completely transformed our online presence. Our new website is stunning and the digital marketing campaigns they ran drove a 40% spike in orders within the first month.",
    author: "Raju Sharma",
    role: "Founder, ExpressLuv — Vancouver",
    initial: "R",
    color: "#e63946",
  },
  {
    quote:
      "The DigiPaddles team delivered a digital marketing strategy that put us in front of the right audience. Our online orders have grown consistently since launch. Truly reliable and creative.",
    author: "Bill Chen",
    role: "Owner, Mr. Waterman — Vancouver",
    initial: "B",
    color: "#1a56db",
  },
  {
    quote:
      "Working with DigiPaddles was the best business decision I made. They built a professional website and their marketing campaigns have consistently brought in qualified leads every week.",
    author: "Sripathi Reddy",
    role: "Founder, InsureWithSRI — Vancouver",
    initial: "S",
    color: "#1a56db",
  },
  {
    quote:
      "DigiPaddles helped us reach customers across multiple markets. Their targeted social media campaigns were incredibly effective — our online sales doubled in 60 days. Amazing team.",
    author: "Tiny Jewels",
    role: "Jewellery Brand — Cairo, Egypt",
    initial: "T",
    color: "#c9a84c",
  },
  {
    quote:
      "Vihara Courtyard needed a website that matched our unique vision. DigiPaddles nailed it perfectly. The site is beautiful, loads fast and has helped us attract the right clientele.",
    author: "Nagraj",
    role: "Founder, Vihara Courtyard — Hyderabad",
    initial: "N",
    color: "#7b6244",
  },
  {
    quote:
      "The Dosa Place needed more online visibility and DigiPaddles delivered. Their digital marketing campaigns brought in a wave of new customers. Orders are up, reviews are up — everything!",
    author: "Brendon",
    role: "Owner, The Dosa Place — Virginia, USA",
    initial: "B",
    color: "#e85d04",
  },
  {
    quote:
            "They are not just designers — they are storytellers and growth partners. From our logo to our campaigns, DigiPaddles has been with us every step. Simply the best team we have worked with.",

    author: "Tejas",
    role: "Founder, OccasionKart — Hyderabad",
    initial: "T",
    color: "#e63946",
  },
  {
    quote: "DigiPaddles built our brand from scratch — website, branding and digital marketing all in one. The results were incredible. We are now ranking on Google and generating consistent Leads".
    author: "Raju D",
    role: "COO, TekspotEDU",
    initial: "H",
    color: "#F4511E",
  },
];

const marqueeItems = [
  "Web Development",
  "AI Solutions",
  "Digital Marketing",
  "UI/UX Design",
  "Custom Software",
  "Gen AI Agents",
  "Mobile Apps",
  "SEO Services",
];

const industryFocus = [
  "Healthcare and wellness brands",
  "SaaS startups and product companies",
  "Professional services and consulting firms",
  "E-commerce and consumer businesses",
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <section className="relative grid min-h-screen items-center gap-20 overflow-hidden bg-[#080808] px-[6%] pb-24 pt-36 lg:grid-cols-2">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="absolute right-[-100px] top-[-100px] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,_rgba(244,81,30,0.25),_transparent_70%)] blur-[80px]" />
          <div className="absolute bottom-[-80px] left-[10%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,_rgba(244,81,30,0.12),_transparent_70%)] blur-[80px]" />
          <div className="absolute right-[30%] top-[40%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,_rgba(255,154,92,0.1),_transparent_70%)] blur-[80px]" />
        </div>

        <div className="relative z-10">
          <div className="mb-5 flex items-center gap-2.5">
            <div className="h-[7px] w-[7px] rounded-full bg-[#F4511E]" />
            <span className="text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-white/40">
              AI-POWERED DIGITAL SOLUTIONS
            </span>
          </div>
          <h1 className="mb-6 text-[clamp(3.2rem,5.8vw,6rem)] font-black leading-[0.98] text-white">
            Transform Your Business with{" "}
            <em className="italic text-[#F4511E]">AI</em>
          </h1>
          <p className="mb-9 max-w-[440px] text-base leading-[1.9] text-white/45">
            We create intelligent websites, custom software, and AI agents that
            drive innovation and automate your business processes.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded bg-[#F4511E] px-7 py-3.5 text-[0.78rem] font-extrabold uppercase tracking-[0.07em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d93e10] hover:shadow-[0_12px_32px_rgba(244,81,30,0.35)]"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded border-[1.5px] border-white/12 px-6 py-3 text-[0.78rem] font-bold uppercase tracking-[0.07em] text-white/60 transition-all duration-300 hover:border-white/40 hover:text-white"
            >
              View Our Work
            </Link>
          </div>
        </div>

        <div className="relative z-10">
          <div className="rounded-3xl border border-white/[0.07] bg-white/[0.04] p-10 backdrop-blur-[10px]">
            <div className="mb-4 text-[0.62rem] font-extrabold uppercase tracking-[0.2em] text-white/28">
              OUR IMPACT
            </div>
            <h2 className="mb-7 text-[1.45rem] font-bold leading-[1.35] text-white">
              Delivering Results That Matter
            </h2>
            <div className="grid grid-cols-2 gap-[18px]">
              {[
                { number: "200+", label: "Projects Completed" },
                { number: "150+", label: "Happy Clients" },
                { number: "50+", label: "AI Solutions" },
                { number: "98%", label: "Client Satisfaction" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[14px] border border-white/[0.06] bg-white/[0.04] p-5"
                >
                  <span className="block text-[2.2rem] font-black leading-none text-[#F4511E]">
                    {stat.number}
                  </span>
                  <span className="mt-1 block text-[0.64rem] tracking-[0.04em] text-white/30">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -left-5 -top-5 rounded-[10px] border border-white/10 bg-white/[0.06] px-4 py-2.5 text-[0.68rem] font-bold backdrop-blur-[10px]">
            AI-Powered
          </div>
        </div>
      </section>

      <div className="overflow-hidden bg-[#F4511E] py-3.5">
        <div className="flex flex-wrap items-center justify-center gap-6 px-6 text-center lg:gap-11">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex items-center gap-6 lg:gap-11"
            >
              <span className="text-[0.88rem] font-bold text-white/70">
                {item}
              </span>
              <div className="h-1 w-1 rounded-full bg-white/40" />
            </div>
          ))}
        </div>
      </div>

      <section className="relative overflow-hidden bg-white px-[6%] py-18">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-[0.66rem] font-extrabold uppercase tracking-[0.22em] text-[#F4511E]">
            <span className="h-[2px] w-[18px] bg-[#F4511E]" />
            OUR SERVICES
          </div>
          <h2 className="mb-4 text-[clamp(2rem,4vw,3.5rem)] font-black">
            AI-Powered Digital Solutions
          </h2>
          <p className="text-lg leading-[1.8] text-[#6B6B6B]">
            Comprehensive digital services enhanced with artificial
            intelligence.
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl gap-[2px] bg-black/[0.04] md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group relative overflow-hidden bg-white p-12 pb-10 transition-all duration-[400ms] hover:-translate-y-1.5 hover:bg-[#080808] hover:shadow-[0_24px_60px_rgba(0,0,0,0.18)]"
              >
                <span className="mb-6 block text-[0.6rem] font-extrabold tracking-[0.2em] text-[#F4511E] transition-colors group-hover:text-white/60">
                  {service.number}
                </span>
                <div className="mb-[22px] flex h-[52px] w-[52px] items-center justify-center rounded-xl border-[1.5px] border-black/[0.07] transition-all duration-300 group-hover:border-white/20">
                  <Icon
                    className="h-[22px] w-[22px] stroke-[#080808] transition-all duration-300 group-hover:stroke-white"
                    strokeWidth={2}
                  />
                </div>
                <h3 className="mb-3 text-[1.2rem] font-bold transition-colors group-hover:text-white">
                  {service.title}
                </h3>
                <p className="text-[0.82rem] leading-[1.8] text-[#6B6B6B] transition-colors group-hover:text-white/70">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-[#F5F4F0] px-[6%] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 text-[0.66rem] font-extrabold uppercase tracking-[0.22em] text-[#F4511E]">
              <span className="h-[2px] w-[18px] bg-[#F4511E]" />
              DIGITAL GROWTH PARTNER
            </div>
            <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-black leading-[1.08]">
              Website development and AI solutions built for serious business
              growth
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#6B6B6B]">
              DigiPaddles helps companies create high-converting websites,
              scalable custom software, modern UI/UX systems, and AI-powered
              automation that supports sales, operations, and customer
              experience. We focus on clear strategy, sharp design, and
              production-ready implementation.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {industryFocus.map((item) => (
              <div
                key={item}
                className="rounded-[20px] border border-black/8 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
              >
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#F4511E]">
                  Industry Focus
                </p>
                <p className="mt-3 text-lg leading-8 text-[#111111]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#080808] px-[6%] py-18">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-[0.66rem] font-extrabold uppercase tracking-[0.22em] text-[#F4511E]">
            <span className="h-[2px] w-[18px] bg-[#F4511E]" />
            WHY CHOOSE US
          </div>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-white">
            Excellence in Every Project
          </h2>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {whyUs.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-[18px] border border-white/[0.05] p-10 transition-all duration-300 hover:border-[rgba(244,81,30,0.2)] hover:bg-[rgba(244,81,30,0.03)]"
              >
                <div className="absolute left-0 right-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#F4511E] to-[#FF7A45] transition-transform duration-300 group-hover:scale-x-100" />
                <div className="mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-[14px] border border-[rgba(244,81,30,0.15)] bg-[rgba(244,81,30,0.08)] transition-all duration-300 group-hover:border-[rgba(244,81,30,0.3)] group-hover:bg-[rgba(244,81,30,0.15)]">
                  <Icon className="h-6 w-6 stroke-[#F4511E]" strokeWidth={2} />
                </div>
                <h3 className="mb-2.5 text-[1.1rem] font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-[0.82rem] leading-[1.85] text-white/35">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#FAF8F3] px-[6%] py-18">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-[0.66rem] font-extrabold uppercase tracking-[0.22em] text-[#F4511E]">
            <span className="h-[2px] w-[18px] bg-[#F4511E]" />
            OUR PROCESS
          </div>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black">
            How We Work
          </h2>
        </div>

        <div className="relative mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          <div className="absolute left-[12%] right-[12%] top-8 hidden h-[1px] bg-gradient-to-r from-transparent via-black/[0.07] to-transparent lg:block" />
          {process.map((step) => (
            <article key={step.number} className="px-4 text-center">
              <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-black/[0.07] bg-white text-base font-black text-[#080808] shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:scale-110 hover:border-[#F4511E] hover:bg-[#F4511E] hover:text-white hover:shadow-[0_8px_32px_rgba(244,81,30,0.35)]">
                {step.number}
              </div>
              <h4 className="mb-2 text-base font-bold">{step.title}</h4>
              <p className="text-[0.78rem] leading-[1.75] text-[#6B6B6B]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-[6%] py-18">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-[0.66rem] font-extrabold uppercase tracking-[0.22em] text-[#F4511E]">
            <span className="h-[2px] w-[18px] bg-[#F4511E]" />
            TESTIMONIALS
          </div>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black">
            What Our Clients Say
          </h2>
        </div>

        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.author}
              className="group relative overflow-hidden rounded-[20px] border border-black/[0.07] p-10 transition-all duration-300 hover:-translate-y-1 hover:border-[#F4511E] hover:shadow-[0_16px_48px_rgba(244,81,30,0.08)]"
            >
              <div className="mb-2 text-6xl leading-none text-[#F4511E] opacity-15">
                &quot;
              </div>
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <span key={index} className="text-[0.85rem] text-[#F4511E]">
                    ★
                  </span>
                ))}
              </div>
              <p className="mb-7 text-[0.92rem] italic leading-[1.9] text-[#080808]">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-3.5">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full text-[1.1rem] font-bold text-white"
                  style={{ background: testimonial.color }}
                >
                  {testimonial.initial}
                </div>
                <div>
                  <div className="text-[0.88rem] font-bold">
                    {testimonial.author}
                  </div>
                  <div className="mt-0.5 text-[0.72rem] text-[#6B6B6B]">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#080808] px-[6%] py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 text-[0.66rem] font-extrabold uppercase tracking-[0.22em] text-[#F4511E]">
              <span className="h-[2px] w-[18px] bg-[#F4511E]" />
              SEO-READY STRUCTURE
            </div>
            <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-black leading-[1.08]">
              Built for visibility, trust, and search-friendly content depth
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/60">
              Strong digital performance is not only about visual polish. A
              modern business website also needs useful service content, clear
              positioning, search-friendly page structure, strong calls to
              action, and enough topical depth to help customers understand your
              offer. That is why DigiPaddles combines website design, web
              development, SEO-conscious content structure, and AI-powered
              marketing thinking in one workflow.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Service pages structured around search intent and buyer questions.",
              "Conversion-focused sections that explain your offer with clarity.",
              "Scalable content architecture for future SEO and campaign growth.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[20px] border border-white/10 bg-white/[0.04] p-6"
              >
                <p className="text-sm leading-7 text-white/78">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#F4511E] to-[#d93e10] px-[6%] py-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute right-[-100px] top-[-100px] h-[400px] w-[400px] rounded-full bg-white/[0.06]" />

        <div className="relative z-10 mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-10">
          <h2 className="text-[clamp(1.8rem,3.2vw,2.8rem)] font-black leading-[1.1] text-white">
            Ready to transform your business{" "}
            <em className="text-white/65">with AI?</em>
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded bg-white px-7 py-3.5 text-[0.78rem] font-extrabold uppercase tracking-[0.07em] text-[#F4511E] transition-all duration-250 hover:bg-[#080808] hover:text-white"
          >
            Get in Touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
