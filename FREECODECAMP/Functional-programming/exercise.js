//test 8: Implement map on a prototype(custom map function)
//================================================================

var s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
  var newArray = [];
  s.forEach((item) => newArray.push(callback(item)));
  return newArray;
};

var new_s = s.myMap(function (item) {
  return item * 2;
});
console.log(new_s);



//test 10: Implement filter on a prototype(custom filter function)
//================================================================
Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  var newArray = [];
  this.forEach((item) => {
    if(callback(item) === true) {
      newArray.push(item);
    }
  });
  // Only change code above this line
  return newArray;
};

var new_s2 = s.myFilter(function(item) {
  return item % 2 === 1;
});
console.log(new_s2);


//test 15: filter only integer number and return their squared value
//================================================================
const squareList = arr => {
  return arr.filter(num => num >0 && num % parseInt(num) === 0).map(num => Math.pow(num, 2));
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);



//test 21: Fill in the urlSlug function so it converts a string title and 
//returns the hyphenated version for the URL. You can use any of the methods covered in this section, 
//and don't use replace. Here are the requirements:

//The input is a string with spaces and title-cased words
//The output is a string with the spaces between words replaced by a hyphen (-)
//The output should be all lower-cased letters
//The output should not have any spaces
//================================================================
var globalTitle = "Winter Is Coming";

function urlSlug(title) {
  return title
    .split(" ")
    .filter(substr => substr !== "")
    .join("-")
    .toLowerCase();
}
var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
console.log(winterComing);