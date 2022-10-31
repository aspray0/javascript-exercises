const removeFromArray = function(array, ...args) {


  for (arg of args) {
    let i = 0;
    for (value of array) {
      if (value === arg) {
        array.splice(i, 1)
        i++;
      } else {
        i++;
        continue;
      }
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
