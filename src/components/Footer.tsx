// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Link from "next/link";
// import { Icons } from "./Icon";
// import { ArrowRight, ChevronRight } from "lucide-react";

// const Footer = ({}) => {
//   return (
//     <footer className="flex h-full w-full bg-[#131313] px-4 py-12 md:px-[50px] md:py-20 lg:px-[100px] 2xl:px-[160px]">
//       <div className="flex flex-col gap-6 md:flex-row md:gap-20 2xl:gap-44">
//         {/* first div */}
//         <div className="flex flex-col gap-6 md:gap-12">
//           <div className="ml-2 md:ml-0">
//             <h1 className="font-playfair text-3xl font-[400] italic [color:var(--text-light,#FBEAD2)] md:text-5xl">
//               Subscribe to <br />
//               our newsletter
//             </h1>
//           </div>
//           <div className="flex flex-col items-start justify-start gap-4 md:flex-row md:gap-16">
//             <div className="flex flex-col items-start justify-start gap-2">
//               <Button
//                 variant="link"
//                 className="font-manrope text-base font-[400] tracking-[1px] [color:var(--text-light,#FBEAD2)]"
//                 asChild
//               >
//                 <Link href="/menu">Menu</Link>
//               </Button>
//               <Button
//                 variant="link"
//                 className="font-manrope text-base font-[400] tracking-[1px] [color:var(--text-light,#FBEAD2)]"
//                 asChild
//               >
//                 <Link href="/about-us">About</Link>
//               </Button>
//               <Button
//                 variant="link"
//                 className="font-manrope text-base font-[400] tracking-[1px] [color:var(--text-light,#FBEAD2)]"
//                 asChild
//               >
//                 <Link href="/contact">Contact</Link>
//               </Button>
//               <Button
//                 variant="link"
//                 className="font-manrope text-base font-[400] tracking-[1px] [color:var(--text-light,#FBEAD2)]"
//                 asChild
//               >
//                 <Link href="/table-booking">booking</Link>
//               </Button>
//               {/* <Button
//                 variant="link"
//                 className="font-manrope text-base font-[400] tracking-[1px] [color:var(--text-light,#FBEAD2)]"
//                 asChild
//               >
//                 <Link href="">Gift voucher</Link>
//               </Button> */}
//             </div>
//             <div className="ml-4 flex flex-col gap-2 md:ml-0">
//               <h6 className="font-manrope text-base font-[700] uppercase tracking-[1.62px] [color:var(--text-light,#FBEAD2)]">
//                 Contact
//               </h6>
//               <Link
//                 href="tel:+02039744620"
//                 className="font-manrope text-base font-[400] [color:var(--text-light,#FBEAD2)]"
//               >
//                 +020 3974 4620
//               </Link>
//               <Link
//                 href="mailto:hello@manturestaurant.co.uk"
//                 className="font-manrope text-sm font-[400] lowercase underline [color:var(--text-light,#FBEAD2)]"
//               >
//                 Hello@manturestaurant.co.uk
//               </Link>
//               <Link
//                 href="https://g.co/kgs/GwqqcGx"
//                 target="_blank"
//                 className="font-manrope text-base font-[400] underline [color:var(--text-light,#FBEAD2)]"
//               >
//                 228 Station Road Edgware HA8 7AU
//               </Link>
//               <div className="flex flex-row items-center gap-3 pt-8">
//                 <Link
//                   href={"https://www.instagram.com/mantu.london/"}
//                   target="_blank"
//                 >
//                   {" "}
//                   <Icons.instagram className="[color:var(--text-light,#FBEAD2)]" />
//                 </Link>
//                 {/* <Link
//                   href={
//                     "https://www.tripadvisor.co.uk/Restaurant_Review-g187069-d17654222-Reviews-Istanbul_Restaurant-Manchester_Greater_Manchester_England.html"
//                   }
//                   target="_blank"
//                 >
//                   {" "}
//                   <Icons.unknown className="[color:var(--text-light,#FBEAD2)]" />
//                 </Link> */}
//                 <Link
//                   href={"https://maps.app.goo.gl/ZJMh1FpKoYa66F359"}
//                   target="_blank"
//                 >
//                   {" "}
//                   <Icons.google className="[color:var(--text-light,#FBEAD2)]" />
//                 </Link>
//                 {/* <Link href={"https://g.co/kgs/GwqqcGx"} target="_blank">
//                   {" "}
//                   <Icons.facebook className="[color:var(--text-light,#FBEAD2)]" />
//                 </Link> */}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* second div */}
//         <div className="ml-4 flex flex-col gap-6 md:ml-0 md:gap-32">
//           <div className="flex flex-col gap-4 md:gap-8">
//             <p className="w-full max-w-[400px] font-manrope text-base font-[300] tracking-[0.6px] [color:var(--text-light,#FBEAD2)]">
//               By subscribing to the newsletter, you will always be up to date.
//               Find out about new products, events, and specials.
//             </p>
//             <div className="flex flex-col gap-4 md:flex-row">
//               <input
//                 type="text"
//                 placeholder="Email Address"
//                 className="w-full border-0 border-b-[1px] border-[color:var(--text-light,#FBEAD2)] bg-transparent px-2 py-4 text-[color:var(--text-light,#FBEAD2)] placeholder-[#958B7D] focus:outline-none focus:ring-0 md:w-[300px]"
//               />

