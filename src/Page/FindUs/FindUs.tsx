export const FindUs = () => {
  return (
    <>
      <section className="find-us-section">
        <div className="find-us-hero"></div>

        <div className="find-us-content max-section-width">
          <div>
            <h1 className="text-center text-uppercase">Find Us</h1>
            <p className="text-center text-uppercase">
              You’re more than welcome to stop by anytime.
            </p>
          </div>

          <div className="find-us-content-inner-container">
            <div
              className="office-location-image"
              style={{
                backgroundImage: "url(images/find-us/libertyCiryOffice.webp)",
              }}
            ></div>
            <p className="text-medium">
              <span className="text-uppercase text-small text-bold text-underline">
                Address
              </span>
              122 Garnet Street, <br /> Middle Park East, <br /> Algonquin,
              Liberty City
            </p>
          </div>

          <div className="find-us-content-inner-container">
            <div
              className="office-location-image"
              style={{
                backgroundImage: "url(images/find-us/losSantosOfficer.webp)",
              }}
            ></div>
            <p className="text-medium">
              <span className="text-uppercase text-small text-bold text-underline">
                Address
              </span>
              212 Portola Drive, <br /> Rockford Hills, <br /> Los Santos, San
              Andreas
            </p>
          </div>

          <div className="find-us-content-inner-container">
            <div
              className="office-location-image"
              style={{
                backgroundImage:
                  "url(images/find-us/madridOfficeLocation.webp)",
              }}
            ></div>
            <p className="text-medium">
              <span className="text-uppercase text-small text-bold text-underline">
                Address
              </span>
              Calle de Serrano 128, <br /> Salamanca, <br /> Madrid, Spain
            </p>
          </div>

          <div className="find-us-content-inner-container">
            <div
              className="office-location-image"
              style={{
                backgroundImage: "url(images/find-us/parisOfficeLocation.webp)",
              }}
            ></div>
            <p className="text-medium">
              <span className="text-uppercase text-small text-bold text-underline">
                Address
              </span>
              27 Rue de Rivoli, <br /> 1er Arrondissement, <br /> Paris, France
            </p>
          </div>
        </div>
      </section>
      ;
    </>
  );
};
