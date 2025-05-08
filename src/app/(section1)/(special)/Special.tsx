"use client";
import EmblaCarousel from "@/app/(section)/(special)/MenuCarousel";
import { Button } from "@/components/ui/button";
import { useRestaurant } from "@/context/RestaurantContext";
import type { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const OPTIONS: EmblaOptionsType = { loop: true };

const Special = ({}) => {
  const { modelData } = useRestaurant();
  return (
    <section className="relative flex h-full w-full justify-center bg-[#CFAC6A] py-12">
      <div className="lines z-0">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="absolute bottom-20 right-20 hidden md:block">
        <Link href={"/menu"}>
          <Button className="rounded-none bg-[#5A340D] px-8 py-7 font-cormorant text-xs font-[700] uppercase tracking-[2px] text-[#CFAC6A] hover:bg-[#724314] md:tracking-[4.6]">
            View Menu
          </Button>
        </Link>
      </div>
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden"></div>
      <div className="flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-4 py-12">
        <div className="flex w-full flex-col items-center justify-center gap-3 md:flex-row">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex flex-col items-center justify-center gap-2">
              <motion.h1
                className="text-center font-marcellus text-4xl font-[400] uppercase tracking-[5px] text-[#5A340D] md:text-6xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                MANTU SPECIALS
              </motion.h1>
              <div className="mt-4 md:hidden">
                <Link href={"/menu"}>
                  <Button className="rounded-none bg-[#5A340D] px-8 py-7 font-cormorant text-xs font-[700] uppercase tracking-[2px] text-[#CFAC6A] hover:bg-[#724314] md:tracking-[4.6]">
                    View Menu
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-50 flex min-h-[400px] w-full flex-col justify-center px-2">
          {modelData && <EmblaCarousel slides={modelData} options={OPTIONS} />}
        </div>
      </div>
    </section>
  );
};

export default Special;
