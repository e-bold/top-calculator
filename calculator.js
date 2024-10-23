const skeleton = document.querySelector('.skeleton')
const display = document.querySelector('.display')

let displayValue = '0';

let firstVal = null;
let secondVal = null;





function updateDisplayValue(value) {
    displayValue = value;
    firstVal = display.textContent;
    if(firstval !== null) {
        secondVal = display.textContent;
    }
  }
  
  document.querySelectorAll('.numbers button').forEach(button => {
    button.addEventListener('click', () => {
      const buttonText = button.textContent;
      
      if ()









      if (buttonText === 'C') {
        displayValue = '0';
        updateDisplayValue(displayValue);
      } 

      else if (buttonText === '=') {
        updateDisplayValue(displayValue);
      } 

      else {
        if (displayValue === '0') {
          displayValue = buttonText;
        } 
        else {
          displayValue += buttonText;
        }
        updateDisplayValue(displayValue);
      }
    });
  });


function add (a , b) {
    return a + b;
}

function subtract (a , b) {
    return a - b;
}

function multiply (a , b) {
    return a * b;
}
function divide (a , b) {
    return a / b;
}


function operate (a, b, operator) {
    a = Number(a)
    b = Number(b)
  switch (operator) {
    case '+':
      return add(a, b)
    case '−':
      return substract(a, b)
    case '×':
      return multiply(a, b)
    case '÷':
      if (b === 0) return null
      else return divide(a, b)
    default:
      return null
  }
}