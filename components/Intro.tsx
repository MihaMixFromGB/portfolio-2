"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { intro } from "@/data/intro";
import BentoGrid, { BentoGridItem } from "./ui/BentoGrid";

const Intro: React.FC = () => {
  const t = useTranslations("Intro");
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {intro.map(
          ({
            id,
            title,
            description,
            img,
            className,
            titleClassName,
            imgClassName,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={t(title)}
              description={t(description)}
              img={img}
              className={className}
              titleClassName={titleClassName}
              imgClassName={imgClassName}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Intro;
