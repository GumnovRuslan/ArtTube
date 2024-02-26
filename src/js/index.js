import { filterComplete, filterClean } from "../js/includes/filter.js";

const filter = document.getElementById("filter");
const filterBtnCompleter = filter.querySelector(".filter__btn-complete");
const filterBtnReset = filter.querySelector(".filter__btn-reset");

filterBtnCompleter.addEventListener("click", filterComplete);
filterBtnReset.addEventListener("click", filterClean);

let checkbox = document.getElementById("checkbox-menu");
checkbox.addEventListener("input", (e) => {
  if (window.innerWidth < 480) document.body.style.position = e.target.checked ? "fixed" : "static";
});
