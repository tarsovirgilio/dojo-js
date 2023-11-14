function rand(min= 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}
//setTimeout simula algo que demoraria algum tempo na Web 

function f1(callback) {
    setTimeout(function() {
    console.log('f1');
    if (callback) callback();
    }, rand());
}
function f2(callback) {
    setTimeout(function() {
        console.log('f2');
        if (callback) callback();
        }, rand());
}
function f3(callback) {
    setTimeout(function() {
        console.log('f3');
        if (callback) callback();
        }, rand());
}
//Criamos um ordem nos callback um não pode ser executado antes do outro "callback hell"
f1(function() {
    f2(function() {
        f3(function() {
        });
    });
});

console.log('Olá Mundo!')

//Nesse Metodo não utilizamos as funções anôniamas já dentro dos parametros por que se não fica como uma arvore de natal uma dentro da outra...

f1(f1callback);

function f1callback() {
    f2(f2callback);
}

function f2callback() {
    f3(f3callback);
}

function f3callback() {
    console.log('Olá Mundo!');
}