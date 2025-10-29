import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 600px)" });

  return (
    <>
      <section className="pre-footer">
        <img
          src="/images/home/footer/frank-house-kitchen.webp"
          alt="Modern kitchen with ambient lighting, featuring a central island with bar stools, sleek cabinetry, and a large window revealing a dark night view. A potted plant adds greenery."
          width={100}
          height={100}
          loading="lazy"
          decoding="async"
        />

        <div className="pre-footer-content">
          <h5 className="text-center secondary-text-color">
            Can’t afford a designer? <br /> Think again
          </h5>
          <NavLink
            className="button secondary-button no-link-line text-uppercase"
            to={"/book-designer"}
          >
            Schedule a consultation
          </NavLink>
        </div>
      </section>
      <footer>
        <div className="upper-footer-container max-section-width">
          {/* Nav links */}
          <div className="upper-footer-left-container">
            <div className="footer-category">
              <p className="text-small text-bold text-uppercase primary-text-color">
                About us
              </p>
              <NavLink className="no-link-line text-small" to={"/the-team"}>
                The team
              </NavLink>
              <NavLink className="no-link-line text-small" to={"/"}>
                Company
              </NavLink>
            </div>
            <div className="footer-category">
              <p className="text-small text-bold text-uppercase primary-text-color">
                Explore
              </p>
              <NavLink className="no-link-line text-small" to={"/"}>
                FAQ
              </NavLink>
              <NavLink className="no-link-line text-small" to={"/"}>
                Contact us
              </NavLink>
            </div>

            <div className="footer-category">
              <p className="text-small text-bold text-uppercase primary-text-color">
                Location
              </p>
              <p className="text-small ">Liberty, US</p>
              <p className="text-small">San Andreas, US</p>
              <p className="text-small">Madrid, ES</p>
              <p className="text-small">Paris, FR</p>
            </div>
          </div>

          <div className="upper-footer-right-container">
            <p className="text-small">
              Bringing style to every corner of Liberty!
              <br />
              One home at a time.
            </p>
          </div>
        </div>

        <hr className="footer-line" />

        <div className="lower-footer-container max-section-width">
          <img
            src="/logo/dark/ArqeStudioLowQuality.webp"
            alt="Arqe studio logotype"
            width={26}
            height={34}
            loading="lazy"
            decoding="async"
          />

          <div className="disclaimer-container primary-text-color">
            <NavLink to={"/"}>Our terms & Conditions</NavLink>
            {isDesktop ? (
              <>
                <p>|</p>
              </>
            ) : null}
            <NavLink to={"/"}>Privacy Policy</NavLink>
            {isDesktop ? (
              <>
                <p>|</p>
              </>
            ) : null}
            <p>Copyright &#169; 2025</p>
          </div>
        </div>
      </footer>
    </>
  );
};
