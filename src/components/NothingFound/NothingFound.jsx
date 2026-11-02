import "./NothingFound.css";
import circleImage from "../../images/not-found-circle.svg";
import eyesImage from "../../images/not-found-eyes.svg";
import mouthImage from "../../images/not-found-mouth.svg";
import handleImage from "../../images/not-found-handle.svg";

function NothingFound({ title, text }) {
  return (
    <section className="nothing-found">
      {/* The sad magnifying glass is built from the four layers of the mockup */}
      <div className="nothing-found__image" aria-hidden="true">
        <img className="nothing-found__circle" src={circleImage} alt="" />
        <img className="nothing-found__eyes" src={eyesImage} alt="" />
        <img className="nothing-found__mouth" src={mouthImage} alt="" />
        <img className="nothing-found__handle" src={handleImage} alt="" />
      </div>
      <h2 className="nothing-found__title">{title}</h2>
      <p className="nothing-found__text">{text}</p>
    </section>
  );
}

export default NothingFound;
