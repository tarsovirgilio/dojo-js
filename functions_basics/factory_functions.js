// Factory functions a grosso modo são funções que criam funções.

/* 
 * Função responsavel por criar o objeto pessoa, suas propriedades e
 * seus metodos. 
 **/
function createPerson({name, lastName, height, weight}, subject) {
  return {
    name,
    lastName, 
    get fullName() {
      return `${this.name} ${this.lastName}`;
    },
    set fullName(value) {
      const nameFragments = value.split(' ');

      this.name = nameFragments.shift();
      this.lastName = nameFragments.join(' ');
    },
    height, 
    weight,
    get speak() {
      return `${this.name} está falando sobre ${subject}.`
    },
    get imc() {
      const index = this.weight / ((this.height / 100) ** 2);
      return index.toFixed(2);
    }
  }
}

// Fiz nessa estrutura para simular um mock de um response.
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

console.log(p1.fullName);
console.log(p1.speak);
console.log(`IMC do ${p1.name} é ${p1.imc}`);

p1.fullName = 'Bruce Wayne da Silva'
console.log('Nome alterado: ', p1.fullName);

const p2 = createPerson(data[1], 'Lolzim');

console.log(p2.fullName);
console.log(p2.speak);
console.log(`IMC do ${p2.name} é ${p2.imc}`);