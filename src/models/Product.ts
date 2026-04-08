// Imports ------------------------------------------------------------------------------------------------------------------------------------
import { calculateDiscount } from '../utils/discountCalculator.js';


// Base product class --------------------------------------------------------------------------------------------------------------------------
class Product {
    public id: number;
    public title: string;
    public price: number;
    public discountPercentage: number;

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
    displayDetails(): void {
        console.log(`Product ID: ${this.id}`);
        console.log(`Title: ${this.title}`);
        console.log(`Price: ${this.price}`);
        console.log(`Your Discount Rate: ${this.discountPercentage}`)
    }

    // getting the price with the discount calculator from our imported module being returned as a number
    getPriceWithDiscount(): number {
        const discountAmount = calculateDiscount(this.price, this.discountPercentage);
        return this.price - discountAmount; //returns the price after the discount ammount applied
    }

}