
//Clases

class Usuario {
	constructor(nombre, edad, correo){
		this.nombre = nombre;
		this.edad = edad;
		this.correo = correo
	}

	mostrarSaludo(mensaje){
		return mensaje;
	}

	mostrarInfo(){
		return `
			<b>Nombre:</b> ${this.nombre} <br />
			<b>Edad:</b> ${this.edad} <br />
			<b>Correo:</b> ${this.correo} <br />
			<hr />
		`;
	}
}

const jackie = new Usuario('Jackeline', 27, 'jackiedayana@gmail.com');
//document.write(jackie.mostrarSaludo('HolaaaaaaAAA'));
document.write(jackie.mostrarInfo());


// Herencia

class Estudiante extends Usuario{
	constructor(nombre, edad, correo, carrera){
		super(nombre, edad, correo);
		this.carrera = carrera;
	}

	mostrarInfo(){
		return `
			<b>Nombre:</b> ${this.nombre} <br />
			<b>Edad:</b> ${this.edad} <br />
			<b>Correo:</b> ${this.correo} <br />
			<b>Carrera:</b> ${this.carrera} <br />
			<hr />
		`;
	}
}	

const kevin = new Estudiante('Kevin', 26, 'kevinvelasco@gmail.com', 'Desarrollador Web');
document.write(kevin.mostrarInfo());