import React from "react";
import { ArrowRight } from "lucide-react";

const SubscribeNewsletter = () => {
  return (
    <section className="bg-[#02534d] py-48">
      <div className="max-w-[1280px] mx-auto px-20">
        <div className="text-center">
          {/* Section Title */}
          <h2 className="font-canela text-white text-[48px] leading-[48px] font-light mb-6">
            Subscribe to AusCycling
          </h2>

          {/* Description */}
          <p className="text-white text-[20px] leading-[28px] mb-8">
            Get the latest cycling and riding news and events direct to your
            inbox.
          </p>

          {/* Subscribe Button */}
          <button className="bg-white text-[#02534d] px-[26px] py-3.5 rounded-full flex items-center gap-2 mx-auto hover:bg-white/90 transition-colors">
            <span className="text-base font-normal">Subscribe now</span>
            <ArrowRight className="w-5 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubscribeNewsletter;
