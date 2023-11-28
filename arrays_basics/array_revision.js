// nesse exemplo usei alguns metodos de array e para uma maior referencia basta utilizar o link
// Arrays: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array

// formas de declarar um array

// com colchetes. Lembrando que o array aceita todos os tipos de dados.
const names = ['Tarso', 'Gabriel']

// array utilizando o construtor
const lastNames = new Array('Silva', 'Pierre');

// Arrays trabalham com o conceito de valor por referência
const newNames = names;

// newNames recebe o valor de names e sua referencia
newNames[1] = 'Raissa';

// aqui name sera alterado pelo fato de ser referencia de newName
console.log(names);

// da mesma forma se o array de referencia (names) sofrer alguma alteração
names.push('Gabriel');

// o array newNames tambem sofrera alteração.
console.log(newNames);

// para evitar essas alterações por referencia basta usar o spread operator
const namesCopy = [ ...names ];

// agora alterações em namesCopy não refletirao em names, pois ele não é mais sua referencia
namesCopy.pop();

console.log(namesCopy);

