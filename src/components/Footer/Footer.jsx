import "./Footer.css";
import githubIcon from "../../images/github.svg";
import linkedinIcon from "../../images/linkedin.svg";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy; {currentYear} Supersite, Powered by News API
      </p>
      <nav className="footer__nav">
        <ul className="footer__list">
          <li className="footer__item">
            <a className="footer__link" href="/">
              Home
            </a>
          </li>
          <li className="footer__item">
            <a
              className="footer__link"
              href="https://tripleten.com/"
              target="_blank"
              rel="nooper noreferrer"
            >
              TripleTen
            </a>
          </li>
        </ul>
        <ul className="footer__list footer__list_type_socials">
          <li className="footer__item">
            <a
              className="footer__social-link"
              href="https://github.com/ZephyrD18"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="footer__icon" src={githubIcon} alt="GitHub" />
            </a>
          </li>
          <li className="footer__item">
            <a
              className="footer__social-link"
              href="https://www.linkedin.com/in/issam-driwech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="footer__icon" src={linkedinIcon} alt="LinkedIn" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
