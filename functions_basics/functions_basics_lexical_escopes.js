/* Variavel declarada em um escopo global, ou seja pode
 * ser lida de qualquer ponto do arquivo. 
 */
const name = 'Tarso';

function sayMyName() {
    // Uso da variavel em escopo global
    console.log('sayMyName Function return: ', name);
}

sayMyName();

function useSayMyName() {
    // Aqui o nome no escopo global ainda será exibido, pois ainda esta sendo usado no metodo abaixo.
    sayMyName();
}

useSayMyName();

/* Agora outro caso.
 */

/* Aqui usei o recurso de substiuir valores undefined que vimos nos 
 * estudos de parametros, e por isso o valor em global passa a ser o valor
 * no escopo da função. 
 * */
function saySomeName(someName = name) {
    // Nome no escopo da função
    console.log('Name in global scope: ', name);
    // Algum nome no escopo da função
    console.log('SomeName in function scope: ', someName);

    console.log('saySomeName Function return: ', someName);
}

function useSaySomeName(name) {
    // Algum nome no escopo da função
    console.log('Name in function scope: ', name);

    saySomeName(name)
}

useSaySomeName();
useSaySomeName('Gabriel');