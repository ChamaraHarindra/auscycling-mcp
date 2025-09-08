import React from "react";
import { motion } from "motion/react";

const LatestNews = () => {
  const newsArticles = [
    {
      id: 1,
      title: "AusCycling celebrates the career of Sarah Roy",
      category: "Road",
      date: "Sep 8, 2025",
      image: "/images/news-1.png",
      author: "AusCycling",
    },
    {
      id: 2,
      title:
        "Troy Brosnan leads Aussies with top 10 at 2025 Downhill World Championships",
      category: "Mountain Bike",
      date: "Sep 8, 2025",
      image: "/images/news-2.png",
      author: "AusCycling",
      badge: "ARA Australian Cycling Team",
    },
    {
      id: 3,
      title:
        "Alpine test pushes Aussie riders to their limits at marathon worlds",
      category: "Mountain Bike",
      date: "Sep 7, 2025",
      image: "/images/news-3.png",
      author: "AusCycling",
      badge: "ARA Australian Cycling Team",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-[1280px] mx-auto px-20">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="font-canela text-black text-[48px] leading-[48px] font-light">
            Latest news
          </h2>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-3 gap-32 mb-32">
          {newsArticles.map((article, index) => (
            <motion.article
              key={article.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Image */}
              <div className="relative mb-4 overflow-hidden">
                <motion.div
                  className="w-full h-[223px] bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('${article.image}')`,
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                {article.badge && (
                  <div className="absolute bottom-0 right-0 bg-[#eded06] px-2 py-0">
                    <p className="text-[#003430] text-[16px] leading-[24px] text-right">
                      {article.badge}
                    </p>
                  </div>
                )}
              </div>

              {/* Category Badge */}
              <div className="mb-4">
                <span className="border-2 border-[#02534d] text-[#02534d] text-[14px] leading-[12px] uppercase px-3.5 py-2.5 rounded-full">
                  {article.category}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-[#02534d] text-[24px] leading-[32px] font-normal group-hover:underline">
                  {article.title}
                </h3>
                <p className="text-black text-[14px] leading-[20px]">
                  {article.author} • {article.date}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button className="border-2 border-[#02534d] text-[#02534d] px-[26px] py-3.5 rounded-full hover:bg-[#02534d] hover:text-white transition-colors">
            <span className="text-base font-normal">View more</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
