import Link from "next/link";
import React from "react";

const franchise: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#000] px-4 py-10 md:px-20 md:py-20">
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-start justify-start gap-4 md:gap-6">
          <h1 className="font-oswald text-4xl font-[600] tracking-[1px] text-[#CFAC6A] md:text-6xl">
            Franchise
          </h1>
          <h1 className="font-oswald text-4xl font-[600] tracking-[1px] text-[#CFAC6A] md:text-6xl">
            with us
          </h1>
          <p className="max-w-[600px] font-manrope text-sm font-[400] text-[#CFAC6A] md:text-base">
            Are you passionate about bringing authentic Afghan flavors to your
            community? Join the Mantu family and become a part of our growing
            success!
          </p>
          <p className="max-w-[600px] font-manrope text-sm font-[400] text-[#CFAC6A] md:text-base">
            Known for our rich heritage, warm hospitality, and mouthwatering
            dishes like kebabs, mantu, and qabuli pulao, we have built a strong
            reputation for delivering a unique and memorable dining experience.
            ​
          </p>
          <p className="max-w-[600px] font-manrope text-sm font-[400] text-[#CFAC6A] md:text-base">
            As a Mantu franchise partner, you’ll receive comprehensive support,
            from training in our traditional Afghan cooking techniques to
            marketing strategies and operational guidance.
          </p>
          <p className="max-w-[600px] font-manrope text-sm font-[400] text-[#CFAC6A] md:text-base">
            Whether you’re a seasoned restaurateur or new to the industry, we’ll
            equip you with the tools to thrive. ​
          </p>
          <p className="max-w-[600px] font-manrope text-sm font-[400] text-[#CFAC6A] md:text-base">
            Take the first step in sharing the heart and soul of Afghan cuisine
            with the world. Explore our franchise opportunities today and bring
            the vibrant tastes of Afghanistan to your city!
          </p>
          <div className="flex flex-col gap-1">
            <span className="max-w-[600px] font-manrope text-sm font-[400] text-[#CFAC6A] md:text-base">
              Email
            </span>
            <Link
              href={"mailto:hello@manturestaurant.co.uk"}
              className="max-w-[600px] font-manrope text-sm font-[400] text-[#CFAC6A] md:text-base"
            >
              hello@manturestaurant.co.uk
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default franchise;
