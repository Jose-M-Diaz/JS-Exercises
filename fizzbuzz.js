"use strict";

let num = 100; // make variable the final number to reach
for (let i = 1; i <= num; i++) {
  // for loop to iterate through numbers starting from 1 and ending at final number
  if (i % 15 === 0)
    console.log(
      "FIZZBUZZ"
    ); // if iterated number is divisible by 15 show fizzbuzz. If is not
  else if (i % 3 === 0)
    console.log(
      "FIZZ"
    ); // try checking if divisible by 3 to show fizz. If is not
  else if (i % 5 === 0)
    console.log("BUZZ"); // try checking if divisible by 5 to show Buzz. If none
  else console.log(i); // then just show the number iterated.
}
