//Declaracion de variables
let tasks = [];
const enterTask = document.querySelector("#enter_task") //Variable para agregar una tarea desde el input
const list = document.querySelector("#task-list") //Variable para manejar la lista de tareas
const submitButton = document.querySelector("#submit") //Variable para manejar el boton de subida (+)


//ZONA DE AGREGAR TAREA EN EL INPUT
function addTask(task) {
    tasks.push(task);
    const listItem = document.createElement("li");
    listItem.innerHTML =
                        `
                        <input type="checkbox">
                        <p class="task_text">${task}</p>
                        <i class="bi bi-pencil-square"></i>
                        <i class="bi bi-trash-fill"></i>
                        </li>
                        `;

    list.appendChild(listItem);
    enterTask.value = "";
}

//ZONA DE BORRAR TAREA 
function deleteTask(task, listItem) {
    const index = tasks.indexOf(task);
    tasks.splice(index, 1);
    list.removeChild(listItem);
  };


//AGREGANDO HACIENDO CLICK EN EL BOTON + 
submitButton.addEventListener('click', () => {
    const task = enterTask.value
    if (task === "") {
        alert('No has ingresado ninguna tarea 👀')
    } else
        addTask(task)
});

//AGREGANDO HACIENDO ENTER
enterTask.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        const task = enterTask.value
        if (task === "") {
            alert('No has ingresado ninguna tarea 👀')
        } else
            addTask(task)
    }
});

//BORRANDO CON EL BOTON TRASH-CAN
list.addEventListener('click', (e) => {
    const deleteButton = e.target.closest(".bi-trash-fill");
    if (deleteButton) {
      const listItem = deleteButton.parentNode;
      const taskText = listItem.querySelector(".task_text");
      const task = taskText.textContent;
      deleteTask(task, listItem);
    }
  });

//ZONA DE MOSTRAR TAREAS EN LA LISTA
function showTask() {
    tasks.forEach((task) => {
        addTask(task);
    });
}



