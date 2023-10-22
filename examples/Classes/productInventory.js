/*
Product Inventory Project -
Create an application which manages an inventory of products.
Create a product class which has a price, id, and quantity on hand.
Then create an inventory class which keeps track of various products and can sum up the inventory value.
*/

class Product {
    constructor(price, id, quantity) {
        this.price = price;
        this.id = id;
        this.quantity = quantity;
    }

    getTotalValue() {
        return this.price * this.quantity;
    }

    detailProduct() {
        console.log(`ID: ${this.id}, Price: $${this.price}, Quantity: ${this.quantity}`);
    }
}

class Inventory {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    removeProduct(productId) {
        const index = this.products.findIndex(product => product.id === productId);
        if (index != -1) {
            this.products.splice(index, 1);
        }
    }

    getInventoryValue() {
        return this.products.reduce((totalValue, product) => totalValue + product.getTotalValue(), 0);
    }

    listProducts() {
        this.products.forEach(product => {
            product.detailProduct();
        });
    }
}

const inventory = new Inventory();

const product1 = new Product(10.00, 1, 5);
const product2 = new Product(7.50, 2, 15);

inventory.addProduct(product1);
inventory.addProduct(product2);

console.log(`Inventory Total Value: $${inventory.getInventoryValue()}`);
console.log('Product list:');
inventory.listProducts();