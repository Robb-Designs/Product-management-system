// Tax Calculator Module --------------------------------------------------------------------------------------------------------------------------

export const calculateTax = (price: number): number => {
    const taxRate = 4.75
    const taxedPrice = price * (taxRate / 100);
    
    return Number(taxedPrice.toFixed(2)); // returns the tax amount, rounded to 2 decimal places
}

//console.log(calculateTax(100));

