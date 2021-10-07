//Exercise-1:(see the output and Let's explain)
//================================================================
let num = 1;

while (num < 10) {
  console.log(num);
  num += 2;
} // Here, in each time loop, 2 will addition with the total amount of num value
// and will give the the odd numbers and loop ends when num value is greater than 10.

//Exercise-2:(see the output and Let's explain)
//================================================================
let num2 = 1;

while (num2 <= 20) {
  if (num2 % 4 == 0) {
    console.log(num2);
  }
  num2++;
} // Here, in each time loop, the number which is divisible by 4, will give the output.
// and will continue loop until the num2 value is equal or less than 20.

//Exercise-3:(see the output and Let's explain)
//================================================================
let num3 = 100;

// while (num3 < 150) {
//   console.log(num3 + 1);
//   num3--;
// } // Here, it is infinite loop. The num3 decrease 1 in each time loop, and
// never stop looping because the condition num3 is less than 150 is always true.

//Exercise-4:(print even numbers between 1 to 100)
//================================================================
let num4 = 1;

while (num4 <= 100) {
  if (num4 % 2 === 0) {
    console.log(num4);
  }
  num4++;
}

//print even numbers using for loop
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//Exercise-5:(run loop and add $ in each repetition)
//================================================================
let dollar = "";

for (let i = 1; i <= 6; i++) {
  dollar += "$";
  console.log(dollar);
}

//Exercise-6:(run specific string based on the condition)
//================================================================

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 3 !== 0 && i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
