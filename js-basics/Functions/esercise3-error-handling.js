try {
  const numbers = [1, 2, 3, 4, 1, 1];
  const output = countOccurence(true, 1);
  console.log(output);
} catch (error) {
  console.log(error.message);
}

function countOccurence(array, searchElement) {
  if (!Array.isArray(array)) throw Error("First argument should be an array.");

  array.reduce((accumulator, current) => {
    const occurence = current === searchElement ? 1 : 0;
    return accumulator + occurence;
  }, 0);
}
// ============= ANSWER FROM TUTORIALS ============ \\

// same as my answer
