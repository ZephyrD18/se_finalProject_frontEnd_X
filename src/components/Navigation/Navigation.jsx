import "./Navigation.css";
import logoutWhiteIcon from "../../images/logout-white.svg";
import logoutDarkIcon from "../../images/logout-dark.svg";

function Navigation({ theme, isLoggedIn, isMenuOpen }) {
  return (
    <nav
      className={`navigation navigation_theme_${theme} ${isMenuOpen ? "navigation_opened" : ""}`}
    >
      <ul className="navigation__list">
        <li className="navigation__item">
          <a href="/" className="navigation__link">
            Home
          </a>
        </li>
        {isLoggedIn && (
          <li className="navigation__item">
            <a href="/saved-news" className="navigation__link">
              Saved articles
            </a>
          </li>
        )}
        <li className="navigation__item">
          {isLoggedIn ? (
            <button
              className="navigation__button navigation__button_type_logout"
              type="button"
            >
              Elise
              <img
                className="navigation__logout-icon"
                src={theme === "dark" ? logoutWhiteIcon : logoutDarkIcon}
                alt="Log out"
              />
            </button>
          ) : (
            <button className="navigation__button" type="button">
              Sign in
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
