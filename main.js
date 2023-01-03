/* 1. Realizar un programa que permita el ingreso de un numero y muestre su tabla de
multiplicar (Los primeros 10 multiplos). */

    let num = parseInt(prompt("Ingresa un nùmero "))
    for (let i = 1; i <= 10 ; i++ ){
        console.log(`${num} X ${i}= ${num * i}`) 
    }

/* 2. Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir
acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0. */

let numero  = parseInt(prompt("Ingresa un nùmero "))
    numero.map(function guardarNum(){
        if (numero = !0){
        for ( let i= 0; i<numero;i++){
            console.log (numero)
        }
    }
    })
    console.log(guardarNum)  

/* 
3. Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en una
variable guardar un numero que este en el rango 1 - 100. La persona debera poder
ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si el
valor es menor al numero secreto, avisarle al usuario lo sucedido y pedirle
nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de
cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta
que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de
felicitaciones y decirle en cuantos intentos lo ha realizado.*/




/* 4. Realizar un programa que permita decir si un numero es primo. Un numero es primo
si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo.
Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene
como divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores el
numero ya no es primo.*/

let primo = numero => {
    if (numero === 0 || numero === 1 ){
        for (let i = 0; i < numero/2 ;i++){
            if(numero % i === 0){
                return false
            }
        }
    } return true
}

/* 5. Realizar un programa que permita dado un numero, mostrar todos sus divisores. */
var num1 = prompt("Escribe un número");
var numeros;

for (numeros=2;numeros < num1/2; numeros++) {
    if (num1 % numeros === 0) {
        console.log(numeros)
    }
}
/* 
6. Dado un array de 10 elementos, realizar un programa que recorra ese array y
muestre un mensaje por consola con cada uno de los elementos del array. */
let array =[1,2,3,4,5,6,7,8,9,10]
array.forEach(num => ` este es el numero ${num} `)

/* 7. Dado un array de 10 numeros, realizar un programa que muestre por consola el
doble de cada uno de los elementos. */
let arr =[1,2,3,4,5,6,7,8,9,10]
arr.forEach(numero=> console.log(numero * 2)) 
/*
8. Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada
objeto representa a 1 persona con al menos 4 propiedades, realizar un programa
que muestre un mensaje de presentacion por cada elemento del array. */
const familia =[
    {
        nombre : "Sofia Ariza", 
        edad: 23,
        pais : "Colombia",
        mascota : 1
    },
    {
        nombre : "Mariana Cardenas", 
        edad: 29,
        pais : "Argentina",
        mascota : 3
    },{
        nombre : "Raul Hernandez", 
        edad: 33,
        pais : "Colombia",
        mascota : 2
    },{
        nombre : "Laura Martinez", 
        edad: 53,
        pais : "Chile",
        mascota : 1
    },{
        nombre : "Andres Gonzales", 
        edad: 10,
        pais : "Mexico",
        mascota : 2
    },
]
for (let elemento of familia){
    console.log (`mi nombre es${familia.nombre}, tengo ${familia.edad} 
    años, vivo en  ${familia.pais} y tengo  ${familia.mascota} mascotas`) 
}
/* 
9. Dado un array de 10 numeros, realizar un programa que recorra el array y solo
muestre los numeros impares. */
let arreglo =[1,2,3,4,5,6,7,8,9,10]
arreglo.forEach(numero=> {
    for (var i = 0; i < numero.length; i++) {
        if (i % 2 != 0) {
        i++;
        }
    }
})
/* 10. Realizar un programa que permita la entrada de numeros y calcule la suma de los
numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando
el usuario ingresa un 0. */
/* 11. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
numero mas grande. */
let array1 =[1,2,3,4,5,6,7,8,9,10]
let maxNum = 0
for(i = 0; i<array1.length; i++){
    if (array1[i]>maxNum){
        maxNum = array1[i]
    }
}
console.log(maxNum)
/* 12. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
numero mas chico. */
let array2 =[1,2,3,4,5,6,7,8,9,10]
let minNum = array2[0]
for(i = 0; i<array2.length; i++){
    if (array2[i]<minNum){
        minNum = array2[i]
    }
}
console.log(minNum)
/* 13. Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder
ingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las
manos de cada jugador, y en cada turno se debera seguir jugando solo si se produjo
un empate. Caso contrario mostrar un mensaje con el nombre de la persona
ganadora. */
function juego(){
    let jugador1= prompt("Eres jugador 1: ingresa piedra, papel o tijera")
    let jugador2= prompt("Eres jugador 2: ingresa piedra, papel o tijera")

    while(jugador1 === jugador2)
    alert("empate, juega nuevamente")
    jugador1 += jugador1 
    jugador2 += jugador2
    if (opcionJudador1=="piedra" && opcionJudador2=="papel"){
        alert("Jugador 2 gana!");
    }else if (opcionJudador1=="piedra" && opcionJudador2=="tijera"){
        alert("Jugador 1 gana!");
    }else if (opcionJudador1=="papel" && opcionJudador2=="piedra"){
        alert("Jugador 1 gana!");
    }else if (opcionJudador1=="papel" && opcionJudador2=="tijera"){
        alert("Jugador 1 gana!");
    }else if (opcionJudador1=="tijera" && opcionJudador2=="piedra"){
        alert("Jugador 2 gana!");
    }else if (opcionJudador1=="tijera" && opcionJudador2=="papel"){
        alert("Jugador 1 gana!");
    }else{
        alert("Elección incorrecta!-han hecho trampa")
    }
}
console.log(juego())
/* 14. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado. */
function triangulo(numero) {
    for (let i = 0; i < numero; i++) {
        let piso = '';
        for (let j = 1; j < numero - i; j++) {
        piso = piso + ' ';
        }
            for (let j = 0; j < i + 1; j++) {
            piso = piso + '*';
    }
    console.log(piso);
    }
}
console.log(triangulo(5))

/* 15. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado
pero invertido. */
let piramideInvertida = 0;
		for(let i=5;i>=1;i-=2){
			for(let j = 0 ; j < piramideInvertida; j++){
				console.log('&nbsp');
			}
			for(let k = 1; k <= i; k++)
			{
				console.log('*');
			}
			console.log(piramideInvertida++)
			
		}
/* 16. Dado un array de 10 numeros desordenados, realizar un programa que imprima por
pantalla el array ordenado. (NO USAR SORT, solo ciclos FOR) */ 
let arr1 =[3,6,1,8,2,9,10,4,5,7]
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length-i-1; j++) {
        if(arr1[j] < arr1[j+1]){
            let arrOrdenado =arr1[j+1];
            arr1[j+1] = arr1[j];
            arr1[j] = arrOrdenado
        }
    }
}   
console.log(arrOrdenado)

