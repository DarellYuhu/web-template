import { getArticles } from "@/api/articles";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const data = await getArticles({ category: name });
  console.log(data);
  return <div>Category Page </div>;
}
