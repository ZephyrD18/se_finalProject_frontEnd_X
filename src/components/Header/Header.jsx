import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <header className="header">
      <div className="header__bar">
        <a href="/" className="header__logo">
          NewsExplorer
        </a>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
