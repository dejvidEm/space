
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionData {
  value: string;
  trigger: string;
  content: string;
}

const accordionItems: AccordionData[] = [
  {
    value: "1",
    trigger: "Ako prebieha spolupráca?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    value: "2",
    trigger: "Je úvodné stretnutie spoplatnené?",
    content:
      "Yes. It comes with default styles that match the other components' aesthetic.",
  },
  {
    value: "3",
    trigger: "Ako dlho trvá spolupráca?",
    content:
      "Yes. It's animated by default, but you can disable it if you prefer.",
  },
];

export function AccordionComponent() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {accordionItems.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}