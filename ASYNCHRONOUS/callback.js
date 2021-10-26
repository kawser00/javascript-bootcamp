// WE CAN DEAL ASYNCHRONOUS IN 4 WAYS:
// 1. callback function
// 2. Promise API
// 3. async await - behind the scenes it works with Promise way
// 4. fetch

// 1. callback function
function getNumber(num, callback) {
  setTimeout(() => {
    console.log("calling after 1 sec");
    callback(num);
  }, 1000);
}

console.log(1);
getNumber(2, function (number) {
  console.log(number);
});
console.log(3);

//callback hell/christmas tree
getUser(1, function (user) {
  console.log(user);
  getCourse(user.name, function (courses) {
    console.log(courses);
    getCoursePrice(courses[1], function (price) {
      console.log("JS course Price: " + price);
    });
  });
});

function getUser(id, callback) {
  setTimeout(() => {
    callback({
      id: 1,
      name: "Kawser",
      profession: "Web Developer",
    });
  }, 2000);
}

function getCourse(name, callback) {
  setTimeout(() => {
    callback(["PHP", "Javascript", "Python"]);
  }, 2000);
}

function getCoursePrice(courseName, callback) {
  setTimeout(() => {
    callback(500);
  }, 2000);
}
