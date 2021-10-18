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
