// Basic Data Structure : 17

let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

//solution 1
function isEveryoneHere(userObj) {
  if (
    userObj.hasOwnProperty("Alan") &&
    userObj.hasOwnProperty("Jeff") &&
    userObj.hasOwnProperty("Sarah") &&
    userObj.hasOwnProperty("Ryan")
  ) {
    return true;
  }
  return false;
}

////solution 2
function isEveryoneHere(userObj) {
  return ["Alan", "Jeff", "Sarah", "Ryan"].every((name) =>
    userObj.hasOwnProperty(name)
  );
}

console.log(isEveryoneHere(users));
