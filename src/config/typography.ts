import { TypeDefinition } from "@muybuen/type";

/**
 * custom headline object
 */
export const customHeadlines: Record<string, TypeDefinition> = {
  "display-xxl": {
    _id: "headline-display-xxl",
    classAlias: ["main-headline"],
    fontWeight: "bold",
    clamp: [6, 8],
    letterSpacing: "-0.05em",
    lineHeight: 1,
  },
  "display-xl": {
    _id: "headline-display-xl",
    fontWeight: "bold",
    clamp: [4.5, 7],
    letterSpacing: "-0.05em",
    lineHeight: 1,
  },
  "display-lg": {
    _id: "headline-display-lg",
    fontWeight: "bold",
    clamp: [3.5, 5],
    letterSpacing: "-0.05em",
    lineHeight: 1,
  },
  "display-md": {
    _id: "headline-display-md",
    fontWeight: "bold",
    clamp: [3, 4],
    letterSpacing: "-0.05em",
    lineHeight: 1,
  },
  "display-sm": {
    _id: "headline-display-sm",
    fontWeight: "bold",
    clamp: [2, 3],
    letterSpacing: "-0.05em",
    lineHeight: 1,
  },
  "display-xs": {
    _id: "headline-display-xs",
    fontWeight: "bold",
    clamp: [1, 2],
    letterSpacing: "-0em",
    lineHeight: 1,
  },
};
/**
 * custom text object
 */
export const customTexts: Record<string, TypeDefinition> = {
  title: {
    _id: "text-title",
    fontSize: "1.5rem",
    lineHeight: 1.25,
    fontWeight: "bold",
    letterSpacing: "0em",
  },
  paragraph: {
    _id: "text-paragraph",
    fontSize: "1.25rem",
    lineHeight: 1.35,
    fontWeight: "normal",
    letterSpacing: "0em",
  },
  string: {
    _id: "text-string",
    fontSize: "0.95rem",
    lineHeight: 1.25,
    fontWeight: "bold",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
  },
  body: {
    _id: "text-body",
    fontSize: "1rem",
    lineHeight: 1.25,
    fontWeight: "normal",
    letterSpacing: "0em",
  },
  caption: {
    _id: "text-caption",
    fontSize: ".9rem",
    lineHeight: 1.25,
    fontWeight: "normal",
    letterSpacing: "0em",
  },
};
