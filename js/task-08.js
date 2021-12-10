const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  console.log(formData);

  formData.forEach((value, name) => {
    const formDataEl = {
      name,
      value,
    };

    console.log(formDataEl);
    console.log('onFormSubmit -> name', name);
    console.log('onFormSubmit -> value', value);
  });
}
