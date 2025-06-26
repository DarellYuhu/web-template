import Markdown from "react-markdown";
import { ArticleHeader } from "./components/article-header";
import { MoreArticle } from "./components/more-article";

export default function ArticlePage() {
  return (
    <article>
      <ArticleHeader />
      <div className="flex flex-row p-10 gap-8">
        <div className="markdown w-3/4">
          <Markdown>{article.article}</Markdown>
        </div>
        <div className="w-1/4">
          <MoreArticle />
        </div>
      </div>
    </article>
  );
}

const article: Article = {
  article: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra, arcu ac dignissim aliquam, tortor dolor euismod nulla, sit amet lobortis nisl elit id est. Curabitur non tellus nec lorem efficitur tempor. Integer imperdiet, turpis nec sagittis imperdiet, elit orci porttitor neque, at vulputate magna sem sed sapien. Vivamus in orci sed libero dignissim finibus. Etiam feugiat tincidunt lectus at dictum. Cras porttitor purus a nunc fermentum, sed rhoncus neque laoreet. Proin tincidunt eros vel tincidunt fermentum. In hac habitasse platea dictumst.

Aenean mattis dapibus risus, sed dictum lacus porttitor nec. Nulla facilisi. Pellentesque laoreet sollicitudin quam, in lacinia leo bibendum a. Aliquam erat volutpat. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris facilisis viverra lacus sed facilisis. Cras congue dolor vitae sagittis blandit.

Maecenas eu tincidunt mi. Sed gravida vel lorem et facilisis. Aenean tempor laoreet sapien, sed blandit magna tincidunt sed. Sed in orci fermentum, accumsan felis sed, feugiat enim. Morbi nec nisl nec risus congue mattis. Vestibulum tincidunt, libero a lacinia gravida, sapien nulla condimentum magna, a tincidunt mi orci non justo. Donec dapibus ac nisi at varius. Suspendisse malesuada, libero at gravida ullamcorper, mauris sem pharetra nisl, sed laoreet purus velit sed diam.

Vivamus nec pulvinar nisl. Integer viverra, purus in bibendum dictum, odio orci egestas sem, ac aliquam tellus velit a leo. Nullam mollis fermentum arcu, in elementum leo suscipit sit amet. Nam vulputate nisi a neque blandit, ac porttitor ligula pretium. In vitae luctus erat, at luctus mauris. In varius fringilla ligula, sed viverra nunc lacinia sed. Vestibulum suscipit risus id dui pretium, sed consequat erat convallis. Sed blandit iaculis augue, vel tempus arcu efficitur a.

Nam porta ipsum in enim sodales faucibus. Integer dictum dapibus bibendum. Aliquam erat volutpat. Phasellus nec ipsum sed nisi facilisis dignissim. Fusce eu feugiat purus. Etiam tincidunt augue in porttitor finibus. Proin nec fringilla orci. Cras sed orci vel ligula imperdiet sodales vel sit amet mauris. Nunc viverra fringilla sem a gravida.`,

  authorName: "",
  category: "",
  datePublished: "",
  imageUrl: "",
  title: "",
};
