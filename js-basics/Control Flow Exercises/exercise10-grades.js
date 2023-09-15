const marks = [80, 80, 50];

calculateGrade(marks);

function calculateGrade(marks) {
  let totalGrade = 0;
  for (let grade of marks) {
    totalGrade += grade;
  }

  const average = totalGrade / marks.length;

  if (average < 60) console.log("F");
  if (average < 70 && average >= 60) console.log("D");
  if (average < 80 && average >= 70) console.log("C");
  if (average < 90 && average >= 80) console.log("B");
  if (average >= 90) console.log("A");
}

// ============= ANSWER FROM TUTORIALS ============ \\

function calculateGradeAnswer(marks) {
  const average = calculateAverage(marks);
  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
}

function calculateAverage(array) {
  let sum = 0;
  for (let value of array) {
    sum += value;
  }
  return sum / marks.length;
}
