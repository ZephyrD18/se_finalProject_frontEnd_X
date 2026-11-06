import "./SearchResults.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import NothingFound from "../NothingFound/NothingFound";
import { SEARCH_ERROR_MESSAGE } from "../../utils/constants";

function SearchResults({ search }) {
  if (search.status === "error") {
    return (
      <NothingFound title="Something went wrong" text={SEARCH_ERROR_MESSAGE} />
    );
  }

  if (search.status !== "success") return null;

  return (
    <section className="search-results">
      <h2 className="search-results__title">Search results</h2>
      <NewsCardList articles={search.articles} cardType="search" />
      <button className="search-results__more-button" type="button">
        Show more
      </button>
    </section>
  );
}

export default SearchResults;
