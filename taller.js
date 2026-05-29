// 1. Variables y Tipos de Datos 

// Ejercicio 1

let nombre = "Daniel";
let edad = 28;
let esEstudiante = true;

// Ejercicio 2:

let sinValor;
let valorNulo = null;

console.log(`sin valor: ${sinValor} | valorNulo: ${valorNulo}`);

// 2. Ingreso de Datos por teclado
import PromptSync from "prompt-sync";

// Ejercicio 1

const prompt = PromptSync();

const nacimiento = parseInt(prompt("Por favor ingrese su año de nacimiento: "));
let now = new Date();
let anoActual = now.getFullYear()
edad = anoActual - nacimiento;
console.log(edad);


// Ejercicio 2
const numero1 = parseInt(prompt("Por favor ingresa el primer número a sumar: "))
const numero2 = parseInt(prompt("Por favor ingresa el segúndo número a sumar: "))

console.log(numero1 + numero2);

// 3. Condicional if

// Ejercicio 1:

const edadUsuario = parseInt(prompt("Por favor ingrese edad: "));

if (edadUsuario >= 18) console.log("Puedes entrar")
else console.log("No puedes entrar");

// Ejercicio 2:

const numero = parseInt(prompt("Por favor un número para saber si es positivo o negativo: "))

if (numero > 0) console.log(" Es positivo")
else if (numero < 0) console.log("No Es positivo")
else console.log("Es cero");

// 4. Bucle while

// Ejercicio 1:



let counter = 1;
let numeroUsuario = 0;
numeroUsuario = parseInt(prompt("Ingresa un número para contar hasta el "));

while (counter <= numeroUsuario) {
    console.log(counter);
    counter++
}

// Ejercicio 2:
const PIN = 1234;
let pinUsuario = parseInt(prompt("Ingrese el PIN: "));
while (pinUsuario !== PIN) {
    pinUsuario = parseInt(prompt("Ingrese el PIN: "));
    
}
console.log("La contraseña es correcta");


// 5. Bucle for

// Ejercicio 1:

console.log("numeros del 1 al 10: ");

for (let index = 1; index <= 10; index++) {
    console.log(index);
}

// Ejercicio 2:

const numeroMultiplicar = parseInt(prompt("Ingresa un número para conocer su tabla de multiplicar del 1 al 10:  "));

for (let index = 1; index <= 10; index++) {
    console.log(index * numeroMultiplicar);
}
