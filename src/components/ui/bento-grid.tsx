import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  Icon,
  description,
  hashtag,
  cta,
}: {
  name: string;
  className: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: any;
  description: string;
  hashtag: string;
  href: string;
  cta: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      "bg-white [box-shadow:0_0_0_1px_rgba(18,71,70,.03),0_2px_4px_rgba(18,71,70,.05),0_12px_24px_rgba(18,71,70,.05)]",
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_0_0_1px_rgba(18,71,70,.03),0_2px_4px_rgba(18,71,70,.05),0_12px_24px_rgba(18,71,70,.05)]",
      className,
    )}
  >
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-4">
      <Icon className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
      <h3 className="text-xl font-semibold text-[#124746]">
        {name}
      </h3>
      <p className="max-w-lg text-neutral-600">{description}</p>
      <p className="text-lg text-[#00BFA6] font-semibold"><span className="text-2xl text-[#124746]">#</span>{hashtag}</p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    >
      <Button variant="ghost" asChild size="sm" className="pointer-events-auto cursor-pointer">
        <Link
        href="kontakt"
        to="kontakt"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        >
          {cta}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };
