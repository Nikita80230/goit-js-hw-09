import { Notify } from 'notiflix/build/notiflix-notify-aio';
  
const formEl = document.querySelector(".form");

formEl.addEventListener("submit", onBtnClick);

function onBtnClick(e) {
  e.preventDefault()
  
  let {delay,step,amount} = Object.fromEntries(new FormData(e.target));

  delay = Number(delay);
  step = Number(step);

  for(let i = 0; i < amount; i++) {
    createPromise(i + 1, delay)
    .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notify.failure(`✅ Fulfilled promise ${position} in ${delay}ms`);
    });  
    delay += step;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay})
      } else {
        reject({position, delay})
      }
    }, delay);
  })
}