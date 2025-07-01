import prisma from "@/lib/prisma";

export const getArticles = async ({ category }: { category?: string }) => {
  return prisma.article.findMany({ where: { category: { name: category } } });
};
