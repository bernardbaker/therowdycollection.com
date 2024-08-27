import { loadFooter } from "@/sanity/loader/loadQuery";
import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

export const Footer = async () => {
  const query = await loadFooter();
  if (!query.data) throw new Error("Footer information not found");
  const { copyrightMessage, links, logos } = query.data[0];
  return (
    <footer
      className="flex flex-col items-start justify-end gap-4 px-4 pb-4 text-white   w-full sm:px-8"
      // data-aos="fade-in"
      // data-aos-delay="0"
    >
      <span className="border-t-[1px] border-white w-full mb-8" />
      <Link href="/">
        <Image
          src={logos.light}
          height={30}
          width={85}
          alt="The Dallas Austin Distribution logo"
          priority
        />
      </Link>
      <ul className="grid grid-cols-1 gap-4 py-8 w-full sm:grid-cols-4 sm:gap-8 lg:grid-cols-8">
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
                className={`${styles.link} pointer-events-auto`}
              >
                {link.label}
              </Link>
            )
        )}
      </ul>
      <span className="text-xs opacity-0 motion-safe:animate-delay-1000 motion-safe:animate-footer">{`© ${new Date().getFullYear()} ${copyrightMessage}`}</span>
    </footer>
  );
};
