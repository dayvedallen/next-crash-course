import ArticleItem from "./ArticleItem";
import articleStyles from "../styles/Article.module.css";

const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        <ArticleItem article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
// Assign a unique key to each element: Within the .map() callback function, ensure that each element you return has a key prop. The value of the key should be unique for each element.
// Choosing a Key Value: The best practice for key values is to use unique and stable identifiers. If your data includes a unique ID (like a database ID), use that. If not, you can use the item index as a last resort, but be aware that using indexes can negatively affect performance and cause issues with component state, especially if the list can change order.
