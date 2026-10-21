const list = document.getElementById('item-list');
const removeButton = document.getElementById('remove-item');
const emptyState = document.getElementById('empty-state');
const status = document.getElementById('item-status');
let nextItem = 1;

function updateList() {
  const count = list.children.length;
  emptyState.hidden = count > 0;
  removeButton.disabled = count === 0;
  document.getElementById('item-count').textContent = count + (count === 1 ? ' item' : ' items');
}

document.getElementById('add-item').addEventListener('click', function () {
  const item = document.createElement('li');
  item.textContent = 'Item ' + nextItem;
  nextItem++;
  list.appendChild(item);
  status.textContent = item.textContent + ' added.';
  updateList();
});

removeButton.addEventListener('click', function () {
  const lastItem = list.lastElementChild;
  if (lastItem) {
    status.textContent = lastItem.textContent + ' removed.';
    lastItem.remove();
    updateList();
  }
});
updateList();
