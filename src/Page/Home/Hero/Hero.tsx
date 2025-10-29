import { NavLink } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="home-hero">
      <div className="hero-filter"></div>

      <h1>
        We design spaces <br />
        that tell your story
      </h1>
      <NavLink
        className="button primary-button no-link-line text-uppercase text-large"
        to="/book-designer"
      >
        Book now
      </NavLink>
    </section>
  );
};
