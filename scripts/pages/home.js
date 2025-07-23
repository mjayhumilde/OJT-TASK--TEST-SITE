// gallary navs
const buttons = document.querySelectorAll(".gall-navs");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("gall-nav-active"));
    btn.classList.add("gall-nav-active");
  });
});
