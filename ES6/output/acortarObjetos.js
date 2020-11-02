"use strict";

var crearObjeto = function crearObjeto(nombre, edad) {
  return {
    //Es igual que nombre: nombre y edad: edad
    nombre: nombre,
    edad: edad,
    mostrarInfo: function mostrarInfo() {
      return "".concat(nombre, " tiene ").concat(edad, " a\xF1os");
    }
  };
};

console.log(crearObjeto('Kevin', 26).mostrarInfo());