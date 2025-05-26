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

  const metadata = pageContent[uid].metadata;
  if (!metadata) {
    notFound();
  }

  return metadata;
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;

  const page = pageContent[uid];
  if (!page) {
    notFound();
  }

  return <PageTemplate page={page} />;
}

export async function generateStaticParams() {
  return Object.keys(pageContent).map((uid) => ({ uid }));
}
