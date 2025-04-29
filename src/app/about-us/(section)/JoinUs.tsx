import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const JoinUs = ({}) => {
  return (
    <section
      className="relative flex h-screen w-full items-center justify-center"
      style={{
        backgroundImage: `url('/images/about-us/image3.png')`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="z-50 flex h-full w-full flex-col-reverse items-center justify-center gap-4 md:flex-row">
        <div className="flex h-full w-full flex-col items-center justify-center gap-[2.5rem] p-6">
          <h1 className="font-oswald max-w-[500px] text-center text-5xl leading-[60px] text-[#fff]">
            Join Us for an
            <br />
            Unforgettable Meal
          </h1>
          <p className="max-w-[450px] text-center font-[600] leading-[160%] text-[#ffff]">
            Whether it’s a cozy gathering or a grand celebration, Mantu invites
            you to experience the richness of Afghan cuisine. From delicately
            crafted dumplings to time-honored recipes, every dish is a tribute
            to authenticity and tradition. Immerse yourself in a culinary
            journey where heritage meets innovation, and every bite tells a
            story of flavor and passion.
          </p>

          <Link href={"/table-booking"}>
            <Button
              variant="outline"
              className="group w-fit items-center gap-[1.19rem] border-[#fff] bg-transparent px-7 py-7 font-semibold uppercase text-[#fff] hover:bg-[#000]"
            >
              Book Now{" "}
              <Icons.rightArrow className="text-[#fff] duration-300 ease-in-out group-hover:translate-x-1 group-hover:text-primary-foreground" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
