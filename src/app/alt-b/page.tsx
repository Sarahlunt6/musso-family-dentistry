"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  Play,
  Star,
  Award,
  Clock,
  Sparkles,
  Shield,
  Heart,
  Check,
  ChevronDown,
  Building2,
  Camera,
  Users,
  Cpu,
  Stethoscope,
  Smile,
  ShoppingBag,
  Wrench,
  Moon,
  Syringe,
  BookOpen,
  CreditCard,
  FileText,
  User,
  Leaf,
  PenLine,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Specialties from "@/components/Specialties";

gsap.registerPlugin(ScrollTrigger);

// ============================================
// ALTERNATIVE B: ARCHITECTURAL ELEGANCE
// Clean lines, premium feel, refined typography
// ============================================

const navigation = [
  {
    label: "Mockups",
    items: [
      {
        label: "Mockup 1",
        href: "/",
        icon: <Building2 className="w-4 h-4" />,
        description: "Main design with floating island nav",
      },
      {
        label: "Mockup 2",
        href: "/alt-a",
        icon: <Sparkles className="w-4 h-4" />,
        description: "Warm professional design",
      },
      {
        label: "Mockup 3",
        href: "/alt-b",
        icon: <Award className="w-4 h-4" />,
        description: "Architectural elegance design",
      },
    ],
  },
  {
    label: "About",
    items: [
      {
        label: "About Us",
        href: "#",
        icon: <Building2 className="w-4 h-4" />,
        description: "Our philosophy and approach",
      },
      {
        label: "Meet the Team",
        href: "#",
        icon: <Users className="w-4 h-4" />,
        description: "Expert clinicians dedicated to you",
      },
      {
        label: "Office Tour",
        href: "#",
        icon: <Camera className="w-4 h-4" />,
        description: "Experience our modern facility",
      },
    ],
  },
  {
    label: "Services",
    items: [
      {
        label: "Cosmetic",
        href: "#",
        icon: <Sparkles className="w-4 h-4" />,
        description: "Veneers, whitening & smile design",
      },
      {
        label: "Technology",
        href: "#",
        icon: <Cpu className="w-4 h-4" />,
        description: "Digital imaging & CAD/CAM",
      },
      {
        label: "General",
        href: "#",
        icon: <Stethoscope className="w-4 h-4" />,
        description: "Preventive care & checkups",
      },
      {
        label: "Oral Health",
        href: "#",
        icon: <Heart className="w-4 h-4" />,
        description: "Gum health & disease prevention",
      },
      {
        label: "Ortho",
        href: "#",
        icon: <Smile className="w-4 h-4" />,
        description: "Invisalign & clear aligners",
      },
      {
        label: "Products",
        href: "#",
        icon: <ShoppingBag className="w-4 h-4" />,
        description: "Professional-grade oral care",
      },
      {
        label: "Restorative",
        href: "#",
        icon: <Wrench className="w-4 h-4" />,
        description: "Implants, crowns & bridges",
      },
      {
        label: "Sleep",
        href: "#",
        icon: <Moon className="w-4 h-4" />,
        description: "Apnea treatment & solutions",
      },
      {
        label: "Botox",
        href: "#",
        icon: <Syringe className="w-4 h-4" />,
        description: "Therapeutic & aesthetic Botox",
      },
    ],
  },
  {
    label: "Patient Info",
    items: [
      {
        label: "Resources",
        href: "#",
        icon: <BookOpen className="w-4 h-4" />,
        description: "Educational materials & guides",
      },
      {
        label: "Financial",
        href: "#",
        icon: <CreditCard className="w-4 h-4" />,
        description: "Insurance & payment options",
      },
      {
        label: "Forms",
        href: "#",
        icon: <FileText className="w-4 h-4" />,
        description: "New patient paperwork",
      },
      {
        label: "Portal",
        href: "#",
        icon: <User className="w-4 h-4" />,
        description: "Access your health records",
      },
      {
        label: "Wellness",
        href: "#",
        icon: <Leaf className="w-4 h-4" />,
        description: "Holistic health integration",
      },
      {
        label: "Blogs",
        href: "#",
        icon: <PenLine className="w-4 h-4" />,
        description: "Insights & dental tips",
      },
    ],
  },
];

