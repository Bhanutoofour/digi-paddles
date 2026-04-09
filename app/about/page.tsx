import Link from "next/link";
import { ArrowRight, Award, Eye, Target, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Innovation",
    description:
      "We bring modern AI and product thinking into every solution we build.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Clear communication, realistic timelines, and honest execution shape our process.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We care deeply about quality, polish, and the details users actually feel.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work like a partner, not a disconnected vendor handing off generic deliverables.",
  },
];

const team = [
  {
    name: "Bhanu Teja",
    role: "Technology Head & Management",
    education: "State University of New York",
    location: "Hyderabad, India",
    initials: "BT",
    gradient: "linear-gradient(135deg,#F4511E,#FF7A45)",
  },
  {
    name: "Tejas",
    role: "Development Lead",
    education: "University of Canada West | IIM Kolkata",
    location: "Vancouver, Canada",
    initials: "TJ",
    gradient: "linear-gradient(135deg,#FF7A45,#FF9A5C)",
  },
  {
    name: "Praveen Kumar",
    role: "Senior Developer",
    education: "University of Edwardsville",
    location: "St. Louis, USA",
    initials: "PK",
    gradient: "linear-gradient(135deg,#FF9A5C,#FFB380)",
  },
  {
    name: "Akhilesh K",
    role: "Business Development Head",
    education: "University of Waterloo",
    location: "Ontario, Canada",
    initials: "AK",
    gradient: "linear-gradient(135deg,#F4511E,#FF6B2B)",
  },
  {
    name: "Karas Roland",
    role: "UI/UX Lead",
    education: "University of British Columbia",
    location: "Vancouver, Canada",
    initials: "KR",
    gradient: "linear-gradient(135deg,#FF7A45,#FFB380)",
  },
  {
    name: "Simaran Kaur",
    role: "Business Development",
    education: "Delhi University",
    location: "Vancouver, Canada",
    initials: "SK",
    gradient: "linear-gradient(135deg,#FF9A5C,#FFC8A0)",
  },
];

