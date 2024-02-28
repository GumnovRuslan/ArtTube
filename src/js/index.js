function isTrue(el, func) {
  if (!!el) func(el);
}
const filter = document.getElementById("filter");
const filterBtnComplete = filter.querySelector(".filter__btn-complete");
const filterBtnReset = filter.querySelector(".filter__btn-reset");

// filterBtnComplete.addEventListener("click", filterComplete);
// filterBtnReset.addEventListener("click", filterClean);

let checkbox = document.getElementById("checkbox-menu");
checkbox.addEventListener("input", (e) => {
  if (window.innerWidth < 480) document.body.style.position = e.target.checked ? "fixed" : "static";
});

const sectionEvent = document.querySelector(".event-full");

isTrue(sectionEvent, btnMore);

function btnMore(el) {
  const container = el.querySelector(".event-full__description-inner");
  const containerHeight = container.offsetHeight;
  const btnContainer = el.querySelector(".event-full__description-shadow");
  const btn = el.querySelector(".event-full__description-btn");
  if (window.innerWidth <= 480) {
    container.style.height = "300px";

    btn.addEventListener("click", (e) => {
      if (container.style.height == "300px") {
        container.style.height = `${containerHeight}px`;
        btn.querySelector(".event-full__description-btn-text").textContent = "Скрыть";
        btnContainer.style.boxShadow = "none";
        btnContainer.style.bottom = "0";
      } else {
        container.style.height = "300px";
        btn.querySelector(".event-full__description-btn-text").textContent = "Читать все";
        btnContainer.style.boxShadow = "0 0px 30px 20px #ffffff";
        btnContainer.style.bottom = "10px";
      }
    });
  }
}
