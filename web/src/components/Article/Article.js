const MarkdownIt = require("markdown-it");
const md = new MarkdownIt();

export default ({ article, summary }) => {
  function formattedDate(date) {
    return new Date(date).toUTCString();
  }

  function formattedBody(article) {
    let output = article.body;
    if (summary) {
      output = output.split("\n\n").shift();
    }

    return md.render(output);
  }

  console.info(article);
  console.info(summary);

  return (
    <article className="mt-4 mb-12">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">
          <a href="" className="text-indigo-600 hover:bg-indigo-100 rounded">
            {article.title}
          </a>
        </h1>
        <h2 className="text-sm text-gray-600">by {article.author}</h2>
      </header>
      <div className="mt-2">
        <img src={article.image} className="float-left mt-1 mr-4 w-48" />
        <div dangerouslySetInnerHTML={{ __html: formattedBody(article) }}></div>
        {summary && (
          <p class="clearfix">
            <a
              href="#"
              className="inline-block mt-4 text-indigo-600 text-sm rounded font-medium hover:bg-indigo-100 rounded">
              Continue reading &raquo;
            </a>
          </p>
        )}
      </div>
      <footer className="flex mt-4 text-xs text-gray-600">
        <time>Posted: {formattedDate(article.postedAt)}</time>
        <ul className="flex-1 text-right">
          <li className="inline-block mx-1">
            <a
              href="#"
              className="bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-800 px-2 py-1 rounded">
              hammer
            </a>
          </li>
          <li className="inline-block mx-1">
            <a
              href="#"
              className="bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-800 px-2 py-1 rounded">
              woodworking
            </a>
          </li>
          <li className="inline-block mx-1">
            <a
              href="#"
              className="bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-800 px-2 py-1 rounded">
              steel
            </a>
          </li>
          <li className="inline-block mx-1">
            <a
              href="#"
              className="bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-800 px-2 py-1 rounded">
              wood
            </a>
          </li>
        </ul>
      </footer>
    </article>
  );
};
