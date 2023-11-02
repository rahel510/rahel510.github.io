// if function
// const query selector img
// background color dark
// .add addEventListener

const button = document.getElementById("dlSwitch");
const funButton = document.getElementById("funButton");
let isDarkMode = false;

button.innerHTML = isDarkMode ? "dark" : "light";
// dark and light are interchanged

let funValue = 1;

button.addEventListener("click", modeToggle);

// body ansprechen als const
// -> class list dark hinzufügen und verwenden

const body = document.querySelector("body");
// füge dark class dem body hinzu

// Element.classList fügt class zum element

function modeToggle() {
  if (isDarkMode === true) {
    // jetzt wollen wir auf light mode wechseln
    isDarkMode = false;
    // alert("jetzt ist neu light mode");
    body.classList.remove("dark");
    button.innerHTML = "dark";
  } else {
    // jetzt wollen wir auf dark mode wechseln
    isDarkMode = true;
    // alert("jetzt ist neu dark mode");
    button.innerHTML = "dark";
    body.classList.add("light");
  }
}

console.log("Hello world this is my script");

funButton.addEventListener("click", () => {
  switch (funValue) {
    case 1:
      alert("1 - HAVE SOME FUN FUN FUN FUN FUN");
      break;
    case 2:
      alert("2 - I HAD SOME FUN");
    // break;
    default:
      alert("DEFAULT SHIT");
      break;
  }

  funValue++;

  if (funValue === 5) {
    funValue = 1;
  }
});
