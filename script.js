const text = "Practice typing daily to improve your speed.";

const textDisplay = document.getElementById("text");
const input = document.getElementById("input");

textDisplay.innerText = text;

let timeLeft = 60;
let timerStarted = false;

// Typing detection
input.addEventListener("input", () => {

  // Start timer on first input
  if (!timerStarted) {
    startTimer();
    timerStarted = true;
  }

  // Completion check
  if (input.value === text) {
    document.getElementById("result").innerText = "Completed!";
  }
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
  const typedText = input.value.trim();
  const words = typedText === "" ? 0 : typedText.split(" ").length;

  document.getElementById("result").innerText =
    "Speed: " + words + " WPM";
}