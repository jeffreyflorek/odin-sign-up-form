const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

password.addEventListener('input', function (event) {
  if (password.value != confirmPassword.value) {
    password.setCustomValidity('Passwords must match!');
    password.classList.add('error');
    confirmPassword.classList.add('error');
    password.reportValidity();
  } else {
    password.setCustomValidity('');
    password.classList.remove('error');
    confirmPassword.classList.remove('error');
  }
});

confirmPassword.addEventListener('input', function (event) {
  if (password.value != confirmPassword.value) {
    confirmPassword.setCustomValidity('Passwords must match!');
    password.classList.add('error');
    confirmPassword.classList.add('error');
    confirmPassword.reportValidity();
  } else {
    confirmPassword.setCustomValidity('');
    password.classList.remove('error');
    confirmPassword.classList.remove('error');
  }
});
