
//Exercise-1
//========================================
//must result a array including all elements in the defined range
//results will be [1,2, 3, 4, 5, 6, 7, 8, 9, 10]
const arrayFromRange = (min, max) => {
  let numArray = [];

  for (let i = min; i <= max; i++) {
    numArray.push(i);
  }
  return numArray;
};
console.log(arrayFromRange(1, 10));

//Exercise-2
//==================================
//custom includes methods that is defined by you
//result true or false based on searchElement
const numbers = [1, 2, 3, 4];

const includes = (array, searchElement) => array.includes(searchElement);
console.log(includes(numbers, -1));

//Exercise-3
//==================================
//Exclude the numbers you passed to the function  from numbers array
//result will be [3, 4]

const numbers2 = [1, 2, 3, 4];

const except = (array, excluded) => {
  for (let i = 0; i < excluded.length; i++) {
    array.splice(array.indexOf(excluded[i]), 1);
  }
  return array;
};
console.log(except(numbers2, [1, 2]));

//Exercise-4
//==================================
//count the occurrence of numbers
//result will be number of occurrence .Example case: result will be 2
//At first use procedural way
//Then use reduce method
const numbers3 = [1, 2, 3, 1];

//procedural way
const countOccurrences = (array, elem) => {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === elem) {
      count++;
    }
  }
  return count;
};
console.log(countOccurrences(numbers3, 1));

//use reduce method
const countOccurrences2 = (array, elem) => {
  let count = 0;

  array.reduce((a, b) => {
    b === elem && count++;
  }, 0);
  return count;
};
console.log(countOccurrences2(numbers3, 1));

//Exercise-5
//==================================
//Get the maximum number from the array
//At first use procedural way
//THen use reduce method
const numbers4 = [1, 700, 2, 3, 69, 600];

//procedural way
const getMax = (array) => Math.max(...array);
console.log(getMax(numbers4));

//use reduce method
const getMax2 = (array) => array.reduce((acc, elem) => Math.max(acc, elem));
console.log(getMax2(numbers4));
