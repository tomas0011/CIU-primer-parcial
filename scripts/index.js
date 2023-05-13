let switchColorsButton = document.querySelector("#switchColors");
let switchColorsIcon = document.querySelector("#switchColorsIcon");
let body = document.querySelector("body");

switchColorsButton.addEventListener('click', (e) => {
  if (e.target.textContent === 'Modo Oscuro') {
    e.target.textContent = 'Modo Claro';
  } else {
    e.target.textContent = 'Modo Oscuro';
  };
  body.classList.toggle('darkMode');
  e.target.classList.toggle('btn-light');
  e.target.classList.toggle('btn-dark');
  switchColorsIcon.classList.toggle('mdi-weather-night');
  switchColorsIcon.classList.toggle('mdi-weather-sunny') ;
})
