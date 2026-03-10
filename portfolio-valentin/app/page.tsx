"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { SpecialText } from "@/components/ui/special-text";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";

// ─── Data from Notion ───────────────────────────────────────────────────────

const projects = [
  {
    id: 1,
    title: "MTS Bank: Main Page Redesign",
    subtitle: "Online Banking UX Overhaul",
    description:
      "Redesigned the main website of one of Russia's largest banks to ensure seamless client access to banking services. Led research, prototyping, and usability testing cycles end-to-end.",
    tags: ["UX Design", "Research", "Web", "Case Study"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    notionUrl:
      "https://www.notion.so/22ff6f3ca46a405eba1861fe4826e29a",
    year: "2022–2023",
    role: "UX Designer",
  },
  {
    id: 2,
    title: "SocialBooth: Brand Identity",
    subtitle: "Event Marketing Visual System",
    description:
      "Built a complete brand identity from scratch for a Milan-based event marketing startup. Created visual guidelines, color system, typography, and all branded touchpoints for 300+ events.",
    tags: ["Branding", "Visual Design", "Marketing", "Prototype"],
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    notionUrl:
      "https://www.notion.so/38057b0d2a2641088b6db56c443dd5d4",
    year: "2023–2024",
    role: "Design Lead",
  },
  {
    id: 3,
    title: "Customer Journey Map: MTS Bank",
    subtitle: "UX Research & CJM Methodology",
    description:
      "Developed a comprehensive Customer Journey Map for banking service interactions — identifying pain points, emotional highs and lows, and actionable UX recommendations. Led to successful hire.",
    tags: ["UX Research", "CJM", "Case Study"],
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80",
    notionUrl:
      "https://www.notion.so/09305b98a5584382bbea5516d0bdbe2e",
    year: "2022",
    role: "UX Researcher",
  },
  {
    id: 4,
    title: "Freelance Web Projects",
    subtitle: "Responsive Websites for Small Business",
    description:
      "Designed and developed adaptive websites for small businesses and independent professionals across Milan. Projects spanned from wireframing to full WordPress implementation.",
    tags: ["Web Design", "WordPress", "Figma", "HTML/CSS"],
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    notionUrl: null,
    year: "2024–2025",
    role: "Web Designer",
  },
];

const skills = [
  { category: "Research", items: ["User Interviews", "Usability Testing", "CJM", "Focus Groups", "Competitive Analysis"] },
  { category: "Design", items: ["Figma", "Wireframing", "Prototyping", "Visual Identity", "Brand Guidelines"] },
  { category: "Tools", items: ["Photoshop", "Illustrator", "InDesign", "CorelDRAW", "Blender"] },
  { category: "Web", items: ["HTML/CSS", "WordPress", "Responsive Design", "JavaScript (basics)"] },
];

const experience = [
  {
    role: "Freelance Web Designer",
    company: "Self-employed",
    location: "Milan, Italy",
    period: "May 2024 – May 2025",
    description: "Designed and developed responsive websites for small businesses. Full project lifecycle management from requirements gathering to launch.",
  },
  {
    role: "Technical & Operations Lead",
    company: "SocialBooth",
    location: "Milan, Italy",
    period: "Feb 2023 – Feb 2024",
    description: "Built complete brand identity, created visual assets for 300+ events with clients including Generali, Colmar, Tumi, and Carrefour.",
  },
  {
    role: "UX Designer",
    company: "MTS Bank",
    location: "Moscow, Russia",
    period: "May 2022 – Oct 2023",
    description: "Led qualitative UX research and redesigned key sections of the bank's main website. Collaborated with engineering on implementation.",
  },
  {
    role: "Market Research Specialist",
    company: "OK Research",
    location: "Moscow, Russia",
    period: "Jan 2022 – May 2022",
    description: "Conducted market research for Borjomi, Yandex, and Sber. Moderated focus groups and synthesized insights into stakeholder presentations.",
  },
];

// ─── Nav ────────────────────────────────────────────────────────────────────

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/5 bg-black/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="font-mono text-sm font-medium text-white/80 hover:text-white transition-colors"
        >
          VD
        </a>

        <div className="flex items-center gap-6 text-sm text-white/50">
          <a href="#work" className="hover:text-white transition-colors">
            Work
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a
            href="mailto:valentinddn2803@gmail.com"
            className="hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-white/[0.02] blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl w-full">
        {/* Location badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/50">
          <MapPin className="h-3 w-3" />
          Milan, Italy · Available for projects
        </div>

        {/* Main headline */}
        <h1 className="mb-6">
          <span className="block text-sm font-mono text-white/30 mb-3 tracking-widest uppercase">
            UX Designer & Researcher
          </span>
          <SpecialText
            className="text-[clamp(3rem,8vw,7rem)] leading-none tracking-tight text-white"
            speed={18}
            delay={0.3}
          >
            Valentin Dudin
          </SpecialText>
        </h1>

        {/* Tagline */}
        <p className="max-w-xl text-base text-white/40 leading-relaxed mb-10">
          I research how people think, then design digital products they
          actually want to use. Currently based in Milan — previously at MTS
          Bank and SocialBooth.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-white/90 transition-colors"
          >
            View My Work
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="mailto:valentinddn2803@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 text-sm font-medium text-white/70 hover:border-white/20 hover:text-white transition-colors"
          >
            <Mail className="h-4 w-4" />
            Get in Touch
          </a>
        </div>

        {/* Social links */}
        <div className="mt-16 flex items-center gap-1 text-white/20">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:text-white/60 transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:text-white/60 transition-colors"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:text-white/60 transition-colors"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
        <div className="h-8 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse" />
      </div>
    </section>
  );
}

