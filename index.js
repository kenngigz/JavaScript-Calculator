"use strict";
const inputNumber = document.querySelectorAll(".btns .num");
const inputOperators = document.querySelectorAll(".btns .ope");
const clear = document.querySelector(".btns .clr");
const equalTo = document.querySelector(".btns .equalTo .eql");
const deleteNum = document.querySelector(".btns .equalTo .del");

const display = document.querySelector(".display");

inputNumber.forEach(function (i) {
  i.addEventListener("click", function () {
    const pressedKey = i.innerHTML;
    // console.log(display.innerHTML.length);

    const inputLength = display.innerHTML.length;
    inputLength <= 12
      ? (display.innerHTML += `${pressedKey}`)
      : (display.innerHTML = inputLength.toExponential(4));
  });
});
inputOperators.forEach(function (i) {
  i.addEventListener("click", function () {
    const pressedOpe = i.innerHTML;
    display.innerHTML += `${pressedOpe}`;
  });
});

clear.addEventListener("click", function () {
  display.innerHTML = "";
});

deleteNum.addEventListener("click", function () {
  const newNumber = display.innerHTML.slice(0, -1);
  display.innerHTML = newNumber;
});
equalTo.addEventListener("click", function () {
  const figures = display.innerHTML;
  const answer = eval(figures);
  display.innerHTML = answer;
});
