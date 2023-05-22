
// Llamado a la API ------------------------------------------>
function obtenerDatos() {
    const urlGet = "https://api.itbook.store/1.0/new";
    fetch(urlGet)
        .then(result => result.json())
        .then(receivedData => {
            const libros = receivedData.books;
            mostrarLibros(libros);
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
}

obtenerDatos()


