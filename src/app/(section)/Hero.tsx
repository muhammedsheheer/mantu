"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const lines = ["Authentic", "Afghan Cuisine"];
const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, type: "spring", stiffness: 300 },
  }),
};

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setInView(false);
          setTimeout(() => setInView(true), 50);
        }
      },
      { threshold: 0.5 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-[#fff]"
      ref={sectionRef}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute left-0 top-0 z-0 h-full w-full object-cover"
      >
        <source src="/videos/bg.mp4" type="video/mp4" />
        <source src="/videos/bg.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 z-10 bg-black/50"></div>

      <div className="absolute inset-0 top-14 z-20 hidden justify-center md:flex">
        <Link href={"/"}>
          <Image
            src={"/images/home/hero/logo.png"}
            width={281}
            height={74}
            alt="logo"
            className="w-44"
          />
        </Link>
      </div>
      <div className="absolute right-[8%] top-14 z-50 hidden md:block">
        <Link href={"/table-booking"}>
          <Button className="rounded-none bg-[#E7C681] px-8 py-7 font-cormorant text-sm font-[700] uppercase tracking-[2px] text-[#5A340D] hover:bg-[#e7cc93] md:tracking-[4.6]">
            Book Now
          </Button>
        </Link>
      </div>

      <div className="relative z-20 flex h-full flex-col items-center justify-center gap-3 text-white md:mt-8">
        <div className="space-y-2 text-center">
          {inView &&
            lines.map((line, lineIndex) => (
              <h1
                key={lineIndex}
                className="font-cormorant text-5xl font-[400] uppercase tracking-[5px] text-[#fff] drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)] md:text-7xl"
              >
                {[...line].map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i + lineIndex * 10}
                    initial="hidden"
                    animate="visible"
                    variants={letterVariants}
                  >
                    {letter}
                  </motion.span>
                ))}
              </h1>
            ))}
        </div>

        <div className="mt-4 md:mt-8 md:hidden">
          <Link href={"/table-booking"}>
            <Button className="rounded-none bg-[#E7C681] px-8 py-7 font-cormorant text-sm font-[700] uppercase tracking-[2px] text-[#5A340D] hover:bg-[#e7cc93] md:tracking-[4.6]">
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
