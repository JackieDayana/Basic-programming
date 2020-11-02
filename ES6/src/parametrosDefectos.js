function registrarUsuario (nombre, pais, correo, telefono = 'No especificado') {
return `Nombre: ${nombre}, Pais: ${pais}, Correo: ${correo}, Telefono: ${telefono}`;
}

console.log(registrarUsuario('Jackie', 'Venezuela', 'correo@correo.com'));