//Includes
let numbers = [1, 2, 3, 7, 8];

if(numbers.includes(7)) {
    console.log('Si se encuentra el valor');
} else {
    console.log('No se encuentra');
}



let string = 'La suerte es amiga de la acción';
let word = 'Suerte'
console.log(string.includes(word.toLowerCase()));





//Operador para elevar a la potencia
let base = 4;
let exponent = 3;
let power = base ** exponent;

console.log(power);