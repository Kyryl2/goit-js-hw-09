const form = document.querySelector('.feedback-form');
const userData = {};

function fillFeedbackFormFields() {
  try {
    const userDataFromLS = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );

    if (userDataFromLS === null) {
      return;
    }

    // feedbackFormEl.elements.user_name.value = userDataFromLS.user_name;
    // feedbackFormEl.elements.user_email.value = userDataFromLS.user_email;
    // feedbackFormEl.elements.user_message.value = userDataFromLS.user_message;

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
  // const feedbackFieldEl = event.target;
  const { target: feedbackFieldEl } = event;

  const feedbackFieldName = feedbackFieldEl.name;
  const feedbackFieldValue = feedbackFieldEl.value;

  userData[feedbackFieldName] = feedbackFieldValue;

  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
}

function clickButton(event) {
  event.preventDefault();
  console.log(userData);
  localStorage.removeItem('feedback-form-state');
  form.reset();
}
