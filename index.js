// Code your solution here
function findMatching(drivers, name) {
    const matchingDrivers = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
    return matchingDrivers;
}

function fuzzyMatch (drivers, query) {
    const fuzzy = drivers.filter(driver => driver[0] === query[0]);
    return fuzzy;
}

function matchName(drivers, str) {
    const match = drivers.filter(driver => driver.name === str );
    return match;
}