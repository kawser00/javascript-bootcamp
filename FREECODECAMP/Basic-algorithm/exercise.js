// test 1:convert celsius to fahrenheit
//================================================================
function convertToF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}
console.log(convertToF(30));

//test 2: reverse a string
//================================================================
function reverseString(str) {
  return [...str].reverse().join("");
  // return str.split('').reverse().join('');
}
console.log(reverseString("hello"));

//test 3: Factorialize a Number
function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}
console.log(factorialize(5));

//test 4: Find the Longest Word in a String
//================================================================
function findLongestWordLength(str) {
  return str.split(" ").reduce((longest, word) => {
    return Math.max(longest, word.length);
  }, 0);
}
console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);

//solution 2:
function findLongestWordLength2(str) {
  let word = str.split(" ");
  let maxLength = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i].length > maxLength) {
      maxLength = word[i].length;
    }
  }
  return maxLength;
}
console.log(
  findLongestWordLength2("The quick brown fox jumped over the lazy dog")
);

//solution 3:
function findLongestWordLength3(str) {
  return Math.max(...str.split(" ").map((word) => word.length));
}
console.log(
  findLongestWordLength3("The quick brown fox jumped over the lazy dog")
);

//test 5Return an array consisting of the largest number from each provided sub-array.
//===================================================================================================
function largestOfFour(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let maxNum = Math.max(...arr[i]);
    newArr.push(maxNum);
  }
  return newArr;
}

//solution 2:
// function largestOfFour(arr) {
//   return arr.map(function(group) {
//     return group.reduce(function(prev, current) {
//       return current > prev ? current : prev;
//     });
//   });
// }

//solution 3:
// function largestOfFour(arr) {
//   return arr.map(Function.apply.bind(Math.max, null));
// }

//solution 4:
// function largestOfFour(arr, finalArr = []) {
//   return !arr.length
//     ? finalArr
//     : largestOfFour(arr.slice(1), finalArr.concat(Math.max(...arr[0])));
// }

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);


//test 6:Check if a string (first argument, str) ends with the given target string (second argument, target).
//===================================================================================================
function confirmEnding(str, target) {
  // return str.endsWith('n');
 return str.slice(str.length - target.length) === target;
}
console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Congratulation", "on"));
console.log(confirmEnding("He has to give me a new name", "name"));
console.log(confirmEnding("Open sesame", "sage"));



//test 7:Repeat a given string str (first argument) for num times (second argument). 
//Return an empty string if num is not a positive number.
//===================================================================================================
function repeatStringNumTimes(str, num) {
  let st = "";

  if(num <= 0) {
    return "";
  }

  for(let i=0; i<num; i++) {
    st += str;
  }
  return st;
}

//solution 2:
// function repeatStringNumTimes(str, num) {
//   var accumulatedStr = "";

//   while (num > 0) {
//     accumulatedStr += str;
//     num--;
//   }
//   return accumulatedStr;
// }

//solution 3:
// function repeatStringNumTimes(str, num) {
//   if (num < 1) {
//     return "";
//   } else {
//     return str + repeatStringNumTimes(str, num - 1);
//   }
// }

console.log(repeatStringNumTimes("abc", 3));


//test 8:Truncate a string (1st arg) if it is longer than the given maximum string length (2nd arg).
//Return the truncated string with a ... ending.
//===================================================================================================
function truncateString(str, num) {
  if(str.length > num) {
    return str.slice(0, num) + "..."
  }
  return str;
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));