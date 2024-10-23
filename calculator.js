const skeleton = document.querySelector('.skeleton');
const display = document.querySelector('.display');

let displayValue = '0';
let firstVal = null;
let secondVal = null;
let operator = null;
let result = null;

function updateDisplayValue(value) {
    displayValue = value;
    display.textContent = displayValue;
}

document.querySelectorAll('.numbers button').forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        if (buttonText === 'C') {
            displayValue = '0';
            firstVal = null;
            secondVal = null;
            operator = null;
            result = null;
            updateDisplayValue(displayValue);
        } else if (buttonText === '=') {
            if (firstVal !== null && operator !== null) {
                secondVal = displayValue;
                result = operate(firstVal, secondVal, operator);
                updateDisplayValue(result);
                firstVal = null;
                secondVal = null;
                operator = null;
                displayValue = result;
            }
        } else {
            if (result !== null) { 
                result = null;
                displayValue = buttonText;
            } else if (displayValue === '0') {
                displayValue = buttonText;
            } else {
                displayValue += buttonText;
            }
            updateDisplayValue(displayValue);
        }
    });
});

document.querySelectorAll('.operations button').forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        if (result !== null) { 
            firstVal = result;
            result = null;
        } else if (firstVal === null) {
            firstVal = displayValue;
        }
        operator = buttonText;
        displayValue = '0';
        updateDisplayValue(displayValue);
    });
});

function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a, b) {
    if (b === '0') return null;
    return Number(a) / Number(b);
}

function operate(a, b, operator) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return null;
    }
}