import { PrismaClient } from "@/generated/prisma";
import { faker } from "@faker-js/faker";
import { Prisma } from "../src/generated/prisma";
import { articleSchema, categorySchema, otherSchema } from "@/schema";
import slugify from "slugify";

const prisma = new PrismaClient();
const FROM_CONTROLLER = process.env.FROM_CONTROLLER;

async function main() {
  if (FROM_CONTROLLER === "true") await seedFromController();
  else await defaultSeeder();
}

async function seedFromController() {
  console.log("CONTROLLER SEEDING");
  const CATEGORIES_DATA = process.env.CATEGORIES_DATA;
  const ARTICLES_DATA = process.env.ARTICLES_DATA;
  const HIGHLIGHTS_DATA = process.env.HIGHLIGHTS_DATA;
  const TOPPICKS_DATA = process.env.TOPPICKS_DATA;
  const POPULARS_DATA = process.env.POPULARS_DATA;

  if (
    !ARTICLES_DATA ||
    !CATEGORIES_DATA ||
    !HIGHLIGHTS_DATA ||
    !TOPPICKS_DATA ||
    !POPULARS_DATA
  )
    throw new Error("SUPPLY ALL THE DATA");
  const parsed = {
    categories: categorySchema.parse(JSON.parse(CATEGORIES_DATA)),
    articles: articleSchema.parse(JSON.parse(ARTICLES_DATA)),
    highlights: otherSchema.parse(JSON.parse(HIGHLIGHTS_DATA)),
    topPicks: otherSchema.parse(JSON.parse(TOPPICKS_DATA)),
    populars: otherSchema.parse(JSON.parse(POPULARS_DATA)),
  };
  await prisma.$transaction([
    prisma.category.createMany({ data: parsed.categories }),
    prisma.article.createMany({ data: parsed.articles }),
    prisma.highlight.createMany({ data: parsed.highlights }),
    prisma.topPick.createMany({ data: parsed.topPicks }),
    prisma.popular.createMany({ data: parsed.populars }),
  ]);
}

async function defaultSeeder() {
  const CATEGORY_LIST = [
    "Technology",
    "Health",
    "Lifestyle",
    "Education",
    "Finance",
  ];
  const categories = await prisma.category.createManyAndReturn({
    data: CATEGORY_LIST.map((cat) => ({ name: cat, slug: slugify(cat) })),
  });

  const articles: Prisma.ArticleCreateManyInput[] = Array.from({
    length: 20,
  }).map(() => {
    const title = faker.lorem.sentence();
    return {
      contents: faker.lorem.paragraphs(3),
      authorName: faker.person.fullName(),
      categoryId: faker.helpers.arrayElement(categories.map((item) => item.id)),
      datePublished: faker.date.past(),
      imageUrl: "/assets/news-img-placeholder.png",
      title,
      slug: slugify(title),
      id: faker.string.uuid(),
    };
  });
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

  await prisma.$transaction([
    prismaArticle,
    prismaHighlight,
    prismaTopPick,
    prismaPopular,
  ]);
}

main()
  .catch(async (err) => {
    console.log(err);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());
