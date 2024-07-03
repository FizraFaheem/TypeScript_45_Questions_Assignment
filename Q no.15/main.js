var guestList = ["Qirat", "Faheem", "Ayesha", "Areeba"];
var dontcome = guestList[0];
console.log(dontcome, "Nai Ahh Skti");
guestList.splice(0, 1, "Sana");
guestList.forEach(function (guestList) { return console.log("Salam ".concat(guestList, ",Would you like to Dinner with me?")); });
