// Calculator state
let firstNumber = null;
let operation = null;
let shouldResetDisplay = false;

// Get DOM elements
const display = document.getElementById('display');
const operationDisplay = document.getElementById('operation-display');
const numberButtons = document.querySelectorAll('.btn-number');
const operationButtons = document.querySelectorAll('.btn-operation');
const equalsButton = document.getElementById('equals-btn');
const resetButton = document.getElementById('reset-btn');

// Update display functions
function updateDisplay(value) {
    display.textContent = value;
}

function updateOperationDisplay() {
    operationDisplay.textContent = firstNumber && operation ? `${firstNumber} ${operation}` : '';
}

// Number button handler
function handleNumberClick(num) {
    if (shouldResetDisplay) {
        updateDisplay(num);
        shouldResetDisplay = false;
    } else {
        const currentDisplay = display.textContent;
        updateDisplay(currentDisplay === '0' ? num : currentDisplay + num);
    }
}

// Operation button handler
function handleOperationClick(op) {
    firstNumber = display.textContent;
    operation = op;
    shouldResetDisplay = true;
    updateOperationDisplay();
}

// Equals button handler
function handleEquals() {
    if (firstNumber === null || operation === null) return;

    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(display.textContent);
    let result = 0;

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case 'x':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : 0;
            break;
    }

    updateDisplay(String(result));
    firstNumber = null;
    operation = null;
    shouldResetDisplay = true;
    updateOperationDisplay();
}

// Reset button handler
function handleReset() {
    updateDisplay('0');
    firstNumber = null;
    operation = null;
    shouldResetDisplay = false;
    updateOperationDisplay();
}

// Attach event listeners
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        handleNumberClick(button.dataset.value);
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        handleOperationClick(button.dataset.value);
    });
});

equalsButton.addEventListener('click', handleEquals);
resetButton.addEventListener('click', handleReset);