const productos = [
    { id: 1, nombre: "Camiseta Estampada", precio: 19.99, imagen: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80", categoria: "juvenil" },
    { id: 2, nombre: "Sudadera Urbana", precio: 29.99, imagen: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80", categoria: "urbana" },
    { id: 3, nombre: "Jeans Rasgados", precio: 39.99, imagen: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80", categoria: "alternativa" },
    { id: 4, nombre: "Chaqueta Denim", precio: 49.99, imagen: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80", categoria: "urbana" },
    { id: 5, nombre: "Vestido Casual", precio: 59.99, imagen: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80", categoria: "casual" },
    { id: 6, nombre: "Short Deportivo", precio: 24.99, imagen: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80", categoria: "deportiva" }
];

const categorias = {
    juvenil: "Ropa Juvenil",
    urbana: "Ropa Urbana",
    casual: "Ropa Casual",
    deportiva: "Ropa Deportiva",
    alternativa: "Ropa Alternativa"
};

function mostrarProductos(categoria) {
    const contenedor = document.getElementById('productos-container');
    contenedor.innerHTML = "";

    // Si es "todas", mostramos agrupados por categoría
    if (categoria === "todas") {
        Object.keys(categorias).forEach(cat => {
            const productosCat = productos.filter(p => p.categoria === cat);
            if (productosCat.length > 0) {
                const seccion = document.createElement('section');
                seccion.className = 'categoria';
                seccion.innerHTML = `<h3>${categorias[cat]}</h3>`;
                productosCat.forEach(producto => {
                    const div = document.createElement('div');
                    div.className = 'producto';
                    div.setAttribute('data-id', producto.id);
                    div.innerHTML = `
                        <img src="${producto.imagen}" alt="${producto.nombre}">
                        <h4>${producto.nombre}</h4>
                        <p>$${producto.precio.toFixed(2)}</p>
                        <button class="agregar-al-carrito">Agregar al Carrito</button>
                    `;
                    seccion.appendChild(div);
                });
                contenedor.appendChild(seccion);
            }
        });
    } else {
        const productosCat = productos.filter(p => p.categoria === categoria);
        if (productosCat.length === 0) {
            contenedor.innerHTML = "<p>No hay productos en esta categoría.</p>";
            return;
        }
        const seccion = document.createElement('section');
        seccion.className = 'categoria';
        seccion.innerHTML = `<h3>${categorias[categoria]}</h3>`;
        productosCat.forEach(producto => {
            const div = document.createElement('div');
            div.className = 'producto';
            div.setAttribute('data-id', producto.id);
            div.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h4>${producto.nombre}</h4>
                <p>$${producto.precio.toFixed(2)}</p>
                <button class="agregar-al-carrito">Agregar al Carrito</button>
            `;
            seccion.appendChild(div);
        });
        contenedor.appendChild(seccion);
    }
}

// Evento para el select
document.getElementById("categoria-select").addEventListener("change", function() {
    mostrarProductos(this.value);
});

// Mostrar todos al cargar
mostrarProductos("todas");