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
    setTimeout(() => {
      document.getElementById("tease-screen").classList.add("hidden");
      document.getElementById("final-screen").classList.remove("hidden");
      showLoveMessage();
    }, 6500); // 6.5 seconds of tease
  } else {
    error.textContent = "Access denied. Try again.";
    shakeLoginBox();
  }
}

function shakeLoginBox() {
  const box = document.querySelector(".login-box");
  box.classList.add("shake");
  setTimeout(() => box.classList.remove("shake"), 500);
}

function showLoveMessage() {
  const message = `
You are not just my sister, Chinnuu.

You are a part of my soul, my reason to smile, and someone I care for like my own daughter.

On this Rakshabandhan, I promise—
I will always protect you, love you, and support you.

You are deeply cherished.

  `.trim();

  let i = 0;
  const target = document.getElementById("love-message");
  const typeWriter = setInterval(() => {
    if (i < message.length) {
      target.textContent += message.charAt(i);
      i++;
    } else {
      clearInterval(typeWriter);
    }
  }, 40);
}