//               <div>
//                 <Button className="mt-2 rounded-none border-[color:var(--text-light,#FBEAD2)] bg-transparent py-6 ring-1 ring-[color:var(--text-light,#FBEAD2)]">
//                   <span className="flex flex-row items-center justify-center text-center font-manrope text-sm font-[600] uppercase tracking-[1.96px] [color:var(--text-light,#FBEAD2)]">
//                     Subscribe <ArrowRight />
//                   </span>
//                 </Button>
//               </div>
//             </div>
//             <div className="flex flex-col gap-2">
//               <div className="flex flex-row gap-2">
//                 <span className="font-manrope text-base font-[400] [color:var(--text-light,#FBEAD2)]">
//                   Monday-Thursday
//                 </span>
//                 <span className="font-manrope text-base font-[400] [color:var(--text-light,#FBEAD2)]">
//                   2-11pm
//                 </span>
//               </div>
//               <div className="flex flex-row gap-2">
//                 <span className="font-manrope text-base font-[400] [color:var(--text-light,#FBEAD2)]">
//                   Friday-Sunday
//                 </span>
//                 <span className="font-manrope text-base font-[400] [color:var(--text-light,#FBEAD2)]">
//                   4-11pm
//                 </span>
//               </div>
//             </div>
//           </div>

//           <div>
//             <Link className="w-40 md:w-56" href="/">
//               <Image
//                 src="/images/logo.png"
//                 width={188}
//                 height={56}
//                 alt="logo"
//               />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";

