showNumbers(-5);

function showNumbers(given) {
  if (typeof given !== "number" || given < 0)
    console.log("given is not a valid number!");

  for (let i = 0; i <= given; i++) {
    const isEven = i % 2 === 0;

    if (isEven) console.log(i, "EVEN");
    else console.log(i, "ODD");
  }
}

// ============= ANSWER FROM TUTORIALS ============ \\

function showNumbersAnswwer(limit) {
  for (let i = 0; i <= limit; i++) {
    const message = i % 2 === 0 ? "EVEN" : "ODD";
    console.log(i, message);
  }
}
