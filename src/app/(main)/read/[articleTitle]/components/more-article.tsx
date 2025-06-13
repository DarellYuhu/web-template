import { Separator } from "@/components/ui/separator";
import { Fragment } from "react";

export const MoreArticle = () => {
  return (
    <div className="">
      <p className="text-xl border-b-2 border-b-neutral-400 pb-4">
        Recommended For You
      </p>
      <div className="space-y-4 mt-4">
        {recommendedArticle.slice(0, 4).map((article, idx) => (
          <div key={idx} className="flex flex-row gap-4">
            <img
              src={article.imageUrl}
              className="object-cover size-28"
              alt="article image"
            />
            <div className="flex flex-col justify-evenly">
              <p className="line-clamp-3 w-52">{article.title}</p>
              <div className="text-[12px] flex flex-row gap-3">
                <p>{article.datePublished}</p>
                <p>{article.authorName}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-black text-white p-4">
      <p className="text-xl border-l-2 border-l-red-500 pl-4">
        Recommended For You
      </p>
      <div className="space-y-4 mt-4">
        {recommendedArticle.slice(0, 4).map((article, idx) => (
          <div key={idx} className="flex flex-row gap-4">
            <img src={article.imageUrl} className="object-cover w-24 h-16" />
            <div>
              <div className="flex flex-row gap-4 text-[12px]">
                <p>{article.category}</p>
                <p>{article.datePublished}</p>
              </div>
              <p className="line-clamp-2 w-52">{article.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-4 ">
      {recommendedArticle.slice(0, 4).map((article, idx, arr) => (
        <Fragment key={idx}>
          <div className="flex flex-row gap-4 items-center">
            <div className="w-24 h-16 items-center">
              <img
                src={article.imageUrl}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="line-clamp-2 w-52">{article.title}</p>
          </div>
          {idx + 1 < arr.length && <Separator />}
        </Fragment>
      ))}
    </div>
  );
};

const recommendedArticle: Article[] = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title:
      "Tempore autem molestiae veritatis mollitia ad voluptate. Suscipit distinctio impedit alias placeat ea labore ipsam excepturi repellendus.",
    article:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Curabitur eget leo sed velit vestibulum eleifend. Morbi vitae nulla auctor, vestibulum magna sed, convallis ex. Curabitur eget leo sed velit vestibulum eleifend.",
    authorName: "",
    category: "",
    datePublished: "",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Incredible advancements in technology and science.",
    article:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Curabitur eget leo sed velit vestibulum eleifend. Morbi vitae nulla auctor, vestibulum magna sed, convallis ex. Curabitur eget leo sed velit vestibulum eleifend.",
    authorName: "Jane Smith",
    category: "Science & Tech",
    datePublished: "July 10, 2025",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Exploring the depths of the ocean and its mysteries.",
    article:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Curabitur eget leo sed velit vestibulum eleifend. Morbi vitae nulla auctor, vestibulum magna sed, convallis ex. Curabitur eget leo sed velit vestibulum eleifend.",
    authorName: "Alice Johnson",
    category: "World",
    datePublished: "August 15, 2025",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title:
      "Veritatis vel eum accusamus repudiandae aspernatur ipsa et ducimus.",
    article:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Curabitur eget leo sed velit vestibulum eleifend. Morbi vitae nulla auctor, vestibulum magna sed, convallis ex. Curabitur eget leo sed velit vestibulum eleifend.",
    authorName: "John Doe",
    category: "Entertainment",
    datePublished: "June 06, 2025",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title:
      "Porro soluta aliquid doloribus tenetur. Ipsam est dolor consequatur officia repellendus vitae asperiores vel.",
    article:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Curabitur eget leo sed velit vestibulum eleifend. Morbi vitae nulla auctor, vestibulum magna sed, convallis ex. Curabitur eget leo sed velit vestibulum eleifend.",
    authorName: "Jane Doe",
    category: "Technology",
    datePublished: "September 25, 2023",
  },
];
