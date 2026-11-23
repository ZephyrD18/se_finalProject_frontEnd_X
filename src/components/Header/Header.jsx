import { Link } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { useState } from "react";

function Header({ theme, isLoggedIn, onSignInClick, onLogout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const handleSignInClick = () => {
    closeMenu();
    onSignInClick();
  };
  const handleLogoutClick = () => {
    closeMenu();
    onLogout();
  };

  return (
    <header
      className={`header header_theme_${theme} ${isMenuOpen ? "header_menu-open" : ""}`}
    >
      <div className="header__bar">
        <Link to="/" className="header__logo" onClick={closeMenu}>
          NewsExplorer
        </Link>
        <button
          className={`header__menu-button ${isMenuOpen ? "header__menu-button_opened" : ""}`}
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <Navigation
          theme={isMenuOpen ? "dark" : theme}
          isLoggedIn={isLoggedIn}
          isMenuOpen={isMenuOpen}
          onLinkClick={closeMenu}
          onSignInClick={handleSignInClick}
          onLogout={handleLogoutClick}
        />
      </div>
      {isMenuOpen && (
        <div className="header__overlay" onClick={() => setIsMenuOpen(false)} />
      )}
    </header>
  );
}

export default Header;
