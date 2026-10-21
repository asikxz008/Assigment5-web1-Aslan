const box = document.getElementById('style-box');
const status = document.getElementById('style-status');
const colors = ['#edf0ff', '#dff5e9', '#fff1d6'];
const sizes = [18, 22, 26, 30];
let colorIndex = 0;
let sizeIndex = 0;

function updateStyles() {
  box.style.backgroundColor = colors[colorIndex];
  box.style.fontSize = sizes[sizeIndex] + 'px';
  status.textContent = 'Background: ' + colors[colorIndex] + ' · Font size: ' + sizes[sizeIndex] + 'px';
}

document.getElementById('change-background').addEventListener('click', function () {
  colorIndex = (colorIndex + 1) % colors.length;
  updateStyles();
});
document.getElementById('change-font').addEventListener('click', function () {
  sizeIndex = (sizeIndex + 1) % sizes.length;
  updateStyles();
});
document.getElementById('reset-styles').addEventListener('click', function () {
  colorIndex = 0;
  sizeIndex = 0;
  updateStyles();
});
updateStyles();
