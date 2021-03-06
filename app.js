// Define Ui vars

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//load all event listeners
loadEventListeners();

function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);
}

//Add Task
function addTask(e) {
  if (taskInput.value === '') {
    alert(' Add a task');
  }

  //create li element
  const li = document.createElement('li');
  //Add class
  li.className = 'collection-item';
  //create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  //create new link  element
  const link = document.createElement('a');
  //Add class
  link.className = 'delete-item secondary-content';
  //ADD icon html
  link.innerHTML = '<i class="material-icons">delete</i>';
  //Append the link to li
  li.appendChild(link);
  // append li to ul

  taskList.appendChild(li);
  //clear input
  taskInput.value = '';

  e.preventDefault();
}
