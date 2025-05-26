import { Homepage } from "@/pages/Homepage";
import { homepage } from "@/pages/Homepage/content";
import type { Metadata } from "next";

export const metadata: Metadata = homepage.metadata;

export default function Page() {
  return <Homepage homepage={homepage} />;
}
