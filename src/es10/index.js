/* 
flat()
Crea una nueva matriz con todos los elementos de dentro de 
cada array hasta una profundidad especificada.
*/

let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(array.flat());
console.log(array.flat(2));




//flatMap()
let arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]

// only one level is flattened
arr1.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]





//trimStart y trimEnd
let phrase1 = '   El miedo'
let phrase2 = '    es de sensatos pero rendirse a él es      '
let phrase3 = 'mediocres    '

console.log(`${phrase1.trimStart()} ${phrase2.trim()} ${phrase3.trimEnd()}`);






/*Optional catch Binding  
Ya no es necesario pasar error como argumento 
try {
    
} catch {
    
}
*/



//fromEntries permite transformar un arreglo en un objeto
let jobEntries = [['title', 'Frontend'], ['description', 'lorem']]
let entries = [['name', 'Elías'], ['age', 23], ['job', Object.fromEntries(jobEntries)]];
console.log(Object.fromEntries(entries));





//Descripción de symbol
let mySymbol = 'My symbol description lorem'
let symbol = Symbol(mySymbol);
console.log(symbol.description);