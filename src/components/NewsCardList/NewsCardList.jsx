import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({
  articles,
  cardType,
  onCardButtonClick,
  isArticleSaved,
}) {
  return (
    <ul className="news-card-list">
      {articles.map((article) => (
        <li className="news-card-list__item" key={article._id ?? article.link}>
          <NewsCard
            article={article}
            type={cardType}
            isSaved={isArticleSaved?.(article)}
            onButtonClick={onCardButtonClick}
          />
        </li>
      ))}
    </ul>
  );
}

export default NewsCardList;
