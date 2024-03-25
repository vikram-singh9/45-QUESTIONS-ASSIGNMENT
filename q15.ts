let unableToAttend = "Haris";
console.log(`${unableToAttend} can not come to dinner`);

let newguest='saba aman';
guests[guests.indexOf(unableToAttend)]=newguest;

guests.forEach(guests=>{
    console.log(`dear ${guests} would you like to join me at dinner?`)})