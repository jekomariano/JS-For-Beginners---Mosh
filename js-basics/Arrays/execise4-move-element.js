const numbers = [1, 2, 3, 4];

const output = move(numbers, 0, 0); // {2, 1, 3, 4}
console.log(output);

function move(array, index, offset) {
  if (offset > array.length || offset - index < 0) console.error("invalid!");

  const selectedElement = array[index];

  const filtered = array.filter((element) => element !== selectedElement);
  filtered.splice(offset, 0, selectedElement);
  return filtered;
}
// ============= ANSWER FROM TUTORIALS ============ \\

function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.error("invalid offset.");
    return;
  }

  const output = [...array];
  const element = output.splice(index, 1)[0];

  output.splice(position, 0, element);

  return output;
}
