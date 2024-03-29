// SETS (CONJUNTOS)

// son una especie de listas, pero se comportan de manera diferente

let array = [1, 2, 3, 4, 5];
let mySet = new Set(array);

console.log(array);         // [ 1, 2, 3, 4, 5 ]
console.log(mySet);         // Set { 1, 2, 3, 4, 5 }

/*
array = conjunto ordenado de valores y objetos
set = conjunto no ordenado de valores únicos -> no hay valores repetidos
*/

/* si añadimos valores repetidos en el array, en el array se ven, pero no se
añaden en el set */

array.splice(array.length,0,6,2,4,"hola",{id:5});
mySet = new Set(array);

console.log(array);
// [ 1, 2, 3, 4, 5, 6, 2, 4, 'hola', {id: 5} ]
console.log(mySet);
// Set { 1, 2, 3, 4, 5, 6, 'hola, {id: 5} }


// otra forma de declarar un set
const set2 = new Set(["elemento1", 2, false, 2, null, undefined]);
// el segundo 2 no lo coge

console.log(set2);
// Set { 'elemento1', 2, false, null, undefined }



// MÉTODOS PARA AÑADIR O ELIMINAR VALORES A LOS SETS

// .add() -> añadir valores
mySet.add(9);
console.log(mySet);         // Set { 1, 2, 3, 4, 5, 6, 'hola, {id: 5}, 9 }

// si intento añadir un valor existente, no lo añade
mySet.add(4);
console.log(mySet);         // Set { 1, 2, 3, 4, 5, 6, 'hola, {id: 5}, 9 }


// .delete() -> eliminar valores
mySet.delete("hola");
console.log(mySet);         // Set { 1, 2, 3, 4, 5, 6, {id: 5}, 9 }

/*
// .clear() -> elimina todo el set
mySet.clear()
console.log(mySet);         // Set { }
*/



// COMPROBAR SI CONTIENE UN VALOR -> .has()

// con arrays
console.log(array.includes(2));     // true

// con sets
console.log(mySet.has(2));          // true
console.log(mySet.has(40));         // false



// SABER CANTIDAD DE VALORES DEL SET -> .size

// es una propiedad -> como .length con las listas

console.log(mySet.size);            // 8



// ITERAR CON SETS -> .forEach()

mySet.forEach(valor => {
    console.log(valor);
    /* imprime:
        1 
        2 
        3 
        4 
        5 
        6 
        { id: 5 } 
        9 */
});



// OBTENER VALORES DE LOS SETS

// forma 1: crear un objeto iterator con los valores del set -> .values()
const it_mySet = mySet.values();
console.log(it_mySet);          // { [ Iterator ] }


// forma 2: convertir set en array de valores únicos (factor de propagación)
const arr_mySet = [...mySet];
console.log(arr_mySet);         // [ 1, 2, 3, 4, 5, 6, {id: 5}, 9 ]