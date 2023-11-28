// Exemplos de utilização de splice

const names = ['Tarso', 'Gabriel'];

// similar ao array.push(), nesse caso seria melhor usar o push mesmo.
names.splice(names.length, 0, 'Heloisio', 'Raissa', 'Dalila');

console.log('names post push: ', names);

// similar ao array.pop(), porem pode ser removido mais de um elemento
const namesRemoved = names.splice(3, 2);

console.log('names post pop: ', names);

// como pode ocorrer a remoção de mais de um elemento, o retorno do splice é um array.
console.log('namesRemoved post pop: ', namesRemoved);

// similar ao array.shift()
const otherNamesRemoved = names.splice(0, 2);

console.log('names post shift: ', names);
console.log('namesRemoved post shift: ', otherNamesRemoved);

//similar ao array.unshift()

names.splice(0, 0, 'Tarso', 'Gabriel');
console.log('names post unshift: ', names);