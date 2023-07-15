//Declaracion de variables
let tasks = [];
const enterTask = document.querySelector("#enter_task") //Variable para agregar una tarea desde el input
const list = document.querySelector("#task-list") //Variable para manejar la lista de tareas
const submitButton = document.querySelector("#submit") //Variable para manejar el boton de subida (+)

//Declaración de funciones

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
    list.appendChild(listItem)
    enterTask.value = "";
}

//ZONA DE MOSTRAR TAREAS EN LA LISTA
 function showTask(){
    tasks.forEach((task) => {
        addTask(task);
    });
 }

//ZONA DE AGREGAR HACIENDO CLICK EN EL BOTON + 
submitButton.addEventListener('click', () => {
    const task = enterTask.value
    if (task === "") {
        alert('No has ingresado ninguna tarea 👀')
    } else
        addTask(task)
});

//ZONA DE AGREGAR HACIENDO APRETANDO ENTER
enterTask.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        const task = enterTask.value
        if (task === "") {
            alert('No has ingresado ninguna tarea 👀')
        } else
            addTask(task)
    }
});

