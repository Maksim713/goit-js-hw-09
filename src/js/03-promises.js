import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formBtn = document.querySelector('.form');

const { delay, amount, step } = formBtn.elements;

formBtn.addEventListener('submit', onBtnCreatePromises);

function onBtnCreatePromises(e) {
  e.preventDefault();
  let firstDelay = Number(delay.value);
  const delayStep = Number(step.value);
  const amountOfNewPromises = Number(amount.value);

  for (let i = 0; i < amountOfNewPromises; i += 1, firstDelay += delayStep) {
    createPromise(i, firstDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
