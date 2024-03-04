let tasks = [];

function addTask(title, description, dueDate) {
    tasks.push({ title, description, dueDate, completed: false });
    console.log(`Task "${title}" added.`);
}

function displayTasks() {
    tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    console.log(" New tasks sorted by due date:");
    tasks.forEach(task => {
        console.log(`Title: ${task.title}, Due Date: ${task.dueDate}`);
    });
}

function updateTask(title, newDescription, newDueDate, completed) {
    const task = tasks.find(task => task.title === title);
    if (task) {
        task.description = newDescription;
        task.dueDate = newDueDate;
        task.completed = completed;
        console.log(`Task "${title}" updated.`);
    } else {
        console.log(`Task "${title}" not found.`);
    }
}

function removeTask(title) {
    const index = tasks.findIndex(task => task.title === title);
    if (index !== -1) {
        tasks.splice(index, 1);
        console.log(`Task "${title}" removed.`);
    } else {
        console.log(`Task "${title}" not found.`);
    }
}

addTask("Complete project", "Finish the project documentation", "2024-03-10");
addTask("Meeting with client", "Discuss project updates with the client", "2024-03-15");
addTask("Submit report", "Submit the monthly progress report", "2024-03-20");

displayTasks();

updateTask("Complete project", "Review and finalize documentation", "2024-03-12", true);

removeTask("Meeting with client");

displayTasks();
