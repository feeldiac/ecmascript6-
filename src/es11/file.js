//Dynamic import
export function hello() {
    console.log('Hello World');
}


//BigInt
const aBignumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBignumber, anotherBigNumber);








/*Promise.allSettled

The Promise.allSettled() method returns a promise that resolves after all of 
the given promises have either fulfilled or rejected, with an array of objects 
that each describes the outcome of each promise.

It is typically used when you have multiple asynchronous tasks that are not
dependent on one another to complete successfully, or you'd always like to 
know the result of each promise.

In comparison, the Promise returned by Promise.all() may be more appropriate 
if the tasks are dependent on each other / if you'd like to immediately 
reject upon any of them rejecting.
*/

const promise1 = new Promise((resolve, reject) => reject('reject'));
const promise2 = new Promise((resolve, reject) => resolve('resolve1'));
const promise3 = new Promise((resolve, reject) => resolve('resolve2'));

Promise.allSettled([promise1, promise2, promise3])
  .then(response => console.log(response));









/*
Formas de acceder al objeto global
Window no existe desde node y this no me lo toma en el nav.
en este caso es porque está definido dentro del arreglo.
*/
const thisOptions = [window, self, frames, this];
thisOptions.map(item => console.log(item));

//globalThis
// Nueva forma de acceder al objeto global también desde node.

console.log(globalThis);









/* Nullish coalescing operator (??)
The nullish coalescing operator (??) is a logical operator that returns 
its right-hand side operand when its left-hand side operand is null or 
undefined, and otherwise returns its left-hand side operand.

This can be contrasted with the logical OR (||) operator, which returns 
the right-hand side operand if the left operand is any falsy value, 
not only null or undefined.
*/

const foo = null ?? 'default string';
const foo2 = 0 ?? 'lorem';
console.log(foo);
console.log(foo2);






/* 
Optional chaining
Evita que se rompa la aplicación cuando no existe un elemento/método
Quizás proveniente de una API. Convierte el valor en undefined
*/

const user = {};
console.log(user?.profile?.email);

//Permite validar de acuerdo con la disponibilidad de los datos
if(user?.profile?.email) {
    console.log('email');
} else {
    console.log('fail');
}
