import Contact from "@/app/contact/(section)/Contact";
// import FAQ from "@/components/Faq";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const page = ({}) => {
  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center bg-[#000]">
        <Navbar position="absolute" />
        <div className="h-[15vh] w-full bg-[#000]" id="hero"></div>
        <Contact />
        {/* <FAQ /> */}
        <Footer />
      </div>
    </main>
  );
};

export default page;
