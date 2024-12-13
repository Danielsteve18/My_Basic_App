
const eventForm = document.getElementById('event-form');
const evento_nombreinput = document.getElementById('evento-nombre');
const fechainput = document.getElementById('fecha-event');
const recordatorioinput = document.getElementById('recordar-event');
const ulu = document.getElementById('events');

eventForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const eventoNombre = evento_nombreinput.value;
    const eventofecha = fechainput.value;
    const eventorecordatorio = recordatorioinput.value;

    // Validación de campos vacíos
    if (eventoNombre === '' || eventofecha === '' || eventorecordatorio === '') {
        alert('Todos los campos son obligatorios.');
        return;
    }

    // Crear un nuevo elemento de lista (<li>)
    const li = document.createElement('li');
    li.innerHTML = `<span>${eventoNombre} - ${eventofecha} - ${eventorecordatorio}</span> 
    <button class="delete-btn">Eliminar</button> <button class="complete-btn">Completada</button>`;

    // Añadir el nuevo elemento a la lista
    ulu.appendChild(li);

    // Limpiar los campos de entrada
    evento_nombreinput.value = '';
    fechainput.value = '';
    recordatorioinput.value = '';

    // Estilo CSS para el resaltado
    const style = document.createElement('style');
    style.textContent = `
    .completed {
        background-color: #c3f7c3; 
        border: 2px solid #2e7d32; 
        color: #2e7d32;
        text-decoration: line-through; 
    }`;
    document.head.appendChild(style);

    // Añadir funcionalidad de eliminación al botón "Eliminar"
    const deleteButton = li.querySelector('.delete-btn');
    deleteButton.addEventListener('click', function() {
        li.remove(); // Eliminar el elemento de la lista
    });

    // Añadir funcionalidad de completado al botón "Completada"
    const completeButton = li.querySelector('.complete-btn');
    completeButton.addEventListener('click', function() {
        li.classList.toggle('completed'); // Alternar la clase 'completed'
    });
});
