document.addEventListener("DOMContentLoaded", () => {
  const leftHero = document.querySelector("#leftHero");
  const rightHero = document.querySelector("#rightHero");
  const mobileHero = document.querySelector("#mobileHero");
  const filosofiaText = document.querySelector("#filosofiaText");
  const valoresIcons = document.querySelectorAll(".valoresIcon"); // Select all images

  // Observer options for non-icon elements
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 1, // Trigger animation when 100% of the element is in view
  };

  // Observer options for icon elements
  const iconObserverOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6, // Trigger animation when 60% of the element is in view
  };

  // Observer callback function
  const observerCallback = (entries, observer) => {
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
  };

  // Create observers with different thresholds
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  const iconObserver = new IntersectionObserver(
    observerCallback,
    iconObserverOptions
  );

  // Observe non-icon elements
  [leftHero, rightHero, mobileHero, filosofiaText].forEach((element) => {
    if (element) observer.observe(element);
  });

  // Observe icon elements
  valoresIcons.forEach((element) => {
    if (element) iconObserver.observe(element);
  });

  // Apply animations on load if elements are already in view
  const checkVisibilityOnLoad = () => {
    [leftHero, rightHero, mobileHero, filosofiaText].forEach((element) => {
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
          }
        }
      }
    });
    valoresIcons.forEach((element) => {
      if (element) {
        const rect = element.getBoundingClientRect();
        if (
          rect.top < window.innerHeight * 0.6 &&
          rect.bottom > window.innerHeight * 0.4
        ) {
          element.classList.add("animate-icon");
        }
      }
    });
  };

  checkVisibilityOnLoad();
});
