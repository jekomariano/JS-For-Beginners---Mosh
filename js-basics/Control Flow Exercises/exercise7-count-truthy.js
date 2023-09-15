const array = [0, null, undefined, "", 2, 3];

console.log(countTruthy(array));

function countTruthy(array) {
  let count = 0;
  for (let i = 0; i <= array.length; i++) {
    if (array[i]) count++;
  }

  return count;
}

// ============= ANSWER FROM TUTORIALS ============ \\

function countTruthyAnswer(array) {
  let count = 0;
  for (let value of array) {
    if (array[i]) {
      count++;
    }
  }
  return count;
}
