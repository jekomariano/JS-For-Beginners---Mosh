const numbers = arrayfromRange(1, 4);

console.log(numbers);

function arrayfromRange(min, max) {
  const numbers = [];
  for (let i = min; i <= max; i++) {
    numbers.push(i);
  }
  return numbers;
}
// ============= ANSWER FROM TUTORIALS ============ \\

// same from my answer
