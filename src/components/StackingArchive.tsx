"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Compass, Sparkles, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface ProtocolCard {
  id: string;
  number: string;
  phase: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  details: string[];
}

const protocols: ProtocolCard[] = [
  {
    id: "discovery",
    number: "01",
    phase: "Phase One",
    title: "Discovery",
    description:
      "We begin with deep listening. Your goals, concerns, and vision for your smile guide every decision. Advanced 3D imaging reveals the complete picture, while our team takes the time to understand not just your teeth, but you.",
    icon: <Compass className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop",
    details: [
      "Comprehensive oral assessment",
      "3D CBCT imaging analysis",
      "Digital smile preview",
      "Personalized consultation",
    ],
  },
  {
    id: "artistry",
    number: "02",
    phase: "Phase Two",
    title: "Artistry",
    description:
      "Here, science meets craft. Using precision techniques refined over decades, we execute your treatment with meticulous attention to every detail. Premium materials, advanced technology, and steady hands transform your smile.",
    icon: <Sparkles className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop",
    details: [
      "CAD/CAM precision fabrication",
      "Premium E-Max ceramics",
      "Minimally invasive approach",
      "Comfort-first protocols",
    ],
  },
  {
    id: "longevity",
    number: "03",
    phase: "Phase Three",
    title: "Longevity",
    description:
      "Your transformation doesn't end when you leave our chair. We design maintenance programs that protect your investment for decades. Education, support, and ongoing partnership ensure lasting confidence.",
    icon: <Heart className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop",
    details: [
      "Customized maintenance plan",
      "Preventive care scheduling",
      "Lifetime support network",
      "Wellness integration",
    ],
  },
];

export default function StackingArchive() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance
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

      // Get all cards
      const cards = gsap.utils.toArray<HTMLElement>(".stack-card");

      cards.forEach((card, index) => {
        const isLast = index === cards.length - 1;

        // Pin each card and animate exit
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          end: isLast ? "top top" : "+=100%",
          pin: true,
          pinSpacing: !isLast,
          scrub: 1,
          onUpdate: (self) => {
            if (!isLast) {
              // Scale down to 0.9 and blur on exit
              const scale = 1 - self.progress * 0.1;
              const blur = self.progress * 15;
              const opacity = 1 - self.progress * 0.5;

              gsap.set(card, {
                scale,
                filter: `blur(${blur}px)`,
                opacity,
                transformOrigin: "center center",
              });
            }
          },
        });

        // Card entrance animation
        gsap.from(card.querySelector(".card-content"), {
          opacity: 0,
          y: 60,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white">
      {/* Section Header */}
      <div className="py-24 lg:py-32">
        <div ref={headerRef} className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green/5 text-green text-sm font-medium mb-6">
            <span className="status-dot w-1.5 h-1.5 rounded-full bg-green" />
            The Patient Journey
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy tracking-tight max-w-3xl mx-auto">
            Three Phases to{" "}
            <span className="hero-serif">Lasting Confidence</span>
          </h2>
          <p className="mt-6 text-lg text-navy/50 max-w-2xl mx-auto">
            A systematic approach refined over 25 years, combining clinical
            science with genuine human care.
          </p>
        </div>
      </div>

      {/* Stacking Cards */}
      <div className="relative">
        {protocols.map((protocol, index) => (
          <div
            key={protocol.id}
            className={cn(
              "stack-card stack-card-exit relative w-full min-h-screen",
              "bg-white"
            )}
            style={{ zIndex: index + 1 }}
          >
            <div className="card-content absolute inset-0 flex items-center">
              <div className="w-full max-w-7xl mx-auto px-6">
                <div
                  className={cn(
                    "clinical-container overflow-hidden",
                    "grid lg:grid-cols-2 min-h-[600px]"
                  )}
                >
                  {/* Content Side */}
                  <div
                    className={cn(
                      "p-8 sm:p-12 lg:p-16 flex flex-col justify-center",
                      index % 2 === 1 && "lg:order-2"
                    )}
                  >
                    {/* Phase Label */}
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-7xl font-display font-bold text-navy/5">
                        {protocol.number}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-green/10 flex items-center justify-center text-green">
                        {protocol.icon}
                      </div>
                    </div>

                    <span className="text-sm text-green font-medium tracking-wide uppercase">
                      {protocol.phase}
                    </span>
                    <h3 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl text-navy">
                      {protocol.title}
                    </h3>
                    <p className="mt-6 text-navy/60 leading-relaxed text-lg">
                      {protocol.description}
                    </p>

                    {/* Details */}
                    <div className="mt-8 grid grid-cols-2 gap-4">
                      {protocol.details.map((detail) => (
                        <div
                          key={detail}
                          className="flex items-center gap-2 text-sm text-navy/70"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-green" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href={`/process/${protocol.id}`}
                      className="inline-flex items-center gap-2 mt-10 text-green font-medium hover-underline"
                    >
                      Learn More About {protocol.title}
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </div>

                  {/* Image Side */}
                  <div
                    className={cn(
                      "relative min-h-[400px] lg:min-h-full",
                      index % 2 === 1 && "lg:order-1"
                    )}
                  >
                    <Image
                      src={protocol.image}
                      alt={protocol.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />

                    {/* Phase Number Overlay */}
                    <div
                      className={cn(
                        "absolute bottom-0 w-28 h-28 bg-green flex items-center justify-center",
                        index % 2 === 0 ? "right-0 rounded-tl-4xl" : "left-0 rounded-tr-4xl"
                      )}
                    >
                      <span className="font-display text-4xl font-bold text-white">
                        {protocol.number}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
