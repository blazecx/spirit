function scrollTo(element) {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: "smooth",
  });
}

var button = document.querySelector(".btn");
var footer = document.querySelector("#bottom");

button.addEventListener("click", () => {
  scrollTo(footer);
});
