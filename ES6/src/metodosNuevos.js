//Cadena dde texto 

const texto = 'Holaaaa';

//tolower: para que identifique mayusculas y minisculas.
//startsWith: letra inicial
//endsWith: letra final
//includes: saber si incluye alguna palabra
console.log(texto, 'empieza con h', texto.toLowerCase().startsWith('h'));
console.log(texto, 'termina con a', texto.toLowerCase().endsWith('a'));
console.log(texto, 'Incluye la palabra Jackie', texto.includes('Jackie'));

//Arreglos

//find: permite encontrar el primer elemento dentro del arreglo que cumpla lo que esta dentro de la funcion.
//findIndex: muestra el numero de la posicion del elemento que busque
const amigos = ['Carlos', 'Manuel', 'Alejandro'];

console.log(amigos.includes('Carlos'));

console.log(amigos.find(amigo => amigo.length > 6));
console.log(amigos.find(amigo => amigo === 'Manuel'));

console.log(amigos.findIndex( (amigo) => {
return amigo === 'Manuel'
}));