window.addEventListener("scroll", () => {
  const header = document.getElementById("headerContainer");
  const eightyVhInPx = window.innerHeight * 0.8; // 80vh en px
  const shouldBeScrolled = window.scrollY > eightyVhInPx;

  header.classList.toggle("scrolled", shouldBeScrolled);
});
