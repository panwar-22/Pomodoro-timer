let timerDisplay = document.getElementById("timer");
let interval;
let totalSeconds = 25 * 60;
let isPaused = true;

function updateDisplay() {
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function startTimer() {
  if (isPaused) {
    isPaused = false;
    interval = setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds--;
        updateDisplay();
      } else {
        clearInterval(interval);
        alert("Time's up! Take a break.");
      }
    }, 1000);
  }
}

function pauseTimer() {
  isPaused = true;
  clearInterval(interval);
}

function resetTimer() {
  isPaused = true;
  clearInterval(interval);
  totalSeconds = 25 * 60;
  updateDisplay();
}

// Initial display
updateDisplay();
