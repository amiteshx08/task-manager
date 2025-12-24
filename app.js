const taskForm = document.querySelector('#task-form');
const taskList = document.querySelector('#task-list');

console.log(taskForm, taskList);

taskForm.addEventListener('submit', function(e){
    e.preventDefault();

    const taskInput = document.querySelector('#form-input');
    const taskText = taskInput.value.trim();

    if(taskText !== ""){

        
    }
})