const expertise = [
  {
    number: "01",
    title: "Discovery",
    description: "Deep listening, 3D imaging, and comprehensive assessment reveal the complete picture of your oral health.",
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    number: "02",
    title: "Artistry",
    description: "Precision techniques refined over decades transform your smile with meticulous attention to every detail.",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    number: "03",
    title: "Partnership",
    description: "Your transformation continues with maintenance programs designed to protect your investment for decades.",
    icon: <Heart className="w-5 h-5" />,
  },
];

const stats = [
  { value: "25+", label: "Years of Excellence" },
  { value: "15,000+", label: "Smiles Transformed" },
  { value: "98.7%", label: "Patient Satisfaction" },
  { value: "4.9★", label: "Average Rating" },
];

const services = [
  "Cosmetic Dentistry",
  "Implant Restorations",
  "Full-Mouth Rehabilitation",
  "Preventive Care",
];

const doctors = [
  {
    id: "mike",
    name: "Dr. Mike A. Musso",
    title: "DDS",
    image: "/dr-musso.webp",
    credentials: "Las Vegas Institute • Invisalign Certified",
    years: "27+",
  },
  {
    id: "mark",
    name: "Dr. Mark C. Musso",
    title: "DDS",
    image: "/dr-mark-musso.webp",
    credentials: "Implant Dentistry • Clear Aligners",
    years: "30+",
  },
  {
    id: "bounds",
    name: "Dr. John Bounds",
    title: "DDS",
    image: "/dr-bounds.webp",
    credentials: "Restorative & Functional Dentistry",
    years: "15+",
  },
];

