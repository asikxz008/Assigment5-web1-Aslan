const form = document.getElementById('calculator');
const result = document.getElementById('calc-result');
const expression = document.getElementById('calc-expression');
const resultBox = document.getElementById('result-box');

function showError(message) {
  resultBox.dataset.state = 'error';
  expression.textContent = 'Please check your numbers.';
  result.textContent = message;
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const first = Number(document.getElementById('first-number').value);
  const second = Number(document.getElementById('second-number').value);
  const operation = event.submitter ? event.submitter.value : 'add';
  let answer;
  let symbol;

  if (!Number.isFinite(first) || !Number.isFinite(second)) {
    showError('Enter two finite numbers.');
    return;
  }
  if (operation === 'add') {
    answer = first + second;
    symbol = '+';
  } else if (operation === 'subtract') {
    answer = first - second;
    symbol = '−';
  } else if (operation === 'multiply') {
    answer = first * second;
    symbol = '×';
  } else if (operation === 'divide') {
    if (second === 0) {
      showError('Cannot divide by zero.');
      return;
    }
    answer = first / second;
    symbol = '÷';
  }
  if (!Number.isFinite(answer)) {
    showError('The result is too large to display.');
    return;
  }
  // Round display noise such as 0.1 + 0.2; keep up to 12 significant digits.
  result.textContent = String(Number(answer.toPrecision(12)));
  expression.textContent = first + ' ' + symbol + ' ' + second + ' =';
  resultBox.dataset.state = 'success';
});

form.addEventListener('input', function () {
  result.textContent = '—';
  expression.textContent = 'Choose an operation.';
  delete resultBox.dataset.state;
});
