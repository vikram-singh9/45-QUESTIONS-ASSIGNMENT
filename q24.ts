
console.log("Testing equality with strings:");
console.log("mango" == "mango");//expected true
console.log("apple" != "apple"); //expected false


console.log("Testing with lower case: as well as uppercase");
console.log("Apple".toLowerCase() == "apple"); //expected true
console.log("marvel".toUpperCase()== "Marvel");//expected false



console.log("Numerical tests:");
console.log(100 >= 25); //expected true
console.log(2 > 13); //expected false

console.log("Tests with `logical operators`:");
console.log(true && false); //expected false
console.log(true || false); //expected true

//testing in array
let avengers1 = ["tony stark", "wanda", "black panther"];
console.log("Is 'wanda' in avengers1?");
console.log(avengers1.includes("wanda")); ////expected true


console.log("Is 'hulk' not in avengers1?");
console.log(!avengers1.includes("hulk")); //expected true because we use ! before variable in console
