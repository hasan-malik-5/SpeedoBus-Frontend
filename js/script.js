const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault(); 

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;
  const agreement = document.getElementById('agreement').checked;

  let isValid = true;


  const emailErrorElement = document.getElementById('email-error');
  const phoneErrorElement = document.getElementById('phone-error');
  const messageErrorElement = document.getElementById('message-error');
  const agreementErrorElement = document.getElementById('agreement-error');

  if (!email || email.trim() === '' ||!validateEmail(email)) {
    document.getElementById('email').classList.add('is-invalid');
    emailErrorElement.textContent = 'Please enter a valid email address.';
    isValid = false;
  } else {
    document.getElementById('email').classList.remove('is-invalid');
    emailErrorElement.textContent = '';
  }


  if (!phone || phone.trim() === '' ||!validatePhone(phone)) {
    document.getElementById('phone').classList.add('is-invalid');
    phoneErrorElement.textContent = 'Please enter a valid phone number in the format XXXX-XXXXXXX.';
    isValid = false;
  } else {
    document.getElementById('phone').classList.remove('is-invalid');
    phoneErrorElement.textContent = '';
  }


  if (!message || message.trim() === '') {
    document.getElementById('message').classList.add('is-invalid');
    messageErrorElement.textContent = 'Please enter a message.';
    isValid = false;
  } else {
    document.getElementById('message').classList.remove('is-invalid');
    messageErrorElement.textContent = '';
  }

  if (!agreement) {
    document.getElementById('agreement').classList.add('is-invalid');
    agreementErrorElement.textContent = 'Please agree to the terms and conditions.';
    isValid = false;
  } else {
    document.getElementById('agreement').classList.remove('is-invalid');
    agreementErrorElement.textContent = '';
  }

  if (isValid) {
    alert('Form submitted successfully!');
    document.getElementById('contact-form').submit();
  }
});

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function validatePhone(phone) {
  const phoneRegex = /^\d{4}-\d{7}$/;
  return phoneRegex.test(phone);
}