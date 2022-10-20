console.log(`Test`);

const elementbyID = document.getElementById("elementbyid");
elementbyID.textContent = `Gotcha!`;

const querySelector = document.querySelector(".querySelector");
querySelector.textContent = `Also Gotcha!`;

const getElementByClassName = document.getElementsByClassName("class_name");
getElementByClassName[0].textContent = `Re-Gotcha!`;

const capitalize = function (myString) {
  //const string = myString[0].toUpperCase();
  //return string;
  return myString.charAt(0).toUpperCase() + myString.substring(1);
};
console.log(
  capitalize(`retornar el texto con la primera palabra en mayúscula.`)
);

// PERCENTAGE CALCULATION
const percentage = 20;
const total = 1000;
console.log((percentage / 100) * total);

const percentage2 = 3.8;
const total2 = 100;
console.log((percentage2 / 100) * total2);
