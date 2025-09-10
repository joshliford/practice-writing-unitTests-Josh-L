const shoppingCart = require('../cart.js');

let cart = [];

describe("addItem", function() {

    test("should return a success when cart, item, and quantity are specified", // Positive test case
function() {
    expect((shoppingCart.addItem(cart, "bananas", 2))).toBe("You have successfully added an item to the cart.");

});

    test("should return an error message when quantity is a negative number", // Negative test case
function() {
    expect((shoppingCart.addItem(cart, "bananas", -2))).toBe("Please enter a valid quantity.");

});

    test("should return an error message when quantity is zero", // Edge case
function() {
    expect((shoppingCart.addItem(cart, "bananas", 0))).toBe("Please enter a valid quantity.");

});

});

describe("removeItem", function() {

    test("should return a success message when an existing item is removed", // Positive test case
function() {
    expect(shoppingCart.removeItem(cart, "bananas")).toBe("You have successfully removed an item from the cart.");

});

    test("should return an error message when a non-existing item is attempted to be removed", // Negative test case
function() {
    expect(shoppingCart.removeItem(cart, "apples")).toBe("Item does not exist in the cart.");

});

});

describe("getTotalItems", function() {

    test("should return correct total number when cart has items in it", // Positive test case
function() {
    cart = [
        {name: "bananas", quantity: 3}
    ];
    expect(shoppingCart.getTotalItems(cart)).toBe(3);

});

    test("should return a zero when the cart has no items in it", // Negative test case
function() {
    cart = [];
    expect(shoppingCart.getTotalItems(cart)).toBe(0);

});

    test("should return correct total number when the cart has large quantities in it", // Edge case
function() {
    cart = [
        {name: "apples", quantity: 72}
    ];
    expect(shoppingCart.getTotalItems(cart)).toBe(72);

});

});