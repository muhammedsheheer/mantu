"use client";
import { Icons } from "@/components/Icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRestaurant } from "@/context/RestaurantContext";
import Image from "next/image";
import { motion } from "framer-motion";

const Reviews = ({}) => {
  const { reviews } = useRestaurant();

  return (
    <section className="relative flex h-full w-full justify-center bg-[#000] py-8">
      <div className="flex h-full w-full flex-col items-start justify-center gap-4 py-12 md:py-20">
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 lg:gap-4">
          <motion.h1
            className="px-4 text-center font-oswald text-4xl font-[400] capitalize md:text-5xl"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
              background:
                "linear-gradient(180deg, #CFAC6A 29.5%, #2E2A25 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            STORIES FROM OUR PEOPLE{" "}
          </motion.h1>
        </div>
        <div className="flex w-full p-4">
          {reviews && (
            <Carousel className="w-full px-4">
              <CarouselContent className="ml-0 flex w-full gap-4 md:ml-2">
                {reviews
                  .filter((review) => review.rating >= 4)
                  .map((review, index) => (
                    <CarouselItem
                      key={index}
                      className="flex max-h-[400px] w-full basis-full flex-col gap-6 rounded-2xl border border-[#CDAE64] bg-[#000] px-6 py-8 md:basis-1/3"
                    >
                      <div className="flex w-full items-center gap-2">
                        <Image
                          src={
                            review.authorAttribution.photoUri ||
                            "/images/home/reviews/pictures/anna-mathew.svg"
                          }
                          width={64}
                          height={64}
                          alt={review.authorAttribution.displayName}
                        />
                        <div className="flex flex-col gap-2">
                          <p className="text-[#CDAE64]">
                            {review.authorAttribution.displayName}
                          </p>
                          <span className="text-[#CDAE64]">
                            {review.relativePublishTimeDescription}
                          </span>
                        </div>
                      </div>
                      <div className="flex w-full">
                        {Array.from({ length: review.rating }).map(
                          (_, index) => (
                            <Icons.star
                              key={index}
                              className="text-[#CDAE64]"
                            />
                          ),
                        )}
                      </div>
                      <div className="">
                        <p className="line-clamp-6 text-[#CDAE64]">
                          {review.text.text}
                        </p>
                      </div>
                    </CarouselItem>
                  ))}
              </CarouselContent>
              <div className="group absolute -bottom-12 left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 transition-transform duration-300 ease-in-out">
                <CarouselPrevious className="border-[#bc995d] text-[#bc995d] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
                <CarouselNext className="border-[#bc995d] text-[#bc995d] transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
              </div>
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
