import { GridSection } from "@/types";

export const intro: GridSection[] = [
  {
    id: 1,
    title: "title_1",
    description: "description_1",
    img: "/images/b1.svg",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
  },
  {
    id: 2,
    title: "title_2",
    description: "description_2",
    img: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
  },
  {
    id: 3,
    title: "title_3",
    description: "description_3",
    img: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
  },
];
