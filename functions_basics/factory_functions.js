// Factory functions a grosso modo são funções que criam funções.

function createPerson({name, lastName, height, weight}, subject) {
return {
    name,
    lastName, 
    height, 
    weight,
    speak() {
      return `${this.name} está falando sobre ${subject}.`
    },
    imc() {
      const index = this.weight / ((this.height / 100) ** 2);
      return index.toFixed(2);
    }
  }
}

const data = [
  {
    name: 'Tarso Virgilio',
    lastName: 'Coelho de Souza Silva', 
    height: 175, 
    weight: 139.5,
  },
  {
    name: 'Gabriel',
    lastName: 'Pierre', 
    height: 168, 
    weight: 98.5,
  },
];

const p1 = createPerson(data[0], 'Street');

console.log(p1.speak());
console.log(`IMC do ${p1.name} é ${p1.imc()}`);

const p2 = createPerson(data[1], 'Lolzim');

console.log(p2.speak());
console.log(`IMC do ${p2.name} é ${p2.imc()}`);