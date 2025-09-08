import React from "react";
import { motion } from "motion/react";

const Disciplines = () => {
  const disciplines = [
    {
      id: 1,
      title: "BMX Racing",
      description:
        "BMX Racing is fast and furious – with races typically taking between 30-50 seconds.",
      image: "/images/bmx-racing.png",
    },
    {
      id: 2,
      title: "Mountain Bike",
      description:
        "Cross Country, Downhill, Enduro, Pump Track, Observed Trials and Slopestyle. Discover Mountain Biking.",
      image: "/images/mountain-bike.png",
    },
    {
      id: 3,
      title: "Road",
      description:
        "Road races include mass start road races, handicaps, time trials and criterium that take place across a variety of distances and terrains.",
      image: "/images/road-cycling.png",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-[1280px] mx-auto px-20">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="font-canela text-black text-[48px] leading-[48px] font-light">
            Disciplines
          </h2>
        </div>

        {/* Disciplines Grid */}
        <div className="grid grid-cols-3 gap-32 mb-32">
          {disciplines.map((discipline, index) => (
            <motion.div
              key={discipline.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Image */}
              <div className="relative mb-6 overflow-hidden">
                <motion.div
                  className="w-full h-[265px] bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('${discipline.image}')`,
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-[#030d17] text-[20px] leading-[28px] font-normal">
                  {discipline.title}
                </h3>

                <p className="text-[#3c444d] text-[18px] leading-[28px]">
                  {discipline.description}
                </p>

                <div className="pt-6">
                  <button className="text-[#02534d] text-[16px] leading-[24px] hover:underline">
                    Learn more
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="border-2 border-black text-black px-[26px] py-3.5 rounded-full hover:bg-black hover:text-white transition-colors">
            <span className="text-base font-normal">View all</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Disciplines;
