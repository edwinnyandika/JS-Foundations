// validator.js

function validateAirtimePurchase(phone, amount, balance, vault, space) {
    // 1. Validate Phone Number (10 digits)
    if (phone.length !== 10) {
        return "Invalid phone number length. Must be 10 digits.";
    }

    // 2. Validate Amount (Must be > 0)
    if (amount <= 0) {
        return "Invalid amount. Must be greater than zero.";
    }

    // 3. Validate Balance (Must be sufficient)
    if (balance < amount) {
        return "Insufficient balance.";
    }

    // 4. If all checks pass, return the new balance
    return balance - amount;
}

module.exports = { validateAirtimePurchase };