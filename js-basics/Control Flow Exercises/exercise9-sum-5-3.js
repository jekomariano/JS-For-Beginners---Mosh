console.log(sum(10));

function sum(limit) {
  let value = 0;
  for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0) value += i;
    if (i % 5 === 0) value += i;
  }
  return value;
}

// ============= ANSWER FROM TUTORIALS ============ \\

function sumAnswer(limit) {
  let sum = 0;
  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) sum += i;
  }
  return sum;
}
