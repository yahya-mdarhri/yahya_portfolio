import { Mail, MapPin, Phone } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile } from "@/data/portfolio";

const cards = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, "")}` },
  { icon: MapPin, label: "Location", value: profile.location, href: undefined },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build something reliable together"
          description="Open to opportunities in data project management, data science, and digital innovation. Feel free to reach out."
        />

        <div className="grid gap-4 sm:grid-cols-3">
          {cards.map((c) => {
            const Icon = c.icon;
            const content = (
              <div className="card flex h-full flex-col items-start gap-3 p-6 transition-transform hover:-translate-y-1">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: "var(--accent)" }}
                >
                  <Icon size={18} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide" style={{ color: "var(--muted)" }}>
                    {c.label}
                  </p>
                  <p className="mt-1 font-medium break-words">{c.value}</p>
                </div>
              </div>
            );
            return <div key={c.label}>{c.href ? <a href={c.href}>{content}</a> : content}</div>;
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex rounded-full px-8 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Send me an email
          </a>
        </div>
      </div>
    </section>
  );
}
