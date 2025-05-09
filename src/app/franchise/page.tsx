import Franchise from "@/app/franchise/(section)/franchise";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const page = ({}) => {
  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center bg-[#000]">
        <Navbar position="absolute" />
        <div className="h-[15vh] w-full bg-[#000]" id="hero"></div>
        <Franchise />
        <Footer />
      </div>
    </main>
  );
};

export default page;
