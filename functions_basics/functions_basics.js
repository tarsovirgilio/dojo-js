/* Declaração de funções de forma literal (function hoisting) 
 * Esse tipo de declação faz com que as funções funcionem em
 * qualquer local do código, quase que de forma global.
 */
sayHi();

function sayHi() {
  console.log('hi');
}

/* First-class objects (objetos de primeira flasse)
 * funções podem ser consideradas como dados.
 * function expression
 */
const iAmData = function() {
  console.log('I am data');
}

// Exemplo de utilização da função como dado
function executeSomeFunction(paramFunction) {
  console.log('I will execute the function below')
  paramFunction();
}

executeSomeFunction(iAmData)

// Exemplo de arrow function
const arrowFunction = () => {
  console.log('throw an arrow');
}

executeSomeFunction(arrowFunction)

/* Exemplo de função de um objeto
 * Também conhecido como metodo de um objeto no JS.
 */
const dog = {
  bark() {
    console.log('whoof!!!');
  }
}

dog.bark();