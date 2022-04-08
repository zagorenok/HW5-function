console.log('-------#4 Упрощенный вариант');

function newNumbers(a, b) {
  if ( a > b) {
    return;
  }
  console.log(a);
  newNumbers(a + 1, b);
}
newNumbers(3, 9);

console.log('-------#4 Усложненный вариант');

function anotherNumbers(a, b) {
  console.log(a);
  if (a < b) {
    a++;
  } else if (a > b) {
    a--;
  } else {
    return;
  }
  anotherNumbers(a, b);
}
anotherNumbers(9, 3);

console.log('--------#5 Реализовать часы');

const clock = document.querySelector('#clock');
let formatFull = true;
let time = '';

setInterval(function() {
  if (formatFull) {
      time = new Date().toTimeString().split(' ')[0];
  } else {
      time = new Date().toTimeString().split(' ')[0].substring(0,5); // то же, что и выше + substring(0,5) обрезаем двоеточие с секундами
  }
  clock.innerHTML = time;
}, 1000);



