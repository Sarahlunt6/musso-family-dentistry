"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Scan,
  PenTool,
  Shield,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface ProtocolCard {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  features: string[];
  accent: string;
}

const protocols: ProtocolCard[] = [
  {
    id: "diagnose",
    number: "01",
    title: "Precision Diagnostics",
    subtitle: "See Everything",
    description:
      "Advanced 3D imaging and AI-assisted analysis reveal what traditional methods miss. We map your oral health with scientific precision before any treatment begins.",
    icon: <Scan className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop",
    features: [
      "CBCT 3D Imaging",
      "Digital Impressions",
      "AI Analysis",
      "Comprehensive Mapping",
    ],
    accent: "from-forest to-forest/80",
  },
  {
    id: "design",
    number: "02",
    title: "Collaborative Design",
    subtitle: "Your Vision, Our Expertise",
    description:
      "Together, we craft your treatment plan. Digital smile design lets you preview results before we begin. No surprises—just informed decisions and shared goals.",
    icon: <PenTool className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Digital Smile Design",
      "Treatment Preview",
      "Personalized Plans",
      "Clear Timeline",
    ],
    accent: "from-navy to-navy/80",
  },
  {
    id: "protect",
    number: "03",
    title: "Clinical Excellence",
    subtitle: "Meticulous Execution",
    description:
      "Every procedure follows evidence-based protocols with premium materials. Our clinicians combine decades of experience with continuous advanced training.",
    icon: <Shield className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Board Certified Team",
      "Premium Materials",
      "Sterile Environment",
      "Comfort Protocols",
    ],
    accent: "from-forest to-navy",
  },
  {
    id: "transform",
    number: "04",
    title: "Lasting Results",
    subtitle: "Beyond the Chair",
    description:
      "Your transformation extends beyond treatment day. Ongoing support, maintenance programs, and education ensure your investment in health pays dividends for years.",
    icon: <Sparkles className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop",
    features: [
      "Maintenance Plans",
      "Follow-up Care",
      "Patient Education",
      "Lifetime Support",
    ],
    accent: "from-gold to-gold/80",
  },
];

export default function ProtocolStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
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

      // Card stacking animation
      const cards = gsap.utils.toArray<HTMLElement>(".protocol-card");

      cards.forEach((card, index) => {
        const isLast = index === cards.length - 1;

        ScrollTrigger.create({
          trigger: card,
          start: "top 20%",
          end: isLast ? "top 20%" : "bottom 20%",
          pin: !isLast,
          pinSpacing: false,
          scrub: 1,
          onUpdate: (self) => {
            if (!isLast) {
              const scale = 1 - self.progress * 0.05;
              const opacity = 1 - self.progress * 0.3;
              gsap.set(card, {
                scale,
                opacity,
                transformOrigin: "center top",
              });
            }
          },
        });

        // Card entrance animation
        gsap.from(card, {
          opacity: 0,
          y: 100,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-cream"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-forest/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest/5 text-forest text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-forest animate-pulse" />
            Our Protocol
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy tracking-tight max-w-3xl mx-auto">
            Four Pillars of{" "}
            <span className="gradient-text">Exceptional Care</span>
          </h2>
          <p className="mt-6 text-lg text-navy/60 max-w-2xl mx-auto">
            A systematic approach refined over 25 years, combining clinical
            science with genuine human care.
          </p>
        </div>

        {/* Stacking Cards */}
        <div ref={cardsContainerRef} className="relative space-y-8">
          {protocols.map((protocol, index) => (
            <div
              key={protocol.id}
              className={cn(
                "protocol-card relative rounded-3xl overflow-hidden",
                "shadow-xl shadow-forest/10 bg-cream"
              )}
              style={{
                zIndex: index + 1,
              }}
            >
              <div className="grid lg:grid-cols-2 min-h-[500px]">
                {/* Content Side */}
                <div
                  className={cn(
                    "p-8 sm:p-10 lg:p-14 flex flex-col justify-center",
                    index % 2 === 1 && "lg:order-2"
                  )}
                >
                  {/* Number & Icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-6xl font-display font-bold text-navy/10">
                      {protocol.number}
                    </span>
                    <div
                      className={cn(
                        "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center text-cream",
                        protocol.accent
                      )}
                    >
                      {protocol.icon}
                    </div>
                  </div>

                  {/* Text Content */}
                  <span className="text-sm text-forest font-medium tracking-wide uppercase">
                    {protocol.subtitle}
                  </span>
                  <h3 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl text-navy">
                    {protocol.title}
                  </h3>
                  <p className="mt-4 text-navy/70 leading-relaxed">
                    {protocol.description}
                  </p>

                  {/* Features List */}
                  <div className="mt-8 grid grid-cols-2 gap-3">
                    {protocol.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-navy/80"
                      >
                        <CheckCircle2 className="w-4 h-4 text-forest flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={`/services/${protocol.id}`}
                    className="inline-flex items-center gap-2 mt-8 text-forest font-medium hover-underline"
                  >
                    Learn More
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
                    "relative min-h-[300px] lg:min-h-full",
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

                  {/* Gradient Overlay */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-r opacity-30",
                      index % 2 === 0
                        ? "from-cream via-transparent to-transparent"
                        : "from-transparent via-transparent to-cream"
                    )}
                  />

                  {/* Corner Accent */}
                  <div
                    className={cn(
                      "absolute bottom-0 w-24 h-24",
                      index % 2 === 0 ? "right-0" : "left-0"
                    )}
                  >
                    <div
                      className={cn(
                        "w-full h-full bg-gradient-to-br",
                        protocol.accent,
                        index % 2 === 0
                          ? "rounded-tl-3xl"
                          : "rounded-tr-3xl"
                      )}
                      style={{ opacity: 0.9 }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-cream font-display text-2xl font-bold">
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
      </div>
    </section>
  );
}
