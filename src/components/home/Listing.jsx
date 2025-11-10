"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import {
  MapPin,
  Camera,
  Bath,
  Bed,
  Maximize2,
  Heart,
  Share2,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

const listings = [
  {
    id: 1,
    title: "Modern Apartments",
    price: "$34,900",
    period: "/Month",
    location: "Belmont Gardens, Chicago",
    description:
      "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood",
    bedrooms: 3,
    bathrooms: 2,
    area: 3450,
    image: "/img/listing/3.jpg",
    status: "FOR SALE",
  },
  {
    id: 2,
    title: "Comfortable Apartment",
    price: "$34,900",
    period: "/Month",
    location: "Belmont Gardens, Chicago",
    description:
      "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood",
    bedrooms: 3,
    bathrooms: 2,
    area: 3450,
    image: "/img/listing/2.jpg",
    status: "FOR RENT",
  },
  {
    id: 3,
    title: "Luxury villa in Rego Park",
    price: "$34,900",
    period: "/Month",
    location: "Belmont Gardens, Chicago",
    description:
      "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood",
    bedrooms: 3,
    bathrooms: 2,
    area: 3450,
    image: "/img/listing/5.jpg",
    status: "FOR RENT",
  },
  {
    id: 4,
    title: "Beautiful Flat in Manhattan",
    price: "$34,900",
    period: "/Month",
    location: "Belmont Gardens, Chicago",
    description:
      "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood",
    bedrooms: 3,
    bathrooms: 2,
    area: 3450,
    image: "/img/listing/3.jpg",
    status: "FOR RENT",
  },
  {
    id: 4,
    title: "Beautiful Flat in Manhattan",
    price: "$34,900",
    period: "/Month",
    location: "Belmont Gardens, Chicago",
    description:
      "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood",
    bedrooms: 3,
    bathrooms: 2,
    area: 3450,
    image: "/img/listing/4.jpg",
    status: "FOR RENT",
  },
];

export default function FeaturedListings() {
  return (
    <section className="py-16 bg-gray-50 relative">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h4 className="text-amber-500 font-semibold uppercase tracking-widest">
          Properties
        </h4>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#14213D] mt-2">
          Featured Listings
        </h2>
      </div>

      {/* Swiper Container */}
      <div className="max-w-7xl mx-auto px-4 relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {listings.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                {/* Image */}
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-56 object-cover"
                  />
                  <span
                    className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded text-white ${
                      item.status === "FOR SALE" ? "bg-red-500" : "bg-green-500"
                    }`}
                  >
                    {item.status}
                  </span>
                  <div className="absolute bottom-3 left-3 flex items-center gap-3 text-white text-sm">
                    <p className="flex items-center gap-1">
                      <MapPin size={16} /> {item.location}
                    </p>
                    <div className="flex items-center gap-2 ml-auto bg-black/40 px-2 py-1 rounded">
                      <Camera size={16} />
                      <Bath size={16} />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 text-left">
                  <h4 className="text-primary-default font-bold text-lg">
                    {item.price}
                    <span className="text-gray-500 font-medium">
                      {item.period}
                    </span>
                  </h4>
                  <h3 className="text-lg font-semibold mt-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-2 mb-4">
                    {item.description}
                  </p>

                  {/* Details */}
                  <div className="flex justify-between text-gray-600 text-sm border-t pt-3">
                    <div className="flex items-center gap-1">
                      <Bed size={16} /> {item.bedrooms}
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath size={16} /> {item.bathrooms}
                    </div>
                    <div className="flex items-center gap-1">
                      <Maximize2 size={16} /> {item.area} ft²
                    </div>
                  </div>

                  {/* Agent Info */}
                  <div className="flex items-center justify-between border-t mt-4 pt-4">
                    <div className="flex items-center gap-3">
                      <img
                        src="/img/profile/author.jpg"
                        alt="Agent"
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <h5 className="font-semibold text-sm">William Seklo</h5>
                        <p className="text-gray-500 text-xs">Estate Agent</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Heart className="w-5 h-5 cursor-pointer hover:text-amber-500" />
                      <Share2 className="w-5 h-5 cursor-pointer hover:text-amber-500" />
                      <ArrowRight className="w-5 h-5 cursor-pointer hover:text-amber-500" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <button className="swiper-button-prev absolute top-1/2 -left-4 z-10 transform -translate-y-1/2 bg-primary-default p-2 rounded-full hover:bg-secondary-dark hover:text-white transition-all duration-100">
          <ArrowRight className="text-white"/>
        </button>
        <button className="swiper-button-next absolute top-1/2 -right-4 z-10 transform -translate-y-1/2 bg-primary-default p-2 rounded-full hover:bg-secondary-dark hover:text-white transition-all duration-100">
          <ArrowLeft className="text-white"/>
        </button>
      </div>
    </section>
  );
}
