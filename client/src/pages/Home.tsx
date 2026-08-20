/**
 * Choice Prime — Architectural Precision
 * Editorial Dubai hospitality cues, off-axis layouts, deep navy massing, and sparing Choice Blue structural accents.
 */
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Droplets,
  Hammer,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Wind,
  Wrench,
  X,
} from "lucide-react";
import { FormEvent, useEffect, useState } from "react";

const logoUrl = "/manus-storage/choice-prime-logo_c65599dd.png";
const markUrl = "/manus-storage/choice-prime-mark_b1e7cdae.png";

const services = [
  {
    number: "01",
    title: "Natural floor restoration",
    copy: "Marble, terracotta, concrete, ceramic, granite and limestone restored through deep cleaning, honing, sealing and precision polishing.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Carpet & upholstery cleaning",
    copy: "Deep cleaning, stain removal, protection and care for carpets, sofas, curtains, headboards and tailored soft furnishings.",
    icon: Hammer,
  },
  {
    number: "03",
    title: "Wood restoring & maintenance",
    copy: "Restorative care for furniture, parquet, wood panelling, cladding and yacht parquet, tailored to the material condition.",
    icon: Droplets,
  },
  {
    number: "04",
    title: "Electrical maintenance",
    copy: "Practical electrical maintenance support delivered with careful consideration for active premium interiors.",
    icon: Wind,
  },
  {
    number: "05",
    title: "Floor & wall tiling",
    copy: "Precise tiling installation and finish work for high-value residential, hospitality and commercial environments.",
    icon: Wrench,
  },
  {
    number: "06",
    title: "Air-conditioning care",
    copy: "Installation and maintenance support that keeps residential and commercial spaces fresh, dependable and looked after.",
    icon: ShieldCheck,
  },
  {
    number: "07",
    title: "Plumbing & sanitary",
    copy: "Thoughtful plumbing and sanitary installation support that protects existing finishes and working environments.",
    icon: Droplets,
  },
  {
    number: "08",
    title: "Wallpaper installation",
    copy: "Detail-led wallpaper installation for high-touch interiors where alignment, finish and quiet craftsmanship matter.",
    icon: Hammer,
  },
];

const projects = [
  {
    client: "Armani Residences",
    category: "Private residence care",
    title: "Luxury care for surfaces you live with every day.",
    copy: "A considered cleaning and maintenance approach for refined interiors, from carpets and upholstery to high-value stone, leather and architectural finishes.",
    image: "/manus-storage/profile-000_298a1df8.jpg",
    materials: "Stone · leather · textile",
    treatment: "Restoration, conditioning & detail cleaning",
    outcome: "A residence prepared for everyday living and considered hosting.",
  },
  {
    client: "Starbucks Coffee",
    category: "Hospitality cleaning",
    title: "A polished guest experience, from opening to close.",
    copy: "Leather and fabric sofa cleaning, stain removal and detail care for high-traffic hospitality spaces with no compromise on the guest-facing finish.",
    image: "/manus-storage/profile-002_3e10afbf.jpg",
    materials: "Upholstery · timber · hard flooring",
    treatment: "Deep cleaning & high-traffic stain care",
    outcome: "A guest-facing finish with a consistently considered feel.",
  },
  {
    client: "Azimut Yachts",
    category: "Yacht interiors",
    title: "Luxury care for materials exposed to the sea.",
    copy: "Carpet, wood, sofas and beds cleaning, stain removal, and wooden floor restoration tailored to exceptional yacht interiors.",
    image: "/manus-storage/choice-prime-yacht_a1faf3f6.jpg",
    materials: "Teak · leather · chrome",
    treatment: "Marine-safe care & wood restoration",
    outcome: "A calmer, clearer interior finish ready for time on the water.",
  },
];

