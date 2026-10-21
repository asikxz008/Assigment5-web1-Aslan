const form = document.getElementById('todo-form');
const input = document.getElementById('task-input');
const list = document.getElementById('todo-list');
const emptyState = document.getElementById('empty-state');
const summary = document.getElementById('todo-summary');
const status = document.getElementById('todo-status');
let tasks = []; // Temporary state only: leaving or reloading clears the array.
let nextId = 1;

function updateSummary() {
  const completed = tasks.filter(function (task) { return task.completed; }).length;
  summary.textContent = tasks.length + (tasks.length === 1 ? ' task' : ' tasks') + ' · ' + completed + ' completed';
  emptyState.hidden = tasks.length > 0;
}

function addTaskElement(task) {
  const item = document.createElement('li');
  const label = document.createElement('label');
  label.className = 'todo-label';
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.setAttribute('aria-label', 'Mark ' + task.text + ' as completed');
  const text = document.createElement('span');
  text.className = 'todo-text';
  text.textContent = task.text;
  const deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.textContent = 'Delete';
  deleteButton.setAttribute('aria-label', 'Delete ' + task.text);

  checkbox.addEventListener('change', function () {
    task.completed = checkbox.checked;
    item.classList.toggle('is-complete', task.completed);
    checkbox.setAttribute('aria-label', 'Mark ' + task.text + (task.completed ? ' as incomplete' : ' as completed'));
    updateSummary();
    status.textContent = task.completed ? 'Task completed.' : 'Task marked as incomplete.';
  });
  deleteButton.addEventListener('click', function () {
    tasks = tasks.filter(function (savedTask) { return savedTask.id !== task.id; });
    item.remove();
    updateSummary();
    status.textContent = 'Task deleted.';
    input.focus();
  });

  label.append(checkbox, text);
  item.append(label, deleteButton);
  list.appendChild(item);
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const text = input.value.trim();
  if (text === '') {
    status.textContent = 'Enter a task before adding it.';
    input.focus();
    return;
  }
  const task = { id: nextId++, text: text, completed: false };
  tasks.push(task);
  addTaskElement(task);
  updateSummary();
  input.value = '';
  input.focus();
  status.textContent = 'Task added.';
});
updateSummary();
