const text = "Practice typing daily to improve your speed.";

const textDisplay = document.getElementById("text");
const input = document.getElementById("input");

textDisplay.innerText = text;

let timeLeft = 60;
let timerStarted = false;

input.addEventListener("input", () => {

  // Start timer
  if (!timerStarted) {
    startTimer();
    timerStarted = true;
  }

  const typed = input.value;
  let display = "";
  let correctChars = 0;

  for (let i = 0; i < text.length; i++) {

    if (typed[i] == null) {
      display += text[i];
    } 
    else if (typed[i] === text[i]) {
      display += `<span style="color:green">${text[i]}</span>`;
      correctChars++;
    } 
    else {
      display += `<span style="color:red">${text[i]}</span>`;
    }
  }

  textDisplay.innerHTML = display;
});
// Timer function
function startTimer() {
  const timer = setInterval(() => {
    timeLeft--;
    document.getElementById("time").innerText = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      calculateSpeed();
      input.disabled = true;
    }
  }, 1000);
}

// WPM calculation
function calculateSpeed() {
  const typedText = input.value;

  const words = typedText.trim() === "" ? 0 : typedText.trim().split(" ").length;

  let correctChars = 0;

  for (let i = 0; i < typedText.length; i++) {
    if (typedText[i] === text[i]) {
      correctChars++;
    }
  }

  const accuracy = (correctChars / text.length) * 100;

  document.getElementById("result").innerText =
    `Speed: ${words} WPM | Accuracy: ${accuracy.toFixed(2)}%`;
}