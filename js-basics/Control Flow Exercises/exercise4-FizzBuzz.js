const output = fizzBuzz(8);

console.log(output);

function fizzBuzz(input) {
  // if (isNaN(input)) return "Not a number"; WRONG ANSWER

  if (typeof input != "number") return NaN;

  const divisibleBy3 = input % 3 === 0;
  const divisibleBy5 = input % 5 === 0;

  if (divisibleBy3 && divisibleBy5) {
    return "FizzBuzz";
  } else if (divisibleBy3 && !divisibleBy5) {
    return "Fizz";
  } else if (!divisibleBy3 && divisibleBy5) {
    return "Buzz";
  } else if (!divisibleBy3 && !divisibleBy5) {
    return input;
  }
}
