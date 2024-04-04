const form = document.querySelector('.feedback-form');
let userData = {};

function fillFeedbackFormFields() {
  try {
    const userDataFromLS = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );

    if (userDataFromLS === null) {
      return;
    }
    userData = userDataFromLS;

    for (const key in userDataFromLS) {
      form.elements[key].value = userDataFromLS[key];
    }
  } catch (err) {
    console.log(err);
  }
}
fillFeedbackFormFields();

form.addEventListener('input', setNewData);
form.addEventListener('submit', clickButton);

function setNewData(event) {
  const { target: feedbackFieldEl } = event;

  const feedbackFieldName = feedbackFieldEl.name;
  const feedbackFieldValue = feedbackFieldEl.value;

  userData[feedbackFieldName] = feedbackFieldValue.trim();

  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
}

function clickButton(event) {
  if (
    !form.elements.email.value.trim() &&
    !form.elements.message.value.trim()
  ) {
    alert('Будь ласка, заповніть поле електронної пошти та поле коментару.');
    return;
  }
  if (!form.elements.email.value.trim()) {
    alert('Будь ласка, заповніть поле електронної пошти.');

    return;
  }

  if (!form.elements.message.value.trim()) {
    alert('Будь ласка, заповніть поле textarea.');

    return;
  } else {
    alert('Дякуємо за ваш відгук!');
    event.preventDefault();
    console.log(userData);
    localStorage.removeItem('feedback-form-state');
    form.reset();
  }
}
