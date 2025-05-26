import { PageTemplate } from "@/template/PageTemplate";
import { pageContent } from "@/template/PageTemplate/content";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Params = { uid: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata | null> {
  const { uid } = await params;

  const page = pageContent?.[uid];
  if (!page || !page.metadata) {
    notFound();
  }

  return page.metadata;
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;

  const page = pageContent?.[uid];
  if (!page) {
    notFound();
  }

  return <PageTemplate page={page} />;
}

export function generateStaticParams() {
  const keys = pageContent ? Object.keys(pageContent) : [];
  return keys.map((uid) => ({ uid }));
}