const navItems = [
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const clientShowcase = [
  ["Burj Khalifa", "Dubai landmark reference"],
  ["Emaar Properties", "Property-care project reference"],
  ["Alshaya Group", "Commercial finish-care reference"],
  ["ALEC Building Excellence", "Technical & finishing reference"],
  ["Address Hotels + Resorts", "Teakwood stone & carpet stain care"],
  ["Armani Residences", "Leather, stone, timber & wall-finish care"],
  ["Starbucks Coffee", "Leather & fabric upholstery cleaning"],
  ["Azimut Yachts", "Carpets, wood and interior restoration"],
  ["Schindler", "Office upholstery & wall stain care"],
  ["Chelsea Tower Hotel Apartments", "Porcelain, marble, oak & chrome care"],
  ["Louvre Abu Dhabi Tour", "Project reference"],
  ["Expo 2020 Dubai", "Project reference"],
  ["Ibis Styles", "Hospitality project reference"],
  ["Ramada Plaza", "Hospitality project reference"],
  ["Sun Group", "Project reference"],
];

const qualityPartners = ["Akemi", "Bosch", "DeWalt", "Fila", "Diversey", "Kärcher", "Makita", "Flex Power Tools"];

const heroSlides = [
  {
    image: "/manus-storage/profile-000_298a1df8.jpg",
    alt: "Luxury Dubai residence from the Choice Prime company profile",
    label: "Private residence care",
  },
  {
    image: "/manus-storage/profile-002_3e10afbf.jpg",
    alt: "Luxury hospitality interior from the Choice Prime company profile",
    label: "Hospitality cleaning",
  },
  {
    image: "/manus-storage/profile-003_f4d3f54b.jpg",
    alt: "Luxury yacht from the Choice Prime company profile",
    label: "Yacht interior care",
  },
  {
    image: "/manus-storage/profile-005_4af6819d.jpg",
    alt: "Dubai commercial skyline from the Choice Prime company profile",
    label: "Commercial spaces · Dubai",
  },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveHeroSlide((current) => (current + 1) % heroSlides.length);
    }, 6200);
    return () => window.clearInterval(interval);
  }, []);

  const project = projects[activeProject];

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    toast.success("Consultation request noted", {
      description: "This prototype has recorded your request. Choice Prime can respond with the next steps.",
    });
  }

  return (
    <div className="min-h-screen overflow-x-clip bg-[#F0EBE0] text-[#14172B] selection:bg-[#B8935F] selection:text-white">
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "border-b border-white/10 bg-[#091631]/95 shadow-[0_8px_30px_rgba(3,12,34,0.22)] backdrop-blur-xl" : "bg-[#0B1938]"
        }`}
      >
        <div className="container flex h-[78px] items-center justify-between gap-6 lg:h-[88px]">
          <button
            className="group flex items-center gap-3 text-left"
            onClick={() => scrollToSection("top")}
            aria-label="Back to top"
          >
            <span className="flex h-14 w-[104px] shrink-0 items-center justify-center border border-white/50 bg-white p-1 shadow-[6px_6px_0_rgba(46,111,234,0.4)] transition-transform duration-300 group-hover:-translate-y-0.5 sm:h-16 sm:w-[118px]">
              <img src={logoUrl} alt="Choice Prime Technical & Cleaning Services" className="h-full w-full object-contain" />
            </span>
          </button>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/75 transition-colors hover:text-white after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#5B94FF] after:transition-all hover:after:w-full"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a href="tel:+971552293600" className="text-sm font-semibold text-white transition-colors hover:text-[#82AEFF]">
              +971 55 229 3600
            </a>
            <Button
              onClick={() => scrollToSection("contact")}
              className="h-11 rounded-none bg-[#2E6FEA] px-5 text-xs font-bold uppercase tracking-[0.13em] text-white shadow-none transition-transform hover:bg-[#4A82E9] active:scale-[0.97]"
            >
              Request a quote <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded border border-white/20 text-white lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#0B1938] px-4 py-5 shadow-2xl lg:hidden">
            <nav className="mx-auto flex max-w-xl flex-col" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setMenuOpen(false);
                    scrollToSection(item.id);
                  }}
                  className="flex items-center justify-between border-b border-white/10 py-4 text-left text-sm font-bold uppercase tracking-[0.12em] text-white"
                >
                  {item.label} <ArrowUpRight className="h-4 w-4 text-[#5B94FF]" />
                </button>
              ))}
              <a href="tel:+971552293600" className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#BBD1FF]">
                <Phone className="h-4 w-4" /> +971 55 229 3600
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section id="top" className="relative isolate overflow-hidden bg-[#07142F]">
          <div className="absolute inset-0 -z-20" aria-live="polite">
            {heroSlides.map((slide, index) => (
              <img
                key={slide.image}
                src={slide.image}
                alt={slide.alt}
                className={`hero-slide absolute inset-0 h-full w-full object-cover object-center ${index === activeHeroSlide ? "hero-slide-active" : ""}`}
              />
            ))}
          </div>
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(6,18,47,0.98)_0%,rgba(7,20,47,0.9)_45%,rgba(7,20,47,0.58)_73%,rgba(7,20,47,0.48)_100%)]" />
          <div className="hero-grain absolute inset-0 -z-10 opacity-45" />
          <div className="absolute -bottom-28 left-[46%] h-64 w-64 rounded-full bg-[#B8935F]/15 blur-3xl" />
          <div className="container flex min-h-[630px] flex-col justify-between py-16 sm:min-h-[670px] sm:py-20 lg:min-h-[730px] lg:py-24">
            <div className="max-w-3xl pt-6 lg:pt-12">
              <div className="animate-rise flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#A9C6FF]">
                <span className="h-px w-11 bg-[#B8935F]" />
                {heroSlides[activeHeroSlide].label}
              </div>
              <h1 className="animate-rise animation-delay-100 mt-7 max-w-2xl font-[DM_Serif_Display] text-5xl leading-[0.96] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl lg:text-[82px]">
                Precision restoration.<br /><span className="text-[#F0EBE0]">Trusted by Dubai’s finest.</span>
              </h1>
              <p className="animate-rise animation-delay-200 mt-6 max-w-lg text-sm leading-6 text-white/70 sm:text-base">
                20+ years restoring marble, wood and fine surfaces across the UAE and Europe for exceptional properties.
              </p>
              <div className="animate-rise animation-delay-300 mt-8 flex flex-wrap gap-3">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="h-13 rounded-none bg-[#2E6FEA] px-6 text-xs font-extrabold uppercase tracking-[0.15em] text-white shadow-[0_12px_30px_rgba(23,82,191,0.28)] transition-transform hover:bg-[#4A82E9] active:scale-[0.97]"
                >
                  Request a quote <ArrowRight className="ml-2.5 h-4 w-4" />
                </Button>
                <Button variant="outline" onClick={() => scrollToSection("services")} className="h-13 rounded-none border-[#B8935F]/85 bg-[#07142F]/10 px-6 text-xs font-bold uppercase tracking-[0.15em] text-[#F0EBE0] backdrop-blur-sm transition-transform hover:border-[#F0EBE0] hover:bg-white/10 hover:text-white active:scale-[0.97]">Our services <ArrowDownRight className="ml-2.5 h-4 w-4" /></Button>
              </div>
            </div>

            <div className="animate-rise animation-delay-300 flex flex-col justify-between gap-6 border-t border-white/20 pt-6 sm:flex-row sm:items-end sm:pt-8">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/45">Material library</p>
                <div className="mt-3 flex flex-wrap gap-x-3 gap-y-2">
                  {[["Marble", "swatch-marble"], ["Wood", "swatch-wood"], ["Stone", "swatch-stone"], ["Brass", "swatch-brass"]].map(([label, style]) => <span key={label} className="group flex items-center gap-2"><span className={`h-4 w-4 border border-white/30 ${style}`} /><span className="text-[8px] font-bold uppercase tracking-[0.13em] text-white/55 group-hover:text-white">{label}</span></span>)}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveHeroSlide((current) => (current - 1 + heroSlides.length) % heroSlides.length)}
                  className="flex h-9 w-9 items-center justify-center border border-white/25 bg-[#07142F]/25 text-white transition-colors hover:border-[#82AEFF] hover:bg-[#2E6FEA]"
                  aria-label="Previous hero slide"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <div className="flex items-center gap-1.5" aria-label="Hero slides">
                  {heroSlides.map((slide, index) => (
                    <button
                      key={slide.label}
                      onClick={() => setActiveHeroSlide(index)}
                      aria-label={`Show ${slide.label}`}
                      aria-current={index === activeHeroSlide ? "true" : undefined}
                      className={`h-1.5 transition-all duration-300 ${index === activeHeroSlide ? "w-7 bg-[#82AEFF]" : "w-2 bg-white/40 hover:bg-white/80"}`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setActiveHeroSlide((current) => (current + 1) % heroSlides.length)}
                  className="flex h-9 w-9 items-center justify-center border border-white/25 bg-[#07142F]/25 text-white transition-colors hover:border-[#82AEFF] hover:bg-[#2E6FEA]"
                  aria-label="Next hero slide"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about-sanctuary relative overflow-hidden bg-[#F3EFE7] py-24 text-[#191C2F] sm:py-32 lg:py-40">
          <div className="absolute inset-x-0 top-0 h-1 bg-[#2E6FEA]" />
          <div className="container relative">
            <div className="grid gap-8 lg:grid-cols-[0.48fr_1.52fr] lg:items-end lg:gap-16">
              <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.21em] text-[#2E6FEA]"><span className="h-px w-11 bg-[#2E6FEA]" />About Choice Prime</div>
              <div>
                <h2 className="max-w-5xl font-[DM_Serif_Display] text-5xl leading-[0.96] tracking-[-0.05em] sm:text-6xl lg:text-7xl">We restore the feeling that <span className="text-[#5E5141]">nothing</span> was ever out of place.</h2>
                <p className="mt-6 max-w-2xl text-[15px] leading-7 text-[#6B655D]">For properties where material, atmosphere and first impression are all part of the asset, Choice Prime brings a hospitality-grade eye to cleaning, restoration and technical care.</p>
              </div>
            </div>

            <div className="mt-14 grid gap-8 lg:mt-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
              <figure className="about-portrait group relative min-h-[520px] overflow-hidden bg-[#191C2F] lg:min-h-[640px]">
                <img src="/manus-storage/profile-023_93412550.jpg" alt="Refined leather, timber and textile interior from the Choice Prime company profile" className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.035]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(25,28,47,0.04),rgba(25,28,47,0.64))]" />
                <div className="absolute left-7 top-7 flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.19em] text-white/80"><span className="h-px w-8 bg-[#B8935F]" />Material portrait</div>
                <figcaption className="absolute inset-x-0 bottom-0 p-7 sm:p-9"><p className="max-w-md font-[DM_Serif_Display] text-3xl leading-[1.03] tracking-[-0.025em] text-white sm:text-4xl">Leather, timber, textile and chrome—cared for on their own terms.</p></figcaption>
              </figure>

              <div className="flex flex-col justify-between py-2 lg:py-8">
                <div>
                  <div className="flex items-end gap-5 border-b border-[#191C2F]/15 pb-7">
                    <span className="font-[DM_Serif_Display] text-7xl leading-none tracking-[-0.07em] text-[#B8935F] sm:text-8xl">20+</span>
                    <span className="mb-1 max-w-[140px] text-[9px] font-bold uppercase leading-4 tracking-[0.18em] text-[#776B5A]">Years of specialist leadership</span>
                  </div>
                  <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.2em] text-[#2E6FEA]">The considered approach</p>
                  <h3 className="mt-4 max-w-md font-[DM_Serif_Display] text-4xl leading-[1.01] tracking-[-0.035em] sm:text-5xl">Not a cleaning service. A standard of care.</h3>
                  <p className="mt-6 max-w-md text-[15px] leading-7 text-[#625D55]">We work inside residences, hotels, offices and yachts where the finish is not a final layer—it is the experience itself. Every treatment begins with the condition of the material and ends with how the room feels.</p>
                  <div className="mt-8 space-y-4 border-t border-[#191C2F]/15 pt-6">
                    {[["Assess", "Read the condition, context and material."], ["Treat", "Apply the right specialist method, without shortcuts."], ["Present", "Return a space ready for the people who notice everything."]].map(([title, copy], index) => <div key={title} className="grid grid-cols-[32px_1fr] gap-4"><span className="font-[DM_Serif_Display] text-xl text-[#B8935F]">0{index + 1}</span><p className="text-sm leading-6 text-[#625D55]"><strong className="font-bold text-[#191C2F]">{title}.</strong> {copy}</p></div>)}
                  </div>
                </div>
                <Button variant="outline" onClick={() => scrollToSection("contact")} className="mt-10 h-11 w-fit rounded-none border-[#191C2F]/30 bg-transparent px-5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#191C2F] transition-all hover:border-[#2E6FEA] hover:bg-[#2E6FEA] hover:text-white">Talk to a specialist <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </div>
            </div>

            <div className="mt-12 grid border-l border-t border-[#191C2F]/15 sm:grid-cols-4">
              {[["25+", "Trained professionals"], ["24/7", "Availability across Dubai"], ["2", "UAE & Europe experience"], ["4", "Material families in focus"]].map(([value, label]) => <div key={label} className="about-stat-cell relative min-h-[138px] border-b border-r border-[#191C2F]/15 bg-[#F8F4EC]/65 p-6"><span className="absolute left-0 top-0 h-full w-1 bg-[#2E6FEA] opacity-0 transition-opacity duration-300 hover:opacity-100" /><p className="font-[DM_Serif_Display] text-4xl text-[#191C2F]">{value}</p><p className="mt-3 max-w-[130px] text-[9px] font-bold uppercase leading-4 tracking-[0.15em] text-[#766F64]">{label}</p></div>)}
            </div>
          </div>
        </section>

        <section id="services" className="service-cards-shell relative overflow-hidden bg-[#E9EEF5] pb-12 pt-24 text-[#191C2F] sm:pb-16 sm:pt-32 lg:pb-20 lg:pt-40">
          <div className="absolute right-0 top-0 h-56 w-[28%] bg-[#DDE6F1]" />
          <div className="container relative">
            <div className="grid gap-8 lg:grid-cols-[0.5fr_1.5fr] lg:items-end lg:gap-16">
              <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.21em] text-[#2E6FEA]"><span className="h-px w-11 bg-[#2E6FEA]" />Service portfolio</div>
              <div>
                <h2 className="max-w-4xl font-[DM_Serif_Display] text-5xl leading-[0.96] tracking-[-0.05em] sm:text-6xl lg:text-7xl">Specialist services, <span className="text-[#59687B]">presented with clarity.</span></h2>
                <p className="mt-6 max-w-2xl text-[15px] leading-7 text-[#667181]">Eight considered disciplines for premium properties—restoration, technical care and finish work, each guided by the material and operating environment.</p>
              </div>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <article key={service.number} className={`service-card-premium group relative min-h-[266px] overflow-hidden bg-[#FCFCFB] p-6 shadow-[0_12px_28px_rgba(17,32,60,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(17,32,60,0.13)] sm:p-7 ${index === 0 ? "service-card-feature lg:col-span-2 lg:row-span-2 lg:min-h-[548px]" : ""} ${index === 7 ? "lg:col-span-2" : ""}`}>
                    {index === 0 && <><img src="/manus-storage/choice-prime-marble_015db032.jpg" alt="Polished natural stone detail" className="absolute inset-0 h-full w-full object-cover opacity-25 transition-transform duration-700 group-hover:scale-[1.04]" /><div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(14,27,57,0.96),rgba(14,27,57,0.68))]" /></>}
                    <div className={`absolute right-0 top-0 h-16 w-16 border-b border-l transition-all duration-300 group-hover:h-20 group-hover:w-20 ${index === 0 ? "border-[#B8935F]/60" : "border-[#2E6FEA]/15 group-hover:border-[#2E6FEA]/60"}`} />
                    <div className="flex items-start justify-between">
                      <span className={`relative z-10 font-[DM_Serif_Display] text-2xl ${index === 0 ? "text-[#E5CDA8]" : "text-[#2E6FEA]"}`}>{service.number}</span>
                      <Icon className={`relative z-10 h-5 w-5 transition-colors duration-300 ${index === 0 ? "text-[#E5CDA8]/75 group-hover:text-[#E5CDA8]" : "text-[#77879C] group-hover:text-[#2E6FEA]"}`} />
                    </div>
                    <span className={`relative z-10 mt-10 block text-[9px] font-bold uppercase tracking-[0.18em] ${index === 0 ? "text-[#E5CDA8]/80" : "text-[#8A96A8]"}`}>{index < 3 ? "Material care" : "Technical scope"}</span>
                    <h3 className={`relative z-10 mt-3 max-w-[320px] font-[DM_Serif_Display] text-2xl leading-[1.02] tracking-[-0.025em] ${index === 0 ? "text-4xl text-white sm:text-5xl" : "text-[#191C2F]"}`}>{service.title}</h3>
                    <p className={`relative z-10 mt-4 max-w-[330px] text-[12px] leading-5 ${index === 0 ? "text-white/72" : "text-[#6D7787]"}`}>{service.copy}</p>
                    <button onClick={() => scrollToSection("contact")} className={`relative z-10 mt-6 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.16em] transition-colors ${index === 0 ? "text-[#E5CDA8] hover:text-white" : "text-[#2E6FEA] hover:text-[#191C2F]"}`}>Discuss this service <ArrowUpRight className="h-3.5 w-3.5" /></button>
                    <span className={`absolute bottom-0 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full ${index === 0 ? "bg-[#B8935F]" : "bg-[#2E6FEA]"}`} />
                  </article>
                );
              })}
            </div>

            <div className="mt-10 flex flex-col justify-between gap-6 border-t border-[#191C2F]/15 pt-7 sm:flex-row sm:items-center">
              <p className="max-w-xl font-[DM_Serif_Display] text-2xl leading-[1.15] text-[#191C2F] sm:text-3xl">A service scope that feels considered from first inspection to final finish.</p>
              <Button onClick={() => scrollToSection("contact")} className="h-11 shrink-0 rounded-none bg-[#2E6FEA] px-5 text-[10px] font-bold uppercase tracking-[0.15em] text-white hover:bg-[#4A82E9]">Plan your service scope <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </div>
          </div>
        </section>

        <section className="relative -mt-px overflow-hidden bg-[#E9EEF6] pb-16 pt-10 sm:pb-20 sm:pt-12">
          <div className="material-vein absolute inset-x-0 top-0 h-full opacity-70" />
          <div className="container grid gap-10 lg:grid-cols-[1.03fr_0.97fr] lg:items-center">
            <div className="clip-architectural material-panel relative overflow-hidden bg-[#1A2A4A] p-8 text-white shadow-[12px_14px_0_rgba(46,111,234,0.28)] sm:p-11">
              <img src={markUrl} alt="" className="absolute -right-10 -top-10 h-48 w-48 object-contain opacity-15 grayscale brightness-200 sm:h-64 sm:w-64" />
              <div className="absolute bottom-0 left-0 h-2/3 w-1 bg-[#2E6FEA]" />
              <p className="relative text-[10px] font-bold uppercase tracking-[0.2em] text-[#A9C6FF]">Our cleaning philosophy</p>
              <h2 className="relative mt-4 max-w-lg font-[DM_Serif_Display] text-3xl leading-[1.05] tracking-[-0.03em] sm:text-4xl">
                Cleaning as a considered craft.
              </h2>
              <p className="relative mt-4 max-w-md text-sm leading-6 text-white/65">From first inspection to final finish, every treatment is selected to respect the materials, the people using the space and the impression it leaves behind.</p>
              <Button onClick={() => scrollToSection("contact")} className="relative mt-7 h-11 rounded-[3px] bg-[#2E6FEA] px-5 text-[10px] font-bold uppercase tracking-[0.14em] text-white hover:bg-[#4A82E9]">Arrange a site assessment <ArrowRight className="ml-2 h-3.5 w-3.5" /></Button>
            </div>
            <div className="grid gap-5 sm:grid-cols-3 lg:gap-4">
              {[
                ["Trusted products", "We match materials with products and methods we would use in our own spaces."],
                ["Discreet delivery", "Our teams protect the pace, privacy and finish of active, high-profile properties."],
                ["Accountable care", "Clear scope, trained hands and a quality-first standard at every stage."],
              ].map(([title, copy]) => (
                <div key={title} className="border-l-2 border-[#2E6FEA] pl-4">
                  <h3 className="text-sm font-bold text-[#14213D]">{title}</h3>
                  <p className="mt-2 text-[13px] leading-5 text-[#5D6980]">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="material-study relative overflow-hidden bg-[#F7F8FA] py-20 sm:py-28 lg:py-36">
          <div className="absolute -left-20 top-20 hidden h-72 w-72 rounded-full border border-[#2E6FEA]/15 lg:block" />
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
              <div>
                <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#2E6FEA]">
                  <span className="h-px w-11 bg-[#2E6FEA]" />
                  Selected project dossiers
                </div>
                <h2 className="mt-5 max-w-sm font-[DM_Serif_Display] text-4xl leading-[1.04] tracking-[-0.035em] text-[#101E3E] sm:text-5xl">
                  Trusted in the spaces Dubai remembers.
                </h2>
                <p className="mt-5 max-w-sm text-[15px] leading-7 text-[#526075]">
                  A selection of cleaning, restoration and maintenance work delivered across residences, hospitality, commercial and yacht environments.
                </p>
                <div className="mt-9 divide-y divide-[#14213D]/15 border-y border-[#14213D]/15 bg-white/35">
                  {projects.map((item, index) => (
                    <button
                      key={item.client}
                      onClick={() => setActiveProject(index)}
                      className={`group flex w-full items-center justify-between gap-4 py-5 text-left transition-colors ${activeProject === index ? "text-[#2E6FEA]" : "text-[#14213D]"}`}
                    >
                      <span>
                        <span className="block text-[10px] font-bold uppercase tracking-[0.15em] text-[#7A8599]">{item.category}</span>
                        <span className="mt-1 block text-sm font-bold">{item.client}</span>
                      </span>
                      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all ${activeProject === index ? "border-[#2E6FEA] bg-[#2E6FEA] text-white" : "border-[#14213D]/25 text-[#14213D] group-hover:border-[#2E6FEA] group-hover:text-[#2E6FEA]"}`}>
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <article className="clip-architectural group relative min-h-[470px] overflow-hidden bg-[#0B1938] shadow-[14px_16px_0_rgba(46,111,234,0.22)] sm:min-h-[590px]">
                <img src={project.image} alt={project.client} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06152F] via-[#07162E]/35 to-transparent" />
                <div className="absolute left-0 top-0 h-1 w-24 bg-[#2E6FEA]" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-10 lg:p-12">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A9C6FF]">{project.category}</p>
                  <h3 className="mt-3 max-w-xl font-[DM_Serif_Display] text-3xl leading-[1.05] tracking-[-0.025em] sm:text-4xl lg:text-5xl">{project.title}</h3>
                  <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75 sm:text-[15px]">{project.copy}</p>
                  <div className="mt-7 flex items-center gap-4 border-t border-white/20 pt-5">
                    <span className="text-sm font-bold">{project.client}</span>
                    <span className="h-px w-8 bg-[#5B94FF]" />
                    <button onClick={() => scrollToSection("contact")} className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#A9C6FF] hover:text-white">Talk about a similar project</button>
                  </div>
                  <div className="project-dossier mt-5 grid border-t border-white/15 pt-5 sm:grid-cols-3">
                    {[["Material focus", project.materials], ["Treatment", project.treatment], ["Result", project.outcome]].map(([label, value], index) => (
                      <div key={label} className={`py-3 text-left sm:px-4 sm:py-0 sm:first:pl-0 ${index < 2 ? "sm:border-r sm:border-white/15" : ""}`}>
                        <span className="block text-[8px] font-bold uppercase tracking-[0.16em] text-[#A9C6FF]/70">{label}</span>
                        <span className="mt-1.5 block text-[11px] leading-5 text-white/78">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="testimonials" className="client-portfolio-panel relative overflow-hidden bg-[#E9EEF5] py-24 text-[#191C2F] sm:py-32">
          <div className="absolute right-0 top-0 h-48 w-[32%] bg-[#DDE6F1]" />
          <div className="container relative">
            <div className="grid gap-8 lg:grid-cols-[0.5fr_1.5fr] lg:items-end lg:gap-16">
              <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.21em] text-[#2E6FEA]"><span className="h-px w-11 bg-[#2E6FEA]" />Selected client portfolio</div>
              <div>
                <h2 className="max-w-4xl font-[DM_Serif_Display] text-5xl leading-[0.96] tracking-[-0.05em] sm:text-6xl lg:text-7xl">References that speak to <span className="text-[#59687B]">the standard we protect.</span></h2>
                <p className="mt-6 max-w-2xl text-[15px] leading-7 text-[#667181]">A factual selection of hospitality, commercial, residential, cultural and yacht environments referenced in Choice Prime’s company profile.</p>
              </div>
            </div>

            <div className="mt-14 grid gap-5 lg:mt-20 lg:grid-cols-[0.78fr_1.22fr] lg:gap-7">
              <aside className="client-primer group relative min-h-[410px] overflow-hidden bg-[#191C2F] p-7 text-white sm:p-9 lg:min-h-[610px]">
                <img src="/manus-storage/profile-002_3e10afbf.jpg" alt="Premium hospitality interior from the Choice Prime company profile" className="absolute inset-0 h-full w-full object-cover opacity-35 transition-transform duration-700 group-hover:scale-[1.035]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(25,28,47,0.45),rgba(25,28,47,0.95))]" />
                <div className="relative flex h-full flex-col justify-between">
                  <div>
                    <span className="inline-flex border border-[#B8935F]/60 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.17em] text-[#E5CDA8]">Portfolio archive</span>
                    <p className="mt-9 font-[DM_Serif_Display] text-4xl leading-[0.98] tracking-[-0.035em] sm:text-5xl">Trusted where the finish is part of the experience.</p>
                    <p className="mt-6 max-w-sm text-sm leading-6 text-white/68">From landmark residences to guest-facing hospitality and technical commercial environments, we work with discretion and surface-specific care.</p>
                  </div>
                  <div className="border-t border-white/20 pt-6">
                    <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-white/45">Reference environments</p>
                    <div className="mt-4 flex flex-wrap gap-2">{["Residence", "Hospitality", "Commercial", "Yacht"].map((item) => <span key={item} className="border border-white/15 px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-white/75">{item}</span>)}</div>
                  </div>
                </div>
                <div className="absolute right-0 top-0 h-20 w-20 border-b border-l border-[#B8935F]/60" />
              </aside>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {clientShowcase.map(([client, note], index) => (
                  <article key={client} className={`client-reference-card group relative min-h-[165px] overflow-hidden bg-[#FCFCFB] p-5 shadow-[0_10px_24px_rgba(17,32,60,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(17,32,60,0.12)] sm:p-6 ${index === 0 ? "sm:col-span-2 lg:col-span-2" : ""}`}>
                    <div className="absolute right-0 top-0 h-12 w-12 border-b border-l border-[#2E6FEA]/15 transition-all duration-300 group-hover:h-16 group-hover:w-16 group-hover:border-[#2E6FEA]/60" />
                    <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#2E6FEA]">{String(index + 1).padStart(2, "0")}</span>
                    <h3 className={`mt-6 font-[DM_Serif_Display] leading-[1.03] tracking-[-0.02em] text-[#191C2F] ${index === 0 ? "text-3xl sm:text-4xl" : "text-xl"}`}>{client}</h3>
                    <p className="mt-3 text-[11px] leading-5 text-[#717B8B]">{note}</p>
                    <span className="absolute bottom-0 left-0 h-1 w-0 bg-[#2E6FEA] transition-all duration-300 group-hover:w-full" />
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col justify-between gap-5 border-t border-[#191C2F]/15 pt-7 sm:flex-row sm:items-center">
              <p className="max-w-2xl text-[12px] leading-5 text-[#667181]">Project details and relevant references can be discussed confidentially, according to the operating environment and service scope.</p>
              <Button variant="outline" onClick={() => scrollToSection("contact")} className="h-11 shrink-0 rounded-none border-[#2E6FEA] bg-transparent px-5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#191C2F] hover:bg-[#2E6FEA] hover:text-white">Request relevant references <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </div>
          </div>
        </section>

        <section className="quality-protocol relative overflow-hidden bg-[#14172B] py-24 text-white sm:py-32">
          <div className="absolute inset-x-0 top-0 h-1 bg-[#2E6FEA]" />
          <div className="container relative">
            <div className="grid gap-8 border-b border-white/15 pb-10 lg:grid-cols-[0.48fr_1.52fr] lg:items-end lg:gap-16">
              <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.21em] text-[#A9C6FF]"><span className="h-px w-11 bg-[#2E6FEA]" />Commitment to quality</div>
              <div><h2 className="max-w-4xl font-[DM_Serif_Display] text-5xl leading-[0.94] tracking-[-0.05em] sm:text-6xl lg:text-7xl">The standard is set <span className="text-[#A9C6FF]">before</span> the first treatment begins.</h2><p className="mt-6 max-w-2xl text-[15px] leading-7 text-white/62">A clear protocol guides every choice: the surface, the setting, the product and the finish we are trusted to protect.</p></div>
            </div>
            <div className="grid border-l border-t border-white/15 sm:grid-cols-3">
              {[["01", "Specify", "We match the method to the material, condition and property environment."], ["02", "Execute", "Trained hands, trusted professional products and a discreet operating rhythm."], ["03", "Verify", "A quality-first final review before the space is returned to its everyday life."]].map(([number, title, copy]) => <article key={number} className="quality-protocol-step relative min-h-[245px] border-b border-r border-white/15 p-7 sm:p-8"><span className="font-[DM_Serif_Display] text-3xl text-[#A9C6FF]">{number}</span><h3 className="mt-12 font-[DM_Serif_Display] text-3xl leading-none">{title}</h3><p className="mt-4 max-w-xs text-[13px] leading-6 text-white/62">{copy}</p><span className="absolute bottom-0 left-0 h-1 w-0 bg-[#2E6FEA] transition-all duration-300 hover:w-full" /></article>)}
            </div>
            <div className="mt-8 flex flex-col gap-4 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between"><p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/45">Trusted specialist material partners</p><div className="flex flex-wrap gap-x-5 gap-y-2">{qualityPartners.map((partner) => <span key={partner} className="text-xs font-bold tracking-[0.04em] text-white/62">{partner}</span>)}</div></div>
          </div>
        </section>

        <section id="contact" className="contact-studio relative overflow-hidden bg-[#E9EEF5] py-24 text-[#191C2F] sm:py-32">
          <div className="absolute right-0 top-0 h-52 w-[30%] bg-[#DDE6F1]" />
          <div className="container relative">
            <div className="grid gap-8 lg:grid-cols-[0.48fr_1.52fr] lg:items-end lg:gap-16">
              <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.21em] text-[#2E6FEA]"><span className="h-px w-11 bg-[#2E6FEA]" />Start a conversation</div>
              <div><h2 className="max-w-4xl font-[DM_Serif_Display] text-5xl leading-[0.96] tracking-[-0.05em] sm:text-6xl lg:text-7xl">Let’s define the standard <span className="text-[#59687B]">your property requires.</span></h2><p className="mt-6 max-w-2xl text-[15px] leading-7 text-[#667181]">Share the space, material or technical requirement. We will return with a considered route forward.</p></div>
            </div>
            <div className="mt-14 grid gap-5 lg:mt-20 lg:grid-cols-[0.68fr_1.32fr] lg:gap-7">
              <aside className="contact-brief relative overflow-hidden bg-[#191C2F] p-7 text-white sm:p-9">
                <div className="absolute right-0 top-0 h-20 w-20 border-b border-l border-[#82AEFF]/35" />
                <p className="text-[9px] font-bold uppercase tracking-[0.19em] text-[#A9C6FF]">Direct briefing</p>
                <p className="mt-6 max-w-sm font-[DM_Serif_Display] text-4xl leading-[0.98] tracking-[-0.035em]">The first conversation is where the detail starts.</p>
                <div className="mt-10 space-y-5 border-t border-white/15 pt-6">
                  <a href="tel:+971552293600" className="group flex items-start justify-between gap-4"><span><span className="block text-[9px] font-bold uppercase tracking-[0.16em] text-white/45">Call</span><span className="mt-1 block text-sm font-semibold text-white">+971 55 229 3600</span></span><Phone className="mt-1 h-4 w-4 text-[#A9C6FF] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
                  <a href="mailto:info@choiceprime.pro" className="group flex items-start justify-between gap-4"><span><span className="block text-[9px] font-bold uppercase tracking-[0.16em] text-white/45">Email</span><span className="mt-1 block text-sm font-semibold text-white">info@choiceprime.pro</span></span><ArrowUpRight className="mt-1 h-4 w-4 text-[#A9C6FF] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
                  <div><span className="block text-[9px] font-bold uppercase tracking-[0.16em] text-white/45">Visit</span><span className="mt-1 block text-sm leading-6 text-white/80">Aspin Commercial Tower 302<br />Sheikh Zayed Road, Dubai</span></div>
                </div>
                <a href="https://wa.me/971552293600" target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-2 border border-[#2E6FEA]/75 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-[#A9C6FF] transition-colors hover:bg-[#2E6FEA] hover:text-white">WhatsApp Choice Prime <ArrowUpRight className="h-3.5 w-3.5" /></a>
              </aside>
              <form onSubmit={handleContactSubmit} className="contact-form-surface relative bg-[#FCFCFB] p-6 shadow-[14px_16px_0_rgba(46,111,234,0.18)] sm:p-9 lg:p-10">
                <div className="absolute right-0 top-0 h-20 w-20 border-b border-l border-[#2E6FEA]/25" />
                <p className="text-[9px] font-bold uppercase tracking-[0.19em] text-[#2E6FEA]">Project enquiry</p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <label className="block text-xs font-bold uppercase tracking-[0.13em] text-[#657185]">Your name<input required name="name" placeholder="Name" className="mt-3 h-12 w-full border-b border-[#191C2F]/20 bg-transparent text-base font-medium text-[#191C2F] outline-none transition-colors placeholder:text-[#9AA3B0] focus:border-[#2E6FEA]" /></label>
                  <label className="block text-xs font-bold uppercase tracking-[0.13em] text-[#657185]">Company<input required name="company" placeholder="Company" className="mt-3 h-12 w-full border-b border-[#191C2F]/20 bg-transparent text-base font-medium text-[#191C2F] outline-none transition-colors placeholder:text-[#9AA3B0] focus:border-[#2E6FEA]" /></label>
                  <label className="block text-xs font-bold uppercase tracking-[0.13em] text-[#657185]">Email<input required type="email" name="email" placeholder="name@company.com" className="mt-3 h-12 w-full border-b border-[#191C2F]/20 bg-transparent text-base font-medium text-[#191C2F] outline-none transition-colors placeholder:text-[#9AA3B0] focus:border-[#2E6FEA]" /></label>
                  <label className="block text-xs font-bold uppercase tracking-[0.13em] text-[#657185]">Phone<input name="phone" placeholder="+971" className="mt-3 h-12 w-full border-b border-[#191C2F]/20 bg-transparent text-base font-medium text-[#191C2F] outline-none transition-colors placeholder:text-[#9AA3B0] focus:border-[#2E6FEA]" /></label>
                </div>
                <label className="mt-7 block text-xs font-bold uppercase tracking-[0.13em] text-[#657185]">Service interested in<select required name="service" defaultValue="" className="mt-3 h-12 w-full border-b border-[#191C2F]/20 bg-transparent text-sm font-medium text-[#191C2F] outline-none transition-colors focus:border-[#2E6FEA]"><option value="" disabled>Select a service</option>{services.map((service) => <option key={service.number} value={service.title}>{service.title}</option>)}</select></label>
                <label className="mt-7 block text-xs font-bold uppercase tracking-[0.13em] text-[#657185]">Project brief<textarea required name="message" rows={4} placeholder="Property type, location, material or technical scope..." className="mt-3 w-full resize-none border-b border-[#191C2F]/20 bg-transparent py-3 text-base font-medium leading-6 text-[#191C2F] outline-none transition-colors placeholder:text-[#9AA3B0] focus:border-[#2E6FEA]" /></label>
                <div className="mt-8 flex flex-col justify-between gap-4 border-t border-[#191C2F]/10 pt-6 sm:flex-row sm:items-center"><p className="max-w-xs text-[11px] leading-5 text-[#788497]">A private, no-obligation conversation for the finishes and environments you need to protect.</p><Button type="submit" className="h-12 shrink-0 rounded-none bg-[#2E6FEA] px-5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-none hover:bg-[#4A82E9]">Request a quote <ArrowRight className="ml-2 h-4 w-4" /></Button></div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#07142F] text-white">
        <div className="container grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_0.9fr_0.8fr] lg:py-16">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="flex h-[76px] w-[126px] items-center justify-center border border-white/50 bg-white p-1.5 shadow-[6px_6px_0_rgba(46,111,234,0.4)]">
                <img src={logoUrl} alt="Choice Prime Technical & Cleaning Services" className="h-full w-full object-contain" />
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-6 text-white/55">Luxury cleaning, restoration and technical care for the important spaces that shape Dubai’s everyday experience.</p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#A9C6FF]">Navigate</p>
            <div className="mt-4 flex flex-col gap-3">
              {navItems.map((item) => <button key={item.id} onClick={() => scrollToSection(item.id)} className="w-fit text-sm text-white/65 transition-colors hover:text-white">{item.label}</button>)}
            </div>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#A9C6FF]">Contact</p>
            <div className="mt-4 space-y-3 text-sm text-white/65">
              <a href="tel:+971552293600" className="block transition-colors hover:text-white">+971 55 229 3600</a>
              <a href="tel:+971554917400" className="block transition-colors hover:text-white">+971 55 491 7400</a>
              <a href="mailto:info@choiceprime.pro" className="block transition-colors hover:text-white">info@choiceprime.pro</a>
            </div>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#A9C6FF]">Dubai office</p>
            <p className="mt-4 text-sm leading-6 text-white/65">Aspin Commercial Tower 302<br />Sheikh Zayed Road<br />Dubai, UAE</p>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="container flex flex-col justify-between gap-3 py-5 text-[10px] font-bold uppercase tracking-[0.13em] text-white/40 sm:flex-row">
            <span>© {new Date().getFullYear()} Choice Prime Building Technical Services</span>
            <span>Dubai · UAE</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
