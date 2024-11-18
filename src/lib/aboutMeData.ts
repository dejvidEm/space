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
        "Som skúsený projektový a produktový manažér s dlhoročnou praxou v IT a marketingu, s preukázateľnými výsledkami pri riadení projektov, ktoré prinášajú reálne hodnoty klientom.",
      delay: 0.2,
    },
    {
      id: 2,
      title: "Otvorene spolupracuje..",
      description:
        "Špecializujem sa na analýzu a tvorbu špecifikácií, optimalizáciu procesov, a riadenie tímov, pričom pomáham firmám zavádzať efektívne postupy v oblasti HR, IT a marketingu.",
      delay: 0.4,
    },
    {
      id: 3,
      title: "Je orientovaný na Inovácie..",
      description:
        "Moja filozofia je založená na proaktívnom prístupe, dôraze na výsledky a dôvere v spolupráci.",
      delay: 0.6,
    },
  ];