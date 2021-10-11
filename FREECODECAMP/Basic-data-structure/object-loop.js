// Basic Data Structure : 18
const obj = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  let count = 0;
  for (let user in usersObj) {
    if(usersObj[user].online === true) {
      count++;
    }
  }

  return count;
}

countOnline(obj)