"use client";
import { motion } from "framer-motion";
import { Building2Icon, ArrowRightIcon, Car, BathIcon, ShowerHead, WavesLadder, ShieldCheckIcon, HospitalIcon, BookAIcon, BedDouble, SparklesIcon, ShieldCheck } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Parking Space",
    icon: Car,
      
  },
  {
    id: 2,
    title: "Swimming Poll",
    icon: WavesLadder,
  },
  {
    id: 3,
    title: "Sell a Home",
    icon: Building2Icon,
  },
   {
    id: 1,
    title: "Private Security",
    icon: ShieldCheck,
      
  },
  {
    id: 2,
    title: "Medical Center",
    icon: HospitalIcon,
  },
  {
    id: 3,
    title: "Library Area",
    icon: BookAIcon,
  },
    {
    id: 2,
    title: "King Size Bed",
    icon: BedDouble,
  },
  {
    id: 3,
    title: "Smart Homes",
    icon: SparklesIcon,
  },
];

export default function Aminities() {
  return (
    <section className="py-20 bg-gray-50 text-center">
      {/* Section Header */}
      <div className="mb-12">
        <span className="mb-4 sm-title">Aminities </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1b2a4a] mt-2">
          Aparment Aminities
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid sm:cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {services.map((service) => (
          <motion.div
            key={service.id}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative bg-white py-10 shadow-sm hover:shadow-md group cursor-pointer hover:bg-primary-light overflow-hidden"
          >
            {/* Icon */}
            <div className="flex justify-center mb-5">
              <service.icon className="text-primary-default bg-primary-light group-hover:bg-white w-14 h-14 p-3 rounded-full transition-all duration-200" />
            </div>

            {/* Title */}
            <h3 className="mb-3 text-bold text-xl">
              {service.title}
            </h3>
            {/* Find a Home link */}
            <div className="flex items-center justify-center gap-x-2 text-secondary-dark font-semibold group-hover:text-primary-default transition-all duration-200">
              <span className="text-sm">Find a Home</span>
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
