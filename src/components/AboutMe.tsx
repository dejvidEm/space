import React from "react";
import SectionHeading from "./ui/sectionHeading";
import AboutCard from "./ui/aboutCard";
import { cardsData } from "@/lib/aboutMeData";

const AboutPage: React.FC = () => (
  <div id="o mne" className="min-h-screen flex flex-col items-center p-4 md:p-8 mb-28">
    <SectionHeading
      title={"O mne"}
      subtitle="Som Projektový manažér ktorý..."
    />
    <div className="flex flex-col gap-8 relative mt-4">
      <div className="w-1 h-8 rounded-lg bg-gray-100 mx-auto"></div>
      {cardsData.map((card, index) => (
        <React.Fragment key={card.id}>
          <AboutCard {...card} position={index % 2 === 0 ? "left" : "right"} />
          {index < cardsData.length - 1 && (
            <div className="w-1 h-8 rounded-lg bg-gray-100 mx-auto"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default AboutPage;