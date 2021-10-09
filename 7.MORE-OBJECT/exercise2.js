//Exercise-1:(Compare two value and show the max value)
//================================================================
function max(a, b) {
  return Math.max(a, b);
}
console.log(max(30, 45)); // 45
console.log(max(40, 70)); // 70

//Exercise-2:(Show number in between with the types function)
//================================================================
function showNumber(num) {
  let numArray = [];

  for (let i = 0; i < num; i++) {
    numArray.push(i);
  }

  return numArray;
}
console.log(showNumber(10)); //[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]


//Exercise-3:(Sum of all numbers up to passed limit function)
//================================================================
function sum(num) {
  let total = 0;

  for (let i = 0; i < num; i++) {
    total += i;
  }

  return total;
}
console.log(sum(20)); // 190

//Exercise-4:(Calculate Average Grade number)
//================================================================
function calculateAverage(arr) {
  let totalNumber = 0;

  for (let i = 0; i < arr.length; i++) {
    totalNumber += arr[i];
  }

  const gradeTotal = totalNumber / arr.length;

  if(gradeTotal >= 60 && gradeTotal < 70) {
    return "Grade : D";
  }else if(gradeTotal >= 70 && gradeTotal < 80) {
    return "Grade : C";
  }else if(gradeTotal >= 80 && gradeTotal < 90) {
    return "Grade : B";
  }else if(gradeTotal >= 90 && gradeTotal <= 100) {
    return "Grade : A";
  }else {
    return "Grade : F";
  }
}

console.log(calculateAverage([60, 70, 90, 50, 55]));

//Exercise-5:(Show only string type value from a object)
//================================================================
const movie = {
  title: "Harry-Potter",
  releaseYear: 2010,
  rating: 7.5,
  director: 'Director Name'
}
function showProperties(movieData) {
  let StringValueObj = {}

  for(let key in movieData) {
    if(typeof(movieData[key]) === "string") {
      StringValueObj[key] = movieData[key];
    } 
  }
 
  return StringValueObj;
}

console.log(showProperties(movie)); 
// { title: 'Harry-Potter', director: 'Director Name' }