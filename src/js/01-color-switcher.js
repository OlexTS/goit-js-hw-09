const btnStartRef = document.querySelector('[data-start]');
const btnStopRef = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');

btnStartRef.addEventListener('click', onBtnStart);
btnStopRef.addEventListener('click', onBtnStop);
btnStopRef.disabled = true;
let timerId = null;

function onBtnStart() {
  btnStartRef.disabled = true;
  btnStopRef.disabled = false;
  bodyRef.style.backgroundColor = getRandomHexColor();
  timerId = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onBtnStop() {
  btnStopRef.disabled = true;
  btnStartRef.removeAttribute('disabled');
  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
