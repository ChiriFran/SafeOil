document.addEventListener("DOMContentLoaded", () => {
  const elementsToObserve = [
    { id: "#filosofiaText", animationClass: "animate-filosofia" },
    { id: "#infoEmail", animationClass: "animate-info" },
    { id: "#infoPhone", animationClass: "animate-info" },
    { id: "#infoAddress", animationClass: "animate-info" },
    { id: "#econCircularIlustracion", animationClass: "econCircularIlustracionAnim", targetId: "#econCircularImg" }
  ];

  const valoresIcons = document.querySelectorAll(".valoresIcon");

  const observerOptions = { root: null, rootMargin: "0px", threshold: 0.3 };
  const iconObserverOptions = { root: null, rootMargin: "0px", threshold: 0.6 };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const animationClass = entry.target.dataset.animationClass;
        const targetElement = entry.target.querySelector(entry.target.dataset.targetId) || entry.target;
        targetElement.classList.remove(animationClass);
        void targetElement.offsetWidth;
        targetElement.classList.add(animationClass);
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  const iconObserver = new IntersectionObserver(observerCallback, iconObserverOptions);

  elementsToObserve.forEach((elementInfo) => {
    const element = document.querySelector(elementInfo.id);
    if (element) {
      element.dataset.animationClass = elementInfo.animationClass;
      if (elementInfo.targetId) element.dataset.targetId = elementInfo.targetId;
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
          const targetElement = element.querySelector(elementInfo.targetId) || element;
          targetElement.classList.add(elementInfo.animationClass);
        }
      }
    });

    valoresIcons.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (
        rect.top < window.innerHeight * 0.6 &&
        rect.bottom > window.innerHeight * 0.4
      ) {
        element.classList.add("animate-icon");
      }
    });
  };

  checkVisibilityOnLoad();

  const heroContent = document.querySelector(".hero-content");
  const imgLeft = document.querySelector(".img-left");
  const imgRight = document.querySelector(".img-right");

  if (!imgLeft || !imgRight || !heroContent) return;

  // Estado inicial: fuera de pantalla
  imgLeft.classList.add("enter-from-left");
  imgRight.classList.add("enter-from-right");

  const showHeroImages = () => {
    imgLeft.classList.remove("enter-from-left", "slide-out-left");
    imgRight.classList.remove("enter-from-right", "slide-out-right");

    requestAnimationFrame(() => {
      imgLeft.classList.add("visible-left");
      imgRight.classList.add("visible-right");
    });
  };

  const hideHeroImages = () => {
    imgLeft.classList.remove("visible-left");
    imgRight.classList.remove("visible-right");

    imgLeft.classList.add("slide-out-left");
    imgRight.classList.add("slide-out-right");
  };

  const isHeroVisible = () => {
    const rect = heroContent.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  };

  // Si está visible al cargar, mostrar
  if (isHeroVisible()) {
    showHeroImages();
  }

  // Observer para manejar scroll
  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        showHeroImages();
      } else {
        hideHeroImages();
      }
    });
  }, { threshold: 0.1 });

  heroObserver.observe(heroContent);

  /* === Animar background-size de serviciosGrid::before === */
  const serviciosGrid = document.querySelector("#serviciosGrid");
  const serviciosGridObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        serviciosGrid.classList.remove("small-bg");
        serviciosGrid.classList.add("normal-bg");
      } else {
        serviciosGrid.classList.remove("normal-bg");
        serviciosGrid.classList.add("small-bg");
      }
    });
  }, { threshold: 0.3 });

  if (serviciosGrid) {
    serviciosGrid.classList.add("small-bg"); // Estado inicial reducido
    serviciosGridObserver.observe(serviciosGrid);
  }

  /* Toggle button and visibility logic */
  const serviciosItems = document.querySelectorAll(".serviciosItem");

  const serviciosObserverOptions = { root: null, rootMargin: "0px", threshold: 1 };

  const serviciosObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const serviciosItem = entry.target;
        const toggleButton = serviciosItem.querySelector(".toggleButton");

        if (toggleButton) {
          toggleButton.click();
          toggleButton.style.opacity = "1";
        }

        observer.unobserve(serviciosItem);
      }
    });
  };

  const serviciosObserver = new IntersectionObserver(serviciosObserverCallback, serviciosObserverOptions);

  serviciosItems.forEach((item) => {
    if (item) {
      serviciosObserver.observe(item);
    }
  });

  /* Handling manual toggle */
  const handleToggle = (event) => {
    const button = event.target;
    const targetSelector = button.dataset.toggleTarget;
    const targetElement = document.querySelector(targetSelector);

    if (targetElement) {
      if (targetElement.classList.contains("expanded")) {
        targetElement.classList.remove("expanded");
        button.textContent = "+";
      } else {
        targetElement.classList.add("expanded");
        button.textContent = "-";
      }
      serviciosObserver.observe(button.closest(".serviciosItem"));
    }
  };

  document.querySelectorAll(".toggleButton").forEach((button) => {
    button.addEventListener("click", handleToggle);
  });

  /* Animar blockchainItems */
  const blockchainItems = document.querySelectorAll(".blockchainItem");
  const blockchainObserverOptions = { root: null, rootMargin: "0px", threshold: 0.8 };

  const blockchainObserverCallback = (entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const blockchainItem = entry.target;

        setTimeout(() => {
          blockchainItem.classList.add("animate-blockchain");
        }, index * 250);

        observer.unobserve(blockchainItem);
      }
    });
  };

  const blockchainObserver = new IntersectionObserver(blockchainObserverCallback, blockchainObserverOptions);

  blockchainItems.forEach((item) => {
    if (item) {
      blockchainObserver.observe(item);
    }
  });
});


