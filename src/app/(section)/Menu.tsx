"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Menu = ({}) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center overflow-hidden px-4 py-20 md:px-[50px] md:py-24 lg:px-[100px] 2xl:px-[140px]">
      <div className="absolute -top-16 left-0 z-0">
        <Image
          src={"/images/home/hero/bg.png"}
          width={160}
          height={160}
          alt="background"
          className="h-[300px] w-full object-cover lg:h-[500px]"
        />
      </div>
      <div className="lines z-0">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="absolute inset-0 z-10 flex justify-center md:top-2">
        <h1
          className="px-4 font-oswald text-7xl font-[400] uppercase md:mt-10 md:block md:text-[22vw]"
          style={{
            background:
              "linear-gradient(180deg, #CCAD64 -14.03%, #191616 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Mantu
        </h1>
      </div>
      <div className="relative z-40 flex w-full flex-col gap-8 md:flex-row md:gap-4 md:pt-56">
        <div className="flex h-[350px] w-full flex-col items-center justify-center gap-4 md:h-[450px] md:w-1/3">
          <motion.img
            src={"/images/home/story/image2.png"}
            width={160}
            height={160}
            alt="logo"
            className="h-[300px] w-full object-cover lg:h-[450px]"
            initial={{ opacity: 0, x: -100, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <h3 className="font-oswald text-lg font-[700] uppercase tracking-[5px] text-[#CDAE64] md:text-xl">
            MANTU
          </h3>
        </div>
        <div className="flex h-[350px] w-full flex-col items-center justify-center gap-4 md:h-[450px] md:w-1/3">
          <motion.img
            src={"/images/home/story/image3.png"}
            width={160}
            height={160}
            alt="logo"
            className="h-[300px] w-full object-cover lg:h-[450px]"
            initial={{ opacity: 0, x: -100, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <h3 className="font-oswald text-lg font-[700] uppercase tracking-[5px] text-[#CDAE64] md:text-xl">
            creamy pasta
          </h3>
        </div>
        <div className="flex h-[350px] w-full flex-col items-center justify-center gap-4 md:h-[450px] md:w-1/3">
          <motion.img
            src={"/images/home/story/image4.png"}
            width={160}
            height={160}
            alt="logo"
            className="h-[300px] w-full object-cover lg:h-[450px]"
            initial={{ opacity: 0, x: -100, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <h3 className="font-oswald text-lg font-[700] uppercase tracking-[5px] text-[#CDAE64] md:text-xl">
            kebabs
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Menu;
