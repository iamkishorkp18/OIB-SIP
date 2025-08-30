function showLogin() {
  document.getElementById("registerPage").classList.add("hidden");
  document.getElementById("loginPage").classList.remove("hidden");
}

function showRegister() {
  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("registerPage").classList.remove("hidden");
}

function register() {
  let email = document.getElementById("regEmail").value;
  let password = document.getElementById("regPassword").value;

  if (email && password) {
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    alert("Registration successful! Please login.");
    showLogin();
  } else {
    alert("Please enter email and password!");
  }
}

function login() {
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  let storedEmail = localStorage.getItem("userEmail");
  let storedPassword = localStorage.getItem("userPassword");

  if (email === storedEmail && password === storedPassword) {
    localStorage.setItem("loggedIn", "true");
    showSecurePage();
  } else {
    alert("Invalid credentials!");
  }
}

function showSecurePage() {
  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("registerPage").classList.add("hidden");
  document.getElementById("securePage").classList.remove("hidden");
}

function logout() {
  localStorage.removeItem("loggedIn");
  showLogin();
}

window.onload = () => {
  if (localStorage.getItem("loggedIn") === "true") {
    showSecurePage();
  } else {
    showLogin();
  }
};
