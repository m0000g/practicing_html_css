const percentage = document.querySelector("#percentage");
const total = document.querySelector("#total");
const result = document.querySelector("#result");

let percentageNumber = 0;
let totalNumber = 0;

// PERCENTAGE CALCULATION
/* const percentageNumber = Number(percentage.textContent);
const totalNumber = Number(total.textContent);
console.log((percentageNumber / 100) * totalNumber); */

const buttomCalculate = document.querySelector("#calculate");
document.querySelector("#calculate").addEventListener("click", function () {
  percentageNumber = Number(document.querySelector("#percentage").value);
  totalNumber = Number(document.querySelector("#total").value);
  result.textContent = (percentageNumber / 100) * totalNumber;
});
