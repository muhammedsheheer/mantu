import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Reserve: React.FC = () => {
  return (
    <section className="relative h-screen w-full bg-[#CFAC6A] pt-12">
      <div className="absolute inset-0 bottom-[65%] flex items-center justify-center px-4 md:bottom-[60%]">
        <div className="relative">
          <div className="absolute inset-0 top-[15%] flex items-center justify-center md:top-[15%]">
            <div className="mt-24 flex flex-col items-center justify-center gap-4 md:mt-32 md:gap-6">
              <h1 className="text-center font-marcellus text-2xl font-[400] uppercase tracking-[10px] text-[#F5CA71] md:text-3xl">
                Reserve <br />
                Your Table
              </h1>
              <p className="w-full max-w-[450px] px-2 text-center font-inter text-sm font-[500] text-[#fff] md:px-0 md:text-base">
                Indulge in an unforgettable Afghan dining experience. Secure
                your spot and let us take you on a journey of rich flavors and
                warm hospitality. Book your table now!
              </p>
              <Link href={"/table-booking"}>
                <Button className="rounded-none bg-[#F5CA71] px-8 py-7 font-cormorant text-sm font-[700] uppercase tracking-[2px] text-[#000] hover:bg-[#dfc69f] md:tracking-[4.6]">
                  Book Now{" "}
                </Button>
              </Link>
            </div>
          </div>
          <Image
            src={"/images/home/reserve/image.png"}
            width={281}
            height={74}
            alt="image"
            className="h-[1100px] w-full md:h-[1200px] md:w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Reserve;
