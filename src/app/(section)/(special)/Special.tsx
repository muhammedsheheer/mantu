"use client";
import EmblaCarousel from "@/app/(section)/(special)/MenuCarousel";
import { Button } from "@/components/ui/button";
import { useRestaurant } from "@/context/RestaurantContext";
import type { EmblaOptionsType } from "embla-carousel";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const OPTIONS: EmblaOptionsType = { loop: true };

const Special = ({}) => {
  const { modelData } = useRestaurant();
  return (
    <section className="relative flex h-full w-full justify-center bg-[#391D00] py-12">
      <div className="lines z-0">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden"></div>
      <div className="flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-4 py-12">
        <div className="flex w-full flex-col items-center justify-center gap-3 md:flex-row">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex flex-col items-center justify-center gap-2">
              <h6 className="text-center font-oswald text-2xl font-[400] uppercase text-[#C9AB81] md:text-3xl md:tracking-[10px]">
                <motion.span
                  className="inline-block"
                  initial={{ y: 0 }}
                  animate={{ y: [0, -15, 0, 15, 0] }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                >
                  O
                </motion.span>
                {"ur best "}
                <motion.span
                  className="inline-block"
                  initial={{ y: 0 }}
                  animate={{ y: [0, -15, 0, 15, 0] }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                >
                  S
                </motion.span>
                {"pecialties"}
              </h6>
            </div>
          </div>
        </div>
        <div className="font-cormorant relative z-40 flex min-h-[400px] w-full flex-col justify-center px-2">
          {modelData && <EmblaCarousel slides={modelData} options={OPTIONS} />}
        </div>
        <div className="z-40">
          {/* <Link href={"/menu"}>
            <Button
              className="relative z-40 mt-4 flex items-center justify-center gap-3 px-10 py-20 uppercase text-[#fff]"
              variant="imageInverted"
            >
              View Menu
            </Button>
          </Link> */}

          <Link
            className="z-40 flex flex-row gap-1 rounded-none bg-transparent px-5 py-3 text-[#fff] ring-1 ring-[#D5A859] hover:bg-[#D5A859]"
            href={"/menu"}
          >
            {" "}
            View Menu <ArrowRight className="text-[#BC995D]" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Special;
