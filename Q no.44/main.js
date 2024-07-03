// Define a function with a rest parameter that accept items arguments representing our sandwiches
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a Sandwich with the following items:");
    items.forEach(function (singleItem) { return console.log("-" + singleItem); });
    console.log("Now Enjoy Sandwich");
}
// Calling teh function 3 times with 3 diffferent number of arguments
makeSandwich("Chicken", "Cheese", "Mayo", "Ego");
makeSandwich("Bread", "Butter");
makeSandwich("Bread", "Butter", "Mayo", "Ego", "Cheese", "Chicken", "Lettuce", "Tomato");