const capabilities = [
  "SEO-focused website architecture",
  "Brand-led UI and UX systems",
  "Custom web application development",
  "AI workflow design and automation strategy",
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-[linear-gradient(135deg,#FF5722,#D84315)] px-[6%] py-24 pt-36 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl lg:text-5xl">About DigiPaddles</h1>
          <p className="text-xl text-orange-100">
            We are a team of AI and digital specialists helping businesses grow
            through design, software, and intelligent automation.
          </p>
        </div>
      </section>

      <section className="bg-white px-[6%] py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-6 text-3xl lg:text-4xl">Our Story</h2>
            <p className="mb-4 text-lg text-gray-600">
              DigiPaddles started with a simple belief: businesses should be
              able to use modern technology without getting buried in
              complexity.
            </p>
            <p className="mb-4 text-lg text-gray-600">
              What began as a focused digital team has grown into an AI-first
              studio offering website development, UI/UX design, digital
              marketing, custom software, and Gen AI agents.
            </p>
            <p className="text-lg text-gray-600">
              Today, we help clients build digital experiences that look
              premium, work reliably, and support measurable business growth.
            </p>
          </div>
          <div className="overflow-hidden rounded-[24px] shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
              alt="DigiPaddles team collaborating"
              className="h-[500px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#080808] px-[6%] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h2 className="text-3xl font-black lg:text-4xl">
              What makes DigiPaddles different
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/65">
              We do not separate strategy, design, development, and AI thinking
              into isolated silos. Our work is shaped around how real businesses
              attract leads, build trust, improve operations, and create a
              stronger digital presence over time.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {capabilities.map((item) => (
              <div
                key={item}
                className="rounded-[20px] border border-white/10 bg-white/[0.04] p-6"
              >
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#F4511E]">
                  Core Capability
                </p>
                <p className="mt-3 text-lg leading-8 text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-[6%] py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <div className="rounded-[24px] bg-[linear-gradient(135deg,#FF5722,#FF7043)] p-8 text-white">
            <Target className="mb-4 h-12 w-12" />
            <h3 className="mb-4 text-2xl">Our Mission</h3>
            <p className="text-lg text-orange-100">
              To empower businesses with AI-powered digital solutions that drive
              growth, efficiency, and stronger user experiences.
            </p>
          </div>
          <div className="rounded-[24px] bg-gray-900 p-8 text-white">
            <Eye className="mb-4 h-12 w-12" />
            <h3 className="mb-4 text-2xl">Our Vision</h3>
            <p className="text-lg text-gray-300">
              To become the trusted AI-first digital partner for ambitious
              businesses building for a modern market.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-[6%] py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl lg:text-4xl">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles shaping how we work and what we deliver.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="rounded-[24px] border border-black/10 p-8 text-center transition hover:shadow-lg"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[linear-gradient(135deg,#FF5722,#FF7043)]">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-[6%] py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl lg:text-4xl">Our Journey</h2>
            <p className="mx-auto max-w-4xl text-xl leading-8 text-gray-600">
              Our journey is shaped by a clear vision to bridge traditional
              business strategy with emerging technology. After completing a
              master&apos;s degree at the State University of New York in 2014,
              our founder developed a deep interest in applying advanced AI
              capabilities to real-world business challenges and modern business
              execution. That foundation led to the launch of DigiPaddles in
              2026 as a modern digital partner built to integrate intelligent
              technology, strategic thinking, and a high-performing team into
              one efficient service model. Today, our focus is on helping
              businesses adopt stronger websites, smarter software, and
              practical AI-led solutions with clarity, quality, and long-term
              value.
            </p>
          </div>
          <div className="rounded-[28px] border border-black/8 bg-white p-10 shadow-[0_14px_40px_rgba(0,0,0,0.04)]">
            <p className="text-base leading-8 text-[#6B6B6B]">
              DigiPaddles was founded with the belief that businesses should be
              able to adopt advanced digital capabilities without unnecessary
              complexity. By combining product thinking, implementation
              discipline, and an AI-forward mindset, we are building a company
              designed for organizations that want modern execution with
              practical business relevance.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-[6%] py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 text-[0.66rem] font-extrabold uppercase tracking-[0.22em] text-[#F4511E]">
              <span className="h-[2px] w-[18px] bg-[#F4511E]" />
              Meet the Team
            </div>
            <h2 className="mb-4 text-3xl lg:text-4xl">
              Talented minds <em>from around</em>
              <br />
              the world
            </h2>
            <p className="text-xl text-gray-600">
              Our team brings together AI engineers, designers, developers, and
              strategists from top universities worldwide. Each member brings
              unique expertise and a shared passion for AI-driven innovation.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <article
                key={member.name}
                className="rounded-[24px] border border-black/10 bg-white p-8 text-center transition hover:-translate-y-1 hover:border-[#F4511E] hover:shadow-[0_16px_40px_rgba(244,81,30,0.12)]"
              >
                <div
                  className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full text-2xl font-black text-white shadow-[0_16px_32px_rgba(244,81,30,0.22)]"
                  style={{ background: member.gradient }}
                >
                  {member.initials}
                </div>
                <h3 className="text-xl">{member.name}</h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.08em] text-[#F4511E]">
                  {member.role}
                </p>
                <p className="mt-5 text-sm leading-7 text-[#111111]">
                  <strong>{member.education}</strong>
                </p>
                <p className="mt-2 text-sm text-gray-600">{member.location}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(90deg,#FF5722,#FF7043)] px-[6%] py-16 text-white">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="mb-4 text-3xl lg:text-4xl">Want to work with us?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-orange-100">
            We love partnering with ambitious teams that want design, software,
            and AI execution to move together.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded bg-white px-8 py-4 text-sm font-extrabold uppercase tracking-[0.07em] !text-[#FF5722] transition hover:bg-gray-100 hover:!text-[#D84315]"
            >
              <span className="!text-inherit">Start a Project</span>
              <ArrowRight className="h-5 w-5 !text-inherit" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded border border-white px-8 py-4 text-sm font-extrabold uppercase tracking-[0.07em] text-white transition hover:bg-white/10"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
