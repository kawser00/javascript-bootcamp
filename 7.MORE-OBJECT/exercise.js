//Exercise-1:(Object Methods)
//================================================================
const product = {
  name: "I-Phone",
  price: 1000,
  "is available": true,
  productInfo() {
    return `${this.name} - $${this.price}`;
  },
};
console.log(product.productInfo());

//Exercise-2:(Factory function)
//================================================================
function product1(name, price, availability) {
  return {
    name,
    price,
    "is available": availability,
    productInfo() {
      return `${this.name} - $${this.price}`;
    },
  };
}

console.log(product1("TV", 3000, true));
console.log(product1("Refrigerator", 2000, false));
console.log(product1("Mobile", 5000, true).productInfo());

//Exercise-3:(Constructor function)
//================================================================
function Product(name, price) {
  this.name = name;
  this.price = price;
  this.productInfo = function () {
    return `${this.name} - $${this.price}`;
  };
}

const product2 = new Product("Camera", 450);
console.log(product2.name);
console.log(product2.productInfo());

//Exercise-4:(call, bind, apply)
//================================================================
const profile = {
  name: "Kawser",
  age: 22,
};

function profileInfo(profession, favorite) {
  return `I am ${this.name}. I am ${this.age}. I am a ${profession} and I love ${favorite}.`;
}

const profileBind = profileInfo.bind(profile);
console.log(profileBind("web developer", "Javascript"));

const profileCall = profileInfo.call(profile, "web developer", "Javascript");
console.log(profileCall);

const profileApply = profileInfo.apply(profile, [
  "web developer",
  "Javascript",
]);
console.log(profileApply);

//Exercise-5:(this binding)
//================================================================
const profileInfo1 = function (profession, favorite) {
  return `I am ${this.name}. I am ${this.age}. I am a ${profession} and I love ${favorite}.`;
}.bind(profile, "web developer", "Javascript");

console.log(profileInfo1());

//Exercise-6:(pass by value VS pass by reference)
//================================================================
let a = 20;

function passByValue(a) {
  let b = a;
  b = 30;
}
passByValue(a);
console.log(a); //20

const aObj = {
  value: 20,
};

function passByReference(aObj) {
  let bObj = aObj;
  bObj.value = 30;
}
passByReference(aObj);
console.log(aObj.value); //30
