// Write your bio(By grouping closely related data) using Array
//==================================================================
const ArrayProfile = ['Kawser Ahmed', 22, 'web developer', '\"Javascript\"']
const MyBio1 = "I am " + ArrayProfile[0] + '.' + "I am " + ArrayProfile[1] + '.'+ "I am a " + ArrayProfile[2] + '.'+ "I love " + ArrayProfile[3];
console.log(MyBio1); // I am Kawser Ahmed.I am 22. I am a web developer.I love "Javascript"


// Write your bio(By grouping closely related data) using Object
//==================================================================
const ObjectProfile = new Object()

ObjectProfile.name = 'Kawser Ahmed',
ObjectProfile.age = 22,
ObjectProfile.profession = 'web developer',
ObjectProfile.favorite = '\"Javascript\"'

const MyBio2 = "I am " + ObjectProfile.name + '.' + "I am " + ObjectProfile.age + '.'+ "I am a " + ObjectProfile.profession + '.'+ "I love " + ObjectProfile.favorite;
console.log(MyBio2); // I am Kawser Ahmed.I am 22. I am a web developer.I love "Javascript"


// Invalid key (with explanation)
//==================================================================
const someObject = {}

someObject._name = 'Kawser' //allowed
someObject.age = 22 //allowed

var prop = "color"
someObject[prop] = "red" //allowed

// someObject.123 = true //not allowed because a number can't be a property name of a object


// Movie Database
//==================================================================

const movieDB = [
  {id: 1, name:"Movie Name", rating: 4, category:"Movie category"},
  {id: 2, name:"Movie Name", rating: 8, category:"Movie category"},
  {id: 3, name:"Movie Name", rating: 5, category:"Movie category"},
  {id: 4, name:"Movie Name", rating: 7, category:"Movie category"},
  {id: 5, name:"Movie Name", rating: 8, category:"Movie category"},
];

const movie = movieDB[3];
const movieDetails = 'The ' + movie.name + ' got ' + movie.rating + ' rating under ' + movie.category + ' category.';
console.log(movieDetails);


const person = {
  name: "John",
  age: 22,
  jobTitle: "developer"
}

const personName = 'name'
console.log(person[personName]); 
console.log(person['jobTitle']); 