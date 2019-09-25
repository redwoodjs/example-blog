import Article from "src/components/Article";
import { useParams } from "react-router-dom";

export default ({ articles }) => {
  let { slug } = useParams();

  const article = articles.find(article => {
    return article.slug === slug;
  });

  return <Article article={article} summary={false} />;
};
