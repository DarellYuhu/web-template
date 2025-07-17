import { getHighligts } from "@/api/highlights";
import { getPopularArticles } from "@/api/popular";
import { getTopPick } from "@/api/top-picks";
import { Highlight } from "@/components/highlight";
import { TopPicks } from "@/components/top-picks";

export const dynamic = "force-dynamic";
export default async function HomePage() {
  const highlights = await getHighligts();
  const populars = await getPopularArticles();
  const topPicks = await getTopPick();
  return (
    <div>
      <Highlight highlights={highlights} populars={populars} />
      <TopPicks data={topPicks} />
    </div>
  );
}
