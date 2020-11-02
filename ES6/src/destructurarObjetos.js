const usuario = {
	nombre: 'Jackeline',
	correo: 'jackiedayana@gmail.com',
	edad: '27',
	pais: 'Venezuela',
	/*profesion: 'Desarrollador'*/
}

// Destructurar Objetos
const {pais, nombre, profesion = 'No especificado'} = usuario;


// Destructurar Funcion

const mostrarInfo = ( {nombre, pais, profesion = 'No especificado'} ) => {
	console.log(`${nombre} es de ${pais} y trabaja como ${profesion}`);
}

mostrarInfo(usuario);