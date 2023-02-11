const display1 = document.querySelector('.display-1');
const display2 = document.querySelector('.display-2');
const allButtons = document.querySelectorAll('.button');
let displayValue = '';
let firstValue = '';
let secondValue = '';
let operator = '';

allButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerText;

        if (value === 'C') {
            displayValue = '';
            firstValue = '';
            secondValue = '';
            operator = '';
            display1.innerText = '0';
            display2.innerText = '0';
        } else if (value === 'CE') {
            displayValue = '';
            display1.innerText = '0';
        } else if (value === '+' || value === '-' || value === 'X' || value === '/' || value === '%') {
            firstValue = displayValue;
            operator = value;
            displayValue = '';
            display2.innerText = firstValue + operator;
        } else if (value === '=') {
            secondValue = displayValue;
            displayValue = '';
            display1.innerText = calculate(firstValue, secondValue, operator);
            display2.innerText = '';
        } else {
            displayValue += value;
            display1.innerText = displayValue;
        }
    });
});

const calculate = (firstValue, secondValue, operator) => {
    let result = '';
    switch (operator) {
        case '+':
            result = parseFloat(firstValue) + parseFloat(secondValue);
            break;
        case '-':
            result = parseFloat(firstValue) - parseFloat(secondValue);
            break;
        case 'X':
            result = parseFloat(firstValue) * parseFloat(secondValue);
            break;
        case '/':
            result = parseFloat(firstValue) / parseFloat(secondValue);
            break;
        case '%':
            result = parseFloat(firstValue) % parseFloat(secondValue);
            break;
        default:
            return;
    }
    return result;
}
