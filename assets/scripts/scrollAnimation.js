document.addEventListener("DOMContentLoaded", () => {
  const leftHero = document.querySelector("#leftHero");
  const rightHero = document.querySelector("#rightHero");
  const mobileHero = document.querySelector("#mobileHero");
  const filosofiaText = document.querySelector("#filosofiaText");
  const valoresIcons = document.querySelectorAll(".valoresIcon");
  const infoEmail = document.querySelector("#infoEmail");
  const infoPhone = document.querySelector("#infoPhone");
  const infoAddress = document.querySelector("#infoAddress");

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
        if (entry.target.id === "leftHero") {
          entry.target.classList.remove("animate-left");
          void entry.target.offsetWidth;
          entry.target.classList.add("animate-left");
        } else if (entry.target.id === "rightHero") {
          entry.target.classList.remove("animate-right");
          void entry.target.offsetWidth;
          entry.target.classList.add("animate-right");
        } else if (entry.target.id === "mobileHero") {
          entry.target.classList.remove("animate-mobile");
          void entry.target.offsetWidth;
          entry.target.classList.add("animate-mobile");
        } else if (entry.target.id === "filosofiaText") {
          entry.target.classList.remove("animate-filosofia");
          void entry.target.offsetWidth;
          entry.target.classList.add("animate-filosofia");
        } else if (entry.target.classList.contains("valoresIcon")) {
          entry.target.classList.remove("animate-icon");
          void entry.target.offsetWidth;
          entry.target.classList.add("animate-icon");
        } else if (
          entry.target.id === "infoEmail" ||
          entry.target.id === "infoPhone" ||
          entry.target.id === "infoAddress"
        ) {
          entry.target.classList.remove("animate-info");
          void entry.target.offsetWidth;
          entry.target.classList.add("animate-info");
        }
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  const iconObserver = new IntersectionObserver(
    observerCallback,
    iconObserverOptions
  );

  [leftHero, rightHero, mobileHero, filosofiaText].forEach((element) => {
    if (element) observer.observe(element);
  });

  valoresIcons.forEach((element) => {
    if (element) iconObserver.observe(element);
  });

  [infoEmail, infoPhone, infoAddress].forEach((element) => {
    if (element) iconObserver.observe(element);
  });

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
    [infoEmail, infoPhone, infoAddress].forEach((element) => {
      if (element) {
        const rect = element.getBoundingClientRect();
        if (
          rect.top < window.innerHeight * 0.6 &&
          rect.bottom > window.innerHeight * 0.4
        ) {
          element.classList.add("animate-info");
        }
      }
    });
  };

  checkVisibilityOnLoad();
});
