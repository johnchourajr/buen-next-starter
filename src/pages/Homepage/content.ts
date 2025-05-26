import { Metadata } from "next";

export type HomepageContent = {
  metadata: Metadata;
  title: string;
  description: string;
  features: {
    title: string;
    description: string;
  }[];
};

export const homepage = {
  metadata: {
    title: "Buen Next Starter",
    description:
      "Make buen websites with Next.js starter. It's all things that are buen and keeps it simple.",
  },
  title: "Buen Next Starter",
  description:
    "Make buen websites with Next.js starter. It's all things that are buen and keeps it simple.",
  features: [
    {
      title: "Next.js",
      description: "Latest of the latest of the latest of the latest",
    },
    {
      title: "No CMS",
      description: "Doesn't need a CMS, but heck you can bring one if you want",
    },
    {
      title: "Tailwind CSS",
      description: "All that Tailwind styled system buen-ness",
    },
    {
      title: "Typography System",
      description: "A buen typography system that can be easily customized",
    },
    {
      title: "Grid System",
      description: "A strong grid system is key for any buen website",
    },
    {
      title: "Scaffold Components",
      description: "A bunch of other components for building",
    },
  ],
};
