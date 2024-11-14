import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./ui/sectionHeading";
import { PiGraphFill, PiRocketLaunchFill, PiGlobe } from "react-icons/pi";

interface CardData {
  id: number;
  title: string;
  description: string;
  delay: number;
}

const cardsData: CardData[] = [
  { id: 1, title: "Efektívne plánuje a vedie..", 
    description: "S viac ako 5-ročnou praxou v riadení projektov rôznej komplexnosti prinášam analytický prístup a systematické plánovanie, ktoré zaručujú úspešné doručenie projektov v rámci stanovených termínov a rozpočtu.",
    delay: 0.2,
  },
  { id: 2, title: "Otvorene spolupracuje..",
    description: "Zameriavam sa na efektívnu komunikáciu a flexibilitu pri riešení problémov, čím zabezpečujem, že očakávania klientov a tímu sú správne nastavené, no zároveň sa dokážem prispôsobiť meniacim sa podmienkam.",
    delay: 0.4,
  },
  { id: 3, title: "Je orientovaný na Inovácie..",
    description: "Používam najmodernejšie metodiky ako Agile a Scrum, neustále sa vzdelávam a sústredím sa na poskytovanie pridaných hodnôt klientom. Mám záujem o nové výzvy, kde môžem využiť svoje skúsenosti a inovácie.",
    delay: 0.6,
  },
];

const AboutCard: React.FC<CardData & { position: "left" | "right" }> = ({ title, description, delay, position, id }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: position === "left" ? -50 : 50 },
  };

  // Určime ikonu pre každú kartu na základe jej ID
  let icon;
  if (id === 1) {
    icon = <PiGraphFill size={32} className="text-[#0a8980]" />;
  } else if (id === 2) {
    icon = <PiGlobe size={32} className="text-[#0a8980]" />;
  } else if (id === 3) {
    icon = <PiRocketLaunchFill size={32} className="text-[#0a8980]" />;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ duration: 1, delay }}
      variants={variants}
      className={`max-w-xl p-6 bg-white rounded-lg shadow-lg relative ${
        position === "left" ? "md:ml-48" : "md:mr-48"
      } mx-auto`}
    >
      <h3 className="text-xl text-[#124746] font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="absolute top-2 right-2 mt-2 mr-2">
        {icon}
      </div>
    </motion.div>
  );
};

const AboutPage: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center p-4 md:p-8">
    <SectionHeading title={"O mne"} subtitle="Som Projektový manažér ktorý..."/>
    <div className="flex flex-col gap-8 relative mt-16">
      <div className="w-1 h-8 rounded-lg bg-gray-100 mx-auto"></div>
      {cardsData.map((card, index) => (
        <React.Fragment key={card.id}>
          <AboutCard {...card} position={index % 2 === 0 ? "left" : "right"} id={card.id} />
          {index < cardsData.length - 1 && <div className="w-1 h-8 rounded-lg bg-gray-100 mx-auto"></div>}
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default AboutPage;