// Code your solution in this file!

function distanceFromHqInBlocks(block) {
  let distance = 42 - block;
  if(distance < 0) {
  distance = distance * -1;
  }return distance;
}

function distanceFromHqInFeet(block) {
  feet = distanceFromHqInBlocks(block) * 264;
  return feet;
}

function distanceTravelledInFeet(to, from) {
  feet = distanceFromHqInFeet(from) - distanceFromHqInFeet(to);
  return feet;
}

function calculatesFarePrice(destination, start) {
  fareGenerated = distanceTravelledInFeet(destination, start);
  if(fareGenerated < 400) {
    fareGenerated = 0;
  }else if(fareGenerated <= 2000) {
    fareGenerated = (fareGenerated - 400) * 0.02;
  }else if(fareGenerated > 2000 && fareGenerated < 2500) {
    fareGenerated = 25;
  }else{
    return 'cannot travel that far';
  }
    return fareGenerated;
  }



