import type { Metadata } from "next";
import "./globals.css";
import { ServiceWorker } from "@/service.worker";
// import { loadPageMetadata } from "@/sanity/loader/loadQuery";
import Script from "next/script";

export const metadata: Metadata = {
  icons: [
    {
      url: "/images/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png",
      rel: "icon",
    },
    {
      url: "/images/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
      rel: "icon",
    },
    {
      url: "/images/apple-touch-icon.png",
      sizes: "180x180",
      rel: "apple-touch-icon",
    },
  ],
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: "",
    siteName: "",
    description: "",
    images: "/images/therowdycollection.com.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "",
    title: "",
    description: "",
    images: "/images/therowdycollection.com.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const query = await loadPageMetadata("/");
  // if (!query.data) throw new Error("Page metadata not found");
  // console.log(query.data[0]);
  // const { title, description } = query.data[0];
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-G9T9V9KRZF"
        />
        <Script
          id="ga"
          content="window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-G9T9V9KRZF');"
        />
        <title>{`The Rowdy Collection`}</title>
        <meta name="description" content={`The Rowdy Collection`} />
      </head>
      <body className="flex flex-col min-h-screen">{children}</body>
      <ServiceWorker />
    </html>
  );
}
