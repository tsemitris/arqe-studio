interface IShowZoomImageProps {
  image: string;
  onClickClose: () => void;
}

export const ShowZoomImage = ({ image, onClickClose }: IShowZoomImageProps) => {
  return (
    <>
      <div className="zoom-image-container" onClick={onClickClose}>
        <img
          src={image}
          onError={(e) =>
            (e.currentTarget.src = "/images/no-found/no-found.webp")
          }
          alt="zoom image"
          width={100}
          height={100}
          loading="lazy"
          decoding="async"
        />
      </div>
    </>
  );
};
