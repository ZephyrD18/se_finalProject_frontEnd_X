import Preloader from "../Preloader/Preloader";
import "./SearchResults.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import NothingFound from "../NothingFound/NothingFound";
import { useState } from "react";
import { CARDS_PER_ROW, SEARCH_ERROR_MESSAGE } from "../../utils/constants";

function SearchResults({ search, onBookmarkClick, isArticleSaved }) {
  const [visibleCount, setVisibleCount] = useState(CARDS_PER_ROW);

  if (search.status === "loading") return <Preloader />;
  if (search.status === "error") {
    return (
      <NothingFound title="Something went wrong" text={SEARCH_ERROR_MESSAGE} />
    );
  }

  if (search.status !== "success") return null;
  if (search.articles.length === 0) {
    return (
      <NothingFound
        title="Nothing found"
        text={
          <>
            Sorry, but nothing matched
            <br />
            your search terms.
          </>
        }
      />
    );
  }

  return (
    <section className="search-results">
      <h2 className="search-results__title">Search results</h2>
      <NewsCardList
        articles={search.articles.slice(0, visibleCount)}
        cardType="search"
        onCardButtonClick={onBookmarkClick}
        isArticleSaved={isArticleSaved}
      />
      {visibleCount < search.articles.length && (
        <button
          className="search-results__more-button"
          type="button"
          onClick={() => setVisibleCount((count) => count + CARDS_PER_ROW)}
        >
          Show more
        </button>
      )}
    </section>
  );
}

export default SearchResults;
