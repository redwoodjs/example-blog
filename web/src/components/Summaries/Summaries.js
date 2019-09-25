import Article from "src/components/Article";

export default ({ articles }) => {
  return (
    <>
      {articles.map(article => (
        <Article key={article.id} article={article} summary={true} />
      ))}
    </>
  );
};
