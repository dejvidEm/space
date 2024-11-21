import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from "./ui/sectionHeading";
import { Separator } from "@/components/ui/separator";

import { 
  PiMagnifyingGlass, 
  PiNotebook, 
  PiChatsCircle, 
  PiChartLine 
} from "react-icons/pi";

import { experiencesData } from "@/lib/workData";

export default function Experience() {
  return (
    <section id="howitworks" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading
        title="Proces spolupráce"
        subtitle="Individuálny prístup s jednotnou metodikou, proces prispôsobený pre každú spoluprácu"
      />
      <VerticalTimeline lineColor="#c3c8d1">
        {experiencesData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              boxShadow: "0 0 20px rgba(5, 143, 122, .7)",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              textAlign: "left",
              padding: "1.3rem 2rem",
              borderRadius: "16px",
            }}
            contentArrowStyle={{ borderRight: "0.4rem solid #124746" }}
            date={item.id}
            icon={
              index === 0 ? (
                <PiMagnifyingGlass />
              ) : index === 1 ? (
                <PiNotebook />
              ) : index === 2 ? (
                <PiChatsCircle />
              ) : index === 3 ? (
                <PiChartLine />
              ) : (
                <PiChartLine />
              )
            }
            iconStyle={{ background: "white", fontSize: "1.5rem" }}
            className="transition duration-300"
          >
            <h3 className="text-lg font-semibold capitalize text-[#124746]">
              {item.title}
            </h3>
            <Separator className="my-2 bg-gray-400" />
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