"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Users, Clock, Shield } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Excellence",
    description:
      "Board-certified specialists with combined 50+ years of advanced training. We never stop learning.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Partnership",
    description:
      "You're not a patient number. You're a partner in your own health journey. Decisions are made together.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Respect",
    description:
      "Your time matters. On-time appointments, transparent timelines, and no-surprise treatment plans.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Integrity",
    description:
      "We recommend only what we'd choose for our own families. Period. No upsells, no unnecessary procedures.",
  },
];

const stats = [
  { value: "25+", label: "Years of Excellence" },
  { value: "15,000+", label: "Smiles Transformed" },
  { value: "98.7%", label: "Patient Satisfaction" },
  { value: "4.9★", label: "Average Rating" },
];

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Quote reveal
      gsap.from(quoteRef.current, {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: quoteRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Values cards stagger
      gsap.from(".value-card", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".values-grid",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Stats counter animation
      gsap.from(".stat-item", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".stats-row",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-navy relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-green/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6">
            <span className="status-dot w-1.5 h-1.5 rounded-full bg-green" />
            Our Philosophy
          </span>
        </div>

        {/* Quote Block */}
        <div ref={quoteRef} className="max-w-4xl mx-auto text-center mb-20">
          <blockquote className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            &ldquo;We don&apos;t practice{" "}
            <span className="text-green">commodity dentistry</span>. We craft
            lasting confidence through precision, artistry, and genuine human
            connection.&rdquo;
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
              <span className="font-display text-lg text-white">DM</span>
            </div>
            <div className="text-left">
              <p className="font-medium text-white">Dr. Michael Musso</p>
              <p className="text-sm text-white/50">Founder & Lead Clinician</p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="values-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((value) => (
            <div
              key={value.title}
              className="value-card p-6 rounded-4xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-2xl bg-green/20 flex items-center justify-center text-green mb-4">
                {value.icon}
              </div>
              <h3 className="font-display text-xl text-white mb-2">
                {value.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="stats-row grid grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-white/10">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item text-center">
              <p className="font-display text-4xl sm:text-5xl text-green font-semibold">
                {stat.value}
              </p>
              <p className="mt-2 text-white/50 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Differentiator Statement */}
        <div className="mt-20 text-center">
          <p className="text-white/40 text-sm max-w-2xl mx-auto">
            Unlike chain practices focused on volume, we limit our patient load to
            ensure every person receives unhurried, thoughtful care. Quality over
            quantity. Always.
          </p>
        </div>
      </div>
    </section>
  );
}
