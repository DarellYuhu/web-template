import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { User2 } from "lucide-react";
import readingTime from "reading-time";

export const ArticleHeader = () => {
  let selected = 1;
  selected = Math.floor(Math.random() * 3) + 1;

  switch (selected) {
    case 1:
      return (
        <header className="p-10 space-y-4">
          <img
            src={article.imageUrl}
            alt="article image"
            className="w-full h-[500px] object-cover"
          />

          <div className="flex flex-row justify-between items-center">
            <div className="space-x-4">
              <Badge variant={"outline"} className="text-lg">
                {article.category}
              </Badge>
              <Badge variant={"outline"} className="text-lg">
                {article.authorName}
              </Badge>
            </div>

            <div className="flex flex-row gap-2 items-center h-3">
              <p>{article.datePublished}</p>
              <Separator orientation="vertical" className="bg-neutral-400" />
              <p>{readingTime(article.article).minutes}</p>
            </div>
          </div>

          <h1 className="text-4xl">{article.title}</h1>
        </header>
      );

    case 2:
      return (
        <header className="bg-black text-white p-10">
          <p className="border-l-2 border-red-600 pl-4">{article.category}</p>

          <div className="flex flex-row gap-10 mt-10">
            {/* image */}
            <img
              className="h-[400px] w-[550px] object-cover"
              src={article.imageUrl}
              alt="article image"
            />

            {/* detail */}
            <div className="flex-1 justify-between flex flex-col">
              <div className="flex flex-row gap-3 h-3 items-center">
                <p>{article.category}</p>
                <Separator orientation="vertical" className="bg-neutral-500" />
                <p>{article.datePublished}</p>
              </div>
              <h1 className="text-6xl line-clamp-4">{article.title}</h1>
              <div className="flex flex-row gap-2 items-center">
                <div className="p-2 bg-neutral-600 rounded-full">
                  <User2 size={20} />
                </div>
                <p>{article.authorName}</p>
              </div>
            </div>
          </div>
        </header>
      );

    case 3:
      return (
        <header className="p-10">
          <p className="text-2xl border-b-red-600 border-b-2 w-fit">
            {article.category}
          </p>
          <Separator className="mb-8 p-[1px]" />
          <div className="space-y-4">
            <h1 className="text-4xl">{article.article}</h1>
            <div className="h-3 items-center flex flex-row gap-2">
              <p>{article.authorName}</p>
              <Separator orientation="vertical" className="bg-neutral-500" />
              <p>{article.datePublished}</p>
            </div>
            <img
              className="h-[500px] w-full object-cover"
              alt="article image"
              src={article.imageUrl}
            />
          </div>
        </header>
      );
  }
};

const article: Article = {
  title:
    "Porro soluta aliquid doloribus tenetur. Ipsam est dolor consequatur officia repellendus vitae asperiores vel.",
  article:
    "This is a detailed article about a particular topic. It provides insights and information.",
  authorName: "Jane Doe",
  category: "Technology",
  datePublished: "September 25, 2023",
  imageUrl:
    "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
};
