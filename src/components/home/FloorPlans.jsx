import { useState } from "react";

const floorPlans = [
  {
    type: "Studio",
    area: "550 sq.ft",
    price: "$800/mo",
    image: "/img/plans/1.png",
  },
  {
    type: "PantHouse",
    area: "950 sq.ft",
    price: "$1200/mo",
    image: "/img/plans/2.jpg",

  },
  {
    type: "Top Garden",
    area: "1350 sq.ft",
    price: "$1600/mo",
    image: "/img/plans/1.png",

  },
    {
    type: "Studio",
    area: "550 sq.ft",
    price: "$800/mo",
    image: "/img/plans/2.jpg",
  },
  {
    type: "Double Height",
    area: "950 sq.ft",
    price: "$1200/mo",
    image: "/img/plans/1.png",

  },
  {
    type: "Deluxe Portion",
    area: "1350 sq.ft",
    price: "$1600/mo",
    image: "/img/plans/2.jpg",

  },
    {
    type: "Playground",
    area: "550 sq.ft",
    price: "$800/mo",
    image: "/img/plans/1.png",
  },
];

export default function FloorPlans() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="py-16 flex flex-col md:flex-row gap-6 p-6 ">
      
      {/* Left: Tabs */}
      <div className="md:w-1/3 flex flex-col border-r border-gray-300">
        {floorPlans.map((plan, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`text-left p-4 border-b border-gray-200 transition-all duration-300 ${
              activeIndex === index
                ? "bg-primary-default font-bold text-white"
                : "hover:bg-primary-default"
            }`}
          >
            <h3 className="text-lg">{plan.type}</h3>
            <p className="text-sm text-gray-600">{plan.area}</p>
            <p className="text-sm text-gray-800 font-semibold">{plan.price}</p>
          </button>
        ))}
      </div>

      {/* Right: Floor Plan Image */}
      <div className="md:w-2/3 flex justify-center items-center p-4">
        <img
          src={floorPlans[activeIndex].image}
          alt={floorPlans[activeIndex].type}
          className="w-full h-auto rounded-lg shadow-md border border-gray-200"
        />
      </div>
    </div>
  );
}
