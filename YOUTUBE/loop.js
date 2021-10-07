const product = [
  {productName: 'Banana', productPrice: 30, productQuantity:6, productIsAvailable: true},
  {productName: 'Apple', productPrice: 70, productQuantity:4, productIsAvailable: false},
  {productName: 'Orange', productPrice: 20, productQuantity:3, productIsAvailable: true},
]


function showProductInfo(product) {
  let singleProduct = '';

  let i = 0;
  while (i < product.length) {
    singleProduct += `
    ProductName: ${product[i].productName}, 
    productPrice: ${product[i].productPrice} , 
    productIsAvailable: ${product[i].productIsAvailable}
    `
    i++;
  }
  return singleProduct;
}

console.log(showProductInfo(product));



//array map function
const arr = ["I", "love", "K"];
const result = arr.map(el => el==="K" ? el.concat('!'): el)
console.log(result);