const box = document.getElementById('hover-box');
const status = document.getElementById('mouse-status');
const originalColor = '#edf0ff';
const hoverColor = '#dff5e9';

function enterBox() {
  box.style.backgroundColor = hoverColor;
  status.textContent = 'Inside the box: the color has changed.';
}

function leaveBox() {
  box.style.backgroundColor = originalColor;
  status.textContent = 'Outside the box: the original color is restored.';
}

box.addEventListener('mouseover', enterBox);
box.addEventListener('mouseout', leaveBox);
// Keyboard users can try the same effect by focusing and leaving the box.
box.addEventListener('focus', enterBox);
box.addEventListener('blur', leaveBox);
