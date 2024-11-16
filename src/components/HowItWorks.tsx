import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from "./ui/sectionHeading";
import { Separator } from "@/components/ui/separator"

import { 
    PiMagnifyingGlass, 
    PiNotebook, 
    PiChatsCircle, 
    PiChartLine 
  } from "react-icons/pi";

const experiencesData = [
  {
    id: "1. Fáza",
    title: "Analýza a diagnostika",
    focus: "Identifikácia kľúčových výziev",
    description:
      "Detailné pochopenie potrieb klienta a analýza súčasného stavu projektu. Tento krok zabezpečuje, že riešenia budú presne zamerané na odstránenie slabých miest a využitie príležitostí.",
    icon: <PiMagnifyingGlass />,
  },
  {
    id: "2. Fáza",
    title: "Štruktúrované plánovanie",
    focus: "Vytvorenie stratégie",
    description:
      "Vytvorenie jasnej roadmapy vrátane milníkov a KPI pre úspešnú realizáciu. Každý krok je starostlivo naplánovaný, čo umožňuje efektívne riadenie času a zdrojov.",
    icon: <PiNotebook />,
  },
  {
    id: "3. Fáza",
    title: "Transparentná komunikácia",
    focus: "Konzistentná a efektívna komunikácia",
    description:
      " Pravidelné reportovanie postupu, otvorenosť voči spätnej väzbe a neustále zlepšovanie. Tým sa zabezpečuje, že klient má vždy aktuálne informácie a môže aktívne     prispievať k rozhodovaciemu procesu.",
    icon: <PiChatsCircle />,
  },
  {
    id: "4. Fáza",
    title: "Evaluácia a dôsledné monitorovanie",
    focus: "Vyhodnotenie úspešnosti podľa stanovených KPI",
    description:
      "Neustále sledovanie výkonu a kvality, s dôrazom na dosahovanie merateľných výsledkov. Tento prístup umožňuje identifikovať úspechy aj oblasti na zlepšenie, čím sa zvyšuje celková efektivita projektu.",
    icon: <PiChartLine />,
  },
];

export default function Experience() {
  return (
    <section id="howitworks" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading title="Proces spolupráce" subtitle="Individuálny prístup s jednotnou metodikou, proces prispôsobený pre každú spoluprácu"/>
      <VerticalTimeline lineColor="#c3c8d1">
        {experiencesData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
            background: "linear-gradient(to bottom, #ebebeb, #bad6d6)",
            boxShadow: "none",
            border: "1px solid rgba(0, 0, 0, 0.05)",
            textAlign: "left",
            padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{ borderRight: "0.4rem solid #124746" }}
            date={item.id}
            icon={item.icon}
            iconStyle={{ background: "white", fontSize: "1.5rem" }}
          >
            <h3 className="text-lg font-semibold capitalize text-[#124746]">{item.title}</h3>
            <Separator className="my-2 bg-gray-400"/>
            <p className="font-semibold !mt-0">{item.focus}</p>
            <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
              {item.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}