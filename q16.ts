let guests23: string[] = ["Alberto", "sania", "Leonardo decarprio"];
console.log("Great news! I found a bigger dinner table!");

// Adding more guests
guests23.unshift("Isaac alexender");
guests23.splice(guests23.length / 2, 0, "Charles Darwin");
guests23.push("Ana de armas");

guests23.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});