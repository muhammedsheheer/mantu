import Image from "next/image";

const BavetteStory = ({}) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center bg-[#391D00] p-4 lg:py-16">
      <div className="flex h-full w-full flex-col items-center justify-center gap-11 bg-[#391D00]">
        <h2 className="font-oswald text-center text-8xl text-[#CFAC6A] md:left-[15%] md:text-8xl">
          The Mantu
          <br />
          Story
        </h2>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#391D00] md:flex-row lg:px-24 lg:py-20">
          <div className="h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0">
            <Image
              src="/images/about-us/image2.jpg"
              width={577}
              height={676}
              alt="private dining"
              className="h-auto w-full rounded-lg md:rounded-none"
            />
          </div>
          <div className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24">
            <h1 className="font-oswald max-w-[500px] text-center text-6xl text-[#CFAC6A] sm:text-7xl md:text-start">
              From Passion
              <br />
              to Perfection{" "}
            </h1>
            <p className="max-w-[450px] text-center font-light leading-[160%] text-[#CFAC6A] md:text-start">
              What started as a passion for authentic Afghan cuisine has evolved
              into Mantu—a culinary destination where tradition meets
              innovation. Rooted in heritage and crafted with excellence, Mantu
              was founded to bring the rich flavors of Afghan delicacies to
              life. <br />
              From our humble beginnings to becoming a beloved spot for food
              enthusiasts, our commitment to authenticity, quality, and
              hospitality has remained steadfast. Every ingredient is
              thoughtfully chosen, every dish is prepared with care, and every
              bite is a tribute to Afghan culinary artistry. <br />
              At Mantu, we don’t just serve food—we share a story of culture,
              flavor, and warmth. As we continue to grow, our mission remains
              the same: to honor tradition, embrace creativity, and deliver a
              truly unforgettable dining experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BavetteStory;
