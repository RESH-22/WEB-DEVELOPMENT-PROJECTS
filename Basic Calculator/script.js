let currentInput = '';
let operator = '';
let previousInput = '';
let memory = 0; // Memory storage

// Number and Operator Input
function appendNumber(number) {
    currentInput += number;
    updateDisplay(currentInput);
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay(currentInput);
    }
}

function setOperator(op) {
    if (currentInput === '') return; // Do nothing if no input
    if (previousInput !== '') {
        calculateResult();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

// Calculate Square Root
function calculateSquareRoot() {
    if (currentInput === '') return;
    let result = Math.sqrt(parseFloat(currentInput));
    currentInput = result.toString();
    updateDisplay(currentInput);
}

// Calculate Percentage
function calculatePercentage() {
    if (currentInput === '') return;
    let result = parseFloat(currentInput) / 100;
    currentInput = result.toString();
    updateDisplay(currentInput);
}

// Memory Functions
function memoryAdd() {
    if (currentInput !== '') {
        memory += parseFloat(currentInput);
        currentInput = '';
        updateDisplay('');
    }
}

function memorySubtract() {
    if (currentInput !== '') {
        memory -= parseFloat(currentInput);
        currentInput = '';
        updateDisplay('');
    }
}

function memoryRecall() {
    currentInput = memory.toString();
    updateDisplay(currentInput);
}

function memoryClear() {
    memory = 0;
    updateDisplay('');
}

// Clear Display
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay('');
}

// Calculate Result
function calculateResult() {
    if (previousInput === '' || currentInput === '') return;

    let result;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert('Error: Division by Zero');
                clearDisplay();
                return;
            }
            result = num1 / num2;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateDisplay(currentInput);
}

// Update the display
function updateDisplay(value) {
    document.getElementById('display').value = value;
}