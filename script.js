let stage = 1;

function nextStage(num) {
  document.getElementById('stage' + stage).classList.add('hidden');
  stage = num;
  document.getElementById('stage' + stage).classList.remove('hidden');
  if(stage === 4) {
    showFinalMessage();
  }
}

function wrongAnswer(btn) {
  btn.innerText = "WRONG!";
  btn.style.background = "black";
  btn.style.color = "red";
}

function correctAnswer(btn, next) {
  btn.innerText = "Correct ✓";
  btn.style.background = "green";
  setTimeout(() => nextStage(next), 1000);
}

function showFinalMessage() {
  const message = "She wasn't supposed to know... But he couldn't hide it anymore. To: Chinnuu 💖 From: Nanna 💌";
  const element = document.getElementById("finalMessage");
  let i = 0;
  const interval = setInterval(() => {
    if(i < message.length) {
      element.innerHTML += message[i];
      i++;
    } else {
      clearInterval(interval);
    }
  }, 70);
}
