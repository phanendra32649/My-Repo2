// Unlock date and time
const unlockTime = new Date("2025-08-10T00:00:00").getTime();

// Check timer on load
checkUnlockStatus();

function checkUnlockStatus() {
  const now = new Date().getTime();
  if (now >= unlockTime) {
    document.getElementById("lock-screen").classList.add("hidden");
    document.getElementById("login-screen").classList.remove("hidden");
  } else {
    document.getElementById("login-screen").classList.add("hidden");
    document.getElementById("lock-screen").classList.remove("hidden");
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }
}

function updateCountdown() {
  const now = new Date().getTime();
  const distance = unlockTime - now;

  if (distance <= 0) {
    checkUnlockStatus();
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").textContent =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function startLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error-message");

  error.textContent = "";

  // Change password here if you want "CUDDLEPANDA" instead of "1903"
  if (username === "CHINNU" && password === "1903") {
    switchScreen("login-screen", "tease-screen");

    setTimeout(() => {
      switchScreen("tease-screen", "final-screen");
      showLoveMessage();
    }, 6500);
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
  setTimeout(() => {
    switchScreen("gallery-screen", "tease-end-screen");
  }, 8000);
}

function goToTeaseEnd() {
  switchScreen("gallery-screen", "tease-end-screen");
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !document.getElementById("login-screen").classList.contains("hidden")) {
    startLogin();
  }
});
