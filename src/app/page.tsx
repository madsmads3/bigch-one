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

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-chatter-parchment">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-chatter-parchment/80 backdrop-blur-md border-b border-chatter-tan/20">
        <nav className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-chatter-brown rounded-full flex items-center justify-center text-white font-bold">
              CH
            </div>
            <span className="font-heading font-bold text-chatter-brown text-xl">
              ChatterHaven
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-medium text-sm">
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
              href="#faq"
              className="hover:text-chatter-terracotta transition-colors"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="bg-chatter-terracotta text-white px-5 py-2 rounded-full shadow-sm hover:scale-105 transition-transform"
            >
              Book Consultation
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-20 pb-32 text-center px-4">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.wh
ileInView}
          viewport={fadeInUp.viewport}
          transition={fadeInUp.transition}
        >
          <div className="mb-10 flex justify-center">
            <div className="p-4 border-2 border-chatter-tan/20 rounded-2xl bg-white/30 backdrop-blur-sm">
              {/* Swap this placeholder with your logo once /public/logo.png exists */}
              <Image
                src="/logo.png"
                alt="ChatterHaven Speech Solutions logo"
                width={180}
                height={60}
                className="object-contain"
              />
            </div>
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-chatter-brown mb-6 leading-tight">
            Helping little <span className="text-chatter-terracotta italic">voices</span> grow.
          </h1>
          <p className="text-xl text-chatter-brown/80 mb-10 leading-relaxed">
            Compassionate, 1:1 pediatric speech therapy tailored to your child&apos;s unique journey in Houston.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Early Intervention", "Preschool", "School-Age"].map((tag) => (
              <span
                key={tag}
                className="bg-white/70 border border-chatter-tan/40 px-4 py-2 rounded-full text-sm font-bold text-chatter-brown shadow-sm"
              >
                ✓ {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Mission */}
      <section id="mission" className="py-24 bg-chatter-peach/10">
        <motion.div
          className="max-w-4xl mx-auto px-4 text-center"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.whileInView}
          viewport={fadeInUp.viewport}
          transition={fadeInUp.transition}
        >
          <div className="ribbon-header mb-12">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase">
              Our Mission
            </h2>
          </div>
          <p className="text-2xl text-chatter-brown font-light leading-relaxed italic">
            At ChatterHaven Speech Solutions, PLLC, our mission is to support and
            empower children by helping them develop strong, confident, and
            functional communication skills... one voice, one connection, and
            one success at a time.
          </p>
          <div className="dotted-trail" />
        </motion.div>
      </section>

      {/* Meet Ashley */}
      <section id="owner" className="py-32 max-w-7xl mx-auto px-4">
        <motion.div
          className="grid md:grid-cols-2 gap-16 items-center"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.whileInView}
          viewport={fadeInUp.viewport}
          transition={fadeInUp.transition}
        >
          <div className="aspect-[4/5] bg-chatter-tan/20 rounded-[2rem] relative overflow-hidden shadow-2xl border-8 border-white">
            {/* Replace with a real portrait once /public/ashley.jpg exists */}
            <div className="absolute inset-0 flex items-center justify-center text-chatter-brown/50 italic text-center px-6">
              Photo: Ashley Montgomery, MS, CCC-SLP
            </div>
          </div>
          <div>
            <div className="ribbon-header mb-8">
              <h2 className="text-xs font-bold uppercase tracking-widest">
                Meet the Owner
              </h2>
            </div>
            <h3 className="text-4xl font-heading font-bold mb-4">
              Ashley Montgomery,{" "}
              <span className="text-chatter-terracotta">MS, CCC-SLP</span>
            </h3>
            <p className="text-lg mb-8 leading-relaxed opacity-90">
              Ashley is a pediatric speech-language pathologist with 5 years of
              experience supporting children and families across private
              practice, pediatric outpatient clinics, home health, school
              settings, and teletherapy.
            </p>
            <ul className="space-y-3">
              {[
                "Private Practice",
                "Pediatric Outpatient Clinic",
                "Home Health",
                "School Setting",
                "Teletherapy",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 font-semibold text-chatter-brown"
                >
                  <CheckCircle2 className="text-chatter-terracotta w-5 h-5" />{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Services */}
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
              <h2 className="text-xs font-bold uppercase tracking-[0.25em]">
                Specialized Services
              </h2>
            </div>
            <p className="text-chatter-brown/80 max-w-2xl mx-auto">
              Compassionate, evidence-based therapy for speech, language, and
              early communication in the settings where your child learns and
              plays.
            </p>
          </div>
          <div className="bg-chatter-brown text-white rounded-[3rem] p-10 md:p-14 shadow-xl">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { title: "Speech Sound Disorders", icon: Mic },
                { title: "Language Delays", icon: MessageCircle },
                { title: "Articulation", icon: Heart },
                { title: "AAC & Early Communication", icon: Users },
              ].map((s) => (
                <div
                  key={s.title}
                  className="p-6 border border-white/10 rounded-3xl bg-white/5 hover:bg-white/10 transition-all text-center"
                >
                  <s.icon className="mx-auto mb-4 text-chatter-peach w-10 h-10" />
                  <h4 className="font-heading font-semibold text-lg mb-2">
                    {s.title}
                  </h4>
                </div>
              ))}
            </div>
            <div className="mt-10 text-sm text-chatter-peach/90 flex flex-wrap items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>
                Services available in daycares, ABA clinics, private schools,
                home environments, and virtual platforms.
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-4 bg-chatter-peach/10">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.whileInView}
          viewport={fadeInUp.viewport}
          transition={fadeInUp.transition}
        >
          <div className="text-center mb-10">
            <div className="ribbon-header mb-4">
              <h2 className="text-xs font-bold uppercase tracking-[0.25em]">
                FAQ
              </h2>
            </div>
            <p className="text-chatter-brown/80">
              Answers to common questions from Houston families considering
              pediatric speech therapy.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-white/80 rounded-2xl p-6 shadow-sm border border-chatter-tan/30">
              <h3 className="font-heading font-semibold text-lg mb-2">
                Do you offer virtual or in-home sessions?
              </h3>
              <p className="text-sm text-chatter-brown/80">
                Yes. Therapy is available in daycares, ABA clinics, private
                schools, select home environments, and via secure teletherapy
                platforms to best support your child&apos;s needs.
              </p>
            </div>
            <div className="bg-white/80 rounded-2xl p-6 shadow-sm border border-chatter-tan/30">
              <h3 className="font-heading font-semibold text-lg mb-2">
                What ages do you work with?
              </h3>
              <p className="text-sm text-chatter-brown/80">
                ChatterHaven serves toddlers through school-age children, with a
                special focus on early intervention, preschool, and elementary
                students.
              </p>
            </div>
            <div className="bg-white/80 rounded-2xl p-6 shadow-sm border border-chatter-tan/30">
              <h3 className="font-heading font-semibold text-lg mb-2">
                How do I get started?
              </h3>
              <p className="text-sm text-chatter-brown/80">
                Submit the consultation form below, and Ashley will follow up
                with you directly to discuss your child&apos;s needs, answer
                questions, and share next steps.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Netlify Contact Form */}
      <section id="contact" className="py-32 px-4 max-w-4xl mx-auto">
        <motion.div
          className="bg-white p-10 md:p-12 rounded-[3rem] shadow-xl border border-chatter-tan/20"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.whileInView}
          viewport={fadeInUp.viewport}
          transition={fadeInUp.transition}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold mb-2 text-chatter-brown">
              Book a Consultation
            </h2>
            <p className="text-chatter-brown/70 italic">
              Share a few details, and we&apos;ll connect about the best next
              steps for your child.
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
                  className="text-sm font-semibold text-chatter-brown/80"
                >
                  Parent / Guardian Name
                </label>
                <input
                  id="parentName"
                  type="text"
                  name="parentName"
                  required
                  className="w-full p-4 rounded-2xl border border-chatter-tan/30 outline-none focus:ring-2 focus:ring-chatter-terracotta bg-chatter-parchment/40"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-semibold text-chatter-brown/80"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="832-910-7448"
                  className="w-full p-4 rounded-2xl border border-chatter-tan/30 outline-none focus:ring-2 focus:ring-chatter-terracotta bg-chatter-parchment/40"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-chatter-brown/80"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full p-4 rounded-2xl border border-chatter-tan/30 outline-none focus:ring-2 focus:ring-chatter-terracotta bg-chatter-parchment/40"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="areaOfConcern"
                  className="text-sm font-semibold text-chatter-brown/80"
                >
                  Area of Concern
                </label>
                <select
                  id="areaOfConcern"
                  name="areaOfConcern"
                  className="w-full p-4 rounded-2xl border border-chatter-tan/30 outline-none bg-chatter-parchment/40 focus:ring-2 focus:ring-chatter-terracotta"
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
                className="text-sm font-semibold text-chatter-brown/80"
              >
                Tell us about your child
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full p-4 rounded-2xl border border-chatter-tan/30 outline-none focus:ring-2 focus:ring-chatter-terracotta bg-chatter-parchment/40"
                placeholder="Share age, current concerns, and any diagnoses or evaluations (if applicable)."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-chatter-terracotta text-white font-heading font-semibold py-4 rounded-2xl shadow-lg hover:bg-chatter-terracotta/90 hover:shadow-xl transition-all"
            >
              Submit Inquiry
            </button>
          </form>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-chatter-tan/30 px-4 bg-chatter-parchment/80">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left text-sm">
          <div>
            <h5 className="font-heading font-semibold text-chatter-brown mb-3 uppercase tracking-[0.25em] text-xs">
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
            <h5 className="font-heading font-semibold text-chatter-brown mb-3 uppercase tracking-[0.25em] text-xs">
              Houston Service Areas
            </h5>
            <p className="text-chatter-brown/80">
              Proudly serving The Heights, Sugar Land, Memorial, Katy, and the
              greater Houston area.
            </p>
          </div>
          <div className="md:text-right text-chatter-brown/60 text-xs italic flex flex-col justify-between gap-2">
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

