"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Users, Moon, CircleDot, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SmileShuffler } from "@/components/ArtifactCards";

gsap.registerPlugin(ScrollTrigger);

const specialties = [
  {
    id: "family",
    title: "Family Dentistry",
    description:
      "We provide comprehensive dental care for patients of all ages, focusing on maintaining optimal oral health for every member of your family.",
    extendedInfo: "From routine cleanings and exams to fillings and preventive care, we ensure your entire family receives personalized attention in a comfortable environment.",
    icon: "/icons/family-dentistry.svg",
    href: "/services/family-dentistry",
  },
  {
    id: "sleep",
    title: "Sleep Apnea",
    description:
      "Our expert team of general dentists offers effective sleep apnea solutions such as dental devices, ensuring you achieve restful and restorative sleep.",
    extendedInfo: "Custom oral appliances can reposition your jaw to keep airways open, offering a comfortable alternative to CPAP machines for mild to moderate sleep apnea.",
    icon: "/icons/sleep-apnea.svg",
    href: "/services/sleep-apnea",
  },
  {
    id: "implants",
    title: "Dental Implants",
    description:
      "We specialize in advanced dental implant procedures to replace missing teeth and restore your smile with a natural look and feel.",
    extendedInfo: "Our implant solutions include single tooth replacements, implant-supported bridges, and full-arch restorations using the latest techniques and materials.",
    icon: "/icons/dental-implants.svg",
    href: "/services/dental-implants",
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    description:
      "Our cosmetic dentistry services are designed to enhance the appearance of your smile with personalized treatments that boost your confidence.",
    extendedInfo: "Services include professional teeth whitening, porcelain veneers, bonding, and smile makeovers tailored to achieve your ideal aesthetic goals.",
    icon: "/icons/cosmetic-dentistry.svg",
    href: "/services/cosmetic-dentistry",
  },
];

// Icon component using Lucide icons
const SpecialtyIcon = ({ type }: { type: string }) => {
  const iconClass = "w-8 h-8";

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

interface SpecialtiesProps {
  showSmileShuffler?: boolean;
}

export default function Specialties({ showSmileShuffler = false }: SpecialtiesProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  // Navigation handlers
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? specialties.length - 1 : prev - 1));
    setExpandedCard(null);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % specialties.length);
    setExpandedCard(null);
  };

  // Toggle card expansion
  const toggleExpand = () => {
    const currentId = specialties[currentIndex].id;
    setExpandedCard(expandedCard === currentId ? null : currentId);
  };

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

      // Content animation
      gsap.fromTo(
        ".specialties-content",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".specialties-content",
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      // Smile shuffler animation (if present)
      if (showSmileShuffler) {
        gsap.fromTo(
          ".smile-shuffler-wrapper",
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".smile-shuffler-wrapper",
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [showSmileShuffler]);

  const currentSpecialty = specialties[currentIndex];
  const isExpanded = expandedCard === currentSpecialty.id;

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-gradient-to-b from-white to-[#f0f7f2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-12">
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

        {/* Main Content Grid */}
        <div className={cn(
          "specialties-content grid gap-8",
          showSmileShuffler ? "lg:grid-cols-2" : "lg:grid-cols-1 max-w-2xl mx-auto"
        )}>
          {/* Left Column: Single Card Display */}
          <div>
            {/* Navigation Controls */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                {specialties.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setExpandedCard(null);
                    }}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      index === currentIndex
                        ? "w-8 bg-green"
                        : "w-2 bg-navy/20 hover:bg-navy/40"
                    )}
                    aria-label={`Go to specialty ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={goToPrevious}
                  className="w-10 h-10 rounded-full border border-navy/10 flex items-center justify-center text-navy/50 hover:text-green hover:border-green transition-colors"
                  aria-label="Previous specialty"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={goToNext}
                  className="w-10 h-10 rounded-full border border-navy/10 flex items-center justify-center text-navy/50 hover:text-green hover:border-green transition-colors"
                  aria-label="Next specialty"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Single Card with Animation */}
            <div className="relative min-h-[320px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSpecialty.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-full"
                >
                  <div className="clinical-container h-full flex flex-col overflow-hidden shadow-clinical-lg border-t-4 border-t-green">
                    {/* Card Header */}
                    <div className="p-6 pb-4">
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-green/10 text-green">
                          <SpecialtyIcon type={currentSpecialty.id} />
                        </div>

                        {/* Counter */}
                        <div className="ml-auto text-sm text-navy/40 font-medium">
                          {currentIndex + 1} / {specialties.length}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-2xl text-navy mt-4">
                        {currentSpecialty.title}
                      </h3>
                    </div>

                    {/* Card Body */}
                    <div className="px-6 flex-grow">
                      <p className="text-navy/60 text-base leading-relaxed">
                        {currentSpecialty.description}
                      </p>

                      {/* Expandable Content */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 mt-4 border-t border-navy/10">
                              <p className="text-navy/70 text-base leading-relaxed">
                                {currentSpecialty.extendedInfo}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Card Footer */}
                    <div className="p-6 pt-4 mt-auto">
                      <div className="flex items-center justify-between">
                        <button
                          onClick={toggleExpand}
                          className={cn(
                            "text-sm font-medium transition-colors",
                            isExpanded ? "text-navy/50" : "text-green hover:text-navy"
                          )}
                        >
                          {isExpanded ? "Show Less" : "Learn More"}
                        </button>

                        <a
                          href="#"
                          className="group inline-flex items-center gap-2 px-4 py-2 bg-green/5 hover:bg-green text-green hover:text-white rounded-full text-sm font-medium transition-all"
                        >
                          <span>View Service</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Smile Shuffler */}
          {showSmileShuffler && (
            <div className="smile-shuffler-wrapper">
              <div className="lg:sticky lg:top-24">
                <div className="mb-4">
                  <p className="text-xs text-green font-medium uppercase tracking-wide mb-2">Real Results</p>
                  <h3 className="font-display text-xl text-navy">See the Transformation</h3>
                  <p className="text-sm text-navy/50 mt-1">Drag to reveal before & after</p>
                </div>
                <SmileShuffler />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
