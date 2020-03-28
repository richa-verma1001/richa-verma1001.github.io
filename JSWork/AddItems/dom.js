console.log('Dom JS executed with an edit');

// Load init after all content is loaded. Without this line,
// must load script post creating HTML DOM i.e. script should be
// placed in footer or wrap eventListener add around in init
document.addEventListener('DOMContentLoaded', init);

function init() {
  function addItem() {
    console.log('Add is being called');
    let input = document.getElementById('_itemName');
    let items = document.getElementById('items');
    let listItem = createListItem(input.value);
    let anchor = createCloseBtn();
    listItem.appendChild(anchor);
    items.appendChild(listItem);
    input.value = '';
  }
  function createListItem(value) {
    let elem = document.createElement('li');
    elem.className = "list-group-item";
    elem.innerText = value;
    return elem;
  }

  function createCloseBtn() {
    let anchor = document.createElement('a');
    anchor.href = "#";
    anchor.id="_remove";
    anchor.innerText = 'X';
    addRemoveListener(anchor);
    return anchor;
  }

  function addListeners(event) {
    console.log('Event listeners being added');
    let btn = document.getElementById('add');
    btn.addEventListener('click', addItem );
    let removeList = document.querySelectorAll('#_remove');
    removeList.forEach(addRemoveListener);
  }

  function addRemoveListener(node) {
    console.log(`Adding listener to the remove button`);
    console.log(node);
    node.addEventListener('click', removeItem);
  }

  function removeItem(event) {
    console.log(event);
    event.target.parentElement.remove();

  }
  addListeners();
}
