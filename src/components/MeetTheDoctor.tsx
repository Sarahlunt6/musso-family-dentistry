"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, Award, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const doctors = [
  {
    id: "mike",
    name: "Dr. Mike A. Musso",
    title: "DDS",
    role: "General Dentist",
    image: "/dr-musso.webp",
    bio: "Dr. Mike A. Musso earned his degree in zoology with a minor in Spanish from Texas Tech University before obtaining his Doctor of Dental Surgery (DDS) from the University of Texas Dental Branch in Houston in 1990. After joining his father at Musso Family Dentistry, Dr. Musso has delivered exceptional dental care in Garland, TX, for over 27 years.",
    credentials: [
      {
        icon: <GraduationCap className="w-4 h-4" />,
        text: "DDS, UT Dental Branch Houston (1990)",
      },
      {
        icon: <Award className="w-4 h-4" />,
        text: "Las Vegas Institute for Advanced Dental Studies",
      },
      {
        icon: <Award className="w-4 h-4" />,
        text: "Invisalign Certified Provider",
      },
    ],
    yearsExperience: "27+",
  },
  {
    id: "mark",
    name: "Dr. Mark C. Musso",
    title: "DDS",
    role: "General Dentist",
    image: "/dr-mark-musso.webp",
    bio: "Dr. Mark C. Musso majored in zoology at Texas Tech University before earning his Doctor of Dental Surgery (DDS) degree at the University of Texas Dental Branch in Houston in 1994. He then joined his brother and father at Musso Family Dentistry. Dr. Musso continues to advance his dental education with specialized training.",
    credentials: [
      {
        icon: <GraduationCap className="w-4 h-4" />,
        text: "DDS, UT Dental Branch Houston (1994)",
      },
      {
        icon: <Award className="w-4 h-4" />,
        text: "Advanced Implant Dentistry Training",
      },
      {
        icon: <Award className="w-4 h-4" />,
        text: "Orthodontics & Clear Aligners Certified",
      },
    ],
    yearsExperience: "30+",
  },
  {
    id: "bounds",
    name: "Dr. John Bounds",
    title: "DDS",
    role: "General Dentist",
    image: "/dr-bounds.webp",
    bio: "Dr. John Bounds enjoys helping those who need it. Whether it be increasing self-confidence with a new smile or having someone be able to enjoy a juicy steak again with proper function, the reward is the satisfaction he gets from helping patients. You'll see Dr. Bounds living out his core values of family and trust every day.",
    credentials: [
      {
        icon: <GraduationCap className="w-4 h-4" />,
        text: "Doctor of Dental Surgery (DDS)",
      },
      {
        icon: <Award className="w-4 h-4" />,
        text: "Restorative & Functional Dentistry",
      },
      {
        icon: <Award className="w-4 h-4" />,
        text: "Patient-Centered Care Focus",
      },
    ],
    yearsExperience: "15+",
  },
];

export default function MeetTheDoctor() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        ".doctors-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".doctors-section",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Doctor cards stagger
      gsap.fromTo(
        ".doctor-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".doctors-grid",
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="doctors-section py-24 lg:py-32 bg-[#FAFAF8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="doctors-header text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green/5 text-green text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green" />
            Meet Your Dentists
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-navy tracking-tight">
            A Family <span className="hero-serif">Legacy</span> of Care
          </h2>
          <p className="mt-4 text-lg text-navy/50 max-w-2xl mx-auto">
            Three generations of Musso dentists committed to exceptional care.
            Your smile is our family tradition.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="doctors-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="doctor-card group">
              <div className="clinical-container overflow-hidden h-full">
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Experience Badge */}
                  <div className="absolute bottom-4 left-4">
                    <div className="px-4 py-2 bg-green text-white rounded-full text-sm font-medium">
                      {doctor.yearsExperience} Years Experience
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Name & Title */}
                  <div className="mb-4">
                    <h3 className="font-display text-2xl text-navy">
                      {doctor.name}, <span className="hero-serif">{doctor.title}</span>
                    </h3>
                    <p className="text-green font-medium">{doctor.role}</p>
                  </div>

                  {/* Bio */}
                  <p className="text-navy/60 text-sm leading-relaxed mb-6">
                    {doctor.bio}
                  </p>

                  {/* Credentials */}
                  <div className="space-y-3 mb-6">
                    {doctor.credentials.map((credential, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 text-sm"
                      >
                        <div className="w-7 h-7 rounded-lg bg-green/10 flex items-center justify-center flex-shrink-0 text-green">
                          {credential.icon}
                        </div>
                        <span className="text-navy/70">{credential.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href={`/team/${doctor.id}`}
                    className="inline-flex items-center gap-2 text-green text-sm font-medium group-hover:gap-3 transition-all"
                  >
                    Learn More About {doctor.name.split(" ")[1]}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Family Legacy Note */}
        <div className="mt-16 text-center">
          <p className="text-navy/40 text-sm max-w-2xl mx-auto">
            Founded by their father, Musso Family Dentistry has been a cornerstone
            of dental care in Garland, TX for over three decades. The tradition
            of excellence continues with Drs. Mike and Mark Musso.
          </p>
        </div>
      </div>
    </section>
  );
}
