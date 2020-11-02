

/*const mostrarDatos = (nombre, edad, correo, pais) => {
	console.log(nombre, edad, correo, pais);
}

mostrarDatos('Jackie', 27, 'jackiedayana@gmail.com', 'Venezuela');*/

//<<--- Esto se puede hacer de esta manera

const mostrarDatos = (...datos) => {
	console.log(datos);
}

mostrarDatos('Jackie', 27, 'jackiedayana@gmail.com', 'Venezuela');