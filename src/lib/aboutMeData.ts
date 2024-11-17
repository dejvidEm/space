export interface CardData {
    id: number;
    title: string;
    description: string;
    delay: number;
  }
  
  export const cardsData: CardData[] = [
    {
      id: 1,
      title: "Efektívne plánuje a vedie..",
      description:
        "S viac ako 5-ročnou praxou v riadení projektov rôznej komplexnosti prinášam analytický prístup a systematické plánovanie, ktoré zaručujú úspešné doručenie projektov v rámci stanovených termínov a rozpočtu.",
      delay: 0.2,
    },
    {
      id: 2,
      title: "Otvorene spolupracuje..",
      description:
        "Zameriavam sa na efektívnu komunikáciu a flexibilitu pri riešení problémov, čím zabezpečujem, že očakávania klientov a tímu sú správne nastavené, no zároveň sa dokážem prispôsobiť meniacim sa podmienkam.",
      delay: 0.4,
    },
    {
      id: 3,
      title: "Je orientovaný na Inovácie..",
      description:
        "Používam najmodernejšie metodiky ako Agile a Scrum, neustále sa vzdelávam a sústredím sa na poskytovanie pridaných hodnôt klientom. Mám záujem o nové výzvy, kde môžem využiť svoje skúsenosti a inovácie.",
      delay: 0.6,
    },
  ];