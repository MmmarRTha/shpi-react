/**
 * This function calculates the total price of the items of a new order.
 * @param {Array} items cart: Array of objects
 * @returns {number} Total price
 */
export const totalPrice = (items) => { 
    const sum = items.reduce((acc, item) => acc + item.price, 0);
    return sum.toFixed(2);
}