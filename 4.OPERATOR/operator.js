//Arithmetic operator
//================================================================
console.log(10 + 3); // 13
console.log(10 - 3); // 7
console.log(10 * 3); // 30
console.log(10 / 3); // 3.33
console.log(10 % 3); // 1
console.log(10 ** 3); // 1000


//Assignment operator
//=================================================================
let z = 10;
z += 10;
z -= 10;
z *= 10;
z /= 10;
z **= 10;
z++;
z--;
console.log(z);


//operands++ vs ++operands
//=================================================================
let x = 10;
console.log(x++); //10 - first show reference value then do operation
console.log(x); //11

let y = 10;
console.log(--y); //9 - first do operation then log value
console.log(y); //9


//comparison operators
//=================================================================
let a = 10;
console.log(a > 10); // false
console.log(a < 20); // true
console.log(a <= 5); // false
console.log(a == "10"); // true
console.log(a === 10); // false
console.log(a != 10); // false


// double equal(==) vs triple equal(===)
//=================================================================
let b = 20;

console.log(b == "20"); // true - double equal(==) just check value not type
console.log(b === "20"); // false -  triple equal(===) check both value and type


// logical operator
//=================================================================
let c = 20;

console.log(c > 5 && c < 30); // true
console.log(c < 5 || c < 30); // true
console.log(c > 5 && c !== 20); // false
console.log(!(c === 20)); // false

