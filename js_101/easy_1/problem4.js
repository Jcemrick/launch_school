let rlSync = require('readline-sync');

const FEET_IN_METER = 10.7639;

console.log("Enter the room length in meters: ")
let lengthInMeter = rlSync.prompt();

console.log("Enter the room width in meters: ")
let widthInMeter = rlSync.prompt();

let areaInMeters = (lengthInMeter * widthInMeter);
let areaInFeet = (areaInMeters * FEET_IN_METER);

console.log(`The room area is ${areaInMeters} square meters and ${areaInFeet} square feet.`);
