// BIFURCACIONES

// if - else
// permite ejecutar el código dependiendo de si se cumple una condición u otra

if (true) {       // siempre se ejecutará el if
    console.log("Es verdadero");
}

if (false) {      // siempre se ejecutará el else
    console.log("Es verdadero");
} else {
    console.log("No es verdadero");
}


// condiciones
let saldo = 50;
let efectivo = 20;
if (saldo > efectivo) {
    console.log("Puedes sacar dinero");     // se imprimirá este
} else {
    console.log("Saldo insuficiente");
}


// ternarias
// pueden ir en una línea
(saldo > efectivo) ? console.log('Saldo suficiente') : console.log('Saldo insuficiente');

// o en varias
(saldo > efectivo)
? console.log('Puedes sacar dinero')
: console.log('Saldo insuficiente');

// se pueden usar para asignar valores
let isGreater = (saldo > efectivo) ? 'saldo' : 'efectivo';
console.log(isGreater);         // saldo


// if else + else if
let nota = 5;

if (nota === 5) {
    // entra aquí e imprime este mensaje
    console.log("Enhorabuena, has obtenido un sobresaliente");
} else if (nota === 4) {
    console.log("Buen trabajo, pero podrías haberlo hecho mejor");
} else if (nota === 3) {
    console.log("Has obtenido un suficiente");
} else if(nota === 2) {
    console.log("No has aprobado por poco");
} else if (nota === 1) {
    console.log("Toca trabajar un poco más para la próxima");
} else {
    console.log("ERROR: introduce una nota entre el 1 y el 5");
}


// switch
nota = 4;

switch (nota) {
    case 5:
        console.log("Enhorabuena, has obtenido un sobresaliente");
        break;
    case 4:
        // entra aquí e imprime este mensaje
        console.log("Buen trabajo, pero podrías haberlo hecho mejor");
        break;
    case 3:
        console.log("Has obtenido un suficiente");
        break;
    case 2:
        console.log("No has aprobado por poco");
        break;
    case 1:
        console.log("Toca trabajar un poco más para la próxima");
        break;
    default:
        console.log("ERROR: introduce una nota entre el 1 y el 5");
        break;
}