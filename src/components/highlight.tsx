import { Separator } from "./ui/separator";

export const Highlight = () => {
  let selected = 1;
  selected = Math.floor(Math.random() * 4) + 1;

  switch (selected) {
    case 1:
      return (
        <div className="flex flex-row justify-between bg-black p-10 gap-4">
          {more.map((article, idx) => (
            <div key={idx} className="bg-neutral-600 rounded-md h-96 flex p-3">
              <div className="bg-neutral-100 self-end rounded-md p-2">
                <p className="line-clamp-1 text-lg">{article.title}</p>
                <p className="line-clamp-3 text-sm">{article.article}</p>
              </div>
            </div>
          ))}
        </div>
      );

    case 2:
      return (
        <div className="p-10 space-y-10">
          <div className="flex flex-row justify-between gap-4">
            {more.map((article, idx) => (
              <div className="flex flex-row gap-4" key={idx}>
                <img
                  alt="article image"
                  src={article.imageUrl}
                  className="size-24 rounded-lg object-cover"
                />
                <div>
                  <p className="text-lg">{article.category}</p>
                  <p className="text-sm line-clamp-2">{article.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <img
              alt="article image"
              className="w-full h-[550px] rounded-md object-cover"
              src={article.imageUrl}
            />
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row gap-4">
                <p className="p-2 border rounded-md text-sm">
                  {article.category}
                </p>
                <p className="p-2 border rounded-md text-sm">
                  {article.authorName}
                </p>
              </div>

              <div className="text-sm flex flex-row gap-2">
                <p>{article.datePublished}</p>
                ---
                <p>{article.readTime}</p>
              </div>
            </div>
            <p className="text-5xl line-clamp-2">{article.title}</p>
          </div>
        </div>
      );

    case 3:
      return (
        <div className="flex flex-row bg-black text-white p-10 gap-10">
          <div className="flex-2/3 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex flex-row gap-5 text-sm">
                <p>{article.category}</p>
                <p>{article.readTime}</p>
              </div>
              <p className="line-clamp-4 text-6xl">{article.title}</p>
            </div>
            <div className="flex flex-row justify-between">
              {more.slice(0, 2).map((article, idx) => (
                <div key={idx} className="space-y-4">
                  <img
                    alt="article image"
                    className="w-32 h-20 object-cover"
                    src={article.imageUrl}
                  />
                  <p className="line-clamp-3">{article.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1/3 bg-red-800 p-5">
            <p className="bg text-xl mb-5">Popular this week</p>
            <div className="space-y-5">
              {popular.map((article, idx) => (
                <div key={idx} className="flex flex-row gap-2">
                  <img
                    alt="article image"
                    className="w-28 h-20 object-cover"
                    src={article.imageUrl}
                  />
                  <div className="flex flex-col justify-center">
                    <div className="space-x-4 flex flex-row text-sm">
                      <p>{article.category}</p>
                      <p>{article.readTime}</p>
                    </div>
                    <div className="w-64">
                      <p className="line-clamp-2">{article.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case 4:
      return (
        <div className="p-10 bg-black text-gray-600">
          <div className="grid grid-cols-2">
            <div className="space-y-10">
              <p className="line-clamp-3 text-6xl font-semibold text-white">
                {article.title}
              </p>
              <p className="line-clamp-4 text-sm">{article.article}</p>
              <div className="flex flex-row space-x-2 h-5 items-center text-sm">
                <p>{article.category}</p>
                <Separator
                  orientation="vertical"
                  className="h-3 bg-neutral-500"
                />
                <p>{article.authorName}</p>
                <Separator
                  orientation="vertical"
                  className="h-3 bg-neutral-500"
                />
                <p>{article.datePublished}</p>
              </div>
            </div>
            <div className="h-[500px] justify-center flex">
              <img
                className="object-cover w-[500px] h-full"
                alt="article image"
                src={article.imageUrl}
              />
            </div>
          </div>
          <Separator className="bg-red-600 my-10" />
          <div className="flex flex-row justify-between">
            {more.map((article, idx) => (
              <div key={idx} className="flex flex-row gap-4">
                <img
                  className="size-24 object-cover"
                  src={article.imageUrl}
                  alt="article"
                />
                <div className="w-60 flex flex-col justify-between">
                  <div className="text-sm flex flex-row gap-2 h-3 items-center">
                    <p>{article.authorName}</p>
                    <Separator
                      orientation="vertical"
                      className="bg-neutral-500"
                    />
                    <p>{article.datePublished}</p>
                  </div>
                  <p className="line-clamp-2 text-white">{article.title}</p>
                  <div className="text-sm flex flex-row gap-2 h-3 items-center">
                    <p>{article.category}</p>
                    <Separator
                      orientation="vertical"
                      className="bg-neutral-500"
                    />
                    <p>{article.readTime}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
  }
};

const article: Article = {
  title:
    "Dicta nesciunt sed vel quia odit perferendis. Enim tenetur nobis sed facilis architecto natus tenetur ut.",
  article: `Voluptatibus beatae voluptate officiis recusandae laudantium illum deleniti fugit molestiae. Nobis sapiente saepe repudiandae ut dolore consequuntur molestiae. Voluptate nulla ea molestiae. Officiis pariatur voluptas voluptas.
  Veniam quod vero qui consectetur sit. Magni ipsa sunt. Vitae voluptas quia quam et corporis provident exercitationem.
  Voluptatem quod molestiae inventore deserunt. Deleniti dolorum dolores earum quo voluptatum rerum. Commodi nam rerum sed animi.`,
  authorName: "John Doe",
  category: "Entertainment",
  datePublished: "June 06, 2025",
  readTime: "5 min",
  imageUrl:
    "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
};

const more: Article[] = [
  {
    authorName: "John Doe",
    title:
      "Veritatis vel eum accusamus repudiandae aspernatur ipsa et ducimus.",
    category: "Entertainment",
    readTime: "5 min",
    datePublished: "June 06, 2025",
    article: `Voluptas incidunt debitis ab enim. Odit dicta adipisci fugiat omnis saepe. Dolor voluptatem reprehenderit facilis quos quos quae molestiae tenetur. Et et dolorum possimus ex.
    Et cupiditate soluta corporis laborum in iste. Fugiat voluptatem deleniti et voluptates vel quis ab repellat. Sunt error nihil doloremque. Dolorem ducimus assumenda.
    Facere ut asperiores iusto quasi tempora. Eveniet ipsum ullam fuga vel eaque ad tempora beatae et. Quasi quia nihil sint at. Quia itaque fugit suscipit maiores iure et cupiditate dolores.`,
    imageUrl:
      "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    authorName: "Jane Smith",
    title: "Incredible advancements in technology and science.",
    category: "Science & Tech",
    readTime: "7 min",
    datePublished: "July 10, 2025",
    article: `Voluptas incidunt debitis ab enim. Odit dicta adipisci fugiat omnis saepe. Dolor voluptatem reprehenderit facilis quos quos quae molestiae tenetur. Et et dolorum possimus ex.
    Et cupiditate soluta corporis laborum in iste. Fugiat voluptatem deleniti et voluptates vel quis ab repellat. Sunt error nihil doloremque. Dolorem ducimus assumenda.
    Facere ut asperiores iusto quasi tempora. Eveniet ipsum ullam fuga vel eaque ad tempora beatae et. Quasi quia nihil sint at. Quia itaque fugit suscipit maiores iure et cupiditate dolores.`,
    imageUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlbnRlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    authorName: "Alice Johnson",
    title: "Exploring the depths of the ocean and its mysteries.",
    category: "World",
    readTime: "6 min",
    datePublished: "August 15, 2025",
    article: `Voluptas incidunt debitis ab enim. Odit dicta adipisci fugiat omnis saepe. Dolor voluptatem reprehenderit facilis quos quos quae molestiae tenetur. Et et dolorum possimus ex.
    Et cupiditate soluta corporis laborum in iste. Fugiat voluptatem deleniti et voluptates vel quis ab repellat. Sunt error nihil doloremque. Dolorem ducimus assumenda.
    Facere ut asperiores iusto quasi tempora. Eveniet ipsum ullam fuga vel eaque ad tempora beatae et. Quasi quia nihil sint at. Quia itaque fugit suscipit maiores iure et cupiditate dolores.`,
    imageUrl:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlbnRlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];

const popular: Article[] = [
  {
    category: "Politics",
    readTime: "5 min",
    title:
      "Tempore autem molestiae veritatis mollitia ad voluptate. Suscipit distinctio impedit alias placeat ea labore ipsam excepturi repellendus.",
    imageUrl:
      "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    article: "",
    authorName: "",
    datePublished: "",
  },
  {
    category: "Politics",
    readTime: "5 min",
    title:
      "Tempore autem molestiae veritatis mollitia ad voluptate. Suscipit distinctio impedit alias placeat ea labore ipsam excepturi repellendus.",
    imageUrl:
      "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    article: "",
    authorName: "",
    datePublished: "",
  },
  {
    category: "Politics",
    readTime: "5 min",
    title:
      "Tempore autem molestiae veritatis mollitia ad voluptate. Suscipit distinctio impedit alias placeat ea labore ipsam excepturi repellendus.",
    imageUrl:
      "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    article: "",
    authorName: "",
    datePublished: "",
  },
  {
    category: "Politics",
    readTime: "5 min",
    title:
      "Tempore autem molestiae veritatis mollitia ad voluptate. Suscipit distinctio impedit alias placeat ea labore ipsam excepturi repellendus.",
    imageUrl:
      "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    article: "",
    authorName: "",
    datePublished: "",
  },
  {
    category: "Politics",
    readTime: "5 min",
    title:
      "Tempore autem molestiae veritatis mollitia ad voluptate. Suscipit distinctio impedit alias placeat ea labore ipsam excepturi repellendus.",
    imageUrl:
      "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    article: "",
    authorName: "",
    datePublished: "",
  },
];
