"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "./(section)/Hero";
import Special from "./(section)/(special)/Special";
import Reviews from "./(section)/Review";
import Story from "./(section)/Story";
import Reserve from "./(section)/Reserve";
import Upscale from "./(section)/Upscale";
import Persian from "./(section)/Persian";
import Map from "./(section)/Map";

export default function HomePage() {
  return (
    <main className="relative flex h-full w-full overflow-hidden">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Navbar position="absolute" />
        <Hero />
        <Upscale />
        <Persian />
        <Special />
        <Reviews />
        <Reserve />
        <Story />
        <Map />
        <Footer />
      </div>
    </main>
  );
}
