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


console.log(add(4, 6));
console.log(subtract(4, 6));
console.log(multiply(4, 6));
console.log(divide(4, 6));

const a = 0;
const b = 0;

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