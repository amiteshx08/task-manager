const taskForm = document.querySelector("#task-form");
const taskList = document.querySelector("#task-list");
const deleteAll = document.querySelector(".del-all");

const marker = "-";
//Helper functions
function getTasks() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const taskInput = document.querySelector("#task-input");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskItem = document.createElement("li");
    const taskName = document.createElement("span");
    const deleteItem = document.createElement("span");
    taskItem.classList.add("task-item");
    taskName.classList.add("task-name");
    deleteItem.classList.add("delete-item");

    taskName.textContent = `${marker} ${taskText}`;
    deleteItem.textContent = "del";

    taskItem.addEventListener("click", function () {
      // console.log('completed');
      this.classList.toggle("completed");
    });
    taskItem.appendChild(taskName);
    taskItem.appendChild(deleteItem);

    taskList.appendChild(taskItem);

    const tasks = getTasks();
    tasks.push(taskText);
    saveTasks(tasks);

    taskInput.value = "";
  }
});

//Delete Single
// taskList.addEventListener("click", function (e) {
//   if (e.target.className === "delete-item") {
//     const li = e.target.parentElement;
//     taskList.removeChild(li);
//     localStorage.removeItem(li);
//   }
  
// });
taskList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-item")) {
    const li = e.target.parentElement;

    
    const taskText = li.querySelector(".task-name")
      .textContent.replace(`${marker} `, "");

    
    li.remove();

    
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});

//Delete Multiple
// deleteAll.addEventListener("click", function (e) {
//   const completedTasks = document.querySelectorAll(".completed");

//   completedTasks.forEach((task) => {
//     task.remove();
//   });
// });
deleteAll.addEventListener("click", function () {
  const completedTasks = document.querySelectorAll(".completed");

  
  completedTasks.forEach(task => task.remove());

  
  const remainingTasks = [];

  document.querySelectorAll(".task-name").forEach(span => {
    const text = span.textContent.replace(`${marker} `, "");
    remainingTasks.push(text);
  });

  
  localStorage.setItem("tasks", JSON.stringify(remainingTasks));
});


//LocalStorage
document.addEventListener("DOMContentLoaded", function () {
  const tasks = getTasks();
  tasks.forEach(taskText => {
    const taskItem = document.createElement("li");
    const taskName = document.createElement("span");
    const deleteItem = document.createElement("span");

    taskItem.classList.add("task-item");
    taskName.classList.add("task-name");
    deleteItem.classList.add("delete-item");

    taskName.textContent = `${marker} ${taskText}`;
    deleteItem.textContent = "del";

    taskItem.addEventListener("click", function () {
      // console.log('completed');
      this.classList.toggle("completed");
    });

    taskItem.append(taskName, deleteItem);
    taskList.appendChild(taskItem);
  });
});
