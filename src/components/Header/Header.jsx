import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <header className="header">
      <div className="header__bar">
        <a href="/" className="header__logo">
          NewsExplorer
        </a>
        <Navigation isLoggedIn={true} />
      </div>
    </header>
  );
}

export default Header;
