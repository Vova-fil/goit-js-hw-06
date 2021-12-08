const colorEl = document.querySelector('button.change-color');
let colorElselect = document.querySelector('span.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onColorSelect = (e) => (colorElselect.textContent = getRandomHexColor());

colorEl.addEventListener('click', onColorSelect);

console.dir(colorElselect);
