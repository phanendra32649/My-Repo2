// Show login screen immediately
document.getElementById("timer-lock-screen").classList.add("hidden");
document.getElementById("login-screen").classList.remove("hidden");

function startLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error-message");

  // Clear previous error
  error.textContent = "";

  if (username === "CHINNU" && password === "CUDDLEPANDA") {
    switchScreen("login-screen", "tease-screen");

    // Show teasing animation then switch to final message
    setTimeout(() => {
      switchScreen("tease-screen", "final-screen");
      showLoveMessage();
    }, 6500); // 6.5 seconds
  } else {
    error.textContent = "Access Denied. Please try again.";
    shakeLoginBox();
  }
}

function switchScreen(hideId, showId) {
  document.getElementById(hideId).classList.add("hidden");
  document.getElementById(showId).classList.remove("hidden");
}

function shakeLoginBox() {
  const box = document.querySelector(".login-box");
  box.classList.add("shake");
  setTimeout(() => box.classList.remove("shake"), 500);
}

function showLoveMessage() {
  const message = `
You are not just my sister, Chinnuu.

You are a part of my soul, my reason to smile,
and someone I love and care for like my own daughter.

On this Rakshabandhan, I promise—
To protect you, support you, and stand by you always.

You are deeply cherished, and you always will be.
  `.trim();

  const target = document.getElementById("love-message");
  target.textContent = "";

  let i = 0;
  const typeWriter = setInterval(() => {
    if (i < message.length) {
      target.textContent += message.charAt(i);
      i++;
    } else {
      clearInterval(typeWriter);
    }
  }, 40);
}

function showGallery() {
  switchScreen("final-screen", "gallery-screen");
  // Auto move to final tease page after 8 seconds
  setTimeout(() => {
    switchScreen("gallery-screen", "tease-end-screen");
  }, 8000);
}

function goToTeaseEnd() {
  switchScreen("gallery-screen", "tease-end-screen");
}

// Optional: Allow pressing "Enter" to trigger login
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !document.getElementById("login-screen").classList.contains("hidden")) {
    startLogin();
  }
});
