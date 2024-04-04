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
  if (
    !form.elements.email.value.trim() &&
    !form.elements.message.value.trim()
  ) {
    alert('Будь ласка, заповніть поле електронної пошти та поле коментару.');
    return;
  }
  if (!form.elements.email.value.trim()) {
    alert('Будь ласка, заповніть поле електронної пошти.');
    console.log(formData);
    return;
  }

  if (!form.elements.message.value.trim()) {
    alert('Будь ласка, заповніть поле textarea.');
    console.log(formData);
    return;
  } else {
    alert('Дякуємо за ваш відгук!');
    event.preventDefault();
    console.log(userData);
    localStorage.removeItem('feedback-form-state');
    form.reset();
  }
}

// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.querySelector('.feedback-form');
//   const emailInput = form.querySelector('input[name="email"]');
//   const messageInput = form.querySelector('textarea[name="message"]');

//   const formData =
//     JSON.parse(localStorage.getItem('feedback-form-state')) || {};
//   if (formData.email) {
//     emailInput.value = formData.email;
//   }
//   if (formData.message) {
//     messageInput.value = formData.message;
//   }

//   form.addEventListener('input', () => {
//     const formData = {
//       email: emailInput.value,
//       message: messageInput.value,
//     };
//     localStorage.setItem('feedback-form-state', JSON.stringify(formData));
//   });

//   form.addEventListener('submit', event => {
//     event.preventDefault();
//     const formData =
//       JSON.parse(localStorage.getItem('feedback-form-state')) || {};
//     if (formData.email && formData.message) {
//       console.log(formData);
//       localStorage.removeItem('feedback-form-state');
//       emailInput.value = '';
//       messageInput.value = '';
//       alert('Дякуємо за ваш відгук!');
//     } else {
//       alert('Будь ласка, заповніть поля електронної пошти та повідомлення.');
//     }
//   });
// });
