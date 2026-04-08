
// Base product class --------------------------------------------------------------------------------------------------------
class Product {
    id: number;
    title: string;
    price: number;
    discountPercentage: number;

    //creates a new product with the given id, name, price, and discount percentage
    constructor(id: number, title: string, price: number, discountPercentage: number) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.discountPercentage = discountPercentage;
    }

    //methods
    // display product details
    // will be using this for abstraction and polymorphism in the future when we create subclasses for different types of products
    displayDetails(): string {
        console.log(`Product ID: ${this.id}`);
        console.log(`Title: ${this.title}`);
        console.log(`Price: ${this.price}`);
        console.log(`Your Discount Rate: ${this.discountPercentage}`)
        return `Product ID: ${this.id}, Title: ${this.title}, Price: ${this.price}, Discount Rate: ${this.discountPercentage}`;
    }

}