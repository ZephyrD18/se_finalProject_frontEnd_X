import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import SearchResults from "../SearchResults/SearchResults";
import { sampleArticles } from "../../utils/constants";

function Main() {
  return (
    <main className="main">
      <section className="main__hero">
        <div className="main__hero-content">
          <h1 className="main__title">What&apos;s going on in the world?</h1>
          <p className="main__subtitle">
            Find the latest news on any topic and save them in your personal
            account.
          </p>
          <SearchForm />
        </div>
      </section>
      <SearchResults articles={sampleArticles} />
      <About />
    </main>
  );
}

export default Main;
