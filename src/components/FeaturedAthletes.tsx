import React from "react";
import { motion } from "motion/react";

const FeaturedAthletes = () => {
  const athletes = [
    {
      id: 1,
      name: "Ruby Roseman-Gannon",
      image: "/images/ruby-roseman-gannon.png",
    },
    {
      id: 2,
      name: "Lauretta Hanson",
      image: "/images/lauretta-hanson.png",
    },
    {
      id: 3,
      name: "Luke Plapp",
      image: "/images/luke-plapp.png",
    },
    {
      id: 4,
      name: "Jay Vine",
      image: "/images/jay-vine.png",
    },
  ];

  return (
    <section className="bg-[#f1f1f1] py-40">
      <div className="max-w-[1280px] mx-auto px-20">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-canela text-black text-[48px] leading-[48px] font-light">
            Featured Athletes
          </h2>
        </div>

        {/* Athletes Grid */}
        <div className="grid grid-cols-4 gap-32 mb-24">
          {athletes.map((athlete, index) => (
            <motion.div
              key={athlete.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Image */}
              <div className="relative mb-4 overflow-hidden">
                <motion.div
                  className="w-full h-[362px] bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('${athlete.image}')`,
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Name Overlay */}
                <div className="absolute bottom-0 left-6 right-6">
                  <div className="bg-white px-4 py-3">
                    <h3 className="text-[#02534d] text-[24px] leading-[32px] font-normal text-center">
                      {athlete.name}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Meet the Team Button */}
        <div className="text-center">
          <button className="bg-[#02534d] text-white px-[26px] py-3.5 rounded-full hover:bg-[#02534d]/90 transition-colors">
            <span className="text-base font-normal">Meet the team</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAthletes;
