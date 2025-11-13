import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sophia Turner",
    role: "Home Buyer",
    message:
      "Buying my first apartment was seamless! The team guided me through every step and helped me find the perfect home.",
    image: "/img/profile/author.jpg",
  },
  {
    name: "David Miller",
    role: "Property Seller",
    message:
      "I sold my apartment within two weeks! Their professional service and constant communication made it effortless.",
    image: "/img/profile/author.jpg",
  },
  {
    name: "Emma Wilson",
    role: "Tenant",
    message:
      "The renting process was super easy. Everything was transparent, and I found a beautiful home that fits my lifestyle.",
    image: "/img/profile/author.jpg",
  },
  {
    name: "Michael Brown",
    role: "Investor",
    message:
      "Great experience! Their insights helped me find high ROI properties with minimal hassle. Highly recommended!",
    image: "/img/profile/author.jpg",
  },
];

export default function Testimonial() {
  return (
    <section
      className="relative bg-center bg-no-repeat py-20"
      
    >
        {/* style={{ backgroundImage: "url('/img/testimonial.jpg')" }} */}
      {/* Overlay */}
      <div className="relative max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <div className="mb-12">
        <span className="mb-4 sm-title">Review </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1b2a4a] mt-2">
          Client Reviews
        </h2>
      </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 }, // show 2 cards on md+
          }}
          loop={true}
          autoplay={{ delay: 4000 }}
          className="px-4"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className=" p-8 rounded border border-white/20 bg-primary-default h-full flex flex-col justify-between">
                <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-20 h-20 rounded-full border-2 border-white object-cover"
                  />
                  <div>
                    <p className="text-lg italic mb-4 text-neutral-light leading-relaxed">
                      “{t.message}”
                    </p>
                    <h4 className="font-semibold text-xl text-secondary-dark">{t.name}</h4>
                    <p className="text-gray-300 text-sm">{t.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
