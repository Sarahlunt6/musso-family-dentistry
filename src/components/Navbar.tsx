"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Sparkles,
  Cpu,
  Heart,
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
  Users,
  Building2,
  Camera,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
}

interface NavDropdown {
  label: string;
  items: NavItem[];
}

const navigation: NavDropdown[] = [
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

const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: 8,
    scale: 0.98,
    transition: { duration: 0.15, ease: [0.16, 1, 0.3, 1] },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.02 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0 },
};

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 100);
  };

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4">
      {/* Floating Island Container */}
      <div
        className={cn(
          "max-w-6xl mx-auto rounded-full transition-all duration-500",
          isScrolled
            ? "floating-island shadow-clinical"
            : "floating-island-transparent"
        )}
      >
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <a href="/" className="flex items-center group">
            <Image
              src="/logo.webp"
              alt="Musso Family Dentistry"
              width={180}
              height={45}
              className="h-9 w-auto"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5">
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

                <AnimatePresence>
                  {activeDropdown === dropdown.label && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={dropdownVariants}
                      className={cn(
                        "absolute top-full left-0 mt-2 rounded-4xl bg-white p-2 shadow-clinical-lg min-w-[280px]",
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
                          <motion.a
                            key={item.label}
                            href={item.href}
                            variants={itemVariants}
                            className="flex items-start gap-3 p-3 rounded-2xl hover:bg-navy/5 transition-colors group"
                          >
                            <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-navy/5 flex items-center justify-center text-navy/60 group-hover:bg-green group-hover:text-white transition-colors">
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
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Side: Status + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Status Indicator */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green/5">
              <span className="status-dot w-2 h-2 rounded-full bg-green" />
              <span className="text-xs font-medium text-green">Accepting New Patients</span>
            </div>

            {/* CTA Button */}
            <a
              href="/contact"
              className="relative px-5 py-2.5 bg-navy text-white text-sm font-medium rounded-full overflow-hidden group"
            >
              <span className="relative z-10">Book Now</span>
              <div className="absolute inset-0 bg-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-navy hover:text-green transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden overflow-hidden border-t border-navy/5"
            >
              <div className="px-4 py-6 space-y-2">
                {/* Mobile Status */}
                <div className="flex items-center gap-2 px-4 py-2 mb-4">
                  <span className="status-dot w-2 h-2 rounded-full bg-green" />
                  <span className="text-sm text-green font-medium">Accepting New Patients</span>
                </div>

                {navigation.map((dropdown) => (
                  <div key={dropdown.label}>
                    <button
                      onClick={() =>
                        setMobileActiveDropdown(
                          mobileActiveDropdown === dropdown.label ? null : dropdown.label
                        )
                      }
                      className="flex items-center justify-between w-full px-4 py-3 text-left text-navy hover:bg-navy/5 rounded-2xl transition-colors"
                    >
                      <span className="font-medium">{dropdown.label}</span>
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          mobileActiveDropdown === dropdown.label ? "rotate-180" : ""
                        )}
                      />
                    </button>

                    <AnimatePresence>
                      {mobileActiveDropdown === dropdown.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 py-2 space-y-1">
                            {dropdown.items.map((item) => (
                              <a
                                key={item.label}
                                href={item.href}
                                className="flex items-center gap-3 px-4 py-2.5 text-sm text-navy/70 hover:text-green hover:bg-green/5 rounded-xl transition-colors"
                              >
                                <span className="text-navy/40">{item.icon}</span>
                                <span>{item.label}</span>
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                <div className="pt-4 space-y-3">
                  <a
                    href="/contact"
                    className="block w-full px-6 py-3 bg-navy text-white text-center font-medium rounded-full hover:bg-green transition-colors"
                  >
                    Book Appointment
                  </a>
                  <a
                    href="tel:+15551234567"
                    className="flex items-center justify-center gap-2 px-6 py-3 text-navy hover:text-green transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>(555) 123-4567</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
