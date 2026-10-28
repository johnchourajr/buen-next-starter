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
    title: "Bueno Next Starter",
    description:
      "Make bueno websites with Next.js starter. It's all things that are bueno and keeps it simple.",
  },
  title: "Bueno Next Starter",
  description:
    "Make bueno websites with Next.js starter. It's all things that are bueno and keeps it simple.",
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
      description: "All that Tailwind styled system bueno-ness",
    },
    {
      title: "Typography System",
      description: "A bueno typography system that can be easily customized",
    },
    {
      title: "Grid System",
      description: "A strong grid system is key for any bueno website",
    },
    {
      title: "Scaffold Components",
      description: "A bunch of other components for building",
    },
  ],
};
