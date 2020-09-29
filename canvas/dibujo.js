var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width ;
var lienzo = d.getContext("2d");


dibujarLinea(colorcito, 1,1,1,299);
dibujarLinea(colorcito, 1,299,299,299);



function dibujarLinea (color, xinicial, yinicial, xfinal, yfinal)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath()
}

function dibujoPorClick()
{
var lineas = parseInt(texto.value);
var l= 0;
var xi, yi, xf, yf;
var colorcito = "#FAA";
var colorcito2 = "#7b1fa2";
var espacio = ancho / lineas ;

/*lienzo.beginPath();
lienzo.strokeStyle = "red";
lienzo.moveTo(100, 100);
lienzo.lineTo(200, 200);
lienzo.stroke();
lienzo.closePath();*/

for (l = 0; l < lineas; l++)
{
	xi = espacio * l;
	yf = espacio * (l + 1);
	yi = espacio * l;
	xf = espacio * (l + 1);
	dibujarLinea(colorcito2, xi, 10, 300, yf);
	dibujarLinea(colorcito, 0, yi, xf, 300);

}
}