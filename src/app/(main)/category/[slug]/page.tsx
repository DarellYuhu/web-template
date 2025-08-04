import { getArticles } from "@/api/articles";
import { getCategory } from "@/api/categories";
import { PaginationButton } from "@/components/pagination-button";
import Link from "next/link";
import readingTime from "reading-time";

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { slug } = await params;
  const { page } = await searchParams;
  const category = await getCategory({ slug });
  const articles = await getArticles({ category: slug, page });
  return (
    <div className="p-10 space-y-8">
      <p>
        More in <span className="font-semibold">{category.name}</span>
      </p>
      <div className="space-y-5">
        {articles.map((item) => (
          <Link href={`/read/${item.slug}`} key={item.id}>
            <div className="flex flex-row mb-6">
              <img
                src={item.imageUrl}
                className="w-60 h-40 object-cover shrink-0"
                alt={item.slug}
              />
              <div className="px-4 justify-between flex flex-col">
                <div className="space-y-2">
                  <p className="font-semibold">{item.title}</p>
                  <p className="line-clamp-2">{item.contents}</p>
                </div>
                <div className="flex flex-row gap-2">
                  <p>{item.category}</p>|
                  <p>{readingTime(item.contents).text}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <PaginationButton articleLength={articles.length} />
    </div>
  );
}
