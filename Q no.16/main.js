//  creating a guest list array
var guestList = ["Qirat", "Faheem", "Ayesha", "Areeba"];
// making variable for those who cant come
var dontcome = guestList[0];
// printing tha name of guest of can not come
console.log(dontcome, "Nai Ahh Skti");
// add or remove values from guestlist array
guestList.splice(0, 1, "Sana");
// message print for bigger dinner table
console.log("Good News ! We have a Bigger Table For Dinner");
// adding a new guest at starting index of array
guestList.unshift("Ali");
// adding a new guest at ending index of array
guestList.push("Zainab");
// get a middle indexof our guest list array 
var middleIndex = Math.floor(guestList.length / 2);
// adding a new guest at a middle index of array
guestList.splice(middleIndex, 0, "Isneha");
console.log("Updated List of our Guests");
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to Dinner with me?")); });
