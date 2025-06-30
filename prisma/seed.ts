import { PrismaClient } from "@/generated/prisma";
import { faker } from "@faker-js/faker";
import { Prisma } from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  const articles: Prisma.ArticleCreateManyInput[] = Array.from({
    length: 20,
  }).map(() => ({
    article: faker.lorem.paragraphs(3),
    authorName: faker.person.fullName(),
    category: faker.helpers.arrayElement([
      "Technology",
      "Health",
      "Lifestyle",
      "Education",
      "Finance",
    ]),
    datePublished: faker.date.past(),
    imageUrl: faker.image.url(),
    title: faker.lorem.sentence(),
    id: faker.string.uuid(),
  }));
  const prismaArticle = prisma.article.createMany({ data: articles });

  const highlights: Prisma.HighlightCreateManyInput[] = faker.helpers
    .arrayElements(articles, 3)
    .map((article) => ({
      articleId: article.id!,
    }));
  const prismaHighlight = prisma.highlight.createMany({ data: highlights });

  const topPicks: Prisma.TopPickCreateManyInput[] = faker.helpers
    .arrayElements(articles, 3)
    .map((article) => ({
      articleId: article.id!,
    }));
  const prismaTopPick = prisma.topPick.createMany({ data: topPicks });

  const populars: Prisma.PopularCreateManyInput[] = faker.helpers
    .arrayElements(articles, 3)
    .map((article) => ({
      articleId: article.id!,
    }));
  const prismaPopular = prisma.popular.createMany({ data: populars });

  const menus = [
    "Home",
    "World",
    "Politics",
    "Economy",
    "Sciende & Tech",
    "Life Style",
    "Food",
    "Sports",
  ];
  const category: Prisma.CategoryCreateManyInput[] = menus.map((item) => ({
    name: item,
  }));
  const prismaCategory = prisma.category.createMany({ data: category });

  await prisma.$transaction([
    prismaArticle,
    prismaHighlight,
    prismaTopPick,
    prismaPopular,
    prismaCategory,
  ]);
}

main()
  .catch(async (err) => {
    console.log(err);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());
