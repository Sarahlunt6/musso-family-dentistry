"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const footerLinks = {
  services: [
    { label: "Cosmetic Dentistry", href: "/services/cosmetic" },
    { label: "Restorative Care", href: "/services/restorative" },
    { label: "Orthodontics", href: "/services/orthodontics" },
    { label: "Sleep Dentistry", href: "/services/sleep" },
    { label: "Emergency Care", href: "/services/emergency" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Office Tour", href: "/tour" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
  ],
  patients: [
    { label: "Patient Portal", href: "/portal" },
    { label: "Forms", href: "/forms" },
    { label: "Insurance", href: "/insurance" },
    { label: "Financing", href: "/financing" },
    { label: "FAQ", href: "/faq" },
  ],
};

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-content", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative bg-navy pt-20 pb-8 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-forest/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="footer-content">
          {/* Top Section */}
          <div className="grid lg:grid-cols-12 gap-12 pb-12 border-b border-cream/10">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-forest to-forest/80 flex items-center justify-center">
                  <span className="font-display text-2xl text-cream font-semibold">
                    M
                  </span>
                </div>
                <div>
                  <span className="font-display text-xl text-cream font-semibold">
                    Musso
                  </span>
                  <span className="block text-[10px] text-cream/50 tracking-[0.2em] uppercase -mt-0.5">
                    Family Dentistry
                  </span>
                </div>
              </div>

              <p className="text-cream/60 leading-relaxed mb-8 max-w-sm">
                Where clinical excellence meets genuine care. Serving families
                with precision dentistry and lasting confidence since 1999.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-3 text-cream/70 hover:text-gold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>(555) 123-4567</span>
                </a>
                <a
                  href="mailto:hello@mussodental.com"
                  className="flex items-center gap-3 text-cream/70 hover:text-gold transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>hello@mussodental.com</span>
                </a>
                <div className="flex items-start gap-3 text-cream/70">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>
                    123 Dental Way, Suite 100
                    <br />
                    San Francisco, CA 94102
                  </span>
                </div>
                <div className="flex items-center gap-3 text-cream/70">
                  <Clock className="w-4 h-4" />
                  <span>Mon-Fri: 8am-6pm | Sat: 9am-2pm</span>
                </div>
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-8 grid sm:grid-cols-3 gap-8">
              {/* Services */}
              <div>
                <h4 className="text-cream font-medium mb-4">Services</h4>
                <ul className="space-y-3">
                  {footerLinks.services.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-cream/60 hover:text-gold transition-colors hover-underline inline-block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-cream font-medium mb-4">Company</h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-cream/60 hover:text-gold transition-colors hover-underline inline-block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Patients */}
              <div>
                <h4 className="text-cream font-medium mb-4">For Patients</h4>
                <ul className="space-y-3">
                  {footerLinks.patients.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-cream/60 hover:text-gold transition-colors hover-underline inline-block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="py-12 border-b border-cream/10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl text-cream">
                  Ready to transform your smile?
                </h3>
                <p className="mt-2 text-cream/60">
                  Schedule your consultation today.
                </p>
              </div>
              <a
                href="/contact"
                className="group flex items-center gap-3 px-8 py-4 bg-gold text-navy font-medium rounded-full hover:bg-gold/90 transition-colors"
              >
                <span>Book Appointment</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-cream/40 text-center sm:text-left">
              &copy; {new Date().getFullYear()} Musso Family Dentistry. All
              rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-cream/10 flex items-center justify-center text-cream/60 hover:text-gold hover:border-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-cream/10 flex items-center justify-center text-cream/60 hover:text-gold hover:border-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-cream/10 flex items-center justify-center text-cream/60 hover:text-gold hover:border-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm text-cream/40">
              <a href="/privacy" className="hover:text-cream/60 transition-colors">
                Privacy
              </a>
              <a href="/terms" className="hover:text-cream/60 transition-colors">
                Terms
              </a>
              <a
                href="/accessibility"
                className="hover:text-cream/60 transition-colors"
              >
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
