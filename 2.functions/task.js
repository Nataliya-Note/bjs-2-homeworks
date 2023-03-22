'use strict';

function getArrayParams(...arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const sum = arr.reduce((acc, next) => acc + next, 0);
  const avg = parseFloat((sum / arr.length).toFixed(2));

  return { min, max, avg };
}

function summElementsWorker(...arr) {
  if (!arr.length) {
    return 0;
  }

  return arr.reduce((acc, next) => acc + next, 0);
}

function differenceMaxMinWorker(...arr) {
  if (!arr.length) {
    return 0;
  }

  return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
  if (!arr.length) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let el of arr) {
    if (el % 2 === 0) {
      sumEvenElement += el;
    }
    else {
      sumOddElement += el;
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (!arr.length) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let el of arr) {
    if (el % 2 === 0) {
      sumEvenElement += el;
      countEvenElement++;
    }
  }

  return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = [];
  for (let arr of arrOfArr) {
    maxWorkerResult.push(func(...arr));
  }

  return Math.max(...maxWorkerResult);
}