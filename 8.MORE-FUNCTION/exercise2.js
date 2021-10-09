
//Exercise-1:(count the truthy value)
//================================================================
const countTruthy = (array) => {
  let count = 0;

  for (value of array) {
    value && count++;
  }
  return count;
};
console.log(countTruthy([0, null, "0", "false", 3, false, undefined, "Hello"]));


//Exercise-2:(add numbers from array arguments)
//================================================================
const sum = (...numbers) => {
  let result = 0;

  if (Array.isArray(numbers[0])) {
    for (num of numbers[0]) {
      num && (result += num);
    }
  } else {
    return "Please provide an array of numbers";
  }

  return result;
};
console.log(sum([10, 20, 30]));
console.log(sum(10, 20, 30));
console.log(sum({ Num1: 10, Num2: 20, Num3: 30 }));

