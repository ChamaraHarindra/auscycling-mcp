import React from "react";
import { ArrowRight } from "lucide-react";

const ProjectAscent = () => {
  return (
    <section className="py-16">
      <div className="max-w-[1280px] mx-auto px-20">
        <div className="flex items-center">
          {/* Left Content */}
          <div className="flex-1 pr-16">
            <h2 className="font-canela text-black text-[48px] leading-[48px] font-light mb-4">
              Project Ascent B2032+
            </h2>

            <p className="text-[#3c444d] text-[18px] leading-[32px] mb-6">
              The World&apos;s Most Future Focused Cycling Pathway
            </p>

            <div className="flex gap-4">
              <button className="bg-[#02534d] text-white px-[26px] py-3.5 rounded-full flex items-center gap-2 hover:bg-[#02534d]/90 transition-colors">
                <span className="text-base font-normal">
                  Download Summary Report
                </span>
                <ArrowRight className="w-5 h-6" />
              </button>

              <button className="border-2 border-black text-black px-[26px] py-3.5 rounded-full flex items-center gap-2 hover:bg-black hover:text-white transition-colors">
                <span className="text-base font-normal">Read More</span>
                <ArrowRight className="w-5 h-6" />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-[640px] h-[628px] relative">
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('/images/project-ascent.png')`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectAscent;
