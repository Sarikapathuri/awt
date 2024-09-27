// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    if (taskInput.value.trim() === '') {
        alert('Please enter a task!');
        return;
    }

    const newTask = document.createElement('li');
    newTask.innerHTML = `
        <span onclick="toggleTask(this)">${taskInput.value}</span>
        <button class="remove-btn" onclick="removeTask(this)">Remove</button>
    `;

    taskList.appendChild(newTask);
    taskInput.value = '';
}

// Function to toggle task completion
function toggleTask(task) {
    task.parentNode.classList.toggle('completed');
}

// Function to remove a task
function removeTask(button) {
    button.parentNode.remove();
}
