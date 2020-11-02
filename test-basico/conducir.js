var edad = 0;
var e = document.getElementById("edad");
var b = document.getElementById("aceptar");
b.addEventListener("click", SaberEdad);
var resultado = document.getElementById("resultado");

function SaberEdad () {
edad = parseInt(e.value);

	if (edad >= 18) {
		resultado.innerHTML = "Su edad es: " +edad + " Ya puede conducir";
     } else {
		resultado.innerHTML = "Su edad es: " +edad + " No puede conducir";
	 }

}
