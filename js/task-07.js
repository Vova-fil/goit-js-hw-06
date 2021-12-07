const refs = {
  input: document.querySelector('#font-size-control'),
  text: document.querySelector('span#text'),
};

refs.text.style.fontSize = '20px';

const changeSize = (e) => {
  const { value } = e.target;

  // refs.rangeValue.textContent = `${value}px`;
  refs.text.style.fontSize = `${value}px`;
  // console.log(refs.input.counterValue);
};

refs.input.addEventListener('input', changeSize);

console.dir(refs.input);
