import clsx from "clsx";
import { forwardRef } from "react";

type ResponsivePrefix = "sm:" | "md:" | "lg:" | "xl:" | "2xl:" | "";

type GridColumnAlias =
  | "start-edge"
  | "start-inner"
  | "center"
  | "end-inner"
  | "end-edge";

type GridColumnPosition = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

type GridColumnUnion = `[${GridColumnAlias}]` | GridColumnPosition | "auto";

type GridColumnStart = `${ResponsivePrefix}col-start-${GridColumnUnion}`;

type GridColumnEnd = `${ResponsivePrefix}col-end-${GridColumnUnion}`;

type GridColumnSpan = `${ResponsivePrefix}col-span-${GridColumnPosition}`;

export type GridItemProps = {
  columnStart?: GridColumnStart[] | GridColumnStart;
  columnEnd?: GridColumnEnd[] | GridColumnEnd;
  columnSpan?: GridColumnSpan[] | GridColumnSpan;
  subgrid?: boolean;
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  style?: React.CSSProperties;
};

export const GridItem = forwardRef(
  (
    {
      columnStart,
      columnEnd,
      columnSpan,
      subgrid,
      children,
      as: Component = "div",
      className,
      style,
      ...rest
    }: GridItemProps,
    ref: React.Ref<HTMLElement>,
  ) => {
    const subgridClasses = subgrid && "grid grid-cols-subgrid";
    return (
      <Component
        ref={ref}
        className={clsx(
          subgridClasses,
          columnStart,
          columnEnd,
          columnSpan,
          className,
        )}
        style={style}
        {...rest}
      >
        {children}
      </Component>
    );
  },
);

GridItem.displayName = "GridItem";
