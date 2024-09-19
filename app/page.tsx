import Content from "@/components/landing.page";
import {
  loadFooterText,
  loadHeader,
  loadStrapline,
  loadVideo,
} from "@/sanity/loader/loadQuery";

export default async function Page() {
  const [header, strapline, footer, video] = await Promise.all([
    loadHeader("/"),
    loadStrapline("/"),
    loadFooterText(),
    loadVideo("/"),
  ]);
  if (!header.data) throw new Error("Page data not found");
  if (!strapline.data) throw new Error("Strapline data not found");
  if (!footer.data) throw new Error("Footer data not found");
  if (!video.data) throw new Error("Video data not found");
  return (
    <Content
      header={header.data[0]}
      footer={footer.data[0]}
      strapline={strapline.data[0]}
      video={video.data[0]}
    />
  );
}

export const dynamic = "force-static";
