// API Request --------------------------------------------------------------------------------------------------------------
// functions to fetch product data from dummyjson.com

async function fetchProducts(product: string): Promise<Product[]> {
    try {
        const response = await fetch(`https://dummyjson.com/products/search?q=${product}`); //fetching product data from api
        const data = await response.json(); // using .json() to turn the data object

        // looping through the products array and for each item we are creating a new instance of the Product.
        return data.products.map((item: any) => {
            return new Product(
                item.id,
                item.title,
                item.price,
                item.discountPercentage,
                item.category
            );
        });

    } catch {
        console.error("Error fetching product data", Error);
        return []; // return an empty array if there was an error fetching
    }
}

//console.log(fetchProducts("laptop")); // example of fetching laptop data from api, can change the search term to test with different products