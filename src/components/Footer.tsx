"use client";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";

const Footer = ({}) => {
  return (
    <footer className="h-full w-full">
      <div className="flex flex-col gap-0 md:flex-row">
        <div className="flex w-full flex-col gap-10 bg-[#57320C] px-4 py-12 md:w-[65%] md:gap-12 md:px-20 md:py-16">
          <div className="flex flex-col items-center gap-3 md:flex-row">
            <Image
              src={"/images/home/footer/scooter.svg"}
              width={281}
              height={74}
              alt="image"
              className="w-28"
            />
            <h3 className="font-marcellus text-xl font-[400] uppercase text-[#fff] md:text-3xl">
              Craving MANTU at home? <br /> Get it delivered via{" "}
              <span>UberEats.</span>
            </h3>
          </div>
          <div className="w-full border-b-[1px] border-b-[rgba(236,230,214,0.10)]" />
          <div className="flex flex-col gap-10 md:flex-row md:gap-32">
            <div className="flex flex-col gap-4 px-6 md:gap-6 md:px-3">
              <Link href={"/about-us"}>
                <span className="text-center font-cormorant text-sm font-[700] uppercase tracking-[3.96px] text-[#fff]">
                  About
                </span>
              </Link>
              <Link href={"/menu"}>
                <span className="text-center font-cormorant text-sm font-[700] uppercase tracking-[3.96px] text-[#fff]">
                  our menu
                </span>
              </Link>
              <Link href={""}>
                <span className="text-center font-cormorant text-sm font-[700] uppercase tracking-[3.96px] text-[#fff]">
                  Specials
                </span>
              </Link>
              <Link href={"/contact"}>
                <span className="text-center font-cormorant text-sm font-[700] uppercase tracking-[3.96px] text-[#fff]">
                  Contact
                </span>
              </Link>
              <Link href={""}>
                <span className="text-center font-cormorant text-sm font-[700] uppercase tracking-[3.96px] text-[#fff]">
                  careers
                </span>
              </Link>
              <Link href={""}>
                <span className="text-center font-cormorant text-sm font-[700] uppercase tracking-[3.96px] text-[#fff]">
                  Privacy Policy
                </span>
              </Link>
            </div>
            <div className="flex flex-col gap-4 px-6">
              <span className="font-cormorant text-sm font-[700] uppercase tracking-[3.96px] text-[#fff]">
                Hours of Operation{" "}
              </span>
              <div className="flex flex-col gap-2">
                <span className="font-cormorant text-sm font-[700] uppercase tracking-[3.96px] text-[#fff]">
                  Every day 12 PM till 11 PM
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-10 bg-[#5A340D] px-10 py-12 md:w-[35%] md:items-center md:gap-28 md:px-0 md:py-24">
          <div>
            <Image
              src={"/images/home/hero/logo.png"}
              width={281}
              height={74}
              alt="image"
              className="w-40 md:w-52"
            />
          </div>
          <div className="flex flex-col gap-4 md:items-center md:justify-center">
            <span className="font-cormorant text-sm font-[700] uppercase tracking-[3.96px] text-[#fff] md:text-center">
              Address{" "}
            </span>
            <div className="flex flex-col gap-1 md:items-center md:justify-center">
              <Link
                href={"https://maps.app.goo.gl/BYHYfdDnuW2L91ge7"}
                target="_blank"
              >
                <span className="font-cormorant text-sm font-[700] uppercase tracking-[3.96px] text-[#fff] md:text-center">
                  228 Station Road <br />
                  Edgware HA8 7AU
                </span>
              </Link>
              <Link href={"tel:02039744620"}>
                <span className="font-cormorant text-sm font-[700] uppercase tracking-[3.96px] text-[#fff] md:text-center">
                  +020 3974 4620
                </span>
              </Link>
              <Link href={"mailto:Hello@manturestaurant.co.uk"}>
                <span className="font-cormorant text-sm font-[700] uppercase text-[#fff] underline md:text-center md:tracking-[3.96px]">
                  Hello@manturestaurant.co.uk{" "}
                </span>
              </Link>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4 md:justify-center">
            <Link
              href={"https://www.instagram.com/mantu.london"}
              target="_blank"
            >
              <Icons.instagram className="text-[#fff]" />
            </Link>
            <Link
              href={"https://maps.app.goo.gl/BYHYfdDnuW2L91ge7"}
              target="_blank"
            >
              <Icons.google className="text-[#fff]" />
            </Link>
            <Link
              href={
                "https://www.tripadvisor.com/ShowUserReviews-g1646063-d2012817-r750556155-Kabul_City_Restaurant-Edgware_Greater_London_England.html"
              }
              target="_blank"
            >
              <Icons.unknown className="text-[#fff]" />
            </Link>
          </div>
          <div>
            <Link href={""} target="_blank">
              <span className="font-cormorant text-sm font-[700] uppercase tracking-[3.96px] text-[#fff] md:text-center">
                Powerd by foodo{" "}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
