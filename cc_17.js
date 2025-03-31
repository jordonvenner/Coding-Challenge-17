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


//Task 2

class SalesRep {
    constructor(name) {
        this.name = name;
        this.clients = [];
    }

    addClient(customer) {
        this.clients.push(customer);
    }

    getClientTotal(name) {
        const client = this.clients.find(client => client.name === name);
        return client ? client.getTotalSpent() : 0;
    }
}

// Log: Sales rep’s clients and total spent for a specific client
const salesRep = new SalesRep("Alice Smith");
const customer1 = new Customer("John Doe", "john@example.com");
customer1.addPurchase(50);
customer1.addPurchase(30);
salesRep.addClient(customer1);

const customer2 = new Customer("Jane Smith", "jane@example.com");
customer2.addPurchase(100);
salesRep.addClient(customer2);

console.log(`Total spent by John Doe: $${salesRep.getClientTotal("John Doe")}`);
console.log(`Total spent by Jane Smith: $${salesRep.getClientTotal("Jane Smith")}`);



//Task 3

class VIPCustomer extends Customer {
    constructor(name, email, vipLevel) {
        super(name, email);
        this.vipLevel = vipLevel;
    }

    getTotalSpent() {
        const total = super.getTotalSpent();
        return total * 1.10; // 10% bonus
    }
}

// Log: VIP customer's total spent with bonus
const vipCustomer = new VIPCustomer("James Wilson", "james@example.com", "Gold");
vipCustomer.addPurchase(200);
vipCustomer.addPurchase(150);
console.log(`VIP total spent (with bonus): $${vipCustomer.getTotalSpent()}`);

