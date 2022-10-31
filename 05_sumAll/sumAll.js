const sumAll = function(num1, num2) {

  let finalSum = 0;

  switch (true) {
    case (num1 < 0 || num2 < 0):
      return 'ERROR';
      break;
    
    case (typeof num1 !== 'number' || typeof num2 !== 'number'):
      return 'ERROR';
      break;
    
    case (typeof num1 !== typeof num2):
      return 'ERROR';
      break;

    case (num1 === NaN || num2 === NaN):
      return 'ERROR';
      break;

    case (num1 < num2):
      for (let i = num1; i < (num2 + 1); i++) {
        finalSum += i;
      }
      return finalSum;
    case (num1 > num2):
      for (let i = num2; i < (num1 + 1); i++) {
        finalSum += i;
      }
      return finalSum;
    case (num1 === num2):
      finalSum = num1;
      return finalSum;
  }
};

// Do not edit below this line
module.exports = sumAll;
