import Link from "next/link";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "Full-stack commerce experience with a clean UX and smarter customer journeys.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Healthcare App",
    category: "Custom Software",
    description:
      "Patient management workflows built for clarity, reliability, and trust.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "AI Chatbot",
    category: "AI Solutions",
    description:
      "Custom GPT-powered support automation that improves speed and consistency.",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Marketing Dashboard",
    category: "Digital Marketing",
    description:
      "A campaign intelligence layer designed for visibility, reporting, and action.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
];

const portfolioNotes = [
  "Responsive website design and front-end execution",
  "Conversion-focused user journeys and landing page strategy",
  "Scalable design systems and modern UI foundations",
  "Custom software workflows and AI-powered automation concepts",
];

export default function PortfolioPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-[#080808] px-[6%] pb-24 pt-36 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-black">Our Portfolio</h1>
          <p className="text-xl text-white/70">
            Selected work that shows how strategy, design, development, and AI
            execution come together.
          </p>
        </div>
      </section>

      <section className="bg-white px-[6%] py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-2xl border border-black/10 transition-all duration-300 hover:shadow-xl"
              >
                <div className="h-64 overflow-hidden bg-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <span className="text-sm font-bold uppercase tracking-wide text-[#F4511E]">
                    {project.category}
                  </span>
                  <h3 className="mb-3 mt-2 text-2xl font-bold">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-gray-600">{project.description}</p>
                  <span className="inline-flex items-center font-semibold text-[#F4511E]">
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="mb-8 text-xl text-gray-600">
              Want to see your project here?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded bg-[#F4511E] px-8 py-4 font-bold text-white transition hover:bg-[#d93e10]"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F4F0] px-[6%] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-[clamp(2rem,4vw,3.1rem)] font-black">
              A portfolio shaped around quality, usability, and digital growth
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#6B6B6B]">
              Our project work reflects a broader service approach that blends
              website development, product thinking, UX structure, and business
              messaging. We focus on delivering digital experiences that not
              only look premium but also support discovery, trust, and
              conversion.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {portfolioNotes.map((item) => (
              <div
                key={item}
                className="rounded-[20px] border border-black/8 bg-white p-6"
              >
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#F4511E]">
                  Delivery Focus
                </p>
                <p className="mt-3 text-lg leading-8 text-[#111111]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
