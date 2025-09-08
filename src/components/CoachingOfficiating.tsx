import React from "react";

const CoachingOfficiating = () => {
  return (
    <section className="py-16">
      <div className="max-w-[1280px] mx-auto px-20">
        <div className="flex items-center">
          {/* Left Content */}
          <div className="flex-1 pr-16">
            <h2 className="font-canela text-black text-[48px] leading-[48px] font-light mb-4">
              Coaching and Officiating
            </h2>

            <p className="text-[#3c444d] text-[18px] leading-[32px] mb-6">
              Make a lasting impact on the cycling and bike riding community .
              Find
              <br />
              out more about how you can play a vital role in helping people of
              all
              <br />
              ages and abilities discover the joy of riding.
            </p>

            <div className="flex">
              <button className="bg-[#02534d] text-white px-[26px] py-3.5 rounded-full hover:bg-[#02534d]/90 transition-colors">
                <span className="text-base font-normal">Find out more</span>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-[628px] h-[628px] relative">
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('/images/coaching-officiating.png')`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachingOfficiating;
