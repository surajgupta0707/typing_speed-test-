const text = "Practice makes a person perfect. Keep typing to improve your speed.";

document.getElementById("text").innerText = text;

const input = document.getElementById("input");

input.addEventListener("input", () => {
  if (input.value === text) {
    document.getElementById("result").innerText = "Completed!";
  }
});