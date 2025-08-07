const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Resize canvas on window resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Love messages to rotate
const messages = [
  "You're the reason I smile 💓",
  "My heart beats for you 💗",
  "Forever yours 💍",
  "I love you more every day 💖"
];

let msgIndex = 0;
const loveText = document.getElementById("loveText");

function rotateMessage() {
  loveText.textContent = messages[msgIndex];
  msgIndex = (msgIndex + 1) % messages.length;
}
setInterval(rotateMessage, 3000);
rotateMessage();

// Heart drawing animation
let t = 0;
function drawHeart() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  t += 0.05;

  ctx.beginPath();
  for (let i = 0; i < Math.PI * 2; i += 0.01) {
    const x = 16 * Math.pow(Math.sin(i), 3);
    const y = -(
      13 * Math.cos(i) -
      5 * Math.cos(2 * i) -
      2 * Math.cos(3 * i) -
      Math.cos(4 * i)
    );

    const scale = 10 + 2 * Math.sin(t);
    const offsetX = canvas.width / 2;
    const offsetY = canvas.height / 2;

    ctx.lineTo(offsetX + x * scale, offsetY + y * scale);
  }

  const glowColor = `hsl(${(t * 40) % 360}, 100%, 70%)`;
  ctx.strokeStyle = glowColor;
  ctx.lineWidth = 4;
  ctx.shadowColor = glowColor;
  ctx.shadowBlur = 25;
  ctx.stroke();
  requestAnimationFrame(drawHeart);
}

drawHeart();
