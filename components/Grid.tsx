"use client";
import React from "react";
import { about } from "@/data/sections";
import BentoGrid, { BentoGridItem } from "./ui/BentoGrid";

const Grid: React.FC = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {about.map(
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
              title={title}
              description={description}
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

export default Grid;
