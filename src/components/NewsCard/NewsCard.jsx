import "./NewsCard.css";
import { formatDate } from "../../utils/formatters";

function NewsCard({ article, type }) {
  const isSavedPage = type === "saved";

  return (
    <article className="news-card">
      <a
        className="news-card__link"
        href={article.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="news-card__image"
          src={article.image}
          alt={article.title}
        />
        <div className="news-card__content">
          <time className="news-card__date" dateTime={article.date}>
            {formatDate(article.date)}
          </time>
          <h3 className="news-card__title">{article.title}</h3>
          <p className="news-card__text">{article.text}</p>
          <p className="news-card__source">{article.source}</p>
        </div>
      </a>
      {isSavedPage && <p className="news-card__keyword">{article.keyword}</p>}

      <button
        className={`news-card__button ${
          isSavedPage
            ? "news-card__button_type_delete"
            : "news-card__button_type_bookmark"
        }`}
        type="button"
        aria-label={isSavedPage ? "Remove from saved" : "Save article"}
      />
      <span className="news-card__tooltip">
        {isSavedPage ? "Remove from saved" : "Sign in to save articles"}
      </span>
    </article>
  );
}

export default NewsCard;
