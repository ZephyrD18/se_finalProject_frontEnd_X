import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ articles, cardType }) {
  return (
    <ul className="news-card-list">
      {articles.map((article) => (
        <li className="news-card-list__item" key={article._id}>
          <NewsCard article={article} type={cardType} />
        </li>
      ))}
    </ul>
  );
}

export default NewsCardList;
