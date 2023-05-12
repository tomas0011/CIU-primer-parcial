// Boton para intercambiar modo claro y modo oscuro
let switchColorsButton = document.querySelector("#switchColors")
let switchColorsIcon = document.querySelector("#switchColorsIcon")



switchColorsButton.addEventListener('click', (e) => {
  let paletaDeColores = document.querySelector(':root');
  if (e.target.textContent === 'Modo Oscuro') {
    e.target.textContent = 'Modo Claro'
    paletaDeColores.style.setProperty('--letras', '#d4f985');
    paletaDeColores.style.setProperty('--fondo', '#9e8ac8');
    paletaDeColores.style.setProperty('--contraste', '#000000');
  } else {
    e.target.textContent = 'Modo Oscuro'
    paletaDeColores.style.setProperty('--letras', 'orange');
    paletaDeColores.style.setProperty('--fondo', '#25114A');
    paletaDeColores.style.setProperty('--contraste', '#ffffff');
  }
  e.target.classList.toggle('btn-light')
  e.target.classList.toggle('btn-dark')
  switchColorsIcon.classList.toggle('mdi-weather-night')
  switchColorsIcon.classList.toggle('mdi-weather-sunny')  
})
