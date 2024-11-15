import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "./ui/bento-grid";
import SectionHeading from "./ui/sectionHeading";

const features = [
  {
    Icon: FileTextIcon,
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-span-2 lg:row-span-1", // Veľká karta hore (ľavá strana)
  },
  {
    Icon: GlobeIcon,
    name: "Multilingual",
    description: "Supports 100+ languages and counting.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-span-1 lg:row-span-1", // Malá karta hore (pravá strana)
  },
  {
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-span-1 lg:row-span-1", // Malá karta dole (ľavá strana)
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description:
      "Get notified when someone shares a file or mentions you in a comment.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-span-2 lg:row-span-1", // Veľká karta dole (pravá strana)
  },
];

const Services = () => {
  return (
    <section id="služby">
      <SectionHeading title="Služby" subtitle="Spolupracujem hlavne týmito zvolenými spôsobmi"/>
      <BentoGrid className="max-w-[1000px] mx-auto grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Services;