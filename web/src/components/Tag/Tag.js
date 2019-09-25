import Article from "src/components/Article";
import { useParams } from "react-router-dom";

export default ({ articles }) => {
  let { tag } = useParams();

  const filteredArticles = articles.filter(article => {
    return article.tags.indexOf(tag) !== -1;
  });

  return <Summaries articles={filteredArticles} summary={true} />;
};
