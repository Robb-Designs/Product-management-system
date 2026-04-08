// Tax Calculator Module --------------------------------------------------------------------------------------------------------------------------

export const calculateTax = (price: number, category: string): number => {
    let taxRate: number;
    
    // usedd switch: basically cleaner if statement
    //groceries are taxed at a lower rate, all others use default rate
    switch (category) {
        case "groceries":
            taxRate = 3;
            break;
        default:
            taxRate = 4.75;
    }

    const taxedPrice = price * (taxRate / 100);

    return Number(taxedPrice.toFixed(2)); // returns the tax amount, rounded to 2 decimal places
}

//console.log(calculateTax(100, "groceries"));

