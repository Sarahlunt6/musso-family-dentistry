"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Shuffle,
  Activity,
  TrendingUp,
  Users,
  Heart,
  Clock,
  ChevronLeft,
  ChevronRight,
  Zap,
  Shield,
  Award,
} from "lucide-react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

// Smile Shuffler Data
const smileTransformations = [
  {
    id: 1,
    before:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
    after:
      "https://images.unsplash.com/photo-1559839914-17aae19cec71?q=80&w=800&auto=format&fit=crop",
    procedure: "Veneers",
    duration: "2 visits",
    patient: "Sarah M.",
    testimonial: "I finally smile without hesitation.",
  },
  {
    id: 2,
    before:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    after:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop",
    procedure: "Invisalign",
    duration: "12 months",
    patient: "Michael R.",
    testimonial: "The confidence boost is immeasurable.",
  },
  {
    id: 3,
    before:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    after:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    procedure: "Full Restoration",
    duration: "6 visits",
    patient: "David K.",
    testimonial: "They gave me my smile back.",
  },
];

// Telemetry Data
interface TelemetryMetric {
  id: string;
  label: string;
  value: number;
  unit: string;
  trend: number;
  icon: React.ReactNode;
  color: string;
}

const telemetryMetrics: TelemetryMetric[] = [
  {
    id: "satisfaction",
    label: "Patient Satisfaction",
    value: 98.7,
    unit: "%",
    trend: 2.3,
    icon: <Heart className="w-5 h-5" />,
    color: "text-rose-500",
  },
  {
    id: "appointments",
    label: "On-Time Starts",
    value: 96.2,
    unit: "%",
    trend: 1.8,
    icon: <Clock className="w-5 h-5" />,
    color: "text-forest",
  },
  {
    id: "success",
    label: "Treatment Success",
    value: 99.4,
    unit: "%",
    trend: 0.6,
    icon: <Shield className="w-5 h-5" />,
    color: "text-navy",
  },
  {
    id: "referrals",
    label: "Patient Referrals",
    value: 847,
    unit: "",
    trend: 12.4,
    icon: <Users className="w-5 h-5" />,
    color: "text-gold",
  },
];

// Smile Shuffler Component
function SmileShuffler() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);

  const current = smileTransformations[currentIndex];

  const shuffle = useCallback(() => {
    setIsShuffling(true);
    setIsRevealed(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % smileTransformations.length);
      setIsShuffling(false);
    }, 400);
  }, []);

  const goToPrevious = useCallback(() => {
    setIsRevealed(false);
    setCurrentIndex((prev) =>
      prev === 0 ? smileTransformations.length - 1 : prev - 1
    );
  }, []);

  const goToNext = useCallback(() => {
    setIsRevealed(false);
    setCurrentIndex((prev) => (prev + 1) % smileTransformations.length);
  }, []);

  return (
    <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl shadow-forest/10">
      {/* Header */}
      <div className="p-6 border-b border-navy/5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-display text-xl text-navy">Smile Shuffler</h3>
            <p className="text-sm text-navy/60 mt-1">
              Real transformations, real patients
            </p>
          </div>
          <button
            onClick={shuffle}
            disabled={isShuffling}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full bg-forest text-cream text-sm font-medium",
              "hover:bg-navy transition-colors",
              isShuffling && "opacity-50 cursor-not-allowed"
            )}
          >
            <Shuffle
              className={cn("w-4 h-4", isShuffling && "animate-spin")}
            />
            Shuffle
          </button>
        </div>
      </div>

      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            {/* Before Image */}
            <div
              className={cn(
                "absolute inset-0 transition-all duration-700 ease-out",
                isRevealed ? "clip-path-left" : "clip-path-full"
              )}
              style={{
                clipPath: isRevealed
                  ? "inset(0 50% 0 0)"
                  : "inset(0 0 0 0)",
              }}
            >
              <Image
                src={current.before}
                alt="Before transformation"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 px-3 py-1.5 bg-navy/80 backdrop-blur-sm rounded-full text-cream text-xs font-medium">
                Before
              </div>
            </div>

            {/* After Image */}
            <div
              className={cn(
                "absolute inset-0 transition-all duration-700 ease-out",
                isRevealed ? "clip-path-right opacity-100" : "clip-path-hidden opacity-0"
              )}
              style={{
                clipPath: isRevealed
                  ? "inset(0 0 0 50%)"
                  : "inset(0 0 0 100%)",
              }}
            >
              <Image
                src={current.after}
                alt="After transformation"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 px-3 py-1.5 bg-forest/80 backdrop-blur-sm rounded-full text-cream text-xs font-medium">
                After
              </div>
            </div>

            {/* Reveal Slider */}
            <div
              className={cn(
                "absolute top-0 bottom-0 w-1 bg-gold transition-all duration-700",
                isRevealed ? "left-1/2" : "left-0 opacity-0"
              )}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gold flex items-center justify-center shadow-lg">
                <ChevronLeft className="w-4 h-4 text-navy" />
                <ChevronRight className="w-4 h-4 text-navy -ml-1" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Reveal Button */}
        <button
          onClick={() => setIsRevealed(!isRevealed)}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2.5 glass rounded-full text-navy text-sm font-medium hover:bg-white transition-colors"
        >
          {isRevealed ? "Hide Transformation" : "Reveal Transformation"}
        </button>
      </div>

      {/* Info Footer */}
      <div className="p-6 bg-gradient-to-r from-forest/5 to-transparent">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-forest/10 text-forest text-xs font-medium">
                {current.procedure}
              </span>
              <span className="text-sm text-navy/60">{current.duration}</span>
            </div>
            <p className="mt-2 text-navy/80 italic">
              &ldquo;{current.testimonial}&rdquo;
            </p>
            <p className="mt-1 text-sm text-navy/50">— {current.patient}</p>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-2">
            <button
              onClick={goToPrevious}
              className="w-10 h-10 rounded-full border border-navy/10 flex items-center justify-center text-navy/60 hover:text-forest hover:border-forest transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="w-10 h-10 rounded-full border border-navy/10 flex items-center justify-center text-navy/60 hover:text-forest hover:border-forest transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {smileTransformations.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsRevealed(false);
                setCurrentIndex(index);
              }}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                index === currentIndex
                  ? "bg-forest w-6"
                  : "bg-navy/20 hover:bg-navy/40"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Telemetry Feed Component
