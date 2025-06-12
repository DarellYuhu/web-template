import { ArrowRightCircle, ChevronRight, User } from "lucide-react";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export const TopPicks = () => {
  let selected = 1;
  selected = Math.floor(Math.random() * 4) + 1;

  switch (selected) {
    case 1:
      return (
        <div className="p-10 space-y-8">
          <div className="flex flex-row justify-between items-center">
            <p className="text-2xl font-semibold">Top Picks</p>
          </div>
          <div className="flex flex-row justify-between">
            {topPicks.slice(0, 4).map((article, idx) => (
              <div
                key={idx}
                className="w-72 space-y-3 rounded-md border p-2 shadow-md"
              >
                <img
                  className="h-48 w-full object-cover rounded-md"
                  src={article.imageUrl}
                  alt="article image"
                />
                <p className="font-semibold line-clamp-2">{article.title}</p>
                <p className="text-sm line-clamp-2">{article.article}</p>
                <div className="flex flex-row items-center gap-3 p-2 bg-neutral-100 rounded-lg">
                  <div className="rounded-lg p-2 bg-neutral-200">
                    <User size={25} />
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold">
                      {article.authorName}
                    </p>
                    <p className="text-[12px]">{article.datePublished}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    case 2:
      return (
        <div className="p-10 space-y-8">
          <div className="flex flex-row justify-between items-center">
            <p className="text-2xl font-semibold">Top Picks</p>
            <Link href={"#"} className="flex flex-row items-center">
              See all{" "}
              <span className="ml-2">
                <ArrowRightCircle size={16} />
              </span>
            </Link>
          </div>
          <div className="flex flex-row justify-between">
            {topPicks.slice(0, 4).map((article, idx) => (
              <div key={idx} className="w-72 space-y-3">
                <img
                  className="h-48 w-full object-cover rounded-md"
                  src={article.imageUrl}
                  alt="article image"
                />
                <div className="flex flex-row h-3 items-center gap-2">
                  <p className="text-sm">{article.authorName}</p>
                  <Separator
                    orientation="vertical"
                    className="bg-neutral-700"
                  />
                  <p className="text-sm">{article.datePublished}</p>
                </div>
                <p className="font-semibold line-clamp-2">{article.title}</p>
              </div>
            ))}
          </div>
        </div>
      );

    case 3:
      return (
        <div className="p-10 space-y-8">
          <div className="flex flex-row justify-between items-center">
            <p className="text-2xl font-semibold">Top Picks</p>
            <Button size={"sm"} className="font-normal rounded-sm bg-red-600">
              See all
            </Button>
          </div>
          <div className="flex flex-row justify-between">
            {topPicks.slice(0, 4).map((article, idx) => (
              <div key={idx} className="w-64 space-y-3">
                <div className="size-64 relative">
                  <img
                    className="w-full h-full object-cover"
                    src={article.imageUrl}
                    alt="article image"
                  />
                  <Badge
                    className="absolute bottom-1 left-1 rounded-xs"
                    variant={"secondary"}
                  >
                    {article.category}
                  </Badge>
                </div>
                <p className="font-semibold line-clamp-2">{article.title}</p>
                <div className="flex flex-row h-3 items-center gap-2">
                  <p className="text-sm">{article.authorName}</p>
                  <Separator
                    orientation="vertical"
                    className="bg-neutral-700"
                  />
                  <p className="text-sm">{article.readTime}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );

    case 4:
      return (
        <div className="p-10 space-y-8">
          <div className="flex flex-row justify-between items-center">
            <p className="text-2xl font-semibold">Top Picks</p>
            <Link href={"#"} className="flex flex-row items-center">
              See all{" "}
              <span className="ml-2">
                <ChevronRight size={16} />
              </span>
            </Link>
          </div>
          <div className="flex flex-row justify-between">
            {topPicks.slice(0, 4).map((article, idx) => (
              <div key={idx} className="w-64 space-y-3">
                <img
                  className="size-64 object-cover"
                  src={article.imageUrl}
                  alt="article image"
                />
                <div>
                  <p className="font-semibold line-clamp-2">{article.title}</p>
                  <p className="text-sm line-clamp-2">{article.article}</p>
                </div>
                <div className="flex flex-row h-3 items-center gap-2">
                  <p className="text-sm">{article.category}</p>
                  <Separator
                    orientation="vertical"
                    className="bg-neutral-700"
                  />
                  <p className="text-sm">{article.readTime}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
  }
};

const topPicks: Article[] = [
  {
    article: `Magnam esse accusamus sunt et repellat quis voluptatem aut. Iure repellendus hic molestiae architecto soluta voluptatem temporibus. Voluptatem quibusdam laboriosam distinctio sequi saepe ea esse. Expedita sapiente dolores cumque laboriosam est dolore. Autem occaecati laborum eligendi.
        Alias asperiores optio laborum. Vitae et nam consequatur aut molestiae aut et et vel. Accusamus magnam ad omnis corporis iste fugiat nam. Incidunt ex cupiditate a dicta sit ut nihil.
        Nesciunt mollitia ut minima omnis. Optio consectetur in magni consequuntur minus soluta et. Modi magni laborum qui assumenda debitis voluptatem libero iste blanditiis.`,
    title:
      "Tenetur eligendi voluptatem totam iusto assumenda molestias excepturi. Quos deserunt dolorem cumque voluptatem earum ut.",
    category: "Politics",
    readTime: "5 min",
    datePublished: "January 1, 2025",
    authorName: "John Doe",
    imageUrl:
      "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    article: `Magnam esse accusamus sunt et repellat quis voluptatem aut. Iure repellendus hic molestiae architecto soluta voluptatem temporibus. Voluptatem quibusdam laboriosam distinctio sequi saepe ea esse. Expedita sapiente dolores cumque laboriosam est dolore. Autem occaecati laborum eligendi.
        Alias asperiores optio laborum. Vitae et nam consequatur aut molestiae aut et et vel. Accusamus magnam ad omnis corporis iste fugiat nam. Incidunt ex cupiditate a dicta sit ut nihil.
        Nesciunt mollitia ut minima omnis. Optio consectetur in magni consequuntur minus soluta et. Modi magni laborum qui assumenda debitis voluptatem libero iste blanditiis.`,
    title:
      "Tenetur eligendi voluptatem totam iusto assumenda molestias excepturi. Quos deserunt dolorem cumque voluptatem earum ut.",
    category: "Politics",
    readTime: "5 min",
    datePublished: "January 2, 2025",
    authorName: "John Doe",
    imageUrl:
      "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    article: `Magnam esse accusamus sunt et repellat quis voluptatem aut. Iure repellendus hic molestiae architecto soluta voluptatem temporibus. Voluptatem quibusdam laboriosam distinctio sequi saepe ea esse. Expedita sapiente dolores cumque laboriosam est dolore. Autem occaecati laborum eligendi.
        Alias asperiores optio laborum. Vitae et nam consequatur aut molestiae aut et et vel. Accusamus magnam ad omnis corporis iste fugiat nam. Incidunt ex cupiditate a dicta sit ut nihil.
        Nesciunt mollitia ut minima omnis. Optio consectetur in magni consequuntur minus soluta et. Modi magni laborum qui assumenda debitis voluptatem libero iste blanditiis.`,
    title:
      "Tenetur eligendi voluptatem totam iusto assumenda molestias excepturi. Quos deserunt dolorem cumque voluptatem earum ut.",
    category: "Politics",
    readTime: "5 min",
    datePublished: "January 3, 2025",
    authorName: "John Doe",
    imageUrl:
      "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    article: `Magnam esse accusamus sunt et repellat quis voluptatem aut. Iure repellendus hic molestiae architecto soluta voluptatem temporibus. Voluptatem quibusdam laboriosam distinctio sequi saepe ea esse. Expedita sapiente dolores cumque laboriosam est dolore. Autem occaecati laborum eligendi.
        Alias asperiores optio laborum. Vitae et nam consequatur aut molestiae aut et et vel. Accusamus magnam ad omnis corporis iste fugiat nam. Incidunt ex cupiditate a dicta sit ut nihil.
        Nesciunt mollitia ut minima omnis. Optio consectetur in magni consequuntur minus soluta et. Modi magni laborum qui assumenda debitis voluptatem libero iste blanditiis.`,
    title:
      "Tenetur eligendi voluptatem totam iusto assumenda molestias excepturi. Quos deserunt dolorem cumque voluptatem earum ut.",
    category: "Politics",
    readTime: "5 min",
    datePublished: "January 4, 2025",
    authorName: "John Doe",
    imageUrl:
      "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];
