import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type ServiceDetailPageProps = {
  title: string;
  description: string;
  offerings: string[];
};

export function ServiceDetailPage({
  title,
  description,
  offerings,
}: ServiceDetailPageProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="bg-[#080808] px-[6%] pb-24 pt-36 text-white">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-[0.72rem] font-extrabold uppercase tracking-[0.22em] text-[#F4511E]">
            Service Detail
          </p>
          <h1 className="mb-6 text-5xl font-black">{title}</h1>
          <p className="text-xl text-white/70">{description}</p>
        </div>
      </section>

      <section className="bg-white px-[6%] py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="mb-5 text-3xl font-bold">What We Offer</h2>
            <p className="text-base leading-8 text-[#6B6B6B]">
              Every engagement is tailored to your business goals, technical
              needs, and growth stage, with a focus on outcomes rather than
              filler deliverables.
            </p>
          </div>
          <div className="rounded-[24px] border border-black/10 bg-[#FAF8F3] p-8">
            <ul className="space-y-4 text-lg text-[#111111]">
              {offerings.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#F4511E]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-6xl rounded-[24px] bg-[linear-gradient(135deg,#F4511E,#D93E10)] p-10 text-white">
          <h3 className="text-3xl font-black">Ready to build this with us?</h3>
          <p className="mt-4 max-w-2xl text-white/85">
            We combine strategy, design, development, and AI implementation to
            deliver work that feels polished and practical.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded bg-white px-8 py-4 text-sm font-extrabold uppercase tracking-[0.07em] text-[#F4511E] transition hover:bg-[#080808] hover:text-white"
          >
            Start Your Project <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
