/*
Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario la temperatura en grados Celsius por prompt o por un input.
Debe convertir la temperatura ingresada de grados Celsius a grados Fahrenheit y Kelvin
Debe imprimir ambos resultados por consola o por el DOM.
Debe ser capaz de identificar si los datos de entrada sean de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar los datos.
 */

// se solicita al usuario introducir la temperatura usando prompt() y se convierte el string obtenido a un número entero usando mi método parseFloat()
// es importante usar mi método parseFloat() porque el valor ingresado por el usuario es una cadena de texto, y parseFloat() convierte esa cadena a un número flotante (decimal)
let Celsius = parseFloat(prompt("Ingresa la temperatura en grados Celsius:"));

// Se verifica si la entrada es un número usando la función isNaN() que retorna true si no es un número
// si no es un número, se mostrará un mensaje de error y se pide al usuario que ingrese el un número válido, por lo que mi ciclo while se seguirá repitiendo hasta intirucir un número válido
while (isNaN(Celsius)) {
    Celsius = parseFloat(prompt("Por favor, ingresa un número válido para la temperatura en grados Celsius:"));
}

// ahora se debe convertir la temperatura de grados Celsius a grados Fahrenheit usando la fórmula (°C × 9/5) + 32 = °F
const Fahrenheit = (Celsius * 9 / 5) + 32;

// y tambien convertir la temperatura de grados Celsius a grados Kelvin usando la fórmula °C + 273.15 = K
const Kelvin = Celsius + 273.15;

// se imprimen los resultados en la consola usando console.log() y se muestran las conversiones a grados Fahrenheit y Kelvin
//  ocupo mi método toFixed(2) para redondear los valores a dos decimales por lo que se asegura de que siempre se muestren dos decimales y no más en los resultados
console.log(`La temperatura en grados Fahrenheit es: ${Fahrenheit.toFixed(2)}°F`);
console.log(`La temperatura en grados Kelvin es: ${Kelvin.toFixed(2)}K`);

/* 
prompt() solicita datos al usuario
https://developer.mozilla.org/es/docs/Web/API/Window/prompt

parseFloat() convierte un string a un número decimal (flotante)
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseFloat

isNaN() verifica si el valor no es un número
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Global_Objects/isNaN

toFixed() redondea un número a una cantidad específica de decimales
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Number/toFixed

Template Literals Cadena de texto permite interpolar variables o expresiones dentro de `${}`
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Plantillas_de_cadena

Interpolate with `${}` se utiliza dentro de los Template Literals para insertar valores o expresiones
https://developer.mozilla.org/es/docs/Web/JavaScript/
*/