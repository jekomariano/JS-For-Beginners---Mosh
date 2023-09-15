showStars(10);

function showStars(rows) {
  for (let i = 1; i <= rows; i++) {
    let star = "";
    for (let j = 1; j <= i; j++) {
      star += "*";
    }
    console.log(star);
  }
}

// ============= ANSWER FROM TUTORIALS ============ \\
function showStarsAnswer(rows) {
  for (let row = 1; row <= rows; row++) {
    let pattern = "";
    for (let i = 1; i < row; i++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}
