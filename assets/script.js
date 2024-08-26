// arrays, lista de tareas
const tasks = [
    { description: 'Estudiar JavaScript', completed: false },
    { description: 'Comprar hamburguesas', completed: false },
    { description: 'Hacer ejercicio', completed: false },
    { description: 'Salir a correr un rato', completed: false},
    { description: 'Hacer cariño al gato', completed: false},
    { description: 'Hacer cariño al perro', completed: false},
    { description: 'Estudiar Python', completed: false},
    { description: 'Jugar Ragnarok Online', completed: false},
];

// esta función actualiza el resumen de tareas en el DOM
// Se usa para calcular y mostrar el número total de tareas y cuántas de ellas han sido completadas.
function updateSummary() {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    document.getElementById('total-tasks').textContent = totalTasks;
    document.getElementById('completed-tasks').textContent = completedTasks;
}

function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = ''; // Limpia la lista
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';
        
        const taskDescription = document.createElement('span');
        taskDescription.textContent = task.description;
        
        const changeBtn = document.createElement('button');
        changeBtn.textContent = 'Cambiar';
        changeBtn.className = 'change-btn';
        changeBtn.addEventListener('click', () => toggleTaskCompleted(index));
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.addEventListener('click', () => deleteTask(index));
        
        li.appendChild(taskDescription);
        li.appendChild(changeBtn);
        li.appendChild(deleteBtn);
        
        taskList.appendChild(li);
    });

    updateSummary();
}

function addTask() { // agrega una nueva tarea
    const newTaskInput = document.getElementById('new-task');
    const newTaskDescription = newTaskInput.value.trim(); // este método trim() elimina los espacios de ambos lados del string
    
    if (newTaskDescription !== '') {
        tasks.push({ description: newTaskDescription, completed: false });
        newTaskInput.value = ''; // Limpio el input
        renderTasks();
    }
}
// borrar una tarea
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function toggleTaskCompleted(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// agrego tarea nueva
document.getElementById('add-task-btn').addEventListener('click', addTask);

renderTasks();



