var ancestryJson = require('./ch5_files/code/ancestry.js');
var ancestry = JSON.parse(ancestryJson);

function average(array) {
  function plus(a,b) {return a + b;}
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person){
  byName[person.name] = person;
});


//returns an array of age differences of a child and their mother if the mother exists
function averageMomAgeDiff(array) {
  var ageDiffs = [];
  ancestry.forEach(function(person){
    var mom = byName[person.mother];
    if(mom) {
      ageDiffs.push(person.born - mom.born);
    }
  });
  return average(ageDiffs);
}

console.log(averageMomAgeDiff(ancestry));
