// Updated JavaScript (script.js)
let combination = [0, 0, 0, 0, 0, 0, 0, 0];
const TARGET = [3, 1, 4, 1, 5, 9, 2, 6];
let attempts = 0;
let timerStarted = false;
let timerInterval;

function changeNumber(wheelIndex, direction) {
    combination[wheelIndex] = (combination[wheelIndex] + direction + 10) % 10;
    document.getElementById(`wheel${wheelIndex + 1}`).textContent = 
        combination[wheelIndex];
}

function startTimer() {
    let minutes = 20;
    let seconds = 0;
    
    timerInterval = setInterval(() => {
        if (seconds === 0) {
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }
        
        document.getElementById('time-remaining').textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (minutes === 0 && seconds === 0) {
            clearInterval(timerInterval);
            window.location.href = 'lose.html?reason=time';
        }
    }, 1000);
}

function checkCombination() {
    if (!timerStarted) {
        timerStarted = true;
        startTimer();
    }

    const resultElement = document.getElementById('result');
    const isCorrect = combination.every((num, index) => num === TARGET[index]);
    
    if (isCorrect) {
        clearInterval(timerInterval);
        window.location.href = 'congrats.html';
        return;
    }

    attempts++;
    document.getElementById('attempts-left').textContent = 7 - attempts;
    
    if (attempts >= 7) {
        clearInterval(timerInterval);
        window.location.href = 'lose.html?reason=attempts';
        return;
    }

    resultElement.textContent = "🔒 Incorrect combination - try again!";
    resultElement.style.color = "#FFCB05";
}