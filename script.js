//Declaracion de variables
const date = document.querySelector("#date") //Variable para la fecha
const enterTask = document.querySelector("#enter_task") //Variable para agregar una tarea desde el input
const list = document.querySelector("#list") //Variable para manejar la lista de tareas
const submitButton = document.querySelector("#submit") //Variable para manejar el boton de subida (+)

//Declaración de funciones
function addTask (task) {
    const listTemplate = `
                    <li id= "listTemplate">
                        <i class="bi bi-square" data="done" id="0"></i>
                        <p class="task_text">${task}</p>
                        <i class="bi bi-pencil-square" data="edit" id="0"></i>
                        <i class="bi bi-trash-fill" data="delete" id="0"></i>
                    </li>` //Aquí converti el "template" de la lista con comillas al reves y en donde se supone yo creo la tarea reemplaza por el parametro "task" que debe ser llenado por usuario.
    list.insertAdjacentHTML("beforeend", listTemplate)
}




