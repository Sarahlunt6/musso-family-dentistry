"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function MapSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".map-content",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="map-content">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green/5 text-green text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green" />
              Visit Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy tracking-tight">
              Find Our <span className="hero-serif">Office</span>
            </h2>
            <p className="mt-4 text-lg text-navy/50 max-w-2xl mx-auto">
              Conveniently located in Garland, TX. We look forward to welcoming you.
            </p>
          </div>

          {/* Map and Info Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Card */}
            <div className="lg:col-span-1">
              <div className="clinical-container p-8 h-full">
                <h3 className="font-display text-xl text-navy mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-green/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-green" />
                    </div>
                    <div>
                      <p className="font-medium text-navy mb-1">Address</p>
                      <p className="text-navy/60 text-sm">
                        513 W Centerville Rd<br />
                        Garland, TX 75041
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-green/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-green" />
                    </div>
                    <div>
                      <p className="font-medium text-navy mb-1">Phone</p>
                      <a
                        href="tel:+19722781827"
                        className="text-navy/60 text-sm hover:text-green transition-colors"
                      >
                        (972) 278-1827
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-green/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-green" />
                    </div>
                    <div>
                      <p className="font-medium text-navy mb-1">Email</p>
                      <a
                        href="mailto:info@mussofamilydentistry.com"
                        className="text-navy/60 text-sm hover:text-green transition-colors"
                      >
                        info@mussofamilydentistry.com
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-green/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-green" />
                    </div>
                    <div>
                      <p className="font-medium text-navy mb-1">Office Hours</p>
                      <div className="text-navy/60 text-sm space-y-1">
                        <p>Mon - Fri: 8:00am - 5:00pm</p>
                        <p>Saturday: By Appointment</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Directions Button */}
                <a
                  href="https://www.google.com/maps/dir//513+W+Centerville+Rd,+Garland,+TX+75041"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-green text-white font-medium rounded-full hover:bg-navy transition-colors"
                >
                  Get Directions
                  <MapPin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Map Embed */}
            <div className="lg:col-span-2">
              <div className="clinical-container overflow-hidden h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6702.427230155997!2d-96.6375073!3d32.8660671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ea7197be1533d%3A0xd4a3f180d2333d8!2s513%20W%20Centerville%20Rd%2C%20Garland%2C%20TX%2075041!5e0!3m2!1sen!2sus!4v1773165329310!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Musso Family Dentistry Location"
                  className="rounded-4xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
