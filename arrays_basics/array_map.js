/* Array.map() retorna um novo array apartir de outro array, permitindo
manipular os valores do array utilizado.

Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map
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

const allNumberTimesTwo = arrayOfNumbers.map(item => item*2)

console.log('allNumberTimesTwo: ', allNumberTimesTwo);

const transformArrayToObjects = arrayOfNumbers.map((item, index) => ({ index, value: item }))

console.log('transformArrayToObjects: ', JSON.stringify(transformArrayToObjects));

// map no array de objetos

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

const transformIntoADrag = (name, age) => {
    const firstNames = {
        '1': 'Lorelay',
        '2': 'Rúbia',
        '3': 'Samanta',
        '4': 'Lavínia',
        '5': 'Rebeca',
        '6': 'Sharon',
        '7': 'Salete',
        '8': 'Dominique',
        '9': 'Natasha',
        '10': 'Victoria',
        '11': 'Pérola',
        '12': 'Sofia',
    };

    const lastNames = {
        '1': 'Love',
        '2': 'Starlight',
        '3': 'Close',
        '4': 'Glitter',
        '5': 'Brazil',
        '6': 'Perry',
        '7': 'Espacate',
        '8': 'Baphon',
        '9': 'Werneck',
        '10': 'Queen',
        '11': 'Lovato',
        '12': 'Lacre',
        '13': 'Carolaine',
        '14': 'BayBlade',
        '15': 'Pancake',
    }

    const firstNameNumber = name.split(' ')[0].length;

    const lastNameNumber = age.toString()
        .split('')
        .reduce((dozens, units) => Number(dozens)+Number(units));

    return `${firstNames[firstNameNumber]} ${lastNames[lastNameNumber]}`;
}

const rejuvenateConsumers = data.map(({ name, age, gender }) => ({name, gender, age: age - 10}));
const makeUp = data.map(({ name, age }) => ({name: transformIntoADrag(name, age), gender: 'female', age}));

console.log('rejuvenateConsumers: ', JSON.stringify(rejuvenateConsumers));
console.log('makeUp: ', JSON.stringify(makeUp));
