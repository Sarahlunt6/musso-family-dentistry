"use client";

import { useEffect, useRef } from "react";
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
  Play,
  Check,
  Star,
  Clock,
  Shield,
  Heart,
  Users,
  Sparkles,
  Award,
  ChevronRight,
  ChevronDown,
  Building2,
  Camera,
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
import { useState } from "react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

// ============================================
// ALTERNATIVE A: WARM PROFESSIONAL
// Similar architecture to main, warmer tone
// ============================================

const navigation = [
  {
    label: "About",
    items: [
      {
        label: "About Us",
        href: "/about",
        icon: <Building2 className="w-4 h-4" />,
        description: "Our philosophy and approach",
      },
      {
        label: "Meet the Team",
        href: "/team",
        icon: <Users className="w-4 h-4" />,
        description: "Expert clinicians dedicated to you",
      },
      {
        label: "Office Tour",
        href: "/tour",
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
        href: "/services/cosmetic",
        icon: <Sparkles className="w-4 h-4" />,
        description: "Veneers, whitening & smile design",
      },
      {
        label: "Technology",
        href: "/services/technology",
        icon: <Cpu className="w-4 h-4" />,
        description: "Digital imaging & CAD/CAM",
      },
      {
        label: "General",
        href: "/services/general",
        icon: <Stethoscope className="w-4 h-4" />,
        description: "Preventive care & checkups",
      },
      {
        label: "Oral Health",
        href: "/services/oral-health",
        icon: <Heart className="w-4 h-4" />,
        description: "Gum health & disease prevention",
      },
      {
        label: "Ortho",
        href: "/services/orthodontics",
        icon: <Smile className="w-4 h-4" />,
        description: "Invisalign & clear aligners",
      },
      {
        label: "Products",
        href: "/services/products",
        icon: <ShoppingBag className="w-4 h-4" />,
        description: "Professional-grade oral care",
      },
      {
        label: "Restorative",
        href: "/services/restorative",
        icon: <Wrench className="w-4 h-4" />,
        description: "Implants, crowns & bridges",
      },
      {
        label: "Sleep",
        href: "/services/sleep",
        icon: <Moon className="w-4 h-4" />,
        description: "Apnea treatment & solutions",
      },
      {
        label: "Botox",
        href: "/services/botox",
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
        href: "/patient/resources",
        icon: <BookOpen className="w-4 h-4" />,
        description: "Educational materials & guides",
      },
      {
        label: "Financial",
        href: "/patient/financial",
        icon: <CreditCard className="w-4 h-4" />,
        description: "Insurance & payment options",
      },
      {
        label: "Forms",
        href: "/patient/forms",
        icon: <FileText className="w-4 h-4" />,
        description: "New patient paperwork",
      },
      {
        label: "Portal",
        href: "/patient/portal",
        icon: <User className="w-4 h-4" />,
        description: "Access your health records",
      },
      {
        label: "Wellness",
        href: "/patient/wellness",
        icon: <Leaf className="w-4 h-4" />,
        description: "Holistic health integration",
      },
      {
        label: "Blogs",
        href: "/patient/blog",
        icon: <PenLine className="w-4 h-4" />,
        description: "Insights & dental tips",
      },
    ],
  },
];

const services = [
  {
    title: "Family Dentistry",
    description: "Comprehensive care for every member of your family, from first teeth to lasting smiles.",
    icon: <Users className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Cosmetic Excellence",
    description: "Veneers, whitening, and smile makeovers crafted with artistic precision.",
    icon: <Sparkles className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Restorative Care",
    description: "Implants, crowns, and bridges that restore both function and natural beauty.",
    icon: <Shield className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
  },
];

const doctors = [
  {
    id: "mike",
    name: "Dr. Mike A. Musso",
    title: "DDS",
    image: "/dr-musso.webp",
    bio: "Over 27 years of exceptional dental care in Garland, TX. Graduate of UT Dental Branch Houston, with advanced training from Las Vegas Institute and Invisalign certification.",
  },
  {
    id: "mark",
    name: "Dr. Mark C. Musso",
    title: "DDS",
    image: "/dr-mark-musso.webp",
    bio: "30+ years of experience with specialized training in implant dentistry and orthodontics. Graduate of UT Dental Branch Houston, committed to advancing dental education.",
  },
  {
    id: "bounds",
    name: "Dr. John Bounds",
    title: "DDS",
    image: "/dr-bounds.webp",
    bio: "Dedicated to helping patients achieve confident smiles and proper function. Known for living out core values of family and trust every day.",
  },
];

