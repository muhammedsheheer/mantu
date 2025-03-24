import Image from "next/image";

const Hero = ({}) => {
  return (
    <section
      id="hero"
      className="flex w-full items-center justify-center bg-[#CFAC6A] py-6 lg:py-12"
    >
      <div className="relative flex min-h-[100vh] w-full items-center justify-center">
        <div className="flex w-full flex-col gap-6 px-4 lg:flex-row lg:gap-0 lg:px-0">
          <div className="flex w-full items-center justify-center lg:w-1/2">
            <div className="mt-20 flex flex-col items-start gap-6 lg:mt-0 lg:w-8/12">
              <h1 className="font-oswald text-5xl font-semibold text-[#5A340D] lg:text-6xl">
                Welcome to Mantu <br /> A Culinary Tradition Redefined
              </h1>
              <p className="font-manrope font-normal text-[#5A340D]">
                At Mantu, we celebrate the rich heritage of Afghan cuisine,
                blending tradition with modern culinary artistry. Each dish is
                crafted with authentic spices, handpicked ingredients, and
                time-honored recipes to bring you an unforgettable dining
                experience. Whether you're savoring our signature mantu
                dumplings or indulging in a flavorful Afghan delicacy, every
                bite tells a story of authenticity, passion, and excellence.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 md:mt-16 lg:w-1/2">
            <Image
              src="/images/about-us/image1.jpg"
              width={951}
              height={975}
              alt="hero"
              className="h-full max-h-[600px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
