// Define a function to creat a car object with optimal options...
function creat_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // Initialize a car object with manufacturer and model
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    // Add additional options to car object
    options.forEach(function (option) {
        var _a = option.split(":"), Key = _a[0], value = _a[1];
        car[Key.trim()] = value.trim();
    });
    return car;
}
// call the function to create a car object
var my_car = creat_car("Toyota", "Corolla", "Color: Black", "Sunroof: True", "Year: 2024");
// Print the variables to ensure all the information is stored correctly in the car object
console.log(my_car);