const values = [
  { title: "Comfort First", desc: "Sedation options and a gentle approach for anxious patients" },
  { title: "Same-Day Care", desc: "CEREC technology for crowns and restorations in one visit" },
  { title: "All Ages", desc: "From pediatric care to senior dentistry under one roof" },
  { title: "Transparent Pricing", desc: "No surprises—clear treatment plans and honest estimates" },
];

const stats = [
  { value: "25+", label: "Years Serving Families" },
  { value: "15K+", label: "Happy Patients" },
  { value: "4.9", label: "Star Rating" },
  { value: "98%", label: "Would Recommend" },
];

export default function AlternativeA() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<HTMLElement>(null);
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
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.from(".hero-content > *", {
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(".hero-image", {
        opacity: 0,
        scale: 1.1,
        duration: 1.4,
        ease: "power3.out",
        delay: 0.4,
      });

      // Services cards
      gsap.from(".service-card", {
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 75%",
        },
      });

      // Values
      gsap.from(".value-item", {
        opacity: 0,
        x: -40,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: valuesRef.current,
          start: "top 75%",
        },
      });

      // Stats
      gsap.from(".stat-item", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 80%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-[#FDFBF7] text-[#1f2f5f]">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#1f2f5f]/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <a href="/alt-a">
              <Image src="/logo.webp" alt="Musso Family Dentistry" width={180} height={45} className="h-10 w-auto" />
            </a>

            <div className="hidden lg:flex items-center gap-10">
              {["About", "Services", "Team", "Patient Info", "Contact"].map((item) => (
                <a key={item} href="#" className="text-sm text-[#1f2f5f]/70 hover:text-[#245532] transition-colors">
                  {item}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-6">
              <a href="tel:+15551234567" className="flex items-center gap-2 text-sm text-[#1f2f5f]/60">
                <Phone className="w-4 h-4" />
                (555) 123-4567
              </a>
              <a
                href="/contact"
                className="px-6 py-3 bg-[#245532] text-white text-sm font-medium rounded-full hover:bg-[#1a472a] transition-colors"
              >
                Book Appointment
              </a>
            </div>

            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-[#FDFBF7] border-t border-[#1f2f5f]/5 px-6 py-8">
            {["About", "Services", "Team", "Contact"].map((item) => (
              <a key={item} href="#" className="block py-3 text-[#1f2f5f]">{item}</a>
            ))}
            <a href="/contact" className="block w-full text-center mt-4 px-6 py-3 bg-[#245532] text-white rounded-full">
              Book Appointment
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section ref={heroRef} className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="hero-content">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#245532]/10 text-[#245532] text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-[#245532]" />
                Welcoming New Patients
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1f2f5f] leading-[1.1]">
                Where families find their
                <span className="block text-[#245532] mt-2">forever dentist.</span>
              </h1>

              <p className="mt-6 text-lg text-[#1f2f5f]/60 leading-relaxed max-w-lg">
                For 25 years, we&apos;ve been more than a dental practice—we&apos;ve been a partner
                in your family&apos;s health. Gentle care, honest guidance, and lasting relationships.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-[#245532] text-white font-medium rounded-full hover:bg-[#1a472a] transition-colors"
                >
                  Schedule Your Visit
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="tel:+15551234567" className="flex items-center gap-2 px-6 py-4 text-[#1f2f5f]/70 hover:text-[#245532] transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>Call Us</span>
                </a>
              </div>

              <div className="mt-12 flex items-center gap-8 pt-8 border-t border-[#1f2f5f]/10">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#245532] text-[#245532]" />
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-[#1f2f5f]">4.9 out of 5</p>
                  <p className="text-sm text-[#1f2f5f]/50">from 500+ patient reviews</p>
                </div>
              </div>
            </div>

            <div className="hero-image relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                <Image
                  src="/dental-office.jpg"
                  alt="Musso Family Dentistry office"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#245532]/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#245532]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#1f2f5f]/50">Open Today</p>
                    <p className="font-semibold text-[#1f2f5f]">8:00 AM – 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section ref={servicesRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-sm text-[#245532] font-medium uppercase tracking-wide mb-4">Our Services</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1f2f5f]">
              Comprehensive care for every stage of life.
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="service-card group">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1f2f5f]/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#245532]">
                    {service.icon}
                  </div>
                </div>
                <h3 className="font-serif text-2xl text-[#1f2f5f] mb-2">{service.title}</h3>
                <p className="text-[#1f2f5f]/60 leading-relaxed mb-4">{service.description}</p>
                <a href="#" className="inline-flex items-center gap-2 text-[#245532] font-medium text-sm">
                  Learn More <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Doctors */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm text-[#245532] font-medium uppercase tracking-wide mb-4">Meet Your Dentists</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1f2f5f]">
              A family legacy of care.
            </h2>
            <p className="mt-4 text-[#1f2f5f]/60 max-w-2xl mx-auto">
              Three generations of Musso dentists committed to your smile. Your care is our family tradition.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="group text-center">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif text-xl text-[#1f2f5f]">
                  {doctor.name}, {doctor.title}
                </h3>
                <p className="mt-3 text-[#1f2f5f]/60 text-sm leading-relaxed">
                  {doctor.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="py-24 bg-[#1f2f5f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm text-[#245532] font-medium uppercase tracking-wide mb-4">Why Families Choose Us</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                Dentistry built on trust, delivered with care.
              </h2>
              <p className="mt-6 text-white/60 leading-relaxed">
                We believe dental care should be comfortable, transparent, and tailored to your unique needs.
                That&apos;s why families trust us generation after generation.
              </p>
            </div>

            <div className="space-y-6">
              {values.map((value, i) => (
                <div key={value.title} className="value-item flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#245532] flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-1">{value.title}</h3>
                    <p className="text-white/60 text-sm">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section py-20 bg-[#245532]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-item text-center">
                <p className="font-serif text-4xl sm:text-5xl text-white">{stat.value}</p>
                <p className="mt-2 text-white/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm text-[#245532] font-medium uppercase tracking-wide mb-4">Visit Us</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1f2f5f]">
              Find our office.
            </h2>
            <p className="mt-4 text-[#1f2f5f]/60 max-w-2xl mx-auto">
              Conveniently located in Garland, TX. We look forward to welcoming you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="bg-[#FDFBF7] rounded-2xl p-8">
              <h3 className="font-serif text-xl text-[#1f2f5f] mb-6">Contact Information</h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#245532]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#245532]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#1f2f5f]">Address</p>
                    <p className="text-[#1f2f5f]/60 text-sm">513 W Centerville Rd<br />Garland, TX 75041</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#245532]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#245532]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#1f2f5f]">Phone</p>
                    <a href="tel:+19722781827" className="text-[#1f2f5f]/60 text-sm hover:text-[#245532]">(972) 278-1827</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#245532]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#245532]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#1f2f5f]">Hours</p>
                    <div className="text-[#1f2f5f]/60 text-sm">
                      <p>Mon - Fri: 8:00am - 5:00pm</p>
                      <p>Sat: By Appointment</p>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/dir//513+W+Centerville+Rd,+Garland,+TX+75041"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#245532] text-white font-medium rounded-full hover:bg-[#1a472a] transition-colors"
              >
                Get Directions
                <MapPin className="w-4 h-4" />
              </a>
            </div>

            {/* Map */}
            <div className="lg:col-span-2 rounded-2xl overflow-hidden min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6702.427230155997!2d-96.6375073!3d32.8660671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ea7197be1533d%3A0xd4a3f180d2333d8!2s513%20W%20Centerville%20Rd%2C%20Garland%2C%20TX%2075041!5e0!3m2!1sen!2sus!4v1773165329310!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Musso Family Dentistry Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1f2f5f] mb-6">
            Ready to join our family?
          </h2>
          <p className="text-[#1f2f5f]/60 mb-8 max-w-xl mx-auto">
            Schedule your first visit and experience the difference of personalized, compassionate dental care.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#245532] text-white font-medium rounded-full hover:bg-[#1a472a] transition-colors"
            >
              Book Your Appointment
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#1f2f5f]/20 text-[#1f2f5f] rounded-full hover:border-[#245532] transition-colors"
            >
              <Phone className="w-4 h-4" />
              (555) 123-4567
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-[#1f2f5f]">
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
                Serving Garland, TX and surrounding communities with compassionate, comprehensive dental care for over 25 years.
              </p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Contact</h4>
              <div className="space-y-3 text-white/60 text-sm">
                <p className="flex items-center gap-3"><Phone className="w-4 h-4" /> (555) 123-4567</p>
                <p className="flex items-center gap-3"><Mail className="w-4 h-4" /> hello@mussodental.com</p>
                <p className="flex items-center gap-3"><MapPin className="w-4 h-4" /> Garland, TX</p>
              </div>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Hours</h4>
              <div className="space-y-2 text-white/60 text-sm">
                <p>Mon – Fri: 8am – 6pm</p>
                <p>Saturday: 9am – 2pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-sm text-white/40">
            © {new Date().getFullYear()} Musso Family Dentistry. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
