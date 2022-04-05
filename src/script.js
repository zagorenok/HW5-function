console.log('-------#4 Упрощенный вариант');

function newNumbers(A, B) {
  if ( A > B) {
    return;
  }
  console.log(A);
  newNumbers(A + 1, B);
}
newNumbers(3, 9);

console.log('-------#4 Усложненный вариант');

function anotherNumbers(A, B) {
  console.log(A);
  if (A < B) {
    A++;
  } else if (A > B) {
    A--;
  } else {
    return;
  }
  anotherNumbers(A, B);
}
anotherNumbers(9, 3);

console.log('--------#5 Реализовать часы');

let data = new Date();
let hour = data.getHours();
let minutes = data.getMinutes();
let seconds = data.getSeconds();
alert('Текущее время:' + hour + ':' + minutes + ':' + seconds);


