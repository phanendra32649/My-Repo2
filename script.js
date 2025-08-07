const storyLines = [
  "She was scared...",
  "Alone in the dark...",
  "Nothing made sense...",
  "But something changed...",
  "She felt a presence...",
  "She opened her heart...",
  "And then… she found Love 💖"
];

const storyText = document.getElementById("storyText");
const heartContainer = document.getElementById("heartContainer");

let lineIndex = 0;

function typeLine(text, i = 0) {
  if (i < text.length) {
    storyText.textContent += text.charAt(i);
    setTimeout(() => typeLine(text, i + 1), 50);
  } else {
    setTimeout(() => {
      lineIndex++;
      if (lineIndex < storyLines.length) {
        storyText.textContent = "";
        typeLine(storyLines[lineIndex]);
      } else {
        showHeart();
      }
    }, 1200);
  }
}

function showHeart() {
  storyText.style.display = "none";
  heartContainer.style.display = "flex";
}

typeLine(storyLines[0]);
