import { motion } from "framer-motion";
import CountUp from "react-countup";
import { MapPin, Building2, Hammer, BedDouble } from "lucide-react";

export default function CounterCom() {
  const counters = [
    { value: 560, label: "Total Area Sq", icon: MapPin },
    { value: 197, suffix: "K+", label: "Apartments Sold", icon: Building2 },
    { value: 268, label: "Total Constructions", icon: Hammer },
    { value: 340, label: "Apartio Rooms", icon: BedDouble },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        {counters.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              {/* Icon */}
              <div className="mb-3">
                <Icon className="text-primary-default bg-primary-light w-14 h-14 p-3 rounded-full" />
              </div>

              {/* Counter */}
              <h2 className="text-4xl font-extrabold mb-2">
                <CountUp end={item.value} duration={2.5} separator="," />
                {item.suffix ? item.suffix : "+"}
              </h2>

              {/* Label */}
              <p className="text-secondary-light font-semibold text-sm sm:text-base tracking-wide leading-snug">
                {item.label}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
