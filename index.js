// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    distance = 42 - blocks;
    if (distance < 0){
        distance = distance * -1;
    }
    return distance;
}

function distanceFromHqInFeet(feet){
    howManyFeet = distanceFromHqInBlocks(feet) * 264;
    return howManyFeet;
}

function distanceTravelledInFeet(travelFrom, travelTo){
    distanceTraveled = distanceFromHqInFeet(travelTo) - distanceFromHqInFeet(travelFrom);
    return distanceTraveled;
}

function calculatesFarePrice(travelFrom, travelTo){
    fareGenerated = distanceTravelledInFeet(travelFrom, travelTo);
    if(fareGenerated < 400){
        fareGenerated = 0;
    } else if(fareGenerated <= 2000){
        fareGenerated = (fareGenerated - 400) * 0.02;
    } else if(fareGenerated > 2000 && fareGenerated < 2500){
        fareGenerated = 25;
    } else{
        return "cannot travel that far";
    }
    return fareGenerated;
}