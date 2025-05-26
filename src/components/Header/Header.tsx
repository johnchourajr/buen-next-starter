import { LogoMark } from "@/svg";
import { pages } from "@/template/PageTemplate/content";
import Link from "next/link";
import { Bounded } from "../Bounded";
import { GridItem } from "../GridItem/GridItem";

export function Header() {
  const navigation = [
    { label: "Home", href: "/" },
    ...pages.map((page) => ({
      label: page.title,
      href: `/${page.uid}`,
    })),
  ];

  return (
    <Bounded as="header" className="py-4 z-50 fixed w-full top-0">
      <GridItem
        columnStart="col-start-[start-inner]"
        columnEnd="col-end-[end-inner]"
        className="flex flex-wrap items-center justify-between gap-x-20 gap-y-3 leading-none"
      >
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-black"
          title="Home"
        >
          <LogoMark className="w-8 h-8" />
        </Link>
        <nav>
          <ul className="flex flex-wrap gap-6 md:gap-10">
            {Array.isArray(navigation)
              ? navigation.map((item) => (
                  <li
                    key={item.label}
                    className="text-body font-semibold text-black"
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))
              : null}
          </ul>
        </nav>
      </GridItem>
    </Bounded>
  );
}
