import "./SavedNewsHeader.css";
import {
  formatKeywords,
  getKeywordsByPopularity,
} from "../../utils/formatters";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function SavedNewsHeader({ articles }) {
  const count = articles.length;
  const keywords = getKeywordsByPopularity(articles);
  const currentUser = useContext(CurrentUserContext);

  return (
    <section className="saved-news-header">
      <p className="saved-news-header__label">Saved articles</p>
      <h1 className="saved-news-header__title">
        {currentUser.name}, you have {count} saved{" "}
        {count === 1 ? "article" : "articles"}
      </h1>
      {keywords.length > 0 && (
        <p className="saved-news-header__keywords">
          By keywords:{" "}
          <span className="saved-news-header__keywords-list">
            {formatKeywords(keywords)}
          </span>
        </p>
      )}
    </section>
  );
}

export default SavedNewsHeader;
