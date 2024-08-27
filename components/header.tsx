import { Button } from "@headlessui/react";
import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";
import { loadNavigation } from "@/sanity/loader/loadQuery";
import { Menu } from "./animated.hamburger.menu.button";

export async function Header() {
  const query = await loadNavigation();
  if (!query.data) throw new Error("Navigation failed to load");
  const { links, logos, cta } = query.data[0];
  return (
    <header className="top-0 w-full sticky bg-black/30 z-[100] h-[60px]">
      <nav className="flex justify-between items-center w-full h-full px-4 py-4 sm:px-8 sm:py-8  ">
        <Link href="/">
          <Image
            src={logos.light}
            height={30}
            width={85}
            alt="The Dallas Austin Distribution logo"
            priority
          />
        </Link>
        <div className="hidden gap-6 md:flex">
          {links.map(
            (link, index) =>
              link.active && (
                <Link
                  key={`navigation-link-${index}`}
                  href={
                    link.internal || link.bookmark
                      ? `${link.internal ? "/" : ""}${link.url}`
                      : link.url
                  }
                  target={!link.internal && !link.bookmark ? "_blank" : "_self"}
                  className={`${styles.link} pointer-events-auto drop-shadow-sm font-bold`}
                >
                  {link.label}
                </Link>
              )
          )}
        </div>
        <div id="menu" className="hidden">
          <div className="absolute top-[60px] bottom-0 left-0 flex flex-col gap-4 px-4 py-8 w-screen h-screen bg-black/40 sm:hidden">
            {cta.map((link, index) => (
              <Link
                key={`cta-link-${index}`}
                href={link.internal ? `/${link.url}` : link.url}
                target={!link.internal ? "_blank" : "_self"}
                className={`${styles.link} ${link.active ? "pointer-events-auto" : "opacity-50 pointer-events-none"} drop-shadow-sm font-bold`}
              >
                {link.label}
              </Link>
            ))}
            {links.map(
              (link, index) =>
                link.active && (
                  <Link
                    key={`navigation-link-${index}`}
                    href={
                      link.internal || link.bookmark
                        ? `${link.internal ? "/" : ""}${link.url}`
                        : link.url
                    }
                    target={
                      !link.internal && !link.bookmark ? "_blank" : "_self"
                    }
                    className={`${styles.link} pointer-events-auto drop-shadow-sm font-bold`}
                  >
                    {link.label}
                  </Link>
                )
            )}
          </div>
        </div>
        <div className="relative block sm:hidden">
          <Menu />
        </div>
      </nav>
      <span className="sr-only">Dallas Austin Distribution</span>
    </header>
  );
}
