const form = document.getElementById('form');
const email = document.getElementById('mail');
const error = document.querySelector('.error');
form.addEventListener('submit', (e) => {
  if (email.value.match(/[A-Z]/g)) {
    error.innerHTML = 'Email address should not contain capital letters.(Not Sent)';
    e.preventDefault();
  } else if (email.value.match(/[@]/g) === false) {
    error.innerHTML = '@ missing';
    e.preventDefault();
  } else {
    error.innerHTML = '';
    return true;
  }
  return error.innerHTML;
});