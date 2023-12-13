/* O method Array.forEach() tem a mesma funcionalidade que um 
 * "for" ("for(let i of array)") convencional, porem com uma estrutura mais simples.
 *
 * Diferente de outros metodos ele não possui retorno, um metodo do tipo "void", e só
 * é utilizado para iterar dentro de um array.
 * 
 * Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/foreach
 */

 // Exemplo de um soma de numero usando foreach. 

const numbers = [100, 200, 300];

let total = 0;

numbers.forEach(number => total += number);

// Lembrando que o melhor seria utilizar o Array.reducer() por ser mais performatico.
console.log('Total: ', total);