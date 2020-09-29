document.addEventListener("mousedown", dibujarMouse);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");

var x = 150;
var y = 150;

dibujarLinea("red", 149, 149, 151, 151, papel);
	
	function dibujarLinea (color, xinicial, yinicial, xfinal, yfinal, lienzo)

	{

	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.lineWidth = 3;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath()
}
	
function dibujarMouse (evento)
{

var colorcito = "#7b1fa2";
var movimiento = 10;

	if(evento.x <= 300 &&  evento.y <= 300) {
		dibujarLinea(colorcito, x, y, evento.x, evento.y, papel);
	}
}