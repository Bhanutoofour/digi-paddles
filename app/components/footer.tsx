import Image from "next/image";
import Link from "next/link";
import { Globe, Mail, MapPin, Send, Sparkles } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Web Development", href: "/services/web-development" },
  { label: "UI/UX Design", href: "/services/ui-ux-design" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "Custom Software", href: "/services/custom-software" },
  { label: "Gen AI Agents", href: "/services/gen-ai-agents" },
];

export function Footer() {
  return (
    <footer className="mt-20 bg-[#080808] px-[6%] py-[60px] text-white/80">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 inline-flex items-center gap-3">
              <Image
                src="/digipaddles-logo.png"
                alt="DigiPaddles logo"
                width={260}
                height={78}
                className="h-14 w-auto rounded-md bg-white px-2 py-1"
              />
            </Link>
            <p className="mb-4 text-[13px] leading-relaxed text-white/65">
              AI-powered digital solutions for websites, custom software, and
              intelligent automation that help businesses scale with confidence.
            </p>
            <div className="flex gap-3">
              {[Globe, Send, Sparkles, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-white/40 transition-colors duration-200 hover:text-[#F4511E]"
                  aria-label="Social link"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-[14px] font-bold uppercase tracking-[0.1em] text-white">
              Quick Links
            </h4>
            <ul className="flex list-none flex-col gap-2.5">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[13px] text-white/65 transition-colors duration-200 hover:text-[#F4511E]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-[14px] font-bold uppercase tracking-[0.1em] text-white">
              Services
            </h4>
            <ul className="flex list-none flex-col gap-2.5">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[13px] text-white/65 transition-colors duration-200 hover:text-[#F4511E]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-[14px] font-bold uppercase tracking-[0.1em] text-white">
              Contact Us
            </h4>
            <div className="flex flex-col gap-4 text-[13px]">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#F4511E]" />
                <div>
                  <p className="mb-1 font-semibold text-white">Canada Office</p>
                  <p className="text-white/65">
                    997 Seymour St #250, Vancouver, BC V6B 3M1
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#F4511E]" />
                <div>
                  <p className="mb-1 font-semibold text-white">India Office</p>
                  <p className="text-white/65">
                    4th lane, 284/B, High-Tension Line Rd, Kondapur, Telangana
                    500084
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-[#F4511E]" />
                <span className="text-white/65">Business@digipaddles.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-[13px] text-white/50">
          <p>
            &copy; {new Date().getFullYear()} DigiPaddles. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
