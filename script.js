//Declaracion de variables
const date = document.querySelector("#date") //Variable para la fecha
const enterTask = document.querySelector("#enter_task") //Variable para agregar una tarea desde el input
const list = document.querySelector("#list") //Variable para manejar la lista de tareas
const submitButton = document.querySelector("#submit") //Variable para manejar el boton de subida (+)
const lineThrought = 'line-through';

//Declaración de funciones
function addTask (task) {
    const listTemplate = `
                    <li id= "listTemplate">
                        <input type="checkbox">
                        <p class="task_text">${task}</p>
                        <i class="bi bi-pencil-square" data="edit" id="0"></i>
                        <i class="bi bi-trash-fill" data="delete" id="0"></i>
                    </li>` //Aquí converti el "template" de la lista con comillas al reves y en donde se supone yo creo la tarea reemplaza por el parametro "task" que debe ser llenado por usuario.
    list.insertAdjacentHTML("beforeend", listTemplate)
}

//Aca definiré que pasa al hacer click en el botón
submitButton.addEventListener('click', () => {
    const task = enterTask.value
    if (task) {
        addTask(task)
    } 
        enterTask.value='' 
});

//Aca definiré que pasa al apretar enter
enterTask.addEventListener('keydown', function (e) { 
    if (e.key === 'Enter') {
        const task = enterTask.value
         if (task) {
            addTask(task)
        } 
        enterTask.value=''
        } 
});

//Definiendo que pasa si está hecha la tarea








//Aca experimentando con borrar
function completeTask (e) { 
    let task = e.target.parentNode. parentNode;  
    task.classList.toggle('completed'); 
}

function deleteTask (e) { 
    let task = e.target.parentNode. parentNode; 
    task.remove();
}

iconDone.addEventListener ('click', completeTask)
iconDelete.addEventListener ('click', deleteTask)
