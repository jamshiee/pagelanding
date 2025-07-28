import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface TravelCard {
  id: string;
  image: string;
  category: string;
  location: string;
  language: string;
  title: string;
  description: string;
  rating: number;
  reviewCount: string;
  bookingCount: string;
  price: number;
  currency: string;
  badges: string[];
  discountPercent?: number;
  duration?: string;
}

const travelData: TravelCard[] = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=250&fit=crop",
    category: "Observation Decks",
    location: "Dubai",
    language: "English",
    title: "At The Top- Burj khalifa observation Deck Ticket",
    description: "",
    rating: 4.5,
    reviewCount: "1234",
    bookingCount: "300k",
    price: 400,
    currency: "AED",
    badges: ["Bestseller", "Free Cancellation"],
    discountPercent: 10,
    duration: "6 Hours",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=400&h=250&fit=crop",
    category: "Dune Safari",
    location: "Dubai",
    language: "English",
    title: "Desert Safari tours in Dubai-Morning,evening...",
    description: "",
    rating: 4.5,
    reviewCount: "1234",
    bookingCount: "300k",
    price: 400,
    currency: "AED",
    badges: ["Bestseller", "Free Cancellation"],
    discountPercent: 10,
    duration: "6 Hours",
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=250&fit=crop",
    category: "Tours",
    location: "Abu Dhabi",
    language: "English",
    title: "Marina royal Dinner Cruise",
    description: "",
    rating: 4.5,
    reviewCount: "1234",
    bookingCount: "300k",
    price: 400,
    currency: "AED",
    badges: ["Bestseller", "Free Cancellation", "Large Group"],
    discountPercent: 10,
    duration: "6 Hours",
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=400&h=250&fit=crop",
    category: "Tours",
    location: "Abu Dhabi",
    language: "English",
    title: "Abu Dhabi City Tour From Dubai",
    description: "",
    rating: 4.5,
    reviewCount: "1234",
    bookingCount: "300k",
    price: 400,
    currency: "AED",
    badges: ["Bestseller", "Free Cancellation", "Large Group"],
    discountPercent: 10,
    duration: "6 Hours",
  },
];

export default function TravelListings() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gray-600 text-lg mb-2">
            Find trips that moves you
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            Traveler's Favorite Choices
          </h2>
        </div>

        {/* Travel Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {travelData.map((travel) => (
            <TravelCard key={travel.id} travel={travel} />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Button className="bg-[#ff5722] hover:bg-[#e64a19] text-white px-8 py-3 rounded-full text-lg">
            View More
          </Button>
        </div>
      </div>
    </section>
  );
}

function TravelCard({ travel }: { travel: TravelCard }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-48 w-full">
        <Image
          src={travel.image}
          alt={travel.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category and Location */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
          <span>{travel.category}</span>
          <span>•</span>
          <span>{travel.location}</span>
          <span>•</span>
          <span>{travel.language}</span>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2">
          {travel.title}
        </h3>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-3">
          {travel.badges.map((badge, index) => (
            <span
              key={index}
              className={`px-2 py-1 text-xs rounded-full ${
                badge === "Bestseller"
                  ? "bg-gray-200 text-gray-700"
                  : badge === "Free Cancellation"
                  ? "bg-gray-200 text-gray-700"
                  : badge === "Large Group"
                  ? "bg-gray-200 text-gray-700"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold text-sm">{travel.rating}</span>
          </div>
          <span className="text-sm text-gray-600">
            ({travel.reviewCount}) • {travel.bookingCount} Booked
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-gray-900">
              From {travel.currency} {travel.price}
            </span>
          </div>
        </div>

        {/* Bottom Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded">
            Sale
          </span>
          {travel.discountPercent && (
            <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded">
              {travel.discountPercent}% off
            </span>
          )}
          <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded">
            combo
          </span>
          {travel.discountPercent && (
            <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded">
              {travel.discountPercent}% off
            </span>
          )}
          {travel.duration && (
            <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded">
              Duration: {travel.duration}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