function TelemetryFeed() {
  const [metrics, setMetrics] = useState(telemetryMetrics);
  const [isLive, setIsLive] = useState(true);

  // Simulate live data updates
  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      setMetrics((prev) =>
        prev.map((metric) => ({
          ...metric,
          value:
            metric.unit === "%"
              ? Math.min(
                  100,
                  Math.max(
                    90,
                    metric.value + (Math.random() - 0.5) * 0.5
                  )
                )
              : Math.round(
                  metric.value + (Math.random() - 0.3) * 5
                ),
          trend: Number(
            (metric.trend + (Math.random() - 0.5) * 0.5).toFixed(1)
          ),
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isLive]);

  return (
    <div className="relative bg-navy rounded-3xl overflow-hidden shadow-xl shadow-navy/20">
      {/* Header */}
      <div className="p-6 border-b border-cream/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center">
              <Activity className="w-5 h-5 text-gold" />
            </div>
            <div>
              <h3 className="font-display text-xl text-cream">
                Practice Telemetry
              </h3>
              <p className="text-sm text-cream/50 mt-0.5">
                Real-time performance metrics
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsLive(!isLive)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors",
              isLive
                ? "bg-forest/20 text-forest"
                : "bg-cream/10 text-cream/60"
            )}
          >
            <span
              className={cn(
                "w-2 h-2 rounded-full",
                isLive ? "bg-forest animate-pulse" : "bg-cream/40"
              )}
            />
            {isLive ? "Live" : "Paused"}
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="p-6 grid grid-cols-2 gap-4">
        {metrics.map((metric) => (
          <motion.div
            key={metric.id}
            layout
            className="p-4 rounded-2xl bg-cream/5 border border-cream/5"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className={metric.color}>{metric.icon}</span>
              <span className="text-sm text-cream/60">{metric.label}</span>
            </div>

            <div className="flex items-end justify-between">
              <motion.div
                key={metric.value}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-baseline gap-1"
              >
                <span className="text-3xl font-display font-semibold text-cream">
                  {metric.unit === "%"
                    ? metric.value.toFixed(1)
                    : Math.round(metric.value)}
                </span>
                <span className="text-cream/50 text-sm">{metric.unit}</span>
              </motion.div>

              <div
                className={cn(
                  "flex items-center gap-1 text-sm",
                  metric.trend >= 0 ? "text-forest" : "text-rose-400"
                )}
              >
                <TrendingUp
                  className={cn(
                    "w-4 h-4",
                    metric.trend < 0 && "rotate-180"
                  )}
                />
                <span>{Math.abs(metric.trend).toFixed(1)}%</span>
              </div>
            </div>

            {/* Mini Chart */}
            <div className="mt-3 h-8 flex items-end gap-0.5">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex-1 rounded-t transition-all duration-500",
                    metric.color.replace("text-", "bg-").replace("500", "400")
                  )}
                  style={{
                    height: `${30 + Math.random() * 70}%`,
                    opacity: 0.3 + (i / 12) * 0.7,
                  }}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Stats */}
      <div className="px-6 py-4 bg-cream/5 border-t border-cream/5">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-gold" />
              <span className="text-cream/60">System Status:</span>
              <span className="text-forest font-medium">Optimal</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-gold" />
            <span className="text-cream/50">Top 5% Nationwide</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Feature Cards Component
export default function FeatureCards() {
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

      gsap.from(".feature-card", {
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".feature-cards-container",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest/5 text-forest text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-forest animate-pulse" />
            Interactive Experience
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy tracking-tight">
            See the <span className="gradient-text">Difference</span>
          </h2>
          <p className="mt-4 text-lg text-navy/60 max-w-2xl mx-auto">
            Explore real patient transformations and our commitment to
            measurable excellence.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="feature-cards-container grid lg:grid-cols-2 gap-8">
          <div className="feature-card">
            <SmileShuffler />
          </div>
          <div className="feature-card">
            <TelemetryFeed />
          </div>
        </div>
      </div>
    </section>
  );
}
