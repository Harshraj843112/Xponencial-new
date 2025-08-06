import React from "react";
import OfferContentSection from "../Common/OfferContentSection";
// Import local images
import Image1 from "../../img/Google.png";
import Image2 from "../../img/IIT BOMBAY.png";
import Image3 from "../../img/IITIndore.png";
import TwoFactors from "../../img/2 factors.png";
import NBHA from "../../img/Nbha150x150.png";
import Gold from "../../img/gold-150x150.png";
import Bharat from "../../img/BHart150x150.png";

const KnowledgePartnerCardSection = () => {
  const cards = [
    { title: "GOOGLE", image: Image1 },
    { title: "IIT INDORE", image: Image3 },
  ];

  const accreditations = [
    { image: Gold, title: "Gold Quality" },
  ];

  return (
    <div className="w-11/12 mx-auto px-4 py-4 md:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 text-[#2E4168]">

        {/* Section 1: We Are */}
        <div className="flex flex-col items-center space-y-0">
          <OfferContentSection
            titleDesktop="We Are !"
            titleMobile="We Are !"
            className="text-xl md:text-2xl font-bold text-center"
          />
          <img
            src={TwoFactors}
            alt="Two Factors"
            loading="lazy"
            className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl object-contain transition-all duration-300 transform mt-2 sm:mt-0 md:mt-8 lg:ml-0 "

          />

        </div>

        {/* Section 2: Our Knowledge Partners */}
        <div
          className="
    mt-6        /* no margin-top by default (mobile-first) */
    sm:mt-6     /* add mt-6 on small screens (≥640px) */
    md:mt-8     /* add mt-8 on medium screens (≥768px) */
    lg:mt-0     /* reset to no mt on large+ (≥1024px) */
    flex flex-col items-center space-y-0 lg:ml-40 whitespace-nowrap
  "
        >
          <OfferContentSection
            titleDesktop="Our Knowledge Partners"
            titleMobile="Our Knowledge Partners"
            className="text-xl md:text-2xl font-bold text-center"
          />

          <div className="flex justify-center gap-12 whitespace-nowrap">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center whitespace-nowrap"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className="
            w-24 h-24 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32
            mx-auto object-contain rounded-lg lg:-mt-8 xl:mt-0 2xl:mt-0 sm:mt-0  mt-0
          "
                />

                <p className="mt-2 text-sm md:text-base font-semibold text-center whitespace-nowrap">
                  {card.title}
                </p>
              </div>
            ))}
          </div>
        </div>


        {/* Section 3: Accredited */}
        <div
          className={`
     flex flex-col items-center lg:ml-44
    space-y-0        
    sm:space-y-0    
    md:space-y-0     
    lg:space-y-0  
    md:mt-10 lg:mt-0  
  `}
        >
          <OfferContentSection
            titleDesktop="Accredited"
            titleMobile="Accredited"
            className="text-xl md:text-2xl font-bold text-center"
          />

          <div className="flex justify-center gap-4 flex-wrap ">
            {accreditations.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="
            w-28 h-28
            sm:w-28 sm:h-28
            md:w-28 md:h-28
            lg:w-24 lg:h-24
            xl:w-28 xl:h-28
            2xl:w-32 2xl:h-32
            mx-auto object-contain rounded-lg
          "
                />
                <p className="mt-1 text-sm md:text-base font-semibold text-center">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
};

export default KnowledgePartnerCardSection;