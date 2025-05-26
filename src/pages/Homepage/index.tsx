import { GridItem } from "@/components/GridItem/GridItem";
import { HomepageContent } from "@/pages/Homepage/content";

export type HomepageProps = {
  homepage: HomepageContent;
};

export function Homepage({ homepage }: HomepageProps) {
  return (
    <div className="grid-wrapper my-40">
      <GridItem
        as={`section`}
        columnStart={["col-start-[start-inner]"]}
        columnEnd={["col-end-[end-inner]"]}
        className="hero-section"
      >
        <h1 className="headline-display-xl mb-6">{homepage.title}</h1>
        <p className="text-paragraph max-w-[20em]">{homepage.description}</p>
      </GridItem>

      <GridItem
        as={`section`}
        columnStart={["col-start-[start-edge]"]}
        columnEnd={["col-end-[end-edge]"]}
        subgrid
        className="featured-projects my-40"
      >
        <GridItem
          columnStart={["col-start-[start-inner]"]}
          columnEnd={["col-end-[end-inner]"]}
          className="flex flex-col items-start justify-between gap-x-20 gap-y-3 leading-none"
        >
          <h2 className="headline-display-md mb-12">Features</h2>
          <div className="w-full flex flex-col divide-y divide-black border-y border-black">
            {homepage.features.map((feature) => (
              <div className="py-10 flex flex-col gap-3" key={feature.title}>
                <h3 className="headline-display-sm font-semibold">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </GridItem>
      </GridItem>
    </div>
  );
}
