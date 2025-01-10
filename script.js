// Elementleri Seçme
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const todoList = document.getElementById('todoList');

// Görev Ekleme
addTaskButton.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Görev öğesi oluşturma
    const taskItem = document.createElement('li');
    taskItem.classList.add('task');
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <span class="delete">X</span>
    `;

    // Görevi listeye ekleme
    todoList.appendChild(taskItem);

    // Görev tamamlanma ve silme
    taskItem.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });
    taskItem.querySelector('.delete').addEventListener('click', () => {
        todoList.removeChild(taskItem);
    });

    // Giriş alanını temizleme
    taskInput.value = '';
}
