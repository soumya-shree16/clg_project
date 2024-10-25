// Select elements
const input = document.getElementById("secondsInput");
const startBtn = document.getElementById("startBtn");
const display = document.getElementById("display");

let countdownInterval;

startBtn.addEventListener("click", () => {
    
    clearInterval(countdownInterval);

  
    let timeLeft = parseInt(input.value);

    if (isNaN(timeLeft) || timeLeft <= 0) {
        alert("Please enter a valid number of seconds.");
        return;
    }

    display.textContent = `Time Remaining: ${timeLeft}s`;

    
    countdownInterval = setInterval(() => {
        timeLeft--;

        if (timeLeft >= 0) {
            display.textContent = `Time Remaining: ${timeLeft}s`;
        }

        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            alert("Time's up!");
        }
    }, 2000);
});
