import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Definícia typu pre jednu kartu
interface CardData {
  id: number;
  title: string;
  description: string;
  delay: number;
}

// Dátové pole pre karty
const cardsData: CardData[] = [
  {
    id: 1,
    title: "Kto som",
    description: "Som skúsený vývojár so zameraním na moderné webové technológie a efektívne riešenia pre klientov.",
    delay: 0.2,
  },
  {
    id: 2,
    title: "Moje Záľuby",
    description: "Milujem cestovanie, čítanie a technológie. Vždy ma fascinuje, ako môžu technológie meniť svet.",
    delay: 0.4,
  },
  {
    id: 3,
    title: "Moje Ciele",
    description: "Snažím sa neustále zdokonaľovať a prinášať hodnotu do projektov, na ktorých pracujem.",
    delay: 0.6,
  },
];

// Komponent pre kartu
const AboutCard: React.FC<CardData & { position: "left" | "right" }> = ({ title, description, delay, position }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.8, delay }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: position === "left" ? -50 : 50 },
      }}
      className={`max-w-sm p-6 bg-white rounded-lg shadow-lg ${position === "left" ? "self-start" : "self-end"}`}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-8">
      <h1 className="text-4xl font-semibold mb-10">O mne</h1>
      <div className="flex flex-col gap-8 relative">
        {cardsData.map((card, index) => (
          <React.Fragment key={card.id}>
            <AboutCard
              {...card}
              position={index % 2 === 0 ? "left" : "right"}
            />
            {index < cardsData.length - 1 && (
              <div className="w-1 h-16 rounded-lg bg-gray-100 mx-auto"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;