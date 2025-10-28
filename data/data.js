// ------------------------------------------------------------
// Obtener y mostrar los libros más recientes desde la API
// Fuente: https://api.itbook.store/1.0/new
// ------------------------------------------------------------

function obtenerDatos() {
    const urlGet = "https://api.itbook.store/1.0/new";

    fetch(urlGet)
        .then(result => result.json())
        .then(receivedData => {
            // Extrae la lista de libros del objeto recibido
            const libros = receivedData.books;

            // Muestra los libros en el DOM (función definida aparte)
            mostrarLibros(libros);
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
}

// Llamado inicial a la función
obtenerDatos();
