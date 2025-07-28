import HeroSection from "@/components/landing-page/hero-section";
import Navbar from "@/components/landing-page/navbar";
import TravelListings from "@/components/landing-page/travel-listings";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar />
      </div>
      <HeroSection />
      <TravelListings />
    </div>
  );
}
