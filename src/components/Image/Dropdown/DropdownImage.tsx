import { useState } from "react";
import type { IRoomData } from "../../../models/IRoomData";
import { ShowZoomImage } from "../Zoom/ShowZoomImage";

interface IDropdownImageProp {
  room: IRoomData;
}

export const DropdownImage = ({ room }: IDropdownImageProp) => {
  const [dropdownOpen, setDropdownOpen] = useState(true);
  const [bigImage, setBigImage] = useState(room.images[0]);
  const [zoomImage, setZoomImage] = useState(false);
  document.body.style.overflow = zoomImage ? "hidden" : "auto";

  return (
    <>
      {zoomImage ? (
        <ShowZoomImage
          image={bigImage}
          onClickClose={() => setZoomImage(false)}
        />
      ) : null}

      {/* Title */}
      <button
        className={`dropdown-title-btn ${
          dropdownOpen ? "dropdown-title-btn-open" : undefined
        }`}
        onClick={() => setDropdownOpen((prev) => !prev)}
      >
        <div className="dropdown-title text-medium">
          <span className="material-symbols-rounded">{room.icon}</span>
          {room.name}
        </div>
        <span
          className={`material-symbols-rounded ${
            dropdownOpen ? "dropdown-icon-open" : undefined
          }`}
        >
          keyboard_arrow_down
        </span>
      </button>

      {/* Image */}
      <div
        className={`dropdown-content-container ${
          dropdownOpen ? "dropdown-content-container-open" : undefined
        }`}
      >
        <img
          className="dropdown-big-image"
          src={bigImage}
          onError={(e) =>
            (e.currentTarget.src = "images/no-found/no-found.webp")
          }
          alt="Big image of the interior"
          width={100}
          height={100}
          loading="lazy"
          decoding="async"
          onClick={() => setZoomImage(true)}
        />
        <div className="dropdown-images-preview">
          {room.images.map((image, index) => (
            <img
              key={`${room.name}-${index}`}
              className={bigImage === image ? "active-image" : undefined}
              src={image}
              onError={(e) =>
                (e.currentTarget.src = "images/no-found/no-found.webp")
              }
              alt={`image of ${room.name}`}
              width={100}
              height={100}
              onClick={() => setBigImage(image)}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </div>
    </>
  );
};
