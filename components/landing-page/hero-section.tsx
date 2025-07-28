import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight, Search } from "lucide-react";
import Image from "next/image";

function HeroSection() {
  return (
    <div className='className="min-h-screen relative"'>
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Desert landscape background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-100px)] px-6 text-center">
        {/* Subtitle */}
        <p className="text-white text-lg md:text-xl mb-8 max-w-2xl">
          Dream destinations, unforgettable experiences, book now.
        </p>

        {/* Main Heading */}
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-16 max-w-5xl">
          Discover the world, one unforgettable journey at a time
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

        {/* Right Arrow Navigation */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-[#0498dd] hover:bg-white/10 rounded-full w-12 h-12"
          >
            <ChevronRight className="w-8 h-8" />
          </Button>
        </div>
      </main>
    </div>
  );
}

export default HeroSection;
