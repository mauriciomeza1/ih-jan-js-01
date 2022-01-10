console.log("Hola mundo desde JavaScript")


//VARIABLES 
//PRIMITIVOS 

//1. String - Texto plano
//var - JS Tradicional (ES5) 
var nombre = "Hola soy Mauricio Meza"
console.log(nombre)

//let
//Forma de crear variables y su contenido puede cambiar y ser mutable
let saludo = "Hola, cómo están?"
saludo = "How are you?"
console.log(saludo)

//const
//Forma de crear variables y su contenido es estático y fijo
const iva = 16

//2. Number 
const age = 34 
console.log(age)


//3. Boolean - True or Flase
const isRaining = false
console.log("Está lloviendo?", isRaining)

// 4. undefined - No está definido aun, pero lo estará
const price = undefined
console.log("Precio indefinido", price)
price = 15
console.log("Precio ya definido", price)

//5. null - Ya se definió y es un valor inextistente. Ausencia de valor.
const hasEngine = null


//NO PRIMITIVOS
//OBJETO 
const  comida = {
    desayuno: "Hot Cakes",
    comida: "Chilaquiles",
}