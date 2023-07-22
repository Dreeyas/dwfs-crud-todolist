# Proyecto Create, Read, Update & Delete (CRUD).
## Descripción del proyecto:
El siguiente repositorio contiene el código fuente para construcción de una página web interactiva tipo “To-Do List” o lista de tareas, llamada "A To-Do List App"

El objetivo de este proyecto fue construir una estructura básica de página web, utilizando tecnologías HTML, CSS y JavaScript. 

## Características del proyecto:
La aplicación se divide en cuatro secciones principales:

+ **Sección de bienvenida al usuario:** Esta sección tiene como objetivo sumergir al usuario en una experiencia más personalizada al hacer uso de la aplicación. Al ingresar a la página web, se le pide al usuario que ingrese su nombre o simplemente se puede omitir este paso, haciendo clic en el botón “Cancelar” del pop-up. Si el usuario ingresa un nombre, se verá reflejado en el inicio de la página junto al mensaje de saludo, el cual también cambia de acuerdo con el rango horario en el cual el usuario esté haciendo uso de la aplicación. 

+ **Sección de ingreso de tareas:** Está sección es donde el usuario puede hacer ingreso de sus tareas. Cuenta con un input o casilla de texto en la cual se puede escribir. Además, cuenta con un botón al costado de la casilla el cual permite ingresar la tarea (Esta función también puede llevarse a cabo al hacer clic en la tecla “Intro” (Enter) del teclado)

+ **Sección de lista de tareas:** Esta sección permanecerá vacía a menos que el usuario ingrese una tarea desde la sección “ingreso de tareas”. La lista comenzará a desplegarse a medida que el usuario ingrese las tareas. Cada tarea contiene: un input de checkbox, el texto de la tarea ingresada por el usuario, un botón para editar la tarea y un botón para eliminar la tarea. El botón editar permite la creación de un input donde el usuario puede editar la tarea, la cual se guardará al apretar la tecla "intro" o "enter".

+ **Sección final:** Esta pequeña sección contiene un simple botón “Clear All Tasks”, que, como su nombre lo indica, permitirá al usuario borrar toda la lista de tareas y limpiar la sección de “ingreso de tareas”.

## Uso de Local Storage:
Este proyecto tiene una característica especial que es la implementación de LocalStorage para almacenar las tareas creadas por el usuario, de modo que se pueda cerrar o recargar la aplicación sin perder los datos ingresados en las tareas. Esto permite mantener un seguimiento de las tareas en un largo plazo.

## Visualización del Proyecto:
Puedes ver un preview en vivo copiando y pegando este enlace en el buscador:

https://dreeyas.github.io/dwfs-crud-todolist/

También puedes acceder al código clonando el repositorio en una máquina local usando:

git clone https://github.com/Dreeyas/dwfs-crud-todolist.git
