const studentName = 'Sabyr Aslan';
const group = 'SE-2528';

console.log('Name: ' + studentName);
console.log('Group: ' + group);
document.getElementById('console-output').textContent = 'Name: ' + studentName + '\nGroup: ' + group;

function showGreeting() {
  alert('Hello, JavaScript World!');
}

document.getElementById('show-greeting').addEventListener('click', showGreeting);
showGreeting();
