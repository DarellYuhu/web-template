import prisma from "@/lib/prisma";

export const getTopPick = async () => {
  const data = await prisma.topPick.findMany({
    include: { article: { include: { category: true } } },
  });
  const normalized = data.map(({ article }) => ({
    ...article,
    category: article.category.name,
  }));
  return normalized;
};
export type TopPickType = Awaited<ReturnType<typeof getTopPick>>;
