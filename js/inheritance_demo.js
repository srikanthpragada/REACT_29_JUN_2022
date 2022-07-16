// Superclass 
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    sellingPrice() {
        return this.price * 1.08; // 8% tax 
    }
}

// Subclass 
class DiscountedProduct extends Product  {
    constructor(name, price, discountRate) {
        super(name, price)    // call superclass's constructor 
        this.discountRate = discountRate;
    }
    // Override method in super class 
    sellingPrice() {
        let discount = this.price * this.discountRate / 100;
        let discounted_price = this.price - discount;
        let net_price = discounted_price * 1.08; // 8% tax
        return net_price;
    }
}

p = new Product("Dell XPS 9500", 2000000);
console.log(p.sellingPrice())

dp = new DiscountedProduct("Mac Pro", 2000000, 15);
console.log(dp.sellingPrice().toFixed(2))

