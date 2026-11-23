import "./About.css";
import authorPhoto from "../../images/author.jpg";

function About() {
  return (
    <section className="about">
      <img
        className="about__avatar"
        src={authorPhoto}
        alt="Issam Driwech, the author"
      />
      <div className="about__content">
        <h2 className="about__title">About the author</h2>
        <p className="about__text">
          My name is Issam Driwech. I&apos;m a software engineer who builds
          full-stack web applications with JavaScript, React, Node.js, Express,
          and MongoDB.
        </p>
        <p className="about__text">
          At TripleTen I learned to turn designs into responsive interfaces,
          work with APIs, and ship projects through code review, so I can help
          customers build fast, reliable products from idea to deployment.
        </p>
      </div>
    </section>
  );
}

export default About;
