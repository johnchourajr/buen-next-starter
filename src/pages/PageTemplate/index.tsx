import { GridItem } from "@/components/GridItem/GridItem";
import { PageContent } from "@/pages/PageTemplate/content";

export type PageProps = {
  page: PageContent;
};

export function PageTemplate({ page }: PageProps) {
  return (
    <div className="grid-wrapper my-40">
      <GridItem
        columnStart={["col-start-[start-inner]"]}
        columnEnd={["col-end-[end-inner]"]}
      >
        <h1 className="headline-display-xl font-bold mb-8">{page.title}</h1>
        <p className="text-paragraph">{page.content}</p>
      </GridItem>
    </div>
  );
}
