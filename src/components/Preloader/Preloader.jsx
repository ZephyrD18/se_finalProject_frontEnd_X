import "./Preloader.css";
import preloaderIcon from "../../images/preloader.svg";

function Preloader() {
  return (
    <section className="preloader" aria-live="polite">
      <img className="preloader__circle" src={preloaderIcon} alt="" />
      <p className="preloader__text">Searching for news...</p>
    </section>
  );
}

export default Preloader;
