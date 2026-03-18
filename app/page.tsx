 "use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mic,
  MessageCircle,
  Heart,
  Users,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
};

export default function Home() {
  const targetWord = "voices";
  const [typed, setTyped] = useState("");

  const squigglePath = useMemo(
    () => "M0,8 Q10,0 20,8 T40,8 T60,8 T80,8 T100,8",
    [],
  );

  useEffect(() => {
    let i = 0;
    let isDeleting = false;
    let timeout: number | undefined;

    const tick = () => {
      const full = targetWord;
      const next = isDeleting ? full.slice(0, i - 1) : full.slice(0, i + 1);
      setTyped(next);

      if (!isDeleting) i += 1;
      else i -= 1;

      let delay = isDeleting ? 55 : 95;
      if (!isDeleting && i >= full.length) {
        delay = 900;
        isDeleting = true;
      } else if (isDeleting && i <= 0) {
        delay = 450;
        isDeleting = false;
      }

      timeout = window.setTimeout(tick, delay);
    };

    timeout = window.setTimeout(tick, 250);
    return () => {
      if (timeout) window.clearTimeout(timeout);
    };
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-chatter-peach/40 blur-3xl rounded-full" />
        <div className="absolute top-40 -right-20 w-80 h-80 bg-chatter-tan/40 blur-3xl rounded-full" />
        <div className="absolute bottom-[-6rem] left-10 w-72 h-72 bg-chatter-terracotta/20 blur-3xl rounded-full" />
      </div>

      <header className="sticky top-0 z-40">
        <div className="backdrop-blur-md bg-chatter-parchment/80 border-b border-chatter-tan/20">
          <nav className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl overflow-hidden bg-chatter-parchment border border-chatter-tan/60 shadow-md flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="ChatterHaven Speech Solutions logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-heading font-bold text-chatter-brown text-lg">
                  ChatterHaven
                </span>
                <span className="text-[11px] uppercase tracking-[0.25em] text-chatter-brown/60">
                  Speech Solutions
                </span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium">
              <a
                href="#mission"
                className="hover:text-chatter-terracotta transition-colors"
              >
                Our Mission
              </a>
              <a
                href="#owner"
                className="hover:text-chatter-terracotta transition-colors"
              >
                Meet Ashley
              </a>
              <a
                href="#services"
                className="hover:text-chatter-terracotta transition-colors"
              >
                Services
              </a>
              <a
                href="#contact"
                className="rounded-full bg-chatter-terracotta text-chatter-brown px-5 py-2 shadow-sm hover:shadow-md hover:-translate-y-[1px] transition-all"
              >
                Book Consultation
              </a>
            </div>
          </nav>
        </div>
      </header>

      <section className="pt-16 pb-24 px-4">
        <motion.div
          className="max-w-7xl mx-auto grid md:grid-cols-[1.15fr,0.9fr] gap-12 items-center"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.whileInView}
          viewport={fadeInUp.viewport}
          transition={fadeInUp.transition}
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-chatter-tan/40 px-3 py-1 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-chatter-terracotta" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-chatter-brown/70">
                Pediatric Speech Therapy • Houston, TX
              </span>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-chatter-brown mb-5 leading-tight">
              Helping little{" "}
              <span className="relative inline-block text-chatter-terracotta italic">
                <span className="relative z-10">
                  {typed || "\u00A0"}
                  <span className="ml-0.5 inline-block w-[1px] h-[1em] align-[-0.08em] bg-chatter-terracotta/70 animate-pulse" />
                </span>
                <span className="absolute left-0 right-0 -bottom-2 h-3">
                  <svg
                    viewBox="0 0 100 16"
                    preserveAspectRatio="none"
                    className="w-full h-full"
                    aria-hidden="true"
                  >
                    <motion.path
                      d={squigglePath}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="8 10"
                      animate={{ strokeDashoffset: [0, -36] }}
                      transition={{
                        duration: 1.2,
                        ease: "linear",
                        repeat: Infinity,
                      }}
                      className="text-chatter-peach/80"
                    />
                  </svg>
                </span>
              </span>{" "}
              grow.
            </h1>
            <p className="text-base md:text-lg text-chatter-brown/80 mb-7 leading-relaxed max-w-xl">
              Compassionate, 1:1 pediatric speech therapy tailored to your
              child&apos;s unique journey in Houston—rooted in play, connection,
              and evidence-based care.
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              {["Early Intervention", "Preschool", "School-Age"].map((tag) => (
                <span
                  key={tag}
                  className="bg-white/80 border border-chatter-tan/40 px-4 py-2 rounded-full text-xs font-semibold text-chatter-brown shadow-sm"
                >
                  ✓ {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-chatter-terracotta text-chatter-brown px-6 py-3 text-sm font-semibold shadow-lg hover:bg-chatter-terracotta/90 hover:shadow-xl transition-all"
              >
                Schedule a Call
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-[2.5rem] bg-white/80 border border-chatter-tan/40 shadow-xl p-6 md:p-7 overflow-hidden">
              <div className="absolute bottom-[-2.5rem] -left-10 w-32 h-32 bg-chatter-peach/40 rounded-full blur-xl" />
              <div className="relative z-10 flex flex-col items-center gap-4 mb-6">
                <div className="w-24 h-24 rounded-3xl bg-chatter-parchment flex items-center justify-center border border-chatter-tan/50 shadow-sm">
                  <Image
                    src="/globe.svg"
                    alt="Playful ChatterHaven illustration"
                    width={64}
                    height={64}
                    className="opacity-90"
                  />
                </div>
                <div className="text-center">
                  <p className="font-heading font-semibold text-chatter-brown text-lg">
                    ChatterHaven Speech Solutions, PLLC
                  </p>
                  <p className="text-[13px] text-chatter-brown/70">
                    Supporting little voices across Houston and beyond.
                  </p>
                </div>
              </div>
              <div className="grid gap-4 text-xs text-chatter-brown/80">
                <div className="flex items-center justify-between rounded-2xl bg-chatter-parchment/80 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Mic className="w-4 h-4 text-chatter-terracotta" />
                    <span className="font-semibold">Speech & Language</span>
                  </div>
                  <span className="text-[11px] bg-white/80 rounded-full px-3 py-1 border border-chatter-tan/40">
                    Play-based sessions
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-chatter-parchment/80 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-chatter-terracotta" />
                    <span className="font-semibold">Family-Centered</span>
                  </div>
                  <span className="text-[11px]">
                    Coaching and collaboration every step.
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-chatter-parchment/80 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-chatter-terracotta" />
                    <span className="font-semibold">Houston, Texas</span>
                  </div>
                  <span className="text-[11px]">
                    The Heights • Sugar Land • Memorial • Katy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="mission" className="py-20 px-4 bg-chatter-peach/10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.whileInView}
          viewport={fadeInUp.viewport}
          transition={fadeInUp.transition}
        >
          {/* rainbow accent inspired by playful kids sites */}
          <div className="mx-auto mb-6 h-2 w-40 rounded-full bg-gradient-to-r from-chatter-peach via-chatter-terracotta to-chatter-tan" />
          <div className="ribbon-header mb-10">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em]">
              Our Mission
            </h2>
          </div>
          <p className="text-2xl md:text-[26px] text-chatter-brown font-light leading-relaxed italic">
            At ChatterHaven Speech Solutions, PLLC, our mission is to support
            and empower children by helping them develop strong, confident, and
            functional communication skills... one voice, one connection, and
            one success at a time.
          </p>
          <div className="dotted-trail" />
          <p className="text-chatter-brown/80 font-medium">
            We partner with families to create a nurturing space where every
            child&apos;s voice is heard, celebrated, and strengthened.
          </p>
        </motion.div>
      </section>

      <section id="owner" className="py-24 px-4">
        <motion.div
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.whileInView}
          viewport={fadeInUp.viewport}
          transition={fadeInUp.transition}
        >
          <div className="relative flex justify-center md:justify-start">
            <div className="aspect-[4/5] w-3/5 md:w-1/2 bg-chatter-tan/30 rounded-[2.5rem] relative overflow-hidden shadow-2xl border-8 border-white">
              <Image
                src="/ashley.jpg"
                alt="Portrait of Ashley Montgomery, MS, CCC-SLP"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <div className="ribbon-header mb-6">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.3em]">
                Meet the Owner
              </h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ashley Montgomery,{" "}
              <span className="text-chatter-terracotta">MS, CCC-SLP</span>
            </h3>
            <p className="text-base md:text-lg mb-6 leading-relaxed text-chatter-brown/85">
              Ashley is a pediatric speech-language pathologist with 5 years of
              experience helping children grow their communication skills across
              a variety of settings in Texas. She believes therapy should feel
              safe, engaging, and deeply collaborative with caregivers.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-4">
              {[
                "Private Practice",
                "Pediatric Outpatient Clinic",
                "Home Health",
                "School Setting",
                "Teletherapy",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm font-semibold text-chatter-brown"
                >
                  <CheckCircle2 className="w-4 h-4 text-chatter-terracotta" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-chatter-brown/70">
              Together, you&apos;ll design a plan that fits your child&apos;s
              strengths, your family&apos;s routines, and your long-term goals.
            </p>
          </div>
        </motion.div>
      </section>

      <section id="services" className="py-24 px-4">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.whileInView}
          viewport={fadeInUp.viewport}
          transition={fadeInUp.transition}
        >
          <div className="text-center mb-12">
            <div className="ribbon-header mb-4">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.3em]">
                Specialized Services
              </h2>
            </div>
            <p className="text-chatter-brown/80 max-w-2xl mx-auto text-sm md:text-base">
              Evidence-based therapy for speech, language, and early
              communication in the spaces where your child learns and plays.
            </p>
          </div>
          <div className="bg-chatter-brown text-chatter-brown rounded-[3rem] p-8 md:p-12 shadow-2xl bg-gradient-to-br from-chatter-parchment via-chatter-peach/40 to-chatter-tan/40">
            <div className="grid gap-6 md:grid-cols-4">
              {[
                { title: "Speech Sound Disorders", icon: Mic },
                { title: "Language Delays", icon: MessageCircle },
                { title: "Articulation", icon: Heart },
                { title: "AAC & Early Communication", icon: Users },
              ].map((s) => (
                <div
                  key={s.title}
                  className="p-5 rounded-3xl bg-white/5 border border-white/15 hover:bg-white/10 hover:-translate-y-1 transition-all text-center flex flex-col items-center"
                >
                  <s.icon className="mb-3 text-chatter-peach w-9 h-9" />
                  <h4 className="font-heading font-semibold text-base mb-2">
                    {s.title}
                  </h4>
                  <p className="text-xs text-chatter-brown/80">
                    Individualized support to help your child be understood at
                    home, school, and in the community.
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-2 text-xs text-chatter-peach/90">
              <MapPin className="w-4 h-4" />
              <span>
                Services available in daycares, ABA clinics, private schools,
                select home environments, and secure virtual platforms.
              </span>
            </div>
            {/* playful legend row */}
            <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-chatter-peach/95">
              <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1">
                <span aria-hidden="true">☁️</span>
                <span>Soft, cloud-like support</span>
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1">
                <span aria-hidden="true">🌈</span>
                <span>Bright, hopeful progress</span>
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1">
                <span aria-hidden="true">🫧</span>
                <span>Playful bubble breaks</span>
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1">
                <span aria-hidden="true">🦕</span>
                <span>Dino friends welcome</span>
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Why Choose ChatterHaven */}
      <section className="py-24 px-4 bg-chatter-peach/10">
        <motion.div
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-start"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.whileInView}
          viewport={fadeInUp.viewport}
          transition={fadeInUp.transition}
        >
          <div>
            <div className="ribbon-header mb-6">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.3em]">
                Why Families Choose Us
              </h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-chatter-brown mb-4">
              Empowering communication, one small step at a time.
            </h3>
            <p className="text-chatter-brown/80 text-sm md:text-base leading-relaxed mb-6">
              Like the families at practices such as NuVoice ABA &amp; Speech Therapy in Houston,
              ChatterHaven parents are looking for more than just therapy—they want a trusted guide,
              a warm space, and a clear plan for progress.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="rounded-2xl bg-white/80 border border-chatter-tan/40 p-4 shadow-sm">
                <p className="font-heading font-semibold mb-1">Family-Centered Care</p>
                <p className="text-chatter-brown/75">
                  We coach, collaborate, and celebrate with you so therapy carries into everyday life.
                </p>
              </div>
              <div className="rounded-2xl bg-white/80 border border-chatter-tan/40 p-4 shadow-sm">
                <p className="font-heading font-semibold mb-1">Evidence-Based, Playful</p>
                <p className="text-chatter-brown/75">
                  Sessions blend research-backed strategies with play, stories, and child-led interests.
                </p>
              </div>
              <div className="rounded-2xl bg-white/80 border border-chatter-tan/40 p-4 shadow-sm">
                <p className="font-heading font-semibold mb-1">Flexible Settings</p>
                <p className="text-chatter-brown/75">
                  Support in schools, daycares, ABA clinics, homes, and virtually—where your child thrives.
                </p>
              </div>
              <div className="rounded-2xl bg-white/80 border border-chatter-tan/40 p-4 shadow-sm">
                <p className="font-heading font-semibold mb-1">Clear Communication</p>
                <p className="text-chatter-brown/75">
                  You&apos;ll always know what we&apos;re working on, why it matters, and how to help.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl bg-white/90 border border-chatter-tan/40 p-6 shadow-md">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-chatter-brown/70 mb-2">
                Parent Perspective
              </p>
              <p className="text-chatter-brown/90 text-sm md:text-base leading-relaxed mb-4">
                &quot;In just a few months, we&apos;ve watched our child&apos;s confidence bloom.
                Ashley doesn&apos;t just work on words—she gives us tools, hope, and a sense of calm.&quot;
              </p>
              <p className="text-xs text-chatter-brown/70 font-medium">– Houston parent of a preschooler</p>
            </div>
            <div className="rounded-3xl bg-chatter-brown text-chatter-peach p-6 shadow-xl">
              <p className="text-xs uppercase tracking-[0.25em] mb-2">At a glance</p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="font-heading text-2xl font-bold text-chatter-brown">5+</p>
                  <p className="text-[11px] text-chatter-peach/85">Years pediatric experience</p>
                </div>
                <div>
                  <p className="font-heading text-2xl font-bold text-chatter-brown">1:1</p>
                  <p className="text-[11px] text-chatter-peach/85">Child-centered sessions</p>
                </div>
                <div>
                  <p className="font-heading text-2xl font-bold text-chatter-brown">Multi</p>
                  <p className="text-[11px] text-chatter-peach/85">Settings &amp; service areas</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Programs / Ages We Support */}
      <section className="py-24 px-4">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.whileInView}
          viewport={fadeInUp.viewport}
          transition={fadeInUp.transition}
        >
          <div className="text-center mb-10">
            <div className="ribbon-header mb-4">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.3em]">
                Programs We Offer
              </h2>
            </div>
            <p className="text-chatter-brown/80 max-w-2xl mx-auto text-sm md:text-base">
              Tailored speech and language support from toddlers through school-age, with pathways that
              meet your child exactly where they are.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white/90 border border-chatter-tan/40 p-6 shadow-sm flex flex-col">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-chatter-brown/70 mb-2">
                Ages 2–4
              </p>
              <h3 className="font-heading font-bold text-lg mb-2">Early Intervention</h3>
              <p className="text-sm text-chatter-brown/80 mb-4">
                Focus on first words, play-based language, and caregiver coaching to boost everyday communication.
              </p>
              <ul className="text-xs text-chatter-brown/75 space-y-1 list-disc list-inside">
                <li>Late talkers</li>
                <li>Early social communication</li>
                <li>Caregiver modeling and routines</li>
              </ul>
            </div>
            <div className="rounded-3xl bg-white/95 border border-chatter-tan/40 p-6 shadow-sm flex flex-col">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-chatter-brown/70 mb-2">
                Ages 4–7
              </p>
              <h3 className="font-heading font-bold text-lg mb-2">Preschool &amp; Early School</h3>
              <p className="text-sm text-chatter-brown/80 mb-4">
                Support for sound production, vocabulary, sentences, and classroom communication skills.
              </p>
              <ul className="text-xs text-chatter-brown/75 space-y-1 list-disc list-inside">
                <li>Speech sound disorders &amp; articulation</li>
                <li>Storytelling and early literacy language</li>
                <li>Playdates and peer communication</li>
              </ul>
            </div>
            <div className="rounded-3xl bg-white/90 border border-chatter-tan/40 p-6 shadow-sm flex flex-col">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-chatter-brown/70 mb-2">
                Ages 7+
              </p>
              <h3 className="font-heading font-bold text-lg mb-2">School-Age Support</h3>
              <p className="text-sm text-chatter-brown/80 mb-4">
                For older kiddos building clarity, complex language, and confidence in academic settings.
              </p>
              <ul className="text-xs text-chatter-brown/75 space-y-1 list-disc list-inside">
                <li>Reading comprehension language</li>
                <li>Social problem-solving and self-advocacy</li>
                <li>AAC and multi-modal communication</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 bg-chatter-parchment/70">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.whileInView}
          viewport={fadeInUp.viewport}
          transition={fadeInUp.transition}
        >
          <div className="text-center mb-10">
            <div className="ribbon-header mb-4">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.3em]">
                What to Expect
              </h2>
            </div>
            <p className="text-chatter-brown/80 max-w-2xl mx-auto text-sm md:text-base">
              A simple, calm process—so you can focus on your child, not the paperwork.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px bg-chatter-tan/50 md:-translate-x-1/2 pointer-events-none" />
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Reach Out",
                  text: "Share your concerns using the consultation form below. We’ll respond with a warm, clear next step.",
                },
                {
                  step: "02",
                  title: "Meet & Learn",
                  text: "We schedule a conversation to learn about your child, answer questions, and discuss evaluation or therapy options.",
                },
                {
                  step: "03",
                  title: "Begin Therapy",
                  text: "Your child starts 1:1 sessions in the setting that fits best, while you receive regular updates and strategies.",
                },
              ].map((item, idx) => (
                <div
                  key={item.step}
                  className={`relative flex gap-4 md:gap-6 ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex flex-col items-center md:items-start min-w-[3rem] md:min-w-[4rem]">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-chatter-brown text-chatter-brown flex items-center justify-center text-xs font-heading shadow-md z-10 bg-chatter-parchment">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1 rounded-2xl bg-white/90 border border-chatter-tan/40 p-4 md:p-5 shadow-sm">
                    <p className="font-heading font-semibold text-sm md:text-base mb-1 text-chatter-brown">
                      {item.title}
                    </p>
                    <p className="text-xs md:text-sm text-chatter-brown/80 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section id="contact" className="py-28 px-4">
        <motion.div
          className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-chatter-tan/25"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.whileInView}
          viewport={fadeInUp.viewport}
          transition={fadeInUp.transition}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold mb-2 text-chatter-brown">
              Book a Consultation
            </h2>
            <p className="text-chatter-brown/70 text-sm md:text-base">
              Share a few details below, and Ashley will personally reach out to
              discuss next steps for your child.
            </p>
          </div>
          <form
            name="chatterhaven-contact"
            method="POST"
            data-netlify="true"
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="chatterhaven-contact" />
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="parentName"
                  className="text-xs font-semibold uppercase tracking-wide text-chatter-brown/80"
                >
                  Parent / Guardian Name
                </label>
                <input
                  id="parentName"
                  type="text"
                  name="parentName"
                  required
                  className="w-full p-4 rounded-2xl border border-chatter-tan/30 outline-none focus:ring-2 focus:ring-chatter-terracotta bg-chatter-parchment/40 text-sm"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="text-xs font-semibold uppercase tracking-wide text-chatter-brown/80"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="832-910-7448"
                  className="w-full p-4 rounded-2xl border border-chatter-tan/30 outline-none focus:ring-2 focus:ring-chatter-terracotta bg-chatter-parchment/40 text-sm"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-xs font-semibold uppercase tracking-wide text-chatter-brown/80"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full p-4 rounded-2xl border border-chatter-tan/30 outline-none focus:ring-2 focus:ring-chatter-terracotta bg-chatter-parchment/40 text-sm"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="areaOfConcern"
                  className="text-xs font-semibold uppercase tracking-wide text-chatter-brown/80"
                >
                  Area of Concern
                </label>
                <select
                  id="areaOfConcern"
                  name="areaOfConcern"
                  className="w-full p-4 rounded-2xl border border-chatter-tan/30 outline-none bg-chatter-parchment/40 focus:ring-2 focus:ring-chatter-terracotta text-sm"
                >
                  <option>Speech Sound Disorders</option>
                  <option>Language Delays</option>
                  <option>Articulation</option>
                  <option>AAC & Early Communication</option>
                  <option>Unsure / Other</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-xs font-semibold uppercase tracking-wide text-chatter-brown/80"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full p-4 rounded-2xl border border-chatter-tan/30 outline-none focus:ring-2 focus:ring-chatter-terracotta bg-chatter-parchment/40 text-sm"
                placeholder="Tell us about your child, their age, and what you’re noticing."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-chatter-terracotta text-chatter-brown font-heading font-semibold py-4 rounded-2xl shadow-lg hover:bg-chatter-terracotta/90 hover:shadow-xl transition-all text-sm uppercase tracking-[0.2em]"
            >
              Submit Inquiry
            </button>
          </form>
        </motion.div>
      </section>

      <footer className="py-16 border-t border-chatter-tan/25 px-4 bg-chatter-parchment/90">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left text-sm">
          <div>
            <h5 className="font-heading font-semibold text-chatter-brown mb-3 uppercase tracking-[0.3em] text-xs">
              Contact
            </h5>
            <p className="flex items-center justify-center md:justify-start gap-2 mb-1">
              <Phone className="w-4 h-4" /> 832-910-7448
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2 mb-1">
              <Mail className="w-4 h-4" /> info@chatterhavenspeech.com
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <MapPin className="w-4 h-4" /> Houston, Texas
            </p>
          </div>
          <div className="text-center">
            <h5 className="font-heading font-semibold text-chatter-brown mb-3 uppercase tracking-[0.3em] text-xs">
              Houston Service Areas
            </h5>
            <p className="text-chatter-brown/80">
              The Heights • Sugar Land • Memorial • Katy • Greater Houston Area
            </p>
          </div>
          <div className="md:text-right text-chatter-brown/65 text-xs italic flex flex-col justify-between gap-2">
            <p>Speech Therapy Houston | Pediatric SLP Texas</p>
            <p>
              © {new Date().getFullYear()} ChatterHaven Speech Solutions, PLLC.
              Helping little voices grow.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}