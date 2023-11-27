let tasks = [];

function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText === "") return;

    tasks.push({ text: taskText, completed: false, date: new Date() });
    taskInput.value = "";

    updateLists();
}

function updateLists() {
    const pendingTasks = document.getElementById("pending-tasks");
    const completedTasks = document.getElementById("completed-tasks");

    pendingTasks.innerHTML = "";
    completedTasks.innerHTML = "";

    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${task.text}
            <button onclick="markCompleted(${index})">Complete</button>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
            <small>${task.date.toLocaleString()}</small>
        `;

        if (task.completed) {
            completedTasks.appendChild(listItem);
        } else {
            pendingTasks.appendChild(listItem);
        }
    });
}

function markCompleted(index) {
    tasks[index].completed = true;
    updateLists();
}

function editTask(index) {
    const newText = prompt("Edit the task:", tasks[index].text);
    if (newText !== null) {
        tasks[index].text = newText;
        updateLists();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    updateLists();
}

updateLists();