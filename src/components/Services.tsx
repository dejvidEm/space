import { BentoCard, BentoGrid } from "./ui/bento-grid";
import SectionHeading from "./ui/sectionHeading";
import Divider from "./ui/sectionDivider";

import { services } from "@/lib/servicesData";

const Services = () => {
  return (
    <section id="služby" className="mb-20 md:mb-48">
      <SectionHeading
        title="Služby"
        subtitle="Zameriavame sa na profesionálne projektové manažérske riešenia, prispôsobené vašim potrebám."
      />
      <Divider length={32} />
      <BentoGrid className="max-w-[1000px] mx-auto gap-4 px-10 lg:mt-10 lg:px-0 lg:grid-cols-3 lg:grid-rows-2">
        {services.map((service) => (
          <BentoCard key={service.name} {...service} />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Services;