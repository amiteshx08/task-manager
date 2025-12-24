const taskForm = document.querySelector("#task-form");
const taskList = document.querySelector("#task-list");

const marker = '-';

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const taskInput = document.querySelector('#task-input');
  const taskText = taskInput.value.trim();

  if(taskText !== "") {

    const taskItem = document.createElement('li');
    const taskName = document.createElement('span');
    const deleteItem = document.createElement('span');
    taskItem.classList.add('task-item');
    taskName.classList.add('task-name');
    deleteItem.classList.add('delete-item');

    taskName.textContent = `${marker} ${taskText}`;
    deleteItem.textContent = 'del';

    taskItem.addEventListener('click', function() {
        console.log('completed');
        this.classList.toggle('completed');
    })
    taskItem.appendChild(taskName);
    taskItem.appendChild(deleteItem);

    taskList.appendChild(taskItem);
    
    taskInput.value = "";
  }

});

