import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Story: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#fff]">
      <div className="flex w-full flex-col gap-0">
        <div className="flex w-full flex-col gap-0 md:flex-row">
          <motion.div
            className="flex w-full flex-col items-start justify-center gap-5 bg-[#41250A] px-10 py-20 md:w-[40%] md:px-20"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <h3 className="font-marcellus text-2xl font-[400] capitalize text-[#fff] md:text-3xl">
              Scroll our Story
            </h3>
            <p className="w-full max-w-[450px] font-inter text-sm font-[400] text-[#B09C70] md:text-base">
              Follow us on Instagram for a taste of our culinary artistry,
              behind-the-scenes moments, and exclusive updates
            </p>
            <Link
              href={"https://www.instagram.com/mantu.london/"}
              target="_blank"
            >
              <Button className="rounded-none bg-[#F6CA70] px-8 py-6 font-cormorant text-xs font-[700] uppercase tracking-[2px] text-[#000] hover:bg-[#dfc69f] md:tracking-[4.6]">
                @mantu.london{" "}
              </Button>
            </Link>
          </motion.div>
          <motion.div
            className="flex w-full items-center justify-center bg-[#57320C] px-10 py-12 md:w-[30%] md:px-20"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Image
              src={"/images/home/story/image1.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[300px] w-full md:h-[350px]"
            />
          </motion.div>
          <motion.div
            className="w-full md:w-[30%]"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Image
              src={"/images/home/story/image2.png"}
              width={281}
              height={74}
              alt="image"
              className="h-full w-full"
            />
          </motion.div>
        </div>
        <div className="flex w-full flex-col gap-0 md:flex-row">
          <motion.div
            className="w-full md:w-[30%]"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Image
              src={"/images/home/story/image3.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[350px] w-full md:h-[450px]"
            />
          </motion.div>
          <motion.div
            className="w-full md:w-[40%]"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Image
              src={"/images/home/story/image4.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[350px] w-full md:h-[450px]"
            />
          </motion.div>
          <motion.div
            className="flex w-full items-center justify-center bg-[#F6CA6F] px-10 py-12 md:w-[30%] md:px-20"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Image
              src={"/images/home/story/image5.png"}
              width={281}
              height={74}
              alt="image"
              className="h-[300px] w-full md:h-[350px]"
            />
          </motion.div>{" "}
        </div>
      </div>
    </section>
  );
};

export default Story;
