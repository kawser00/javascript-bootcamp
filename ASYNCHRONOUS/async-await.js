// 2. async await
//================================================================
try {
  async function getResult() {
    const user = await getUser(1);
    console.log(user);
    const courses = await getCourse(user.name);
    console.log(courses);
    const price = await getCoursePrice(courses[1]);
    console.log(price);
  }
  getResult();
} catch (err) {
  console.log(err);
}

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
      resolve(500);
      // reject(new Error("Some error found here!!"));
    }, 2000);
  });
}
