import prisma from "@/lib/prisma";

export const getPopularArticles = async () => {
  const data = await prisma.popular.findMany({
    include: { article: true },
  });
  const normalized = data.map((item) => item.article);
  return normalized;
};
