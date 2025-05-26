import { PageTemplate } from "@/pages/PageTemplate";
import { pageContent } from "@/pages/PageTemplate/content";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Params = { uid: string };

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { uid } = params;

  const metadata = pageContent[uid].metadata;
  if (!metadata) {
    notFound();
  }

  return metadata;
}

export default function Page({ params }: { params: Params }) {
  const { uid } = params;

  const page = pageContent[uid];
  if (!page) {
    notFound();
  }

  return <PageTemplate page={page} />;
}

export async function generateStaticParams() {
  return Object.keys(pageContent).map((uid) => ({ uid }));
}
