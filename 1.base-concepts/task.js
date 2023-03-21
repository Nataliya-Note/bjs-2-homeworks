"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) return arr;

  if (discriminant === 0) {
    const r = -b / (2 * a);
    arr.push(r);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
   for (let arg of arguments) {
    if (isNaN(arg)) return 'Please provide correct values.';
  }

  const monthlyPercent = percent / 100 / 12;
  const loanToPay = amount - contribution;
  const paymentPerMonth = loanToPay * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1)));

  return parseFloat((paymentPerMonth * countMonths).toFixed(2));
}
