
//Discount Calculator Module --------------------------------------------------------------------------------------------------------------------------
// This module will be responsible for calculating the discount price for a product based on its original price and discount percentage.

export const calculateDiscount = (price: number, discountPercentage: number): number => {
    const discountPrice = price * (discountPercentage / 100); //the api data has discount percentage as a dedcimal, so I divided it by 100 
    //console.log(`Price Discounted By: $${discountPrice.toFixed(2)}`); // .toFixed(2): round the discount price to 2 decimal places
    return discountPrice; //return the dollar amount that a product is discounted by
}


