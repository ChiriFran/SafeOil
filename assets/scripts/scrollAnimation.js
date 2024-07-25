document.addEventListener("DOMContentLoaded", () => {
  const leftHero = document.querySelector("#leftHero");
  const rightHero = document.querySelector("#rightHero");
  const mobileHero = document.querySelector("#mobileHero");
  const filosofiaText = document.querySelector("#filosofiaText");
  const valoresIcons = document.querySelectorAll(".valoresIcon"); // Select all images

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6, // Trigger animation when 60% of the element is in view
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.id === "leftHero") {
          entry.target.classList.remove("animate-left");
          void entry.target.offsetWidth; // Trigger reflow to restart animation
          entry.target.classList.add("animate-left");
        } else if (entry.target.id === "rightHero") {
          entry.target.classList.remove("animate-right");
          void entry.target.offsetWidth; // Trigger reflow to restart animation
          entry.target.classList.add("animate-right");
        } else if (entry.target.id === "mobileHero") {
          entry.target.classList.remove("animate-mobile");
          void entry.target.offsetWidth; // Trigger reflow to restart animation
          entry.target.classList.add("animate-mobile");
        } else if (entry.target.id === "filosofiaText") {
          entry.target.classList.remove("animate-filosofia");
          void entry.target.offsetWidth; // Trigger reflow to restart animation
          entry.target.classList.add("animate-filosofia");
        } else if (entry.target.classList.contains("valoresIcon")) {
          entry.target.classList.remove("animate-icon");
          void entry.target.offsetWidth; // Trigger reflow to restart animation
          entry.target.classList.add("animate-icon");
        }
        observer.unobserve(entry.target); // Stop observing after the first time element is in view
      }
    });
  }, observerOptions);

  [leftHero, rightHero, mobileHero, filosofiaText, ...valoresIcons].forEach(
    (element) => {
      if (element) observer.observe(element);
    }
  );

  // Apply animations on load if elements are already in view
  const checkVisibilityOnLoad = () => {
    [leftHero, rightHero, mobileHero, filosofiaText, ...valoresIcons].forEach(
      (element) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            if (element.id === "leftHero") {
              element.classList.add("animate-left");
            } else if (element.id === "rightHero") {
              element.classList.add("animate-right");
            } else if (element.id === "mobileHero") {
              element.classList.add("animate-mobile");
            } else if (element.id === "filosofiaText") {
              element.classList.add("animate-filosofia");
            } else if (element.classList.contains("valoresIcon")) {
              element.classList.add("animate-icon");
            }
          }
        }
      }
    );
  };

  checkVisibilityOnLoad();
});
