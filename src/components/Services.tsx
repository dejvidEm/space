import { PiLinkBold, PiNetwork, PiSuitcaseSimple, PiCalendarDots } from "react-icons/pi";

import { BentoCard, BentoGrid } from "./ui/bento-grid";
import SectionHeading from "./ui/sectionHeading";
import Divider from "./ui/sectionDivider";

const features = [
  {
    Icon: PiCalendarDots,
    name: "Plánovanie projektov",
    description: "Efektívne plánovanie je základom úspešného projektu. Zahŕňa tvorbu podrobného plánu, ktorý definuje rozsah, harmonogram a alokáciu zdrojov, čím zaisťuje plynulý priebeh bez časových a rozpočtových sklzov.",
    hashtag: "TimelineManagement",
    href: "kontakt",
    cta: "Mám záujem",
    className: "lg:col-span-2 lg:row-span-1",
  },
  {
    Icon: PiNetwork,
    name: "Riadenie rizík",
    description: "Identifikácia a správa rizík zabezpečujú stabilitu projektu. Projektový manažér analyzuje potenciálne riziká, pripravuje preventívne opatrenia a zabezpečuje, aby projekt odolal nepredvídaným situáciám s minimálnym dopadom.",
    hashtag: "RiskMitigation",
    href: "kontakt",
    cta: "Mám záujem",
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    Icon: PiLinkBold,
    name: "Koordinácia tímov",
    description: "Projektový manažér zosúlaďuje činnosť tímov z rôznych oddelení, aby všetci pracovali na spoločných cieľoch. Prostredníctvom efektívnej komunikácie a sledovania pokroku vedie tím k dosiahnutiu stanovených míľnikov včas.",
    hashtag: "AgileManagement",
    href: "kontakt",
    cta: "Mám záujem",
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    Icon: PiSuitcaseSimple,
    name: "Poradenstvo a školenia",
    description:
      "Projektový manažér poskytuje odborné poradenstvo a školenia, ktoré zvyšujú kvalifikáciu tímu a optimalizujú projektové procesy. Výsledkom je lepšia výkonnosť a efektivita tímov v dlhodobom horizonte.",
    hashtag: "SkillDevelopment",
    href: "kontakt",
    cta: "Mám záujem",
    className: "lg:col-span-2 lg:row-span-1",
  },
];

const Services = () => {
  return (
    <section id="služby" className="mb-20 md:mb-48">
      <SectionHeading title="Služby" subtitle="Zameriavame sa na profesionálne projektové manažérske riešenia, prispôsobené vašim potrebám."/>
      <Divider length={32}/>
      <BentoGrid className="max-w-[1000px] mx-auto gap-4 px-10 lg:mt-10 lg:px-0 lg:grid-cols-3 lg:grid-rows-2">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature}/>
        ))}
      </BentoGrid>
    </section>
  );
};

export default Services;