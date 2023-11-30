/* Exemplo de encadeamento de metodos array.
 * O motivo de isso ser possivel é pelo fato de que os metodos usados nesse exemplo sempre retornam 
 * arrays, o que possibilita a chamada de outro metodo na sequencia.
 * 
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

const sumAllDoubledPairNumbers = arrayOfNumbers
    .filter(number => number % 2 === 0) // retorna um array de pares
    .map(number => number * 2 ) // retorna o array de pares multiplicados por dois
    .reduce((accumulator, number) => accumulator += number); // soma todos os itens do array de pares

console.log('sumAllDoubledPairNumbers: ', sumAllDoubledPairNumbers);