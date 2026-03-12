"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
      });

      // Initial setup
      gsap.set([line1Ref.current, line2Ref.current, sublineRef.current, ctaRef.current], {
        opacity: 0,
        y: 80,
      });
      gsap.set(imageRef.current, {
        opacity: 0,
        scale: 1,
        clipPath: "inset(100% 0 0 0)",
      });
      gsap.set(badgeRef.current, {
        opacity: 0,
        y: 20,
      });

      // Animation sequence - staggered text reveals
      tl.to(line1Ref.current, {
        opacity: 1,
        y: 0,
        duration: 1.4,
      })
        .to(
          line2Ref.current,
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
          },
          "-=1.1"
        )
        .to(
          sublineRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
          "-=0.9"
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
            duration: 1.6,
            ease: "power3.inOut",
          },
          "-=1.2"
        )
        .to(
          badgeRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.5"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-[100dvh] min-h-[700px] flex items-center overflow-hidden bg-white"
    >
      {/* Background Image - Macro dental/architectural */}
      <div className="absolute inset-0">
        <div ref={imageRef} className="relative w-full h-full">
          <Image
            src="/dental-office.jpg"
            alt="Musso Family Dentistry office"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            quality={100}
            unoptimized
          />
          {/* Gradient Overlay for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="max-w-3xl">
          {/* Headline - Contrast Driven Typography */}
          <h1 className="leading-[0.95] tracking-tight">
            <span ref={line1Ref} className="block text-lg sm:text-xl lg:text-2xl text-navy/60 font-medium uppercase tracking-widest mb-4">
              Musso Family Dentistry
            </span>
            <span
              ref={line2Ref}
              className="block hero-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl"
            >
              Garland&apos;s Premier Dentist
            </span>
          </h1>

          {/* Subline */}
          <p
            ref={sublineRef}
            className="mt-8 text-lg sm:text-xl text-navy/60 leading-relaxed max-w-xl"
          >
            Where clinical precision meets architectural luxury. We craft smiles
            with the same meticulous attention a master watchmaker devotes to
            each movement.
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-green text-white font-medium rounded-full overflow-hidden"
            >
              <span className="relative z-10">Begin Your Journey</span>
              <ArrowRight className="relative z-10 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-navy transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </a>

            <button className="group flex items-center gap-3 px-6 py-4 text-navy/70 hover:text-navy transition-colors">
              <span className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-clinical group-hover:shadow-clinical-lg transition-shadow">
                <Play className="w-4 h-4 ml-0.5 fill-navy text-navy" />
              </span>
              <span className="font-medium">Watch Our Story</span>
            </button>
          </div>
        </div>

        {/* Floating Badge - Bottom Right */}
        <div
          ref={badgeRef}
          className="absolute bottom-12 right-6 lg:right-12 hidden md:block"
        >
          <div className="clinical-container px-6 py-4 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-navy/10 border-2 border-white flex items-center justify-center"
                >
                  <span className="text-xs font-medium text-navy/60">
                    {["JM", "SK", "DR"][i - 1]}
                  </span>
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-green fill-green"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-navy/60 mt-1">
                <span className="font-semibold text-navy">4.9</span> from 500+
                reviews
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] text-navy/30 uppercase tracking-[0.2em]">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border border-navy/20 flex items-start justify-center p-1">
          <div className="w-1 h-2.5 rounded-full bg-green animate-bounce" />
        </div>
      </div>
    </section>
  );
}
