// ------------------------------------------------------------
// Búsqueda de libros relacionados
// API: https://api.itbook.store/
// ------------------------------------------------------------

function buscarLibros(event) {
    event.preventDefault(); // Evita recargar la página al enviar el formulario

    // Obtiene el término de búsqueda desde el input
    const search = document.getElementById("input__Search").value;

    // Construye la URL de búsqueda dinámica según el término ingresado
    const urlSearch = `https://api.itbook.store/1.0/search/${search}`;

    fetch(urlSearch)
        .then(result => result.json())
        .then(receivedData => {
            // Extrae la lista de libros del resultado
            const libros = receivedData.books;

            // Verifica si se encontraron libros
            if (libros === undefined || libros.length === 0) {
                mostrarError();
                return;
            }

            // Muestra los libros en el DOM (función definida aparte)
            mostrarLibros(libros);
        })
        .catch(error => {
            console.error('Error al buscar los libros:', error);
        });
}


const eventSubmit = document.getElementById("form__Header");
eventSubmit.addEventListener("submit", buscarLibros);
