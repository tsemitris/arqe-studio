import { useMediaQuery } from "react-responsive";
import { HeaderNavLinks } from "./HeaderNavLinks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [navStatus, setNavStatus] = useState(false);
  document.body.style.overflow = navStatus ? "hidden" : "auto";

  // Media query
  const isDesktop = useMediaQuery({ query: "(min-width: 600px)" });

  // Navigation handler
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      {isDesktop ? null : (
        <>
          <nav
            className={`navigation-container ${navStatus ? "open-nav" : null}`}
          >
            <div className="navigation-content">
              <HeaderNavLinks navStatus={setNavStatus} />
            </div>

            <button
              className="menu-button"
              onClick={() => setNavStatus(!navStatus)}
            >
              <span className="material-symbols-rounded">close</span>
            </button>
          </nav>
        </>
      )}

      <header>
        <div className="header-content max-section-width">
          <img
            src="/logo/dark/ArqeStudioLowQuality.webp"
            alt="Arqe studio logotype"
            width={41}
            height={52}
            loading="lazy"
            decoding="async"
            onClick={() => handleClick()}
          />

          <div className="text-medium menu-links">
            {isDesktop ? (
              <>
                <HeaderNavLinks />
              </>
            ) : (
              <>
                <button
                  className="menu-button"
                  onClick={() => setNavStatus(!navStatus)}
                >
                  <span className="material-symbols-rounded">menu</span>
                </button>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
};
