//Exercise -1: (What will the result and explain why)
//================================================================
const x = 10;
const y = "a";

console.log(y === "b" || x >= 10); // [(false || true) = true] - There is no short circuit happen, because
//it returns true after checking all of the conditions.


//Exercise -2: (What will the result and explain why)
//================================================================
const a = 3;
const b = 8;

console.log(!(a == "3" || a === b) && !(b != 8 || a <= b)); // [!(true || false) && !(false || true) = false]
//Here short circuit happened in the 1st condition "!(true || false) = false". As it is and operator,
//so it will not check again the next condition.


//Exercise -3: (Get the boolean value)
//================================================================
console.log(!!"Hello World"); //true
console.log(!!""); //false
console.log(!!null); //false
console.log(!!undefined); //false
console.log(!!-1); //true
console.log(!!NaN); //false
console.log(!!0); //false
// (null, 0, undefined, NaN, "", false) except those all are truthy values


//Exercise -4: (What will the result and explain why)
//================================================================
const str = "";
const msg = "haha!";
const isFunny = "false";

console.log(!((str || msg) && isFunny)); // [!((false || true) && true)]
//Short circuit happened after reversing the result "!(true && true) = false" here.
