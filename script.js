let combination = [0, 0, 0];
const TARGET = [3, 1, 4]; // π digits (3.14)

function changeNumber(wheelIndex, direction) {
    // Update number with wrap-around (0-9)
    combination[wheelIndex] = (combination[wheelIndex] + direction + 10) % 10;
    
    // Update display
    document.getElementById(`wheel${wheelIndex + 1}`).textContent = 
        combination[wheelIndex];
}

function checkCombination() {
    const resultElement = document.getElementById('result');
    const isCorrect = combination.every((num, index) => num === TARGET[index]);
    
    if (isCorrect) {
        resultElement.textContent = "🔓 Success! The lock opens!";
        resultElement.style.color = "#2ecc71";
    } else {
        resultElement.textContent = "🔒 Incorrect combination - try again!";
        resultElement.style.color = "#e74c3c";
    }
}