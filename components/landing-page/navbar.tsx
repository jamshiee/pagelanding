import { Button } from "@/components/ui/button";
import { ChevronDown, Heart, UserRound } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <div>
      <header className="relative z-10 px-6 py-4">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/nht-logo.png"
              alt="New Mexico Travel & Tours"
              width={200}
              height={50}
              className="h-12 w-auto"
            />
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-white hover:text-[#0498dd] transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:text-[#0498dd] transition-colors"
            >
              Tours
            </a>
            <div className="flex items-center space-x-1">
              <a
                href="#"
                className="text-white hover:text-[#0498dd] transition-colors"
              >
                Destinations
              </a>
              <ChevronDown className="w-4 h-4 text-white" />
            </div>
            <a
              href="#"
              className="text-white hover:text-[#0498dd] transition-colors"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-white hover:text-[#0498dd] transition-colors"
            >
              Contact us
            </a>
          </div>

          {/* Right Side Menu */}
          <div className="flex items-center space-x-4">
            {/* UAE Dropdown */}
            <div className="flex items-center space-x-1">
              <div className="w-6 h-4 bg-gradient-to-b from-green-500 via-white to-black rounded-sm"></div>
              <span className="text-white text-sm">UAE</span>
              <ChevronDown className="w-4 h-4 text-white" />
            </div>

            {/* Language Dropdown */}
            <div className="flex items-center space-x-1">
              <span className="text-white text-sm">Language</span>
              <ChevronDown className="w-4 h-4 text-white" />
            </div>

            {/* Green Dot Indicator */}
            <div className="w-3 h-3 bg-[#34a853] rounded-full"></div>

            {/* Heart Icon */}
            <Heart className="w-5 h-5 text-white" />

            {/* Login Button */}
            <Button
              variant="outline"
              className="bg-white border-[#0498dd] text-[#0498dd] hover:bg-[#0498dd] hover:text-white transition-colors rounded-full px-6"
            >
              <UserRound />
              Login
            </Button>
          </div>
        </nav>
      </header>
    </div>
  );
}
