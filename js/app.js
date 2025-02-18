const themeToggler = document.getElementById("theme__toggler");
const siteLogoImage = document.getElementById("site-logo-image");
const themetogglerImage = document.getElementById(
  "theme/theme__toggler__image"
);
const body = document.body;

const setCharacterLimit = document.getElementById("set-character-limit");
const OptionsCheckboxLimit = document.getElementById("options__checkbox__limit");

let theme = localStorage.getItem("theme");

function themeMode() {
  let modeCase = body.classList.contains("dark-mode");
  themetogglerImage.src = modeCase 
  ? "./images/sun.png" 
  : "./images/moon.png";
  siteLogoImage.src = modeCase 
  ? "images/Logo (1).svg" 
  : "images/Logo (2).svg";
}

if (theme) {
  body.classList.add("theme");
  themeMode();
}

themeToggler.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  themeMode();
  let modeCase = body.classList.contains("dark-mode");
  localStorage.setItem("theme", modeCase ? "dark-mode" : "light-mode");
});

setCharacterLimit.addEventListener("change", () => {
  OptionsCheckboxLimit.classList.toggle("hidden-visibility");
}) 