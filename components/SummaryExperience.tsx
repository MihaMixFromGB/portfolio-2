import React from "react";
import { useTranslations } from "next-intl";
import { summary } from "@/data/experience";
import { Button } from "./ui/MovingBorder";

const SummaryExperience = () => {
  const t = useTranslations("Summary");
  const title = t("title")
    .match(/^(\S+)\s(.*)/)
    ?.slice(1) ?? ["", ""];

  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        {title[0]}
        <span className="text-purple">{` ${title[1]}`}</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {summary.map((card) => (
          // TODO: replace Button to Card
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 1e4) + 1e4}
            borderRadius="1.75rem"
            className="flex-1 text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail} // TODO: add alt tag
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {t(card.title)}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {t(card.desc)}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default SummaryExperience;
