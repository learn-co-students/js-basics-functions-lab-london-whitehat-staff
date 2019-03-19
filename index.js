// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    return Math.abs(distance - 42);
}

function distanceFromHqInFeet(distance){
   blocks = distanceFromHqInBlocks(distance);
   return 264*blocks;
}

function distanceTravelledInFeet(street1, street2){
    return (Math.abs(street1 - street2)*264);
}

function calculatesFarePrice(start, destination){
   dist = distanceTravelledInFeet(start, destination);
   console.log(dist);
   if(dist <= 400){
        return 0;
   }else if (400 < dist && dist <= 2000){
        return ((dist-400)*0.02);
   }else if (2000 <dist && dist <= 2500){
       return 25;
   }else if (2500 < dist){
       return "cannot travel that far";
   }
}