// Timer Lock Code
const launchDate = new Date("2025-08-09T00:00:00+05:30").getTime(); // 12AM IST
const timerScreen = document.getElementById("timer-lock-screen");
const loginScreen = document.getElementById("login-screen");

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const diff = launchDate - now;

  if (diff <= 0) {
    clearInterval(countdown);
    timerScreen.classList.add("hidden");
    loginScreen.classList.remove("hidden");
  } else {
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    document.getElementById("countdown-timer").textContent =
      `${hours}h ${minutes}m ${seconds}s`;
  }
}, 1000);

function startLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error-message");

  // Clear previous error
  error.textContent = "";

  if (username === "CHINNU" && password === "1903") {
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


// Optional: Allow pressing "Enter" to trigger login
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !document.getElementById("login-screen").classList.contains("hidden")) {
    startLogin();
  }
});
