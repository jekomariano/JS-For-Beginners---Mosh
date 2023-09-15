const numbers = [1, 2, 3, 4];

const output = except(numbers, [1, 4]);

console.log(output);

function except(array, excluded) {
  return array.filter((element) => !excluded.includes(element));
}
// ============= ANSWER FROM TUTORIALS ============ \\

function exceptAns(array, excluded) {
  const output = [];

  for (let element of array)
    if (!excluded.includes(element)) output.psush(element);

  return output;
}
