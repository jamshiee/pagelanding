import HeroSection from "@/components/landing-page/hero-section";
import Navbar from "@/components/landing-page/navbar";
import Image from "next/image";

export default function Home() {
  return <div className="h-screen">
    <Navbar/>
    <HeroSection/>
  </div>;
}
