import { getHighligts } from "@/api/highlights";
import { getPopularArticles } from "@/api/popular";
import { getTemplate } from "@/api/templates";
import { getTopPick } from "@/api/top-picks";
import { Highlight } from "@/components/highlight";
import { TopPicks } from "@/components/top-picks";

export default async function HomePage() {
  const highlights = await getHighligts();
  const populars = await getPopularArticles();
  const topPicks = await getTopPick();
  const template = await getTemplate();
  return (
    <div>
      <Highlight
        highlights={highlights}
        populars={populars}
        selected={template.highlight}
      />
      <TopPicks data={topPicks} selected={template.topPicks} />
    </div>
  );
}
