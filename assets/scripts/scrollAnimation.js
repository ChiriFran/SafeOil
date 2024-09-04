document.addEventListener("DOMContentLoaded", () => {
  const elementsToObserve = [
    { id: "#leftHero", animationClass: "animate-left" },
    { id: "#rightHero", animationClass: "animate-right" },
    { id: "#mobileHero", animationClass: "animate-mobile" },
    { id: "#filosofiaText", animationClass: "animate-filosofia" },
    { id: "#infoEmail", animationClass: "animate-info" },
    { id: "#infoPhone", animationClass: "animate-info" },
    { id: "#infoAddress", animationClass: "animate-info" },
    { id: "#econCircularIlustracion", animationClass: "econCircularIlustracionAnim", targetId: "#econCircularImg" }
  ];

  const valoresIcons = document.querySelectorAll(".valoresIcon");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
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

  // Toggle button and visibility logic
  const serviciosItems = document.querySelectorAll(".serviciosItem");

  const serviciosObserverOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  };

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

  // Handling manual toggle
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

  // New code for #lubricantes24 and #lubricantes29 animations
  const lubricantesContainer = document.querySelector("#lubricantesContainer");

  const containerObserverOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const containerObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const lubricantes24 = document.querySelector("#lubricantes24");
        const lubricantes29 = document.querySelector("#lubricantes29");

        if (lubricantes24) {
          lubricantes24.classList.add("animate-lubricantes");
        }

        if (lubricantes29) {
          lubricantes29.classList.add("animate-lubricantes-29");
        }

        observer.unobserve(entry.target);
      }
    });
  };

  const containerObserver = new IntersectionObserver(containerObserverCallback, containerObserverOptions);

  if (lubricantesContainer) {
    containerObserver.observe(lubricantesContainer);
  }

  // Nuevo código para animar blockchainItems
  const blockchainItems = document.querySelectorAll(".blockchainItem");
  const blockchainObserverOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.8,
  };

  const blockchainObserverCallback = (entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const blockchainItem = entry.target;

        setTimeout(() => {
          blockchainItem.classList.add("animate-blockchain");
        }, index * 250); // 200ms de delay entre cada uno

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
