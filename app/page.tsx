import Content from "@/components/landing.page";
import { loadHeader } from "@/sanity/loader/loadQuery";

export default async function Page(params: any) {
  console.log(params);
  const query = await loadHeader("/");
  if (!query.data) throw new Error("Page data not found");
  return <Content data={query.data[0]} />;
}

export const dynamic = "force-static";
