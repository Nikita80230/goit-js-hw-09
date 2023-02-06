const body = document.querySelector("body");
const startBtn = body.querySelector("button[data-start]");
const stopBtn = body.querySelector("button[data-stop]");

console.log(startBtn);
console.log(stopBtn);

startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);

let intervalId;

function onStart() {
  
  intervalId = setInterval(() => {
    startBtn.setAttribute("disabled", "disabled");
    stopBtn.removeAttribute("disabled");
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  
}

function onStop() {
  clearInterval(intervalId);
  startBtn.removeAttribute("disabled");
  stopBtn.setAttribute("disabled", "disabled");
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
