//Rest parameter
const obj = {
    name: 'Fernando',
    age: 23,
    country: 'CO',
};

let {name, ...all} = obj;
console.log(all);



const obj1 = {
    name: 'Fernando',
    age: 23,
};

const obj2 = {
    ...obj1,
    country: 'RU',
}

const obj3 = {
    ...obj2,
    job: 'Frontend Developer',
}

console.log(obj1, obj2, obj3);

//En arrays
const arr1 = [1, 3, 5];
const arr2 = [...arr1, 7, 9]

console.log(arr2);



//Finally en promises
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 2000)
            : reject(new Error('Test Error'))
    });
};

helloWorld()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log('Finalizado'));




//Regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
