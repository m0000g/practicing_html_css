const elementbyID = document.getElementById("elementbyid");
elementbyID.textContent = `Gotcha!`;

const querySelector = document.querySelector(".querySelector");
querySelector.textContent = `Also Gotcha!`;

const getElementByClassName = document.getElementsByClassName("class_name");
getElementByClassName[0].textContent = `Re-Gotcha!`;

const text = document.querySelector(".capitalize").textContent;
const result = document.querySelector(".result");

const capitalize = function (myString) {
  const newText = myString.charAt(0).toUpperCase() + myString.substring(1);
  result.textContent = newText;
};

capitalize(text);
