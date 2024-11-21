import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PiGraphFill, PiRocketLaunchFill, PiGlobe } from "react-icons/pi";
import { CardData } from "@/lib/aboutMeData";

const AboutCard: React.FC<CardData & { position: "left" | "right" }> = ({
  title,
  description,
  delay,
  position,
  id,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: position === "left" ? -50 : 50 },
  };

  const icon =
    id === 1 ? (
      <PiGraphFill size={32} className="text-[#00BFA6]" />
    ) : id === 2 ? (
      <PiGlobe size={32} className="text-[#00BFA6]" />
    ) : (
      <PiRocketLaunchFill size={32} className="text-[#00BFA6]" />
    );

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
      <div className="absolute top-2 right-2 mt-2 mr-2">{icon}</div>
    </motion.div>
  );
};

export default AboutCard;