/* funções definidas com "function" possuem uma variavel especial "arguments" que 
 * recebe os argumentos não definidos na função. 
 */
function showParams(value) {
  console.log(arguments);
}

showParams('Value0', 'value1');

function definedParams(firstValue, secondValue) {
  console.log(firstValue, secondValue)
}

definedParams('Value0');

function predefinedValueForParams(firstValue, secondValue = 0) {
  console.log(firstValue + secondValue)
}

predefinedValueForParams(2);
predefinedValueForParams(2, 8);

function defineParamsByObjectDestructuring({ name, lastName, age }) {
  console.log(name, lastName, age)
}

const person = {
  name: 'Tarso Virgilio',
  lastName: 'Coelho de Souza Silva',
  age: 34,
}

defineParamsByObjectDestructuring(person)

function defineParamsByArrayDestructuring([name, lastName, age]) {
  console.log(name, lastName, age)
}

/* Object.values() converte os valores das propriedades de um 
 * objeto em um array. 
 * ref.: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values 
 */
defineParamsByArrayDestructuring(Object.values(person))

/* O operador "rest ( ... )" permite que o ultimo parametro receba todos os 
 * parametros não defindos de uma função como um array, porem somente se 
 * esse for o ultimo parametro da função. 
 */
function calculate(operator, accumulator, ...numbers) {
  for (let number of numbers) {
    if(operator == '+') accumulator += number;
    if(operator == '-') accumulator += number;
    if(operator == '/') accumulator += number;
    if(operator == '*') accumulator += number;
  }

  console.log(`calculate Result: ${accumulator}`);
}

calculate('+', 1, 5, 10, 15, 20, 25);

/* array.forEach() semelhante a utilizar "for", porem sem a necessidade de preparar iteradores ou indices
 * ref.: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 */
function otherCalculate(operator, accumulator, ...numbers) {
  numbers.forEach((number) => {
    if(operator == '+') accumulator += number;
    if(operator == '-') accumulator += number;
    if(operator == '/') accumulator += number;
    if(operator == '*') accumulator += number;
  })
  console.log(`otherCalculate Result: ${accumulator}`);
}

otherCalculate('+', 1, 10, 20, 30, 40, 50);