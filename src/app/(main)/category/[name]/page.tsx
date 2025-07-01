import { getArticles } from "@/api/articles";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  await getArticles({ category: name });
  return <div>Category Page </div>;
}
