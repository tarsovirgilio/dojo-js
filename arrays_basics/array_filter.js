/*  Array.filter() retorna um array resultado do filtro dos valores 
do array que será filtrado de acordo com o resultado da função 
de callback, que validará cada um dos itens do Array verificando se
ele atende o que é necessário para ser retornado.

Referencia: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
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

const numbersSmallerThenTweenty = arrayOfNumbers.filter(item => item < 20)

console.log('numbersSmallerThenTweenty: ', numbersSmallerThenTweenty);

// como não me interassa os items nesse caso utilizei o "_" para mostrar que não era necessário.
const firstTwentyNumbers = arrayOfNumbers.filter((_, index) => index < 20);

console.log('firstTwentyNumbers: ', firstTwentyNumbers);

// filtrando array de objetos

const data = [
    {
        name: 'Tarso Virgilio',
        age: '34',
        gender: 'male',
    },
    {
        name: 'Raissa',
        age: '33',
        gender: 'female',
    },
    {
        name: 'Gabriel',
        age: '26',
        gender: 'male',
    },
    {
        name: 'Dalila',
        age: '36',
        gender: 'female',
    },
];

const consumersAboveThirty = data.filter(({ age }) => age > 30);
const maleConsumers = data.filter(({ gender }) => gender === 'male');
const femaleConsumers = data.filter(({ gender }) => gender === 'female');
const consumersWithCompositeName = data.filter(({ name }) => name.split(' ').length > 1);

console.log('consumersAboveThirty: ', JSON.stringify(consumersAboveThirty));
console.log('maleConsumers: ', JSON.stringify(maleConsumers));
console.log('femaleConsumers: ', JSON.stringify(femaleConsumers));
console.log('consumersWithCompositeName: ', JSON.stringify(consumersWithCompositeName));
