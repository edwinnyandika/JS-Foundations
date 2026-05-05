/**
 * Calculates the parking fee based on the number of hours parked.
 * @param {number} hours - Number of hours parked.
 * @returns {number|string} - The total fee or an error message.
 */

function calculateParkingFee(hours) {
    // 1. Validation
    if (typeof hours !== 'number' || hours <= 0) {
        return "Invalid duration. Please enter a positive number.";
    }

    // 2. Logic
    let totalFee;
    if (hours <= 2) {
        // First 2 hours: KES 50/hour
        totalFee = hours * 50;
    } else {
        // First 2 hours (100) + additional hours (remaining * 30)
        let firstTwoHours = 2 * 50;
        let additionalHours = (hours - 2) * 30;
        totalFee = firstTwoHours + additionalHours;
    }

    return totalFee;
}

// Export the function so app.js can use it
module.exports = { calculateParkingFee };