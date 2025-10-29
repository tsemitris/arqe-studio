interface IStepByStepCardProps {
  image: string;
  imageAlt: string;
  icon: string;
  title: string;
  description: string;
  position: "left" | "right";
}

export const StepByStepCard = ({
  image,
  imageAlt,
  icon,
  title,
  description,
  position = "left",
}: IStepByStepCardProps) => {
  return (
    <>
      <div
        className={`step-by-step-card-container ${
          position === "left" ? "left-image" : "right-image"
        }`}
      >
        <img
          src={image}
          alt={imageAlt}
          width={100}
          height={100}
          loading="lazy"
          decoding="async"
        />
        <div className="step-by-step-card-content">
          <div>
            <h4 className="step-by-step-card-title">
              <span className="material-symbols-rounded icon">{icon}</span>
              {title}
            </h4>
            <p className="text-medium">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
