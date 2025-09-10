let cart = [];

// Adds an item to the cart
function addItem(cart, item, quantity) {
    if (quantity === 0 || quantity < 0) {
        return `Please enter a valid quantity.`;
    } else {
        cart.push({name: item, quantity: quantity});
    }
    return `You have successfully added an item to the cart.`;
}

// addItem(cart, "bananas", 3);

// Removes an item from the cart
function removeItem(cart, item) {
    let itemIndex = cart.findIndex(cartItem => cartItem.name === item);
    if (itemIndex === -1) {
        return `Item does not exist in the cart.`;
    } else {
        cart.splice(itemIndex, 1);
        return `You have successfully removed an item from the cart.`;
    }
}

// removeItem(cart, "bananas");

// Returns the total number of items in the cart
function getTotalItems(cart) {
    let totalItems = 0;
    for (let items of cart) {
        totalItems += items.quantity;
    }
    return totalItems;
}

console.log("Total items in the cart: ", getTotalItems(cart));

module.exports = {addItem, removeItem, getTotalItems};