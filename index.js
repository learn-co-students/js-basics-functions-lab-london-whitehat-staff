// Code your solution in this file!

const hq = 42
const blockLength = 264

const distanceFromHqInBlocks = block => Math.abs(hq - block)
const distanceFromHqInFeet = block => {
    return distanceFromHqInBlocks(block) * blockLength
}
const distanceTravelledInFeet = (blockA, blockB) => {
    return Math.abs(blockA - blockB) * blockLength
}
const calculatesFarePrice = (from, to) => {
    const ft = distanceTravelledInFeet(from, to)
    const chargable = ft - 400
    if (chargable < 1) return 0
    if (chargable < (2000 - 400)) return (chargable * 2) / 100
    if (chargable < (2500 - 400)) return 25
    return 'cannot travel that far'
}