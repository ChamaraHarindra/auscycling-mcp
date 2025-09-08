import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const InOurNetwork = () => {
  const networkItems = [
    {
      id: 1,
      title: "ARA Australian Cycling Team",
      description:
        "Australia's national team for BMX, mountain bike, track, road, para-cycling and more",
      image: "/images/ara-cycling-team.png",
    },
    {
      id: 2,
      title: "AusBike",
      description: "Gear up for life on two wheels",
      image: "/images/ausbike.png",
    },
    {
      id: 3,
      title: "GWM BMX Racing National Championships",
      description: "Camden 2025. Where reputations are made.",
      image: "/images/bmx-nationals.png",
    },
    {
      id: 4,
      title: "Great Ocean Road Gran Fondo",
      description: "The greatest ride of your life",
      image: "/images/great-ocean-road.png",
    },
    {
      id: 5,
      title: "Quest Ivanhoe 128th Austral Wheelrace",
      description: "Track is back in Melbourne",
      image: "/images/quest-ivanhoe.png",
    },
    {
      id: 6,
      title: "Road Nationals",
      description:
        "The courses are set for Australia's premier road cycling event",
      image: "/images/road-nationals.png",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-[1280px] mx-auto px-20">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="font-canela text-black text-[48px] leading-[48px] font-light">
            In Our Network
          </h2>
        </div>

        {/* Network Grid */}
        <div className="grid grid-cols-3 gap-32 mb-24">
          {networkItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Image */}
              <div className="relative mb-4 overflow-hidden">
                <motion.div
                  className="w-full h-[188px] bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('${item.image}')`,
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Content */}
              <div className="space-y-2 mb-4">
                <h3 className="text-[#030d17] text-[20px] leading-[28px] font-normal">
                  {item.title}
                </h3>

                <p className="text-[#3c444d] text-[18px] leading-[28px]">
                  {item.description}
                </p>
              </div>

              {/* Learn More Link */}
              <div className="flex items-center">
                <span className="text-[#02534d] text-[16px] leading-[24px] hover:underline">
                  Learn more
                </span>
                <ArrowRight className="w-5 h-6 text-[#02534d] ml-2" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="border-2 border-black text-black px-[26px] py-3.5 rounded-full flex items-center gap-2 mx-auto hover:bg-black hover:text-white transition-colors">
            <span className="text-base font-normal">View all</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default InOurNetwork;
