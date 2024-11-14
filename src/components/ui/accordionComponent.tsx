
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
    content: "Spolupráca prebieha prostredníctvom pravidelných konzultácií, kde sa riešia ciele klienta podľa vopred stanoveného plánu. Využívame osvedčené projektové postupy a priebežné hodnotenie pokroku.",
  },
  {
    value: "2",
    trigger: "Je úvodné stretnutie spoplatnené?",
    content: "Úvodné stretnutie je poskytované bezplatne a je nezáväzné. Jeho cieľom je umožniť obojstranné oboznámenie sa a porozumenie požiadaviek klienta, ako aj predbežné nastavenie rámcových cieľov spolupráce.",
  },
  {
    value: "3",
    trigger: "Ako dlho trvá spolupráca?",
    content: "Dĺžka spolupráce je flexibilná a závisí od konkrétnych cieľov a potrieb klienta. Zvyčajne spolupráca zahŕňa strednodobý až dlhodobý horizont, ktorý umožňuje dosiahnuť udržateľné výsledky. Časový rámec je dohodnutý na základe úvodnej analýzy a môže sa líšiť",
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