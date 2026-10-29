import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({ theme }) {
  return (
    <header className={`header header_theme_${theme}`}>
      <div className="header__bar">
        <a href="/" className="header__logo">
          NewsExplorer
        </a>
        <Navigation theme={theme} isLoggedIn={true} />
      </div>
    </header>
  );
}

export default Header;
