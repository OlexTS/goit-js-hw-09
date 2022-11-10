
const btnStartRef = document.querySelector('[data-start]');
const btnStopRef = document.querySelector('[data-stop]');

btnStartRef.addEventListener('click', onBtnStart);
btnStopRef.addEventListener('click', onBtnStop);

function onBtnStart() {
    btnStartRef.setAttribute('disabled', true);
    timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor()
    }, 1000);
    
}

function onBtnStop() {
    btnStartRef.removeAttribute('disabled');
    clearInterval(timerId);
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
