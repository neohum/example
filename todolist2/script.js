const inputbox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
  if(inputbox.value === '') {
    alert('Please enter a value');
    
  } else {
    let li = document.createElement('li');
    li.innerHTML = inputbox.value;
    listContainer.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00D7';
    li.appendChild(span);
  }
  inputbox.value = '';
  saveData();
}

listContainer.addEventListener('click', function (e) {
  if(e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
    saveData();
  }
  else if(e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData() {
  localStorage.setItem('listContainer', listContainer.innerHTML);
}

function loadData() {
  listContainer.innerHTML = localStorage.getItem('listContainer');
}

loadData();