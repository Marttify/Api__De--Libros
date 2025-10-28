// ------------------------------------------------------------
// Mostrar las tarjetas de libros en el DOM
// Recorre el array recibido y genera dinámicamente una card por libro
// ------------------------------------------------------------

function mostrarLibros(libros) {
  const tablaBody = document.getElementById("libros");
  tablaBody.innerHTML = ""; // Limpia resultados previos

  // Mostrar spinner si no hay resultados
  if (!libros) {
    tablaBody.innerHTML = `
            <div class="d-flex justify-content-center my-5">
                <div class="spinner-border text-info" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        `;
    return;
  }

  // Genera una tarjeta por cada libro encontrado
  libros.forEach(libro => {
    tablaBody.innerHTML += `
      <a href="${libro.url}" target="_blank" class="card mb-3 myCard">
        <div class="row g-0">
          <div class="col-md-4">
            <img 
              src="${libro.image}" 
              class="img-fluid rounded-start" 
              alt="${libro.title}"
            >
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${libro.title}</h5>
              <p class="card-text">${libro.subtitle}</p>
              <p class="card-text">
                <small class="text-body-secondary">${libro.price}</small>
              </p>
            </div>
          </div>
        </div>
      </a>
    `;
  });
}
