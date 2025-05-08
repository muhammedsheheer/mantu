import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-[300px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>
            <Image
              src="/images/home/hero/logo.png"
              width={162}
              height={35}
              alt="Foodo"
              className="w-28"
            />
          </SheetTitle>
          <SheetDescription className="flex w-full flex-col items-center justify-center gap-7 pt-14">
            <Link
              href="/"
              className="flex w-full justify-center p-0 text-center font-open_sans text-2xl font-normal text-[#fff]"
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="flex w-full justify-center p-0 text-center font-open_sans text-2xl font-normal text-[#fff]"
            >
              Menu
            </Link>
            <Link
              href="/about-us"
              className="flex w-full justify-center p-0 text-center font-open_sans text-2xl font-normal text-[#fff]"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="flex w-full justify-center p-0 text-center font-open_sans text-2xl font-normal text-[#fff]"
            >
              Contact
            </Link>
            <Link
              href="/table-booking"
              className="flex w-full justify-center p-0 text-center font-open_sans text-2xl font-normal text-[#fff]"
            >
              Table Booking
            </Link>
            {/* <Link
              href=""
              className="font-open_sans flex w-full justify-center p-0 text-2xl font-normal text-[#fff] text-center"
            >
              Food & Drinks
            </Link> */}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
