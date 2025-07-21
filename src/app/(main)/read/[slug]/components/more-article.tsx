import { ArticleType } from "@/api/articles";
import { Separator } from "@/components/ui/separator";
import { format } from "date-fns";
import { Fragment } from "react";

export const MoreArticle = ({
  articles,
}: {
  articles: Omit<ArticleType, "recommended" | "category">[];
}) => {
  return (
    <div className="">
      <p className="text-xl border-b-2 border-b-neutral-400 pb-4">
        Recommended For You
      </p>
      <div className="space-y-4 mt-4">
        {articles.slice(0, 4).map((article, idx) => (
          <div key={idx} className="flex flex-row gap-4">
            <img
              src={article.imageUrl}
              className="object-cover size-28"
              alt="article image"
            />
            <div className="flex flex-col justify-evenly">
              <p className="line-clamp-3 w-52">{article.title}</p>
              <div className="text-[12px] flex flex-row gap-3">
                <p>{format(article?.datePublished, "MMM dd, yyyy")}</p>
                <p>{article.authorName}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-black text-white p-4">
      <p className="text-xl border-l-2 border-l-red-500 pl-4">
        Recommended For You
      </p>
      <div className="space-y-4 mt-4">
        {recommendedArticle.slice(0, 4).map((article, idx) => (
          <div key={idx} className="flex flex-row gap-4">
            <img src={article.imageUrl} className="object-cover w-24 h-16" />
            <div>
              <div className="flex flex-row gap-4 text-[12px]">
                <p>{article.category}</p>
                <p>{article.datePublished}</p>
              </div>
              <p className="line-clamp-2 w-52">{article.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-4 ">
      {recommendedArticle.slice(0, 4).map((article, idx, arr) => (
        <Fragment key={idx}>
          <div className="flex flex-row gap-4 items-center">
            <div className="w-24 h-16 items-center">
              <img
                src={article.imageUrl}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="line-clamp-2 w-52">{article.title}</p>
          </div>
          {idx + 1 < arr.length && <Separator />}
        </Fragment>
      ))}
    </div>
  );
};
