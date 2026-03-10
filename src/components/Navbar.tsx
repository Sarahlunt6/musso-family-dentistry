"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  MapPin,
  Clock,
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
        description: "Our philosophy and approach to care",
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
    y: 10,
    scale: 0.98,
    transition: {
      duration: 0.15,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.25,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.03,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.05,
    },
  },
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
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileActiveDropdown(mobileActiveDropdown === label ? null : label);
  };

  return (
    <nav
      ref={navRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "glass py-3 shadow-lg shadow-forest/5"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Bar - Contact Info */}
        <div
          className={cn(
            "flex items-center justify-between text-xs text-navy/60 mb-4 transition-all duration-500 overflow-hidden",
            isScrolled ? "h-0 opacity-0 mb-0" : "h-auto opacity-100"
          )}
        >
          <div className="hidden md:flex items-center gap-6">
            <a
              href="tel:+15551234567"
              className="flex items-center gap-2 hover:text-forest transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>(555) 123-4567</span>
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-3 h-3" />
              <span>123 Dental Way, Suite 100</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Clock className="w-3 h-3" />
            <span>Mon-Fri: 8am-6pm</span>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-forest to-navy flex items-center justify-center overflow-hidden">
              <span className="font-display text-xl text-cream font-semibold">
                M
              </span>
              <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg text-navy font-semibold tracking-tight">
                Musso
              </span>
              <span className="text-[10px] text-forest/70 tracking-[0.2em] uppercase -mt-0.5">
                Family Dentistry
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
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
                    "flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors rounded-full",
                    activeDropdown === dropdown.label
                      ? "text-forest bg-forest/5"
                      : "text-navy/80 hover:text-forest hover:bg-forest/5"
                  )}
                >
                  {dropdown.label}
                  <ChevronDown
                    className={cn(
                      "w-3.5 h-3.5 transition-transform duration-300",
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
                        "absolute top-full left-0 mt-2 glass rounded-2xl p-2 shadow-xl shadow-forest/10 min-w-[280px]",
                        dropdown.label === "Services" && "min-w-[320px]"
                      )}
                      onMouseEnter={() => handleMouseEnter(dropdown.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div
                        className={cn(
                          "grid gap-1",
                          dropdown.label === "Services" && "grid-cols-1 max-h-[400px] overflow-y-auto"
                        )}
                      >
                        {dropdown.items.map((item) => (
                          <motion.a
                            key={item.label}
                            href={item.href}
                            variants={itemVariants}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-forest/5 transition-colors group"
                          >
                            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-forest/10 flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-cream transition-colors">
                              {item.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="block text-sm font-medium text-navy group-hover:text-forest transition-colors">
                                {item.label}
                              </span>
                              {item.description && (
                                <span className="block text-xs text-navy/50 mt-0.5 leading-snug">
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

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="/contact"
              className="magnetic-button relative px-6 py-2.5 bg-forest text-cream text-sm font-medium rounded-full overflow-hidden group"
            >
              <span className="relative z-10">Book Appointment</span>
              <div className="absolute inset-0 bg-navy transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-navy hover:text-forest transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
              className="lg:hidden overflow-hidden"
            >
              <div className="pt-6 pb-4 space-y-2">
                {navigation.map((dropdown) => (
                  <motion.div key={dropdown.label} variants={itemVariants}>
                    <button
                      onClick={() => toggleMobileDropdown(dropdown.label)}
                      className="flex items-center justify-between w-full px-4 py-3 text-left text-navy hover:text-forest hover:bg-forest/5 rounded-xl transition-colors"
                    >
                      <span className="font-medium">{dropdown.label}</span>
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-300",
                          mobileActiveDropdown === dropdown.label
                            ? "rotate-180"
                            : ""
                        )}
                      />
                    </button>

                    <AnimatePresence>
                      {mobileActiveDropdown === dropdown.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 py-2 space-y-1">
                            {dropdown.items.map((item) => (
                              <a
                                key={item.label}
                                href={item.href}
                                className="flex items-center gap-3 px-4 py-2.5 text-sm text-navy/70 hover:text-forest hover:bg-forest/5 rounded-lg transition-colors"
                              >
                                <span className="text-forest/50">
                                  {item.icon}
                                </span>
                                <span>{item.label}</span>
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}

                <motion.div variants={itemVariants} className="pt-4">
                  <a
                    href="/contact"
                    className="block w-full px-6 py-3 bg-forest text-cream text-center font-medium rounded-full hover:bg-navy transition-colors"
                  >
                    Book Appointment
                  </a>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="pt-4 space-y-3 text-sm text-navy/60"
                >
                  <a
                    href="tel:+15551234567"
                    className="flex items-center gap-2 px-4 hover:text-forest transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>(555) 123-4567</span>
                  </a>
                  <span className="flex items-center gap-2 px-4">
                    <Clock className="w-4 h-4" />
                    <span>Mon-Fri: 8am-6pm</span>
                  </span>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
