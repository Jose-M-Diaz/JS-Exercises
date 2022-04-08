// test
console.log("Hello World!");

const max = 57;
let actual = max - 13;
let percentage = actual / max;
console.log(percentage);

/**
 * The code below tells the browser to ask you for a number
 * then if that number is `6`, it returns `true` otherwise it returns `false`
 *
 * Change this code so it returns `true` when the number is greater than or equal to 10, and false if it is less than 10
 */

// number = Number(prompt("enter a number"));

// function numberChecker() {
//   if (number >= 10) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(numberChecker());

/**
 * Lets do some math!
 * Some rules first:
 *   Enter the operations, replacing the `"?"`, make the computer do the work for you.
 *   Do not manually enter the answer, for example: "one plus ten" would look like 1+10
 *
 * a = one plus eight
 * b = 22 times three
 * c = the *remainder* of 5/4
 * d = the variable 'a' minus 17
 * e = the sum of the previous four variables
 */

const a = 1 + 8;
const b = 22 * 3;
const c = 5 % 4;
const d = a - 17;
const e = a + b + c + d;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

/**
 * ===== Troubleshooting =====
 * The function below should log the number 2, however it does not,
 * see if you can fix it!
 * Be sure to fix it in the spirit of the code, do not hard code the result.
 */

function troubleshooting() {
  const a = 1;
  const b = 1;

  let result;

  // Edit between these lines
  // =================================
  result = a + b;

  // =================================

  return result;
}
console.log(troubleshooting());
