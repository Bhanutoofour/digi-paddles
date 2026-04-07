import Link from "next/link";
import { ArrowRight, Bot, Code, Palette, TrendingUp, Zap } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom websites and web applications built with cutting-edge technologies.",
    href: "/services/web-development",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces designed for exceptional user experiences.",
    href: "/services/ui-ux-design",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies powered by AI insights.",
    href: "/services/digital-marketing",
  },
  {
    icon: Bot,
    title: "Gen AI Agents",
    description:
      "Custom AI agents and intelligent automation solutions.",
    href: "/services/gen-ai-agents",
  },
  {
    icon: Zap,
    title: "Custom Software",
    description: "Tailored software solutions for your unique business needs.",
    href: "/services/custom-software",
  },
];

const serviceBenefits = [
  {
    title: "Strategic planning",
    text: "Every service starts with business goals, user intent, and delivery priorities instead of random output.",
  },
  {
    title: "Modern execution",
    text: "We use current web standards, scalable implementation patterns, and AI-ready thinking across projects.",
  },
  {
    title: "Growth alignment",
    text: "The final deliverable is shaped to support marketing, conversion, content expansion, and future product growth.",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-[#080808] px-[6%] pb-24 pt-36">
        <div className="mx-auto max-w-4xl text-center text-white">
          <h1 className="mb-6 text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-[1.1]">
            AI-Powered <span className="text-[#F4511E]">Digital Services</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-[1.8] text-white/60">
            Comprehensive digital solutions enhanced with artificial
            intelligence to help your business thrive.
          </p>
        </div>
      </section>

      <section className="bg-white px-[6%] py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group block rounded-2xl border border-black/10 p-8 transition-all duration-300 hover:border-[#F4511E] hover:shadow-xl"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[#F4511E]/10 transition-colors group-hover:bg-[#F4511E]">
                    <Icon className="h-8 w-8 text-[#F4511E] transition-colors group-hover:text-white" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold">{service.title}</h3>
                  <p className="mb-4 text-gray-600">{service.description}</p>
                  <div className="flex items-center font-semibold text-[#F4511E]">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F4F0] px-[6%] py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-[clamp(2rem,4vw,3.1rem)] font-black">
              Full-service digital support for brands that need more than a
              template
            </h2>
            <p className="mt-5 text-base leading-8 text-[#6B6B6B]">
              Our services are designed for businesses that want a strong
              website foundation, better digital communication, and scalable
              systems that can support long-term growth. Whether you need web
              design, UI/UX design, custom software development, digital
              marketing support, or Gen AI agent implementation, DigiPaddles
              approaches the work through the lens of outcomes, not just output.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {serviceBenefits.map((item) => (
              <article
                key={item.title}
                className="rounded-[20px] border border-black/8 bg-white p-7"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#6B6B6B]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(135deg,#F4511E,#d93e10)] px-[6%] py-20">
        <div className="mx-auto max-w-4xl text-center text-white">
          <h2 className="mb-4 text-4xl font-black">Ready to get started?</h2>
          <p className="mb-8 text-xl text-white/80">
            Let us discuss how DigiPaddles can help transform your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded bg-white px-8 py-4 text-sm font-extrabold uppercase tracking-[0.07em] text-[#F4511E] transition-all hover:bg-[#080808] hover:text-white"
          >
            Contact Us <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
