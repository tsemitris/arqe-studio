export const BookDesigner = () => {
  document.title = "Book designer - Arqé Studio";
  window.scrollTo(0, 0);
  return (
    <>
      <div className="max-section-width book-designer-section">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfNJgiqzr2nMz34OolRvQPgjXr9gUeiaJLlvx9_4pLlfeYRSQ/viewform?embedded=true"
          width="640"
          height="382"
        >
          Loading...
        </iframe>
      </div>
    </>
  );
};
