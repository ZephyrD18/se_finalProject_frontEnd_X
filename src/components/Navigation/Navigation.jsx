import { NavLink } from "react-router-dom";
import "./Navigation.css";
import logoutWhiteIcon from "../../images/logout-white.svg";
import logoutDarkIcon from "../../images/logout-dark.svg";

function Navigation({ theme, isLoggedIn, isMenuOpen, onLinkClick }) {
  return (
    <nav
      className={`navigation navigation_theme_${theme} ${isMenuOpen ? "navigation_opened" : ""}`}
    >
      <ul className="navigation__list">
        <li className="navigation__item">
          <NavLink
            to="/"
            end
            onClick={onLinkClick}
            className={({ isActive }) =>
              `navigation__link navigation__link_type_home ${isActive ? "navigation__link_active" : ""}`
            }
          >
            Home
          </NavLink>
        </li>
        {isLoggedIn && (
          <li className="navigation__item">
            <NavLink
              to="/saved-news"
              onClick={onLinkClick}
              className={({ isActive }) =>
                `navigation__link navigation__link_type_saved ${isActive ? "navigation__link_active" : ""}`
              }
            >
              Saved articles
            </NavLink>
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
