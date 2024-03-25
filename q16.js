"use strict";
let guests23 = ["Alberto", "sania", "Leonardo decarprio"];
console.log("Great news! I found a bigger dinner table!");
// Adding more guests
guests.unshift("Isaac alexender");
guests.splice(guests23.length / 2, 0, "Charles Darwin");
guests.push("Ana de armas");
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
