import clsx from "clsx";
import type { HTMLAttributes, ReactNode } from "react";

type BoundedProps = {
  as?: "div" | "section" | "header" | "footer" | "main";
  className?: string;
  children?: ReactNode;
} & HTMLAttributes<HTMLElement>;

export function Bounded({
  as: Comp = "div",
  className,
  children,
  ...rest
}: BoundedProps) {
  return (
    <Comp className={clsx("grid-wrapper", className)} {...rest}>
      {children}
    </Comp>
  );
}
