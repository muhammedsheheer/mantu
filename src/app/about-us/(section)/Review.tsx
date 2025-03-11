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
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useEffect } from "react";

const Reviews = ({}) => {
  const { reviews } = useRestaurant();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const splitType = document.querySelectorAll(".review-head");
    splitType.forEach((char, i) => {
      if (char instanceof HTMLElement) {
        const text = new SplitType(char, { types: "chars" });
        gsap.from(text.chars, {
          scrollTrigger: {
            trigger: char,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            markers: false,
          },
          opacity: 0.2,
          stagger: 0.2,
        });
      }
    });

    gsap.to(".review-underline", {
      scrollTrigger: {
        trigger: ".review-underline",
        toggleActions: "restart none none none",
      },
      scale: 1,
      duration: 1.5,
    });

    // const lenis = new Lenis();

    // lenis.on("scroll", (e) => {
    //   console.log(e, "===e");
    // })

    // const raf = (time: number) => {
    //   lenis.raf(time)
    //   requestAnimationFrame(raf)
    // }
    // requestAnimationFrame(raf)

    // return () => {
    //   lenis.destroy(); // Cleanup Lenis instance to avoid memory leaks
    // };
  }, []);
  return (
    <section className="relative flex h-full w-full bg-[#391D00] px-4 pb-8 md:px-0">
      <div className="flex h-full w-full flex-col items-start justify-center gap-4 py-12 md:py-24">
        <div className="flex h-full w-full flex-col items-start justify-center gap-2 lg:gap-4">
          <div className="flex w-full flex-col items-center justify-center gap-4">
            <div className="flex flex-col items-center justify-center gap-2">
              <h6 className="rounded-full px-8 py-2 font-marcellus text-base font-[400] capitalize text-[#C4AB85] ring-1 ring-[#C4AB85] lg:text-lg">
                Reviews{" "}
              </h6>
            </div>
            <h1 className="review-head w-full text-center font-marcellus text-3xl font-[400] uppercase text-[#C4AB85] lg:px-8 lg:text-5xl">
              Hear Our Guests
            </h1>
          </div>
        </div>
        <div className="flex w-full items-center justify-center p-4 md:p-0">
          {reviews && (
            <Carousel className="w-full px-4 md:px-0">
              <CarouselContent className="ml-4 flex w-full justify-center gap-4">
                {reviews.map((review, index) => (
                  <CarouselItem
                    key={index}
                    className="flex w-full basis-full flex-col gap-6 rounded-2xl md:basis-1/3 md:rounded-none"
                  >
                    <div className="mr-8 border border-[#DCB355] bg-transparent px-10 py-8 md:mr-0 md:px-6">
                      <div className="flex w-full items-center justify-center">
                        {Array.from({ length: review.rating }).map(
                          (_, index) => (
                            <Icons.star
                              key={index}
                              className="text-center text-[#DCB355]"
                            />
                          ),
                        )}
                      </div>
                      <div className="pt-4">
                        <p className="font-playfair line-clamp-5 text-center text-sm font-[400] tracking-[0.48px] text-[#C4AB85] lg:text-base">
                          {review.text}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 pt-4">
                        <p className="text-center font-inter text-sm font-[500] tracking-[0.54px] text-[#C4AB85]">
                          {review.author_name}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="group absolute -bottom-16 left-1/2 flex w-fit -translate-x-1/2 transform items-center gap-2 pb-6 transition-transform duration-300 ease-in-out lg:pb-0">
                <CarouselPrevious className="border-[#C4AB85] text-[#C4AB85] transition-transform duration-300 ease-in-out group-hover:-translate-x-2" />
                <CarouselNext className="border-[#C4AB85] text-[#C4AB85] transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
              </div>
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
