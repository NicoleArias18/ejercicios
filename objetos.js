// //const nombre = "Eli";
// //const edad =30;
// const altura = 1.50;

// // cuando se tiene queusar un objeto en proramacion?, R// cuando tenemos varia propiedades asia una sola entidad,  


// // El objeto son las propiedades de algo que estemos creando ya sean animeles, electrodomesticos, etc.

// //Creacion de un objeto con object literal
 const persona={   // <- sintaxis del objeto 
    nombre: "Eli",
    edad:30,
     altura: 1.50
 }

// //imprimir el objeto
// console.log(persona);

// //Acceder a las propiedades del objeto
// //Acceder por punto 
// console.log(persona.nombre)

// //Acceder por corchetes
// console.log(persona['edad'])

// //Agregamos mas prpiedades del objeto
// persona.imagen = "imagen.jpg";

// console.log(persona);

// //Eliminandopropiedad del objeto
// delete persona.altura;
// console.log(persona);

// //Modificamos el valor de una propiedad o llave
// persona.nombre = "Adrián";
// console.log(persona);

// //Asignar valor de la propiedad del objeto a una variable 
// //const nombre = persona.nombre
// console.log(nom);

// //Destru
// //const {nombre} = persona;
// console.log(nombre);

// //const {edad} = persona;
// console.log(edad)

//  const {nombre,edad}= persona;
//  console.log(nombre)
//  console.log(edad)

//Ejercicios
// Declara un objeto animal, con las propiedades raza, tamaño y color muestra el objeto en consola y luego imprime cada propiedad por separado. 
const animal={
raza: "perro",
 tamaño: 3,
 color: "negro"

 }
// console.log(animal.raza)
// console.log(animal.tamaño)
// console.log(animal.color)

//  //Ejercicio 2
//  animal.edad = 6
//  console.log(animal.edad)
//  delete animal.raza;
//   console.log(animal.raza)
//  console.log(animal.tamaño)
//  console.log(animal.color)
 
//Crea un objeto usuario con las propiedades usuario, email y rol, usa destructuring para crear variables con esas propiedades y mostrarlas en consola. 

const usuario={
    email: "pepito@gmail.com",
    rol: "trabajador"
}
const {email} = usuario;
console.log(email);

