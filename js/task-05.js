const refs = {
  input: document.querySelector('input#name-input'),
  output: document.querySelector('span#name-output'),
  value: document.querySelector('#value'),
};

console.dir(refs.input);

const changeValue = () => {
  refs.output.textContent = refs.input.value;
  if (!refs.input.value) {
    refs.output.textContent = 'Anonymous';
  }
  console.log(refs.output);
};

refs.input.addEventListener('input', () => changeValue());
