import React from "react";

const BecomeMember = () => {
  return (
    <section className="py-16">
      <div className="max-w-[1280px] mx-auto px-20">
        <div className="flex items-center gap-32">
          {/* Left Image */}
          <div className="w-[640px] h-[628px] relative">
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('/images/become-member.png')`,
              }}
            />
          </div>

          {/* Right Content */}
          <div className="flex-1">
            <h2 className="font-canela text-black text-[48px] leading-[48px] font-light mb-4">
              Become a Member
            </h2>

            <p className="text-[#3c444d] text-[18px] leading-[32px] mb-6">
              Whether you're a recreational rider or a competitor aiming for the
              <br />
              podium, AusCycling has a membership for you. We offer a range of
              <br />
              options to suit all ages, abilities, and cycling disciplines. From
              <br />
              comprehensive insurance coverage to valuable club benefits,
              <br />
              becoming a member unlocks a world of advantages to elevate your
              <br />
              cycling experience.
            </p>

            <div className="flex gap-4">
              <button className="bg-[#02534d] text-white px-[26px] py-3.5 rounded-full hover:bg-[#02534d]/90 transition-colors">
                <span className="text-base font-normal">Find out more</span>
              </button>

              <button className="border-2 border-black text-black px-[26px] py-3.5 rounded-full hover:bg-black hover:text-white transition-colors">
                <span className="text-base font-normal">Find a club</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeMember;
