document.addEventListener("DOMContentLoaded", () => {
  const elementsToObserve = [
    { id: "#leftHero", animationClass: "animate-left" },
    { id: "#rightHero", animationClass: "animate-right" },
    { id: "#mobileHero", animationClass: "animate-mobile" },
    { id: "#filosofiaText", animationClass: "animate-filosofia" },
    { id: "#infoEmail", animationClass: "animate-info" },
    { id: "#infoPhone", animationClass: "animate-info" },
    { id: "#infoAddress", animationClass: "animate-info" },
  ];

  const valoresIcons = document.querySelectorAll(".valoresIcon");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  };

  const iconObserverOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const animationClass = entry.target.dataset.animationClass;
        entry.target.classList.remove(animationClass);
        void entry.target.offsetWidth;
        entry.target.classList.add(animationClass);
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  const iconObserver = new IntersectionObserver(
    observerCallback,
    iconObserverOptions
  );

  elementsToObserve.forEach((elementInfo) => {
    const element = document.querySelector(elementInfo.id);
    if (element) {
      element.dataset.animationClass = elementInfo.animationClass;
      observer.observe(element);
    }
  });

  valoresIcons.forEach((element) => {
    if (element) {
      element.dataset.animationClass = "animate-icon";
      iconObserver.observe(element);
    }
  });

  const checkVisibilityOnLoad = () => {
    elementsToObserve.forEach((elementInfo) => {
      const element = document.querySelector(elementInfo.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          element.classList.add(elementInfo.animationClass);
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
