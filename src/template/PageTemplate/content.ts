import { Metadata } from "next";

export type PageContent = {
  slug: string;
  title: string;
  content: React.ReactNode;
  metadata: Metadata;
};

export const pageContent: Record<
  string,
  { slug: string; title: string; content: React.ReactNode; metadata: Metadata }
> = {
  work: {
    slug: "work",
    title: "Work",
    content: "Doing work is what we do",
    metadata: {
      title: "Work | Buen Next Starter",
      description: "Doing work is what we do",
    },
  },
  journal: {
    slug: "journal",
    title: "Journal",
    content: "Writing about work is what we do",
    metadata: {
      title: "Journal | Buen Next Starter",
      description: "Writing about work is what we do",
    },
  },
  contact: {
    slug: "contact",
    title: "Contact",
    content: "Contacting us is what you do",
    metadata: {
      title: "Contact | Buen Next Starter",
      description: "Contacting us is what you do",
    },
  },
};
