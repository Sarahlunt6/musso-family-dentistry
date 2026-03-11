"use client";

import { useState, useEffect, useRef, useCallback } from "react";
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
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Navigation handlers
  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? specialties.length - 1 : prev - 1));
    setExpandedCard(null);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % specialties.length);
    setExpandedCard(null);
  }, []);

  // Drag to scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Toggle card expansion
  const toggleExpand = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
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

      // Carousel animation
      gsap.fromTo(
        ".specialties-carousel",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".specialties-carousel",
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

  // Auto-scroll effect
  useEffect(() => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.querySelector('.specialty-card')?.clientWidth || 0;
      const gap = 24; // gap-6 = 24px
      carouselRef.current.scrollTo({
        left: currentIndex * (cardWidth + gap),
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

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

        {/* Main Content Grid - Carousel + SmileShuffler side by side */}
        <div className={cn(
          "grid gap-8",
          showSmileShuffler ? "lg:grid-cols-[1fr,400px]" : "lg:grid-cols-1"
        )}>
          {/* Left Column: Carousel */}
          <div className="min-w-0">
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
                    aria-label={`Go to slide ${index + 1}`}
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

            {/* Scrolling Carousel */}
            <div
              ref={carouselRef}
              className="specialties-carousel flex gap-6 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing pb-4"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {specialties.map((specialty, index) => {
                const isExpanded = expandedCard === specialty.id;
                const isActive = currentIndex === index;

                return (
                  <motion.div
                    key={specialty.id}
                    className={cn(
                      "specialty-card flex-shrink-0",
                      showSmileShuffler ? "w-[280px] sm:w-[300px]" : "w-[320px] sm:w-[360px] lg:w-[400px]",
                      "transition-transform duration-300",
                      isActive && "scale-[1.02]"
                    )}
                    layout
                  >
                    <div
                      className={cn(
                        "clinical-container h-full flex flex-col overflow-hidden",
                        "transition-all duration-300",
                        isActive ? "shadow-clinical-lg border-green/30" : "hover:shadow-clinical",
                        "border-t-4",
                        isActive ? "border-t-green" : "border-t-green/20"
                      )}
                    >
                      {/* Card Header */}
                      <div className="p-5 pb-3">
                        <div className="flex items-start gap-3">
                          {/* Icon */}
                          <div className={cn(
                            "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
                            isActive
                              ? "bg-green/10 text-green"
                              : "bg-navy/5 text-navy/50"
                          )}>
                            <SpecialtyIcon type={specialty.id} />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="font-display text-lg text-navy mt-3">
                          {specialty.title}
                        </h3>
                      </div>

                      {/* Card Body */}
                      <div className="px-5 flex-grow">
                        <p className="text-navy/60 text-sm leading-relaxed">
                          {specialty.description}
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
                              <div className="pt-3 mt-3 border-t border-navy/10">
                                <p className="text-navy/70 text-sm leading-relaxed">
                                  {specialty.extendedInfo}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Card Footer */}
                      <div className="p-5 pt-3 mt-auto">
                        <div className="flex items-center justify-between">
                          <button
                            onClick={() => toggleExpand(specialty.id)}
                            className={cn(
                              "text-sm font-medium transition-colors",
                              isExpanded ? "text-navy/50" : "text-green hover:text-navy"
                            )}
                          >
                            {isExpanded ? "Show Less" : "Learn More"}
                          </button>

                          <a
                            href="#"
                            className="group inline-flex items-center gap-2 px-3 py-1.5 bg-green/5 hover:bg-green text-green hover:text-white rounded-full text-xs font-medium transition-all"
                          >
                            <span>View</span>
                            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Swipe Hint */}
            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-navy/40 lg:hidden">
              <ChevronLeft className="w-4 h-4" />
              <span>Swipe to explore</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>

          {/* Right Column: Smile Shuffler */}
          {showSmileShuffler && (
            <div className="smile-shuffler-wrapper">
              <div className="sticky top-24">
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
