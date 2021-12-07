let counterValue = 0;

const refs = {
  increment: document.querySelector('[data-action="increment"]'),
  decrement: document.querySelector('[data-action="decrement"]'),
  value: document.querySelector('#value'),
};
//console.log(counterValue);
// +1, -1
const changeValue = (step) => {
  counterValue = counterValue + step;
  refs.value.textContent = counterValue;
  // console.log(counterValue);
};

refs.decrement.addEventListener('click', () => changeValue(-1));
refs.increment.addEventListener('click', () => changeValue(+1));
