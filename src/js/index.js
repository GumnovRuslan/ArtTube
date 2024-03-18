import { map } from "./includes/map";
import VanillaCalendar from "vanilla-calendar-pro";

const correctData = (data, sign = ".") => data.split("-").reverse().join(sign);

// map();

// function isTrue(el, func) {
//   if (!!el) func(el);
// }

// const filter = document.getElementById("filter");
// const filterBtnComplete = filter.querySelector(".filter__btn-complete");
// const filterBtnReset = filter.querySelector(".filter__btn-reset");

// filterBtnComplete.addEventListener("click", filterComplete);
// filterBtnReset.addEventListener("click", filterClean);

let options = {
  type: "multiple",
  months: 4,
  jumpMonths: 1,
  settings: {
    lang: "ru",
    range: {
      disablePast: true,
      disableGaps: true,
    },
    selection: {
      day: "multiple-ranged",
    },
    visibility: {
      daysOutside: false,
      theme: "light",
    },
  },
  actions: {
    clickDay(event, self) {
      window.calendarInputFirst.value = `${correctData(self.selectedDates[0])}`;
      window.calendarInputSecond.value = `${correctData(self.selectedDates.at(-1))}`;
    },
    clickArrow(event, self) {
      console.log(self.selectedYear, self.selectedMonth);
    },
  },
};

let calendar = new VanillaCalendar("#calendar", options);
calendar.init();
