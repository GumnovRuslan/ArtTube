import { map } from "./includes/map";

map();

// function isTrue(el, func) {
//   if (!!el) func(el);
// }

// const filter = document.getElementById("filter");
// const filterBtnComplete = filter.querySelector(".filter__btn-complete");
// const filterBtnReset = filter.querySelector(".filter__btn-reset");

// filterBtnComplete.addEventListener("click", filterComplete);
// filterBtnReset.addEventListener("click", filterClean);

let checkbox = document.getElementById("checkbox-menu");
checkbox.addEventListener("input", (e) => {
  if (window.innerWidth < 768) document.body.style.position = e.target.checked ? "fixed" : "static";
});
