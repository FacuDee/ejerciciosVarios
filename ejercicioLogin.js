"use strict";
/* Desarrolle un algoritmo que permita loguearse (registrarse)
a un sistema, ingresando un nombre de usuario y la contraseña adecuada. Considerar que tanto el usuario como la contraseña están formados sólo por letras. El sistema deberá validar que el usuario y la contraseña sean correctas, comparándolas con lo que el sistema tiene registrado para ese usuario. Tenga en cuenta que el sistema tiene registrado el usuario: Juan y la clave claveJuan */
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var usuario = readlineSync.question("Por favor, ingresa tu usuario: ");
var clave = readlineSync.question("Por favor, ingresa tu clave: ");
if (usuario == "Juan" && clave == "claveJuan") {
    console.log("Ingreso válido: ¡bienvenido a tu cuenta!");
}
else {
    console.log("El usuario o la contraseña son incorrectas");
}
;
