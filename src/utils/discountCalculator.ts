
//Discount Calculator Module --------------------------------------------------------------------------------------------------------------------------
// This module will be responsible for calculating the discount price for a product based on its original price and discount percentage.

export const calculateDiscount = (price: number, discountPercentage: number): number => {
    const discountPrice = price * (discountPercentage / 100); //the api data has discount percentage as a dedcimal, so I divided it by 100 to get the actual percentage value
    console.log(`Price With Discount: (${price - discountPrice})`);
    return price - discountPrice; //return the dollar amount that a product is discounted by
}