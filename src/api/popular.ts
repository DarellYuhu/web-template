import prisma from "@/lib/prisma";

export const getPopularArticles = async () => {
  const data = await prisma.popular.findMany({
    include: { article: { include: { category: true } } },
  });
  const normalized = data.map(({ article }) => ({
    ...article,
    category: article.category.name,
  }));
  return normalized;
};
export type PopularType = Awaited<ReturnType<typeof getPopularArticles>>;
