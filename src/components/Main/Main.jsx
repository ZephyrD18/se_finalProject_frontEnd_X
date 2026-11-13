import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import SearchResults from "../SearchResults/SearchResults";

function Main({ search, onSearch, onBookmarkClick, isArticleSaved }) {
  return (
    <main className="main">
      <section className="main__hero">
        <div className="main__hero-content">
          <h1 className="main__title">What&apos;s going on in the world?</h1>
          <p className="main__subtitle">
            Find the latest news on any topic and save them in your personal
            account.
          </p>
          <SearchForm initialKeyword={search.keyword} onSearch={onSearch} />
        </div>
      </section>
      <SearchResults
        key={`${search.status}-${search.keyword}`}
        search={search}
        onBookmarkClick={onBookmarkClick}
        isArticleSaved={isArticleSaved}
      />
      <About />
    </main>
  );
}

export default Main;
