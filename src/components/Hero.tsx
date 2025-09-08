import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="bg-[#02534d] box-border content-stretch flex items-center justify-start pl-20 pr-0 py-0 relative size-full min-h-[775px]">
      {/* Left Content Container */}
      <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start max-w-[628px] min-h-px min-w-px px-3 py-0 relative shrink-0">
        <div className="box-border content-stretch flex flex-col gap-10 items-start justify-start pl-0 pr-16 py-16 relative shrink-0 w-full">
          {/* Heading */}
          <motion.div
            className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex flex-col font-canela justify-center leading-[0] not-italic relative shrink-0 text-[72px] text-white w-full">
              <p className="leading-[72px]">
                Troy Brosnan leads Aussies with top 10 at 2025 Downhill World
                Championships
              </p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="content-stretch flex items-start justify-start relative shrink-0 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <div className="content-stretch flex flex-col items-start justify-start relative self-stretch shrink-0">
              <motion.div
                className="bg-white box-border content-stretch flex items-center justify-center px-[26px] py-3.5 relative rounded-[9999px] shrink-0 hover:bg-white/90 transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div
                  aria-hidden="true"
                  className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]"
                />
                <div className="flex flex-col font-inter font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#02534d] text-[16px] text-center text-nowrap">
                  <p className="leading-[24px] whitespace-pre">Read more</p>
                </div>
                <div className="box-border content-stretch flex flex-col h-6 items-start justify-start pl-2 pr-0 py-0 relative shrink-0 w-7">
                  <div className="content-stretch flex flex-col h-6 items-center justify-center overflow-clip relative shrink-0 w-5">
                    <ArrowRight className="w-5 h-6 text-[#02534d]" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Image Overlay */}
      <motion.div
        className="basis-0 bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative shrink-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      >
        <div className="content-stretch flex gap-2 items-center justify-start overflow-clip relative shrink-0 w-full">
          <motion.div
            className="aspect-[1360/1440] basis-0 bg-center bg-cover bg-no-repeat grow min-h-px min-w-px shrink-0"
            style={{
              backgroundImage: `url('/images/hero-bg-new.png')`,
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
