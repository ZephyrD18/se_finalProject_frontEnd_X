import "./SearchForm.css";

function SearchForm() {
  return (
    <form className="search-form" name="search" noValidate>
      <input
        className="search-form__input"
        type="text"
        name="keyword"
        placeholder="Enter topic"
        aria-label="Search topic"
        required
      />
      <button className="search-form__button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
