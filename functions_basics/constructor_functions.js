// Assim como as factory functions as funções contrutoras tambem retornam objetos.

function Person(name, lastName) {
    // Atributos privadas
    const ID = '1337'

    // Atributos públicos
    this.name = name;
    this.lastName = lastName;

    // Metodos público
    this.speak = () => `Hi my name is ${this.name}`;
    this.getId = () => ID;
}

const p1 = new Person('Tarso Virgilio', 'Coelho de Souza Silva');

console.log(p1.speak());
console.log(p1.getId());