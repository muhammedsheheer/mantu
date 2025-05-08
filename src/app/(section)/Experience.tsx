"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Experience = ({}) => {
  return (
    <section className="relative h-full w-full bg-[#391D00] px-4 py-12 md:px-24 md:py-20">
      <div className="flex flex-col gap-12 md:gap-20">
        <div>
          <h2 className="text-center font-oswald text-4xl font-[400] capitalize text-[#C4AB85] md:text-6xl">
            UNFORGETTABLE EXPERIENCE
          </h2>
        </div>
        <div className="flex flex-col gap-6 md:flex-row md:gap-20">
          <div className="flex w-full flex-col gap-4 px-6 md:w-1/3 md:px-0">
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:bottom-16">
                <h1
                  className="text-center font-oswald text-4xl font-[700] uppercase md:text-5xl"
                  style={{
                    background:
                      "linear-gradient(180deg, #CFAC6A 29.5%, #2E2A25 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  FOOD
                </h1>
              </div>
              <Image
                src={"/images/home/story/image4.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover md:h-[600px]"
              />
            </motion.div>
            <p className="font-roboto text-sm font-[400] tracking-[0.54px] text-[#C4AB85] md:text-base">
              Mantu Restaurant was born from a passion for sharing the rich,
              authentic flavors of Afghanistan. Rooted in tradition and prepared
              with the finest, freshest ingredients, every dish—especially our
              beloved mantu—is crafted with care and heart to bring the true
              taste of Afghan cuisine to your table.
            </p>
          </div>
          <div className="flex w-full flex-col gap-4 px-6 md:w-1/3 md:px-0">
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:bottom-16">
                <h1
                  className="text-center font-oswald text-4xl font-[700] uppercase md:text-5xl"
                  style={{
                    background:
                      "linear-gradient(180deg, #CFAC6A 29.5%, #2E2A25 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  DRINKS{" "}
                </h1>
              </div>
              <Image
                src={"/images/home/story/image2.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover md:h-[600px]"
              />
            </motion.div>
            <p className="font-roboto text-sm font-[400] tracking-[0.54px] text-[#C4AB85] md:text-base">
              Our drinks are crafted with the same care and devotion as our
              cuisine. From refreshing traditional Afghan beverages like dough
              and sheer chai to expertly blended mocktails, every sip reflects
              our commitment to authenticity, flavor, and quality.
            </p>
          </div>
          <div className="flex w-full flex-col gap-4 px-6 md:w-1/3 md:px-0">
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:bottom-16">
                <h1
                  className="text-center font-oswald text-4xl font-[700] uppercase md:text-5xl"
                  style={{
                    background:
                      "linear-gradient(180deg, #CFAC6A 29.5%, #2E2A25 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  ATMOSPHERE{" "}
                </h1>
              </div>
              <Image
                src={"/images/home/story/image3.png"}
                width={160}
                height={160}
                alt="logo"
                className="h-[300px] w-full object-cover md:h-[600px]"
              />
            </motion.div>
            <p className="font-roboto text-sm font-[400] tracking-[0.54px] text-[#C4AB85] md:text-base">
              At Mantu, we’ve created more than just a place to dine—we’ve
              crafted an experience. Surrounded by warm ambiance, elegant décor,
              and the rich aroma of authentic Afghan cuisine, every visit is a
              journey into the heart of Afghanistan’s culinary heritage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
