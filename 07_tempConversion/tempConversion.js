const ftoc = function(tempF) {
  let tempFC = ((tempF - 32) * (5/9));
  tempFC = Math.round(tempFC * 10) / 10;
  return tempFC
};

const ctof = function(tempC) {
  let tempCF = (tempC * (9/5) + 32);
  tempCF = Math.round(tempCF * 10) / 10;
  return tempCF
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
