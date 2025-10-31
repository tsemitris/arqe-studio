import { useLoaderData, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import type { IProject } from "../../../models/IProject";

interface IGalleryProps {
  length: number;
  projects: IProject[];
}

export const Gallery = () => {
  useEffect(() => {
    document.title = "Gallery - Arqé Studio";
    window.scrollTo(0, 0);
  }, []);

  const { projects } = useLoaderData() as IGalleryProps;
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(20);

  const navigate = useNavigate();
  const navigateTo = (projectId: number) => navigate(`/interior/${projectId}`);

  // Filter, sort by id descending, and slice in one go
  const visibleProjects = projects
    .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => b.id - a.id) // latest first
    .slice(0, visibleCount);

  return (
    <section className="gallery-section">
      <div className="hero-gallery-container">
        <h1 className="text-uppercase secondary-text-color">Gallery</h1>
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="max-section-width gallery-projects-container">
        {visibleProjects.length > 0 ? (
          visibleProjects.map((project) => (
            <button
              key={project.id}
              className="project-container"
              style={{ backgroundImage: `url(${project.reviewImages[0]})` }}
              onClick={() => navigateTo(project.id)}
            >
              <div>
                <p className="text-small">{project.publishDate}</p>
                <h4 className="text-left">{project.title}</h4>
              </div>
            </button>
          ))
        ) : (
          <p>No projects found.</p>
        )}
      </div>

      {visibleCount < projects.length && (
        <div className="max-section-width load-more-container">
          <button
            onClick={() => setVisibleCount((prev) => prev + visibleCount)}
            className="primary-button text-uppercase"
          >
            Load more
          </button>
        </div>
      )}
    </section>
  );
};
