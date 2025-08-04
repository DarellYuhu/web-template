import Markdown from "react-markdown";
import { ArticleHeader } from "./components/article-header";
import { MoreArticle } from "./components/more-article";
import { getArticle } from "@/api/articles";
import { getTemplate } from "@/api/templates";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticle({ slug });
  const templates = await getTemplate();
  return (
    <article className="">
      <ArticleHeader article={article} selected={templates.articleHeader} />
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
