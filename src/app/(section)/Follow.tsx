import { Icons } from "@/components/Icon";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Follow: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#000] px-4 pt-12 md:px-[50px] lg:pt-20 2xl:px-[100px]">
      <div className="lines z-0">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="z-50 flex flex-col gap-5">
        {/* big screen */}
        <div className="hidden w-full flex-col gap-4 md:flex">
          <div className="flex w-full flex-col gap-4 md:flex-row">
            <motion.div
              className="w-full lg:w-[25%]"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              {" "}
              <Image
                src={"/images/home/story/image3.png"}
                width={160}
                height={160}
                alt="logo"
                className="z-50 h-[300px] w-full object-cover md:h-[350px]"
              />
            </motion.div>
            <motion.div
              className="flex w-full flex-col items-center justify-center gap-5 lg:w-[25%]"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              {" "}
              <Link
                href={"https://www.instagram.com/mantu.london/"}
                target="_blank"
              >
                <Icons.instagram className="h-24 w-24 text-[#CFAC6A]" />
              </Link>
              <Link
                href={"https://www.instagram.com/mantu.london/"}
                target="_blank"
                className="font-poppins text-center text-lg font-[400] uppercase text-[#CFAC6A] lg:text-xl"
              >
                mantu.london
              </Link>
            </motion.div>
            <motion.div
              className="w-full lg:w-[25%]"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              {" "}
              <Image
                src={"/images/home/story/image4.png"}
                width={160}
                height={160}
                alt="logo"
                className="z-50 h-[300px] w-full object-cover md:h-[350px]"
              />
            </motion.div>
            <motion.div
              className="w-full lg:w-[25%]"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              {" "}
              <Image
                src={"/images/home/story/image2.png"}
                width={160}
                height={160}
                alt="logo"
                className="z-50 h-[300px] w-full object-cover md:h-[350px]"
              />
            </motion.div>
          </div>
          <div className="flex w-full flex-col gap-4 md:flex-row">
            <motion.div
              className="w-full lg:w-[25%]"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              {" "}
              <Image
                src={"/images/home/story/image4.png"}
                width={160}
                height={160}
                alt="logo"
                className="z-50 h-[300px] w-full object-cover md:h-[350px]"
              />
            </motion.div>

            <motion.div
              className="w-full lg:w-[50%]"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              {" "}
              <Image
                src={"/images/home/story/image4.png"}
                width={160}
                height={160}
                alt="logo"
                className="z-50 h-[300px] w-full object-cover md:h-[350px]"
              />
            </motion.div>

            <motion.div
              className="w-full lg:w-[25%]"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              {" "}
              <Image
                src={"/images/home/story/image2.png"}
                width={160}
                height={160}
                alt="logo"
                className="z-50 h-[300px] w-full object-cover md:h-[350px]"
              />
            </motion.div>
          </div>
        </div>
        {/* mobile screen */}
        <div className="grid grid-cols-2 gap-2 md:hidden">
          <motion.div
            className="w-full lg:w-[25%]"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {" "}
            <Image
              src={"/images/home/story/image3.png"}
              width={160}
              height={160}
              alt="logo"
              className="z-50 h-[200px] w-full object-cover md:h-[350px]"
            />
          </motion.div>
          <motion.div
            className="flex w-full flex-col items-center justify-center gap-5 lg:w-[25%]"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {" "}
            <Link
              href={"https://www.instagram.com/mantu.london/"}
              target="_blank"
            >
              <Icons.instagram className="h-24 w-24 text-[#CFAC6A]" />
            </Link>
            <Link
              href={"https://www.instagram.com/mantu.london/"}
              target="_blank"
              className="font-poppins text-center text-lg font-[400] uppercase text-[#CFAC6A] lg:text-xl"
            >
              mantu.london
            </Link>
          </motion.div>
          <motion.div
            className="w-full lg:w-[25%]"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {" "}
            <Image
              src={"/images/home/story/image4.png"}
              width={160}
              height={160}
              alt="logo"
              className="z-50 h-[200px] w-full object-cover md:h-[350px]"
            />
          </motion.div>
          <motion.div
            className="w-full lg:w-[25%]"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {" "}
            <Image
              src={"/images/home/story/image2.png"}
              width={160}
              height={160}
              alt="logo"
              className="z-50 h-[200px] w-full object-cover md:h-[350px]"
            />
          </motion.div>
          <motion.div
            className="w-full lg:w-[25%]"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {" "}
            <Image
              src={"/images/home/story/image4.png"}
              width={160}
              height={160}
              alt="logo"
              className="z-50 h-[200px] w-full object-cover md:h-[350px]"
            />
          </motion.div>
          <motion.div
            className="w-full lg:w-[25%]"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {" "}
            <Image
              src={"/images/home/story/image2.png"}
              width={160}
              height={160}
              alt="logo"
              className="z-50 h-[200px] w-full object-cover md:h-[350px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Follow;
