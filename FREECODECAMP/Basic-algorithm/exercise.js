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

//test 5: Return an array consisting of the largest number from each provided sub-array.
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
function largestOfFour2(arr) {
  return arr.map(function (group) {
    return group.reduce(function (prev, current) {
      return current > prev ? current : prev;
    });
  });
}

//solution 3:
function largestOfFour3(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}

//solution 4:
function largestOfFour4(arr, finalArr = []) {
  return !arr.length
    ? finalArr
    : largestOfFour(arr.slice(1), finalArr.concat(Math.max(...arr[0])));
}

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

  if (num <= 0) {
    return "";
  }

  for (let i = 0; i < num; i++) {
    st += str;
  }
  return st;
}

//solution 2:
function repeatStringNumTimes2(str, num) {
  var accumulatedStr = "";

  while (num > 0) {
    accumulatedStr += str;
    num--;
  }
  return accumulatedStr;
}

//solution 3:
function repeatStringNumTimes3(str, num) {
  if (num < 1) {
    return "";
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}

console.log(repeatStringNumTimes("abc", 3));

//test 8:Truncate a string (1st arg) if it is longer than the given maximum string length (2nd arg).
//Return the truncated string with a ... ending.
//===================================================================================================
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  }
  return str;
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

//test 9: if any element of an array is divisible by 2 return the first number and
// if no element is divisible return undefined
//===================================================================================================
function findElement(arr, func) {
  let num;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    let value = func(element);
    if (value === true) {
      num = element;
      break;
    }
  }
  return num;
}

// customized way
function findElement2(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}

// solution 2:
function findElement3(arr, func) {
  return arr.find(func);
}

// solution 3:
function findElement4(arr, func) {
  return arr[arr.map(func).indexOf(true)];
}

// solution 4:
function findElement(arr, func) {
  return arr.length && !func(arr[0]) ? findElement(arr.slice(1), func) : arr[0];
}

console.log(findElement([1, 2, 3, 4, 5, 6], (num) => num % 2 === 0));

//test 11: Return the provided string with the first letter of each word capitalized.
// Make sure the rest of the word is in lower case.
//===================================================================================================
function titleCase(str) {
  // return str.split(' ').map(string => string[0].toUpperCase());
  const convertArray = str.toLowerCase().split(" ");
  const result = convertArray.map((val) => {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

// make it one line
function titleCase2(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((val) => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    .join(" ");
}

//solution 2
function titleCase3(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}

console.log(titleCase("I'm a little tea pot"));

//test 12: Copy each element of the first array into the second array, in order.
//Begin inserting elements at index n of the second array.
//===================================================================================================
function frankenSplice(arr1, arr2, n) {
  const old = arr2.slice();
  old.splice(n, 0, ...arr1);
  return old;
}
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
console.log(frankenSplice([1, 2], ["a", "b"], 1));

//test 13: Remove all falsy values from an array.
//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
//===================================================================================================
function bouncer(arr) {
  // return arr.filter(val => Boolean(val));
  return arr.filter(Boolean); // easy way
}
console.log(bouncer([7, "ate", "", false, 9]));


//test 14: Return the lowest index at which a value (second argument) should be inserted into an array (first argument) 
//once it has been sorted. The returned value should be a number.
//===================================================================================================
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i;
  }

  return arr.length;
}

//solution 2:
function getIndexToIns2(arr, num) {
  return arr.filter((val) => num > val).length;
} // not understand

//solution 3:
function getIndexToIns3(arr, num) {
  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
}

console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([10, 20, 40, 30, 50], 35));
console.log(getIndexToIns([2, 5, 10], 15));


//test 15: Return true if the string in the first element of the array 
//contains all of the letters of the string in the second element of the array.
//===================================================================================================
function mutation(arr) {
  let one = arr[0].toLowerCase().split("");
  let two = arr[1].toLowerCase().split("");

  return two.every(function (element) {
    return one.includes(element);
  });
}

// make it one line
function mutation2(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every((element) => arr[0].toLowerCase().split("").includes(element));
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "el"]));


//test 16: Return true if the string in the first element of the array 
//contains all of the letters of the string in the second element of the array.
//===================================================================================================
function chunkArrayInGroups(arr, size) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

function chunkArrayInGroups2(arr, size) {
  let newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));