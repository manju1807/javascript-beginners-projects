const display1 = document.querySelector('.display-1');
const display2 = document.querySelector('.display-2');
const temp = document.querySelector('.temp');
const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operation');
const equal = document.querySelector('.equal');
const clearAll = document.querySelector('.all-clear');
const clearLast = document.querySelector('.last-entity-clear');

let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOperation = '';
let haveDot = false;

numbers.forEach(number => {
  number.addEventListener('click', (e) => {
    if (e.target.innerText === '.' && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText === '.' && haveDot) {
      return;
    }
    dis2Num += e.target.innerText;
    display2.innerText = dis2Num;
  });
});

operations.forEach(operation => {
  operation.addEventListener('click', (e) => {
    if (!dis2Num) return;
    haveDot = false;
    const operationName = e.target.innerText;
    if (dis1Num && dis2Num && lastOperation) {
      performMathOperation();
    } else {
      result = parseFloat(dis2Num);
    }
    clearVars(operationName);
    lastOperation = operationName;
  });
});

function clearVars(name = '') {
  dis1Num += dis2Num + ' ' + name + ' ';
  display1.innerText = dis1Num;
  display2.innerText = '';
  dis2Num = '';
  temp.innerText = result;
}

function performMathOperation() {
  if (lastOperation === 'X') {
    result = parseFloat(result) * parseFloat(dis2Num);
  } else if (lastOperation === '+') {
    result = parseFloat(result) + parseFloat(dis2Num);
  } else if (lastOperation === '-') {
    result = parseFloat(result) - parseFloat(dis2Num);
  } else if (lastOperation === '/') {
    result = parseFloat(result) / parseFloat(dis2Num);
  } else if (lastOperation === '%') {
    result = parseFloat(result) % parseFloat(dis2Num);
  }
}

equal.addEventListener('click', (e) => {
  if (!dis1Num || !dis2Num) return;
  haveDot = false;
  performMathOperation();
  clearVars();
  display2.innerText = result;
  temp.innerText = '';
  dis2Num = result;
  dis1Num = '';
});

clearAll.addEventListener('click', (e) => {
  display1.innerText = '';
  display2.innerText = '';
});