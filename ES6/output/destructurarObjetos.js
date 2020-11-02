"use strict";

var usuario = {
  nombre: 'Jackeline',
  correo: 'jackiedayana@gmail.com',
  edad: '27',
  pais: 'Venezuela'
  /*profesion: 'Desarrollador'*/

}; // Destructurar Objetos

var pais = usuario.pais,
    nombre = usuario.nombre,
    _usuario$profesion = usuario.profesion,
    profesion = _usuario$profesion === void 0 ? 'No especificado' : _usuario$profesion; // Destructurar Funcion

var mostrarInfo = function mostrarInfo(_ref) {
  var nombre = _ref.nombre,
      pais = _ref.pais,
      _ref$profesion = _ref.profesion,
      profesion = _ref$profesion === void 0 ? 'No especificado' : _ref$profesion;
  console.log("".concat(nombre, " es de ").concat(pais, " y trabaja como ").concat(profesion));
};

mostrarInfo(usuario);