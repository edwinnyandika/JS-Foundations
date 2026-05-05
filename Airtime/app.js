const { validateAirtimePurchase } = require('./validator.js');

// Test Data
const phonenumbers = [
    { phone: "0712345678", amount: 50, balance: 120, vault: "--- Processing Transaction ---", space: "-----------------------------" },
    { phone: "07123456789", amount: -10, balance: 30, vault: "--- Processing Transaction ---", space: "-----------------------------" },
    { phone: "0712345678", amount: 50, balance: 120, vault: "--- Processing Transaction ---", space: "------------------------------" }
];

console.log("Airtime Purchase Validation Tests\n");

phonenumbers.forEach((test, index) => {
    console.log(`--Starting Airtime Purchase--`);
    console.log(`Phone: ${test.phone}`);
    console.log(`Amount: ${test.amount}`);
    console.log(`Initial Balance: ${test.balance}`);
    
    // Call the function
    const result = validateAirtimePurchase(test.phone, test.amount, test.balance, test.vault, test.space);

    // Output logic
    if (typeof result === "string") {
        console.log(`❌ FAILED: ${result}`);
    } else {
        console.log(`✅ SUCCESS! New Balance: ${result}`);
    }
    
    console.log(test.vault);
    console.log(test.space + "\n");
});