function letterCombinations(input_digit) {
  //brute force approach (assuming only two digits)
  var numberStringHt = {
    2:"abc",
    3:"def",
    4:"ghi",
    5:"jkl",
    6:"mno",
    7:"pqrs",
    8:"tuv",
    9:"wxyz",
  }

  var allCombinations = [];

  for (let i = 0; i < input_digit.length; i++) {
    let currentString = numberStringHt[input_digit[i]];
    let nextString = numberStringHt[input_digit[i+1]];

    if(nextString){
      for (const currentLetter of currentString) {
        for (let nextLetter of nextString) {
          allCombinations.push(currentLetter + nextLetter)
        }
      }
    }
  }

  return allCombinations;
}

module.exports = letterCombinations;
