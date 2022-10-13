console.log(`Test`);

const elementbyID = document.getElementById("elementbyid");
elementbyID.textContent = `Gotcha!`;

const querySelector = document.querySelector(".querySelector");
querySelector.textContent = `Also Gotcha!`;

const getElementByClassName = document.getElementsByClassName("class_name");
getElementByClassName[0].textContent = `Re-Gotcha!`;
