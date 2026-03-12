"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Garland, TX",
    rating: 5,
    text: "Dr. Musso and his team are absolutely wonderful. I've been a patient for over 10 years and wouldn't go anywhere else. They make every visit comfortable and always explain everything clearly.",
    service: "General Dentistry",
  },
  {
    id: 2,
    name: "Michael T.",
    location: "Richardson, TX",
    rating: 5,
    text: "Best dental experience I've ever had. The staff is friendly, professional, and genuinely cares about their patients. My smile has never looked better thanks to their cosmetic work.",
    service: "Cosmetic Dentistry",
  },
  {
    id: 3,
    name: "Jennifer L.",
    location: "Rowlett, TX",
    rating: 5,
    text: "I was terrified of dentists until I found Musso Family Dentistry. They took the time to understand my fears and made me feel completely at ease. Now I actually look forward to my appointments!",
    service: "Family Dentistry",
  },
  {
    id: 4,
    name: "David R.",
    location: "Garland, TX",
    rating: 5,
    text: "The dental implant procedure was seamless. Dr. Musso explained every step and the results exceeded my expectations. I can eat and smile with confidence again.",
    service: "Dental Implants",
  },
  {
    id: 5,
    name: "Amanda K.",
    location: "Mesquite, TX",
    rating: 5,
    text: "Our whole family goes here - from my 5-year-old to my 75-year-old mother. They're great with patients of all ages and always make us feel welcome.",
    service: "Family Dentistry",
  },
];

export default function Reviews() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 300);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".reviews-content",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".reviews-content",
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const currentReview = reviews[currentIndex];

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green/5 text-green text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green" />
            Patient Stories
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy tracking-tight">
            What Our <span className="hero-serif">Patients</span> Say
          </h2>
          <p className="mt-4 text-lg text-navy/50 max-w-2xl mx-auto">
            Real experiences from real patients. See why families trust us with their smiles.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="reviews-content grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto mb-12">
          <div className="text-center">
            <p className="font-display text-3xl sm:text-4xl text-green font-semibold">4.9</p>
            <div className="flex items-center justify-center gap-0.5 mt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-green text-green" />
              ))}
            </div>
            <p className="text-xs sm:text-sm text-navy/50 mt-1">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="font-display text-3xl sm:text-4xl text-green font-semibold">500+</p>
            <p className="text-xs sm:text-sm text-navy/50 mt-2">Google Reviews</p>
          </div>
          <div className="text-center">
            <p className="font-display text-3xl sm:text-4xl text-green font-semibold">98%</p>
            <p className="text-xs sm:text-sm text-navy/50 mt-2">Recommend Us</p>
          </div>
        </div>

        {/* Review Card */}
        <div className="reviews-content max-w-3xl mx-auto">
          <div className="clinical-container p-8 sm:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8">
              <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-green/10" />
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(currentReview.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-green text-green" />
              ))}
            </div>

            {/* Review Text */}
            <blockquote
              className={cn(
                "text-lg sm:text-xl text-navy/80 leading-relaxed mb-8 transition-opacity duration-300",
                isAnimating ? "opacity-0" : "opacity-100"
              )}
            >
              &ldquo;{currentReview.text}&rdquo;
            </blockquote>

            {/* Author */}
            <div
              className={cn(
                "flex items-center justify-between transition-opacity duration-300",
                isAnimating ? "opacity-0" : "opacity-100"
              )}
            >
              <div>
                <p className="font-medium text-navy">{currentReview.name}</p>
                <p className="text-sm text-navy/50">{currentReview.location}</p>
              </div>
              <span className="px-3 py-1.5 rounded-full bg-green/10 text-green text-xs font-medium">
                {currentReview.service}
              </span>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-navy/10">
              <div className="flex items-center gap-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (!isAnimating) {
                        setIsAnimating(true);
                        setCurrentIndex(index);
                        setTimeout(() => setIsAnimating(false), 300);
                      }
                    }}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      index === currentIndex
                        ? "w-6 bg-green"
                        : "w-2 bg-navy/20 hover:bg-navy/40"
                    )}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={goToPrevious}
                  className="w-10 h-10 rounded-full border border-navy/10 flex items-center justify-center text-navy/50 hover:text-green hover:border-green transition-colors"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={goToNext}
                  className="w-10 h-10 rounded-full border border-navy/10 flex items-center justify-center text-navy/50 hover:text-green hover:border-green transition-colors"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Google Review Link */}
          <div className="text-center mt-8">
            <a
              href="https://www.google.com/maps/place/Musso+Family+Dentistry"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green hover:text-navy transition-colors font-medium"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Read All Reviews on Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
