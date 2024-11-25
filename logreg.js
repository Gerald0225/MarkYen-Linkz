document.getElementById('loginBtn').addEventListener('click', function() {
  var formContainer = document.getElementById('loginFormContainer');
  formContainer.style.display = formContainer.style.display === 'block' ? 'none' : 'block';
});

function validateForm() {
  document.getElementById('usernameError').innerText = '';
  document.getElementById('passwordError').innerText = '';


  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  var valid = true;

  if (username === '') {
      document.getElementById('usernameError').innerText = 'Username is required.';
      valid = false;
  }

  if (password === '') {
      document.getElementById('passwordError').innerText = 'Password is required.';
      valid = false;
  }

  if (valid) {
      document.getElementById('loginFormContainer').style.display = 'none';
  }

  return valid;
}
function validateRegistrationForm() {
  const email = document.getElementById("regEmail").value;
  const username = document.getElementById("regUsername").value;
  const password = document.getElementById("regPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;


  document.getElementById("emailError").innerText = "";
  document.getElementById("regUsernameError").innerText = "";
  document.getElementById("regPasswordError").innerText = "";
  document.getElementById("confirmPasswordError").innerText = "";

  let isValid = true;

  if (!email.includes("@")) {
      document.getElementById("emailError").innerText = "Please enter a valid email.";
      isValid = false;
  }


  if (password !== confirmPassword) {
      document.getElementById("confirmPasswordError").innerText = "Passwords do not match.";
      isValid = false;
  }

  return isValid;
}
function showLoginForm() {
  document.getElementById("loginFormContainer").style.display = "block";
  document.getElementById("registrationFormContainer").style.display = "none";
}

function showRegistrationForm() {
  document.getElementById("loginFormContainer").style.display = "none";
  document.getElementById("registrationFormContainer").style.display = "block";
}