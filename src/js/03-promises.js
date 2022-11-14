import Notiflix from 'notiflix';

const buttonRef = document.querySelector('button');
const formRef = document.querySelector('.form');

buttonRef.addEventListener('submit', createPromise);



function createPromise(position, delay) {
  const timerId = setInterval(() => {
    const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve()
  } else {
    reject()
  }}, delay);
  
}

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });

