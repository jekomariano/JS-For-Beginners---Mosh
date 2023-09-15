const numbers = [1, 2, 3, 4, 1, 1, 5];

const max = getMax(numbers);

console.log(max);

function getMax(array) {
  if (array.length === 0) return;

  return array.reduce((accumulator, current) => {
    return accumulator > current ? accumulator : current;
  }, 0);
}
// ============= ANSWER FROM TUTORIALS ============ \\
function getMaxAns(array) {
  if (array.length === 0) return;

  return array.reduce((a, b) => (a > b ? a : b));
}
