//Exercise-1:(arguments)
//================================================================
function profile() {
  let info = "";

  for (value of arguments) {
    info += value + " ";
  }
  return info;
}
console.log(profile("kawser", 22, "web developer"));

// using rest operator for getting arguments
//================================================================
function profile2(...args) {
  return `I am ${args[0]} I am ${args[1]}. I am a ${args[2]}.`;
}
console.log(profile2("kawser", 22, "developer"));
//I am kawser I am 22. I am a developer.

//Exercise-2:(default value in function)
//================================================================
function sum(num1 = 10, num2 = 30, num3) {
  return num1 + num2 + num3;
}
console.log(sum(20, undefined, 40)); // 90

//Exercise-3:(default value in function)
//================================================================
const multiply = (num1, num2) => num1 * num2;
console.log(multiply(20, 40)); // 800

//Exercise-4:(array and object destructuring)
//================================================================
const product = ["shirt", true, 200, 20];
const [productName, , ...rests] = product;
console.log(productName, rests[0], rests[1]); // shirt 200 20

const product2 = { nameOfProduct: "shirt", availability: true, price: 200 };
const { nameOfProduct, price, availability } = product2;
console.log(nameOfProduct, price, availability); // shirt 200 true
