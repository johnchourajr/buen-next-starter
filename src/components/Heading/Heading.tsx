import clsx from "clsx";
import type { ReactNode } from "react";

type HeadingProps = {
  as?: "h1" | "h2" | "h3";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  children?: ReactNode;
};

export function Heading({
  as: Comp = "h1",
  size = "lg",
  children,
  className,
}: HeadingProps) {
  return (
    <Comp
      className={clsx(
        "font-sans",
        size === "xl" && "headline-display-xl",
        size === "lg" && "headline-display-lg",
        size === "md" && "headline-display-md",
        size === "sm" && "headline-display-sm",
        className,
      )}
    >
      {children}
    </Comp>
  );
}
