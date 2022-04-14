"Use Strict";

//Write function called 'calcTip' that takes any bill value as an input and returns the corresponding tip: Tip 15% if bill between 50 and 300 and if different tip 20%
const calcTip = (billValue) => {
  if (billValue >= 50 && billValue <= 300) {
    let tip = billValue * 0.15;
    return tip.toFixed(2);
  } else {
    let tip = billValue * 0.2;
    return tip.toFixed(2);
  }
};
console.log(calcTip(100));
console.log(calcTip(50));
console.log(calcTip(300));
console.log(calcTip(20));
console.log(calcTip(11.45));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
