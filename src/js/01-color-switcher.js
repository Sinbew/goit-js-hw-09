function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let timer = null;

stopBtn.disabled = true;

startBtn.addEventListener('click', onStartBtnClick);

function onStartBtnClick() {
  startBtn.disabled = true;
  stopBtn.disabled = false;

  document.body.style.backgroundColor = getRandomHexColor();
  timer = setInterval(
    () => (document.body.style.backgroundColor = getRandomHexColor()),
    1000
  );
}

stopBtn.addEventListener('click', onStopBtnClick);

function onStopBtnClick() {
  startBtn.disabled = false;
  stopBtn.disabled = true;

  clearInterval(timer);
}
