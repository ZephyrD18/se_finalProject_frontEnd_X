import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { useState } from "react";

function Header({ theme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={`header header_theme_${theme} ${isMenuOpen ? "header_menu-open" : ""}`}
    >
      <div className="header__bar">
        <a href="/" className="header__logo">
          NewsExplorer
        </a>
        <button
          className={`header__menu-button ${isMenuOpen ? "header__menu-button_opened" : ""}`}
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <Navigation
          theme={isMenuOpen ? "dark" : theme}
          isLoggedIn={true}
          isMenuOpen={isMenuOpen}
        />
      </div>
    </header>
  );
}

export default Header;
