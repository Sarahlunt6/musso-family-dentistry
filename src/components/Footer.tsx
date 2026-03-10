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
    <footer ref={footerRef} className="relative bg-white pt-20 pb-8 border-t border-navy/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="footer-content">
          {/* CTA Section */}
          <div className="clinical-container p-8 sm:p-12 mb-16 bg-navy text-white">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl">
                  Ready to transform your smile?
                </h3>
                <p className="mt-3 text-white/60 max-w-md">
                  Schedule your consultation and experience the Musso difference.
                </p>
              </div>
              <a
                href="/contact"
                className="group flex items-center gap-3 px-8 py-4 bg-green text-white font-medium rounded-full hover:bg-white hover:text-navy transition-colors"
              >
                <span>Book Appointment</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Main Footer Grid */}
          <div className="grid lg:grid-cols-12 gap-12 pb-12 border-b border-navy/5">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center">
                  <span className="font-display text-lg text-white font-semibold">
                    M
                  </span>
                </div>
                <div>
                  <span className="font-display text-lg text-navy font-semibold">
                    Musso
                  </span>
                  <span className="block text-[9px] text-navy/40 tracking-[0.15em] uppercase">
                    Family Dentistry
                  </span>
                </div>
              </div>

              <p className="text-navy/60 leading-relaxed mb-8 max-w-sm text-sm">
                Where clinical precision meets architectural luxury. Serving
                families with transformative dental care since 1999.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 text-sm">
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-3 text-navy/60 hover:text-green transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>(555) 123-4567</span>
                </a>
                <a
                  href="mailto:hello@mussodental.com"
                  className="flex items-center gap-3 text-navy/60 hover:text-green transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>hello@mussodental.com</span>
                </a>
                <div className="flex items-start gap-3 text-navy/60">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>
                    123 Dental Way, Suite 100
                    <br />
                    San Francisco, CA 94102
                  </span>
                </div>
                <div className="flex items-center gap-3 text-navy/60">
                  <Clock className="w-4 h-4" />
                  <span>Mon-Fri: 8am-6pm | Sat: 9am-2pm</span>
                </div>
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-8 grid sm:grid-cols-3 gap-8">
              <div>
                <h4 className="text-navy font-medium mb-4 text-sm">Services</h4>
                <ul className="space-y-3">
                  {footerLinks.services.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-navy/50 hover:text-green transition-colors text-sm hover-underline inline-block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-navy font-medium mb-4 text-sm">Company</h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-navy/50 hover:text-green transition-colors text-sm hover-underline inline-block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-navy font-medium mb-4 text-sm">For Patients</h4>
                <ul className="space-y-3">
                  {footerLinks.patients.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-navy/50 hover:text-green transition-colors text-sm hover-underline inline-block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-xs text-navy/30 text-center sm:text-left">
              &copy; {new Date().getFullYear()} Musso Family Dentistry. All
              rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-navy/10 flex items-center justify-center text-navy/40 hover:text-green hover:border-green transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-navy/10 flex items-center justify-center text-navy/40 hover:text-green hover:border-green transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-navy/10 flex items-center justify-center text-navy/40 hover:text-green hover:border-green transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-xs text-navy/30">
              <a href="/privacy" className="hover:text-navy/60 transition-colors">
                Privacy
              </a>
              <a href="/terms" className="hover:text-navy/60 transition-colors">
                Terms
              </a>
              <a href="/accessibility" className="hover:text-navy/60 transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
