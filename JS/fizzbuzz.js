"use strict";

let input = parseInt(prompt("Please enter a number for fizzBuzz."));
for (let i = 0; i <= input; i++) {
  // console.log(i);
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
