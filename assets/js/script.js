var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");


var createTaskHandler = function() {
    
    console.log(event);
    
    event.preventDefault();

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
}

// This statement can be read as "on a button click, create a task"
formEl.addEventListener("submit", createTaskHandler);