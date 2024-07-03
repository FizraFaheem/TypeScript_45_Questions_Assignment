let guestList = ["Qirat", "Faheem", "Ayesha", "Areeba"];
let dontcome = guestList[0];
console.log(dontcome, "Nai Ahh Skti");
guestList.splice(0,1,"Sana");
guestList.forEach(guestList => console.log(`Salam ${guestList},Would you like to Dinner with me?`));