export default function AlternativeB() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 100);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation timeline
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      gsap.set([line1Ref.current, line2Ref.current, sublineRef.current, ctaRef.current], {
        opacity: 0,
        y: 80,
      });
      gsap.set(imageRef.current, {
        opacity: 0,
        scale: 1.15,
        clipPath: "inset(100% 0 0 0)",
      });
      gsap.set(badgeRef.current, {
        opacity: 0,
        y: 20,
      });

      tl.to(line1Ref.current, { opacity: 1, y: 0, duration: 1.4 })
        .to(line2Ref.current, { opacity: 1, y: 0, duration: 1.4 }, "-=1.1")
        .to(sublineRef.current, { opacity: 1, y: 0, duration: 1 }, "-=0.9")
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
        .to(imageRef.current, {
          opacity: 1,
          scale: 1,
          clipPath: "inset(0% 0 0 0)",
          duration: 1.6,
          ease: "power3.inOut",
        }, "-=1.2")
        .to(badgeRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.5");

      // Stats animation
      gsap.fromTo(".stat-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".stats-section",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Expertise items
      gsap.fromTo(".expertise-item",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".expertise-section",
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      // About content
      gsap.fromTo(".about-content",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-section",
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );

      // About image parallax
      gsap.to(".about-image-inner", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: ".about-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Quote reveal
      gsap.fromTo(".quote-content",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".quote-section",
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      // Services list
      gsap.fromTo(".service-item",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-list",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-white text-navy">
      {/* Navbar */}
      <nav
        ref={navRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <a href="/alt-b" className="relative z-10">
              <Image
                src="/logo.webp"
                alt="Musso Family Dentistry"
                width={180}
                height={45}
                className="h-10 w-auto"
              />
            </a>

            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((dropdown) => (
                <div
                  key={dropdown.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(dropdown.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-full",
                      activeDropdown === dropdown.label
                        ? "text-green bg-green/5"
                        : "text-navy/70 hover:text-navy hover:bg-navy/5"
                    )}
                  >
                    {dropdown.label}
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-200",
                        activeDropdown === dropdown.label ? "rotate-180" : ""
                      )}
                    />
                  </button>

                  {activeDropdown === dropdown.label && (
                    <div
                      className={cn(
                        "absolute top-full left-0 mt-2 rounded-2xl bg-white p-2 shadow-xl min-w-[280px]",
                        "border border-navy/5"
                      )}
                      onMouseEnter={() => handleMouseEnter(dropdown.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div
                        className={cn(
                          "grid gap-0.5",
                          dropdown.label === "Services" && "max-h-[380px] overflow-y-auto"
                        )}
                      >
                        {dropdown.items.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-navy/5 transition-colors group"
                          >
                            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-navy/5 flex items-center justify-center text-navy/60 group-hover:bg-green group-hover:text-white transition-colors">
                              {item.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="block text-sm font-medium text-navy group-hover:text-green transition-colors">
                                {item.label}
                              </span>
                              {item.description && (
                                <span className="block text-xs text-navy/40 mt-0.5">
                                  {item.description}
                                </span>
                              )}
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <a href="#" className="px-4 py-2 text-sm text-navy/70 hover:text-green transition-colors">
                Contact
              </a>
            </div>

            <a
              href="#"
              className="hidden lg:flex items-center gap-2 px-6 py-3 bg-green text-white text-sm font-medium rounded-full hover:bg-navy transition-colors"
            >
              Book Consultation
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-navy"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-navy px-6 py-8">
            {navigation.map((dropdown) => (
              <div key={dropdown.label}>
                <button
                  onClick={() =>
                    setMobileActiveDropdown(
                      mobileActiveDropdown === dropdown.label ? null : dropdown.label
                    )
                  }
                  className="flex items-center justify-between w-full py-3 text-left text-white/80"
                >
                  <span className="font-medium">{dropdown.label}</span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      mobileActiveDropdown === dropdown.label ? "rotate-180" : ""
                    )}
                  />
                </button>

                {mobileActiveDropdown === dropdown.label && (
                  <div className="pl-4 pb-2 space-y-1">
                    {dropdown.items.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="flex items-center gap-3 px-3 py-2 text-sm text-white/60 hover:text-white rounded-lg transition-colors"
                      >
                        <span className="text-white/40">{item.icon}</span>
                        <span>{item.label}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href="#" className="block py-3 text-white/80 hover:text-white font-medium">Contact</a>
            <a href="#" className="block w-full text-center mt-4 px-6 py-3 bg-green text-white rounded-full">
              Book Consultation
            </a>
          </div>
        )}
      </nav>

      {/* Hero - Split Layout */}
      <section
        ref={heroRef}
        className="relative min-h-[100dvh] flex items-center overflow-hidden bg-white"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <div ref={imageRef} className="relative w-full h-full">
            <Image
              src="/dental-office.jpg"
              alt="Musso Family Dentistry office"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            {/* Professional gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
          </div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full pt-24 sm:pt-20">
          <div className="max-w-3xl">
            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight">
              <span ref={line1Ref} className="block hero-sans">
                Precision meets
              </span>
              <span
                ref={line2Ref}
                className="block hero-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mt-1"
              >
                Modern Care.
              </span>
            </h1>

            {/* Subline */}
            <p
              ref={sublineRef}
              className="mt-5 sm:mt-8 text-base sm:text-lg md:text-xl text-navy/60 leading-relaxed max-w-xl"
            >
              Where clinical excellence meets genuine human connection. We craft smiles
              with the same meticulous attention a master artisan devotes to each creation.
            </p>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href="#"
                className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-green text-white text-sm sm:text-base font-medium rounded-full overflow-hidden"
              >
                <span className="relative z-10">Begin Your Journey</span>
                <ArrowRight className="relative z-10 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-navy transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </a>

              <button className="group flex items-center justify-center gap-3 px-6 py-3.5 sm:py-4 text-navy/70 hover:text-navy transition-colors">
                <span className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-clinical group-hover:shadow-clinical-lg transition-shadow">
                  <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-0.5 fill-navy text-navy" />
                </span>
                <span className="font-medium text-sm sm:text-base">Watch Our Story</span>
              </button>
            </div>
          </div>

          {/* Floating Badge */}
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
                  <span className="font-semibold text-navy">4.9</span> from 500+ reviews
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

      {/* Stats Bar */}
      <section className="stats-section py-12 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-item text-center">
                <p className="font-display text-4xl sm:text-5xl text-green font-semibold">
                  {stat.value}
                </p>
                <p className="mt-2 text-white/50 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="expertise-section py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green/5 text-green text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green" />
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

          {/* Expertise Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((item) => (
              <div
                key={item.number}
                className="expertise-item group"
              >
                <div className="clinical-container p-8 h-full hover:shadow-clinical-lg transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl font-display font-bold text-navy/5">
                      {item.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-green/10 flex items-center justify-center text-green">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-display text-xl text-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="text-navy/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 mt-6 text-green text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties with Smile Shuffler */}
      <Specialties showSmileShuffler={true} />

      {/* Meet Our Doctors */}
      <section className="py-16 sm:py-20 lg:py-32 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-green/5 text-green text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-green" />
              Meet Your Dentists
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-navy tracking-tight">
              A Family <span className="hero-serif">Legacy</span> of Excellence
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-navy/50 max-w-2xl mx-auto px-4">
              Three generations committed to your smile. Your care is our family tradition.
            </p>
          </div>

          {/* Doctors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="group">
                <div className="clinical-container overflow-hidden">
                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Years Badge */}
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                      <div className="px-2.5 py-1 sm:px-3 sm:py-1.5 bg-green text-white text-xs sm:text-sm font-medium rounded-full">
                        {doctor.years} Years
                      </div>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-4 sm:p-6 text-center">
                    <h3 className="font-display text-lg sm:text-xl text-navy">
                      {doctor.name}, <span className="hero-serif">{doctor.title}</span>
                    </h3>
                    <p className="mt-1.5 sm:mt-2 text-green text-xs sm:text-sm font-medium">
                      {doctor.credentials}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View Full Team Link */}
          <div className="mt-8 sm:mt-12 text-center">
            <a
              href="/team"
              className="inline-flex items-center gap-2 text-green text-sm sm:text-base font-medium hover:gap-3 transition-all"
            >
              Meet the Full Team
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-4xl overflow-hidden">
                <div className="about-image-inner relative w-full h-[120%]">
                  <Image
                    src="/dental-office.jpg"
                    alt="Musso Family Dentistry office"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              {/* Floating credential */}
              <div className="absolute -bottom-6 -right-6 lg:right-6">
                <div className="clinical-container px-6 py-5 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-green/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-green" />
                  </div>
                  <div>
                    <p className="font-display text-navy">Top Dentist 2024</p>
                    <p className="text-sm text-navy/50">D Magazine Reader&apos;s Choice</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="about-content">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green/5 text-green text-sm font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-green" />
                About Our Practice
              </span>
              <h2 className="font-display text-3xl lg:text-4xl text-navy leading-tight mb-6">
                25 years dedicated to one thing:{" "}
                <span className="hero-serif">your confidence</span>
              </h2>
              <p className="text-navy/60 leading-relaxed mb-6">
                Dr. Michael Musso founded this practice with a simple belief—that exceptional
                dental care should be accessible, comfortable, and transformative.
              </p>
              <p className="text-navy/60 leading-relaxed mb-8">
                Today, that founding philosophy guides every decision we make, from the
                technology we invest in to the team members we hire.
              </p>

              {/* Services List */}
              <div className="services-list space-y-3 mb-8">
                {services.map((service) => (
                  <div key={service} className="service-item flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-green" />
                    </div>
                    <span className="text-navy/70">{service}</span>
                  </div>
                ))}
              </div>

              <a
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-medium rounded-full hover:bg-green transition-colors"
              >
                Meet the Full Team
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section py-24 lg:py-32 bg-navy relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-green/5 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="quote-content">
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
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-green/5 text-green text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-green" />
              Visit Us
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-navy tracking-tight">
              Find Our <span className="hero-serif">Office</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-navy/50 max-w-2xl mx-auto">
              Conveniently located in Garland, TX. We look forward to welcoming you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="clinical-container p-5 sm:p-8 h-full">
                <h3 className="font-display text-lg sm:text-xl text-navy mb-4 sm:mb-6">Contact Information</h3>

                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-green/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-green" />
                    </div>
                    <div>
                      <p className="font-medium text-navy text-sm sm:text-base mb-0.5 sm:mb-1">Address</p>
                      <p className="text-navy/60 text-xs sm:text-sm">513 W Centerville Rd<br />Garland, TX 75041</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-green/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green" />
                    </div>
                    <div>
                      <p className="font-medium text-navy text-sm sm:text-base mb-0.5 sm:mb-1">Phone</p>
                      <a href="tel:+19722781827" className="text-navy/60 text-xs sm:text-sm hover:text-green transition-colors">(972) 278-1827</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-green/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-green" />
                    </div>
                    <div>
                      <p className="font-medium text-navy text-sm sm:text-base mb-0.5 sm:mb-1">Email</p>
                      <a href="mailto:info@mussofamilydentistry.com" className="text-navy/60 text-xs sm:text-sm hover:text-green transition-colors break-all">info@mussofamilydentistry.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-green/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-green" />
                    </div>
                    <div>
                      <p className="font-medium text-navy text-sm sm:text-base mb-0.5 sm:mb-1">Hours</p>
                      <div className="text-navy/60 text-xs sm:text-sm space-y-0.5 sm:space-y-1">
                        <p>Mon - Fri: 8:00am - 5:00pm</p>
                        <p>Saturday: By Appointment</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/dir//513+W+Centerville+Rd,+Garland,+TX+75041"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 sm:mt-8 w-full inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-green text-white text-sm sm:text-base font-medium rounded-full hover:bg-navy transition-colors"
                >
                  Get Directions
                  <MapPin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="lg:col-span-2">
              <div className="clinical-container overflow-hidden h-full min-h-[300px] sm:min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6702.427230155997!2d-96.6375073!3d32.8660671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ea7197be1533d%3A0xd4a3f180d2333d8!2s513%20W%20Centerville%20Rd%2C%20Garland%2C%20TX%2075041!5e0!3m2!1sen!2sus!4v1773165329310!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "300px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Musso Family Dentistry Location"
                  className="rounded-2xl sm:rounded-4xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green/5 text-green text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green" />
            Get Started
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy mb-6">
            Your transformation begins with{" "}
            <span className="hero-serif">a conversation</span>
          </h2>
          <p className="text-navy/50 mb-10 max-w-xl mx-auto">
            Schedule a consultation and discover what sets Musso Family Dentistry apart.
            No pressure. No obligation. Just honest guidance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-green text-white font-medium rounded-full overflow-hidden"
            >
              <span className="relative z-10">Book Your Consultation</span>
              <ArrowRight className="relative z-10 w-4 h-4" />
              <div className="absolute inset-0 bg-navy transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </a>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center gap-2 px-8 py-4 border border-navy/20 text-navy rounded-full hover:border-green hover:text-green transition-colors"
            >
              <Phone className="w-4 h-4" />
              (555) 123-4567
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-2">
              <Image
                src="/logo.webp"
                alt="Musso Family Dentistry"
                width={180}
                height={45}
                className="h-10 w-auto brightness-0 invert mb-6"
              />
              <p className="text-white/60 leading-relaxed max-w-sm">
                Precision dentistry for the modern family. Serving Garland, TX
                and surrounding communities since 1999.
              </p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Contact</h4>
              <div className="space-y-3 text-white/60 text-sm">
                <p className="flex items-center gap-3">
                  <Phone className="w-4 h-4" /> (555) 123-4567
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="w-4 h-4" /> hello@mussodental.com
                </p>
                <p className="flex items-center gap-3">
                  <MapPin className="w-4 h-4" /> Garland, TX
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Hours</h4>
              <div className="space-y-2 text-white/60 text-sm">
                <p>Monday – Friday: 8am – 6pm</p>
                <p>Saturday: 9am – 2pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/40">
              © {new Date().getFullYear()} Musso Family Dentistry. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/40">
              <a href="/privacy" className="hover:text-white/60 transition-colors">
                Privacy
              </a>
              <a href="/terms" className="hover:text-white/60 transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
