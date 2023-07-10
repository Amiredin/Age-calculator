"use strict";

const dayEl = document.querySelector(".day-input-value");
const monthEl = document.querySelector(".month-input-value");
const yearEl = document.querySelector(".year-input-value");
const labelDay = document.querySelector(".label-day");
const labelMonth = document.querySelector(".label-month");
const labelYear = document.querySelector(".label-year");
const dayValueEl = document.querySelector(".days-value");
const monthValueEl = document.querySelector(".months-value");
const yearValueEl = document.querySelector(".years-value");
const errorMessageDay = document.querySelector(".error-message-day");
const errorMessageMonth = document.querySelector(".error-message-month");
const errorMessageYear = document.querySelector(".error-message-year");
const button = document.querySelector(".button");

const calcAge = function (day, month, year) {
  const now = new Date();
  const currentDay = now.getDate();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();

  let calcDay = currentDay - day;
  let calcMonth = currentMonth - month;
  let calcYear = currentYear - year;

  console.log(calcDay);
  console.log(calcMonth);
  console.log(calcMonth--);


  if (calcDay < 0) {
    // calcMonth--;
    const daysInPreviousMonth = new Date(
      currentYear,
      currentMonth,
      0
    ).getDate();

    console.log(daysInPreviousMonth)

    calcDay = daysInPreviousMonth + calcDay;
  }

  console.log(calcDay);

  if (calcMonth < 0) {
    calcYear--;
    calcMonth += 12;
  }

  dayValueEl.textContent = calcDay;
  monthValueEl.textContent = calcMonth;
  yearValueEl.textContent = calcYear;
};

button.addEventListener("click", function (e) {
  e.preventDefault();
  const now = new Date();
  const currentYear = now.getFullYear();

  const day = +dayEl.value;
  const month = +monthEl.value;
  const year = +yearEl.value;

  if (day <= 0 || day > 31) {
    errorMessageDay.textContent = "Must be a valid day";
    errorMessageDay.classList.remove("hidden");
    dayEl.classList.add("input-border");
    labelDay.classList.add("error");
  } else {
    errorMessageDay.classList.add("hidden");
    dayEl.classList.remove("input-border");
    labelDay.classList.remove("error");
  }

  if (month <= 0 || month > 12) {
    errorMessageMonth.textContent = "Must be a valid month";
    errorMessageMonth.classList.remove("hidden");
    monthEl.classList.add("input-border");
    labelMonth.classList.add("error");
  } else {
    errorMessageMonth.classList.add("hidden");
    monthEl.classList.remove("input-border");
    labelMonth.classList.remove("error");
  }

  if (!year || year > currentYear) {
    errorMessageYear.textContent = "Must be in the past";
    errorMessageYear.classList.remove("hidden");
    yearEl.classList.add("input-border");
    labelYear.classList.add("error");
  } else {
    errorMessageYear.classList.add("hidden");
    yearEl.classList.remove("input-border");
    labelYear.classList.remove("error");
  }

  if (day && month && year) {
    calcAge(day, month, year);
  }
});
