import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ initialKeyword, onSearch }) {
  const [keyword, setKeyword] = useState(initialKeyword);

  const [hasError, setHasError] = useState(false);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const query = keyword.trim();
    if (!query) {
      setKeyword("");
      setHasError(true);
      return;
    }
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
        className={`search-form__input ${hasError ? "search-form__input_type_error" : ""}`}
        type="text"
        name="keyword"
        placeholder={hasError ? "Please enter a keyword" : "Enter topic"}
        aria-label="Search topic"
        value={keyword}
        onChange={(evt) => {
          setKeyword(evt.target.value);
          setHasError(false);
        }}
        required
      />
      <button className="search-form__button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
