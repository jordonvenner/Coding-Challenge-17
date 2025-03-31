//Task 1

class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.purchaseHistory = [];
    }

    addPurchase(amount) {
        this.purchaseHistory.push(amount);
    }

    getTotalSpent() {
        return this.purchaseHistory.reduce((total, amount) => total + amount, 0);
    }
}

// Log: New customer creation and total spent after purchases
const customer = new Customer("John Doe", "john@example.com");
customer.addPurchase(50);
customer.addPurchase(30);
console.log(`Total spent: $${customer.getTotalSpent()}`);
