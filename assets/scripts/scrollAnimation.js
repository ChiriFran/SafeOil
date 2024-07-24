document.addEventListener("DOMContentLoaded", () => {
  const heroSections = document.querySelectorAll("#heroContainer > div");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1, // Trigger animation when 10% of the element is in view
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target); // Stop observing after the first time element is in view
      }
    });
  }, observerOptions);

  heroSections.forEach((section) => {
    observer.observe(section);
  });
});
