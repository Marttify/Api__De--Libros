function mostrarError() {
    const tablaBody = document.getElementById("libros");
    tablaBody.innerHTML = `
        <div class="alert alert-warning text-center" role="alert">
            No existe el producto, revisa el resto de productos que tenemos dispoibles.
            <a href="index.html" class="alert-link">Volver al inicio</a>.
        </div>
    `;
}
