"use strict";
/* Desarrollar un algoritmo  que dado un número ingresado por el usuario determine si el número es par o impar y le informe al usuario. En el caso de ser 0 (cero) el algoritmo deberá informarlo */
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var numero = readlineSync.questionInt("Por favor, ingresa un numero: ");
if (numero === 0) {
    console.log("El número es (" + numero + ").");
}
;
if (numero % 2 === 0) {
    console.log("El número ingresado es par.");
}
else {
    console.log("El número ingresado es impar.");
}
;
