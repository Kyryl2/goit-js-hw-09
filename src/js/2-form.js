const form = document.querySelector('.feedback-form');

form.addEventListener('input', setNewData);

function setNewData(event) {}

form.addEventListener('submit', clickButton);

function clickButton(event) {
  event.preventDefault();
}

// const form = document.querySelector('.feedback-form');
// const textarea = form.elements.message;
// const localStorageKey = 'goit-example-message';

// textarea.value = localStorage.getItem(localStorageKey) ?? '';

// form.addEventListener('input', evt => {
//   localStorage.setItem(localStorageKey, evt.target.value);
// });

// form.addEventListener('submit', evt => {
//   evt.preventDefault();
//   console.log(evt.target.elements.message.value);
//   localStorage.removeItem(localStorageKey);
//   form.reset();
// });
