// funções que se chamam

function countTo(max, actualNumber) {
  let number = actualNumber || 0;

  number+=1;
  console.log(number)

  if (number == max) return;

  countTo(max, number);
}

countTo(2000);