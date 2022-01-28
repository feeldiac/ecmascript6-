//replaceAll
const string = `Succes is not a comfortable procedure. It is a very
uncomfortable thing to attempt. So you gotta get comfortable being
uncomfortable.`;

//Solo reemplaza la primer coincidencia
const replacedString = string.replace('comfortable', 'easy');
const replacedString2 = string.replaceAll('comfortable', 'easy');
console.log(replacedString);
console.log(replacedString2);

//Métodos privados
//usar el símbolo # para hacerlo privado
class Message {
  #show(val) {
    console.log(val);
  }
}

const message = new Message();
message.show('Hello');

/*
promiseAny

Retorna el primer valor que se resuelve, ignora el resto

Promise.any() is like the opposite of Promise.all(). Promise.any() resolves
if any of the supplied promised is resolved unlike promise.all() which 
waits for all promises to resolve before it resolves.
*/

const promise1 = new Promise((resolve, reject) => reject('1'));
const promise2 = new Promise((resolve, reject) => resolve('2'));
const promise3 = new Promise((resolve, reject) => resolve('3'));

Promise.any([promise1, promise2, promise3]).then((response) =>
  console.log(response)
);

//Underscores as Numeric Separator
const billion = 1000_000_000;
console.log(billion); // 1000000000

//https://backbencher.dev/articles/javascript-es2021-new-features
//WeakRef ____ Referencia débil a un objeto
// class anyClass {
//     constructor(element)
//     this.ref = new WeakRef(element)
// }

/* 
Logical Assignment Operator

Logical assignment operator combines the logical 
operations(&&, || or ??) with assignment.
*/
let isTrue = true;
let isFalse = false;
let isUndefined = undefined;

//If the left side is a truthy value, it is assigned with the right side value
console.log((isTrue &&= isFalse));

//If the left side is a falsy value, it is assigned with the right side value
console.log((isTrue ||= isFalse));

//If the left side is null/undefined, it is assigned with the right side value
console.log((isUndefined ??= isFalse));
