"use strict";

/*const mostrarDatos = (nombre, edad, correo, pais) => {
	console.log(nombre, edad, correo, pais);
}

mostrarDatos('Jackie', 27, 'jackiedayana@gmail.com', 'Venezuela');*/
//<<--- Esto se puede hacer de esta manera
var mostrarDatos = function mostrarDatos() {
  for (var _len = arguments.length, datos = new Array(_len), _key = 0; _key < _len; _key++) {
    datos[_key] = arguments[_key];
  }

  console.log(datos);
};

mostrarDatos('Jackie', 27, 'jackiedayana@gmail.com', 'Venezuela');