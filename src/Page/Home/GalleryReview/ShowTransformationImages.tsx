import { useState } from "react";
import { ShowZoomImage } from "../../../components/Image/Zoom/ShowZoomImage";

interface IShowTransformationImagesProp {
  reviewImages: string[];
}

export const ShowTransformationImages = ({
  reviewImages,
}: IShowTransformationImagesProp) => {
  const [status, setStatus] = useState(1);
  const [zoomImage, setZoomImage] = useState(false);
  document.body.style.overflow = zoomImage ? "hidden" : "auto";

  return (
    <>
      {zoomImage ? (
        <ShowZoomImage
          image={status == 1 ? reviewImages[0] : reviewImages[1]}
          onClickClose={() => setZoomImage(false)}
        />
      ) : null}

      {/* Before / After Buttons */}
      <div className="comparison-buttons-container">
        <button
          className={`text-uppercase no-background-button ${
            status == 0
              ? "active-comparison-button"
              : "no-active-comparison-button"
          } remove-button-padding text-small`}
          onClick={() => setStatus(0)}
        >
          Before
        </button>
        <button
          className={`text-uppercase no-background-button ${
            status == 1
              ? "active-comparison-button"
              : "no-active-comparison-button"
          } remove-button-padding text-small`}
          onClick={() => setStatus(1)}
        >
          After
        </button>
      </div>

      {/* Images */}
      <div className="review-image-container">
        <img
          className="project-review-image"
          src={status == 1 ? reviewImages[0] : reviewImages[1]}
          alt={`review image of the interior ${
            status == 1 ? "after the renovation" : "before the renovation"
          }`}
          width={100}
          height={100}
          onClick={() => setZoomImage(true)}
        />
      </div>
    </>
  );
};
