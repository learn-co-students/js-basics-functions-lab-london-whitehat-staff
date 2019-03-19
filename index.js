// Code your solution in this file!

function distanceFromHqInBlocks(value) {
  return Math.abs(value - 42);
}

function distanceFromHqInFeet(value) {
  return Math.abs((value - 42) * 264);
}
function distanceTravelledInFeet(value1, value2) {
  return Math.abs((value1 - value2) * 264);
}
function calculatesFarePrice(start, destination) {
  let dist = Math.abs((start - destination) * 264);

  if (dist < 400) {
    return 0;
  } else if (dist < 2000) {
    return (dist - 400) * 0.02;
  } else if (dist < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
