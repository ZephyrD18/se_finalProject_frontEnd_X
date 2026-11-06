import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const query = keyword.trim();
    if (!query) return;
    onSearch(query);
  };

  return (
    <form
      className="search-form"
      name="search"
      onSubmit={handleSubmit}
      noValidate
    >
      <input
        className="search-form__input"
        type="text"
        name="keyword"
        placeholder="Enter topic"
        aria-label="Search topic"
        value={keyword}
        onChange={(evt) => setKeyword(evt.target.value)}
        required
      />
      <button className="search-form__button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
