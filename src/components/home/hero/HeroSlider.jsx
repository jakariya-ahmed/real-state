import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { PlayCircle, X } from "lucide-react";

// Slide data
const slides = [
  {
    id: 1,
    title: "Modern Living",
    heading: "Find Your Dream Home",
    description: "Explore top-rated listings in your area with modern amenities.",
    buttonText: "Explore Listings",
    img: "/slider/21.png",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
  {
    id: 2,
    title: "Luxury Apartments",
    heading: "Where Comfort Meets Style",
    description: "Live in elegant spaces designed for modern lifestyle.",
    buttonText: "View Apartments",
    img: "/slider/21.png",
    videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
  },
  {
    id: 3,
    title: "Family Homes",
    heading: "Perfect Place for Loved Ones",
    description: "Spacious family homes with peaceful neighborhoods.",
    buttonText: "Book a Visit",
    img: "/slider/21.png",
    videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
  },
];

export default function HeroSlider() {
  const [showVideo, setShowVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const openVideo = (url) => {
    setVideoUrl(url);
    setShowVideo(true);
  };
  const closeVideo = () => setShowVideo(false);

  return (
    <section className="relative bg-[#14213D] text-white py-12 md:py-20">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="max-w-7xl mx-auto px-6"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* Full Slide = Left + Right */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Left Content */}
              <motion.div
                key={slide.id + "-text"}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-5"
              >
                <p className="text-amber-400 uppercase tracking-wide font-semibold">
                  {slide.title}
                </p>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  {slide.heading}
                </h1>
                <p className="text-gray-200 text-lg">{slide.description}</p>
                <div className="flex items-center gap-5 mt-4">
                  <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition">
                    {slide.buttonText}
                  </button>
                  <button
                    onClick={() => openVideo(slide.videoUrl)}
                    className="flex items-center gap-2 text-white hover:text-amber-400 transition"
                  >
                    <PlayCircle className="w-10 h-10" />
                    <span className="font-medium">Watch Video</span>
                  </button>
                </div>
              </motion.div>

              {/* Right Image */}
              <motion.div
                key={slide.id + "-img"}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex justify-center md:justify-end"
              >
                <img
                  src={slide.img}
                  alt={slide.heading}
                  className="rounded-2xl shadow-2xl w-full max-w-md object-cover"
                />
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Video Popup */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-3xl aspect-video"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <iframe
                src={videoUrl}
                title="Video"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
              <button
                onClick={closeVideo}
                className="absolute -top-10 right-0 text-white hover:text-red-500"
              >
                <X className="w-8 h-8" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
