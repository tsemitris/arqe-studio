import { Hero } from "./Hero/Hero";
import { HowItWork } from "./Main/HowItWork/HowItWork";
import { Review } from "./Main/Review/Review";
import { ComparisonSection } from "./GalleryReview/ComparisonSection";

export const Home = () => {
  document.title = "Home - Arqé Studio";
  window.scrollTo(0, 0);

  return (
    <>
      <Hero />
      <HowItWork />
      <Review />
      <ComparisonSection />
    </>
  );
};
