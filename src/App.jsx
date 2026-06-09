import { useState } from "react";
import Icon from "./components/Icon.jsx";
import useReveal from "./useReveal.js";
import { CONTACT, SERVICES, TESTIMONIALS, FAQS } from "./data.js";
import nurse1 from "./assets/images/nurse1.jpg";
import nurse2 from "./assets/images/nurse2.jpg";
const telHref = `tel:${CONTACT.phoneRaw}`;
const waHref = `https://wa.me/${CONTACT.whatsappRaw}?text=${encodeURIComponent(
  "Hi, I would like to book a home nursing visit."
)}`;

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-500/30">
            <Icon name="heart" filled className="w-5 h-5" />
          </span>
          <span className="leading-tight">
            <span className="block font-bold text-slate-900">Poornima</span>
            <span className="block text-[11px] tracking-wide text-brand-600 font-medium -mt-0.5">
              HOME NURSING CARE
            </span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-brand-600 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={telHref}
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 hover:bg-brand-700 transition"
        >
          <Icon name="phone" className="w-4 h-4" />
          Call Now
        </a>

        <button
          className="md:hidden grid place-items-center w-10 h-10 rounded-lg text-slate-700 hover:bg-slate-100"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <Icon name={open ? "close" : "menu"} className="w-6 h-6" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-4">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-slate-700 font-medium hover:bg-brand-50 hover:text-brand-600"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={telHref}
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white"
          >
            <Icon name="phone" className="w-4 h-4" />
            Call {CONTACT.phone}
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50 via-white to-white" />
      <div className="absolute -top-24 -right-24 -z-10 h-80 w-80 rounded-full bg-brand-200/50 blur-3xl" />
      <div className="absolute top-40 -left-24 -z-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-white border border-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Trusted home care in {CONTACT.location.split(",")[0]}
          </span>

          {/* <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-slate-900">
            Professional nursing care,{" "}
            <span className="bg-gradient-to-r from-brand-600 to-accent bg-clip-text text-transparent">
              right at your home
            </span>
          </h1> */}
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-slate-900">
          Home Nursing Services &
          <span className="bg-gradient-to-r from-brand-600 to-accent bg-clip-text text-transparent">
            Patient Care at Home
          </span>
        </h1>

          {/* <p className="mt-6 text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
            Injections, wound dressing and more — delivered with
            warmth, hygiene and care by an experienced nursing professional.
          </p> */}
            <p className="mt-6 text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
              Professional Home Nursing Services and Nursing Care at Home in Dehradun.
              We provide injection support, wound dressing. Looking for a Home Nurse Near Me? Contact us today.
            </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a
              href={waHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 font-semibold text-white shadow-xl shadow-brand-600/30 hover:bg-brand-700 hover:-translate-y-0.5 transition"
            >
              <Icon name="whatsapp" filled className="w-5 h-5" />
              Book on WhatsApp
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white border border-slate-200 px-7 py-3.5 font-semibold text-slate-700 hover:border-brand-300 hover:text-brand-600 transition"
            >
              View Services
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
            {[
              { n: "2+ yrs", l: "Experience" },
              { n: "100+", l: "Visits done" },
              { n: "100%", l: "At home" },
            ].map((s) => (
              <div key={s.l} className="text-center lg:text-left">
                <dt className="text-2xl font-extrabold text-slate-900">{s.n}</dt>
                <dd className="text-sm text-slate-500">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative animate-fade-up">
          <div className="relative mx-auto max-w-md">
            <div className="absolute inset-0 rotate-6 rounded-[2.5rem] bg-gradient-to-br from-brand-400 to-accent opacity-20 blur-xl" />
            <div className="relative rounded-[2.5rem] bg-gradient-to-br from-brand-500 to-brand-700 p-8 text-white shadow-2xl shadow-brand-600/30">
              <div className="flex items-center gap-3">
                <span className="grid place-items-center w-12 h-12 rounded-2xl bg-white/15">
                  <Icon name="stethoscope" className="w-6 h-6" />
                </span>
                <div>
                  <p className="font-semibold">{CONTACT.name}</p>
                  <p className="text-sm text-white/80">{CONTACT.role}</p>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                {[
                  "Doorstep injections & dressing",
                  "Flexible visit timings",
                ].map((t) => (
                  <div key={t} className="flex items-center gap-3 text-sm">
                    <span className="grid place-items-center w-6 h-6 rounded-full bg-white/20">
                      <Icon name="check" className="w-3.5 h-3.5" />
                    </span>
                    {t}
                  </div>
                ))}
              </div>
              <a
                href={telHref}
                className="mt-7 flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-brand-700 hover:bg-brand-50 transition"
              >
                <Icon name="phone" className="w-4 h-4" />
                {CONTACT.phone}
              </a>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl animate-float">
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-accent/15 text-accent">
                <Icon name="clock" className="w-5 h-5" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-bold text-slate-900">Same-day</p>
                <p className="text-xs text-slate-500">visits available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, sub }) {
  return (
    <div className="reveal mx-auto max-w-2xl text-center mb-12">
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">
        {title}
      </h2>
      {sub && <p className="mt-4 text-slate-600">{sub}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="reveal relative">
          <div className="grid grid-cols-2 gap-4">
            <img
    src={nurse1}
    alt="Home Nursing Care"
    className="rounded-3xl shadow-lg h-72 w-full object-cover"
  />

  <img
    src={nurse2}
    alt="Patient Care at Home"
    className="rounded-3xl shadow-lg h-72 w-full object-cover mt-10"
  />
          </div>
        </div>

        <div className="reveal">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            About
          </p>
        <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">
        Home Nursing Services in Dehradun
        </h2>
         <p className="mt-5 text-slate-600 leading-relaxed">
            I'm <strong className="text-slate-900">{CONTACT.name}</strong>, providing
            professional Home Nursing Services and Patient Care at Home in Dehradun.
            Our Nursing Care at Home includes injection support, wound dressing,
            elderly care and post-hospital care. If you are searching for a
            Home Nurse Near Me, we offer reliable and affordable nursing support
            at your doorstep.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Every visit is carried out with strict hygiene, sterile supplies and
            genuine compassion, serving {CONTACT.location} and nearby areas.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {[
              "Experienced & reliable",
              "Sterile, single-use supplies",
              "Affordable per-visit pricing",
              "Flexible day & evening slots",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3 text-slate-700">
                <span className="grid place-items-center w-6 h-6 rounded-full bg-brand-100 text-brand-600 shrink-0">
                  <Icon name="check" className="w-3.5 h-3.5" />
                </span>
                <span className="text-sm">{t}</span>
              </li>
            ))}
          </ul>

       
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-20 sm:py-24 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Services & Charges"
          title="Home Nursing Services & Charges"
          sub="Transparent per-visit pricing with no hidden charges. Final charges may vary slightly based on requirements and distance."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <div
              key={s.name}
              className="reveal group relative flex flex-col rounded-3xl bg-white p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {s.popular && (
                <span className="absolute top-5 right-5 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
                  Popular
                </span>
              )}
              <span className="grid place-items-center w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition">
                <Icon name={s.icon} className="w-7 h-7" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-slate-900">{s.name}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">
                {s.desc}
              </p>
              <div className="mt-6 flex items-end justify-between border-t border-slate-100 pt-4">
                <p>
                  <span className="text-2xl font-extrabold text-slate-900">
                    {s.price}
                  </span>
                  <span className="text-sm text-slate-500"> {s.unit}</span>
                </p>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700 hover:bg-brand-600 hover:text-white transition"
                >
                  Book
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Care you can truly trust"
          sub="We blend professional nursing skills with the warmth and comfort of home."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className="reveal rounded-3xl bg-gradient-to-b from-slate-50 to-white p-7 border border-slate-100 text-center hover:border-brand-200 hover:shadow-lg transition"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <span className="mx-auto grid place-items-center w-14 h-14 rounded-2xl bg-brand-600 text-white shadow-lg shadow-brand-600/30">
                <Icon name={f.icon} filled={f.icon === "heart"} className="w-7 h-7" />
              </span>
              <h3 className="mt-5 font-bold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="py-20 sm:py-24 bg-brand-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            How It Works
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Booking care is simple
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s, i) => (
            <div
              key={s.title}
              className="reveal group relative rounded-3xl bg-white p-7 border border-brand-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="grid place-items-center w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white font-extrabold text-lg shadow-lg shadow-brand-500/30">
                {i + 1}
              </span>
              <h3 className="mt-5 font-bold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              {i < STEPS.length - 1 && (
                <span className="hidden lg:block absolute top-12 -right-3 text-brand-300 z-10">
                  <Icon name="chevron" className="w-6 h-6" />
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="reviews" className="py-20 sm:py-24 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Reviews"
          title="Loved by families we serve"
          sub="Real words from patients and families across Dehradun."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              className="reveal flex flex-col rounded-3xl bg-white p-7 border border-slate-100 shadow-sm"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Icon key={idx} name="star" filled className="w-5 h-5" />
                ))}
              </div>
              <blockquote className="mt-4 text-slate-600 leading-relaxed flex-1">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid place-items-center w-11 h-11 rounded-full bg-brand-100 font-bold text-brand-700">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="font-semibold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.area}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ item, open, onToggle }) {
  return (
    <div className="reveal rounded-2xl bg-white border border-slate-100 overflow-hidden">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-semibold text-slate-900">{item.q}</span>
        <span
          className={`grid place-items-center w-8 h-8 rounded-full bg-brand-50 text-brand-600 shrink-0 transition-transform ${
            open ? "rotate-45" : ""
          }`}
        >
          <Icon name="plus" className="w-4 h-4" />
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-slate-600 leading-relaxed">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

function Faq() {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          sub="Everything you need to know before booking your first visit."
        />
        <div className="space-y-3">
          {FAQS.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              open={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const msg = `Hi, I'm ${data.get("name")}. I need: ${data.get(
      "need"
    )}. Reach me at ${data.get("phone")}.`;
    window.open(
      `https://wa.me/${CONTACT.whatsappRaw}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
    setSent(true);
  };

  const items = [
    { icon: "phone", label: "Phone", value: CONTACT.phone, href: telHref },
    {
      icon: "whatsapp",
      label: "WhatsApp",
      value: CONTACT.whatsapp,
      href: waHref,
      filled: true,
    },
    { icon: "pin", label: "Location", value: CONTACT.location },
  ];

  return (
    <section id="contact" className="py-20 sm:py-24 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10">
        <div className="reveal">
        
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">
            Contact
          </h2>
          <p className="mt-4 text-slate-600">
            Call, WhatsApp to confirm a convenient time.
          </p>

          <div className="mt-8 space-y-4">
            {items.map((it) => {
              const Wrapper = it.href ? "a" : "div";
              return (
                <Wrapper
                  key={it.label}
                  {...(it.href
                    ? { href: it.href, target: it.href.startsWith("http") ? "_blank" : undefined, rel: "noreferrer" }
                    : {})}
                  className="flex items-center gap-4 rounded-2xl bg-white p-4 border border-slate-100 hover:border-brand-200 transition"
                >
                  <span className="grid place-items-center w-12 h-12 rounded-xl bg-brand-50 text-brand-600">
                    <Icon name={it.icon} filled={it.filled} className="w-6 h-6" />
                  </span>
                  <div>
                    <p className="text-sm text-slate-500">{it.label}</p>
                    <p className="font-semibold text-slate-900">{it.value}</p>
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

function Disclaimer() {
  return (
    <section className="bg-amber-50 border-y border-amber-100">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-6 flex items-start gap-3 text-center justify-center">
        <p className="text-sm text-amber-800 leading-relaxed">
          <strong>Please note:</strong> This service provides only basic nursing
          and healthcare support. For emergencies or serious medical conditions,
          please consult a qualified doctor or hospital immediately.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white">
              <Icon name="heart" filled className="w-5 h-5" />
            </span>
            <div className="leading-tight">
              <p className="font-bold text-white">Poornima</p>
              <p className="text-[11px] tracking-wide text-brand-300">
                HOME NURSING CARE
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-400 max-w-xs leading-relaxed">
            Professional Home Nursing Services, Nursing Care at Home and Patient Care
            at Home delivered at your doorstep in {CONTACT.location}.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white">Quick links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-white transition">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Get in touch</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Icon name="phone" className="w-4 h-4 text-brand-400" />
              <a href={telHref} className="hover:text-white">
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="whatsapp" filled className="w-4 h-4 text-brand-400" />
              <a href={waHref} target="_blank" rel="noreferrer" className="hover:text-white">
                {CONTACT.whatsapp}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="pin" className="w-4 h-4 text-brand-400" />
              {CONTACT.location}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 sm:px-6 py-5 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Poornima Home Nursing Care. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={waHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid place-items-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-emerald-500/40 hover:scale-105 transition"
      >
        <Icon name="whatsapp" filled className="w-7 h-7" />
      </a>
      <a
        href={telHref}
        aria-label="Call now"
        className="grid place-items-center w-14 h-14 rounded-full bg-brand-600 text-white shadow-xl shadow-brand-600/40 hover:scale-105 transition"
      >
        <Icon name="phone" className="w-6 h-6" />
      </a>
    </div>
  );
}

function App() {
  useReveal();
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Faq />
        <Contact />
        <Disclaimer />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;
