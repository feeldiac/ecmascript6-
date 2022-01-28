//⚡Default Params⚡


function newFunction (name, age, country) {
    var name = name || 'Fernando';
    var age = age || 23;
    var country = country || 'CO';
    console.log(name, age, country);
}

//ES6
function newFunction2 (name = 'Fernando', age = 23, country = 'CO') {
    console.log(name, age, country);
}

/* 
Ejemplos de uso
1. Pasar undefined evito que un parámetro tome el valor por defecto.
2. Hacer obligatorios los argumentos de una función.
3. Referenciar parametros por defecto entre sí.
 
*/

newFunction2();
newFunction2('Camilo', 22);


//Caso 2
function requiredArg() {
   throw new Error('The argument is required');
}

function add(x = requiredArg(), y = requiredArg()){
   return x + y;
}

// add(10); // error
console.log(add(10,20)); // 30


//Caso 3
function add(x = 1, y = x, z = x + y) {
    return x + y + z;
}

console.log(add()); // 4


// ⚡Multilínea, Spread Operator y Desestructuración⚡

let multiLinea1 = `Línea 1
Línea 2
Línea 3`;

console.log(multiLinea1);



//Destructuring
let person1 = {
    name1: 'Elías',
    age1: 23,
    country1: 'Colombia',
}

let {name1, age1, country1} = person1;
console.log(`My name is ${name1}, I'm ${age1} yo and I'm from ${country1}`);


//Nested destructuring
let person2 = {
    name2: 'Karim',
    hobbies: ['Guitar', 'Movies', 'Games'],
    size: {
        height: "6'4",
        weight: 180,
    },
}

let {
    name2: n2,
    hobbies : [ hobby1, hobby2, hobby3],
    size: {
        weight: w,
        height: h,
    },
    job = 'Bartender'
} = person2;

console.log({n2, hobby1, hobby2, hobby3, w, h, job});


//Spread Operator
let team1 = ['Oscar', 'Julián', 'Ricardo']
let team2 = ['Valeria', 'Jessica', 'Camila']
let team3 = ['David', ...team1, 'Gabriela', ...team2];

console.log(team3);


//Rest parameter
function triangleGenerator (h = 10, ...sides) {

    console.log(`
    La altura es: ${h}
    El perímetro es: ${sides.reduce((sum, currentValue) => sum + currentValue)}
    `);
}

triangleGenerator(undefined, 6, 4, 5);





//⚡Arrow functions, promesas y parámetros en objetos⚡

let flagColors = ['Yellow', 'Red', 'Blue'];
let independency = 1819;

let objCol = {flagColors, independency};
console.log(objCol);



//Promesas
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey');
        } else {
            reject('Ups');
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));
    
/* 

*/

/* Promesas (jonmircha)
- Similar a un if else. 
- Resolve ('return positivo', cuando cumple) y Reject ('return negativo).
- Conveniente en concatenación de procesos asíncronos.
- Usando callbacks había que validar el error en cada ejecución de callback.
- En cualquier parte del flujo se captura el error.
*/


function cuadradoPromise(value) {
    if (typeof value !== 'number') {
        return Promise.reject(`El valor ingresado, ${value} no es un número`)
    };

    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve({
                value,
                result: value * value,
            });
        }, 0 | Math.random()*1000);
    })
}

cuadradoPromise(0)
    .then((obj) => {
        console.log('Promise Start');
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(1);
    })
    .then((obj) => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(2);
    })
    .then((obj) => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise("3");
    })
    .then((obj) => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(4);
    })
    .then((obj) => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(5);
    })
    .then((obj) => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        console.log('Promise end');
    })
    .catch(err => console.error(err));

    
//⚡Clases, módulos y generadores⚡

/*
//Clases y herencia (jonmircha)

- Azúcar sintáctico, otra forma de escribir prototipos
- Se compila a prototipo implícitamente
- No reciben parámetros, tienen constructor
- Al trabajar con funciones los métodos debían asignarse al prototipo para evitar repetición, ahora se hace automáticamente.
*/

class Animal {
    constructor (nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
    }

    sonar() {
        console.log('Hago sonidos porque estoy vivo');
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }
}

/* 
//Creando un par de instancias
const perro1 = new Animal('Queen', 'hembra');
const perro2 = new Animal('Yankee', 'macho');
console.log(perro1, perro2);

//Probando métodos
perro1.saludar();
perro2.sonar();
*/

class Perro extends Animal {
    constructor(nombre, genero, raza) {
        super(nombre, genero);
        this.raza = raza;
    }

    sonar() {
        console.log('Soy un perro y mi sonido es un ladrido');
    }

    ladrar() {
        console.log('Guau guau');
    }
}

/*
//Instancia de perro

const queen = new Perro('Queen', 'hembra', 'Schnnauzer');
queen.sonar();
queen.ladrar();
queen.saludar()
console.log(queen);

*/



/* 
//Módulos (Ada Lovecode)

- Trozos de código en diferentes ficheros
- Pueden contener clases, funciones, objetos, etc.
- Debe escribir type="module" en la etiqueta script
- Palabras clave export e import


//Export default
What is “export default” in JavaScript?
In default export the naming of import is completely independent and we can use any name we like.

*/




/*Generadores
una función generadora (“Generator Function”) sí puede ser detenida en medio de la ejecución de modo 
que cuando su callback es llamado retoma la ejecución desde el punto en que la dejó.

*/

function * generatorFunction1(){
    console.log('Inicio de la ejecución');
    yield 'Primer valor';

    console.log('Punto medio de la ejecución');
    yield 'Valor medio';

    console.log('Fin de la ejecución');
    yield 'Valor final';
}

const gen = generatorFunction1();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());


