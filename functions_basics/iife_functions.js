/* Funções auto invocadas 
 * IIFE => Immediately invoked function expression
 * 
 * Serve para impedir que as funções poluam o escopo global, e até mesmo 
 * sejam de alguma forma alteradas, evitando que outras bibliotecas interfiram
 * no escopo das funções que criamos.
 */

function exposeSomeNumber() {
  console.log(arguments[0] || 1337)
}

exposeSomeNumber();

exposeSomeNumber(1338);

// Forma de chamar a função imediatamente. 

(function() {
  // Nada dentro dessa função toca o escopo global e vise versa.

  const name = 'Tarso'
  console.log('Immdiately invoked: ', name);
})();

// Essa variavel não afeta a variavel dentro da função IIFE
const name = 'Gabriel';

// Exemplo de uma IIFE recebendo parametros.

(function(name, lastName, age, weight, height) {
  function createPerson() {
    return {
      name,
      lastName, 
      age, 
      weight, 
      height
    }
  }

  function getPerson() {
    console.log('Here\'s the person: ', createPerson())
  }

  getPerson();
})('Tarso Virgilio', 'Coelho de Souza Silva', 34, 139.3, 175);