import { Metadata } from "next";

export type PageContent = {
  uid: string;
  title: string;
  content: string;
  metadata: Metadata;
};

export const pages: PageContent[] = [
  {
    uid: "work",
    title: "Work",
    content: "Doing work is what we do",
    metadata: {
      title: "Work | Buen Next Starter",
      description: "Doing work is what we do",
    },
  },
  {
    uid: "journal",
    title: "Journal",
    content: "Writing about work is what we do",
    metadata: {
      title: "Journal | Buen Next Starter",
      description: "Writing about work is what we do",
    },
  },
  {
    uid: "contact",
    title: "Contact",
    content: "Contacting us is what you do",
    metadata: {
      title: "Contact | Buen Next Starter",
      description: "Contacting us is what you do",
    },
  },
];
