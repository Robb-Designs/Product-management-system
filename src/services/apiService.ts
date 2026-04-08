// IMPORTS --------------------------------------------------------------------------------------------------------------
import { Product } from "../models/Product.js";


// API Request --------------------------------------------------------------------------------------------------------------
// functions to fetch product data from dummyjson.com

export async function fetchProducts(product: string): Promise<Product[]> {
    try {
        const response = await fetch(`https://dummyjson.com/products/search?q=${product}`); //fetching product data from api
        const data = await response.json(); // using .json() to turn the data object

        // looping through the products array and for each item we are creating a new instance of the Product.
        return data.products.map((item: any) => {
            // console.log(item.title);
            // console.log(item.price);
            return new Product(
                item.id,
                item.title,
                item.price,
                item.discountPercentage,
                item.category
            );
        });

    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Error fetching product data:", error.message);
        } else {
            console.error("Unknown error occurred...");
        }
        return [];
    }
}

//fetchProducts("phone"); // example of fetching laptop data from api, can change the search term to test with different products