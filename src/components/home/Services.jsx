"use client";
import { motion } from "framer-motion";
import { HomeIcon, KeyRoundIcon, Building2Icon, ArrowRightIcon } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Buy a Home",
    icon: HomeIcon,
    description:
      "Explore our wide range of premium homes with modern design and top-class amenities.",
  },
  {
    id: 2,
    title: "Rent a Home",
    icon: KeyRoundIcon,
    description:
      "Find the perfect rental property in your desired location at an affordable price.",
  },
  {
    id: 3,
    title: "Sell a Home",
    icon: Building2Icon,
    description:
      "Get the best market value for your property with our trusted selling platform.",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50 text-center">
      {/* Section Header */}
      <div className="mb-12">
        <span className="mb-4 sm-title">Services </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1b2a4a] mt-2">
          What We Offer
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {services.map((service) => (
          <motion.div
            key={service.id}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative bg-white px-8 py-12 shadow-sm hover:shadow-md group cursor-pointer overflow-hidden"
          >
            {/* Icon */}
            <div className="flex justify-center mb-5">
              <service.icon className="text-primary-default bg-primary-light w-14 h-14 p-3 rounded-full" />
            </div>

            {/* Title */}
            <h3 className="mb-3">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-5">
              {service.description}
            </p>

            {/* Find a Home link */}
            <div className="flex items-center justify-center gap-x-2 text-secondary-dark font-semibold group-hover:text-primary-default transition-all">
              <span>Find a Home</span>
              <ArrowRightIcon className="w-5 h-5" />
            </div>

            {/* Underline Animation */}
            <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-primary-default transition-all duration-500 group-hover:w-full"></span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
