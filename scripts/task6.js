const input = document.getElementById('live-input');
const output = document.getElementById('live-output');
const counter = document.getElementById('character-count');

function updateText() {
  output.textContent = input.value || 'Your text will appear here.';
  counter.textContent = input.value.length + ' / 200';
}

input.addEventListener('keyup', updateText);
// Also support pasting, cutting, and mobile input without a physical key release.
input.addEventListener('input', updateText);
