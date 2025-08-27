import readline from 'readline'
//interfaz de lectura 
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})

// rl.question('ingrese un numero ', (num)=>{
// let numero = Number(num)

// console.log(`\nNumero Ingresado : ${numero}`);

// console.log(`Math.round(${numero})->${Math.round(numero)}`);
//console.log(`Math.floor(${numero})->${Math.floor(numero)}`);
//console.log(`Math.ceil(${numero})->${Math.ceil(numero)}`);
//console.log(`Math.sqrt(${numero})->${Math.sqrt(numero)}`);
//console.log(`Math.pow(${numero})->${Math.pow(numero,3)}`);
//console.log(`Math.abs(${numero})->${Math.abs(numero)}`);
//console.log(`Math.max(${numero})->${Math.max(numero,10,-5)}`);
//console.log(`Math.min(${numero})->${Math.min(numero,-5,30)}`);
//console.log(`Math.random()->${Math.random()}`);
// let randomNum = Math.floor(Math.random()*numero)+ 1
// console.log(`numero aleatorio entre 1 y 20 -> ${randomNum}`)

// console.log(`toFixed(2): ${numero.toFixed(2)}`)
// console.log(`toPrecision(4): ${numero.toPrecision(4)}`)
// console.log(`toExponential(2): ${numero.toExponential(2)}`)
// console.log(` toString(2):  es igual a ${numero.toString(2)}`)
// console.log(`toString(16): ${numero.toString(16)}`)

// rl.close()

//})

//EJERCICIOS 
//Ejercicio 1
// 1.	Solicita un número al usuario y muestra el cuadrado de ese número y su raíz cuadrada. 
// rl.question('Ingrese un numero: ', (num)=>{
// let numCuadrado = Number(num)
// let numRaiz = Number(num)
// console.log(`El cuadrado del numero Math.pow(${numCuadrado})-> es igual a ${Math.pow(numCuadrado,2)}`);
// console.log(`La raiz cuadrada de Math.sqrt(${numRaiz})-> es igual a ${Math.sqrt(numRaiz)}`);
// rl.close()
// })

// 2.	Un programa de sorteos necesita generar un número aleatorio entre 0 y 29 para asignar un premio.
//rl.question('Ingrese un numero ', (num)=>{
   
// let numAle = Number(num)
// let randomNum = Math.floor(Math.random()*numAle)+ 1
//  console.log(`numero aleatorio entre 0 y 29 -> ${randomNum}`) 
//  rl.close()
 //})

// 3.	Una tienda de electrodomésticos necesita encontrar el precio más barato y el más caro de su lista de precios: [30, 52, 35, 1, 12, -3].
//rl.question('Ingrese un numero ', (num)=>{
// let pBarato = Number(num)
// let pCaro = Number(num)
// console.log(`Math.max(${pCaro})->${Math.max(pCaro,30, 52, 35, 1, 12, -3)}`);
// console.log(`Math.min(${pBarato})->${Math.min(pBarato,30, 52, 35, 1, 12, -3)}`);
// rl.close()
//})

// 4.	Un edificio tiene 10 habitaciones por piso. El usuario ingreso el número de habitaciones en el que se encuentra (ejemplo: habitación 25). El programa debe calcular y mostrar en qué piso está. Deberá pedir el número de la habitación, dividir el número de habitaciones entre 10 y redondear hacia arriba y mostrar el piso correspondiente.
rl.question('Ingrese un numero de habitacion: ', (num)=>{
let habitacion = Number(num)
let piso = Math.ceil(habitacion/ 10)
console.log(`El piso corrrespondiente es ${piso}`)
rl.close()


})