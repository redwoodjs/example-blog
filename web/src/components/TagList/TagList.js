import { Link } from "react-router-dom";

export default ({ tags }) => {
  return tags.map(tag => (
    <li key={tag} className="inline-block mx-1">
      <Link
        to={`/tags/${tag}`}
        className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-800 px-2 py-1 mb-1 rounded">
        {tag}
      </Link>
    </li>
  ));
};
