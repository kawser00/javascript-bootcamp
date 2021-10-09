// Setup
var contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];


//My way 2:
//===========================================================

function lookUpProfile(name, prop) {

  for (var i = 0; i < contacts.length; i++) {
    var profile = contacts[i];

    if (profile[prop] && profile.firstName == name) {
      return profile[prop];
    } else if (!profile[prop] && profile.firstName !== name) {
      return  'No such contact';
    } else if (!profile[prop]) {
      return "No such property";
    }
  }
  return "No such contact";
}

//way 2:
//===========================================================
function lookUpProfile(name, prop) {
  for (let x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
        return contacts[x][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

//way 3:
//===========================================================
function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (prop in contacts[i]) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}



console.log(lookUpProfile("Kristian", "lastName")); //Vos
console.log(lookUpProfile("Sherlock", "likes")); //["Intriguing Cases", "Violin"]
console.log(lookUpProfile("Harry", "likes")); // []
console.log(lookUpProfile("Bob", "number")); //No such contact
console.log(lookUpProfile("Bob", "potato")); //No such contact
console.log(lookUpProfile("Akira", "address")); //No such Property
