
function buscarProducto(nombre, inventario) {
    for (let i = 0; i < inventario.length; i++) {
        if (inventario[i].nombre === nombre) {
            return inventario[i];
    }
}
return null;
}
const inventario = [
{ nombre: "arroz", precio: 2500 },
{ nombre: "frijol", precio: 3000 },
{ nombre: "azucar", precio: 4000 },
];
const productoEncontrado = buscarProducto("frijol", inventario);

if (productoEncontrado) {
console.log("Producto encontrado:", productoEncontrado);
} else {
console.log("Producto no encontrado.");
}

const productoNoEncontrado = buscarProducto("sal", inventario);

if (productoNoEncontrado) {
console.log("Producto encontrado:", productoNoEncontrado);
} else {
console.log("Producto no encontrado.");
}