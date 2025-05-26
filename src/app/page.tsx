import { Homepage } from "@/template/Homepage";
import { homepage } from "@/template/Homepage/content";
import type { Metadata } from "next";

export const metadata: Metadata = homepage.metadata;

export default function Page() {
  return <Homepage homepage={homepage} />;
}
