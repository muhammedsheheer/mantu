import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Persian: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#391D00] py-12">
      <div className="lines z-0">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="absolute left-0 top-0">
        <Image
          src={"/images/home/persian/left.png"}
          width={281}
          height={74}
          alt="image"
          className="w-32 md:h-full md:w-full"
        />
      </div>
      <div className="absolute right-0 top-0">
        <Image
          src={"/images/home/persian/right.png"}
          width={281}
          height={74}
          alt="image"
          className="w-32 md:h-full md:w-full"
        />
      </div>
      <motion.div
        className="absolute left-4 right-4 top-20 z-10 md:top-[10%]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <h1 className="text-center font-marcellus text-3xl font-[400] uppercase tracking-[5px] text-[#E9C883] md:text-5xl">
          A Culinary Journey Awaits
        </h1>
      </motion.div>
      <div className="relative z-20 flex w-full flex-col items-center justify-center gap-10 px-8 py-32 md:flex-row md:gap-6 md:px-32 md:py-52">
        <div className="flex w-full flex-col items-center justify-center gap-4 md:w-[25%]">
          <div className="relative h-[350px] w-full md:h-full">
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <motion.img
                src={"/images/home/persian/image1.png"}
                width={281}
                height={74}
                alt="image"
                className="h-full w-full"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <Image
              src={"/images/home/persian/image.png"}
              width={281}
              height={74}
              alt="image"
              className="h-full w-full"
            />
          </div>
          <span className="text-center font-marcellus text-lg font-[400] uppercase text-[#fec679] md:text-xl">
            MANTU{" "}
          </span>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4 md:w-[25%]">
          <div className="relative h-[350px] w-full md:h-full">
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <motion.img
                src={"/images/home/persian/image2.png"}
                width={281}
                height={74}
                alt="image"
                className="h-full w-full"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <Image
              src={"/images/home/persian/image.png"}
              width={281}
              height={74}
              alt="image"
              className="h-full w-full"
            />
          </div>
          <span className="text-center font-marcellus text-lg font-[400] uppercase text-[#fec679] md:text-xl">
            creamy pasta{" "}
          </span>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4 md:w-[25%]">
          <div className="relative h-[350px] w-full md:h-full">
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <motion.img
                src={"/images/home/persian/image3.png"}
                width={281}
                height={74}
                alt="image"
                className="h-full w-full"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <Image
              src={"/images/home/persian/image.png"}
              width={281}
              height={74}
              alt="image"
              className="h-full w-full"
            />
          </div>
          <span className="text-center font-marcellus text-lg font-[400] uppercase text-[#fec679] md:text-xl">
            kebabs{" "}
          </span>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4 md:w-[25%]">
          <div className="relative h-[350px] w-full md:h-full">
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <motion.img
                src={"/images/home/persian/image4.png"}
                width={281}
                height={74}
                alt="image"
                className="h-full w-full"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <Image
              src={"/images/home/persian/image.png"}
              width={281}
              height={74}
              alt="image"
              className="h-full w-full"
            />
          </div>
          <span className="text-center font-marcellus text-lg font-[400] uppercase text-[#fec679] md:text-xl">
            salads{" "}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Persian;