const Footer = ({}) => {
  return (
    <footer className="h-full w-full bg-[#000]">
      <div className="h-[1px] w-full border-b-[1px] border-b-[#CFAC6A]" />
      <div className="flex flex-col gap-4 px-4 pt-12 md:gap-6 lg:px-10 lg:pt-24">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-1">
          <Link href={"/"}>
            <Image
              src={"/images/home/hero/logo.png"}
              width={281}
              height={74}
              alt="logo"
              className="w-28 md:w-32"
            />
          </Link>
        </div>
        {/*big screen */}
        <div className="hidden flex-row items-center justify-center gap-40 md:flex">
          <div className="flex flex-col items-center justify-center gap-3 md:items-start">
            <Link
              href={"/"}
              className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A]"
            >
              Home{" "}
            </Link>
            <Link
              href={"/menu"}
              className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A]"
            >
              Menu{" "}
            </Link>
            <Link
              href={"/contact"}
              className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A]"
            >
              Contact us{" "}
            </Link>
            <Link
              href={"/about-us"}
              className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A]"
            >
              Our Story{" "}
            </Link>
            <Link
              href={"/table-booking"}
              className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A]"
            >
              Booking{" "}
            </Link>
          </div>
          <div className="flex flex-col items-center gap-3 md:items-start">
            <div>
              <Link
                href={""}
                className="font-open_sans text-base font-[400] uppercase tracking-[2px] text-[#CFAC6A]"
              >
                Contact{" "}
              </Link>
            </div>
            <div className="flex flex-col gap-1">
              <Link
                href={"https://g.co/kgs/GwqqcGx"}
                target="_blank"
                className="font-open_sans text-end text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A] md:text-start"
              >
                228 Station Road Edgware HA8 7AU
              </Link>
              <Link
                href={"mailto:hello@manturestaurant.co.uk"}
                className="font-open_sans text-end text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A] md:text-start"
              >
                Hello@manturestaurant.co.uk
              </Link>
              <Link
                href={"tele:+02039744620"}
                className="font-open_sans text-end text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A] md:text-start"
              >
                +020 3974 4620
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 md:items-start">
            <Link
              href={""}
              className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A]"
            >
              Opening hours
            </Link>
            <p className="font-open_sans text-center text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A] md:text-start">
              Monday-Thursday 2-11pm
              <br />
              Friday-Sunday 4-11pm
            </p>
          </div>
        </div>
        {/* mobile screen */}

        <div className="flex flex-col gap-4 md:hidden md:flex-row md:items-center md:justify-end md:gap-2">
          <div className="flex w-full flex-col items-start justify-start gap-8 md:w-[45%] md:flex-row md:items-center md:justify-end md:gap-16">
            <div className="flex flex-col items-start justify-start gap-3 md:items-start">
              <Link
                href={"/"}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A]"
              >
                Home{" "}
              </Link>
              <Link
                href={"/menu"}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A]"
              >
                Menu{" "}
              </Link>
              <Link
                href={"/contact"}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A]"
              >
                Contact us{" "}
              </Link>
              <Link
                href={"/about-us"}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A]"
              >
                Our Story{" "}
              </Link>
              <Link
                href={"/table-booking"}
                className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A]"
              >
                Booking{" "}
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-end gap-3 md:items-start">
            <div>
              <Link
                href={""}
                className="font-open_sans text-base font-[400] uppercase tracking-[2px] text-[#CFAC6A]"
              >
                Contact{" "}
              </Link>
            </div>
            <div className="flex flex-col items-end gap-1">
              <Link
                href={"https://g.co/kgs/GwqqcGx"}
                target="_blank"
                className="font-open_sans text-end text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A] md:text-start"
              >
                228 Station Road <br /> Edgware HA8 7AU
              </Link>
              <Link
                href={"mailto:hello@manturestaurant.co.uk"}
                className="font-open_sans text-end text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A] md:text-start"
              >
                Hello@manturestaurant.co.uk
              </Link>
              <Link
                href={"tele:+02039744620"}
                className="font-open_sans text-end text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A] md:text-start"
              >
                +020 3974 4620
              </Link>
            </div>
          </div>
          <div className="w-full border-b-[1px] border-b-[#CFAC6A]" />
          <div className="flex w-full flex-col items-center justify-center gap-8 pt-6 md:w-[45%] md:flex-row md:justify-start md:gap-20">
            <div className="flex flex-col items-center gap-3 md:items-start">
              <span className="font-open_sans text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A]">
                Opening hours
              </span>
              <p className="font-open_sans text-center text-sm font-[400] uppercase tracking-[2px] text-[#CFAC6A] md:text-start">
                Monday-Thursday 2-11pm
                <br />
                Friday-Sunday 4-11pm
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-3 md:ml-10 md:items-center md:justify-center">
          <Link
            href={"https://www.instagram.com/mantu.london/"}
            target="_blank"
            className="text-[#CFAC6A]"
          >
            <Icons.instagram />
          </Link>
          <Link
            href={"https://g.co/kgs/GwqqcGx"}
            target="_blank"
            className="text-[#CFAC6A]"
          >
            <Icons.google />
          </Link>
        </div>
        <div className="flex flex-col gap-2 pb-10">
          <div className="flex flex-col justify-center gap-2 md:flex-row md:justify-between">
            <span className="font-open_sans text-center text-xs font-[400] uppercase tracking-[2px] text-[#CFAC6A] md:text-start">
              © 2025 Mantu , All Rights Reserved
            </span>

            <Link
              href={"https://foodo.ai"}
              target="_blank"
              className="font-open_sans text-center text-xs font-[400] uppercase tracking-[2px] text-[#CFAC6A] md:text-start"
            >
              Powerd by foodo
            </Link>
          </div>
        </div>
      </div>
      <div className="mb-1 h-[1px] w-full border-b-[1px] border-b-[#CFAC6A]" />
    </footer>
  );
};

export default Footer;
