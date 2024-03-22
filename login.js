document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  // Add logic for authenticating user with email and password
  console.log('Login submitted:', email, password);
});

document.getElementById('registerForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('regEmail').value;
  const password = document.getElementById('regPassword').value;
  // Add logic for registering new user
  console.log('Registration submitted:', username, email, password);
});
