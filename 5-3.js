var ancestryJson = require('./ch5_files/code/ancestry.js');
var ancestry = JSON.parse(ancestryJson);

function average(array) {
  function plus(a,b) {return a + b;}
  return array.reduce(plus) / array.length;
}

function sortByCentury(array, century) {
  return array.filter(function(person) {
    return Math.ceil(person.died / 100) === century;
  });
}

function mapAge(array) {
  return array.map(function(person) {
    return person.died - person.born;
  })
}

console.log(average(mapAge(sortByCentury(ancestry, 16))));
console.log(average(mapAge(sortByCentury(ancestry, 17))));
console.log(average(mapAge(sortByCentury(ancestry, 18))));
console.log(average(mapAge(sortByCentury(ancestry, 19))));
console.log(average(mapAge(sortByCentury(ancestry, 20))));
console.log(average(mapAge(sortByCentury(ancestry, 21))));
