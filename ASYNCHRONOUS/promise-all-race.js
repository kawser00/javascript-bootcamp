// 2. Promise all, race
//================================================================
//If we have no dependable separate promises(no one is dependable to others) then we can use Promise.all()/race()
// Promise.all() will show results when all the promises will be resolved
// Promise.race() will show results if just any one is resolved resolved

const p1 = Promise.resolve("p1 resolved");
const p2 = Promise.resolve("p2 resolved");
const p3 = Promise.reject("p3 is rejected");

Promise.all([p1, p2, p3])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.log(err));

const p4 = Promise.resolve("p4 resolved");
const p5 = Promise.resolve("p5 resolved");
const p6 = Promise.reject("p6 is rejected");

Promise.race([p4, p5, p6])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.log(err));
