import { StepByStepCard } from "../../../../components/Section/StepByStepCard/StepByStepCard";

export const HowItWork = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <section className="how-it-work-section max-section-width">
        <div className="text-center">
          <h4>How we transform spaces</h4>
          <p className="text-medium">
            Every great design starts with understanding your lifestyle. <br />
            Our process is simple and built to turn your ideas into a home
            you’ll love.
          </p>
        </div>

        <StepByStepCard
          image="/images/home/cards/consulter.webp"
          imageAlt={
            "Woman with white shirt sitting in fron of a computer screen"
          }
          icon={"contacts_product"}
          title={"Consultation"}
          description={
            "Start with a quick chat ( online orin person ) to understand your space and goals."
          }
          position={"left"}
        />

        <StepByStepCard
          image="/images/home/cards/people-talking.webp"
          imageAlt={
            "A group sits indoors on sofas, conversing in a relaxed setting with palm trees visible through large windows, suggesting a coastal location."
          }
          icon={"edit_document"}
          title={"Agreement"}
          description={` Once everything is discussed, we prepare an agreement that outlines the project details, timeline and budget. When signed, we’re officially ready to start.`}
          position={"right"}
        />

        <StepByStepCard
          image="/images/home/cards/people-standing.webp"
          imageAlt={
            "A group of four animated characters stands indoors. They wear eclectic outfits, showcasing diverse styles like suspenders, suits, and bold patterns, creating a playful and quirky mood."
          }
          icon={"chair"}
          title={"Decoration"}
          description={`Our design team gets to work. Planning layout, selecting materials and decorating your space with care and creativity.`}
          position={"left"}
        />

        <StepByStepCard
          image="/images/home/cards/people-argue.webp"
          imageAlt={
            "Three animated men in a tense discussion, wearing casual and semi-formal attire. One gestures emphatically; another listens intently. The setting is subdued."
          }
          icon={"house"}
          title={"Review & Feedback"}
          description={`When the decorate is complete, we walk through the result together. You can  share your thoughts and any final  adjustments you’d like to make.`}
          position={"right"}
        />

        <StepByStepCard
          image="/images/home/cards/franks-living-room.webp"
          imageAlt={
            "Three animated men in a tense discussion, wearing casual and semi-formal attire. One gestures emphatically; another listens intently. The setting is subdued."
          }
          icon={"cheer"}
          title={"Completion"}
          description={`After your approval, the project is finalized. Your new, beautifully designed space is ready to enjoy!`}
          position={"left"}
        />
      </section>
    </>
  );
};
