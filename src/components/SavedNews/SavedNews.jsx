import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedNews({ articles }) {
  return (
    <main className="saved-news">
      <SavedNewsHeader articles={articles} />
      {articles.length > 0 && (
        <section className="saved-news__cards" aria-label="Saved articles">
          <NewsCardList articles={articles} cardType="saved" />
        </section>
      )}
    </main>
  );
}

export default SavedNews;