// ─── Projects ────────────────────────────────────────────────────────────────

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <article className="project-card group cursor-pointer">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Year overlay */}
        <div className="absolute top-4 right-4">
          <span className="font-mono text-xs text-white/40 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-sm">
            {project.year}
          </span>
        </div>
        {/* Role overlay */}
        <div className="absolute bottom-4 left-4">
          <span className="font-mono text-xs text-white/50">{project.role}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="tag-badge">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-base font-medium text-white mb-1 group-hover:text-white/90 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs text-white/40 mb-3">{project.subtitle}</p>
        <p className="text-sm text-white/50 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {project.notionUrl && (
          <a
            href={project.notionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 text-xs text-white/30 hover:text-white/70 transition-colors font-mono"
          >
            View Case Study <ArrowUpRight className="h-3 w-3" />
          </a>
        )}
      </div>
    </article>
  );
}

function Work() {
  return (
    <section id="work" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 flex items-end justify-between">
          <div>
            <p className="font-mono text-xs text-white/30 tracking-widest uppercase mb-3">
              Selected Work
            </p>
            <h2 className="text-3xl font-medium text-white tracking-tight">
              <SpecialText inView once speed={15} delay={0}>
                Projects
              </SpecialText>
            </h2>
          </div>
          <p className="text-sm text-white/30 font-mono hidden md:block">
            {projects.length} case studies
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="about" className="py-32 px-6 border-t border-white/5">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs text-white/30 tracking-widest uppercase mb-12">
          About
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Bio */}
          <div>
            <h2 className="text-2xl font-medium text-white mb-6 leading-snug">
              Researcher first,
              <br />
              <span className="text-white/40">designer second.</span>
            </h2>
            <div className="space-y-4 text-sm text-white/50 leading-relaxed">
              <p>
                I&apos;m Valentin — a UX Designer and Researcher based in Milan,
                Italy. My work sits at the intersection of understanding people
                and creating products that actually work for them.
              </p>
              <p>
                With experience across banking, event marketing, and freelance
                web projects, I&apos;ve learned that good design starts with the
                right questions — not the right pixels. I conduct qualitative
                research, synthesize insights, and translate them into
                experiences that feel effortless.
              </p>
              <p>
                Previously at MTS Bank (Moscow), SocialBooth (Milan), and OK
                Research. Certified Google UX Designer. M.A. in Fashion &
                Luxury Management, LUM University.
              </p>
            </div>

            {/* Languages */}
            <div className="mt-8 flex gap-6">
              {[
                { lang: "Russian", level: "Native" },
                { lang: "Italian", level: "B2" },
                { lang: "English", level: "C1" },
              ].map((l) => (
                <div key={l.lang}>
                  <p className="text-xs font-mono text-white/30">{l.lang}</p>
                  <p className="text-sm text-white/60 font-medium">{l.level}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Experience */}
          <div className="space-y-10">
            {/* Skills */}
            <div>
              <p className="font-mono text-xs text-white/25 uppercase tracking-widest mb-4">
                Skills & Tools
              </p>
              <div className="space-y-4">
                {skills.map((s) => (
                  <div key={s.category}>
                    <p className="text-xs text-white/30 mb-2 font-mono">
                      {s.category}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {s.items.map((item) => (
                        <span key={item} className="tag-badge">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience timeline */}
            <div>
              <p className="font-mono text-xs text-white/25 uppercase tracking-widest mb-4">
                Experience
              </p>
              <div className="space-y-5">
                {experience.map((exp, i) => (
                  <div key={i} className="relative pl-4 border-l border-white/5">
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <div>
                        <p className="text-sm font-medium text-white/80">
                          {exp.role}
                        </p>
                        <p className="text-xs text-white/40">
                          {exp.company} · {exp.location}
                        </p>
                      </div>
                      <span className="shrink-0 font-mono text-xs text-white/25">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-xs text-white/35 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact ─────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6 border-t border-white/5 text-center"
    >
      <div className="mx-auto max-w-2xl">
        <p className="font-mono text-xs text-white/30 tracking-widest uppercase mb-6">
          Get in Touch
        </p>
        <h2 className="text-4xl font-medium text-white mb-4 tracking-tight">
          Let&apos;s work together
        </h2>
        <p className="text-sm text-white/40 mb-10 leading-relaxed">
          Open to UX research, product design, and freelance web projects. Drop
          me a line and let&apos;s see what we can build.
        </p>
        <a
          href="mailto:valentinddn2803@gmail.com"
          className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90 transition-colors"
        >
          <Mail className="h-4 w-4" />
          valentinddn2803@gmail.com
        </a>

        <div className="mt-6 text-xs font-mono text-white/20">
          +39 375 149 4683 · Milan, Italy
        </div>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-8">
      <div className="mx-auto max-w-6xl flex items-center justify-between text-xs font-mono text-white/20">
        <span>© {new Date().getFullYear()} Valentin Dudin</span>
        <span>Milan, Italy</span>
      </div>
    </footer>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <main className="min-h-screen bg-background noise-bg">
      <Nav />
      <Hero />
      <Work />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
