"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = ({}) => {
  return (
    <section className="flex h-screen w-full items-center justify-center">
      <div className="relative flex h-screen w-full items-center justify-center bg-black">
        <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/20"></div>
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
          <video
            className="min-h-full min-w-full object-cover"
            style={{ objectPosition: "center" }}
            src="/videos/bg.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>
        <div className="absolute inset-0 z-0 bg-black/50" />
        <div className="z-40 flex h-full w-full items-center justify-center">
          <motion.div
            className="flex w-full flex-col items-center justify-center gap-7"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <motion.h1
              className="text-center font-oswald text-4xl font-[400] tracking-[8px] sm:text-5xl md:text-8xl"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{
                background:
                  "linear-gradient(194deg, #CDAE64 50.51%, #050504 117.48%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Authentic, <br />
              Afghan Cuisine
            </motion.h1>
            <div className="ml-[2%] flex flex-col items-center justify-center gap-3">
              <Link href="/table-booking">
                <Button className="hero-button flex items-center justify-center gap-3 rounded-none px-9 py-6 uppercase">
                  Reserve
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
