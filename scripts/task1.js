const studentName = 'Sabyr Aslan'; // string
const lessonCount = 9; // number
const isLearning = true; // boolean
const a = 12;
const b = 4;
const greeting = 'Hello, ' + studentName + '!';

function showResults() {
  const lines = [
    'studentName = "' + studentName + '" (' + typeof studentName + ')',
    'lessonCount = ' + lessonCount + ' (' + typeof lessonCount + ')',
    'isLearning = ' + isLearning + ' (' + typeof isLearning + ')',
    '',
    a + ' + ' + b + ' = ' + (a + b),
    a + ' - ' + b + ' = ' + (a - b),
    a + ' * ' + b + ' = ' + (a * b),
    a + ' / ' + b + ' = ' + (a / b),
    a + ' % ' + b + ' = ' + (a % b),
    '',
    'Concatenation: ' + greeting
  ];
  lines.forEach(function (line) { console.log(line); });
  document.getElementById('console-output').textContent = lines.join('\n');
}

document.getElementById('run-script').addEventListener('click', showResults);
showResults();
