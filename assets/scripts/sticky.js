window.addEventListener("scroll", function () {
  const stickyNav = document.getElementById("stickyNav");
  const hero = document.getElementById("hero");

  if (window.scrollY > hero.clientHeight) {
    stickyNav.style.display = "flex";
  } else {
    stickyNav.style.display = "none";
  }
});
