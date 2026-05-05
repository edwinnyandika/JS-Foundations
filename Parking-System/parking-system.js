// parking-system.js
const { calculateParkingFee } = require('./validator.js');

// Test data
const testCases = [
    { hours: 1, label: "Short stay" },
    { hours: 2, label: "Max base rate" },
    { hours: 5, label: "Long stay" },
    { hours: -1, label: "Invalid test" },
    { hours: "three", label: "Non-numeric test" },
    { hours: 0, label: "Zero hours test" },
    { hours: 2.5, label: "Fractional hours test" },
    { hours: 10, label: "Extended stay test"},
];

console.log("--- Parking Fee System ---");

testCases.forEach((test) => {
    const result = calculateParkingFee(test.hours);
    
    console.log(`Parking period: ${test.label} (${test.hours} hours)`);
    
    if (typeof result === "string") {
        console.log(`❌ Error: ${result}`);
    } else {
        console.log(`✅ Total Parking Fee: KES ${result}`);
    }
    console.log("--------------------------");
});