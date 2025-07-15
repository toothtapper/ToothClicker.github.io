let clicks = 0;
let globalClicks = Math.floor(Math.random() * 1000000);
const clickDisplay = document.getElementById("clicks");
const globalDisplay = document.getElementById("global");
const tooth = document.getElementById("tooth");
const reaction = document.getElementById("reaction");

const messages = [
  "Ajć!", "Znowu ty?", "Daj mi odpocząć!", "Serio?!", "Klik klik klik!", "Może wystarczy..."
];

function updateToothStyle() {
  if (clicks >= 1000000) {
    tooth.src = "tooth-king.png"; // koronowany ząb
    reaction.textContent = "Ząb Królewski! 👑";
    document.body.style.background = "radial-gradient(circle, gold, purple)";
  } else if (clicks >= 500000) {
    reaction.textContent = "Prawie król!";
  } else if (clicks >= 100000) {
    reaction.textContent = "Tatuaż? 😎";
  }
}

tooth.addEventListener("click", () => {
  clicks++;
  globalClicks += Math.floor(Math.random() * 5);
  clickDisplay.textContent = clicks;
  globalDisplay.textContent = globalClicks;
  reaction.textContent = messages[Math.floor(Math.random() * messages.length)];
  updateToothStyle();
});
