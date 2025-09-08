import React from "react";

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: "Australian Sports Commission",
      logo: "/images/australian-sports-commission.png",
    },
    {
      id: 2,
      name: "Australian Institute of Sport",
      logo: "/images/australian-institute-sport.png",
    },
    {
      id: 3,
      name: "Commonwealth Games Australia",
      logo: "/images/commonwealth-games-australia.png",
    },
    {
      id: 4,
      name: "ARA",
      logo: "/images/ara-logo.png",
    },
    {
      id: 5,
      name: "GWM",
      logo: "/images/gwm-logo.png",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-[1280px] mx-auto px-20">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-black text-[18px] leading-[28px] uppercase tracking-[0.3px]">
            Partners
          </h2>
        </div>

        {/* Partners Grid */}
        <div className="flex justify-center gap-6 mb-8">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="w-[100px] h-[100px] flex items-center justify-center"
            >
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('${partner.logo}')`,
                }}
                title={partner.name}
              />
            </div>
          ))}
        </div>

        {/* View All Partners Button */}
        <div className="text-center">
          <button className="bg-[#02534d] text-white px-[26px] py-3.5 rounded-full hover:bg-[#02534d]/90 transition-colors">
            <span className="text-base font-normal">View all partners</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partners;
