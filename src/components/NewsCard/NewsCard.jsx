import { useContext } from "react";
import "./NewsCard.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { formatDate } from "../../utils/formatters";

function NewsCard({ article, type, isSaved, onButtonClick }) {
  const currentUser = useContext(CurrentUserContext);
  const isSavedPage = type === "saved";
  const hasTooltip = isSavedPage || !currentUser;

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
        } ${isSaved ? "news-card__button_saved" : ""}`}
        type="button"
        aria-label={
          isSavedPage || isSaved ? "Remove from saved" : "Save article"
        }
        onClick={() => onButtonClick(article)}
      />
      {hasTooltip && (
        <span className="news-card__tooltip">
          {isSavedPage ? "Remove from saved" : "Sign in to save articles"}
        </span>
      )}
    </article>
  );
}

export default NewsCard;
