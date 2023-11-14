/* O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.
 * Array.prototype.reduce(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 * Um método que facilita a soma, subtração, concatenação e etc. de todos os valores de um array.
 */

function sum() {
    // Usando o rest operator (...) dentro de colchetes (que representa inicialização de um array), você converte determinados iteráveis em arrays comuns.
    return [ ...arguments ].reduce((accumulator, value) => accumulator += value, 0);
}

console.log('result sum: ', sum(1, 2, 3, 4, 5, 6));

function createPerson(name, lastName) {
    return {
        name,
        lastName,
    };
}

const person1 = createPerson('Tarso Virgilio', 'Coelho de Souza Silva');

console.log(person1);

function speak(initialFrase) {
    return function speakFragment(finalFrase) {
        return `${initialFrase} ${finalFrase}`;
    }
}

const helloWorld = speak('Hello');

console.log(helloWorld('world!!!'));