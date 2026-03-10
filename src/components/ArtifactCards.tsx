"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, Calendar, Clock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

// ============================================
// SMILE SHUFFLER - Before/After Slider
// ============================================
const smileTransformations = [
  {
    id: 1,
    before: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1559839914-17aae19cec71?q=80&w=800&auto=format&fit=crop",
    procedure: "Veneers",
    patient: "Sarah M.",
    testimonial: "I finally smile without hesitation.",
  },
  {
    id: 2,
    before: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop",
    procedure: "Invisalign",
    patient: "Michael R.",
    testimonial: "The confidence boost is immeasurable.",
  },
  {
    id: 3,
    before: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    procedure: "Full Restoration",
    patient: "David K.",
    testimonial: "They gave me my smile back.",
  },
];

function SmileShuffler() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const current = smileTransformations[currentIndex];

  const handleMouseMove = useCallback(
    (e: React.MouseEvent | MouseEvent) => {
      if (!isDragging || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      setSliderPosition((x / rect.width) * 100);
    },
    [isDragging]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const goToPrevious = () => {
    setSliderPosition(50);
    setCurrentIndex((prev) => (prev === 0 ? smileTransformations.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setSliderPosition(50);
    setCurrentIndex((prev) => (prev + 1) % smileTransformations.length);
  };

  return (
    <div className="clinical-container overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-navy/5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-display text-xl text-navy">Smile Shuffler</h3>
            <p className="text-sm text-navy/50 mt-1">Drag to reveal transformation</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={goToPrevious}
              className="w-9 h-9 rounded-full border border-navy/10 flex items-center justify-center text-navy/50 hover:text-green hover:border-green transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={goToNext}
              className="w-9 h-9 rounded-full border border-navy/10 flex items-center justify-center text-navy/50 hover:text-green hover:border-green transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Slider Container */}
      <div
        ref={containerRef}
        className="relative aspect-[16/10] cursor-ew-resize select-none"
        onMouseDown={() => setIsDragging(true)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            {/* Before Image (Full) */}
            <div className="absolute inset-0">
              <Image
                src={current.before}
                alt="Before transformation"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 px-3 py-1.5 bg-navy/80 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                Before
              </div>
            </div>

            {/* After Image (Clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image
                src={current.after}
                alt="After transformation"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 px-3 py-1.5 bg-green/80 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                After
              </div>
            </div>

            {/* Slider Handle - Spring Physics */}
            <div
              className="spring-handle absolute top-0 bottom-0 w-1 bg-white shadow-lg"
              style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-clinical flex items-center justify-center">
                <div className="flex items-center gap-0.5">
                  <ChevronLeft className="w-3 h-3 text-navy" />
                  <ChevronRight className="w-3 h-3 text-navy" />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="p-6 bg-navy/[0.02]">
        <div className="flex items-center justify-between">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-green/10 text-green text-xs font-medium">
              {current.procedure}
            </span>
            <p className="mt-2 text-navy/70 italic">&ldquo;{current.testimonial}&rdquo;</p>
            <p className="text-sm text-navy/40 mt-1">— {current.patient}</p>
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {smileTransformations.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setSliderPosition(50);
                setCurrentIndex(index);
              }}
              className={cn(
                "h-1.5 rounded-full transition-all",
                index === currentIndex ? "w-6 bg-green" : "w-1.5 bg-navy/20 hover:bg-navy/40"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================
// PROTOCOL SCHEDULER - Shimmer Calendar
// ============================================
function ProtocolScheduler() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [hoveredDate, setHoveredDate] = useState<number | null>(null);

  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  const currentYear = currentDate.getFullYear();

  // Generate calendar days
  const daysInMonth = new Date(currentYear, currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentDate.getMonth(), 1).getDay();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const paddingDays = Array.from({ length: firstDayOfMonth }, (_, i) => null);

  // Available slots (mock data)
  const availableSlots = [3, 5, 7, 10, 12, 14, 17, 19, 21, 24, 26, 28];

  return (
    <div className="clinical-container overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-navy/5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-display text-xl text-navy">Schedule Your Visit</h3>
            <p className="text-sm text-navy/50 mt-1">Select an available date</p>
          </div>
          <div className="flex items-center gap-2 text-navy">
            <Calendar className="w-5 h-5" />
            <span className="font-medium">
              {currentMonth} {currentYear}
            </span>
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="p-6">
        {/* Weekday Headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center text-xs text-navy/40 font-medium py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-1">
          {/* Padding for first week */}
          {paddingDays.map((_, index) => (
            <div key={`pad-${index}`} className="aspect-square" />
          ))}

          {/* Actual days */}
          {days.map((day) => {
            const isAvailable = availableSlots.includes(day);
            const isPast = day < currentDate.getDate();
            const isSelected = selectedDate === day;
            const isHovered = hoveredDate === day;

            return (
              <button
                key={day}
                disabled={!isAvailable || isPast}
                onClick={() => setSelectedDate(day)}
                onMouseEnter={() => setHoveredDate(day)}
                onMouseLeave={() => setHoveredDate(null)}
                className={cn(
                  "shimmer-cell aspect-square rounded-xl flex items-center justify-center text-sm font-medium transition-all",
                  isPast && "text-navy/20 cursor-not-allowed",
                  !isPast && !isAvailable && "text-navy/30 cursor-not-allowed",
                  isAvailable && !isPast && "text-navy hover:bg-green/10 hover:text-green cursor-pointer",
                  isSelected && "bg-green text-white hover:bg-green hover:text-white",
                  isHovered && isAvailable && !isSelected && "ring-2 ring-green/30"
                )}
              >
                {day}
              </button>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mt-6 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-green" />
            <span className="text-navy/60">Selected</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-green/20 border border-green/30" />
            <span className="text-navy/60">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-navy/10" />
            <span className="text-navy/60">Unavailable</span>
          </div>
        </div>
      </div>

      {/* Selected Date Action */}
      <AnimatePresence>
        {selectedDate && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-navy/5"
          >
            <div className="p-6 bg-green/5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-green/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-green" />
                  </div>
                  <div>
                    <p className="font-medium text-navy">
                      {currentMonth} {selectedDate}, {currentYear}
                    </p>
                    <p className="text-sm text-navy/60">3 time slots available</p>
                  </div>
                </div>
                <a
                  href={`/contact?date=${currentYear}-${currentDate.getMonth() + 1}-${selectedDate}`}
                  className="group flex items-center gap-2 px-5 py-2.5 bg-green text-white rounded-full text-sm font-medium hover:bg-navy transition-colors"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ============================================
// MAIN ARTIFACT CARDS EXPORT
// ============================================
export default function ArtifactCards() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".artifact-card", {
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".artifact-cards-grid",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green/5 text-green text-sm font-medium mb-6">
            <span className="status-dot w-1.5 h-1.5 rounded-full bg-green" />
            Digital Instruments
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy tracking-tight">
            Precision <span className="hero-serif">Artifacts</span>
          </h2>
          <p className="mt-4 text-lg text-navy/50 max-w-2xl mx-auto">
            Interactive demonstrations of our technical mastery and commitment to
            clinical excellence.
          </p>
        </div>

        {/* Two Artifact Cards Grid */}
        <div className="artifact-cards-grid grid lg:grid-cols-2 gap-6">
          <div className="artifact-card">
            <ProtocolScheduler />
          </div>
          <div className="artifact-card">
            <SmileShuffler />
          </div>
        </div>
      </div>
    </section>
  );
}
