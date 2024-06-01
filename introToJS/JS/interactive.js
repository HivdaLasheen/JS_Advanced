//reg form code
document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  let username = document.getElementById('username').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let confirmPassword = document.getElementById('confirmPassword').value;
  let message = document.getElementById('message');

  if (password !== confirmPassword) {
      message.textContent = 'Passwords do not match!';
      return;
  }

  message.textContent = 'Registration successful!';
  message.style.color = 'green';

  // Here you can add code to send the form data to the server using AJAX or fetch API
});



//Console grp codes
for (var i = 0; i < 10; i++) {
    console.log(i);
  }