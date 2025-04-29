import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Upscale: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#CFAC6A] pb-28 pt-28 md:pb-60 md:pt-20">
      <div className="lines z-0">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="absolute bottom-[28%] right-[10%] z-40 hidden flex-col gap-8 md:flex">
        <p className="max-w-[250px] font-marcellus text-base font-[400] text-[#5A340D]">
          Bringing the Flavors of Afghanistan to Your Table Indulge in the rich
          culinary heritage of Afghanistan at Mantu. Our dishes are carefully
          crafted using traditional recipes passed down through generations.
        </p>
        <p className="max-w-[250px] font-cormorant text-base font-[600] italic text-[#5A340D]">
          From handcrafted dumplings to aromatic rice dishes, every bite
          reflects our passion for authentic taste and warm hospitality.
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-1/2 z-10">
        <Image
          src={"/images/home/upscale/bottoml.png"}
          width={281}
          height={74}
          alt="image"
          className="z-10 h-full w-full"
        />
      </div>
      <div className="absolute bottom-0 left-1/2 right-0 z-10">
        <Image
          src={"/images/home/upscale/bottomr.png"}
          width={281}
          height={74}
          alt="image"
          className="z-10 h-full w-full"
        />
      </div>
      <div className="absolute left-0 top-0">
        <Image
          src={"/images/home/upscale/left.png"}
          width={281}
          height={74}
          alt="image"
          className="w-20 md:h-full md:w-full"
        />
      </div>
      <div className="absolute right-0 top-0">
        <Image
          src={"/images/home/upscale/right.png"}
          width={281}
          height={74}
          alt="image"
          className="w-20 md:h-full md:w-full"
        />
      </div>
      <div className="absolute left-4 right-4 top-40 z-50 md:top-[30%]">
        <h1 className="text-center font-marcellus text-5xl font-[400] uppercase tracking-[5px] text-[#fff] md:text-7xl">
          <span className="text-[#2C1600]">Ex</span>quisite Afgh
          <span className="text-[#2C1600]">an</span> <br />
          Dining
        </h1>
      </div>
      <div className="relative z-40 flex flex-col items-center justify-center gap-4">
        <div className="relative">
          <motion.div
            className="relative z-40"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="relative z-50">
              <Image
                src={"/images/home/upscale/image.png"}
                width={281}
                height={74}
                alt="image"
                className="h-full w-full md:w-[600px]"
              />
            </div>

            <div className="absolute inset-0 top-16 z-30 flex items-center justify-center md:top-28">
              <Image
                src={"/images/home/upscale/image1.png"}
                width={281}
                height={74}
                alt="image"
                className="h-[70%] w-[80%]"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="px-2 md:px-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <p className="w-full max-w-[650px] text-center font-marcellus text-sm font-[400] uppercase tracking-[5px] text-[#5A340D] md:text-base">
            a refined Afghan dining experience where the aromatic spices of the
            northern valleys intertwine with the bold, earthy flavors of the
            southern deserts.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Upscale;
