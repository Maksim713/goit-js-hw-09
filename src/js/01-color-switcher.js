const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

refs.startBtn.classList.add('.')

const CHANGE_COLOR_INTERVAL = 1000;
let intervalId = null;

refs.startBtn.addEventListener('click', onClickStartBtn);
refs.stopBtn.addEventListener('click', onClickStopBtn);

function onClickStartBtn() {
  changeBodyColor();
  intervalId = setInterval(changeBodyColor, CHANGE_COLOR_INTERVAL);

  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
}

function onClickStopBtn() {
  clearInterval(intervalId);

  refs.stopBtn.disabled = true;
  refs.startBtn.disabled = false;
}

function changeBodyColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
