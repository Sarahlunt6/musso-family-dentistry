"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Users, Moon, CircleDot, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const specialties = [
  {
    id: "family",
    title: "Family Dentistry",
    description:
      "We provide comprehensive dental care for patients of all ages, focusing on maintaining optimal oral health for every member of your family.",
    icon: "/icons/family-dentistry.svg",
    href: "/services/family-dentistry",
  },
  {
    id: "sleep",
    title: "Sleep Apnea",
    description:
      "Our expert team of general dentists offers effective sleep apnea solutions such as dental devices, ensuring you achieve restful and restorative sleep.",
    icon: "/icons/sleep-apnea.svg",
    href: "/services/sleep-apnea",
  },
  {
    id: "implants",
    title: "Dental Implants",
    description:
      "We specialize in advanced dental implant procedures to replace missing teeth and restore your smile with a natural look and feel.",
    icon: "/icons/dental-implants.svg",
    href: "/services/dental-implants",
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    description:
      "Our cosmetic dentistry services are designed to enhance the appearance of your smile with personalized treatments that boost your confidence.",
    icon: "/icons/cosmetic-dentistry.svg",
    href: "/services/cosmetic-dentistry",
  },
];

// Icon component using Lucide icons
const SpecialtyIcon = ({ type }: { type: string }) => {
  const iconClass = "w-10 h-10";

  switch (type) {
    case "family":
      return <Users className={iconClass} />;
    case "sleep":
      return <Moon className={iconClass} />;
    case "implants":
      return <CircleDot className={iconClass} />;
    case "cosmetic":
      return <Sparkles className={iconClass} />;
    default:
      return null;
  }
};

export default function Specialties() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Cards stagger animation
      gsap.fromTo(
        ".specialty-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".specialties-grid",
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-gradient-to-b from-white to-[#f0f7f2]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green/5 text-green text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green" />
            What We Offer
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy tracking-tight">
            Our <span className="hero-serif">Specialties</span>
          </h2>
          <p className="mt-4 text-lg text-navy/50 max-w-2xl mx-auto">
            Comprehensive dental care tailored to your unique needs, delivered with
            precision and compassion.
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="specialties-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((specialty) => (
            <div
              key={specialty.id}
              className="specialty-card group"
            >
              <div className="clinical-container p-6 h-full flex flex-col text-center hover:shadow-clinical-lg transition-all duration-300 border-t-4 border-t-green/20 group-hover:border-t-green">
                {/* Icon */}
                <div className="mx-auto mb-6 w-20 h-20 rounded-full border-2 border-green/20 flex items-center justify-center text-green/70 group-hover:text-green group-hover:border-green/40 transition-colors">
                  <SpecialtyIcon type={specialty.id} />
                </div>

                {/* Title */}
                <h3 className="font-display text-lg text-navy uppercase tracking-wide mb-4">
                  {specialty.title}
                </h3>

                {/* Description */}
                <p className="text-navy/60 text-sm leading-relaxed flex-grow mb-6">
                  {specialty.description}
                </p>

                {/* Link */}
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 text-green text-sm font-medium hover:gap-3 transition-all"
                >
                  View More About {specialty.title}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
