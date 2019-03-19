// Code your solution in this file!
function distanceFromHqInBlocks (someValue) {
  if (someValue < 42) {
    return 42 - someValue;
  } else {
    return someValue - 42;
  }
}
 
function distanceFromHqInFeet (someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
  if(startingBlock > endingBlock) {
    return (startingBlock - endingBlock) * 264;
  } else {
    return (endingBlock - startingBlock) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  const distInFeet = distanceTravelledInFeet(start, destination);

  if (distInFeet <= 400) {
    return 0;
  } else if (distInFeet > 400 && distInFeet <= 2000) {
    return  (distInFeet - 400) * 0.02;
  } else if (distInFeet > 2000 && distInFeet < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}