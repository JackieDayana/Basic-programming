const crearObjeto = (nombre, edad) => {
	return {
		//Es igual que nombre: nombre y edad: edad
		nombre,
		edad,
		mostrarInfo(){
			return `${nombre} tiene ${edad} años`;
		}
	}
}

console.log(crearObjeto('Kevin',26).mostrarInfo());