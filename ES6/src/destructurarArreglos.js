const persona = ['Jackie', 27, 'Venezuela'];

/*const [nombre, edad, pais, profesion = 'No especificado'] = persona;

console.log(profesion);
*/

const [nombre, edad, pais, profesion = 'No especificado'] = persona;

const mostrarInfo = ( [nombre, , pais] = persona ) => console.log(nombre, pais);

mostrarInfo(persona);