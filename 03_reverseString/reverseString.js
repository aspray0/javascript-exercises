const reverseString = function(string) {
  const stringArray = string.split('');
  let i = 0;
  const reversedArray = [];

  for (value of stringArray) {
    reversedArray[i] = stringArray[stringArray.length - (i + 1)];
    i++;
  }
  let reversedString = reversedArray.join('');
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
