"use strict";

var nombres = ['Carlos', 'Dayana', 'Jose', 'Cesar'];
/*const numero_caracteres = nombres.map(function(nombre) {
	console.log(`${nombre} tiene ${nombre.length} letras`);

});*/

var numero_caracteres = nombres.map(function (nombre) {
  return "".concat(nombre, " tiene ").concat(nombre.length, " letras");
});
console.log(numero_caracteres);