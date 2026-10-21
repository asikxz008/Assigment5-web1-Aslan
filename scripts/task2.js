const paragraph = document.getElementById('changing-text');
const originalText = paragraph.textContent;

document.getElementById('change-text').addEventListener('click', function () {
  paragraph.textContent = 'The text has changed! JavaScript updated this paragraph.';
});

document.getElementById('reset-text').addEventListener('click', function () {
  paragraph.textContent = originalText;
});
