// Initialize combination values
let combination = [0, 0, 0];
const TARGET = [3, 1, 4]; // π first digits

// Create number wheels
function createWheels() {
    const wheels = document.querySelectorAll('.lock-wheel');
    
    wheels.forEach((wheel, index) => {
        // Create number display
        const display = document.createElement('div');
        display.className = 'number-display';
        display.textContent = '0';
        wheel.appendChild(display);

        // Add scroll event
        wheel.addEventListener('wheel', (e) => {
            e.preventDefault();
            combination[index] = (combination[index] + (e.deltaY > 0 ? 1 : -1) + 10) % 10;
            display.textContent = combination[index];
        });
    });
}

// Verification function
function checkCombination() {
    const resultElement = document.getElementById('result');
    const isCorrect = combination.every((num, index) => num === TARGET[index]);
    
    if (isCorrect) {
        resultElement.textContent = "Success! The lock opens!";
        resultElement.style.color = "#2ecc71";
    } else {
        resultElement.textContent = "Incorrect combination - try again!";
        resultElement.style.color = "#e74c3c";
    }
}

// Initialize on load
window.onload = createWheels;