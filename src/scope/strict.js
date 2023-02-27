"use strict";

//stric Nos permite ejecutar de forma estricta reglas particulares
//por ejemplo la asignacion de pi marcara un error
//y nos obliga a hacer una declaracion antes de una asignacion
pi = 3.1416;
console.log(pi);

function myFunction(){
    // "use strict";
    return pi = 3.1416;
}

console.log(myFunction());