import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputEl = document.querySelector(".input__thumb");
const outputEl = document.querySelector(".output__thumb");
const btnEl = inputEl.querySelector(".button");
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let chosenDate = Date.now()
let intervalId = null;
let timeToTimerStop = 0;
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
btnEl.addEventListener("click", onStart)

btnEl.setAttribute("disabled", "disabled");

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if(selectedDates[0] < Date.now()) {
      alert("Please choose a date in the future")
    }
     else {
      btnEl.removeAttribute("disabled");
      onValidDate(selectedDates[0]);
      // fp.destroy();
    }
  },
};

const fp = flatpickr("#datetime-picker", options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
  return { days, hours, minutes, seconds };
}
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function onValidDate(date) {
  chosenDate = date;
}
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function onStart() {
  
  intervalId = setInterval(() => {
    timeToTimerStop = convertMs(chosenDate - Date.now());
    changeMarkup(timeToTimerStop);
    if(timeToTimerStop.seconds <= 0){
      clearInterval(intervalId);
    }
  }, 1000)
}

function addLeadingZero(str) {
  return String(str).padStart(2, "0");
}
// addLeadingZero()

function changeMarkup(time) {
  outputEl.querySelector("span[data-days]").textContent = addLeadingZero(time.days);
  outputEl.querySelector("span[data-hours]").textContent = addLeadingZero(time.hours)
  outputEl.querySelector("span[data-minutes]").textContent = addLeadingZero(time.minutes)
  outputEl.querySelector("span[data-seconds]").textContent = addLeadingZero(time.seconds)
}






















// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     onCloseFunction(selectedDates[0]);
//   },
// };

// const refs = {
//   startButton: document.querySelector('[data-start]'),
//   inputEl: document.querySelector('#datetime-picker'),
//   days: document.querySelector('[data-days]'),
//   hours: document.querySelector('[data-hours]'),
//   minutes: document.querySelector('[data-minutes]'),
//   seconds: document.querySelector('[data-seconds]'),
// };
// const isDisabled = true;
// let chosenDate = Date.now();

// refs.startButton.disabled = isDisabled;
// refs.startButton.addEventListener('click', onStartClick);

// const fp = flatpickr(refs.inputEl, options);

// function onCloseFunction(date) {
//   if (Date.now() > date) {
//     Notify.failure('Please choose a date in the future');
//   } else {
//     refs.startButton.disabled = !isDisabled;
//     chosenDate = date;
//   }
// }

// function onStartClick() {
//   refs.startButton.disabled = isDisabled;
//   fp.destroy();
//   refs.inputEl.disabled = isDisabled;
//   calculationStart();
// }

// function calculationStart() {
//   let setIntervalId = setInterval(() => {
//     const restTime = convertMs(chosenDate - Date.now());
    
//     markupChange(restTime);
//     if (restTime.seconds <= 0) {
//       clearInterval(setIntervalId);
//     }
    
//   }, 1000);
// }



// function markupChange({ days, hours, minutes, seconds }) {
//   refs.days.textContent = addLeadingZero(days);
//   refs.hours.textContent = addLeadingZero(hours);
//   refs.minutes.textContent = addLeadingZero(minutes);
//   refs.seconds.textContent = addLeadingZero(seconds);
// }

// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }