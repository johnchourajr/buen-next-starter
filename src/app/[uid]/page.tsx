import { PageTemplate } from "@/template/PageTemplate";
import { pages } from "@/template/PageTemplate/content";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Params = { uid: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata | null> {
  const { uid } = await params;

  const page = pages.find((page) => page.uid === uid);
  if (!page || !page.metadata) {
    notFound();
  }

  return page.metadata;
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;

  const page = pages.find((page) => page.uid === uid);
  if (!page) {
    notFound();
  }

  return <PageTemplate page={page} />;
}

export function generateStaticParams() {
  return pages.map((page) => ({ uid: page.uid }));
}
