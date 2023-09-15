console.log(checkSpeed(77));

function checkSpeed(speed) {
  const points = speed <= 70 ? 0 : Math.floor((speed - 70) / 5);
  if (points === 0) return "ok";
  else if (points < 12) return "Points: " + points;
  else return "License suspended!";
}

// ============= ANSWER FROM TUTORIALS ============ \\

function checkSpeedLimit(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    console.log("ok");
    return;
  }
  const points = Math.floor((speed - speedLimit) / kmPerPoint);

  if (points >= 12) {
    console.log("License supended!");
  } else {
    console.log("Points:", points);
  }
}
