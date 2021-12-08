const colorEl = document.querySelector('button.change-color');
let colorElselect = document.querySelector('span.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onColorSelect = () => {
  colorElselect.textContent = getRandomHexColor();

  document.body.style.backgroundColor = colorElselect.textContent;
};

//color.style.backgroundColor = colorElselect.textContent

colorEl.addEventListener('click', onColorSelect);

console.dir(colorElselect);
//console.log();
