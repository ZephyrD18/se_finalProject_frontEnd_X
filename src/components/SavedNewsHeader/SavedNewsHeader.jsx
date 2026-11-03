import "./SavedNewsHeader.css";
import {
  formatKeywords,
  getKeywordsByPopularity,
} from "../../utils/formatters";

function SavedNewsHeader({ articles }) {
  const count = articles.length;
  const keywords = getKeywordsByPopularity(articles);

  return (
    <section className="saved-news-header">
      <p className="saved-news-header__label">Saved articles</p>
      <h1 className="saved-news-header__title">
        Elise, you have {count} saved {count === 1 ? "article" : "articles"}
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
