import { useLoaderData } from "react-router-dom";
import type { IProjectExt } from "../../models/IProjectExt";
import { ShowTransformationImages } from "../Home/GalleryReview/ShowTransformationImages";
import { RoomImages } from "../../components/Image/Dropdown/DropdownRoomImages";

export const Interior = () => {
  window.scrollTo(0, 0);
  const aboutInterior = useLoaderData() as IProjectExt;

  return (
    <>
      {aboutInterior ? (
        <section className="about-interior-section">
          <div className="about-interior-upper-container max-section-width">
            {/* Title */}
            <div className="about-interior-title-container">
              <h4 className="text-center">{aboutInterior.title}</h4>
              <div className="under-title-container">
                <p>Decorator: {aboutInterior.decorDesigner}</p>
                <p>Publish date: {aboutInterior.publishDate}</p>
              </div>
            </div>
            {/* Hero */}
            <div className="about-interior-hero">
              <ShowTransformationImages
                reviewImages={aboutInterior.reviewImages}
              />
            </div>
          </div>

          <div className="about-interior-lower-container">
            <div className="max-section-width about-interior-container">
              <h4 className="about-interior-lower-title">Final product</h4>
              <RoomImages data={aboutInterior} />
            </div>
          </div>
        </section>
      ) : (
        <>Interior couldn't find</>
      )}
    </>
  );
};
