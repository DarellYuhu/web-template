import Markdown from "react-markdown";
import { ArticleHeader } from "./components/article-header";
import { MoreArticle } from "./components/more-article";
import { getArticle } from "@/api/articles";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticle({ slug });
  return (
    <article>
      <ArticleHeader article={article} />
      <div className="flex flex-row p-10 gap-8">
        <div className="markdown w-3/4">
          <Markdown>{article?.contents}</Markdown>
        </div>
        <div className="w-1/4">
          <MoreArticle articles={article.recommended} />
        </div>
      </div>
    </article>
  );
}
