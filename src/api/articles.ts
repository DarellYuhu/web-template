import prisma from "@/lib/prisma";

export const getArticles = async ({ category }: { category?: string }) => {
  const data = await prisma.article.findMany({
    where: { category: { name: category } },
    include: { category: true },
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
