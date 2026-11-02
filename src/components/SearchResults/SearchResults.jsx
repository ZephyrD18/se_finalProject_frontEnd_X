import "./SearchResults.css";
import NewsCardList from "../NewsCardList/NewsCardList";

function SearchResults({ articles }) {
  return (
    <section className="search-results">
      <h2 className="search-results__title">Search results</h2>
      <NewsCardList articles={articles} />
      <button className="search-results__more-button" type="button">
        Show more
      </button>
    </section>
  );
}

export default SearchResults;
