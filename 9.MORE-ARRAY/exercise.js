
// Exercise-1:(adding elements)
//========================================================================
const numbers = [1, 2, 3, 3, 4, 9, 10];
numbers.push(11);
numbers.unshift(0);
numbers.splice(4, 2, 4, 5, 6, 7, 8);
console.log(numbers);

// Exercise-2:(removing elements)
//========================================================================
const numbers2 = [0, 1, 2, 3, 3, 4, 4, 5, 6];
numbers2.pop();
numbers2.shift();
console.log(numbers2);
numbers2.splice(3, 2);
console.log(numbers2);

// Exercise-3:(finding elements from primitives type)
//========================================================================
const indexOfElements = numbers2.indexOf(3);
console.log(indexOfElements);

const isIncludes = numbers2.includes(12);
console.log(isIncludes);

// Exercise-4:(finding elements from reference type)
//========================================================================
const products = [
  {id: 1, name: 'sunglass', price: 100},
  {id: 2, name: 'shoes', price: 300},
  {id: 3, name: 'shoes', price: 400},
];

const findProduct = products.find(product => product.name === 'shoes');
console.log(findProduct);

const productIndex = products.findIndex(product => product.name === 'shoes');
console.log(productIndex);

const filterProduct = products.filter(product => product.name === 'shoes');
console.log(filterProduct);

// Exercise-5:(combining arrays)
//========================================================================
const num1 = [1, 2 ,3];
const num2 = [4, 5, 6];

console.log(num1.concat(num2));
console.log([...num1, ...num2]);

// Exercise-6:(join and split)
//========================================================================
const joinInArray = num2.join('-');
console.log(joinInArray); // output will be string

const str = 'I am kawser';
console.log(str.split(' ')); // output will be string