// Funcion para buscar Los relacionados ------------------------------------------>
// https://api.itbook.store/

function buscarLibros(event) {
    event.preventDefault()
    let search = document.getElementById("input__Search").value;
    const urlSearch = `https://api.itbook.store/1.0/search/${search}`;
    fetch(urlSearch)
        .then(result => result.json())
        .then(receivedData => {
            const libros = receivedData.books;
            mostrarLibros(libros);
        })
        .catch(error => {
            console.error('Error al buscar los libros:', error);
        });
}

// Evento ------------------------------------------>
const eventSubmit = document.getElementById("form__Header")
eventSubmit.addEventListener("submit", buscarLibros)