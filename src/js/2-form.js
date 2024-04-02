const form = document.querySelector('.feedback-form');

form.addEventListener('input', setNewData);

function setNewData(event) {}

form.addEventListener('submit', clickButton);

function clickButton(event) {
  event.preventDefault();
}
