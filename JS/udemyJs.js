"Use Strict";

//Write function called 'calcTip' that takes any bill value as an input and returns the corresponding tip: Tip 15% if bill between 50 and 300 and if different tip 20%
const calcTip = (billValue) => {
  if (billValue >= 50 && billValue <= 300) {
    let finalBill = billValue + billValue * 0.15;
    return finalBill.toFixed(2);
  } else {
    let finalBill = billValue + billValue * 0.2;
    return finalBill.toFixed(2);
  }
};
console.log(calcTip(100));
console.log(calcTip(50));
console.log(calcTip(300));
console.log(calcTip(20));
console.log(calcTip(11.45));
