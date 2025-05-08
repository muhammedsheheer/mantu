"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const BavetteStory = ({}) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center bg-[#000] p-4 lg:py-16">
      <div className="flex h-full w-full flex-col items-center justify-center gap-11 bg-[#000]">
        <motion.h2
          className="text-center font-oswald text-8xl text-[#CFAC6A] md:left-[15%] md:text-8xl"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          The Mantu
          <br />
          Story
        </motion.h2>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#000] md:flex-row lg:px-24 lg:py-20">
          <div className="h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0">
            <motion.img
              src="/images/about-us/image2.jpg"
              width={577}
              height={676}
              alt="private dining"
              className="h-auto w-full rounded-lg md:rounded-none"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          <motion.div
            className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <h1 className="max-w-[500px] text-center font-oswald text-6xl text-[#CFAC6A] sm:text-7xl md:text-start">
              From Passion
              <br />
              to Perfection{" "}
            </h1>
            <p className="max-w-[450px] text-center font-light leading-[160%] text-[#CFAC6A] md:text-start">
              What started as a passion for authentic Afghan cuisine has evolved
              into Mantu—a culinary destination where tradition meets
              innovation. Rooted in heritage and crafted with excellence, Mantu
              was founded to bring the rich flavors of Afghan delicacies to
              life. <br />
              From our humble beginnings to becoming a beloved spot for food
              enthusiasts, our commitment to authenticity, quality, and
              hospitality has remained steadfast. Every ingredient is
              thoughtfully chosen, every dish is prepared with care, and every
              bite is a tribute to Afghan culinary artistry. <br />
              At Mantu, we don’t just serve food—we share a story of culture,
              flavor, and warmth. As we continue to grow, our mission remains
              the same: to honor tradition, embrace creativity, and deliver a
              truly unforgettable dining experience.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BavetteStory;
