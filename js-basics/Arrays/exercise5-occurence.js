const numbers = [1, 2, 3, 4, 1, 1];

const output = countOccurence(numbers, 1);

console.log(output);

function countOccurence(array, searchElement) {
  const count = array.reduce((accumulator, currentValue) => {
    if (currentValue === searchElement) {
      console.log(accumulator);
      accumulator++;
    }
    return accumulator;
  }, 0);

  return count > 0 ? count : -1;
}

// ============= ANSWER FROM TUTORIALS ============ \\
function countOccurenceAns(array, searchElement) {
  array.reduce((accumulator, current) => {
    const occurence = current === searchElement ? 1 : 0;
    return accumulator + occurence;
  }, 0);
}
