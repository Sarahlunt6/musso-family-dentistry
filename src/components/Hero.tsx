"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ArrowRight, Play, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      // Initial setup
      gsap.set([headlineRef.current, sublineRef.current, ctaRef.current, statsRef.current], {
        opacity: 0,
        y: 60,
      });
      gsap.set(imageRef.current, {
        opacity: 0,
        scale: 1.1,
        clipPath: "inset(100% 0 0 0)",
      });
      gsap.set(badgeRef.current, {
        opacity: 0,
        x: -20,
      });

      // Animation sequence
      tl.to(headlineRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
      })
        .to(
          sublineRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
          "-=0.8"
        )
        .to(
          ctaRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.6"
        )
        .to(
          imageRef.current,
          {
            opacity: 1,
            scale: 1,
            clipPath: "inset(0% 0 0 0)",
            duration: 1.4,
            ease: "power3.inOut",
          },
          "-=1"
        )
        .to(
          badgeRef.current,
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
          },
          "-=0.4"
        )
        .to(
          statsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.4"
        );

      // Floating animation for badge
      gsap.to(badgeRef.current, {
        y: -8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream to-forest/5 pointer-events-none" />

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-forest/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Column */}
          <div className="order-2 lg:order-1">
            {/* Headline */}
            <h1
              ref={headlineRef}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-navy leading-[1.1] tracking-tight"
            >
              Precision Care,{" "}
              <span className="relative">
                <span className="gradient-text">Lasting</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8C50 4 150 4 198 8"
                    stroke="#D4AF37"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              Confidence
            </h1>

            {/* Subline */}
            <p
              ref={sublineRef}
              className="mt-6 text-lg sm:text-xl text-navy/70 leading-relaxed max-w-xl"
            >
              Where clinical excellence meets patient-centered care. Experience
              dentistry reimagined through advanced technology, meticulous
              technique, and genuine human connection.
            </p>

            {/* CTA Buttons */}
            <div
              ref={ctaRef}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="/contact"
                className="magnetic-button group relative inline-flex items-center gap-2 px-8 py-4 bg-forest text-cream font-medium rounded-full overflow-hidden"
              >
                <span className="relative z-10">Schedule Consultation</span>
                <ArrowRight className="relative z-10 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-navy transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </a>

              <button className="group flex items-center gap-3 px-6 py-4 text-navy hover:text-forest transition-colors">
                <span className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg shadow-forest/10 group-hover:shadow-xl group-hover:shadow-forest/15 transition-shadow">
                  <Play className="w-4 h-4 ml-0.5 fill-forest text-forest" />
                  <span className="absolute inset-0 rounded-full border-2 border-forest/20 group-hover:border-forest/40 transition-colors" />
                </span>
                <span className="font-medium">Watch Our Story</span>
              </button>
            </div>

            {/* Stats */}
            <div
              ref={statsRef}
              className="mt-12 pt-8 border-t border-navy/10 grid grid-cols-3 gap-8"
            >
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-display font-semibold text-forest">
                    25
                  </span>
                  <span className="text-forest text-lg">+</span>
                </div>
                <p className="mt-1 text-sm text-navy/60">Years Excellence</p>
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-display font-semibold text-forest">
                    15k
                  </span>
                  <span className="text-forest text-lg">+</span>
                </div>
                <p className="mt-1 text-sm text-navy/60">Happy Patients</p>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-3xl sm:text-4xl font-display font-semibold text-forest">
                    4.9
                  </span>
                  <Star className="w-5 h-5 fill-gold text-gold" />
                </div>
                <p className="mt-1 text-sm text-navy/60">Patient Rating</p>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="order-1 lg:order-2 relative">
            <div
              ref={imageRef}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-forest/20"
            >
              <Image
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop"
                alt="Modern dental office with state-of-the-art equipment"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 via-transparent to-transparent" />
            </div>

            {/* Floating Badge */}
            <div
              ref={badgeRef}
              className="absolute -left-4 sm:-left-8 top-1/4 glass-dark px-5 py-4 rounded-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-gold"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-cream font-medium">Top Rated</p>
                  <p className="text-cream/60 text-sm">2024 Excellence</p>
                </div>
              </div>
            </div>

            {/* Decorative Dots */}
            <div className="absolute -right-4 bottom-1/4 grid grid-cols-3 gap-2">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "w-2 h-2 rounded-full",
                    i % 2 === 0 ? "bg-forest/30" : "bg-gold/30"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-navy/40 uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-navy/20 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-forest animate-bounce" />
        </div>
      </div>
    </section>
  );
}
