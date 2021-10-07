// Write down the data in a memory space and call them
//==================================================================

const PersonName = "Karim is a bad boy";
const nameWithQuotes = "Karim is a \"bad\" boy";

console.log('Name: ' + PersonName);
console.log('Name with quotes: ' + nameWithQuotes);


// Checking the type and explain your answers
//==================================================================
const numberValue = 43;
const stringValue = '43';

console.log(typeof(numberValue)); // numberValue is a number because it is containing just number value
console.log(typeof(stringValue));// stringValue is a string because it is wrapped with quotes


// Write your bio
//==================================================================

const MyName = "I am Kawser Ahmed";
const MyAge = "I am 22";
const MyProfession = "I am a web developer";
const MyHobby = "I love \"Javascript\"";

const MyBio = MyName + '.' + MyAge + '.'+ MyProfession + '.'+ MyHobby;
console.log(MyBio);