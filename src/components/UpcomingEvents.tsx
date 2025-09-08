import React from "react";
import { ArrowRight } from "lucide-react";

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      date: "Apr 30 – Sep 19, 2025 • Mountain Bike",
      title: "2025 Rockwheelers Junior & Family Social Rides",
      location: "qld",
    },
    {
      id: 2,
      date: "Sep 12, 2025 • Track",
      title: "Bankstown Sports CC-NBR Friday Night Track Series - Round 6",
      description:
        "Bankstown Sports Cycling Club is hosting Friday night track racing at Dunc Gray Velodrome in conjuction with No Brakes Racing",
      location: "nsw",
    },
    {
      id: 3,
      date: "Sep 12 – Jul 19, 2025 • Mountain Bike",
      title: "Westpac Rescue Helicopter Service Ride for the Chopper",
      description:
        "In 2025, we're hosting an 8-day, 7-night mountain bike ride with a full support crew. including safety vehicles, bike trailers, catering crew and a very experienced team of Riders to guide and assist you on the adventure of a lifetime! Join us as we explore the stunning Central West, Upper Hunter, and North West Slopes regions of New South",
      location: "nsw",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-[1280px] mx-auto px-20">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="font-canela text-black text-[48px] leading-[48px] font-light">
            Upcoming events
          </h2>
        </div>

        {/* Events List */}
        <div className="space-y-5">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="border-t border-[#d3d5d7] first:border-t-0"
            >
              <div className="py-8 pl-6">
                <div className="max-w-[1200px]">
                  {/* Date */}
                  <div className="mb-2">
                    <p className="text-black text-[18px] leading-[28px]">
                      {event.date}
                    </p>
                  </div>

                  {/* Title */}
                  <div className="mb-2">
                    <div className="flex items-start gap-2">
                      <h3 className="text-[#02534d] text-[24px] leading-[32px] font-normal flex-1">
                        {event.title}
                      </h3>
                      <ArrowRight className="w-6 h-8 text-[#02534d] mt-1" />
                    </div>
                  </div>

                  {/* Description */}
                  {event.description && (
                    <div className="mb-2">
                      <p className="text-[#3c444d] text-[16px] leading-[24px]">
                        {event.description}
                      </p>
                    </div>
                  )}

                  {/* Location */}
                  <div>
                    <p className="text-[#3c444d] text-[14px] leading-[20px] uppercase">
                      {event.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="border-2 border-[#02534d] text-[#02534d] px-[26px] py-3.5 rounded-full hover:bg-[#02534d] hover:text-white transition-colors">
            <span className="text-base font-normal">View more</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
