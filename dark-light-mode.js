const button = document.getElementById("dlSwitch");
const funButton = document.getElementById("funButton");
let isDarkMode = false;

button.innerHTML = isDarkMode ? "dark" : "light";

button.addEventListener("click", modeToggle);

const body = document.querySelector("body");

function modeToggle() {
  if (isDarkMode === true) {
    isDarkMode = false;
    body.classList.remove("dark");
    button.innerHTML = "dark";
  } else {
    isDarkMode = true;
    button.innerHTML = "light";
    body.classList.add("dark");
  }
}
