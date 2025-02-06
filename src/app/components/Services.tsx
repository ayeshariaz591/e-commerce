"use client";
import React from "react";
import { PiSealCheckFill } from "react-icons/pi";
import { FaTrophy, FaTruck, FaPhoneAlt } from "react-icons/fa";

// Service data
const services = [
  {
    id: 1,
    icon: <FaTrophy className="text-emerald-500 text-4xl" />,
    title: "High Quality",
    description: "Crafted from top materials",
  },
  {
    id: 2,
    icon: <PiSealCheckFill className="text-teal-500 text-4xl" />,
    title: "Warranty Protection",
    description: "Reliable and long-lasting protection",
  },
  {
    id: 3,
    icon: <FaTruck className="text-orange-400 text-4xl" />,
    title: "Free Shipping",
    description: "On orders over $150",
  },
  {
    id: 4,
    icon: <FaPhoneAlt className="text-purple-600 text-4xl" />,
    title: "24/7 Support",
    description: "Always available for you",
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-[#F6E8D7] to-[#F0C8B1]">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#5A3D33] mb-10">
          What Shoppex Offers!
        </h1>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-6 text-center border border-gray-200 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              {/* Icon */}
              <div className="flex items-center justify-center mb-4">
                {service.icon}
              </div>
              {/* Title */}
              <h3 className="text-lg font-semibold text-[#5A3D33] mb-2">
                {service.title}
              </h3>
              {/* Description */}
              <p className="text-gray-600 text-sm line-clamp-3">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;



