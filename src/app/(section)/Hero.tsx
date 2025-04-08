// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const Hero: React.FC = () => {
//   return (
//     <section className="relative h-screen w-full overflow-hidden bg-[#fff]">
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute left-0 top-0 z-10 h-full w-full object-cover"
//       >
//         <source src="/videos/bg.mp4" type="video/mp4" />
//         <source src="/videos/bg.webm" type="video/webm" />
//         Your browser does not support the video tag.
//       </video>
//       <div className="absolute inset-0 top-14 z-10 hidden justify-center md:flex">
//         <Link href={"/"}>
//           <Image
//             src={"/images/home/hero/logo.png"}
//             width={281}
//             height={74}
//             alt="logo"
//             className="w-44"
//           />
//         </Link>
//       </div>
//       {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
//       <div className="absolute inset-0 bg-black/70"></div>

//       <div className="relative z-20 flex h-full flex-col items-center justify-center gap-3 text-white md:mt-8">
//         {/* <h1 className="text-center font-cormorant text-5xl font-[400] uppercase tracking-[5px] text-[#fff] md:text-7xl">
//           Authentic <br /> Afghan Cuisine
//         </h1> */}
//         <h1 className="text-center font-cormorant text-5xl font-[400] uppercase tracking-[5px] text-[#fff] drop-shadow-md md:text-7xl">
//           Authentic <br /> Afghan Cuisine
//         </h1>

//         <div className="mt-4 md:mt-8">
//           <Link href={"/table-booking"}>
//             <Button className="rounded-none bg-[#E7C681] px-8 py-7 font-cormorant text-sm font-[700] uppercase tracking-[2px] text-[#5A340D] hover:bg-[#e7cc93] md:tracking-[4.6]">
//               Book Now
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#fff]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute left-0 top-0 z-0 h-full w-full object-cover"
      >
        <source src="/videos/bg.mp4" type="video/mp4" />
        <source src="/videos/bg.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Black Shade Overlay */}
      <div className="absolute inset-0 z-10 bg-black/50"></div>

      {/* Logo */}
      <div className="absolute inset-0 top-14 z-20 hidden justify-center md:flex">
        <Link href={"/"}>
          <Image
            src={"/images/home/hero/logo.png"}
            width={281}
            height={74}
            alt="logo"
            className="w-44"
          />
        </Link>
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center gap-3 text-white md:mt-8">
        <h1 className="text-center font-cormorant text-5xl font-[400] uppercase tracking-[5px] text-[#fff] drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)] md:text-7xl">
          Authentic <br /> Afghan Cuisine
        </h1>

        <div className="mt-4 md:mt-8">
          <Link href={"/table-booking"}>
            <Button className="rounded-none bg-[#E7C681] px-8 py-7 font-cormorant text-sm font-[700] uppercase tracking-[2px] text-[#5A340D] hover:bg-[#e7cc93] md:tracking-[4.6]">
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
