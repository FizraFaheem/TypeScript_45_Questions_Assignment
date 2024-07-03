// Define a function to creat a car object with optimal options...
function creat_car(manufacturer, model, ...options){
    // Initialize a car object with manufacturer and model
    let car = {
        manufacturer: manufacturer,
        model: model,
    };
    // Add additional options to car object
    options.forEach(option => {
        let [Key, value] = option.split(":");
        car[Key.trim()] = value.trim();
    });
    return car;
}

// call the function to create a car object
let my_car = creat_car("Toyota", "Corolla", "Color: Black", "Sunroof: True", "Year: 2024");

// Print the variables to ensure all the information is stored correctly in the car object
console.log(my_car); 

