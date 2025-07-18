import prisma from "@/lib/prisma";

export const getArticles = async ({
  category,
  page,
}: {
  category?: string;
  page?: string;
}) => {
  const skip = page ? 10 * (parseInt(page) - 1) : undefined;
  const data = await prisma.article.findMany({
    take: 10,
    where: { category: { slug: category } },
    orderBy: { datePublished: "desc" },
    include: { category: true },
    ...(page && { skip }),
  });
  return data.map((item) => ({ ...item, category: item.category.name }));
};
export type ArticlesType = Awaited<ReturnType<typeof getArticles>>;

export const getArticle = async ({ slug }: { slug?: string }) => {
  const data = await prisma.article.findUniqueOrThrow({
    where: { slug },
    include: { category: true },
  });
  return {
    ...data,
    category: data.category.name,
  };
};
export type ArticleType = Awaited<ReturnType<typeof getArticle>>;
