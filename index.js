// Code your solution in this file!
const hQ = 42;
const oneBlockDistance = 264;
const distanceFromHqInBlocks = (block) => {
  let blocks;
  if(block > 42){
    blocks = block - hQ;
  } else {
    blocks = hQ - block;
  }
  return blocks;
};


const distanceFromHqInFeet = (block) => {
  return distanceFromHqInBlocks(block) * oneBlockDistance;
};

const distanceTravelledInFeet = (startingBlock, endingBlock) => {
  let numberOfBlocks = Math.abs(endingBlock - startingBlock);
  return numberOfBlocks * oneBlockDistance;
};

const calculatesFarePrice = (startingBlock, endingBlock) => {
  const freeDistance = 400;
  const distance = distanceTravelledInFeet(startingBlock, endingBlock);
  if(distance < 400) {
    return 0;
  } else if(distance > 400 && distance < 2000) {
    return (distance - freeDistance) * 0.02;
  } else if(distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
