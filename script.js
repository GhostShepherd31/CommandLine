// script.js
let xp = 0;
let progress = 0;

function checkAnswer(selected) {
  const correct = "10.0.0.1";
  const feedback = document.getElementById("feedback");

  if (selected.textContent === correct) {
    feedback.textContent = "✅ Correct! You've earned 10 XP.";
    feedback.style.color = "#00ff99";
    xp += 10;
    progress += 25;
  } else {
    feedback.textContent = "❌ Incorrect. Try again.";
    feedback.style.color = "#ff5555";
    xp = Math.max(xp - 5, 0);
    progress = Math.max(progress - 10, 0);
  }

  document.getElementById("xp").textContent = xp;
  document.getElementById("progressBar").style.width = progress + "%";
}
