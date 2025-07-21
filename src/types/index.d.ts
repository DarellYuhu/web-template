type Article = {
  title: string;
  contents: string;
  category: string;
  authorName: string;
  datePublished: string;
  imageUrl: string;
  recommended?: Article[];
};
