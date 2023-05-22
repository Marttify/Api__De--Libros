

// Llamado a la APi ------------------------------------------>
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



// Funcion para imprimir la tarjeta de los libros ------------------------------------------>
function mostrarLibros(libros) {
    let tablaBody = document.getElementById("libros");
    tablaBody.innerHTML = "";

    libros.forEach(libro => {
        tablaBody.innerHTML += `
            <a href="${libro.url}" target="_blank" class="card mb-3 myCard" >
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${libro.image}" class="img-fluid rounded-start" alt="${libro.title}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${libro.title}</h5>
                            <p class="card-text">${libro.subtitle}</p>
                            <p class="card-text"><small class="text-body-secondary">${libro.price}</small></p>
                        </div>
                    </div>
                </div>
            </a>
        `;
    });
}

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



obtenerDatos();
