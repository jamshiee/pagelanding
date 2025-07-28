import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronRight, Search } from "lucide-react";
import Image from "next/image";
import Navbar from "./navbar";

// Sample carousel data - you can replace this with your actual data
const carouselData = [
  {
    id: 1,
    title: "Discover the world, one unforgettable journey at a time",
    subtitle: "Dream destinations, unforgettable experiences, book now.",
    backgroundImage:
      "https://images.nhttdubai.com/banners/pexels-jdgromov-4781951-2.jpg",
    alt: "Beautiful travel destination landscape",
  },
  {
    id: 2,
    title: "Adventure awaits in every corner of the globe",
    subtitle: "Explore breathtaking landscapes and vibrant cultures.",
    backgroundImage:
      "https://images.nhttdubai.com/banners/pexels-pixabay-2196921-1.jpg",
    alt: "Mountain landscape background",
  },
  {
    id: 3,
    title: "Create memories that will last a lifetime",
    subtitle:
      "From exotic beaches to bustling cities, find your perfect getaway.",
    backgroundImage:
      "https://images.nhttdubai.com/banners/pexels-horacio-lander-1239977167-27644722.jpg",
    alt: "Beach landscape background",
  },
];

function HeroSection() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full h-full"
    >
      <CarouselContent>
        {carouselData.map((slide) => (
          <CarouselItem key={slide.id}>
            <div className="relative min-h-screen">
              <div className="absolute inset-0 z-0">
                <Image
                  src={slide.backgroundImage}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-100px)] px-6 text-center">
                {/* Subtitle */}
                <p className="text-white text-lg md:text-xl mb-8 max-w-2xl">
                  {slide.subtitle}
                </p>

                {/* Main Heading */}
                <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-16 max-w-5xl">
                  {slide.title}
                </h1>

                {/* Search Bar */}
                <div className="flex items-center bg-white rounded-full p-2 w-full max-w-2xl shadow-lg">
                  <Input
                    type="text"
                    placeholder="Search Your Destinations here....."
                    className="flex-1 border-0 bg-transparent text-[#6f6969] placeholder:text-[#6f6969] focus-visible:ring-0 focus-visible:ring-offset-0 px-6 py-3 text-lg"
                  />
                  <Button className="bg-[#0498dd] hover:bg-[#0498dd]/90 text-white rounded-full px-8 py-3 flex items-center space-x-2">
                    <Search className="w-5 h-5" />
                    <span className="font-medium">Search</span>
                  </Button>
                </div>
              </main>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Carousel Navigation */}
      <CarouselPrevious className="left-8 text-white hover:text-[#0498dd] hover:bg-white/10 border-white/20 hover:border-[#0498dd]" />
      <CarouselNext className="right-8 text-white hover:text-[#0498dd] hover:bg-white/10 border-white/20 hover:border-[#0498dd]" />
    </Carousel>
  );
}

export default HeroSection;
