let distanceFromHqInBlocks = blockNumber => {
    return Math.abs(blockNumber - 42)
};

let distanceFromHqInFeet = blockNumber => {
    let blocksAway = distanceFromHqInBlocks(blockNumber)
    return blocksAway*264
};

let distanceTravelledInFeet = (startBlock, endBlock) => {
    return Math.abs((endBlock - startBlock) * 264)
};

let calculatesFarePrice = (startBlock, endBlock) => {

    let distanceTravelled = distanceTravelledInFeet(startBlock, endBlock)

    if (distanceTravelled>2500) {return "cannot travel that far"}
    if (distanceTravelled<400) {return 0}
    if (distanceTravelled>2000) {return 25}
    if (distanceTravelled>400 && distanceTravelled<2000) {return (distanceTravelled - 400) * 0.02}
};