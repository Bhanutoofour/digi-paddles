"use client";

import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const faqItems = [
    {
      question: "What types of projects do you handle?",
      answer:
        "We work on business websites, landing pages, custom software, AI agents, UI/UX improvements, and digital growth support.",
    },
    {
      question: "Can you help with both design and development?",
      answer:
        "Yes. DigiPaddles supports strategy, content direction, UI/UX design, front-end development, and launch-ready implementation.",
    },
    {
      question: "Do you also support SEO and marketing goals?",
      answer:
        "Yes. We structure pages and messaging to support discoverability, stronger communication, and better lead conversion.",
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-[#080808] px-[6%] pb-24 pt-36 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-black">Get In Touch</h1>
          <p className="text-xl text-white/70">
            Let&apos;s discuss how DigiPaddles can help transform your business
            with AI-powered digital solutions.
          </p>
        </div>
      </section>

      <section className="bg-white px-[6%] py-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#F4511E] focus:outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#F4511E] focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#F4511E] focus:outline-none"
                  placeholder="Your company (optional)"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 focus:border-[#F4511E] focus:outline-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#F4511E] px-8 py-4 font-bold text-white transition hover:bg-[#d93e10]"
              >
                Send Message <Send className="h-5 w-5" />
              </button>
            </form>

            {submitted ? (
              <p className="mt-4 rounded-lg bg-[#F4511E]/10 px-4 py-3 text-sm text-[#111111]">
                Thanks. Your message has been captured locally in the form for
                now. We can wire this up to email or a backend next.
              </p>
            ) : null}
          </div>

          <div>
            <h2 className="mb-6 text-3xl font-bold">Contact Information</h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#F4511E]/10">
                  <Mail className="h-6 w-6 text-[#F4511E]" />
                </div>
                <div>
                  <h3 className="mb-1 font-bold">Email</h3>
                  <p className="text-gray-600">Business@digipaddles.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#F4511E]/10">
                  <MapPin className="h-6 w-6 text-[#F4511E]" />
                </div>
                <div>
                  <h3 className="mb-1 font-bold">Canada Office</h3>
                  <p className="text-gray-600">
                    997 Seymour St #250
                    <br />
                    Vancouver, BC V6B 3M1
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#F4511E]/10">
                  <MapPin className="h-6 w-6 text-[#F4511E]" />
                </div>
                <div>
                  <h3 className="mb-1 font-bold">India Office</h3>
                  <p className="text-gray-600">
                    4th lane, 284/B, High-Tension Line Rd
                    <br />
                    Kondapur, Telangana 500084
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-gray-50 p-8">
              <h3 className="mb-4 text-xl font-bold">Business Hours</h3>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F4F0] px-[6%] py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-[clamp(2rem,4vw,3.1rem)] font-black">
              Talk to DigiPaddles about websites, software, SEO-focused content,
              and AI-powered solutions
            </h2>
            <p className="mt-5 text-base leading-8 text-[#6B6B6B]">
              If you are looking for a website development company, UI/UX design
              partner, custom software team, or AI-focused digital agency,
              contact DigiPaddles to discuss your goals. We help businesses
              clarify the scope, identify the right deliverables, and move from
              idea to execution with a practical plan.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {faqItems.map((item) => (
              <article
                key={item.question}
                className="rounded-[20px] border border-black/8 bg-white p-7"
              >
                <h3 className="text-lg font-bold">{item.question}</h3>
                <p className="mt-4 text-sm leading-7 text-[#6B6B6B]">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
