function calcularPromedio(notas) {
    const notasArray = notas.split(',').map(Number);
    const suma = notasArray.reduce((total, nota) => total + nota, 0);
    const promedio = (suma / notasArray.length).toFixed(2);
    return parseFloat(promedio); // Convertir de vuelta a número
}

const notasIngresadas = "2.5, 3.9, 5.0, 4.3, 4.5";
const promedioFinal = calcularPromedio(notasIngresadas);
console.log("El promedio final es:", promedioFinal); // Salida: El promedio es: 4.46