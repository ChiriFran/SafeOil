
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
