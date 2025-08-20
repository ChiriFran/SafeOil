document.querySelectorAll(".serviciosItem").forEach(item => {
    item.addEventListener("click", () => {
        // En mobile solo un overlay activo a la vez
        document.querySelectorAll(".serviciosItem").forEach(card => {
            if (card !== item) card.classList.remove("active");
        });
        item.classList.toggle("active");
    });
});
