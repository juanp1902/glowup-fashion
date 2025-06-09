// Array del carrito de compras
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Función para agregar artículos
function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert(`${nombre} ha sido añadido al carrito.`);
}

// Función para mostrar el carrito
function mostrarCarrito() {
    let total = carrito.reduce((sum, item) => sum + item.precio, 0);
    let mensaje = carrito.map(item => `${item.nombre}: $${item.precio.toFixed(2)}`).join("\n");
    alert(`Carrito:\n${mensaje}\n\nTotal: $${total.toFixed(2)}`);
}

// Redirigir a la página del carrito
function irAlCarrito() {
    mostrarCarrito();
}
