"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = b ** 2 - 4 * a * c;

  if (discriminant === 0) {
    const root = -b / (2 * a);
    arr.push(root);
  }

  if (discriminant > 0) {
    const root1 = (-b + Math.sqrt(discriminant) )/(2*a);
    const root2 = (-b - Math.sqrt(discriminant) )/(2*a);
    arr.push(root1, root2);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
   for (let arg of arguments) {
    if (isNaN(arg)) {
      return false;
    }
  }

  const monthlyPercent = percent / 100 / 12;
  const loanToPay = amount - contribution;
  const paymentPerMonth = loanToPay * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1)));

  return parseFloat((paymentPerMonth * countMonths).toFixed(2));
}
