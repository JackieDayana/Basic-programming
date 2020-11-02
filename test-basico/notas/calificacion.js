var nota = 0;
var n = document.getElementById("nota");
var b = document.getElementById("aceptar");
b.addEventListener("click", SaberNota);
var resultado = document.getElementById("resultado");
document.getElementById("aceptar").disabled=true;
n.addEventListener("keyup", cambiarStatus);


function SaberNota () {

	nota = parseInt(n.value);
console.log(nota);
	
	if (nota <=2) {
		resultado.innerHTML = "Su nota es: " +nota + " Muy deficiente";
	} 
	else if (nota <=5) {
		resultado.innerHTML = "Su nota es: " +nota + " Insuficiente";
	}
	else if (nota == 6) {
		resultado.innerHTML = "Su nota es: " +nota + " Suficiente";
	}
	else if (nota <=8) {
		resultado.innerHTML = "Su nota es: " +nota + " Notable";
	}
	else if (nota <=10) {
		resultado.innerHTML = "Su nota es: " +nota + " Sobresaliente";
	}
	else {
		resultado.innerHTML = "Su nota es invalida";
	}
}

function cambiarStatus(evento){

	if (evento.target.value.length == 0) {
		document.getElementById("aceptar").disabled=true;
} else {
	document.getElementById("aceptar").disabled=false;
}
}