(function(){
// 2. Promise API
//================================================================

//normal way calling
// getUser(1)
//   .then(user => {
//     console.log(user);
//     getCourse(user.name)
//       .then(courses => {
//         console.log(courses);
//         getCoursePrice(courses[1])
//           .then(price => {
//             console.log("JS course Price: " + price);
//           })
//           .catch(err => console.log(err.message));
//       })
//       .catch(err => console.log(err.message));
//   })
//   .catch(err => console.log(err.message));

// calling using return instead of nesting calls
getUser(1)
  .then((user) => {
    console.log(user);
    return getCourse(user.name);
  })
  .then((courses) => {
    console.log(courses);
    return getCoursePrice(courses[1]);
  })
  .then((price) => {
    console.log("JS course Price: " + price);
  })
  .catch((err) => console.log(err.message));

// all functions
function getUser(id) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Kawser",
        profession: "Web Developer",
      });
    }, 2000);
  });
}

function getCourse(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(["PHP", "Javascript", "Python"]);
    }, 2000);
  });
}

function getCoursePrice(courseName) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      // resolve(500);
      reject(new Error("Some error found here!!"));
    }, 2000);
  });
}
})()