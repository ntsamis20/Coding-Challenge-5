// Task 1 Create Inventory array
const Inventory = [
    { name: 'Water', price: 2, quantity: 18 },
    { name: 'Lemonade', price: 4, quantity: 10 },
    { name: 'Tea', price: 4, quantity: 12 },
    { name: 'Coffee', price: 5, quantity: 16 }
];

// Task 2 Create Orders Array of Orders Objects
let orders = [];
let order = {
    customerName: "Peter Griffin",
    items: [
        {name: "Water", quantity: 3},
        {name: "Lemonade", quantity: 2}
    ],
    status: "Pending"
};

// Task 3 Create Function to place order
function placeOrder(customerName, orderedItems) {
    for (let item of orderedItems) {
        let product = Inventory.find(p => p.name === item.name);

        if(!product) {
            console.log(`Error: ${item.name} is not available.`);
        }

        if (product.stock < item.quantity) {
            console.log (`Error: Insufficient stock for ${item.name}. Available: ${product.stock}, Ordered: ${item.quantity}`);
            return;
        }
    }

    for (let item of orderedItems) {
        let product = inventory.find(p => p.name === item.name);
        product.stock -= item.quantity;
    }

    let newOrder = {
        customerName: customerName
        ,items: orderedItems
        ,status: "Pending"
    };

    orders.push(newOrder);
    console.log(`Order placed successfully for ${customerName}.`);
}

placeOrder("Peter Griffin", [
    { name: "Water", quantity: 3 },
    { name: "Lemonade", quantity: 2 }
]);

placeOrder("Stewie", [
    { name: "Water", quantity: 12 }
]);
// Task 4 Create Function to calculate total for Order
function calculateOrderTotal(order) {
    let total = 0;
    if (product) {
        total += product.price * item.quantity;
    } else {
        console.log (`Error: ${item.name} not found.`);
    }
}
return total;

//Task 5 create complete order function

function completeOrder(customerName) {
    let order = orders.find(o => o.customerName === customerName);

    if (order) {
        order.status = "Completed";
        console.log(`Order for ${customerName} complete.`);
    } else {
        console.log(`Error: No order found ${customerName}.`);
    }
}

// Task 6 Create pending orders function
function checkPendingOrders() {
    let pendingOrders = orders.filter(order => order.status === "pending");
    if (pendingOrders.length === 0) {
        console.log("No pending orders.");
        return;

     }
     console.log("Pending Orders:");
     pendingOrders.forEach(order => {
        console.log(`Customer: ${order.customerName}`);
        console.log ("items ordered:");
        order.items.forEach(item => {
            console.log (`- ${item.name}: ${item.quantity}`);
        });
        console.log("Status:", order.status);
        console.log("--------------------");
     });
}