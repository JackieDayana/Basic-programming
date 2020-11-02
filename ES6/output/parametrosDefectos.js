"use strict";

function registrarUsuario(nombre, pais, correo) {
  var telefono = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'No especificado';
  return "Nombre: ".concat(nombre, ", Pais: ").concat(pais, ", Correo: ").concat(correo, ", Telefono: ").concat(telefono);
}

console.log(registrarUsuario('Jackie', 'Venezuela', 'correo@correo.com'));