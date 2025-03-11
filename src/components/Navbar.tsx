"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Sidebar from "./SideBar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = ({
  position = "static",
}: {
  position?: "static" | "fixed" | "absolute";
}) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const d = localStorage.getItem("positiond");
    if (d !== null) {
      setPositiond(d);
    }
  }, []);
  const [positiond, setPositiond] = useState<string>("");
  useEffect(() => {
    if (positiond) {
      localStorage.setItem("positiond", positiond);
    }
  }, [positiond]);
  const pathname = usePathname();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav
      className={cn(
        `${position} top-5 z-50 h-[10vh] w-full pt-0`,
        pathname === "/menu" && "bg-menubackground pt-4",
      )}
    >
      {/*big screen */}
      <div
        className={
          pathname === "/"
            ? "hidden px-4 pt-20 md:block md:px-20"
            : "px-4 pt-0 md:px-[50px] 2xl:px-[140px]"
        }
      >
        <div
          className={
            pathname === "/"
              ? "flex flex-col"
              : "flex flex-row items-center justify-center"
          }
        >
          <div
            className={
              pathname === "/"
                ? "flex flex-col items-start gap-8"
                : "mt-2 flex flex-row items-center justify-center gap-14"
            }
          >
            <Link
              href={"/"}
              className={
                pathname === "/"
                  ? "flex flex-row items-center justify-center gap-1 font-open_sans text-xs font-[400] uppercase leading-[25px] tracking-[1.6px] text-[#fff]"
                  : "flex flex-row items-center justify-center gap-1 font-open_sans text-xs font-[400] uppercase leading-[25px] tracking-[1.6px] text-[#000]"
              }
            >
              <Image
                src={"/images/home/hero/dot.png"}
                width={281}
                height={74}
                alt="logo"
                className="h-4 w-2"
              />{" "}
              Home
            </Link>
            <Link
              href={"/menu"}
              className={
                pathname === "/"
                  ? "flex flex-row items-center justify-center gap-1 font-open_sans text-xs font-[400] uppercase leading-[25px] tracking-[1.6px] text-[#fff]"
                  : "flex flex-row items-center justify-center gap-1 font-open_sans text-xs font-[400] uppercase leading-[25px] tracking-[1.6px] text-[#000]"
              }
            >
              <Image
                src={"/images/home/hero/dot.png"}
                width={281}
                height={74}
                alt="logo"
                className="h-4 w-2"
              />{" "}
              Menu
            </Link>
            <Link
              href={"/about-us"}
              className={
                pathname === "/"
                  ? "flex flex-row items-center justify-center gap-1 font-open_sans text-xs font-[400] uppercase leading-[25px] tracking-[1.6px] text-[#fff]"
                  : "flex flex-row items-center justify-center gap-1 font-open_sans text-xs font-[400] uppercase leading-[25px] tracking-[1.6px] text-[#000]"
              }
            >
              <Image
                src={"/images/home/hero/dot.png"}
                width={281}
                height={74}
                alt="logo"
                className="h-4 w-2"
              />{" "}
              About
            </Link>
            <Link
              href={""}
              className={
                pathname === "/"
                  ? "flex flex-row items-center justify-center gap-1 font-open_sans text-xs font-[400] uppercase leading-[25px] tracking-[1.6px] text-[#fff]"
                  : "flex flex-row items-center justify-center gap-1 font-open_sans text-xs font-[400] uppercase leading-[25px] tracking-[1.6px] text-[#000]"
              }
            >
              <Image
                src={"/images/home/hero/dot.png"}
                width={281}
                height={74}
                alt="logo"
                className="h-4 w-2"
              />{" "}
              Food & Drinks
            </Link>
            <Link
              href={"/table-booking"}
              className={
                pathname === "/"
                  ? "flex flex-row items-center justify-center gap-1 font-open_sans text-xs font-[400] uppercase leading-[25px] tracking-[1.6px] text-[#fff]"
                  : "flex flex-row items-center justify-center gap-1 font-open_sans text-xs font-[400] uppercase leading-[25px] tracking-[1.6px] text-[#000]"
              }
            >
              <Image
                src={"/images/home/hero/dot.png"}
                width={281}
                height={74}
                alt="logo"
                className="h-4 w-2"
              />{" "}
              Reservation
            </Link>
            <Link
              href={"/contact"}
              className={
                pathname === "/"
                  ? "flex flex-row items-center justify-center gap-1 font-open_sans text-xs font-[400] uppercase leading-[25px] tracking-[1.6px] text-[#fff]"
                  : "flex flex-row items-center justify-center gap-1 font-open_sans text-xs font-[400] uppercase leading-[25px] tracking-[1.6px] text-[#000]"
              }
            >
              <Image
                src={"/images/home/hero/dot.png"}
                width={281}
                height={74}
                alt="logo"
                className="h-4 w-2"
              />{" "}
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/*mobile screen */}
      <div className="block px-4 md:hidden md:px-20">
        <div className="flex flex-row items-center justify-between">
          <div>
            <Link href={"/"}>
              <Image
                src={"/images/home/hero/logo.png"}
                width={281}
                height={74}
                alt="logo"
                className="w-28"
              />
            </Link>
          </div>
          <div>
            <Sidebar>
              <Button
                variant="ghost"
                className="flex px-1 py-1 text-primary hover:bg-transparent hover:text-primary"
              >
                <div className="flex flex-row gap-2">
                  <EqualizerIcon />
                </div>
              </Button>
            </Sidebar>{" "}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const EqualizerIcon: React.FC = () => {
  return (
    <div className="equalizer-icon rotate text-[#fff]">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};
