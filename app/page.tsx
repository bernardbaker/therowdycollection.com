import Content from "@/components/landing.page";
import { loadFooterText, loadHeader } from "@/sanity/loader/loadQuery";

export default async function Page() {
  const [header, footer] = await Promise.all([
    loadHeader("/"),
    loadFooterText(),
  ]);
  if (!header.data) throw new Error("Page data not found");
  if (!footer.data) throw new Error("Footer data not found");
  return <Content header={header.data[0]} footer={footer.data[0]} />;
}

export const dynamic = "force-static";
