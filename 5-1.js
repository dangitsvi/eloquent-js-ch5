var arrays = [[1, 2, 3], [4, 5], [6]];

function flattenArrays(arr){
  // var newArr = [];
  return arr.reduce(function(prev, curr){
    return prev.concat(curr);
  });
  // return newArr;
}

console.log(flattenArrays(arrays));
