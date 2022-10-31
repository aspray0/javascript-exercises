const repeatString = function(string, num) {

  if (num >= 0) {
    let newString = '';
    let i = 0;
    while (i < num) {
      newString = `${newString}${string}`;
      i++;
    }
    return newString;
  } else {
    return 'ERROR';
  }
};

// Do not edit below this line
module.exports = repeatString;
