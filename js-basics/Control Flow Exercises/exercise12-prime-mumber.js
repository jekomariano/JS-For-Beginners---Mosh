showPrime(20);

function checkHasFactor(i) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      return true;
    }
  }
}

function showPrime(limit) {
  for (let i = 2; i <= limit; i++) {
    let hasFactor = checkHasFactor(i);
    if (!hasFactor) console.log(i);
  }
}

// ============= ANSWER FROM TUTORIALS ============ \\
function showPrimeAnswer(limit) {
  for (let number = 2; i <= limit; i++) {
    if (isPrime(number)) console.log(number);
  }
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++) {
    if (number % factor === 0) return false;

    return true;
  }
}
