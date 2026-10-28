import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a href="/" className="navigation__link">
            Home
          </a>
        </li>
        <li className="navigation__items">
          <button className="navigation__button" type="button">
            Sign in
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
