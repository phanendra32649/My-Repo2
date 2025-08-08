function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error-message");

  if (username === "CHINNU" && password === "1903") {
    document.getElementById("login-page").classList.add("hidden");
    document.getElementById("message-page").classList.remove("hidden");
  } else {
    error.textContent = "Incorrect username or password.";
  }
}
