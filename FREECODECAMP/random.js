function checkObj(obj, checkProp) {
  const hasProp = obj.hasOwnProperty(checkProp);

  if (hasProp) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}

console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"));
console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet"));
console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house"));
console.log(checkObj({city: "Seattle"}, "city"));
console.log(checkObj({city: "Seattle"}, "district"));
console.log(checkObj({pet: "kitten", bed: "sleigh"}, "gift"));