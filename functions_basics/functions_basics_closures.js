function returnName(name) {
    return function () {
        return name;
    }
}

const name1 = returnName('Tarso');
const name2 = returnName('Gabriel');

// A função name1 só tem acesso ao valor de parametro name pertecente a ela, que no caso é 'Tarso'
console.dir('Anonymous function name1: ', name1); // disponivel somente no navegador, descreve a estrutura e closures
// Da mesma forma, a função name2 só tem acesso ao valor de parametro name pertecente a ela, que no caso é 'Gabriel'
console.dir('Anonymous function name2: ', name2); // disponivel somente no navegador, descreve a estrutura e closures

/* E devido a isso, ao executar cada uma das funções, o valor atribuido ao seu parametro não sofre alterações. 
 * Uma função não acessa propriedades, variaveis ou valores da outra função.
 * */
console.log('Anonymous functions result: ', name1(), name2()); 
