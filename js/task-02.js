const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const titleEl = document.createElement('li');
// titleEl.classList.add('item');
// titleEl.textContent = 'Это заголовок страницы :)';

// const ingredientsEl = document.createElement('li');
// ingredientsEl.classList.add('item');
// ingredientsEl.textContent = ingredients[0];
// console.log(ingredientsEl);

// // const colorPickerContainerEl = document.querySelector('.js-color-picker');
// /*
//  * Пишем функцию для создания разметки колорпикера
//  */

// const makeColorPickerOptions = (options) => {
//   return options.map((option, i) => {
//     const ingredientsEl = document.createElement('li');
//     ingredientsEl.classList.add('item');
//     ingredientsEl.textContent = ingredients[i];

//     return ingredientsEl;
//   });
// };

// const elements = makeColorPickerOptions(colorPickerOptions);
// colorPickerContainerEl.append(...elements);

//const users = ['Bobby', 'Peter', 'Chris'];
const ul = document.querySelector('ul');
const lis = ingredients.map((name) => {
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = name;

  return li;
});
console.log(ul);

ul.append(...lis);

//document.ul.append(ul);
