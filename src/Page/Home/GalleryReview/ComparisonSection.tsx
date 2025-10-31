import { Link } from "react-router-dom";
import { projects } from "../../../data/projects";
import type { IProject } from "../../../models/IProject";
import { ShowTransformationImages } from "./ShowTransformationImages";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

export const ComparisonSection = () => {
  // Config
  const maxReviewInterior = 10;
  const reviewInteriorLenght = projects.slice(-maxReviewInterior).length;

  const isDesktop = useMediaQuery({ query: "(min-width: 600px)" });

  // - - - - - - - - - - - - - -
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth; // scroll one "viewport" width
    const newScroll =
      direction === "left"
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newScroll,
      behavior: "smooth",
    });
  };

  const latestProjects = projects
    .sort((a, b) => b.id - a.id)
    .slice(0, maxReviewInterior);

  return (
    <div className="max-section-width comparison-section">
      {projects.length <= 1 ? null : (
        <>
          {/* Slide buttons */}
          <button
            className="comparison-left-button primary-button"
            onClick={() => scroll("left")}
            aria-label="Scroll Left"
          >
            <span className="material-symbols-rounded left-arrow">
              arrow_forward_ios
            </span>
          </button>
          <button
            className="comparison-right-button primary-button"
            onClick={() => scroll("right")}
            aria-label="Scroll Right"
          >
            <span className="material-symbols-rounded">arrow_forward_ios</span>
          </button>
        </>
      )}

      <p className="comparison-section-title text-uppercase primary-text-color">
        Latest projects
      </p>

      {/* Slide */}
      <div ref={scrollRef} className="comparison-outer-container">
        <div
          className="comparison-slide-container"
          style={{ width: `${100 * reviewInteriorLenght}%` }}
        >
          {latestProjects.map((project: IProject) => (
            <div key={project.id} className="comparison-project-container">
              <div className="comparison-images-container">
                {isDesktop ? (
                  <>
                    <h4 className="comparison-title">{project.title}</h4>
                  </>
                ) : null}
                <ShowTransformationImages reviewImages={project.reviewImages} />
              </div>

              <div className="comparison-text-content">
                {isDesktop ? (
                  <>
                    <div>
                      <p className="text-medium text-bold">
                        Client's challenge
                      </p>
                      <p className="text-small">"{project.clientChallenge}"</p>
                    </div>
                    <div>
                      <p className="text-medium text-bold">Result</p>
                      <p className="text-small">"{project.clientResult}"</p>
                    </div>
                  </>
                ) : (
                  <>
                    <h4 className="comparison-title">{project.title}</h4>
                  </>
                )}

                <Link
                  className="text-uppercase text-small"
                  to={`/interior/${project.id}`}
                >
                  See more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
