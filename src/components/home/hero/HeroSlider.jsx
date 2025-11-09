import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlayCircle, X } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Modern Living",
    heading: "Find Your Dream Home",
    description:
      "Explore top-rated listings in your area with modern amenities, green surroundings, and affordable pricing.",
    buttonText: "Explore Listings",
    img: "/slider/21.png",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
  {
    id: 2,
    title: "Luxury Apartments",
    heading: "Where Comfort Meets Style",
    description:
      "Live in the most elegant spaces designed for your modern lifestyle, with premium facilities and smart automation.",
    buttonText: "View Apartments",
    img: "/slider/21.png",
    videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
  },
  {
    id: 3,
    title: "Family Homes",
    heading: "Perfect Place for Your Loved Ones",
    description:
      "Spacious family homes with beautiful interiors and peaceful neighborhoods — your next chapter begins here.",
    buttonText: "Book a Visit",
    img: "/slider/21.png",
    videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  // Auto slide every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  // Framer motion variants
  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, y: -40, transition: { duration: 0.4 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    exit: { opacity: 0, scale: 1.05, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative overflow-hidden bg-[#14213D] text-white">
      <AnimatePresence mode="wait">
        {/* Background image */}
        <motion.img
          key={slide.id}
          src={slide.img}
          alt={slide.title}
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        />
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#14213D]/95 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 flex flex-col md:flex-row items-center gap-10">
        <motion.div
          key={slide.id + "-text"}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="max-w-xl space-y-4"
        >
          <p className="text-amber-400 uppercase tracking-wide font-semibold">
            {slide.title}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {slide.heading}
          </h1>
          <p className="text-gray-200">{slide.description}</p>

          <div className="flex items-center gap-5 mt-4">
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition">
              {slide.buttonText}
            </button>

            {/* Video Icon */}
            <button
              onClick={() => setShowVideo(true)}
              className="flex items-center gap-2 text-white hover:text-amber-400 transition"
            >
              <PlayCircle className="w-10 h-10" />
              <span className="font-medium">Watch Video</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              current === index ? "bg-amber-400 scale-125" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>

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
                src={slide.videoUrl}
                title="Video"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
              <button
                onClick={() => setShowVideo(false)}
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
