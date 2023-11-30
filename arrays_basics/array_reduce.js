/* Array.reduce() reduz o array a um novo valor ou array de valores de acordo
com o callback definido.

Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
*/

const getRandomNumber = max => Math.floor(Math.random() * max);

const getArrayOfRandomNumbers = max => {
    let numbers = []
    let iterator = 0;

    while(iterator < max) {
        numbers.push(getRandomNumber(max));
        iterator++;
    }

    return numbers;
}

const arrayOfNumbers = getArrayOfRandomNumbers(60)

console.log('arrayOfNumbers: ', arrayOfNumbers);

const sumAllNumbers = arrayOfNumbers.reduce((accumulator, number) => accumulator += number, 0);

console.log('sumAllNumbers: ', sumAllNumbers);

const sumAllPairNumbers = arrayOfNumbers.reduce((accumulator, number) => {
    if (number % 2 === 0) return accumulator += number 
    return accumulator;
}, 0);

console.log('sumAllPairNumbers: ', sumAllPairNumbers);

const sumAllOddNumbers = arrayOfNumbers.reduce((accumulator, number) => {
    if (number % 2 !== 0) return accumulator += number 
    return accumulator;
}, 0);

console.log('sumAllOddNumbers: ', sumAllOddNumbers);

// reduce no array de objetos

const data = [
    {
        name: 'Tarso Virgilio',
        age: 34,
        gender: 'male',
    },
    {
        name: 'Raissa',
        age: 33,
        gender: 'female',
    },
    {
        name: 'Gabriel',
        age: 26,
        gender: 'male',
    },
    {
        name: 'Dalila',
        age: 36,
        gender: 'female',
    },
];

// nesse caso o melhor é fazer a utilização do metodo filter.
const olderConsumer = data.reduce((accumulator, consumer) => {
    if(accumulator.age > consumer.age) return accumulator;
    return consumer;
});

console.log('olderConsumer: ', olderConsumer);

