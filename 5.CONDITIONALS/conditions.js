//if and else if statement
//================================================================
const age = 18;

if (age < 10 && age >= 1) {
  console.log("Stay home under your mom supervision");
} else if (age >= 10 && age < 15) {
  console.log("Try to gain knowledge from outside of home");
} else if (age >= 15 && age < 18) {
  console.log("Prepare to cast vote");
} else if (age >= 18) {
  console.log("Cast your vote");
} else {
  console.log("You are out of range");
}

//switch statement
//================================================================
const age2 = 18;

switch (age2) {
  case age2 < 10 && age2:
    console.log("Stay home under your mom supervision");
    break;
  case (age2 >= 10 && age2 < 15) && age2:
    console.log("Try to gain knowledge from outside of home");
    break;
  case (age2 >= 15 && age2 < 18) && age2:
    console.log("Prepare to cast vote");
    break;
  case age2 >= 18 && age2:
    console.log("Cast your vote");
    break;
  default:
    console.log("You are out of range");
}

// the value  of switch and case should be exact same value

//switch er moddhe ag2 er value ar case er value exact same value mila lagbe, mane age2 18 hole case o 18 hote hobe, tahole oi case ta kaj korbe

// age2 = 18(number), ((age2 < 10) && age2)=> (false && 18 => 18); so, now 18, 18 same value

