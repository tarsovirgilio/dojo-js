// exemplo de concatenação de arrays utilizando o array.concat()

const numberGroupOne = [1, 2, 3];
const numberGroupTwo = [4, 5, 6];
const numberGroupThree = numberGroupOne.concat(numberGroupTwo);

console.log('numberGroupOne: ', numberGroupOne);
console.log('numberGroupTwo: ', numberGroupTwo);
console.log('numberGroupThree: ', numberGroupThree);

// exemplo de concatenação de arrays utilizando o spread operator

const numberGroupFour = [7, 8, 9];
const numberGroupFive = [10, 11, 12];
const numberGroupSix = [ ...numberGroupFour, ...numberGroupFive ];

console.log('numberGroupFour: ', numberGroupFour);
console.log('numberGroupFive: ', numberGroupFive);
console.log('numberGroupSix: ', numberGroupSix);

// tanto spread quanto concat permitem que sejam adicionados outros elementos alem de arrays
const numbeGroupSeven = numberGroupOne.concat('Tarso', numberGroupTwo);
console.log('numbeGroupSeven: ', numbeGroupSeven);

const numbeGroupEight = [ ...numberGroupFour, 'Gabriel', ...numberGroupFive ];
console.log('numbeGroupEight: ', numbeGroupEight);