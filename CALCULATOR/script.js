let display = document.getElementById('display');
let currentNumber = '';
let previousNumber = '';
let operator = null;

function appendNumber(number) {
    if (number === '.' && currentNumber.includes('.')) return;
    currentNumber += number;
    display.textContent = currentNumber;
}

function appendOperator(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        compute();
    }
    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operator = null;
    display.textContent = '0';
}

function deleteLast() {
    currentNumber = currentNumber.slice(0, -1);
    display.textContent = currentNumber || '0';
}

function compute() {
    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return ;
    }

    currentNumber = result;
    operator = null;
    previousNumber = '';
    display.textContent = result;
}
