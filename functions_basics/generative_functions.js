function* generative() {
    // yield retorna o valor assossiado a quantas vezes você chama o metodo "next()"
    yield 'Value 1';
    yield 'Value 2';
    yield 'Value 3';
}

const generativeOne = generative();

console.log(generativeOne.next().value);
console.log(generativeOne.next().value);
console.log(generativeOne.next().value);
console.log(generativeOne.next());

function* timer(max) {
    let i = 0;

    while(i <= max) {
        yield i;
        i++;
    }
}

const counting = timer(30);
