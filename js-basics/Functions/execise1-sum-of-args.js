const sumOfArguments = sumAns([1, 1], 2, 3, 4);

console.log(sumOfArguments);

function sum(...items) {
  return items.reduce((a, b) => {
    if (Array.isArray(b)) {
      for (let value of b) a += value;
    } else {
      a += b;
    }
    return a;
  }, 0);
}

// ============= ANSWER FROM TUTORIALS ============ \\
function sumAns(...items) {
  if (items.length === 1 && Array.isArray(items[0])) items = [...items];

  return items.reduce((a, b) => a + b);
}
