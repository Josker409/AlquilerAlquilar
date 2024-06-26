const container = document.getElementById("container-productos");

const titulo = document.getElementById("nuestros-productos");

//

const productos = [

    {
        "codigo": 1,
        "nombre": "Wolkswagen Gol",
        "imagen": "https://cdn.motor1.com/images/mgl/gRAz7/s1/vw-gol-2017.jpg",
        "precio": 2900,
        "cantidad": 1,
    },

    {
        "codigo": 2,
        "nombre": "Peugeot 208",
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRi-pjEgyR2NcLxMOAGZHJNlz3cFR-0zPg0w&s",
        "precio": 2000,
        "cantidad": 1,
    },

    {
        "codigo": 3,
        "nombre": "Fiat Cronos",
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSd12tOAOi6TiWESXgybDpgVybCCcdtyXv5w&s",
        "precio": 2500,
        "cantidad": 1,
    },

]

//

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function mostrarProductos(productos) {

    productos.forEach(el => {

        const card = document.createElement("div");
        card.className = "card-productos";

        const nombre = document.createElement("h2");
        nombre.innerText = el.nombre.toUpperCase();
        nombre.className = "nombre";

        const imagen = document.createElement("img");
        imagen.src = el.imagen;
        imagen.className = "img-productos";

        const precio = document.createElement("p")
        precio.innerText = `${el.precio}`;
        precio.className = "precio";

        const boton = document.createElement("button");
        boton.innerText = "Seleccionar";
        boton.className = "boton-productos";
        boton.onclick = () => agregarAlCarrito(el.codigo);

        card.appendChild(imagen);
        card.appendChild(nombre);
        card.appendChild(precio);
        card.appendChild(boton);

        container.appendChild(card);

    });

};

mostrarProductos(productos);

function agregarAlCarrito(id) {
    const productoAgregado = productos.find(el => el.codigo === id);
    if (carrito.some (el => el.codigo === productoAgregado.codigo)) {
        let indiceProducto = carrito.findIndex(el => el.codigo === productoAgregado.codigo);
        console.log(indiceProducto);
        carrito[indiceProducto].cantidad++;
    } else {
        carrito.push(productoAgregado);
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Swal.fire({
//     title: "Are you sure?",
//     text: "You won't be able to revert this!",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#3085d6",
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Yes, delete it!"
// }).then((result) => {
//     if (result.isConfirmed) {
//         Swal.fire({
//         title: "Deleted!",
//         text: "Your file has been deleted.",
//         icon: "success"
//     });
//     }
// });
